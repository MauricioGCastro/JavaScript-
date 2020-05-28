

let suma=0;
let num=0;
do{
    num=prompt("ingrese un numero");
    if(!isNaN(num) && num !=null){
        suma=suma+parseInt(num);
    }else{
        if(num !=null){
            alert(num+" No es un numero");
        }
    }
}while(num !=null);
document.write(suma);


//sumar todos los nuumeros introducidos al cancelar
//aler si no es numero
//confirm