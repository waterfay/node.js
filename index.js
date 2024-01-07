const express=require("express");//載入Express
const app=express();//建立application物件
//處理來自路徑/的連線
app.get("/",function(req,res){
    res.send("Hello Express.js");
});
//處理來自路徑/text的連線
app.get("/test",function(req,res){
    res.send("Hello Test");
});
//啟動伺服器在http://127.0.0.1:3000/路徑
app.listen(3000,function(){
    console.log("Server Started");
});