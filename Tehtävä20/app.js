var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');




var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book', bookRouter);
app.use('/borrowers', borrowerRouter);

// Middleware esimerkki
app.use(
    function(req,res,next){
        console.log('The common middleware 1 called');
        next();
    }
);


app.get('/example',
    function(request,response){
        response.send('I am app example');
        console.log('I am example');
    }
);

app.use(
    function(req,res,next){
        console.log('The common middleware 2 called');
        next();
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name);
        console.log('Hello '+request.params.name);
    }

    
);

app.use(
    function(req,res,next){
        console.log('The common middleware 3 called');
        next();
    }
);

app.get('/example/:firstName/:lastName',
    function(request, response){
        response.send('Hello '+request.params.firstName+" "+request.params.lastName);
        console.log('Hello '+request.params.firstName+" "+request.params.lastName);
    }
);

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);
module.exports = app;
