const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
