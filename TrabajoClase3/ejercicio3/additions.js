exports.temperatura = function (numero) {
    if (numero < 10) {
        return ' Hace mucho frío';
    } else if (numero >= 10 && numero <= 15) {
        return 'Hace poco frío';
    } else if (numero >= 16 && numero <= 24) {
        return ' Hace una temperatura normal';
    } else if (numero >= 25 && numero <= 30) {
        return 'Hace poco calor';
    } else if (numero > 30) {
        return 'Hace mucho calor';
    }
}