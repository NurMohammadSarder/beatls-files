$(document).ready(function(){


    $(window).load(function(){
        $(".pre-loader").fadeOut();
    })

    $(".btn-top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    });
 

    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        // console.log(scrolling);
        if(scrolling >= 128){
            $(".menu-bg").addClass("menu-fixed");
        }
        else {
            $(".menu-bg").removeClass("menu-fixed");
        };

        if(scrolling >=380) {
            $(".btn-top").fadeIn();
        }
        else{
            $(".btn-top").fadeOut();
        };
    });

    $(".full-body").addClass("pop").delay(200)
    $(".pop-up-bg").delay(100).fadeIn(1000);

    $(".pop-close").click(function(){
        $(".pop-up").fadeOut(50);
        $(".pop-up-bg").fadeOut(100);
        $(".full-body").removeClass("pop");
    });

});