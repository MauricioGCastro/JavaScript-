let user = parseInt(prompt("ingrese unu numero entre el 1 y el 50"));
if (!isNaN(user) && user != null) {
    if (user >= 1 && user <= 50) {
        for (let contador = 1; contador <= user; contador++) {
            
            for (let rep = 0; rep < contador; rep++) {
                document.write(contador);
            }
            document.write("<br>");
        }

    } else {
        alert("ingrese uun numero entre 1 y 50");
    }
} else {
    alert("caracter no valido");
}