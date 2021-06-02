// Cada function del programa recibe como parametro el array de 20 numeros
// 1 Funcion retorna el numero Mayor de todo el array
// 2 Funcion retorna el numero Menor de todo el array
// 3 Funcion retorna la suma de todo el array
// 4 Funcion retorna el array ordenado acendentemente

// Retornar numero mayor del arreglo
function largerNumber(myNumbers) {
    return Math.max.apply(null, myNumbers);
}

// Retornar numero menor del arreglo
function smallerNumber(myNumbers) {
    return Math.min.apply(null, myNumbers);
}

// Retornar la suma de los numeros del arreglo
function addNumbers(myNumbers) {
    // Declaro suma en 0 para poder sumarlo con recursividad
    let suma = 0;
    // Con un for recorre el array y lo suma de 1 a 1
    for (let i = 0; i < myNumbers.length; i++) {
        suma += Number(myNumbers[i]);
    }
    // Retornar la suma de todo el array
    return suma;
}

function lowToHigh(myNumbers) {
    // funcion que ayuda a ordenar los numeros de manera acendente
    function compare(a, b) {
        return a - b;
    }
    // retornamos el array ordenado de menor a mayor
    return myNumbers.sort(compare);
}

exports.numbers = function (object) {
    console.log(largerNumber(object));
    console.log(smallerNumber(object));
    console.log(addNumbers(object));
    console.log(lowToHigh(object));
}