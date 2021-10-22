const ncp = require('copy-paste');
const fs = require('fs');

require('colors');

function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}

function fileCopied(color = "green") {
  console.log('File\'s content was successfully copied!'.green);
}

function copy(file) {
  const fileData = atob(fs.readFileSync(file));
  ncp.copy(fileData, () => {
    fileCopied();
  });
}

module.exports = {
  fileCopied,
  copy
}