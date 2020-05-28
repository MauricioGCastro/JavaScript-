let resultado = ``;
do {
    let palabra = prompt("ingrese una plabra");
    if (resultado == ``) {
        resultado = palabra;
    } else {
        resultado=resultado+`-`+palabra;
    }
} while (confirm(`Desea continuar?`));
document.write(resultado);

