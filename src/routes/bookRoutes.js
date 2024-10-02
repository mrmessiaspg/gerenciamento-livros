const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// CREATE
router.post('/', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
});

// READ
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.send(books);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(book);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
