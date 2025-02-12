
/*Los tramos del IVA en un país son los siguientes:

Básico: 10%
Reducido: 5%
Superreducido: 2%
Escribe un programa que pregunte al usuario el importe de una compra y el tipo de IVA aplicado
(básico, reducido, superreducido) y muestre por pantalla el total con IVA incluido. (10p)*/



function calcularIVA() {
    // Pedimos al usuario el importe de la compra
    let importe = parseFloat(prompt("Introduce el importe de la compra:"));

    // Validamos que el importe sea un número
    if (isNaN(importe)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    // Pedimos al usuario el tipo de IVA
    let tipoIVA = prompt("Introduce el tipo de IVA (básico, reducido, superreducido):").toLowerCase();

    // Definimos una variable para almacenar el total con IVA
    let totalConIVA;

    // Verificamos el tipo de IVA y calculamos el total
    if (tipoIVA === "básico") {
        totalConIVA = importe * 1.10; // 10% de IVA
    } else if (tipoIVA === "reducido") {
        totalConIVA = importe * 1.05; // 5% de IVA
    } else if (tipoIVA === "superreducido") {
        totalConIVA = importe * 1.02; // 2% de IVA
    } else {
        alert("Tipo de IVA no válido. Debe ser 'básico', 'reducido' o 'superreducido'.");
        return;
    }

    // Mostramos el total con IVA incluido
    alert(`El total con IVA incluido es: ${totalConIVA.toFixed(2)}`);
}