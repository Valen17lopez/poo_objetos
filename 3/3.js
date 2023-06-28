// 3. Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
// método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.

class CuentaBancaria{
    constructor(titular){
    this.titular = titular
    this.saldo = 0;
    }
    
    depositar(cantidad){
        this.saldo+= cantidad
    }
}