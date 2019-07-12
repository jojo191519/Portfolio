$(document).ready(function(){

    //as the page loads the icons fade in
    $('.flashMe1').hide().delay(1000).fadeIn(3000);
    $('.flashMe2').hide().delay(1200).fadeIn(3000);
    $('.flashMe3').hide().delay(1400).fadeIn(3000);
    $('.flashMe4').hide().delay(1600).fadeIn(3000);
    $('.flashMe5').hide().delay(0000).fadeIn(6000);

    //as the mouse goes over the nav icon, it loses opacity
    $("#About").mouseenter(function(){
        $("#About").fadeTo(1000, 0.4);
    });

    //as the mouse leaves the nav icon it re gains opacity
    $('#About').mouseleave(function(){
        $('#About').fadeTo(500,1.0);
    });

    //as the mouse goes over the nav icon, it loses opacity
    $("#Studies").mouseenter(function(){
        $("#Studies").fadeTo(1000, 0.4);
    });

    //as the mouse leaves the nav icon it re gains opacity
    $('#Studies').mouseleave(function(){
        $('#Studies').fadeTo(500,1.0);
    });

    //as the mouse goes over the nav icon, it loses opacity
    $("#Portfolio").mouseenter(function(){
        $("#Portfolio").fadeTo(1000, 0.4);
    });

    //as the mouse leaves the nav icon it re gains opacity
    $('#Portfolio').mouseleave(function(){
        $('#Portfolio').fadeTo(500,1.0);
    });

     //as the mouse goes over the nav icon, it loses opacity
     $("#Contact").mouseenter(function(){
        $("#Contact").fadeTo(1000, 0.4);
    });

    //as the mouse leaves the nav icon it re gains opacity
    $('#Contact').mouseleave(function(){
        $('#Contact').fadeTo(500,1.0);   
    }); 
});