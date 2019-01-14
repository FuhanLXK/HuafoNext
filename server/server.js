var express = require('express');
var user = require('../models/db.js');
var app = express()
var mongoose = require('mongoose');
var cors = require('cors');

var url = "mongodb://localhost:27017/admin";

/*连接数据库并作为总开关*/
mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");
  db.close();
});

mongoose.connection.on('connected',function(){
    console.log("mongoose content success")
})
// console.log(user)


// mongoose.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });

app.use(cors());

// user.create({
//     username:"admin",
//     uid:"2",
//     password:"admin123"
// })
// var router = require('./router/index.js')

// app.get('/health/fetchdorm', router.fetchDorm);
//req请求，res返回
app.get('/',function(req,res){
  res.send("启动成功")

})

app.get('/data',function(req,res){
    res.json([{
        "content":"悻悻之光，如漫漫长夜， 永恒不灭",
        "username":"悻光",
        "url":"http://www.huafuo.net/serverImg/userimg0.png"
    },{
        "content":"人总是活在矛盾当中，对人类的绝望以及信赖，我们在这夹缝间求生存",
        "username":"浮寒",
        "url":"http://www.huafuo.net/serverImg/userimg1.png"
    },{
        "content":"世间情动 不过盛夏白瓷梅子汤 碎冰碰壁当啷响 世间情劫 不过三九黑瓦黄连鲜 糖心落低苦作言。",
        "username":"星空",
        "url":"http://www.huafuo.net/serverImg/userimg2.png"
    },{
        "content":"我没说话，不意味着我心情差。有时候，我就是想安静点。",
        "username":"浮寒",
        "url":"http://www.huafuo.net/serverImg/userimg1.png"
    },{
        "content":"那天的天很蓝，微风吹起你的长发和衣角，你在画风景，而我在画你。",
        "username":"浩瀚",
        "url":"http://www.huafuo.net/serverImg/login.jpg"
    },{
        "content":"有很多时候，真的要安静的发会呆，脑子一片空白，反而更清晰。",
        "username":"星空",
        "url":"http://www.huafuo.net/serverImg/userimg2.png"
    }])

    /*查询语句*/
    // user.find({},function(err,doc){
    //     res.json(doc)
    // })
})

app.listen(3030,() => {
  console.log("node 3030端口成功")
})
