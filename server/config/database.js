var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
var reg = new RegExp('\\.js$', 'i');
var modelsPath = path.resolve('server', 'models');
mongoose.connect('mongodb://localhost/bookLibrary');
mongoose.connection.on('connected', function () { return console.log("Connected to bookLibrary"); });
fs.readdirSync(modelsPath).forEach(function (file) {
    if (reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});
