import type {AppExt, Command, Plugin} from 'Types';

import {customCommandExecMap} from 'CustomCommands';

import jstyle from 'jstyle';
import {
  App,
  Editor,
  EditorPosition,
  EditorSuggest,
  EditorSuggestContext,
  EditorSuggestTriggerInfo,
  setIcon,
  TFile,
} from 'obsidian';

type RegExpMatch = RegExpMatchArray & {
  indices: {
    groups: {
      command: [number, number];
      promptAndCommand: [number, number];
    };
  };
  groups: {
    command: string;
    promptAndCommand: string;
  };
};

const styles = jstyle.create({
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },

  menuItemIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
      width: '1rem',
      height: '1rem',
    },
  },

  menuItemName: {
    flex: '1 1 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

function buildTriggerLineRegex(menuTriggerPrompt: string) {
  const escapedPrompt = menuTriggerPrompt.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&',
  );

  const temp = `.*?(?<promptAndCommand>${escapedPrompt}(?<command>.*))`;
  return new RegExp(temp, 'd');
}

export class CommandMenu extends EditorSuggest<Command> {
  private plugin: Plugin;
  private commands: Command[];
  private triggerLineRegex: RegExp;

  constructor(app: App, plugin: Plugin) {
    super(app);
    this.plugin = plugin;

    this.triggerLineRegex = buildTriggerLineRegex(
      this.plugin.getSetting('menuTriggerPrompt'),
    );

    // Update when the setting is changed.
    this.plugin.onSettingChange('menuTriggerPrompt', value => {
      this.triggerLineRegex = buildTriggerLineRegex(value);
    });

    this.commands = Object.values(this.plugin.getSetting('commands'));
  }

  public onTrigger(
    cursor: EditorPosition,
    editor: Editor,
    _file: TFile,
  ): EditorSuggestTriggerInfo | null {
    const currentLine = editor.getLine(cursor.line).slice(0, cursor.ch);

    const matchRes = currentLine.match(
      this.triggerLineRegex,
    ) as RegExpMatch | null;
    if (matchRes === null) {
      return null;
    }

    // Open the menu
    return {
      start: {
        ...cursor,
        // Starting ch of the prompt + command group
        ch: matchRes.indices.groups.promptAndCommand[0],
      },
      end: cursor,
      query: matchRes.groups.command,
    };
  }

  public getSuggestions(
    context: EditorSuggestContext,
  ): Command[] | Promise<Command[]> {
    return this.commands.filter(({name}) =>
      // Optimize the matching by removing white spaces and does case-insensitive
      // match.
      // Ideally, a fuzzy match might be the better implementation.
      name.toLowerCase().replace(' ', '').includes(context.query.toLowerCase()),
    );
  }

  public renderSuggestion(cmd: Command, el: HTMLElement): void {
    el.createDiv(
      {
        cls: jstyle(styles.menuItem),
        attr: {
          role: 'button',
        },
      },
      div => {
        const iconContainer = div.createDiv(jstyle(styles.menuItemIcon));
        if (cmd.icon.isSvg) {
          iconContainer.innerHTML = cmd.icon.value;
        } else {
          setIcon(iconContainer, cmd.icon.value);
        }

        div.createDiv(jstyle(styles.menuItemName)).setText(cmd.name);
      },
    );
  }

  public selectSuggestion(
    cmd: Command,
    _evt: MouseEvent | KeyboardEvent,
  ): void {
    // Delete trigger char and command query input.
    this.context?.editor.replaceRange('', this.context.start, this.context.end);

    if (cmd.obCommandID) {
      // Obsidian command.
      (this.plugin.app as AppExt).commands.executeCommandById(cmd.obCommandID);
    } else {
      customCommandExecMap[cmd.name](this.plugin.app as AppExt, this.plugin);
    }

    this.close();
  }
}
