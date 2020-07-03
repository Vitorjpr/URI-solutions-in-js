var input = require('fs').readFileSync('Iniciante/1010/stdin', 'utf8');
var lines = input.split('\n');

var [ idItem1, qtdItem1, valorUnit1 ] = lines.shift().split(' ');
var [ idItem2, qtdItem2, valorUnit2 ] = lines.shift().split(' ');

var valorTotal = (qtdItem1 * valorUnit1) + (qtdItem2 * valorUnit2);

console.log('VALOR A PAGAR: R$ ' + valorTotal.toFixed(2));
