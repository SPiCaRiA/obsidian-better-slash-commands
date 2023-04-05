import type {Plugin} from 'Types';

import {App, PluginSettingTab, Setting} from 'obsidian';

export class SampleSettingTab extends PluginSettingTab {
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
