$(document).ready(function() {
    var w = window.innerWidth/2;
    var h = w*.7;
    
    $("#mydiv")
            .html('<object data="https://lisabalbach.com/smykad/CIT190/lesson9/canvasGame.html" marginLeft="25%" width="' +w + '" height="' + h + '" style="overflow:auto;border:5px groove rgb(114, 137, 218)"/>');
    // event listeners for the navigation bar 
    $('#home').on('click', function(){location.assign("index.html")})
    $('#ttt').on('click', function(){location.assign("tictactoe.html")})
    $('#mem').on('click', function(){location.assign("canvas.html")})
    $('#dnd').on('click', function(){location.assign("draganddrop.html")})
    $('#txt').on('click', function(){location.assign("readme.md")})
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