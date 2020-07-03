var input = require('fs').readFileSync('Iniciante/1012/stdin', 'utf8');
var lines = input.split('\n');

var [ a, b, c ] = lines.shift().split(' ');
const PI = 3.14159;

var triangulo = (a * c) / 2;
var circulo = (PI * Math.pow(c, 2));
var trapezio = ((parseFloat(a) + parseFloat(b)) * c) / 2;
var quadrado = Math.pow(b, 2);
var retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3)); 