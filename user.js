var express = require('express'); 
var fs = require('fs');
var app = express(); 


var server = app.listen(3000, listening); 
function listening(){
    console.log("listening ..."); 
}
var myInfoData = fs.readFileSync('mydata.json'); // This will give the raw data / The line below won't execute in a readFileSync function () until the  readFileSync ends 
var information = JSON.parse(myInfoData);
app.get('/user/:first/:second?', myinfo);
//This function below is a callback 

function myinfo(request, response){
    
    var mydata = request.params;
    
    var first = mydata.first; 
    var second = mydata.second;
    information[first] = second; 
    
   var reply = {
       msg: "Thanks Aaron"
    
   }
   response.send(reply)
    
}

app.get('/contact', info);
function info(request, response){
    response.send(information);
}




app.get('/searchUser/:first/', searchIndi); 
function searchIndi(request, response){
    var first = request.params.first;
    var reply; 
    if(information[first]){
        reply = {
            status: "Found", 
            first: first, 
            second: information[first]
        }
    }else {
        reply = {status: "Not Found", 
            first: first
                }
    }
    response.send(reply);
}