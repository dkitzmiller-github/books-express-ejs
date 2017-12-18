var Book = require('mongoose').model('Book');
var Author = require('mongoose').model('Author');
module.exports = {
    index: function (request, response) {
        Book.find({})
            .populate('author')
            .then(function (books) {
            response.render('pages/books/books', { title: "Books", books: books });
        });
    },
    show: function (request, response) {
    },
    edit: function (request, response) {
    },
    new: function (request, response) {
        Author.find({})
            .then(function (authors) {
            response.render('pages/books/new', { title: "Books: New", authors: authors });
        });
    },
    update: function (request, response) {
    },
    create: function (request, response) {
        Book.create(request.body)
            .then(function (book) {
            return Author.findById(book.author)
                .then(function (author) {
                author.books.push(book);
                author.save()
                    .then(function () {
                    console.log("Created book: " + book);
                    response.redirect('/pages/books');
                });
            });
        })
            .catch(console.log);
    },
    destroy: function (request, response) {
    }
};
