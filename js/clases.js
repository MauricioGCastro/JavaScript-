class Juego {
    constructor(nombreP, precioP, capacidadP, descripcionP) {
        this.nombre = nombreP;
        this.precio = precioP;
        this.capacidad = capacidadP;
        this.descripcion = descripcionP;
        this.estado = true; //Disponible para ser vendido
    }
}

//CREAR OBJETOS
let tetris = new Juego("Tetris", 15, "1GB", "Juego Clasico");
let gta = new Juego("GTA", 15, "98GB", "Mundo abierto");