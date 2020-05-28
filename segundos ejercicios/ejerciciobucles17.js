   //DECLARACIÓN DEL ARRAY DE VOCALES
   var vocales = ["a", "e", "i", "o", "u"];
   var texto = prompt("Introduce un texto");
   //PASAMOS EL TEXTO A MINÚSCULAS
   var textomin = texto.toLowerCase();
   //DECLARAMOS LA VARIABLE posicion DONDE GUARDAREMOS LA POSICIÓN DE LA VOCAL
   var posicion = 0;
   //DECLARAMOS UNA BANDERA Y LA INICIALIZAMOS A FALSE
   var parar = false;
   //BUCLE QUE RECORRE EL TEXTO
   for (var i = 0; i < textomin.length; i++) {
       //BUCLE QUE RECORRE EL ARRAY DE VOCALES
       for (var j = 0; j < vocales.length; j++) {
           //SI LA VOCAL i ESTÁ EN EL ARRAY DE VOCALES
           if (vocales[j] == textomin.charAt(i)) {
               //GUARDAMOS LA POSICIÓN
               posicion = i;
               //PONEMOS LA BANDERA EN TRUE
               parar = true;
               //CORTAMOS LA EJECUCIÓN DEL BUCLE INTERIOR
               break;
           }
       }
       //SI LA BANDERA ESTÁ EN TRUE
       if (parar) {
           //CORTAMOS LA EJECUCIÓN DEL BUCLE EXTERIOR
           break;
       }
   }
   //IMPRIMIMOS EL RESULTADO
   document.write("La primera vocal está en la posición " + posicion);