const { Schema, model} = require("mongoose");

calendarioSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    }
});

module.exports = model('Calendario', calendarioSchema);