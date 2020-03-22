jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  $tab.map((index, tab) => {
    let $tab = $(tab),

    $toggletabs = $tab.find(`.premium-tab-title`);
    

    $togglecontent = $tab.find(`.premium-tab-content`);

    $toggletabs.map((index, active) => {
      let $active = $(active)


      $active.on("click", () => {
        for (let i = 0; i <= $toggletabs.length-1; i++){
          if(i == index){

            $active.addClass("premium-tab-title-active");
            $($togglecontent[i]).addClass("premium-tab-content-active");
          }
          else{
            $($toggletabs[i]).removeClass("premium-tab-title-active");
            $($togglecontent[i]).removeClass("premium-tab-content-active");
          }
        }
        
      })
    })
  });
});