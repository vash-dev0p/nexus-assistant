function createNote(noteData) {
  return {
    id: noteData.id || null,

    userId: noteData.userId,

    title: noteData.title || "",

    content: noteData.content || "",

    category:
      noteData.category || "personal",

    type:
      noteData.type || "note",

    createdAt: new Date(),

    updatedAt: new Date(),
  };
}

module.exports = {
  createNote,
};