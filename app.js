'use strict';

var port = process.argv[2];
var koa = require('koa');
var koaLogger = require('koa-logger');
var koaStatic = require('koa-static');
var fibonacci = require('./fibonacci')
var app = koa();

var seq = fibonacci();
var seq2 = fibonacci();
var fib = fibonacci();
for ( var i=0;i<10; i++) {  console.log(seq.next()); }
for ( var i=0;i<10; i++) {  console.log(seq.next()); console.log(seq2.next()); }

//enable middlewares
app.use(koaLogger('dev'));
app.use(koaStatic(__dirname + '/public'));
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


app.use(function *fibo(next) {
    console.log('fibo start');
    if (this.request.path !== '/fibonacci') return yield next;
    console.log('fibo path');
    this.body = '<!DOCTYPE html><html><body><h1>Fibonacci number</h1><p>The next fibonacci number in the series is '
                +fib.next().value.curr
                +'.</p></body></html>'
});

//routes
app.use(function *() {
   this.body = 'Hello World';
});




var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});
