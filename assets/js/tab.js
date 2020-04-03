jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");
  // console.log("ui", $tab);

  $tab.map((index, tab) => {
    let $tab = $(tab)

    let type = $tab.data('type');

    let tabClass = '.premium-tab-nav-list-item';
    console.log(tabClass);

    $togglecontent = $tab.find(`.premium-tab-content-section`);
    console.log("hh");

    $tab.on("click", tabClass, function () {

      let $currentTab = $(this);

      let currentTabIndex = $currentTab.index();
      console.log(currentTabIndex);
      console.log($currentTab);


      $tab.find(".tab-current").removeClass("tab-current");
      $tab.find(".content-current").removeClass("content-current");

      $currentTab.addClass("tab-current");
      $tab.find(`.premium-tab-content-section`).eq(currentTabIndex).addClass("content-current");

    });

  });
});