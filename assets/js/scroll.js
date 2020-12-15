jQuery(document).ready(function ($) {
  setTimeout(() => {
    const scrollElements = $(".premium-img-scroll-container");
    scrollElements.map((index, scrollElement) => {
      let $scrollElement = $(scrollElement);

      let imageScroll = $scrollElement.find(".premium-img-scroll");
      let Direction = $scrollElement.data("direction");
      let effect = $scrollElement.data("effect");
      let reverse = $scrollElement.data("reverse");

      let transformOffset = 0;
      function startTransform() {
        imageScroll.css(
          "transform",
          (Direction === "vertical" ? "translateY" : "translateX") +
            "( " +
            transformOffset +
            "px)"
        );
      }

      function endTransform() {
        imageScroll.css(
          "transform",
          (Direction === "vertical" ? "translateY" : "translateX") + "(0px)"
        );
      }
      function setTransform() {
        if (Direction === "vertical") {
          transformOffset = $scrollElement.height() - imageScroll.height();
        } else if (Direction === "horizontal") {
          transformOffset = $scrollElement.width() - imageScroll.width();
        }

        if (effect === "mouse-scroll") {
          transformOffset = null;
        }
      }
      $scrollElement.mouseenter(function () {
        setTransform();
        reverse ? endTransform() : startTransform();
      });
      $scrollElement.mouseleave(function () {
        reverse ? startTransform() : endTransform();
      });
    });
  });
});
