var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var mongo = require('mongodb');
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';
var mongoose = require('mongoose');
mongoose.connect(mongoUri);
var db = mongoose.connection;

var geneticStringSchema = new mongoose.Schema({
    name: String,
    sequence: String
});

var GeneticString = mongoose.model('GeneticString', geneticStringSchema);


app.use(express.bodyParser());
app.use(express.static('static'));

app.post('/string', function(req, res){
    var string = new GeneticString({
        name: req.body.name,
        sequence: req.body.sequence
    });
    string.save(function(err, str){
        res.send(str);
    });
});

app.get('/strings', function(req, res){
    GeneticString.find(function(err, strings){
        res.send(strings);
    });
});


app.listen(port, function() {
    console.log("Listening on " + port);
});