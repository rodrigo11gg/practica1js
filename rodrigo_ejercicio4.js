function calcularTotal() {
    let totalCompra = parseFloat(prompt("Ingrese el total de su compra:"));
    let codigoDescuento = prompt("Ingrese el código de descuento (si tiene):");
    let descuento = 0;

    if (codigoDescuento === "DESCUENTO10") {
        descuento = 0.10;
    } else if (codigoDescuento === "DESCUENTO20") {
        descuento = 0.20;
    } else if (codigoDescuento !== "" && codigoDescuento !== null) {
        alert("Código de descuento no válido.");
    }
    
    let totalFinal = totalCompra - (totalCompra * descuento);
    alert(`El total a pagar después del descuento es: s/${totalFinal.toFixed(2)}`);
}

