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

module.exports = fibonacci;
