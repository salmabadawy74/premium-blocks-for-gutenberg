jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  $tab.map((index, tab) => {
    let $tab = $(tab)

    let type = $tab.data('type');

    let tabClass = '.premium-tab-nav-list-item';

    $togglecontent = $tab.find(`.premium-tab-content-section`);

    $tab.on("click", tabClass, function () {

      let $currentTab = $(this);

      let currentTabIndex = $currentTab.index();


      $tab.find(".tab-current").removeClass("tab-current");
      $tab.find(".content-current").removeClass("content-current");

      $currentTab.addClass("tab-current");
      $tab.find(`.premium-tab-content-section`).eq(currentTabIndex).addClass("content-current");

    });

  });
});