var Author = require('mongoose').model('Author');
module.exports = {
    index: function (request, response) {
        Author.find({})
            .populate('books')
            .then(function (authors) {
            response.render('pages/authors/authors', { title: "Authors", authors: authors });
        });
    },
    show: function (request, response) {
        Author.findById(request.params['id'])
            .populate('books')
            .then(function (author) {
            response.render('pages/authors/show', { title: "Author", author: author });
        });
    },
    new: function (request, response) {
        response.render('pages/authors/new', { title: "Author: New" });
    },
    edit: function (request, response) {
        Author.findById(request.params['id'])
            .populate('books')
            .then(function (author) {
            response.render('pages/authors/show', { title: "Author", author: author });
        })
            .catch(console.log);
    },
    update: function (request, response) {
        Author.findByIdAndUpdate(request.params['id'], request.params.id)
            .then(function () {
            response.redirect('pages/authors');
        })
            .catch(console.log);
    },
    create: function (request, response) {
        Author.create(request.body)
            .then(function (author) {
            console.log("Created author: " + author);
            response.redirect('pages/authors');
        })
            .catch(console.log);
    },
    destroy: function (request, response) {
        Author.findByIdAndRemove(request.params['id'])
            .then(function () {
            response.redirect('pages/authors');
        })
            .catch(console.log);
    }
};
