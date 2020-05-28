let edad = prompt("Ingrese su Edad");
if (!isNaN(edad)) {
    if (edad >= 18 && edad <=78) {
        document.write("Puedes Conducir");
    } else {
        document.write("NO PUEDES CONDUCIR");
    }
} else {
    alert("Ingresa un numervo valido");
}
