exports.menu = function (opcion, numero1, numero2) {
    if (opcion === 1) {
        let suma = numero1 + numero2;
        return suma;
    } else if (opcion === 2) {
        let multipicacion = numero1 * numero2;
        return multipicacion;
    } else if (opcion === 3) {
        if (numero1 === 0 || numero2 === 0) {
            return 'Error';
        } else {
            let division = numero1 / numero2;
            return division;
        }
    } else if (opcion === 4) {
        let resta = numero1 - numero2;
        return resta;
    }
}