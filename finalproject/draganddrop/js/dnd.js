var w = window.innerWidth*.9;
var h = window.innerWidth*.6;

function startGame(){
    myGameArea.start();
    
}

// Create the canvas 
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        
    }
}