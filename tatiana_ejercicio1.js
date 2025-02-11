//Cálculo de Índice de Masa Corporal (IMC)
/*Escribe un programa que pregunte al usuario su peso en kilogramos y su altura en metros.
Calcula el Índice de Masa Corporal (IMC) usando la fórmula IMC = peso / (altura * altura) y 
muestra la categoría correspondiente según el IMC (bajo peso, normal, sobrepeso, obesidad)*/

function calcularIMC(){
let peso = parseFloat(prompt("Introduce tu peso en kilogramos"));
let altura = parseFloat(prompt("Introduce tu altura en metros"));

let imc = peso / (altura * altura);
let categoria = "";


if (imc < 18.5) {
    categoria="Bajo peso";
} else if (imc >= 18.5 && imc < 25) {
    categoria="Normal";
} else if (imc >= 25 && imc < 30) {
    categoria="Sobrepeso";
} else {
    categoria="Obesidad";
}

alert(`Tu IMC es: ${imc.toFixed(2)}`);
alert("Tu categoría es: " + categoria);

}