// 6. Llama al método retirar() en la instancia "miCuenta" para retirar 50. Imprime en la consola el saldo actual
// después de la operación.

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
console.log(miCuenta.retirar(50));
