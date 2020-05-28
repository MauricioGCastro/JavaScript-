let nota = parseInt(prompt("Ingrese la Calificación"));
if(!isNaN(nota)){
if (nota > 0 && nota<= 10) {
    if (nota < 3) {
        alert("Muy deficiente");
    } else if (nota < 5) {
        alert("Insuficiente");
    } else if (nota <= 6) {
        alert("Suficiente");
    } else if (nota == 7) {
        alert("Bien");
    } else if (nota <= 9) {
        alert("Notable");
    } else if (nota = 10) {
        alert("Sobresaliente");
    }
}else{
    alert("numero erroneo");
}
}else {
    alert("Ingrese una nota valida");
}