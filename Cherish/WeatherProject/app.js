const { response } = require("express");
const express=require("express");
const bodyParser=require("body-parser");

const https=require("https");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

/*reckless*/
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html"); 
});


app.post("/",function(req,res){
    const cityName=req.body.City;
    const apiKey="45e529a83af90098299008944c28a011";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData= JSON.parse(data);
            // const object={
            //     name: "Cherish",
            //     Hobbie: "Football"
            // }
            // console.log(JSON.stringify(object));
            const temp=weatherData.main.temp;
            const description1=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const iconURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
            res.write("<h1>The temp in "+cityName+" is "+temp+"</h1>");
            res.write("<h1>The weather in "+cityName+" is "+description1+"</h1>");
            res.write("<img src="+iconURL+">")
            res.send(); 
        });
    
    });
});



app.listen(3000,function(){
    console.log("Server is running on 3000");
});