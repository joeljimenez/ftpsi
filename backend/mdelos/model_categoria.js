const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryShema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es Necesario']
    },
    imagen: {
        type: String,
    },

    estado: {
        type: Boolean,
        default: true
    },

});


module.exports = mongoose.model('categories', categoryShema);