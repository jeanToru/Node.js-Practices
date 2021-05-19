let myArgv = process.argv.slice(2);
const opcion = Number(myArgv[0]);
const numero1 = Number(myArgv[1]);
const numero2 = Number(myArgv[2]);
const Additions = require('./additions')
console.log(Additions.menu(opcion, numero1, numero2));