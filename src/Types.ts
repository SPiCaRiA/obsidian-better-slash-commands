import type {App} from 'obsidian';
import type Plugin from 'Plugin';

export {Plugin};

export type Commands = Record<string, Command>;

export type Settings = {
  menuTriggerPrompt: string;

  commands: Commands;
};

export type Command =
  | {
      id: string;
      name: string;
      icon: {
        value: string;
        isSvg: boolean;
      };

      // Custom command with JavaScript function.
      exec?: never;
    }
  | {
      id?: never;
      name: string;
      icon: {
        value: string;
        isSvg: boolean;
      };

      // Custom command with JavaScript function.
      exec: (app: AppExt) => void;
    };

export type OnSettingChangeCallback<K extends keyof Settings> = (
  newVal: Settings[K],
  oldVal: Settings[K],
) => void;

export type AppExt = App & {
  commands: {
    executeCommandById: (id: string) => void;
  };
};
