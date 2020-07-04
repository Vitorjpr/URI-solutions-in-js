var input = require('fs').readFileSync('Iniciante/1018/stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift();
var valorAux = valor;

var notasDeCem = parseInt(valorAux / 100);
valorAux = valorAux - (notasDeCem * 100);

var notasDeCinquenta = parseInt(valorAux / 50);
valorAux = valorAux - (notasDeCinquenta * 50);

var notasDeVinte = parseInt(valorAux / 20);
valorAux = valorAux - (notasDeVinte * 20);

var notasDeDez = parseInt(valorAux / 10);
valorAux = valorAux - (notasDeDez * 10);

var notasDeCinco = parseInt(valorAux / 5);
valorAux = valorAux - (notasDeCinco * 5);

var notasDeDois = parseInt(valorAux / 2);
valorAux = valorAux - (notasDeDois * 2);

var notasDeUm = parseInt(valorAux / 1);
valorAux = valorAux - (notasDeUm * 1);

console.log(valor);
console.log(notasDeCem + " nota(s) de R$ 100,00")
console.log(notasDeCinquenta + " nota(s) de R$ 50,00")
console.log(notasDeVinte + " nota(s) de R$ 20,00")
console.log(notasDeDez + " nota(s) de R$ 10,00")
console.log(notasDeCinco + " nota(s) de R$ 5,00")
console.log(notasDeDois + " nota(s) de R$ 2,00")
console.log(notasDeUm + " nota(s) de R$ 1,00")