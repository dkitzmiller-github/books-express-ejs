"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1.Schema({
    title: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        trim: true,
        minlength: 3
    },
    year: Number,
    pages: mongoose_1.Schema.Types.Number,
    genre: String,
    publisher: String,
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Author'
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('Book', bookSchema);
