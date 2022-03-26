var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let box = document.querySelector(".canvas")
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log({width, height});
// background color
ctx.fillStyle="skyblue";
ctx.fillRect(0,0,240,240);
ctx.fill();

// triangle
ctx.fillStyle="orange";

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo((width/2)-10,(height/2)-10);
ctx.lineTo((width/2)-10,10);
ctx.lineTo(10,10);
ctx.fill();
ctx.closePath();


// rectangle
ctx.fillStyle="blue";
ctx.lineWidth=5;
ctx.strokeStyle="orange";

ctx.beginPath();
ctx.moveTo(width-10,height-10);
ctx.lineTo(width-10,(height/2)+10);
ctx.lineTo((height/2)+10, (width/2)+10);
ctx.lineTo((width/2)+10, height-10);
ctx.lineTo(width-10,height-10);
ctx.stroke();
ctx.fill();
ctx.closePath();


// circle
var y = (height/4);

ctx.fillStyle="limegreen";

ctx.beginPath();
ctx.arc(y*3,y,y-25,0,Math.PI*2,true);
ctx.fill();
ctx.closePath();

// text
ctx.font = "30px 'Bradley Hand ITC'";
ctx.lineWidth = 3;
ctx.strokeStyle = "white";
ctx.strokeText("My logo 2022", 10,y*3);
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.strokeText("My logo 2022", 10,y*3);



