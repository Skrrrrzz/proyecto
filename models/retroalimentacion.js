const { Schema, model} = require("mongoose");
const Usuario = require('./usuario');


retroSchema = Schema({
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
        type: Date,
        required: true
    },
    documento:{
        type: String,
        required: true
    }


});

module.exports = model('Retroalimentacion', retroSchema);