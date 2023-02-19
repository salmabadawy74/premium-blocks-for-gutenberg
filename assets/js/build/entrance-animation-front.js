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
        blockElement.style.animationTimingFunction = entranceAnimation.curve;
        blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
        blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
      }
    });
  };
  window.addEventListener("resize", () => addBlockEntranceAnimation(), false);
  addBlockEntranceAnimation();
}
/******/ })()
;
//# sourceMappingURL=entrance-animation-front.js.map