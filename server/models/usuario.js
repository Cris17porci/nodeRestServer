const mongoose = require('mongoose');

let Schema = mongooge.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio']
    },
    img: {
        type: CharacterData,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        required: [true, 'El Rol es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usuario', usuarioShema);