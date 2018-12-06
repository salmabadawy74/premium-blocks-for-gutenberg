jQuery(document).ready(function($) {
  setTimeout(function() {
    const $accordions = $(".premium-accordion");
    $accordions.map((index, accordion) => {
      let $accordion = $(accordion),
        $title = $accordion.find(".premium-accordion__title_wrap");
      $title.on("click", function() {
        $(this)
          .find(".premium-accordion__icon")
          .toggleClass("premium-accordion__closed");
        $(this)
          .siblings()
          .toggleClass("premium-accordion__desc_close");
      });
    });
  }, 1500);
});
