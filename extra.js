var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('Hey it Worked');
})

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');

var fruits = ["Bananas", "Oranges", "Grapes", "Apples", "Pomgranade", "Watermelone","Strawberries", "Pinaple", "Plumps"]; 

document.getElementById("demo").innerHTML = fruits; 

function myFunction(){
        fruits.sort(); 
  document.getElementById("demo").innerHTML = fruits;
    
   var x =document.getElementById("demo"); 
    if(x.style.display === "none"){
         x.style.display = "block"; 
    }else{
        x.style.display = "none";
    } 
}

console.log(words);


 New code 

var txt; 
function preload(){
    txt = loadStrings("readMe.txt"); 
}

function setup(){
    noCanvas(); 
    console.log(txt);
}