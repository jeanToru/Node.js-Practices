console.log("process.argv", process.argv)
let object = process.argv.slice(2);
let diametro = Number(object[0]);
let altura = Number(object[1]);
const Additions = require('./additions');

console.log(Additions.mediaVolumen(diametro, altura));