// variables for determining the size of the canvas
// By doing this the page is responsive based on the size of the screen the user is on so it adjusts 
// the size of everything based on scale
var w = window.innerWidth/2;
var h = w*.55;
var c = w*.05;
var ow = w*.005;
var oh = w*.4; 

// these are variables for the objects
var myGamePiece;
var myObstacles = [];
var myScore;
var myMusic;
var myCrash;
var myGameOverText;

// constant variables for movement methods 

const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');

// Method for starting the game that loads when the page loads
function startGame() {

    // Hides the play button upon loading the page 
    document.getElementById("play").style.visibility = "hidden"; 

    // creating a new object for the game piece, the pirate ship
    myGamePiece = new component(c, c, 'none', w*.01, h*.5, 'pirate');

    // creates the score text object
    myScore = new component(c*.75+"px", "Consoloas", "white", w*.01, h*.06, "text");

    // Creates Game over text 
    myGameOverText = new component(c*.75+"px", "Consoloas", "white", w*.01, h*.06, "text");

    // creates the sound object that get's played when the player collides with an object
    mySplash = new sound("media/piratesink.wav");

    // creates the music that will play when it's called in the code
    myMusic = new sound("media/crowsnest.mp3");

    // calls the start method for the game
    myGameArea.start();
    
}

// function for sound in the game

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

        // the canvas is using the global variables that I created from getting the users screen dimensions
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
        // creates the pirate ship here
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

            // created this function to draw a border around the text so that it was cleanly displayed

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
    // used for the movement of objects
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    }
    // collision detection
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

// update game area method 

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        // detects if I crash with an object and if so stops the music clears the area and 
        // sets the play button to visible
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
    // increments the frames
    myGameArea.frameNo += 1;
    // set this up here because you can't autoplay audio in html5, so I give the user time to interact with the game
    // once it hits 100 the music starts playing
    if(myGameArea.frameNo == 100){
        myMusic.play();
    }
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        // this randomly generates randomly sized objects for the ship to dodge
        x = myGameArea.canvas.width;
        minHeight = h*.20 ;
        maxHeight = h*.5;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        // set the minimum gap to be 1.5 times the height of the ship
        minGap = c*1.5;
        // set the maximum gap to be 3 times the height of the ship
        maxGap = c*3;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "aliceblue", x, 0));
        myObstacles.push(new component(10, x - height - gap, "aliceblue", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    // updates the score
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    
    myGamePiece.newPos();    
    myGamePiece.update();
    
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

// movement functions

function moveup() { myGamePiece.speedY = -2; }
function movedown() { myGamePiece.speedY = 2; }
function moveleft() { myGamePiece.speedX = -2; }
function moveright() { myGamePiece.speedX = 2; }
function clearmove() { myGamePiece.speedX = 0; myGamePiece.speedY = 0; }

// added event listners for key presses for movement based on the users preference

document.addEventListener('keydown', (event)=>{
    var name = event.key;
    if(name==='w' || name==='ArrowUp'){moveup();}
    if(name==='s' || name==='ArrowDown'){movedown();}
    if(name==='a' || name==='ArrowLeft'){moveleft();}
    if(name==='d' || name==='ArrowRight'){moveright();}
}, false);
document.addEventListener('keyup', (event)=>{clearmove();}, false);


// This bit of code down here is event listeners for buttons in the html
// they could be implemented so the game would be playable on mobile

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