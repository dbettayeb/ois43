const fs = require('fs');
const message = "Hello, world!";
const variable = "some value";

// Check if file exists
if (fs.existsSync('/home/dbettaieb/Documents/dhia')) {
  // Append message to file
  fs.appendFileSync('/home/dbettaieb/Documents/dhia', `\n${message} ${variable}`);
} else {
  // Write message to file
  fs.writeFileSync('/home/dbettaieb/Documents/dhia', `${message} ${variable}`);
}
/*
const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('echo "Hello world" >> /home/dbettaieb/Documents/dhia', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
*/
