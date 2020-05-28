let usuarioFranco = {
    nombre: "franco",
    email: "franco@sumail.com",
    pass: "123456",
    cursos: [{
        cursos: "fullstack",
        estado: "cursando",
        anio: 2020
    }, {
        cursos: "hacker",
        estado: "pendiente",
        anio: 2020
    }],
    edad: 20,
    estado: true //usuario habilitado
}

// mostrar unu objeto
document.write("Usuario: " + usuarioFranco.nombre);
document.write(`<br>Email: ${usuarioFranco.email}`);
document.write("<br>Edad: " + usuarioFranco["edad"]);
document.write(`<br>Pass: ${usuarioFranco["pass"]}`);

//AGREGAR UNA PROPIEDAD NUEVA A UN OBJETO
usuarioFranco.apellido = "Olmi";
document.write("<br>Apellido: " + usuarioFranco.apellido);
document.write("<br>Cursos: " + usuarioFranco.cursos[0].cursos);

let juego = {
    nombre: "Mario Bross",
    precio: 40,
    version: "kart"
};

let llaves = Object.keys(juego); // llaves = ["nombre", "precio", "version"]
console.log(llaves);
for (let i = 0; i <llaves.length; i++){
    let clave= llaves[i];
    document.write(`<br>${clave}: ${juego[clave]}`);
}
