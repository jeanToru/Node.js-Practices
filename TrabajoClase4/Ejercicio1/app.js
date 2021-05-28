console.log("process.argv", process.argv)
let object = process.argv.slice(2);

const Additions = require('./additions');

Additions.media(object);