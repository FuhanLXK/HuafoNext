var MongoClient = require('mongoose');
var url = "mongodb://localhost:27017/admin";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});

//类似于mysql的表 mongo字段

const user = MongoClient.model('account', new MongoClient.Schema({
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
