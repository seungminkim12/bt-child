/** 서버를 띄우기 위한 기본셋팅(express 라이브러리) */
const express = require("express");
const app= express(); /** 새로운 객체를 만듬 */

app.listen(2022,function(){
    console.log("연결됨")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
}) 