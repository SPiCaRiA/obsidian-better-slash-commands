import type {OnSettingChangeCallback, Settings} from 'Types';

import {CommandMenu} from 'CommandMenu';
import {DEFAULT_SETTINGS} from 'Defaults';
import {SampleSettingTab} from 'Settings';

import {Plugin} from 'obsidian';

// Remember to rename these classes and interfaces!

export default class MyPlugin extends Plugin {
  private settings: Settings;
  private onSettingChangeCallbacks: {
    [settingName in keyof Settings]?: OnSettingChangeCallback<keyof Settings>[];
  } = {};

  public async onload() {
    await this.loadSettings();

    this.addSettingTab(new SampleSettingTab(this.app, this));
    this.registerEditorSuggest(new CommandMenu(this.app, this));
  }

  public onunload() {}

  private async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  public async saveSettings() {
    await this.saveData(this.settings);
  }

  // --- Setting Management ---

  public onSettingChange<K extends keyof Settings>(
    settingName: K,
    callback: OnSettingChangeCallback<K>,
  ) {
    if (!this.onSettingChangeCallbacks[settingName]) {
      this.onSettingChangeCallbacks[settingName] = [];
    }
    this.onSettingChangeCallbacks[settingName]?.push(callback);
  }

  public getSetting<K extends keyof Settings>(settingName: K) {
    return this.settings[settingName];
  }

  /**
   * Set reference setting.
   *
   * @param settingName
   * @param refCallback
   */
  public setSetting<K extends keyof Settings>(
    settingName: K,
    valCallback: (ref: Settings[K]) => void,
  ): void;

  /**
   * Set value setting.
   *
   * @param settingName
   * @param val
   */
  public setSetting<K extends keyof Settings>(
    settingName: K,
    val: Settings[K],
  ): void;

  public setSetting<K extends keyof Settings>(
    settingName: K,
    valOrCallback: Settings[K] | ((ref: Settings[K]) => void),
  ) {
    if (typeof valOrCallback === 'function') {
      // Update the reference setting with the callback.
      valOrCallback(this.settings[settingName]);
      // The new value/old value args passed to onSettingChange callbacks
      // are the same
      this.onSettingChangeCallbacks[settingName]?.forEach(cb =>
        cb(this.settings[settingName], this.settings[settingName]),
      );
    } else {
      this.onSettingChangeCallbacks[settingName]?.forEach(cb =>
        cb(valOrCallback, this.settings[settingName]),
      );
      this.settings[settingName] = valOrCallback;
    }
  }

  public getDefaultSetting<K extends keyof Settings>(settingName: K) {
    return DEFAULT_SETTINGS[settingName];
  }
}
