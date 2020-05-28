let nom1= prompt("ingrese nombre1");
let edad1=parseInt(prompt("ingrese edad1"));

let nom2= prompt("ingrese nombre2");
let edad2=parseInt(prompt("ingrese edad2"));

let nom3= prompt("ingrese nombre3");
let edad3=parseInt(prompt("ingrese edad3"));
let grande= Math.max(edad1, edad2, edad3)
if(grande==edad1){
    document.write("el mas grande es: "+nom1);
}

if(grande==edad2){
    document.write("el mas grande es: "+nom2);
}

if(grande==edad3){
    document.write("el mas grande es: "+nom3);
}