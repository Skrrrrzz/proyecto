const { Schema, model} = require("mongoose");
const Usuario = require('./usuario');
const Proyecto = require('./proyecto');

entregaSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: true,
    }],
    fecha:{
        type: String,
        required: true
    },
    documento:{
        type: String,
        required: true
    },
    tipo:{
        type:String,
        required:true
    },
    proyecto:[{
        type:Schema.Types.ObjectId,
        ref: Proyecto,
        required:true
    }]


});

module.exports = model('Entrega', entregaSchema);