const fs = require('fs');
const crud = require('../middlewares/crud');
const acl = require('../middlewares/acl');
const models = require('../models');
const modelNames = fs.readdirSync(process.cwd()+'/models');

module.exports = app => {
    modelNames.forEach(name => {
        let formattedName = name.replace('.js','').toLowerCase();
        app.use(`/${formattedName}`,acl,crud(models[name]));
    })
}