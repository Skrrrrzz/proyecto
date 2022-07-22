const { Schema, model} = require("mongoose");

citasSchema = Schema({
    titulo:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
});

module.exports = model('Citas', citasSchema);