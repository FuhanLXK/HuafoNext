var express = require('express');
var user = require('../models/db.js');
var app = express()
var mongoose = require('mongoose');
var cors = require('cors');

// var url = "mongodb://localhost:27017/admin";
//
// /*连接数据库并作为总开关*/
// mongoose.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("数据库已创建!");
//   db.close();
// });
//
// mongoose.connection.on('connected',function(){
//     console.log("mongoose content success")
// })


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
  console.log(req.query)
    res.json([{
        "content":"悻悻之光，如漫漫长夜， 永恒不灭",
        "username":"悻光",
        "url":"http://www.huafuo.net/HTTPIMG/userimg0.JPG"
    },{
        "content":"人总是活在矛盾当中，对人类的绝望以及信赖，我们在这夹缝间求生存",
        "username":"浮寒",
        "url":"http://www.huafuo.net/HTTPIMG/userimg1.JPG"
    },{
        "content":"世间情动 不过盛夏白瓷梅子汤 碎冰碰壁当啷响 世间情劫 不过三九黑瓦黄连鲜 糖心落低苦作言。",
        "username":"星空",
        "url":"http://www.huafuo.net/HTTPIMG/userimg2.JPG"
    },{
        "content":"我没说话，不意味着我心情差。有时候，我就是想安静点。",
        "username":"浮寒",
        "url":"http://www.huafuo.net/HTTPIMG/userimg1.JPG"
    },{
        "content":"那天的天很蓝，微风吹起你的长发和衣角，你在画风景，而我在画你。",
        "username":"浩瀚",
        "url":"http://www.huafuo.net/HTTPIMG/userimg0.JPG"
    },{
        "content":"有很多时候，真的要安静的发会呆，脑子一片空白，反而更清晰。",
        "username":"星空",
        "url":"http://www.huafuo.net/HTTPIMG/userimg2.JPG"
    }])

    /*查询语句*/
    // user.find({},function(err,doc){
    //     res.json(doc)
    // })
})

 let listMessage = [{
   "name":"悻光",
   "message":"楼下一个男人病得要死，那间隔壁的一家唱着留声机，对面是弄孩子。楼上有两人狂笑；还有打牌声。河中的船上有女人哭着她死去的母亲。人类的悲欢并不相通，我只觉得他们吵闹。",
   "telplate":"iphone 8s plus",
   "data":"2019年1月18",
   "url":"http://www.huafuo.net/HTTPIMG/userimg0.JPG"
 },{
   "name":"浮寒",
   "message":"世间情动 不过盛夏白瓷梅子汤 碎冰碰壁当啷响 世间情劫 不过三九黑瓦黄连鲜 糖心落低苦作言。",
   "telplate":"iphone 7s",
   "data":"2019年1月17",
   "url":"http://www.huafuo.net/HTTPIMG/userimg1.JPG"
 },{
   "name":"浮寒",
   "message":"有很多时候，真的要安静的发会呆，脑子一片空白，反而更清晰。",
   "telplate":"iphone 7s",
   "data":"2019年1月17",
   "url":"http://www.huafuo.net/HTTPIMG/userimg1.JPG"
 },{
   "name":"星空",
   "message":"世间情动 不过盛夏白瓷梅子汤 碎冰碰壁当啷响 世间情劫 不过三九黑瓦黄连鲜 糖心落低苦作言。",
   "telplate":"iphone 7s",
   "data":"2019年1月17",
   "url":"http://www.huafuo.net/HTTPIMG/userimg2.JPG"
 }]

/*留言板数据*/
app.post('/messagesList',function(req,res){
  res.json(listMessage)
})

/*发送新留言*/
app.get('/getDataMessage',function(req,res){
  res.json(listMessage.push(req.query))
})

/*首页导航*/
app.get('/headerIndex',function(req,res){
  res.json([{
    name:"首页",
    link:"/"
  },{
    name:"悻悻之光",
    link:"/"
  },{
    name:"长夜漫漫",
    link:"/"
  },{
    name:"论坛",
    link:"/"
  },{
    name:"关于此站",
    link:"/"
  }])
})

app.listen(3030,() => {
  console.log("node 3030端口成功")
})
