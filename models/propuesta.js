const { Schema, model} = require("mongoose");
const Usuario = require('./usuario');

propuestaSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    profesorguia:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: true,
    }],
    descripcion:{
        type: String,
        required: true
    }
});

module.exports = model('Propuesta', propuestaSchema);