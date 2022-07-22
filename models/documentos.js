const { Schema, model} = require("mongoose");

buscadorSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    linkB:{
        type: String,
        required: false
    },
    linkR:{
        type: String,
        required: false
    }


});

module.exports = model('Documento', buscadorSchema);