var input = require('fs').readFileSync('1011/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;
var raio = lines.shift();

var volume = (4.0/3.0) * PI * Math.pow(raio, 3);

console.log("VOLUME = " + volume.toFixed(3));