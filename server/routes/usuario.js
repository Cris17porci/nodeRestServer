const express = require('express');
const Usuario = require('../models/usuario')
const app = express();


app.get('/usuario', function(req, res) {
    res.json('get Usuarios')
});
app.post('/usuario', function(req, res) {

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        rol: body.rol
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            res.status(400).json({
                ok: false,
                err
            });

        }
        res.json({
            ok: true,
            usuario: UsuarioDB
        })
    });

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            msj: 'El Nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        })
    }
});
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});
app.delete('/usuario', function(req, res) {
    res.json('delete Usuarios')
});

module.exports = app;