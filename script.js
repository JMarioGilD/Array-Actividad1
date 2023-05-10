// Comencemos con una práctica básica de arrays .

// En esta tarea, nos gustaría que crearas un array de tres elementos, almacenados dentro de una variable llamada myArray. 
// Los artículos pueden ser lo que quieras, 
// ¿qué tal tus comidas o bandas favoritas?

let myArray = ["Mana", "Queen", "Epica"];

// A continuación, modifica los dos primeros elementos del array utilizando una notación 
// y asignación de corchetes simples [].

 for(let n=0; n<myArray.length; n++){
    myArray[0]='Coldplay';
    myArray[1]='Muse';
    console.log("array miArray", myArray[n]);
}

// Luego agrega un nuevo elemento al comienzo de la matriz.

myArray.unshift("Maroon 5");
console.log(myArray);

// Luego crea una variable de tipo string donde puedas leer todos los elementos de tu array , separados por guiones -
let bandasFavoritas = myArray.join('-');
console.log(bandasFavoritas);
// let BandasFavoritas = 'Maroon5 Coldplay Muse Epica Mana Queen';
// let divide = BandasFaavoritas.split(' ');
// console.log(divide);

// for (let i=0; i<divide.length; i++){
//    document.write(divide[i] + " - ");
// }
