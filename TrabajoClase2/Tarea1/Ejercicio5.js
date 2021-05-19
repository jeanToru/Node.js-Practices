console.log('process.argv', process.argv)
let myArgv =process.argv.slice(2);

const numero1 = Number(myArgv[0]);
const numero2 = Number(myArgv[1]);
console.log(division(numero1, numero2));

function division(n1, n2) {
    if( n1 === 0 || n2 === 0) {
        return 'Error'
    } else {
        let resultado = n1 / n2;
        return `El promedio es: ${resultado}`;
    }
}