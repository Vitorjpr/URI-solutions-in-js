var input = require('fs').readFileSync('1006/stdin', 'utf8');
var lines = input.split('\n');

var notaA = lines.shift();
var pesoA = 2.0;

var notaB = lines.shift();
var pesoB = 3.0;

var notaC = lines.shift();
var pesoC = 5.0;

var notaFinal = ((notaA * pesoA) + (notaB * pesoB) + (notaC * pesoC)) / ( pesoA + pesoB + pesoC);

console.log("MEDIA = " + notaFinal.toFixed(1));