const { Schema, model, default: mongoose} = require("mongoose");
const Usuario = require ('../models/usuario');
const Entrega = require('../models/entrega');
const Retroalimentacion = require('../models/retroalimentacion');


const ProyectoSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    alumno:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: true,
    }],
    alumno2:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: false,
    }],
    profeguia:[{
        type: Schema.Types.ObjectId,
        ref:Usuario,
        required: false
    }],
    profeinformante:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: false,
    }],
    profeinformante2:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: false,
    }],
    profeinformante3:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: false,
    }],
    coordinador:[{
        type: Schema.Types.ObjectId,
        ref: Usuario,
        required: false,

}],
    profesorPt1:[{
        type: Schema.Types.ObjectId,
        ref:Usuario,
        required:true
    }],
    aceptado:{
        type:Boolean,
        required: true
    },
    enable:{
        type:Boolean,
        required: true
    }

});

module.exports = model('Proyecto', ProyectoSchema);