jQuery(document).ready(function ($) {
  const $contentSwitcher = $(".premium-content-switcher");
 
  $contentSwitcher.map((index, contentSwitcher) => {
    let $contentSwitcher = $(contentSwitcher);

    let $toggleBox = $contentSwitcher.find(`.premium-content-switcher-toggle-switch-label`)[0];
    console.log('gg',$toggleBox);
    $($toggleBox).click(function() { 
      let $switch = $contentSwitcher.find(".premium-content-switcher-first-list");
      console.log($switch[0]);
      
      $switch[0].remove("premium-content-switcher-is-visible");
      $switch[0].classList.add(".premium-content-switcher-is-hidden");

      let $switchsecond = $contentSwitcher.find(".premium-content-switcher-second-list");
      console.log($switchsecond[0]);
      
      $switchsecond[0].remove("premium-content-switcher-is-hidden");
      $switchsecond[0].classList.add(".premium-content-switcher-is-visible");
    })
  });
});
