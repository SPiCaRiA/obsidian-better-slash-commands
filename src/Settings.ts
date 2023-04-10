import type {Plugin} from 'Types';

import {App, PluginSettingTab, Setting} from 'obsidian';

export class BetterSlashCommandsSettingTab extends PluginSettingTab {
  plugin: Plugin;

  constructor(app: App, plugin: Plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const {containerEl} = this;

    containerEl.empty();

    new Setting(containerEl)
      .setName('Menu trigger prompt')
      .setDesc('Single character trigger is strongly recommended.')
      .addText(text =>
        text
          .setPlaceholder('/')
          .setValue(this.plugin.getSetting('menuTriggerPrompt'))
          .onChange(async value => {
            this.plugin.setSetting(
              'menuTriggerPrompt',
              value || this.plugin.getDefaultSetting('menuTriggerPrompt'),
            );
            await this.plugin.saveSettings();
          }),
      );

    new Setting(containerEl)
      .setName('Create attachments under folder note folder')
      .setDesc(
        ' If true, we mimic the behavior of notion: make current note a ' +
          'folder note (if it is not) and put newly created embedded ' +
          'attachments in the folder. (Requires folder-note-core plug-in). ' +
          'Otherwise, the attachments will be created in the same folder as ' +
          'the active note. ',
      )
      .addToggle(toggle =>
        toggle
          .setValue(this.plugin.getSetting('attachmentUnderFolderNoteFolder'))
          .onChange(async value => {
            this.plugin.setSetting('attachmentUnderFolderNoteFolder', value);
            await this.plugin.saveSettings();
          }),
      );

    // TODO: add/delete commands with GUI
    // new Setting(containerEl).setName('Commands').addButton(button => {
    //   button
    //     .setIcon(customIcons.cMenuToolBarAdd)
    //     .setTooltip('Add new command')
    //     .onClick(() =>
    //       this.plugin.setSetting('commands', ref => addCommand(ref)),
    //     );
    // });
  }
}
