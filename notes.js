const fs = require('fs');
const addNotes = (title, description) => {
  const notes = loadNotes();
  const duplicates = notes.filter(
    (note) => {
      return note.title === title;
    }
  )
  if (duplicates.length === 0) {
    notes.push({
      title: title,
      description: description
    });
    console.log("Note added");
  }
  else {
    console.log("Note already added");
  }
  saveNotes(notes);
}
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}
const loadNotes = () => {
  try {
    const loadData = fs.readFileSync('notes.json').toString();
    return JSON.parse(loadData);
  }
  catch (e) {
    return [];
  }
}
const removeNotes = (title) => {
  const notes = loadNotes();
  let flag = false;
  const filteredNotes = notes.filter((note) => {
    if (note.title === title) {
      flag = true;
      console.log("Note Removed");
    }
    return note.title !== title;
  })
  saveNotes(filteredNotes);
  if (!flag) {
    console.log("Note not found");
  }
}

const viewNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(`Note Title : ${note.title}`);
    console.log(`Note Description : ${note.description}`);
  });
}
module.exports = { addNotes: addNotes, removeNotes: removeNotes, viewNotes: viewNotes }