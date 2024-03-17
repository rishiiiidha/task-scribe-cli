const yargs = require("yargs");
const notes = require("./notes.js");
yargs.version('1.1.0')
yargs.command({
  command: 'add',
  describe: 'add new task',
  builder: {
    title: {
      demandOption: true,
      describe: 'Enter the title of the note',
      type: 'string'
    },
    description: {
      demandOption: true,
      describe: 'Enter the description of the note',
      type: 'string'
    }
  },
  handler:  (argv)=> {
    notes.addNotes(argv.title, argv.description);
  }
});
yargs.command({
  command: 'remove',
  describe: 'delete existing note',
  builder: {
    title: {
      demandOption: true,
      describe: 'Enter the title of the note',
      type: 'string'
    }
  },
  handler:  (argv)=>{
    notes.removeNotes(argv.title);
  }
});
yargs.command({
  command: 'list',
  describe: 'view notes',
  handler:  ()=> {
    notes.viewNotes();
  }
});
yargs.parse();