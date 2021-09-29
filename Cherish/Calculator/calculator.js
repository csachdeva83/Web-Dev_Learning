const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post('/',function(req,res){
    // console.log(req.body.num1);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is "+result);
    res.send("Thanks for attempting it");
})

app.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator',function(req,res){
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var bmi=weight/(height**2);
    res.send("Your BMI is "+bmi);
    res.send("Thanks for attempting it")
})

app.listen(3000,function(){
    console.log("Local Host 3000 is live");
})