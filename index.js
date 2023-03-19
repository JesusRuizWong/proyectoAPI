const express = require('express');
require('dotenv').config();
const cors=require('cors');
const { dbConnection } = require('./database/config');


//crear el servidor de express
const app=express(); 


//Base de datos
dbConnection();

//CORS
app.use(cors()) ;

//Directorio Publico
app.use( express.static('public') );

//lectura y parseo del body
app.use(express.json()) ;

//Rutas
// TODO: auth//crear. login, renew
app.use('/api/auth', require ('./routes/auth')) ;
app.use('/api/multirelease', require ('./routes/multirelease')) ;
app.use('/api/multitable', require ('./routes/multitable')) ;
app.use('/api/multivalue', require ('./routes/multivalue')) ;

// escuchar peticiones
app.listen(process.env.PORT, () =>{
    console.log(`servidor corriendo en puerto  ${process.env.PORT}`)
});

