let filas = parseInt(prompt("ingrese numero de filas"));
let columnas = parseInt(prompt("ingrese numero de columnas"));
let tabla = filas * columnas;

document.write("<table border>")
for (let contador = 0; contador < filas; contador++) {
    document.write("<tr>");
    for (let cont = 0; cont < columnas; cont++) {
        document.write("<td>");
        document.write(tabla);
        tabla--;
        document.write("</td>");
    }
    document.write("</tr>");
} document.write("</table>");

