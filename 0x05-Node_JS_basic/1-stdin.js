const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const r1 = readline.createInterface({ input, output });

r1.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  r1.close();
});

console.log("This important software is now closing")
