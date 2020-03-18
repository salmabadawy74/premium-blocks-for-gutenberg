jQuery(document).ready(function ($) {
  const $tab = $(".premium-tab");

  const addFontToHead = fontFamily => {
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css?family=" +
      fontFamily.replace(/\s+/g, "+") +
      ":" +
      "regular";
    head.appendChild(link);
  };

  $tab.map((index, tab) => {
    let $tab = $(tab),
      titleFont = $tab.find(".premium-tab__title").css("font-family")

    addFontToHead(titleFont);
  });
});