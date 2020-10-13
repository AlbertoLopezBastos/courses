const fs = require('fs');

const yargs = require('yargs');
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create Add command
yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demand: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demand: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            notes.addNote(argv.title, argv.body);
        }
    }
)

// Create Remove command
yargs.command(
    {
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demand: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            notes.removeNote(argv.title);
        },
    }
)

// Create Read command
yargs.command(
    {
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Note title',
                demand: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            notes.readNote(argv.title);
        }
    }
)

// Create List command
yargs.command(
    {
        command: 'list',
        describe: 'List all notes',
        handler: () => {
            notes.listNotes();
        }
    }
)

yargs.parse();

