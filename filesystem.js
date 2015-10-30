'use strict'
var fs = require('fs');

fs.stat('fibonacci.js', function(err, stats) {
  console.log(stats)
});
console.log('the joy of asynchronous programming')

var path = require('path');

var filepath = path.normalize('C:/Users/Peter/2008JPYCHF.txt');
fs.open(filepath, 'r', function(err, fileDescriptor){
  console.log(fileDescriptor);
});

var joined = path.join('./','one','two','three.html');
var res = path.resolve(joined, '/three/four', '.../', 'five', '../../../six');
console.log(filepath);
console.log(joined);
console.log(res);
console.log(path.dirname(joined));
console.log(path.basename(joined));
console.log(path.extname(joined));
