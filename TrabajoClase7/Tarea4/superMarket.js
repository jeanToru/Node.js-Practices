exports.superMarket = function (fruit) {

    let fruits = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];

    for (let i = 0; i < fruits.length; i++) {
        if (fruit == fruits[i]) {
            return 'La fruta se encuentra en la verdureria';
        }
    }
    return 'La fruta no se encuentra en la verdureria';
}