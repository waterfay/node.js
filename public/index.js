const express=require("express");//載入Express
const app=express();//建立application物件
//處理網站的靜態檔案網址對應
app.use(express.static("public"));

// 把後端專案資料夾中的靜態檔案名,直接對應到網址上
//     專案資料夾/public/landscape.jpg => 主機名稱/landscape.jpg
//     專案資料夾/public/index.html  => 主機名稱/index.html
//     專案資料夾/public/style.css  => 主機名稱/style.css
//處理來自路徑/的連線
// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });
//處理來自路徑/text的連線
app.get("/test",function(req,res){
    res.send("Hello Test");
});
//處理來自路徑/img/landscape.jpg的連線
// app.get("/hello.php",function(req,res){
//     res.sendFile(__dirname+"/img/landscape.jpg");
// });

//https://tw.search.yahoo.com/search?p=%E4%BA%94%E7%A6%8F%E6%97%85%E9%81%8A&fr=yfp-search-sb
//啟動伺服器在http://127.0.0.1:3000/路徑?參數名稱=資料&參數名稱=資料&

//啟動伺服器在http://127.0.0.1:3000/路徑
app.listen(3000,function(){
    console.log("Server Started");
});