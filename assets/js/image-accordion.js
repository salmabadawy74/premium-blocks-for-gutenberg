jQuery(document).ready(function ($) {
  setTimeout(function () {
    let $accordElem = $( ".premium-accordion-section" );
    let settings = $accordElem.data( "hide" );
     let  $window = $(window);

    $window.resize(function () {
      if (settings > $window.outerWidth()) {
        $accordElem
          .find(".premium-accordion-description")
          .css("display", "none");
      } else {
        $accordElem
          .find(".premium-accordion-description")
          .css("display", "block");
      }
    });

    if (!$accordElem.find(".premium-accordion-li-active").length) return;

    $accordElem.mouseover(function () {
      $accordElem
        .find(".premium-accordion-li-active")
        .removeClass("premium-accordion-li-active");
    });
  }, 500);
});
