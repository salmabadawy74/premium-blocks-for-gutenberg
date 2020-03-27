jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  $tab.map((index, tab) => {
    let $tab = $(tab)
    let type = $tab.data('type');

    let tabClass = `.premium-tab-title-` + type;

    $togglecontent = $tab.find(`.premium-tab-content-` + type);

    $tab.on("click", tabClass, function () {

      let $currentTab = $(this);

      let currentTabIndex = $currentTab.index();
      

      $tab.find(".premium-tab-title-active-" + type).removeClass("premium-tab-title-active-" + type);
      $tab.find(".premium-tab-content-active-" + type).removeClass("premium-tab-content-active-" + type);

      $currentTab.addClass("premium-tab-title-active-" + type);
      $tab.find(`.premium-tab-content-` + type).eq(currentTabIndex).addClass("premium-tab-content-active-" + type);

    });

  });
});