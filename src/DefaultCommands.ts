import {customIcons} from 'CustomIcons';

export const defaultCommands = {
  Callout: {
    obCommandID: 'obsidian-admonition:insert-callout',
    name: 'Callout',
    icon: {
      value: customIcons.larkCalloutIcon,
      isSvg: true,
    },
  },
  Table: {
    obCommandID: 'ob-table-enhancer:create-table-with-table-generator',
    name: 'Table',
    icon: {
      value: customIcons.larkTableIcon,
      isSvg: true,
    },
  },
  Flowchart: {
    obCommandID: 'obsidian-diagrams-net:app:diagrams-net-new-diagram',
    name: 'Flowchart',
    icon: {
      value: customIcons.larkFlowchartIcon,
      isSvg: true,
    },
  },
  Excalidraw: {
    obCommandID:
      'obsidian-excalidraw-plugin:excalidraw-autocreate-and-embed-new-tab',
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
  },
  Icon: {
    obCommandID: 'obsidian-icons-plugin:open-icons-plugin-modal',
    name: 'Icon',
    icon: {
      value: customIcons.larkSymbolicon,
      isSvg: true,
    },
  },
  Unicode: {
    obCommandID: 'unicode-search:search-unicode-chars',
    name: 'Unicode',
    icon: {
      value: customIcons.unicodeIcon,
      isSvg: true,
    },
  },
};
