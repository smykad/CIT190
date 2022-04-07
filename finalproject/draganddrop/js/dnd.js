$(document).ready(function() {
    // get the width and heights of the window so it can be adjusted according to the size of the users window

    var w = window.innerWidth*.8;
    var h = window.innerWidth*.4;
    var c = w*.1;
    
    // adjust the size of the mygame object
    $("#myGame").html('<object width="' + w + '" height="' + h + '"/>');
    $('#myGame').prepend('<img class="drag" src="media/pirate.png"' + c + '" height="' + c + '" />');
    $('#myGame').append('<img class="drag" src="media/pirate.png"' + c + '" height="' + c + '" />');
    
    $('.drag').draggable({
        containment: "#myGame"
    });
    
});