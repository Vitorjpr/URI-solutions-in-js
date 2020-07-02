var input = require('fs').readFileSync('1014/stdin', 'utf8');
var lines = input.split('\n');

var distanciaPercorrida = lines.shift();
var combustivelGasto = lines.shift();
var consumoMedio = distanciaPercorrida / combustivelGasto;

console.log(consumoMedio.toFixed(3) + ' km/l');