console.log('process.argv', process.argv)
let myArgv =process.argv.slice(2);

const numero1 = Number(myArgv[0]);
console.log(determino(numero1));

function determino(numero) {
    if (numero < 0) {
        return 'El numero es negativo';
    } else {
        return 'El numero es positivo';
    }
}