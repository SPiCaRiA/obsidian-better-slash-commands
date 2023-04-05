export type Settings = {
  mySetting: string;
};

export type SettingsChangeCallback<K extends keyof Settings> = (
  newVal: Settings[K],
  oldVal: Settings[K],
) => void;
