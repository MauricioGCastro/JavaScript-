var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length; //Devuelve la longitud del string.
var caracter;
var i;
for (i = 0; i < numchar; i++) {
    caracter = cadena.charAt(i); //recupera el caracter i del string.
    if (i == numchar - 1) {
        document.write(caracter);
    } else {
        document.write(caracter + "-");
    }
}
