const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {

    const notes = loadNotes();

    const duplicateNote = notes.find(note => note.title === title);


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.bold.inverse('New note added!'));
    }
    else {
        console.log(chalk.red.bold.inverse('Note title already exists!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length > notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.bold.inverse('Note Removed!'));
    }
    else {
        console.log(chalk.red.bold.inverse('Note not found!'));
    }
}


const readNote = (title) => {
    const storage = loadNotes();

    const note = storage.find(note => note.title === title)

    if (note) {
        console.log(chalk.blue.bold.inverse('Note Found!'));
        console.log(chalk.yellow(note.title));
        console.log(chalk.yellow(note.body));
    }

    else {
        console.log(chalk.red.bold.inverse('Note not found!'));
    }
}

const listNotes = () => {

    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note =>
        console.log(chalk.yellow(note.title))
    );
}

// reusable
const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const stringData = bufferData.toString();
        return JSON.parse(stringData);
    }
    catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const stringNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', stringNotOes);
}

module.exports = {
    loadNotes: loadNotes,
    addNote: addNote,
    listNotes: listNotes,
    removeNote: removeNote,
    readNote: readNote
};