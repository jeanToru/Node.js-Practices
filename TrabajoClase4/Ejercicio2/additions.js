
exports.mediaVolumen = function (diametro, altura) {
    let radio = diametro / 2;
    let volumen = Math.PI * Math.pow(radio, 2) * altura;
    return volumen;
}