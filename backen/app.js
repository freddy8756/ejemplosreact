const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
//iniciar y configurar express
const app = express();
//log mostrar consola
app.use(logger('dev'));
//pasear las entradas de solicitudes de datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//configurar las rutas de bienvenida al servidor
app.get('/', (req,res)=> res.status(200).send({
    message: "bienvenido a la api rest de compras",
}));
const port = parseInt(process.env.PORT,10)||8000;
app.set('port',port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;