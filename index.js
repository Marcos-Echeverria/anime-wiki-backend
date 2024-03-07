const express = require('express');
const app = express();

//Modulos importados
const { Config } = require('./config/default')
const { createPool } = require('mysql2/promise')
const { config } = require('dotenv')

//Lector de variables de entorno
config()

//Conexion a base de datos, falta modularizar
const pool = createPool({
    host: process.env.MYSQLDB_HOST,
    user: 'root',
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    port: process.env.MYSQLDB_DOCKER_PORT,
});

//views, falta modularizar
app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

// Escucha en un puerto
app.listen(Config.port, () => {
    console.log(`Servidor escuchando en el puerto ${Config.port}`)
});

app.get("/ping", async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT NOW() as now`);
        return res.json(result[0]);
    } catch (error) {
        console.log(error);
    }
});