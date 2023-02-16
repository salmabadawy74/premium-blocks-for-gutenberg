/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ./src/global-features/entrance-animation-front.js ***!
  \*********************************************************/
let blocksElement = document.querySelectorAll(`[data-animation]`);
if (blocksElement.length > 0) {
  const addBlockEntranceAnimation = () => {
    blocksElement.forEach(blockElement => {
      const {
        animation: clientId
      } = blockElement.dataset;
      const entranceAnimation = PBG_EntranceAnimation[clientId];
      console.log(PBG_EntranceAnimation);
      let device = 'Desktop';
      const {
        breakPoints
      } = PBG_EntranceAnimation;
      if (window.matchMedia(breakPoints.desktop).matches) {
        device = 'Desktop';
      } else if (window.matchMedia(breakPoints.tablet).matches && !window.matchMedia(breakPoints.mobile).matches) {
        device = 'Tablet';
      } else if (window.matchMedia(breakPoints.mobile).matches) {
        device = 'Mobile';
      }
      if (entranceAnimation.enable) {
        blockElement.classList.add(entranceAnimation.animation[device]);
      }
    });
  };
  window.addEventListener("resize", () => addBlockEntranceAnimation(), false);
}
/******/ })()
;
//# sourceMappingURL=entrance-animation-front.js.map