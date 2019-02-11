//.stringify() gives you the string {"result:" 45}
//.parse() you can access the result by something.result = 45

var fs = require('fs');  //This is part of node 
var express = require('express'); 

//var http = require('http');
var data = fs.readFileSync('words.json'); //This will give raw data 
var words = JSON.parse(data); // This will give you readable data that you can access by using (.)
//var server = http.createServer();
var app = express(); 
var server = app.listen(3000, listening); 


function listening(){
    console.log("listening ..."); 
}
app.use(express.static('website'));
//The colon info infront of it tells that the user is searching for something  
app.get('/add/:word/:score?', addWord); // sendflower is the callback (check Screen shot in folder)
//if you dont add a score the ? is going to make it work 
//Takes two arguments 
function addWord(request, response){
//    response.send("I love dogs and flowers");(check Screen shot in folder)
    var data = request.params; 
//    var num = data.num; //num is going to be the times it want to be print it out (check Screen shot in folder)
    var word = data.word; 
    var score = Number(data.score); //I added Number() so it will transform the string to a number
    var reply;
    if(!score){
         var reply = {
            msg: "Must enter a score"
             
        }
             response.send(reply)
    }else{
            words[word] = score; // It takes the word object and it inserts the first/:word and then ???
        var data = JSON.stringify(words, null, 2);// 
        fs.writeFile('words.json', data, finished); //Write file is part of the node library, finished is the comeback / Also it will write whatever is passed as a long string/ The 2 is for make it as a "list" 
        function finished(err){
            console.log('all set')
                  reply = {
        word: word, 
                      score: score, 
                      status: "success"
    }
               response.send(reply)  
        }
   
    }
//    var reply = "";  
//    for (var i = 0; i < num; i++){
//        reply += " I love " + data.flower + " too";
//    }(check Screen shot in folder)

   

}
app.get('/all', sendAll);
function sendAll(request, response){
    response.send(words);
}

app.get('/search/:word/', searchWord);
function searchWord(request,response){
    var word = request.params.word; 
    var reply; 
    if(words[word]){
        reply = {
            status: "found", 
            word: word, 
            score: words[word]
        }
    }else{
        reply = {
            status: "Not found",
            word: word
        }
    }
    response.send(reply);
}



