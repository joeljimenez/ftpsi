const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es Necesario'],
    },
    codigo: {
        type: String,
        required: true,

    },
    cantidad: {
        type: Number,
        require: [true, 'la cantidad es Necesaria']
    },
    precio: {
        type: Number,
        require: [true, 'El Precio es Necesario']
    },

    tamano: {
        type: Number,
    },

    costo_envio: {
        type: Number,
    },


    descripcion: {
        type: String,
        required: [true, 'La descripcion es Necesaria']

    },
    img: {
        type: String,
        require: false

    },
    estado: {
        type: Boolean,
        default: true
    },
    id_categories: {
        type: String
    },

});

module.exports = mongoose.model('product', productSchema);