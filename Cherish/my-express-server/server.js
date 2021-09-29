const express=require("express");
const app=express();
app.get('/',function(request,response){
    response.send("<h1>Hello Cherish</h1>");
    response.send("<h1>Hello Cherish</h1>");
})
app.get('/contact',function(req,res){
    res.send("cherish@gmail.com");
})

app.get('/hobbies',function(req,res){
    res.send("Football");
})

app.get('/about',function(req,res){
    res.send("Cherish Sachdeva: Open Source Enthusiast and Competitive Programmer");
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
});