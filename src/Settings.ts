import type {Plugin} from 'Plugin.types';

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
      .setName('Setting #1')
      .setDesc("It's a secret")
      .addText(text =>
        text
          .setPlaceholder('Enter your secret')
          .setValue(this.plugin.getSettings('mySetting'))
          .onChange(async value => {
            console.log('Secret: ' + value);
            this.plugin.setSettings('mySetting', value);
            await this.plugin.saveSettings();
          }),
      );
  }
}
