const { Schema, model} = require("mongoose");

propuestaSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    profesorguia:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    }
});

module.exports = model('Propuesta', propuestaSchema);