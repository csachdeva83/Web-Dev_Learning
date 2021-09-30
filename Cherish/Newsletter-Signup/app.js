const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const request=require('request');
const https=require('https');
const { post } = require('request');
const { response } = require('express');

app.use(express.static("Public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post('/',function(req,res){
    const firstName=req.body.FirstName;
    const secondName=req.body.SecondName;
    const getEmail=req.body.GetEmail;
    
    const data={
        members: [
            {
                email_address:getEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName
                }
            }
        ]
    };

    const jsonData=JSON.stringify(data);

    const url="https://us5.api.mailchimp.com/3.0/lists/afc9fb0bea" //Error in us5
 
    const options={
        method: "POST",
        auth: "cherish16 : 90368ec91637e513088e61ae69f41a33-us5"
    }
    
    const request= https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});




// 90368ec91637e513088e61ae69f41a33-us5  API KEY
// afc9fb0bea    List Id