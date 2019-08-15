const express = require('express');
const app = express();
const port = 5035;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bienvenidos al Proyecto Libreria',
    });
});

app.listen (port, (req, res) => {
    console.log(`El servidor esta online en el puerto ${port}.`);
});