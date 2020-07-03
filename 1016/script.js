var input = require('fs').readFileSync('1016/stdin', 'utf8');
var lines = input.split('\n');

var kms = lines.shift();

var distancia = kms * 2;

console.log(distancia + ' minutos');