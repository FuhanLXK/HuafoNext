var mongoose = require('mongoose');

//类似于mysql的表 mongo字段

const user = mongoose.model('accounts', new mongoose.Schema({
  username:{type:String,require:true},
  uid:{type:String,require:true},
  password:{type:String,require:true},
}))

//增加数据
// user.create({
//   uid:'createString01',
//   username:'fuhan',
//   password:'lxk48651119'
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })



module.exports = user
