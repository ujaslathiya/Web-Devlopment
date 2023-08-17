const express = require('express');
const fs = require('fs');
const path = require('path');

// EXPRESS
const app = express();
app.use('/static',express.static('static'));
app.use(express(urlencoded()));

app.set('view engine','pug');
app.set('views', path.join(__dirname,"views"));
