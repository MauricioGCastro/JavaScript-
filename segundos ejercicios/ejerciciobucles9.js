for(contador=1; contador<=500; contador++){
    document.write("<br>"+contador);
    if(contador%4==0){
        document.write(" (Multiplo de 4)")
    }
    if(contador%9==0){
        document.write(" (Multiplo de 9)")

    }
    if(contador %5==0){
        document.write("<br>"+"______________________________")
    }

}