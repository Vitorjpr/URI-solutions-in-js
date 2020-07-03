var input = require('fs').readFileSync('1015/stdin', 'utf8');
var lines = input.split('\n');

var [ x1, y1 ] = lines.shift().split(' ');
var [ x2, y2 ] = lines.shift().split(' ');

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distancia.toFixed(4));