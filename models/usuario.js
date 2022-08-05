const { Schema, model} = require("mongoose");





const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    semestre:{
        type: Number,
        required: false
    },
    user:{
        type: String,
        required: true,
        unique: true
    },
    enable:{
        type: Boolean,
        required: true
    }
});

module.exports = model('Usuario', UsuarioSchema);