// 4. Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
// Deposita 100 en la cuenta llamando al método depositar().

class CuentaBancaria{
    constructor(titular){
    this.titular = titular
    this.saldo = 0;
    }
    
    depositar(cantidad){
        this.saldo+= cantidad
    }
}
const miCuenta = new CuentaBancaria("kevin bello")
console.log(`${miCuenta.titular} su saldo actual es de ${miCuenta.saldo}`);
miCuenta.depositar(100)
console.log(`${miCuenta.titular} su deposito ha sido modificado a ${miCuenta.saldo}`);
