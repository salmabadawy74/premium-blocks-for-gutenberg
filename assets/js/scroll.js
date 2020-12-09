jQuery(document).ready(function ($) {
  setTimeout(() => {
    var scrollElement = $(".premium-image-scroll-container"),
      scrollOverlay = scrollElement.find(".premium-image-scroll-overlay"),
      scrollVertical = scrollElement.find(".premium-image-scroll-vertical"),
      dataElement = scrollElement.data("settings"),
      imageScroll = scrollElement.find("img"),
      direction = dataElement["direction"],
      transformOffset = null;

    function startTransform() {
      //alert("startTransform");
      imageScroll
        .css
        // "transform",
        // (direction === "vertical" ? "translateY" : "translateX") +
        //   "( -" +
        //   transformOffset +
        //   "px)"
        ();
    }
    startTransform();

    function endTransform() {
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
      // if (direction === "vertical") {
      //   transformOffset = imageScroll.height() - scrollElement.height();
      // } else {
      //   transformOffset = imageScroll.width() - scrollElement.width();
      // }
    }

    scrollElement.mouseenter(function () {
      // alert("mouseenter");
      scrollElement.removeClass("premium-container-scroll-instant");
      setTransform();
      reverse === "yes" ? endTransform() : startTransform();
    });
    scrollElement.mouseleave(function () {
      // alert("mouseleave");
      reverse === "yes" ? startTransform() : endTransform();
    });
  }, 2000);
});
// var PremiumImageScrollHandler = function ($scope, $) {
//   var scrollElement = $scope.find(".premium-image-scroll-container"),
//       scrollOverlay = scrollElement.find(".premium-image-scroll-overlay"),
//       scrollVertical = scrollElement.find(".premium-image-scroll-vertical"),
//       dataElement = scrollElement.data("settings"),
//       imageScroll = scrollElement.find("img"),
//       direction = dataElement["direction"],
//       reverse = dataElement["reverse"],
//       transformOffset = null;

//   function startTransform() {
//       imageScroll.css("transform", (direction === "vertical" ? "translateY" : "translateX") + "( -" +
//           transformOffset + "px)");
//   }

//   function endTransform() {
//       imageScroll.css("transform", (direction === "vertical" ? "translateY" : "translateX") + "(0px)");
//   }

//   function setTransform() {
//       if (direction === "vertical") {
//           transformOffset = imageScroll.height() - scrollElement.height();
//       } else {
//           transformOffset = imageScroll.width() - scrollElement.width();
//       }
//   }
//   if (dataElement["trigger"] === "scroll") {
//       scrollElement.addClass("premium-container-scroll");
//       if (direction === "vertical") {
//           scrollVertical.addClass("premium-image-scroll-ver");
//       } else {
//           scrollElement.imagesLoaded(function () {
//               scrollOverlay.css({
//                   width: imageScroll.width(),
//                   height: imageScroll.height()
//               });
//           });
//       }
//   } else {
//       if (reverse === "yes") {
//           scrollElement.imagesLoaded(function () {
//               scrollElement.addClass("premium-container-scroll-instant");
//               setTransform();
//               startTransform();
//           });
//       }
//       if (direction === "vertical") {
//           scrollVertical.removeClass("premium-image-scroll-ver");
//       }
//       scrollElement.mouseenter(function () {
//           scrollElement.removeClass("premium-container-scroll-instant");
//           setTransform();
//           reverse === "yes" ? endTransform() : startTransform();
//       });
//       scrollElement.mouseleave(function () {
//           reverse === "yes" ? startTransform() : endTransform();
//       });
//   }
// };
