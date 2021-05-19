console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);

const numero1 = Number(myArgv[0]);
const numero2 = Number(myArgv[1]);
const numero3 = Number(myArgv[2]);
const argumento = Number(myArgv.length);
console.log(promedio(numero1, numero2, numero3, argumento));

function promedio(n1, n2, n3, argumento) {
    let resultado = ((n1 + n2 + n3) / argumento);
    return `El promedio es: ${resultado}`;
}