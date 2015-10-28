'use strict';

function *fibonacci() {
    var prev = 0, curr = 0, tmp ,res;

    for ( ;; ) {
        tmp  = prev;
        prev = curr;
        curr = tmp + curr;
        if (curr == 0) { curr = 1; };
        res = { curr }
        yield res;
    }
}

var seq = fibonacci();
var seq2 = fibonacci();

console.log(seq.next()); // returns 1
console.log(seq.next()); // returns 2

// do something else

console.log(seq.next()); // returns 3

for ( var i=0;i<10; i++) {  console.log(seq.next()); console.log(seq2.next()); }
module.exports = fibonacci;
