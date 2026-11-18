const {
  createNote,
  getNotesByUserId,
} = require("./noteRepository");

const {
  createNote: createNoteModel,
} = require("./noteModel");

function addNote(noteData) {
  const note = createNoteModel(noteData);

  createNote(note);

  return note;
}

function getUserNotes(userId, callback) {
  getNotesByUserId(userId, callback);
}

module.exports = {
  addNote,
  getUserNotes,
};