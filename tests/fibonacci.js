var test = require('tape');
var fibonacci = require('../fibonacci')

test('fibonacci tests', function (t) {
    t.plan(4);
    var seq = fibonacci();
    var first = seq.next();

    t.equal(first.value.curr , 1, '1 is the first element');

    for ( var i=0;i<10; i++) { seq.next(); }
    var twelth = seq.next();
    t.equal(twelth.done, false, 'The sequence continues')
    t.equal(twelth.value.curr, 144 , '144 is the 12th element')
    t.deepEqual(twelth, { value : { curr: 144 }, done: false }, 'object is as expected')
});
