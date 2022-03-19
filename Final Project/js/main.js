$(document).ready(function(){

    $('#game1').on('click', function(){location.assign("game1.html");});
    $('#game2').on('click', function(){location.assign("game2.html");});
    $('#game3').on('click', function(){location.assign("game3.html");});
    
    $(function(){
        $('div').hide().delay(1250).fadeIn(700);
    });
});

