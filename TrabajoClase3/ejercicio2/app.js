let myArgv = process.argv.slice(2);
const numero = Number(myArgv[0]);
const Additions = require('./additions')
console.log(Additions.determinar(numero));