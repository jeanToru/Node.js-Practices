exports.determinar = function(numero) {
    if (numero === 100 || numero > 100) {
        return 'El número tiene 3 dígitos';
    } else {
        return 'El número no tiene 3 dígitos';
    }
}