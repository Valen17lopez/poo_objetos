// 5. Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad
// proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la
// operación.

class CuentaBancaria{
    constructor(titular){
    this.titular = titular
    this.saldo = 0;
    }
    
    depositar(cantidad){
        this.saldo+= cantidad
    }
    retirar(cantidad){
   if (cantidad <= this.saldo){
    this.saldo -= cantidad
    console.log("su retiro a sido exitoso");
    console.log(`${miCuenta.titular} su saldo actual es de ${miCuenta.saldo}`);
   } else{
       console.log("Saldo insuficiente");
       console.log(`${miCuenta.titular} su saldo actual es de ${miCuenta.saldo}`);
   }
    }
}
const miCuenta = new CuentaBancaria("kevin bello")
console.log(`${miCuenta.titular} su saldo actual es de ${miCuenta.saldo}`);
miCuenta.depositar(100)
console.log(`${miCuenta.titular} su deposito ha sido modificado a ${miCuenta.saldo}`);

