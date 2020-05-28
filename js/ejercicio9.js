let frase = prompt("ingrese una frase");
let cantidad = frase.length;

document.write("Cantidad de caracteres: " + cantidad);
for (let indice = 0; indice < cantidad; indice++) {
    if (frase.substr(indice, 1) == "a" || frase.substr(indice, 1) == "e" || frase.substr(indice, 1) == "i" || frase.substr(indice, 1) == "o" || frase.substr(indice, 1) == "u") {
        document.write("<br>" + frase.substr(indice, 1));
    }
}



// frase.suubstr(indice,1) -asi se uusa el substring - el 1 es la cantidad de caracteres que quiero tomar