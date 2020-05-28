document.write("<br> 1-")
document.write("<br> 2-")
document.write("<br> 3-")
document.write("<br> 4-")
document.write("<br> 5-")

// Tipos de bubles: While, Do while, for

/*
while(condicion){
    todo el codigo que quiero ejecutar varias veces
    cambiar valor de condicion
}
*/

let contador = 1;
while(contador<=100){
    document.write("<br>Vuelta Nº: "+contador);
    // contador= contador + 1 ;
    contador++;
}

// do while, hacer ... mientras se cumple la condicion

let i=1;
do{
    document.write("<br>Elemento: "+i);
    i=i+3
}while(i<=100);

// for
// for(inicializar variable; condicion logica; incrementar variable)
for(let x=0; x<=100; x=x+5){
    document.write("<br>Items de for "+x);
}