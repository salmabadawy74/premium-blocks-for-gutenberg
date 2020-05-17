jQuery(document).ready(function ($) {
  const $title = $(".premium-title");

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

  $title.map((index, title) => {
    let $title = $(title),
      titleFont = $title.find(".premium-title__title").css("font-family"),
      descFont = $title.find(".premium-title__desc").css("font-family");

    addFontToHead(titleFont);
    addFontToHead(descFont);
  });
});