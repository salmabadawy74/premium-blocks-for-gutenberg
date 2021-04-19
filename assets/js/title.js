jQuery(document).ready(function ($) {
    const $title = $(".premium-title");
    var $lottieIcons = $('.premium-lottie-animation');

    const addFontToHead = fontFamily => {
        const head = document.head;
        const link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css?family=" +
            fontFamily.replace(/\s+/g, "+") +
            ":" +
            "regular";
        head.appendChild(link);
    };



    $lottieIcons.each(function (index, item) {
        var $item = $(item);
        console.log($item)
        instance = new premiumLottieAnimations($item);
        instance.init();
    });


    window.premiumLottieAnimations = function ($elem) {
        var self = this,
            $lottie = null;
        if ($elem.hasClass("premium-lottie-animation")) {
            $lottie = $elem;
        } else {
            $lottie = $elem.find(".premium-lottie-animation");
        }

        self.init = function () {
            var loop = $lottie.data("lottie-loop"),
                reverse = $lottie.data("lottie-reverse"),
                trigger = $lottie.data("lottie-hover"),
                speed = $lottie.data("lottie-speed"),
                scroll = $lottie.data("lottie-scroll"),
                viewPort = $lottie.data("lottie-viewport"),
                renderer = $lottie.data("lottie-render");

            var animItem = lottie.loadAnimation({
                container: $lottie,
                renderer: renderer || 'svg',
                loop: loop ? true : false,
                path: $lottie.data("lottie-url"),
                autoplay: true,
            });

            if (reverse) {
                animItem.setDirection(-1);
            }
        }
    }


    $title.map((index, title) => {
        let $title = $(title),
            titleFont = $title.find(".premium-title-text-title").css("font-family")

        addFontToHead(titleFont);

    });
});