jQuery(document).ready(function ($) {
  setTimeout(() => {
    var scrollElement = $(".premium-image-scroll-container"),
      scrollOverlay = scrollElement.find(".premium-image-scroll-overlay"),
      scrollVertical = scrollElement.find(".premium-image-scroll-vertical"),
      dataElement = scrollElement.data("settings"),
      imageScroll = scrollElement.find("img"),
      direction = dataElement["direction"],
      transformOffset = null;
    alert(dataElement);
    function startTransform() {
      alert("startTransform");
      imageScroll.css(
        // "transform",
        // (direction === "vertical" ? "translateY" : "translateX") +
        //   "( -" +
        //   transformOffset +
        //   "px)"
        "display",
        "none"
      );
    }
    startTransform();

    function endTransform() {
      alert("endTransform");
      imageScroll.css(
        //     "transform",
        //     (direction === "vertical" ? "translateY" : "translateX") + "(0px)"
        "display",
        "block"
      );
      // }
    }
    endTransform();

    function setTransform() {
      alert("setTransform");
      // if (direction === "vertical") {
      //   transformOffset = imageScroll.height() - scrollElement.height();
      // } else {
      //   transformOffset = imageScroll.width() - scrollElement.width();
      // }
    }
    alert("eeeee");
    scrollElement.mouseenter(function () {
      alert("mouseenter");
      scrollElement.removeClass("premium-container-scroll-instant");
      setTransform();
      reverse === "yes" ? endTransform() : startTransform();
    });
    scrollElement.mouseleave(function () {
      alert("mouseleave");
      reverse === "yes" ? startTransform() : endTransform();
    });
  }, 2000);
});
