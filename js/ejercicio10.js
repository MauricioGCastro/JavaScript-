let numero = parseInt(prompt("Ingrese un numero"));
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    document.write("Es divisible por 2, 3, 5 o 7.")
} else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}