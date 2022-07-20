const { Schema, model} = require("mongoose");


const ProyectoSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    alumno:{
        type: String,
        required: true,
        unique: true
    },
    alumno2:{
        type: String,
        required: false
    },
    profeguia:{
        type:String,
        required: false
    },
    profeinformante:{
        type: String,
        required: false
    },
    profeinformante2:{
        type: String,
        required: false
    },
    profeinformante3:{
        type:String,
        required: false
    },
    entregafip:{
        type: String,
        required: false
    },
    entrega33:{
        type:String,
        required: false
    },
    entrega66:{
        type:String,
        required:false
    },
    entrega100:{
        type:String,
        required:false
    },
    retro1:{
        type:String,
        required:false
    },
    retro2:{
        type:String,
        required:false
    },
    retro3:{
        type:String,
        required:false
    },
    formeval1:{
        type:String,
        required:false
    },
    formeval2:{
        type:String,
        required:false
    },
    formeval3:{
        type:String,
        required:false
    }
});

module.exports = model('Proyecto', ProyectoSchema);