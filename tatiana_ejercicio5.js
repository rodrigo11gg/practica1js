/*Escribe un programa que pregunte al usuario el total de su cuenta en un restaurante y el porcentaje de
propina que desea dejar (10%, 15% o 20%). Luego, calcula y muestra el total a pagar incluyendo la propina.*/

function calcularPropina(){
    let totalCuenta = parseFloat(prompt("Introduce el total de tu cuenta"));
    let propina = parseFloat(prompt("Introduce el porcentaje de propina que deseas dejar (10%, 15% o 20%)"));
    let totalPropina = "";
    
    if (propina === 10) {
        totalPropina = totalCuenta + (totalCuenta * 0.10);
    } else if (propina === 15) {
        totalPropina = totalCuenta + (totalCuenta * 0.15);
    } else if (propina === 20) {
        totalPropina = totalCuenta + (totalCuenta * 0.20);
    } else {
        alert("Porcentaje de propina incorrecto") ;
    }
    
    alert(`El total a pagar incluyendo la propina es: ${totalPropina.toFixed(2)}`);
}