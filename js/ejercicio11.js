let numero = parseInt(prompt("Ingrese un numero"));
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    document.write("Es divisible por:  ")
    if (numero % 2 === 0) {
        document.write(" 2, ");
    }
    if (numero % 3 === 0) {
        document.write("3, ");
    }
    if (numero % 5 === 0) {
        document.write(" 5, ");
    }
    if (numero % 7 === 0) {
        document.write("7. ");
    }
} else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}