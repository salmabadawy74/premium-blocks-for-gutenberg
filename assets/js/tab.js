jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  $tab.map((index, tab) => {
    let $tab = $(tab),

    $toggletabs = $tab.find(`.premium-tab-title`);
    console.log($toggletabs.length);
    $toggletabs.map((index, active) => {
      let $active = $(active)
      console.log($active);
      $active.on("click", () => {
        console.log(index);
        for (let i = 0; i < $toggletabs.length; i++){
          if(i == index){
            console.log(index);
            console.log($active);
            
            $active.addClass("premium-tab-title-active");
          }
          else{
            console.log("else = ",$active);
            console.log(i);
            $active.removeClass("premium-tab-title-active");
          }
        }
        
      })
    })
  });
});