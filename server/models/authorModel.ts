import mongoose = require('mongoose');
const {Schema} = mongoose;

const authorSchema = new Schema({
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

