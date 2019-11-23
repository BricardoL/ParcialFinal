const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv/config');
var debug = require('debug')('blog:test');
 
//middlewares


// routes



////
//app.use(auth);
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const indexRoute = require('./routes/index');









app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoute);

//ConnectDB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
()=> console.log('Conectado a la DB'));



app.listen(3000);