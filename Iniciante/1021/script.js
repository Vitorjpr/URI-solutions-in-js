var input = require('fs').readFileSync('Iniciante/1021/stdin', 'utf8');
var lines = input.split('\n');
var valor = lines.shift();

var notasDeCem = parseInt(valor / 100);
valor = valor - (notasDeCem * 100);

var notasDeCinquenta = parseInt(valor / 50);
valor = valor - (notasDeCinquenta * 50);

var notasDeVinte = parseInt(valor / 20);
valor = valor - (notasDeVinte * 20);

var notasDeDez = parseInt(valor / 10);
valor = valor - (notasDeDez * 10);

var notasDeCinco = parseInt(valor / 5);
valor = valor - (notasDeCinco * 5);

var notasDeDois = parseInt(valor / 2);
valor = valor - (notasDeDois * 2);

var moedasDeUm = parseInt(valor / 1);
valor = valor - (moedasDeUm * 1);

var moedasDeCinquenta = parseInt(valor / 0.50);
valor = valor - (moedasDeCinquenta * 0.50);

var moedasDeVinteECinco = parseInt(valor / 0.25);
valor = valor - (moedasDeVinteECinco * 0.25);

var moedasDeDez = parseInt(valor / 0.10);
valor = valor - (moedasDeDez * 0.10);

var moedasDeCinco = parseInt(valor / 0.05);
valor = valor - (moedasDeCinco * 0.05);

var moedasDeUm = parseInt(valor / 0.01);
valor = valor - (moedasDeUm * 0.01);

console.log('NOTAS:');
console.log(notasDeCem + ' nota(s) de R$ 100.00');
console.log(notasDeCinquenta + ' nota(s) de R$ 50.00');
console.log(notasDeVinte + ' nota(s) de R$ 20.00'); 
console.log(notasDeDez + ' nota(s) de R$ 10.00'); 
console.log(notasDeCinco + ' nota(s) de R$ 5.00'); 
console.log(notasDeDois + ' nota(s) de R$ 2.00'); 
console.log('MOEDAS:');
console.log(moedasDeUm + ' moeda(s) de R$ 1.00');
console.log(moedasDeCinquenta + ' moeda(s) de R$ 0.50');
console.log(moedasDeVinteECinco + ' moeda(s) de R$ 0.25');
console.log(moedasDeDez + ' moeda(s) de R$ 0.10');
console.log(moedasDeCinco + ' moeda(s) de R$ 0.05');
console.log(moedasDeUm +' moeda(s) de R$ 0.01');