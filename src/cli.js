const utils = require('./utils');
const argv = process.argv.slice(2);

require('colors');

const help = () => {
  console.log(`
    \\****************************************/
    | cpf - copy file's content to clipboard |
    /****************************************\\
    
    c, copy <file> - copies file to clipboard
  `.blue)
};

const err = (t) => {
  console.log(`${t}`.red);
  process.exit(0);
}

const main = () => {
  if (argv.length < 1) {
    help();
    process.exit(0);
  }

  if (argv[0] === "c" || argv[0] === "copy") {
    if (argv.length < 2) {
      err('No arguments were given.');
    }

    utils.copy(argv[1]);
  }
};

module.exports = {
  main
}