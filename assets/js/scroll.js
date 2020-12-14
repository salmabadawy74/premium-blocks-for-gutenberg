//  const startTransform = () => {
//     imageScroll.style.cssText = `
//        transform:${
//          effectDir === "vertical" ? "translateY" : "translateX"
//        }(${transformOffset}px);`;
//   };

//   const endTransform = () => {
//     imageScroll.style.cssText = `transform:${
//       effectDir === "vertical" ? "translateY" : "translateX"
//     }(0px);`;
//   };
//   const setTransform = () => {
//     if (effectDir === "vertical" && effect === "hover") {
//       transformOffset = scrollElement.clientHeight - imageScroll.clientHeight;
//     } else if (effectDir === "horizontal" && effect === "hover") {
//       transformOffset = scrollElement.clientWidth - imageScroll.clientWidth;
//     }
//     if (effect === "mouse-scroll") {
//       transformOffset = null;
//     }
//   };

//   const mouseenter = () => {
//     console.log("Iam in");
//     alert("Iamin");
//     setTransform();
//     reverse ? endTransform() : startTransform();
//   };

//   const mouseleave = () => {
//     alert("Hi");
//     console.log("Iam out");
//     reverse ? startTransform() : endTransform();
//   };
// setTimeout(() => {
//   let scrollElement = document.querySelector("premium-image-scroll-section");
//   a(scrollElement);
// }, 3000);
jQuery(document).ready(function ($) {
  let scrollElement = $(".premium-image-scroll-section");
  let imageScroll = scrollElement.find(".premium-image-scroll");
  let Direction = scrollElement.data("direction");
  let effect = scrollElement.data("effect");
  let reverse = scrollElement.data("reverse");
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
      transformOffset = scrollElement.height() - imageScroll.height();
    } else if (Direction === "horizontal") {
      transformOffset = scrollElement.width() - imageScroll.width();
    }

    if (effect === "mouse-scroll") {
      transformOffset = null;
    }
  }

  scrollElement.mouseenter(function () {
    setTransform();
    reverse ? endTransform() : startTransform();
  });

  scrollElement.mouseleave(function () {
    reverse ? startTransform() : endTransform();
  });
});
