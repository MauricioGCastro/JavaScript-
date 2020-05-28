// crear un arreglo []

let personajes = ["homero", 62, "bart", "marge"];
let temporadas = [];

//cuantos elementos tiene el arreglo
document.write("El arreglo personajes tiene " + personajes.length + " elementos")

//agregar un item al final
personajes.push("Lisa");

document.write("<br>El arreglo personajes tiene " + personajes.length + " elementos")

//mostrar nu elemento de un arreglo
document.write("<br>" + personajes[2]);

// como mostrar unu arreglo completo
mostrarArreglo("Arreglo completo"); //templates literals, acento frances o bartics `` las variables las agrego en ${}

// agregar un elemento  en el lugar donde quieramos
personajes.splice(2, 0, "Flanders"); //primero el lugar en el que quiero agregar el elemento, seguido de la cantidad de items quue quiero borrar, y tercero el elemento que quiero agregar

mostrarArreglo("se agrego un nuevo elemento al array");

//eliminar elementos del array
personajes.splice(1, 2); //si dejo un solo numero, splice entinedo que tiene que borrar todo a partir de esas posicion
personajes.splice(3, 1);

mostrarArreglo("Se eliminaron elementos del array");

//Modificar el valor de un elemento

personajes[0] = "Abraham";
mostrarArreglo("Se modifico el valor de un elemento del arreglo");

//Como escribir una funcion -version basica-
// function mostrarArreglo() {
//     for (let i = 0; i < personajes.length; i++) {
//         document.write(`<br>Elemento ${personajes[i]} de los simpsons`)
//     }
// }

function mostrarArreglo(titulo) {
    document.write(`<br><h2>${titulo}</h2>`);

    for (let i = 0; i < personajes.length; i++) {
        document.write(`<br>Elemento ${personajes[i]} de los simpsons`)
    }
}
