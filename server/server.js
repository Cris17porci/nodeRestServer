require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, (err, rest) => {
    if (err) throw err;
    console.log('BAse de Datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})