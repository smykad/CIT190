// I coded this single javascript file to run the interface of all pages on the site

$(document).ready(function() {
    var w = window.innerWidth/2;
    var h = w*.7;
    // Added in this code to insert the canvas game inside of the div I had already created
    $("#mydiv")
            .html('<object data="pirategame/canvasGame.html" marginLeft="25%" width="' +w + '" height="' + h + '" style="overflow:auto;border:5px groove rgb(114, 137, 218)"/>');
    $("#mydiv2")
            .html('<object data="draganddrop/pirateDragNDrop.html" marginLeft="25%" width="' +w + '" height="' + h + '" style="overflow:auto;border:5px groove rgb(114, 137, 218)"/>');
    $("#mydiv3")
            .html('<object data="wanted/ttt.html" marginLeft="25%" width="' +w + '" height="' + h + '" style="overflow:auto;border:5px groove rgb(114, 137, 218)"/>');
    // event listeners for the navigation bar 
    $('#home').on('click', function(){location.assign("index.html")})
    $('#ttt').on('click', function(){location.assign("tictactoe.html")})
    $('#mem').on('click', function(){location.assign("canvas.html")})
    $('#dnd').on('click', function(){location.assign("draganddrop.html")})
    $('#txt').on('click', function(){location.assign("readme.md")})
    // I will be adding more for the other games readme's as well
    $('#rdp').on('click', function(){location.assign("pirategame/readme.txt")})
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('#navbar').offset().top;
       
       // Function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // If scrolling down, fix nav bar to the top
        if (scrollTop > stickyNavTop) { 
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky'); 
        }
    };
    stickyNav();
    // run the function everytime you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});