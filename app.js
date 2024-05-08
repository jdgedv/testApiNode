const express = require('express');
global.app=express();

global.productos = [
    {'cod_cat':'111','cod_producto':'100A','nombre':'ProductoTest'},
    
];
global.categorias = [
    {'cod_cat':'111','nombre':'CategoriaTest','estado':'true'}
];

var bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

require('./routes.js')

app.listen(3000, () => {
console.log('Servidor Express escuchando en el puerto 3000');
});



