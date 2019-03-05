const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const cusrsoSchema = Schema({
    curso: ObjectId,
    nombre: {type: String, required: true},
    descripcion: String,
    precio: Number
});

const Curso = mongoose.model('Curso', cusrsoSchema);

module.exports  = {Curso};
