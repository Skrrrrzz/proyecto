const { Schema,model} = require("mongoose");

categoriaSchema = Schema({
    categoria:{
        type: String,
        required: true
    }
});

module.exports = model('Categorias', categoriaSchema);