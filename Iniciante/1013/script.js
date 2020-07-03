var input = require('fs').readFileSync('Iniciante/1013/stdin', 'utf8');
var lines = input.split('\n');

var [ a, b, c ] = lines.shift().split(' ');

var maiorAb = (parseInt(a) + parseInt(b) + Math.abs(a - b)) / 2;
var maiorAbc = (parseInt(maiorAb) + parseInt(c) + Math.abs(maiorAb - c)) / 2;

console.log(maiorAbc + " eh o maior");