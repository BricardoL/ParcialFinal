const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true},
    actor: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    cantidaddepelis:{
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Posts', PostSchema);