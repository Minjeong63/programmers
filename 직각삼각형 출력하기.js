const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  const array = [
    "*",
    "**",
    "***",
    "****",
    "*****",
    "******",
    "*******",
    "********",
    "*********",
    "**********",
  ];

  for (let i = 1; i <= line; i++) {
    input.push(array[i - 1]);
  }
  rl.close();
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
});
