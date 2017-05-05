var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports = mongoose.model('Message',{
    msg: String
})

mongoose.connect("mongodb://localhost:27017/test", function(err, db){
    if(!err){
        console.log("we are connected to mongo");

    }
})
