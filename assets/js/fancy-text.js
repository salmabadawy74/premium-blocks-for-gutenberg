jQuery(function ($) {
    const $fancyTextBlocks = $(".premium-fancy-text");
    $fancyTextBlocks.map((index, elem) => {
        let $elem = $(elem),
            id = $elem.attr('id'),
            settings = $elem.data(),
            effect = $elem.data('effect'),
            strings = $elem.data('strings'),
            fancyStrings = strings.split(",")

        if (effect === 'typing') {
            let instance = null;

            // $('#' + id + ' .premium-fancy-text-title-type').attr("id", "text-fancy-text")
            var fancyTextID = '#' + $elem.find('.premium-fancy-text-title-type').attr('id');
            console.log(fancyTextID)
            instance = new Typed(fancyTextID, {
                strings: ["hello", "word"],
                typeSpeed: $elem.data('typespeed'),
                backSpeed: $elem.data('backspeed'),
                startDelay: $elem.data('startdelay'),
                backDelay: $elem.data('backdelay'),
                showCursor: $elem.data('cursorshow'),
                cursorChar: $elem.data('cursormark'),
                loop: $elem.data('loop')
            });



        }
        else if (effect === 'slide') {
            $elem.find(".premium-fancy-text-title-slide").vTicker({
                strings: fancyStrings,
                speed: $elem.data('animationspeed'),
                pause: $elem.data('pausetime'),
                mousePause: $elem.data('hoverpause'),
                // direction: "up"
            });
        }
    })
});

