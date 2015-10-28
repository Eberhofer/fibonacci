'use strict';

var port = process.argv[2];
var koa = require('koa');
var koaLogger = require('koa-logger');
var koaStatic = require('koa-static');
var fibonacci = require('./fibonacci')
var app = koa();
var fib = fibonacci();

//enable middlewares
app.use(koaLogger('dev'));
app.use(koaStatic(__dirname + '/public'));
app.use(function *middleware1(next) {
    console.log('middleware1 start');
    yield next;
    console.log('middleware1 end');
});app.use(function *middleware2(next) {
    console.log('middleware2 start');
    yield next;
    console.log('middleware2 end');
});
app.use(function *fibo(next) {
    console.log('fibo start');
    if (this.request.path !== '/fibonacci') return yield next;
    console.log('fibo path');
    this.body = fib.next();
});

//routes
app.use(function *() {
   this.body = 'Hello World';
});




var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});
