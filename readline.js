var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: fs.createReadStream('fibonacci.js'),
  output: process.stdout,
  terminal: false
});

rl.on('line', function(str) {
	console.log(str);
  rl.pause();
});
rl.on('pause', function() {
	console.log("pause");
});
rl.pause();
rl.resume();
