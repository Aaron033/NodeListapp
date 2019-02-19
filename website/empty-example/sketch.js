function setup() {
 createCanvas(400, 400);
    background(51);
    loadJSON('/all', gotData); 
    console.log('Hey');
}

function gotData(data){
    console.log(data);
}

