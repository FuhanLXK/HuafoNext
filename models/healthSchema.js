var mongoose = require('mongoose');
var db = require('./db.js');

var healthSchema = new mongoose.Schema({
      sid : {type :Number},
      dorm : {type :String},
      room : {type :String},
      score : {type :Number},
});

var healthModel = db.model('mongoose' ,healthSchema ,'health');

module.exports = healthModel
