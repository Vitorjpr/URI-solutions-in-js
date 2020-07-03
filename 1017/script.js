var input = require('fs').readFileSync('1017/stdin', 'utf8');
var lines = input.split('\n');

var tempoGasto = lines.shift();
var velocidadeMedia = lines.shift();
var kmPorLitro = 12;

var combustivelGasto = (tempoGasto * velocidadeMedia) / kmPorLitro;

console.log(combustivelGasto.toFixed(3));
