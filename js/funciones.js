// tres formas de escribir funciones
//PRIMER EJEMPLO
function hola() {
    document.write("Hola Mundo! :D <br>")
}

// SEGUNDO EJEMPLO
function saludar(nombre, edad) {
    document.write(`Hola mi nombre es: ${nombre} y tengo: ${edad} años.<br>`)
}

hola();
saludar("Daiana", 21);

let nombreA = "franco";
let edadA = 20;

saludar(nombreA, edadA);

//FUNCIONES QUE RETORNAN UN VALOR
function convertirPesosADolar(pesos) {
    let resultado = pesos / 68
    return resultado.toFixed(2);
}
let precioCompu = convertirPesosADolar(55000)
document.write("<br> Producto PC: USD$ " + precioCompu);

document.write("<br> Producto PC+ Monitor 32``: USD$ " + convertirPesosADolar(100000));