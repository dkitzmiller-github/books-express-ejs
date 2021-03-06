const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/bookLibrary');
mongoose.connection.on('connected', () => console.log(`Connected to bookLibrary`));

fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});