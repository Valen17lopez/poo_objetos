// 1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
// imprima en la consola "¡Woof!" junto al nombre del perro.

class perro{
    constructor(nombre){
        this.nombre = nombre;
    }

    ladrar() {
        console.log(`¡woof! ${this.nombre}`);
    }
}