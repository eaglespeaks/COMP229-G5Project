let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    Name: String,
    Owner: String,
    Released: String,
    Description: String,
    Status: String
},
{
    collection: 'survey'
});

module.exports = mongoose.model('Survey', surveyModel);