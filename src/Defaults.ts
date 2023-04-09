import type {Settings} from 'Types';

import {customIcons} from 'CustomIcons';

import {moment} from 'obsidian';

export const DEFAULT_SETTINGS: Settings = {
  menuTriggerPrompt: '/',

  commands: {
    Callout: {
      id: 'obsidian-admonition:insert-callout',
      name: 'Callout',
      icon: {
        value: customIcons.larkCalloutIcon,
        isSvg: true,
      },
    },
    Table: {
      id: 'ob-table-enhancer:create-table-with-table-generator',
      name: 'Table',
      icon: {
        value: customIcons.larkTableIcon,
        isSvg: true,
      },
    },
    Flowchart: {
      id: 'obsidian-diagrams-net:app:diagrams-net-new-diagram',
      name: 'Flowchart',
      icon: {
        value: customIcons.larkFlowchartIcon,
        isSvg: true,
      },
    },
    Excalidraw: {
      id: 'obsidian-excalidraw-plugin:excalidraw-autocreate-and-embed-new-tab',
      name: 'Excalidraw',
      icon: {
        value: customIcons.excalidrawIcon,
        isSvg: true,
      },
    },
    Canvas: {
      name: 'Canvas',
      icon: {
        value: customIcons.canvasIcon,
        isSvg: true,
      },
      exec: app => {
        const editor = app.workspace.activeEditor?.editor;
        if (!editor) {
          throw new Error(
            'Better Slash Command (Excalidraw): editor not found',
          );
        }
        const cursor = editor.getCursor();
        const activeFileName = app?.workspace?.getActiveFile()?.name;

        // Create stub link to the canvas file.
        editor.replaceRange(
          `![[${activeFileName} - ${moment().format()}]]`,
          cursor,
          cursor,
        );
        editor.setCursor(cursor, cursor.ch + 3 /* Set cursor after `![[` */);

        // Create the actual canvas file by opening the link.
        app.commands.executeCommandById('editor:open-link-in-new-leaf');
      },
    },
    Icon: {
      id: 'obsidian-icons-plugin:open-icons-plugin-modal',
      name: 'Icon',
      icon: {
        value: customIcons.larkSymbolicon,
        isSvg: true,
      },
    },
    Unicode: {
      id: 'unicode-search:search-unicode-chars',
      name: 'Unicode',
      icon: {
        value: customIcons.unicodeIcon,
        isSvg: true,
      },
    },
  },
};
