$(document).ready(function() {
    
    // event listeners for the navigation bar 
    $('#home').on('click', function(){location.assign("index.html")})
    $('#ttt').on('click', function(){location.assign("tictactoe.html")})
    $('#mem').on('click', function(){location.assign("memory.html")})
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