//Cálculo de Índice de Masa Corporal (IMC)
/*Escribe un programa que pregunte al usuario su peso en kilogramos y su altura en metros.
Calcula el Índice de Masa Corporal (IMC) usando la fórmula IMC = peso / (altura * altura) y 
muestra la categoría correspondiente según el IMC (bajo peso, normal, sobrepeso, obesidad)*/

let peso = parseFloat(prompt("Introduce tu peso en kilogramos"));
let altura = parseFloat(prompt("Introduce tu altura en metros"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}
