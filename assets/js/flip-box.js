jQuery(document).ready(function ($) {
  const $flipBox = $(".premium-flip-style-flip");

  if (!$flipBox)
    return;

  $flipBox.map((index, flipBox) => {
    let $flipBox = $(flipBox);
    let animation = $flipBox.data('animation');
    let $flip = $flipBox.find(".premium-flip-box")[0];
    let frontRight = $flipBox.find(`.premium-flip-frontrl`)[0];
    let frontLeft = $flipBox.find(`.premium-flip-frontlr`)[0];
    let frontWrapper = $flipBox.find(`.premium-flip-text-wrapper`)[0];
    let backWrapper = $flipBox.find(`.premium-flip-back-text-wrapper`)[0];

    $($flipBox).on('mouseenter', function () {
      $($flip).addClass("flipped");
      if (!animation)
        return;
      if (frontRight) {
        $(frontWrapper).removeClass("PafadeInLeft").addClass("PafadeInRight");
        $(backWrapper).removeClass("PafadeInRight").addClass("PafadeInLeft");
      }
      else if (frontLeft) {
        $(frontWrapper).removeClass("PafadeInRevLeft").addClass("PafadeInRevRight");
        $(backWrapper).removeClass("PafadeInRevRight").addClass("PafadeInRevLeft");
      }
    });

    $($flipBox).on('mouseleave', function () {
      $($flip).removeClass("flipped");
      if (!animation)
        return;
      if (frontRight) {
        $(frontWrapper).addClass("PafadeInLeft").removeClass("PafadeInRight");
        $(backWrapper).addClass("PafadeInRight").removeClass("PafadeInLeft");
      } else if (frontLeft) {
        $(frontWrapper).addClass("PafadeInRevLeft").removeClass("PafadeInRevRight");
        $(backWrapper).addClass("PafadeInRevRight").removeClass("PafadeInRevLeft");
      }
    })

  });
});