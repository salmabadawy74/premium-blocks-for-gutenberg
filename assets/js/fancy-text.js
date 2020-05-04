jQuery(document).ready(function ($) {
  const $fancyText = $(".premium-fancy-text");
  $fancyText.map((index, fancyText) => {

    let $fancyText = $(fancyText)

    let effect = $fancyText.data('effect');
    let strings = $fancyText.data('strings');
    let fanctStrings = strings.split(",")

    if (effect == 'typing') {
      
      $fancyText.find(".premium-fancy-text-title").typed({
        strings: fanctStrings,
        typeSpeed: $fancyText.data('typespeed'),
        backSpeed: $fancyText.data('backspeed'),
        startDelay: $fancyText.data('startdelay'),
        backDelay: $fancyText.data('backdelay'),
        showCursor: $fancyText.data('cursorshow'),
        cursorChar: $fancyText.data('cursormark'),
        loop: $fancyText.data('loop')
      });
    }
    else if (effect == 'slide') {
      $fancyText.find(".premium-fancy-text-title-slide").vTicker({
        strings: fanctStrings,
        speed: $fancyText.data('animationspeed'),
        pause: $fancyText.data('pausetime'),
        mousePause: $fancyText.data('hoverpause'),
        direction: "up"
      });
    }
  })
});
