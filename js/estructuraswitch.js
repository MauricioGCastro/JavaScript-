let opcion = parseInt(prompt("Seleccione nua opcion: 1-Lunes, 2-Martes, 3-Miercoles, 4-Jueves, 5-Viernes, 0-Sabado/Domingo"));

switch (opcion) {
    case 1:
        //todo el codigo que qiuero ejecuutar si la opcion elegida por el usuario es la 1
        document.write("Seleccionaste el dia Lunes")
        break;
    case 2:
        document.write("Seleccionaste el dia Martes")
        break;
    case 3:
        document.write("Seleccionaste el dia Miercoles")
        break;
    case 4:
        document.write("Seleccionaste el dia Jueves")
        break;
    case 5:
        document.write("Seleccionaste el dia Viernes")
        break;
    case 0:
        document.write("Seleccionaste el dia Sabado/Domingo")
        break;
    default:
        document.write("Seleccionaste una opcion erronea")
}