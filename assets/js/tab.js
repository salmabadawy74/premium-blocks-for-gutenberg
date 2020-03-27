jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  $tab.map((index, tab) => {
    let $tab = $(tab)
    let type = $tab.data('type');

    $toggletabs = $tab.find(`.premium-tab-title-` + type);

    $togglecontent = $tab.find(`.premium-tab-content-` + type);

    $toggletabs.map((index, active) => {
      let $active = $(active)

      $active.on("click", () => {
        for (let i = 0; i <= $toggletabs.length - 1; i++) {
          if (i == index) {
            $active.addClass("premium-tab-title-active-" + type);
            $($togglecontent[i]).addClass("premium-tab-content-active-" + type);
          }
          else {
            $($toggletabs[i]).removeClass("premium-tab-title-active-" + type);

            $($togglecontent[i]).removeClass("premium-tab-content-active-" + type);
          }
        }

      })
    })
  });
});