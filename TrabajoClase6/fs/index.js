const fs = require('fs') // require siempre importa un módulo
let path = process.cwd();

const user = {
    "id": 1,
    "name": "Jean",
    "Age": 23
}

// Convertir el JSON a String
const data = JSON.stringify(user);
/*
fs.writeFile(`${path}/holamundo.json`, data, function (err, data) {
    if (err)
        return console.error(err)
    console.log("Archivo Creado y Salvado");
});

//Crea si no existe y si existe agrega el contenido
fs.appendFile(`${path}/holamundo.txt`, 'Hello\nJean Brown', function (err, data) {
    if (err)

        return console.error(err)
    console.log("Archivo actualizado");
});*/

fs.readFile(`${path}/holamundo.txt`, 'utf8', function (err, data) {
    if (err)
        return console.error(err)
    console.log(JSON.stringify(data));
    console.log(data);
});

fs.open(`${path}/nuevoarchivo.txt`, 'w', function (err, fd) {
    if (err)
        return console.error(err)
    fs.write(fd, 'El Muchacho de los ojos triste', 'utf8', function (err) {
        if (err)
            return console.error(err)
        console.log("Archivo Creado y Salvado");
    })
})

fs.unlink(`${path}/nuevoarchivo.txt`, function (err) {
    if (err)
        return console.error(err)
    console.log("Archivo eliminado");
});