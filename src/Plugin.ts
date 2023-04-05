import type {Settings, SettingsChangeCallback} from 'Settings.types';

import {DEFAULT_SETTINGS} from 'Defaults';
import {SampleSettingTab} from 'Settings';

import {Plugin} from 'obsidian';

// Remember to rename these classes and interfaces!

export default class MyPlugin extends Plugin {
  private settings: Settings;
  private settingsChangeCallbacks: {
    [settingsName in keyof Settings]?: SettingsChangeCallback<keyof Settings>[];
  } = {};

  public async onload() {
    await this.loadSettings();

    this.addSettingTab(new SampleSettingTab(this.app, this));
  }

  public onunload() {}

  private async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  public async saveSettings() {
    await this.saveData(this.settings);
  }

  // --- Setting Management ---

  public onSettingsChange<K extends keyof Settings>(
    settingsName: K,
    callback: SettingsChangeCallback<K>,
  ) {
    if (!this.settingsChangeCallbacks[settingsName]) {
      this.settingsChangeCallbacks[settingsName] = [];
    }
    this.settingsChangeCallbacks[settingsName]?.push(callback);
  }

  public getSettings<K extends keyof Settings>(settingsName: K) {
    return this.settings[settingsName];
  }

  public setSettings<K extends keyof Settings>(
    settingsName: K,
    val: Settings[K],
  ) {
    this.settingsChangeCallbacks[settingsName]?.forEach(cb =>
      cb(val, this.settings[settingsName]),
    );
    this.settings[settingsName] = val;
  }

  public getDefaultSettings<K extends keyof Settings>(settingsName: K) {
    return DEFAULT_SETTINGS[settingsName];
  }
}
