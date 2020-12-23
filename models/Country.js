const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountrySchema = new Schema({
    name: {
        type:String,
        required:true
    },
    code: {
        type:String,
        required:true,
        index:{
            unique:true
        },
    },
},
{
    collection:"country"
});

module.exports = mongoose.model('country', CountrySchema);