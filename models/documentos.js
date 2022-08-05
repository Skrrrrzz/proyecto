const { Schema, model} = require("mongoose");
const Categoria = require('./categoria');

buscadorSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    categoria:[{
        type: Schema.Types.ObjectId,
        ref: Categoria,
        required:true
    }],
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