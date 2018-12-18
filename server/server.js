var express = require('express');
var db = require('../models/db.js');
var app = express()
var mongoose = require('mongoose');
var cors = require('cors');

app.use(cors());
// var router = require('./router/index.js')

// app.get('/health/fetchdorm', router.fetchDorm);
//req请求，res返回
app.get('/',function(req,res){
  res.send("启动成功")

})

app.get('/data',function(req,res){
  res.json([
    {
      id:1,
      name:"fuhan",
      password:"lxk48651119",
    }
  ])
})

app.listen(3030,() => {
  console.log("node 3030端口成功")
})
