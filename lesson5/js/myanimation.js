var id;
var posX=0;
var posY=0;
var elem = document.getElementById("balloon"); 

document.getElementById("down").addEventListener("click",function() {
  
  var id = setInterval(frame, 25);
  posY=elem.y;
  posX=elem.x; 
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posY>=450) {
      clearInterval(id);
    } else {
      posY++; 
      elem.style.top = posY + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("up").addEventListener("click",function() {
  var id = setInterval(frame, 15);
  posY=elem.y;
  posX=elem.x; 
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posY <= 50) {
      clearInterval(id);
    } else {
      posY--; 
      elem.style.top = posY + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("right").addEventListener("click",function() {
  posY=elem.y;
  posX=elem.x; 
  var id = setInterval(frame, 25);
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posX >= 750) {
      clearInterval(id);
    } else {
      posX++;
      elem.style.left = posX + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("diagonal").addEventListener("click", function(){
  posY=elem.y;
  poxX=elem.x;
  var id = setInterval(frame, 30);
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posX >= 750) {
      clearInterval(id);
    } else {
      posX++;
      elem.style.left = posX + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
    if (posY <= 50) {
      clearInterval(id);
    } else {
      posY--; 
      elem.style.top = posY + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }

  }
});


document.getElementById("left").addEventListener("click",function() {
  posY=elem.y;
  posX=elem.x; 
  var id = setInterval(frame, 25);
  function frame() {
    document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
    if (posX <= 50) {
      clearInterval(id);
    } else {
      posX--;
      elem.style.left = posX + 'px'; 
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
  }
});

document.getElementById("rock").addEventListener("click",function() {
  posY=elem.y;
  posX=elem.x; 
  var dir='r';
  var id = setInterval(frame, 5);
  function frame() {
	document.getElementById("stop").addEventListener("click",function(){clearInterval(id);});
  	if (dir=='r'){
	    posX=posX+10; 
	    posY=posY+10;
        elem.style.left = posX + 'px';
        elem.style.top = posY + 'px';  
        dir='l';
      }  
     else {
     	posX=posX-10; 
     	posY=posY-10;
        elem.style.left = posX + 'px'; 
        elem.style.top = posY + 'px';  
        dir='r';
	} 
	
      document.getElementById("xCoord").value=elem.x;
      document.getElementById("yCoord").value=elem.y;
    }
});