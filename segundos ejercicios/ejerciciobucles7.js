let usuario= parseInt(prompt("ingrese unu numero entre el 10 y el 50"));
if(!isNaN(usuario) && usuario!=null){
    if(usuario>=1 && usuario<=50){
        for(let contador=usuario; contador>=1;contador--){
            for(let rep=0; rep<contador; rep++){
                document.write(contador)
            }
            document.write("<br>")
        }
        
    }else{
        alert("el numero ingresado no corresponde")
    }
}else{
    alert("caracter no valido")
}
