jQuery(document).ready(function ($) {
  const $flipBox = $(".premium-flip-style-flip");
  
  if (!$flipBox)
    return;

  $flipBox.map((index, flipBox) => {
    let $flipBox = $(flipBox);
    let animation = $flipBox.data('animation');
    let $flip = $flipBox.find(".premium-flip-box");
    let $frontRight = $flipBox.find(`.premium-flip-frontrl`);
    let $frontLeft = $flipBox.find(`.premium-flip-frontlr`);
    let $frontWrapper = $flipBox.find(`.premium-flip-text-wrapper`);
    let $backWrapper = $flipBox.find(`.premium-flip-back-text-wrapper`);

    $($flipBox).on('mouseenter', function () {
      $flip.addClass("flipped");
      if (!animation)
        return;
        if ($frontRight.length){
          $frontWrapper.removeClass("PafadeInLeft").addClass("PafadeInRight");
          $backWrapper.removeClass("PafadeInRight").addClass("PafadeInLeft");
        }
        else if ($frontLeft.length){
          $frontWrapper.removeClass("PafadeInRevLeft").addClass("PafadeInRevRight");
          $backWrapper.removeClass("PafadeInRevRight").addClass("PafadeInRevLeft");
        }
    });

    $($flipBox).on('mouseleave', function () {
      $flip.removeClass("flipped");
      if (!animation)
        return;
        if ($frontRight.length) {
          $frontWrapper.addClass("PafadeInLeft").removeClass("PafadeInRight");
          $backWrapper.addClass("PafadeInRight").removeClass("PafadeInLeft");
        } else if ($frontLeft.length) {
          $frontWrapper.addClass("PafadeInRevLeft").removeClass("PafadeInRevRight");
          $backWrapper.addClass("PafadeInRevRight").removeClass("PafadeInRevLeft");
        }
    })

  });
});