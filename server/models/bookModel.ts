const mongoose = require('mongoose');
import {Schema} from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        minlength: 3
    },
    year: Number,
    pages: Schema.Types.Number,
    genre: String,
    publisher: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
