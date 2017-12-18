"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var authorSchema = new Schema({
    name: String,
    age: String,
    books: [{
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }]
}, {
    timestamps: true
});
module.exports = mongoose.model('Author', authorSchema);
