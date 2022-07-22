const { Schema, model} = require("mongoose");

entregaSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    documento:{
        type: String,
        required: true
    }


});

module.exports = model('Entrega', entregaSchema);