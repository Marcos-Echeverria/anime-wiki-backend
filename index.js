const express = require('express');
const app = express();

const  { Config } = require('./config/default')

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

// Escucha en un puerto
app.listen(Config.port, () =>{
    console.log(`Servidor escuchando en el puerto ${Config.port}`)
});