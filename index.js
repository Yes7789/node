const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("What's my name? ", (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});
