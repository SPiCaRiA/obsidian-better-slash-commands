import type {Settings} from 'Types';

import {defaultCommands} from 'DefaultCommands';

export const DEFAULT_SETTINGS: Settings = {
  menuTriggerPrompt: '/',

  attachmentUnderFolderNoteFolder: false,

  attachmentExtensions: [
    'canvas', // Core Plug-in: Canvas
    'svg', // Community Plug-in: Diagrams.net
    'excalidraw', // Community Plug-in: Excalidraw
    'tables', // Community Plug-in: Notion-Like Tables
  ],

  commands: defaultCommands,
};
