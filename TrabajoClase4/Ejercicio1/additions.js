let total = 0;

function mediaPositivos(positivos) {
    let media = 0;
    for (let i = 0; i < positivos.length; i++) {
        if (Math.sign(Number(positivos[i]))=== 1) {
            media += Number(positivos[i]);
        }
    }
    total = media/positivos.length;
    return total;
}

function mediaNegativos(negativos) {
    let media = 0;
    
    for (let i = 0; i < negativos.length; i++) {
        if (Math.sign(Number(negativos[i]))=== -1) {
            media += Number(negativos[i]);
        }
    }
    total = media/negativos.length;
    return total;
}

exports.media = function (object) {
    console.log(mediaNegativos(object));
    console.log(mediaPositivos(object));
}