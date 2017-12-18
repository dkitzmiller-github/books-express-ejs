const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');

module.exports = {
    index(request, response){
        Book.find({})
            .populate('author')
            .then(books => {
                response.render('pages/books/books', { title: "Books", books });
            });
    },
    show(request, response){

    },
    edit(request, response){

    },
    new(request, response){
        Author.find({})
            .then( authors => {
                response.render('pages/books/new', { title: "Books: New", authors });
            });

    },
    update(request, response){

    },
    create(request, response){
        Book.create(request.body)
            .then(book => {
                return Author.findById(book.author)
                    .then(author => {
                        author.books.push(book);
                        author.save()
                            .then( () => {
                                console.log(`Created book: ${book}`);
                                response.redirect('/pages/books');
                            });
                    });

            })
            .catch(console.log);

    },
    destroy(request, response){

    }
};