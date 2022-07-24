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
        ref: Usuario,
        required: false,
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
    entregafip:[{
        type: Schema.Types.ObjectId,
        ref: Entrega,
        required: false,
    }],
    entrega33:[{
        type: Schema.Types.ObjectId,
        ref: Entrega,
        required: false,
    }],
    entrega66:[{
        type: Schema.Types.ObjectId,
        ref: Entrega,
        required: false,
    }],
    entrega100:[{
        type: Schema.Types.ObjectId,
        ref: Entrega,
        required: false,
    }],
    retro1:[{
        type: Schema.Types.ObjectId,
        ref: Retroalimentacion,
        required: false,
    }],
    retro2: [{
        type: Schema.Types.ObjectId,
        ref: Retroalimentacion,
        required: false,
    }],
    retro3:[{
        type: Schema.Types.ObjectId,
        ref: Retroalimentacion,
        required: false,
    }],
    formeval1:[{
        type: Schema.Types.ObjectId,
        ref: Retroalimentacion,
        required: false,
    }],
    formeval2:[{
        type: Schema.Types.ObjectId,
        ref: Retroalimentacion,
        required: false,
    }],
    formeval3:[{
        type: Schema.Types.ObjectId,
        ref: Retroalimentacion,
        required: false,
    }]
});

module.exports = model('Proyecto', ProyectoSchema);