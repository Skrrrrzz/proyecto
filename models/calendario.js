const { Schema, model} = require("mongoose");

calendarioSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    semestre:{
        type:String,
        required: true
    }
});

module.exports = model('Calendario', calendarioSchema);