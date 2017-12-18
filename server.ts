
const express = require('express');
const parser = require('body-parser');
import path = require('path');


const PORT = process.env['PORT'] || 8000;
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


require('./server/config/database');

app.use(require('./server/config'));


// const routes = require('server/config/routes');
// routes(app);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
