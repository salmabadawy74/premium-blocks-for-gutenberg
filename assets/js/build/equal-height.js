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

if (Object.keys(PBG_EqualHeight).length) {
  console.log(PBG_EqualHeight);
  Object.keys(PBG_EqualHeight).map(id => {
    const attributes = PBG_EqualHeight[id].attributes;
    const containerBlock = document.querySelector(`.premium-block-${id}`);
    const {
      equalHeightType,
      customSelectors,
      equalHeightBlocks
    } = attributes;
    if (equalHeightType === 'blocks') {
      if (equalHeightBlocks.length) {
        for (const block of equalHeightBlocks) {
          const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
          const blockClass = `wp-block-${blockName}`;
          const allBlocksType = containerBlock.querySelectorAll(`.${blockClass}`);
          (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setElementsHeight)(allBlocksType);
        }
      }
    }
    if (equalHeightType === 'custom-selector') {
      if (customSelectors?.length) {
        for (const selector of customSelectors) {
          if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkSelector)(selector)) {
            const allElements = containerBlock.querySelectorAll(selector);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setElementsHeight)(allElements);
          }
        }
      }
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=equal-height.js.map