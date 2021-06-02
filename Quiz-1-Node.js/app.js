console.log("process.argv", process.argv)
let numbers = process.argv.slice(2);

const Additions = require('./additions');

Additions.numbers(numbers);

