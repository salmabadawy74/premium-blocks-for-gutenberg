jQuery(document).ready(function ($) {
  const $flipBox = $(".premium-flip-style-flip");

  if (!$flipBox)
    return;

  $flipBox.map((index, flipBox) => {
    let $flipBox = $(flipBox);
    let animation = $flipBox.data('animation');
    let $flip = $flipBox.find(".premium-flip-box");
    let frontRight = $flipBox.find(`.premium-flip-frontrl`);
    let frontLeft = $flipBox.find(`.premium-flip-frontlr`);
    let frontWrapper = $flipBox.find(`.premium-flip-text-wrapper`);
    let backWrapper = $flipBox.find(`.premium-flip-back-text-wrapper`);

    $($flipBox).on('mouseenter', function () {
      $flip.addClass("flipped");
      if (!animation)
        return;
      // condition left now working
      if (frontRight) {
        frontWrapper.removeClass("PafadeInLeft").addClass("PafadeInRight").removeClass("PafadeInRevLeft");
        backWrapper.removeClass("PafadeInRight").addClass("PafadeInLeft").removeClass("PafadeInRevRight");
      }
      else if (frontLeft) {
        frontWrapper.removeClass("PafadeInRevLeft").addClass("PafadeInRevRight").removeClass("PafadeInLeft");
        backWrapper.removeClass("PafadeInRevRight").addClass("PafadeInRevLeft").removeClass("PafadeInRight");
      }
    });

    $($flipBox).on('mouseleave', function () {
      $flip.removeClass("flipped");
      if (!animation)
        return;
      if (frontRight) {
        frontWrapper.addClass("PafadeInLeft").removeClass("PafadeInRight").removeClass("PafadeInRevRight");
        backWrapper.addClass("PafadeInRight").removeClass("PafadeInLeft").removeClass("PafadeInRevLeft");
      } else if (frontLeft) {
        frontWrapper.addClass("PafadeInRevLeft").removeClass("PafadeInRevRight").removeClass("PafadeInRight");
        backWrapper.addClass("PafadeInRevRight").removeClass("PafadeInRevLeft").removeClass("PafadeInLeft");
      }
    })

  });
});