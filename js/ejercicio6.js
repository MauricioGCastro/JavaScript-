let numero1 = parseInt(prompt("ingrese el primer valor")); //parseint y parentesis, para que el numero se guarde como un numero y no como texto entre comillas, sino queda asi: "23"
let numero2 = parseInt(prompt("ingrese el primer valor"));

if(numero1 > numero2){
    document.write("El numero 1 es mayor que el numero 2")
}else{
    document.write("El numero 2 es mayor que el numero 1 o son iguales")
}