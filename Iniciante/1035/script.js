var input = require('fs').readFileSync('Iniciante/1035/stdin', 'utf8');
var lines = input.split('\n');

var [ a, b, c, d ] = lines.shift().split(' ');

if((b > c && d > a) && ((c + d) > (a + b)) && (c >= 0 && d >= 0) && (a % 2 == 0)){
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}