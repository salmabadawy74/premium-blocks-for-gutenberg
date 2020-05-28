jQuery(document).ready(function ($) {
  const $flipBox = $(".premium-flip-box");

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

  $flipBox.map((index, flipBox) => {
    let $flipBox = $(flipBox),
      flipBoxFont = $flipBox.find(".premium-flipBox-text-flipBox").css("font-family")

    addFontToHead(flipBoxFont);

  });
});