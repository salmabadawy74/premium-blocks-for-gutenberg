jQuery(document).ready(function($) {
    const $contentSwitcher = $(".premium-content-switcher");
  
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
  
    $contentSwitcher.map((index, contentSwitcher) => {
      let $contentSwitcher = $(contentSwitcher),
        titleFont = $contentSwitcher.find(".premium-content-switcher__title").css("font-family"),
        descFont = $contentSwitcher.find(".premium-content-switcher__desc").css("font-family");
  
      addFontToHead(titleFont);
      addFontToHead(descFont);
    });
  });
  