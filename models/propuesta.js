const { Schema, model} = require("mongoose");
const Usuario = require('./usuario');

propuestaSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    enable:{
        type:Boolean,
        required: true
    },
    autor:[{
        type: Schema.Types.ObjectId,
        ref:Usuario,
        required:true
    }]
});

module.exports = model('Propuesta', propuestaSchema);