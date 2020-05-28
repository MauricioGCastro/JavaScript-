let texto = prompt("ingrese texto para reversearlo")
let numchar = texto.length;
let contador;
let car;
let salida="";

for ( contador = 0; contador < numchar; contador++) {
     car = texto.charAt(contador);
     salida = car + salida;
}
document.write(salida);

// var cadena = prompt("Introduce un Texto:");
// var numchar = cadena.length;
// var j;
// var car;
// var salida = "";
// for (j = 0; j < numchar; j++) {
//     car = cadena.charAt(j); //recupera el caracter i del string.
//     salida = car + salida;
// }
// document.write(salida);



