var input = require('fs').readFileSync('Iniciante/1020/stdin', 'utf8');
var lines = input.split('\n');
var diasDeVida = lines.shift();

var anos = parseInt(diasDeVida / 365);
diasDeVida = diasDeVida - (anos * 365);

var meses = parseInt(diasDeVida / 30);
diasDeVida = diasDeVida - (meses * 30);

console.log(anos + ' ano(s)');
console.log(meses + ' mes(es)');
console.log(diasDeVida + ' dia(s)'); 

