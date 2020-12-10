const scroll = () => {
  console.log("loaded");
  const {
    effectDir,

    reverse,
  } = props;
  const scrollElement = document.querySelector(
    ".premium-image-scroll-container"
  );
  const scrollOverlay = document.querySelector(".premium-image-scroll-overlay");
  const imageScroll = document.querySelector("img");
  const scrollVertical = document.querySelector(
    ".premium-image-scroll-vertical"
  );
  let transformOffset = null;

  const startTransform = () => {
    imageScroll.style.cssText(
      "transform",
      (effectDir === "vertical" ? "translateY" : "translateX") +
        "( -" +
        transformOffset +
        "px)"
    );
  };

  const endTransform = () => {
    imageScroll.style.cssText(
      "transform",
      (effectDir === "vertical" ? "translateY" : "translateX") + "(0px)"
    );
  };

  const setTransform = () => {
    if (effectDir === "vertical") {
      transformOffset = imageScroll.height() - scrollElement.height();
    } else {
      transformOffset = imageScroll.width() - scrollElement.width();
    }
  };

  if (reverse === "yes") {
    setTransform();
    startTransform();
  }

  scrollElement.mouseenter(function () {
    scrollElement.removeClass("premium-container-scroll-instant");
    setTransform();
    reverse ? endTransform() : startTransform();
  });
  scrollElement.mouseleave(function () {
    console.log("hi");
    alert("hi");
    reverse ? startTransform() : endTransform();
  });
};

export default { scroll };
///////////////////////
var PremiumImageScrollHandler = function ($scope, $) {
  var scrollElement = $scope.find(".premium-image-scroll-container"),
      scrollOverlay = scrollElement.find(".premium-image-scroll-overlay"),
      scrollVertical = scrollElement.find(".premium-image-scroll-vertical"),
      dataElement = scrollElement.data("settings"),
      imageScroll = scrollElement.find("img"),
      direction = dataElement["direction"],
      reverse = dataElement["reverse"],
      transformOffset = null;

  function startTransform() {
      imageScroll.css("transform", (direction === "vertical" ? "translateY" : "translateX") + "( -" +
          transformOffset + "px)");
  }

  function endTransform() {
      imageScroll.css("transform", (direction === "vertical" ? "translateY" : "translateX") + "(0px)");
  }

  function setTransform() {
      if (direction === "vertical") {
          transformOffset = imageScroll.height() - scrollElement.height();
      } else {
          transformOffset = imageScroll.width() - scrollElement.width();
      }
  }
  if (dataElement["trigger"] === "scroll") {
      scrollElement.addClass("premium-container-scroll");
      if (direction === "vertical") {
          scrollVertical.addClass("premium-image-scroll-ver");
      } else {
          scrollElement.imagesLoaded(function () {
              scrollOverlay.css({
                  width: imageScroll.width(),
                  height: imageScroll.height()
              });
          });
      }
  } else {
      if (reverse === "yes") {
          scrollElement.imagesLoaded(function () {
              scrollElement.addClass("premium-container-scroll-instant");
              setTransform();
              startTransform();
          });
      }
      if (direction === "vertical") {
          scrollVertical.removeClass("premium-image-scroll-ver");
      }
      scrollElement.mouseenter(function () {
          scrollElement.removeClass("premium-container-scroll-instant");
          setTransform();
          reverse === "yes" ? endTransform() : startTransform();
      });
      scrollElement.mouseleave(function () {
          reverse === "yes" ? startTransform() : endTransform();
      });
  }
};
