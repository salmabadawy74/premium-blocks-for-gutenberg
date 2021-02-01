jQuery(document).ready(function ($) {
  setTimeout(function () {
    var $accordElem = $(".premium-accordion-section"),
      settings = $accordElem.data("settings"),
      $window = $(window);

    $window.resize(function () {
      if (settings.hide_desc > $window.outerWidth()) {
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
