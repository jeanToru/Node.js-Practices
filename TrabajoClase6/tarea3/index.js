const fs = require('fs') // require siempre importa un módulo
let path = process.cwd();


let persons = ['Nombre', 'Apellido', 'Edad', 'Oliver', 'Brown', 20, 'Jack', 'Murphy', 35, 'Charlie', 'Rodriguez', 38, 'George', 'Smith', 22, 'James', 'Anderson', 23, 'William', 'Walsh', 25]

for (let i = 0; i < persons.length; i += 3) {
    fs.appendFile(`${path}/planilla.txt`, `${persons[i]},${persons[i + 1]},${persons[i + 2]}\n`, function (err, data) {
        if (err)
            return console.error(err)
        console.log("Archivo actualizado");
    });

}

fs.readFile(`${path}/disney_movies.txt`,'UTF-8',function(err,data){
    if(err){
        return console.error(err)
    }
    const hack = /\r?\n/; /*Para convertir un txt en un array */
    newArray = data.split(hack);
    
    for(let i = 1; i<newArray.length; i++){
        const prueba = newArray[i].split(';'); /*Esto me indica que separa cada posicion del array cuando se encuentre un punto y coma. */
        fs.appendFile('peliculas.txt',` Película: ${prueba[0]}\n Año: ${prueba[1]}\n Género: ${prueba[2]}\n \n`,function(err,data){
            if(err){
                return console.error(err)
            }
        })
    }
})