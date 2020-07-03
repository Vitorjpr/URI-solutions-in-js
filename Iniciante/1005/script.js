var input = require('fs').readFileSync('Iniciante/1005/stdin', 'utf8');
var lines = input.split('\n');
var notaA = lines.shift();
var notaB = lines.shift();
var pesoNotaA = 3.5;
var pesoNotaB = 7.5;

var notaFinal = ((notaA * pesoNotaA) + (notaB * pesoNotaB)) / (pesoNotaA + pesoNotaB);
console.log("MEDIA = " + notaFinal.toFixed(5)); 