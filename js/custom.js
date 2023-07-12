

$(document).ready(function(){
    $(".responsive-bar").click(function(){
        if($(".open-mob-bar").css('display')=='block'){
        $(".open-mob-bar").slideUp(1000);
    }

    if($(".open-mob-bar").css('display')=='none'){
       $(".open-mob-bar").slideDown(1000);
    }

    });
});

