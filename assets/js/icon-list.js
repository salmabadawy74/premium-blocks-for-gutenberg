jQuery(document).ready(function($) {
    const $iconList = $(".premium-icon-list");
  
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
  
    $iconList.map((index, iconList) => {
      let $iconList = $(iconList),
        titleFont = $iconList.find(".premium-icon-list__title").css("font-family"),
        descFont = $iconList.find(".premium-icon-list__desc").css("font-family");
  
      addFontToHead(titleFont);
      addFontToHead(descFont);
    });
  });
  