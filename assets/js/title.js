jQuery(document).ready(function ($) {
    const $title = $(".premium-title");
    var $lottieIcons = $('.premium-lottie-animation');
    var $titleContainer = $(".premium-title-container"),
        $titleElement = $titleContainer.find('.premium-title-text-title');

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
    if ($titleContainer.hasClass('style9')) {
        var $style9 = $(".premium-title-style9__wrap");

        $style9.each(function () {
            var elm = $(this);
            var holdTime = elm.attr('data-blur-delay') * 1000;
            elm.attr('data-animation-blur', 'process')
            elm.find('.premium-title-style9-letter').each(function (index, letter) {
                index += 1;
                var animateDelay;
                if ($('body').hasClass('rtl')) {
                    animateDelay = 0.2 / index + 's';
                } else {
                    animateDelay = index / 20 + 's';
                }
                $(letter).css({
                    '-webkit-animation-delay': animateDelay,
                    'animation-delay': animateDelay
                });
            })
            setInterval(function () {
                elm.attr('data-animation-blur', 'done')
                setTimeout(function () {
                    elm.attr('data-animation-blur', 'process')
                }, 150);
            }, holdTime);
        });
    }


    if ($titleContainer.hasClass('style8')) {
        var holdTime = $titleContainer.attr('data-shiny-delay') * 1000,
            duration = $titleContainer.attr('data-shiny-dur') * 1000;
        console.log(holdTime, duration)
        function shinyEffect() {
            $titleElement.get(0).setAttribute('data-animation', 'shiny');
            setTimeout(function () {
                $titleElement.removeAttr('data-animation')
            }, duration);
        }

        (function repeat() {
            shinyEffect();
            setTimeout(repeat, holdTime);
        })();
    }

    $lottieIcons.each(function (index, item) {
        var $item = $(item);
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