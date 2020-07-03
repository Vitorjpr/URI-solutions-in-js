var input = require('fs').readFileSync('Iniciante/1014/stdin', 'utf8');
var lines = input.split('\n');

var distanciaPercorridaEmKm = lines.shift();
var combustivelGastoEmLitros = lines.shift();
var consumoMedio = distanciaPercorridaEmKm / combustivelGastoEmLitros;

console.log(consumoMedio.toFixed(3) + ' km/l');