jQuery(document).ready(function ($) {
  setTimeout(function () {
    const $contentSwitcher = $(".premium-content-switcher");
    $contentSwitcher.map((index, contentSwitcher) => {
      let $contentSwitcher = $(contentSwitcher),
    $title = $contentSwitcher.find(".premium-content-switcher-toggle-switch-label input");
    $title.on("click", function () {
      let self = $(this);
      self
          .find(".premium-content-switcher-is-visible")
          .toggleClass("premium-accordion__closed");
      self.siblings().toggleClass("premium-content-switcher-is-visible");

      $title.not($(this)).map((index, otherTitle) => {
        $otherTitle = $(otherTitle);
        $otherTitleIcon = $otherTitle.find(".premium-content-switcher-is-visible");
        $otherTitleSiblings = $otherTitle.siblings();

        !$otherTitleIcon.hasClass("premium-accordion__closed") &&
          $otherTitleIcon.toggleClass("premium-accordion__closed");
        !$otherTitleSiblings.hasClass("premium-accordion__desc_close") &&
          $otherTitleSiblings.toggleClass("premium-accordion__desc_close");
      });
    });
  })
  }, 500);

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
