var w = window.innerWidth/2;
var h = w*.55;
var c = w*.05;
var ow = w*.005;
var oh = w*.4; 


function startGame() {
    myGameArea.start();
    myGamePiece = new component(c, c, "blue", w*.01, h*.5)
    myObstacle = new component(ow, oh, "orange", w*.25, h*.5)
}


// Create the canvas 
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.stop();
      } 
    else {
        myGameArea.clear();
        myObstacle.x += -1;
        myObstacle.update();
        myGamePiece.newPos();    
        myGamePiece.update();
    }
}

function moveup() { myGamePiece.speedY = -1; }

function movedown() { myGamePiece.speedY = 1; }

function moveleft() { myGamePiece.speedX = -1; }

function moveright() { myGamePiece.speedX = 1; }

function clearmove() { myGamePiece.speedX = 0; myGamePiece.speedY = 0; }

const up = document.getElementById('up')
const down = document.getElementById('down')
const left = document.getElementById('left')
const right = document.getElementById('right')

// Up Button
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

document.addEventListener('keydown', (event)=>{
    var name = event.key;
    if(name==='w' || name==='ArrowUp'){moveup();}
    if(name==='s' || name==='ArrowDown'){movedown();}
    if(name==='a' || name==='ArrowLeft'){moveleft();}
    if(name==='d' || name==='ArrowRight'){moveright();}
}, false);
document.addEventListener('keyup', (event)=>{clearmove();}, false);