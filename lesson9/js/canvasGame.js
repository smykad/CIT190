var w = window.innerWidth/2;
var h = w*.55;
var c = w*.05;
var ow = w*.005;
var oh = w*.4; 

var myGamePiece;
var myObstacles = [];
var myScore;
var myMusic;
var myCrash;
var myGameOverText;

const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');


function startGame() {
    document.getElementById("play").style.visibility = "hidden"; 
    myGamePiece = new component(c, c, 'none', w*.01, h*.5, 'pirate');
    myScore = new component(c*.75+"px", "Consoloas", "white", w*.01, h*.06, "text");
    myGameOverText = new component(c*.75+"px", "Consoloas", "white", w*.01, h*.06, "text");
    mySplash = new sound("media/piratesink.wav");
    myMusic = new sound("crowsnest.mp3");
    myGameArea.start();
    
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }


// Create the canvas 
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

// Create the component 

function component(width, height, color, x, y, type) {
    const myShip = new Image();
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    myShip.src = "media/pirate.png";

    this.update = function() {
        if (this.type == "pirate"){
            ctx.drawImage(myShip, this.x, this.y, this.width, this.height);
        }
        else if (this.type =="text"){
            var myW = ctx.measureText(this.text).width;
            var myX = this.x;
            var myY = this.y-c*.52;
            var myH = c*.6;
            drawBorder(myX, myY, myW, myH)
            ctx.fillStyle = "#2c2f33";
            ctx.fillRect(myX, myY, myW, myH);

            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);

            function drawBorder(xPos, yPos, width, height, thickness = 1.5){
                ctx.fillStyle='#ffffff';
                ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
            }
        }
        else{
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    }

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) ||(myright < otherleft) || (myleft > otherright)) {
        crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            mySplash.play();
            myMusic.stop();
            myGameArea.stop();
            myGameArea.clear();
            myScore.text = "SCORE: " + myGameArea.frameNo;
            myScore.update();
            myGameOverText.text = "GAME OVER";
            myGameOverText.update();
            document.getElementById("play").style.visibility = "visible"; 
            return;
        } 
    } 
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if(myGameArea.frameNo == 100){
        myMusic.play();
    }
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = h*.20 ;
        maxHeight = h*.5;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = c*1.5;
        maxGap = c*3;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "aliceblue", x, 0));
        myObstacles.push(new component(10, x - height - gap, "aliceblue", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    
    myGamePiece.newPos();    
    myGamePiece.update();
    
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() { myGamePiece.speedY = -2; }
function movedown() { myGamePiece.speedY = 2; }
function moveleft() { myGamePiece.speedX = -2; }
function moveright() { myGamePiece.speedX = 2; }
function clearmove() { myGamePiece.speedX = 0; myGamePiece.speedY = 0; }

document.addEventListener('keydown', (event)=>{
    var name = event.key;
    if(name==='w' || name==='ArrowUp'){moveup();}
    if(name==='s' || name==='ArrowDown'){movedown();}
    if(name==='a' || name==='ArrowLeft'){moveleft();}
    if(name==='d' || name==='ArrowRight'){moveright();}
}, false);
document.addEventListener('keyup', (event)=>{clearmove();}, false);

/* Up Button
up.addEventListener('mousedown', event => {moveup();})
up.addEventListener('mouseup', event => {clearmove();})
up.addEventListener('touchstart', event => {moveup();})

// Down Button
down.addEventListener('mousedown', event => {movedown();})
down.addEventListener('mouseup', event => {clearmove();})
down.addEventListener('touchstart', event => {movedown();})

// Left Button
left.addEventListener('mousedown', event => {moveleft();})
left.addEventListener('mouseup', event => {clearmove();})
left.addEventListener('touchstart', event => {moveleft();})

// Right Button
right.addEventListener('mousedown', event => {moveright();})
right.addEventListener('mouseup', event => {clearmove();})
right.addEventListener('touchstart', event => {moveright();})
*/