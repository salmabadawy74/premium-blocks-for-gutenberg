  
    jQuery(document).ready(function($) {
        setTimeout(() => { 

        //Functions to animate flip box block from left to write
           
        var flipboxElement = $(".premium-flip-main-box");

        // $(".premium-flip-main-box").click(function(){
        //      console.log("yesssssss");
        //     flipboxElement.removeClass("flipped");
            
        //   });

        flipboxElement.on("mouseenter", function() {

            // if( flipboxElement.dataCurrent.value == "isPrimary back" ){
            //     $(this).addClass("flipped");
            // }
            // else{
            //     $(this).addClass("not-flipped");
            // }
           
            $(this).addClass("flipped");
        if (
            $(this)
            .children(".premium-flip-front")
            .hasClass("premium-flip-frontrl")
        ) {
            $(this)
            .find(
                ".premium-flip-front .premium-flip-front-content-container .premium-flip-front-content .premium-flip-text-wrapper"
            )
            .removeClass("PafadeInLeft")
            .addClass("PafadeInRight");

            $(this)
            .find(
                ".premium-flip-back .premium-flip-back-content-container .premium-flip-back-content .premium-flip-back-text-wrapper"
            )
            .addClass("PafadeInLeft")
            .removeClass("PafadeInRight");
        } else if (
            $(this)
            .children(".premium-flip-front")
            .hasClass("premium-flip-frontlr")
        ) {
            $(this)
            .find(
                ".premium-flip-front .premium-flip-front-content-container .premium-flip-front-content .premium-flip-text-wrapper"
            )
            .removeClass("PafadeInRevLeft")
            .addClass("PafadeInRevRight");

            $(this)
            .find(
                ".premium-flip-back .premium-flip-back-content-container .premium-flip-back-content .premium-flip-back-text-wrapper"
            )
            .addClass("PafadeInRevLeft")
            .removeClass("PafadeInRevRight");
        }
        });
        flipboxElement.on("mouseleave", function() {
            $(this).removeClass("flipped");
        if (
            $(this)
            .children(".premium-flip-front")
            .hasClass("premium-flip-frontrl")
        ) {
            $(this)
            .find(
                ".premium-flip-front .premium-flip-front-content-container .premium-flip-front-content .premium-flip-text-wrapper"
            )
            .addClass("PafadeInLeft")
            .removeClass("PafadeInRight");

            $(this)
            .find(
                ".premium-flip-back .premium-flip-back-content-container .premium-flip-back-content .premium-flip-back-text-wrapper"
            )
            .removeClass("PafadeInLeft")
            .addClass("PafadeInRight");
        } else if (
            $(this)
            .children(".premium-flip-front")
            .hasClass("premium-flip-frontlr")
        ) {
            $(this)
            .find(
                ".premium-flip-front .premium-flip-front-content-container .premium-flip-front-content .premium-flip-text-wrapper"
            )
            .addClass("PafadeInRevLeft")
            .removeClass("PafadeInRevRight");

            $(this)
            .find(
                ".premium-flip-back .premium-flip-back-content-container .premium-flip-back-content .premium-flip-back-text-wrapper"
            )
            .removeClass("PafadeInRevLeft")
            .addClass("PafadeInRevRight");
        }
        });

    }, 2000);
});