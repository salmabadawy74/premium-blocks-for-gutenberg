jQuery(document).ready(function ($) {
  const $imageAccordion = $(".premium-accordion-section");

  $imageAccordion.map((index, imageAccordion) => {
    let $imageAccordion = $(imageAccordion),
    $hideDesc = $imageAccordion.data('hidedesc'),
    $window = $(window);
    console.log($hideDesc,$window);

    $window.resize(function () {

      if ($hideDesc > $window.outerWidth()) {
        $imageAccordion.find('.premium-accordion-description').css('display', 'none');
      } else {
        $imageAccordion.find('.premium-accordion-description').css('display', 'block');
      }
    });

    if (!$imageAccordion.find('.premium-accordion-li-active').length) {
      return;
    }

    $imageAccordion.mouseover(function () {
      $imageAccordion.find('.premium-accordion-li-active').removeClass('premium-accordion-li-active');
    });    
  });
});