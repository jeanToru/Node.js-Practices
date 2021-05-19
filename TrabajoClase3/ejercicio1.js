console.log('process.argv', process.argv);
let myArgv = process.argv.slice(2);
const numero1 = Number(myArgv[0]);

function sumar(num1) {
        let suma = num1 * (num1 + 1) / 2;
        return suma;
}

console.log(sumar(numero1));