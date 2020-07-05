var input = require('fs').readFileSync('Iniciante/1019/stdin', 'utf8');
var lines = input.split('\n');
var segundosTotais = lines.shift();

var horas = parseInt(segundosTotais / 3600);
segundosTotais = segundosTotais - (horas * 3600);

var minutos = parseInt(segundosTotais / 60);
segundosTotais = segundosTotais - (minutos * 60);

var segundos = segundosTotais;

console.log(horas + ':' + minutos + ':' + segundos);