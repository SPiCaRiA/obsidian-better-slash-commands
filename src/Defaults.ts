import type {Settings} from 'Types';

import {customIcons} from 'CustomIcons';

export const DEFAULT_SETTINGS: Settings = {
  menuTriggerPrompt: '/',

  commands: {
    Callout: {
      id: 'obsidian-admonition:insert-callout',
      name: 'Callout',
      icon: {
        value: customIcons.makeMdCalloutIcon,
        isSvg: true,
      },
    },
  },
};
