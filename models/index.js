const fs = require('fs');

let models = {};

fs.readdirSync('./models')
.filter(file => file !== 'index.js')
.forEach((file) => {
    models[file] = require(`./${file}`)
});

module.exports = models;