$(document).ready(function() {
    // get the width and heights of the window so it can be adjusted according to the size of the users window

    var w = window.innerWidth*.8;
    var h = window.innerWidth*.4;
    var c = w*.15;
    
    // adjust the size of the mygame object
    $("#myGame").html('<object width="' + w + '" height="' + h + '"/>');
    $('#myGame').prepend('<img class="drag" src="media/bonclay.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/brook.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/chopper.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/franky.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/luffy.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/nami.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/sanji.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/sogeking.png"' + c + '" height="' + c + '" />');
    $('#myGame').prepend('<img class="drag" src="media/zoro.png"' + c + '" height="' + c + '" />');
    $('.drag').draggable({
        containment: "#myGame"
    });
    
});