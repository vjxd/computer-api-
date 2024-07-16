const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    AuthorName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
