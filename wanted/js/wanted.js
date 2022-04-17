$(document).ready(function() {
    // get the width and heights of the window so it can be adjusted according to the size of the users window

    var w = window.innerWidth*.8;
    var h = window.innerWidth*.4;

    // adjust the size of the mygame object
    
    $("#myGame").html('<object width="' + w + '" height="' + h*.1 + '"/>');
    $('#myGame').prepend('<img id="myPic" class="myPoster" src="media/wanted.png" style="width:'+ w*.4 + 'px; height:' + h*.9 + 'px;" />');
    
    $("#wh").text('w: ' + w + 'h: ' + h)
    // 1228 614

});