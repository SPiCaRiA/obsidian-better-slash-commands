import type {App} from 'obsidian';
import type Plugin from 'Plugin';

export {Plugin};

export type Commands = Record<string, Command>;

export type Settings = {
  menuTriggerPrompt: string;

  attachmentUnderFolderNoteFolder: boolean;

  attachmentExtensions: string[];

  commands: Commands;
};

export type Command = {
  obCommandID?: string;
  name: string;
  icon: {
    value: string;
    isSvg: boolean;
  };
};

export type CustomCommandExecMap = Record<
  string,
  (app: AppExt, plugin: Plugin) => void
>;

export type OnSettingChangeCallback<K extends keyof Settings> = (
  newVal: Settings[K],
  oldVal: Settings[K],
) => void;

export type AppExt = App & {
  commands: {
    executeCommandById: (id: string) => void;
  };
};
