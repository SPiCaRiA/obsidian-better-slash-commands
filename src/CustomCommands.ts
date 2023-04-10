import type {TFile} from 'obsidian';
import type {AppExt, CustomCommandExecMap, Plugin} from 'Types';

import {getApi} from '@aidenlx/folder-note-core';
import {moment} from 'obsidian';

async function attachmentUnderFolderNoteFolder(note: TFile, plugin: Plugin) {
  const api = getApi(plugin);

  if (api === undefined) {
    throw new Error(
      'Better Slash Command: failed to load folder-note-core APIs.',
    );
  }

  const folderNoteFolder = api.getFolderFromNote(note);
  if (folderNoteFolder === null) {
    // Not a folder note.
    console.log('create');
    await api.createFolderForNote(note);
  }
  // TODO: create attachment under folder note folder.
  return `${api.getFolderPath(note, false)}/${note.basename}-${moment()
    .format()
    .replaceAll(':', '.')}`;
}

function attachmentUnderSameFolder(note: TFile) {
  const notePath = note.path;
  return `${notePath.slice(0, -3)}-${moment().format().replaceAll(':', '.')}`;
}

async function createAttachmentPath(note: TFile | null, plugin: Plugin) {
  if (note === null) {
    throw new Error('Better Slash Command: cannot get active file.');
  }
  console.log(plugin.getSetting('attachmentUnderFolderNoteFolder'));

  // TODO: read setting from plugin
  return plugin.getSetting('attachmentUnderFolderNoteFolder')
    ? await attachmentUnderFolderNoteFolder(note, plugin)
    : attachmentUnderSameFolder(note);
}

/**
 * Insert a stub link of the attachment into active note and open the link to
 * create it.
 *
 * @param
 * @param {string} extension file extension of the attachment
 */
function createEmbedAttachment(app: AppExt, plugin: Plugin, extension: string) {
  const editor = app.workspace.activeEditor?.editor;
  if (!editor) {
    throw new Error('Better Slash Command: editor not found');
  }
  const cursor = editor.getCursor();

  // Create stub link to the canvas file.
  createAttachmentPath(app.workspace.getActiveFile(), plugin).then(
    attachmentPath => {
      console.log(attachmentPath);
      editor.replaceRange(
        `![[${attachmentPath}.${extension}]]`,
        cursor,
        cursor,
      );

      editor.setCursor({
        ...cursor,
        // Set cursor at first link character after `![[`
        ch: cursor.ch + 4,
      });

      // Create the actual canvas file by opening the link.
      app.commands.executeCommandById('editor:open-link-in-new-leaf');
    },
  );
}

export const customCommandExecMap: CustomCommandExecMap = {
  Canvas: (app, plugin) => createEmbedAttachment(app, plugin, 'canvas'),
};
