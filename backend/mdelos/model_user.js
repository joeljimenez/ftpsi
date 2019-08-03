const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es Necesario']
    },
    apellido: {
        type: String,
        require: [true, 'El Apellido es Necesario']
    },
    email: {
        type: String,
        required: [true, 'El Correo es Necesario'],
    },
    password: {
        type: String,
        required: [true, ['La contranseña es necesaria']]
    },
    role: {
        type: Number,
        default: '2',

    },
    direccion: {
        type: String,
    },
    pais: {
        type: String,
        required: [true, ['El Pais es necesaria']]
    },

    estado: {
        type: Boolean,
        default: true
    },

});


module.exports = mongoose.model('user', userShema);