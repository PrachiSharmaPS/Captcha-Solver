const express = require('express');
const route = require('./router/router');

const app = express();

app.use(express.json());

app.use('/' , route)

app.listen(process.env.PORT ||3000, function(){
    console.log("express app running on port "+(process.env.port||3000))
})
