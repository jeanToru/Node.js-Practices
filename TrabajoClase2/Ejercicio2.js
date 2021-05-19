console.log('process.argv', process.argv)
let myArgv =process.argv.slice(2);

const numero1 = Number(myArgv[0]);
const numero2 = Number(myArgv[1]);
const numero3 = Number(myArgv[2]);

console.log(mayor(numero1, numero2, numero3));


function mayor(n1, n2, n3) {
    let a = n1;
    let b = n2;
    let c = n3;

    if (a > b) {
        if (a > c) {
            return `El Número es: ${a}`;
        } else {
            return `El Número es: ${c}`;
        }
    } else {
        if (b > c) {
            return `El Número es: ${b}`;
        } else {
            return `El Número es: ${c}`;
        }
    }
}
 
