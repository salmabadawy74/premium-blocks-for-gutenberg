/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ./src/global-features/entrance-animation/front/index.js ***!
  \***************************************************************/
let blocksElement = document.querySelectorAll('[class*="pbg-animation-"]');
const windowHeight = window.innerHeight || document.documentElement.clientHeight;
if (blocksElement.length > 0) {
  const addBlockEntranceAnimation = () => {
    blocksElement.forEach(blockElement => {
      let clientId;
      const prefix = 'pbg-animation-';
      const pbgClassName = Array.from(blockElement.classList).find(className => className.includes(prefix));
      if (pbgClassName) {
        clientId = pbgClassName.replace(prefix, '');
      }
      const entranceAnimation = PBG_EntranceAnimation[clientId];
      if (!entranceAnimation) {
        return;
      }
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
      if (entranceAnimation?.animation[device]) {
        const bounding = blockElement.getBoundingClientRect();
        if (bounding.top <= windowHeight) {
          blockElement.classList.add(entranceAnimation.animation[device]);
          blockElement.style.animationTimingFunction = entranceAnimation.curve;
          blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
          blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
        }
      }
    });
  };
  window.addEventListener("scroll", addBlockEntranceAnimation);
  addBlockEntranceAnimation();
}
/******/ })()
;
//# sourceMappingURL=entrance-animation-front.js.map