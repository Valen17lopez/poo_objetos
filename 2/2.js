// 2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
// ladrar() de la instancia.

class perro{
    constructor(nombre){
        this.nombre = nombre;
    }

    ladrar() {
        console.log(`¡woof! ${this.nombre}`);
    }
}

const miperro = new perro("Juano")

console.log(miperro.ladrar());