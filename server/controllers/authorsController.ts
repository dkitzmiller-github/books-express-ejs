const Author = require('mongoose').model('Author');

module.exports = {

    index(request, response){
        Author.find({})
            .populate('books')
            .then(authors => {
                response.render('pages/authors/authors', { title: "Authors", authors });
            });
    },
    show(request, response){
        Author.findById(request.params['id'])
            .populate('books')
            .then(author => {
                response.render('pages/authors/show', { title: "Author", author });
            })
    },
    new(request, response){
        response.render('pages/authors/new', { title: "Author: New" });
    },
    edit(request, response){
        Author.findById(request.params['id'])
            .populate('books')
            .then(author => {
                response.render('pages/authors/show', { title: "Author", author });
            })
            .catch(console.log);
    },

    update(request, response){
        Author.findByIdAndUpdate(request.params['id'], request.params.id)
            .then(() => {
                response.redirect('pages/authors');
            })
            .catch(console.log);
    },
    create(request, response){
        Author.create(request.body)
            .then(author => {
                console.log(`Created author: ${author}`);
                response.redirect('pages/authors');
            })
            .catch(console.log);
    },
    destroy(request, response){
        Author.findByIdAndRemove(request.params['id'])
            .then(() => {
                response.redirect('pages/authors');
            })
            .catch(console.log);
    }
};