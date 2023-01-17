/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/container/utils.js":
/*!***************************************!*\
  !*** ./src/blocks/container/utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkSelector": () => (/* binding */ checkSelector),
/* harmony export */   "getBiggestHeight": () => (/* binding */ getBiggestHeight),
/* harmony export */   "resetBlocksHeight": () => (/* binding */ resetBlocksHeight),
/* harmony export */   "resetHeight": () => (/* binding */ resetHeight),
/* harmony export */   "setElementsHeight": () => (/* binding */ setElementsHeight)
/* harmony export */ });
const getBiggestHeight = elements => {
  let maxHeight = 0;
  for (const element of elements) {
    const elementHeight = element.getBoundingClientRect().height;
    if (elementHeight > maxHeight) {
      maxHeight = elementHeight;
    }
  }
  return maxHeight;
};
const setElementsHeight = elements => {
  if (elements.length) {
    const maxHeight = getBiggestHeight(elements);
    Array.from(elements).forEach(element => {
      element.style.height = `${maxHeight}px`;
    });
  }
};
const resetHeight = elements => {
  if (elements.length) {
    Array.from(elements).forEach(element => {
      element.style.removeProperty("height");
    });
  }
};
const resetBlocksHeight = (block, container) => {
  const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
  const blockClass = `wp-block-${blockName}`;
  const allBlocksType = container.querySelectorAll(`.${blockClass}`);
  resetHeight(allBlocksType);
};
const checkSelector = selector => {
  try {
    const checker = document.querySelector(selector);
    return true;
  } catch (e) {
    return false;
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/blocks/container/view.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/blocks/container/utils.js");

const blocksHeightHandler = function (blocks, containerBlock) {
  let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'set';
  if (blocks.length) {
    for (const block of blocks) {
      const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
      const blockClass = `wp-block-${blockName}`;
      const allBlocksType = containerBlock.querySelectorAll(`.${blockClass}`);
      if (type === 'set') {
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setElementsHeight)(allBlocksType);
        return;
      }
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.resetHeight)(allBlocksType);
    }
  }
};
const blocksElementsHeightHandler = function (selectors, containerBlock) {
  let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'set';
  if (selectors?.length) {
    for (const selector of selectors) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkSelector)(selector)) {
        const allBlocksElements = containerBlock.querySelectorAll(selector);
        if (type === 'set') {
          (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setElementsHeight)(allBlocksElements);
          return;
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.resetHeight)(allBlocksElements);
      }
    }
  }
};
const applyEqualHeight = () => {
  if (Object.keys(PBG_EqualHeight).length) {
    const {
      breakPoints
    } = PBG_EqualHeight;
    let device = 'desktop';
    if (window.matchMedia(breakPoints.desktop).matches) {
      device = 'desktop';
    } else if (window.matchMedia(breakPoints.tablet).matches && !window.matchMedia(breakPoints.mobile).matches) {
      device = 'tablet';
    } else if (window.matchMedia(breakPoints.mobile).matches) {
      device = 'mobile';
    }
    const equalHeightData = {
      ...PBG_EqualHeight
    };
    delete equalHeightData.breakPoints;
    Object.keys(equalHeightData).map(id => {
      const attributes = equalHeightData[id].attributes;
      const containerBlock = document.querySelector(`.premium-block-${id}`);
      const {
        customSelectors,
        equalHeightBlocks,
        equalHeightDevices
      } = attributes;
      if (equalHeightDevices.includes(device)) {
        blocksHeightHandler(equalHeightBlocks, containerBlock);
        blocksElementsHeightHandler(customSelectors, containerBlock);
      } else {
        blocksHeightHandler(equalHeightBlocks, containerBlock, 'reset');
        blocksElementsHeightHandler(customSelectors, containerBlock, 'reset');
      }
    });
  }
};
window.addEventListener("resize", applyEqualHeight, false);
applyEqualHeight();
})();

/******/ })()
;
//# sourceMappingURL=equal-height.js.map