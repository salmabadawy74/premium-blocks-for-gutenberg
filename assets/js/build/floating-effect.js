/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global-features/helpers/defaults.js":
/*!*************************************************!*\
  !*** ./src/global-features/helpers/defaults.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "floatingEffectDefaults": () => (/* binding */ floatingEffectDefaults)
/* harmony export */ });
const floatingEffectDefaults = {
  enable: false,
  type: 'motion',
  translate: {
    enable: false,
    x: {
      from: -5,
      to: 5,
      unit: 'px'
    },
    y: {
      from: -5,
      to: 5,
      unit: 'px'
    },
    duration: 1000,
    delay: ''
  },
  rotate: {
    enable: false,
    x: {
      from: 0,
      to: 45,
      unit: 'deg'
    },
    y: {
      from: 0,
      to: 45,
      unit: 'deg'
    },
    z: {
      from: 0,
      to: 45,
      unit: 'deg'
    },
    duration: 1000,
    delay: ''
  },
  scale: {
    enable: false,
    x: {
      from: 1,
      to: 1.2,
      unit: 'px'
    },
    y: {
      from: 1,
      to: 1.2,
      unit: 'px'
    },
    duration: 1000,
    delay: ''
  },
  skew: {
    enable: false,
    x: {
      from: 0,
      to: 20,
      unit: 'deg'
    },
    y: {
      from: 0,
      to: 20,
      unit: 'deg'
    },
    duration: 1000,
    delay: ''
  },
  opacity: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  background: {
    enable: false,
    value: {
      from: '',
      to: ''
    },
    duration: 1000,
    delay: ''
  },
  blur: {
    enable: false,
    value: {
      from: 0,
      to: 1,
      unit: 'px'
    },
    duration: 1000,
    delay: ''
  },
  contrast: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  grayscale: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  hue: {
    enable: false,
    value: {
      from: 0,
      to: 90,
      unit: 'deg'
    },
    duration: 1000,
    delay: ''
  },
  brightness: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  saturation: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  direction: 'alternate',
  loop: 'infinite',
  customNumber: 3,
  easing: 'linear',
  disableOnSafari: false
};

/***/ }),

/***/ "@pbg/components":
/*!*********************************!*\
  !*** external "pbg.components" ***!
  \*********************************/
/***/ ((module) => {

module.exports = pbg.components;

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!************************************************!*\
  !*** ./src/global-features/floating-effect.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pbg/components */ "@pbg/components");
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pbg_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_defaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/defaults */ "./src/global-features/helpers/defaults.js");









const FloatingEffect = _ref => {
  let {
    value,
    onChange
  } = _ref;
  const floatingEffectValue = {
    ..._helpers_defaults__WEBPACK_IMPORTED_MODULE_7__.floatingEffectDefaults,
    ...value
  };
  const {
    enable,
    type,
    translate,
    rotate,
    scale,
    skew,
    opacity,
    background,
    blur,
    contrast,
    grayscale,
    hue,
    brightness,
    saturation,
    direction,
    loop,
    customNumber,
    easing,
    disableOnSafari
  } = floatingEffectValue;
  const changeHandler = value => {
    const newValue = {
      ...floatingEffectValue,
      ...value
    };
    onChange(newValue);
  };
  const onChangeEffect = (effect, value) => {
    const newEffectValue = {
      ...floatingEffectValue[effect],
      ...value
    };
    console.log(newEffectValue, effect, {
      [effect]: newEffectValue
    });
    changeHandler({
      [effect]: newEffectValue
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Floating Effects", 'premium-blocks-for-gutenberg'),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Floating Effects", "premium-blocks-for-gutenberg"),
    checked: enable,
    onChange: value => changeHandler({
      enable: value
    })
  }), enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.RadioComponent, {
    choices: [{
      value: "motion",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Motion", "premium-blocks-for-gutenberg")
    }, {
      value: "style",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Style", "premium-blocks-for-gutenberg")
    }, {
      value: "filters",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Filters", "premium-blocks-for-gutenberg")
    }],
    value: type,
    onChange: newValue => changeHandler({
      type: newValue
    }),
    showIcons: false
  }), type === 'motion' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Translate", "premium-blocks-for-gutenberg"),
    checked: translate.enable,
    onChange: value => onChangeEffect('translate', {
      enable: value
    })
  }), translate.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Translate X", "premium-blocks-for-gutenberg"),
    value: translate.x,
    min: -100,
    max: 100,
    onChange: value => onChangeEffect('translate', {
      x: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Translate Y", "premium-blocks-for-gutenberg"),
    value: translate.y,
    min: -100,
    max: 100,
    onChange: value => onChangeEffect('translate', {
      y: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: translate.duration,
    onChange: newValue => onChangeEffect('translate', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: translate.delay,
    onChange: newValue => onChangeEffect('translate', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Rotate", "premium-blocks-for-gutenberg"),
    checked: rotate.enable,
    onChange: value => onChangeEffect('rotate', {
      enable: value
    })
  }), rotate.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Rotate X", "premium-blocks-for-gutenberg"),
    value: rotate.x,
    min: -100,
    max: 100,
    onChange: value => onChangeEffect('rotate', {
      x: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Rotate Y", "premium-blocks-for-gutenberg"),
    value: rotate.y,
    min: -100,
    max: 100,
    onChange: value => onChangeEffect('rotate', {
      y: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Rotate Z", "premium-blocks-for-gutenberg"),
    value: rotate.z,
    min: -100,
    max: 100,
    onChange: value => onChangeEffect('rotate', {
      z: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: rotate.duration,
    onChange: newValue => onChangeEffect('rotate', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: rotate.delay,
    onChange: newValue => onChangeEffect('rotate', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingEffect);
const FloatingEffectControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      floatingEffect = {}
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FloatingEffect, {
      value: floatingEffect,
      onChange: value => setAttributes({
        floatingEffect: value
      })
    })));
  };
}, 'FloatingEffectControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter)('editor.BlockEdit', 'pbg/floating-effect-attribute', FloatingEffectControl);
const addFloatingAttribute = (settings, name) => {
  if (typeof settings.attributes !== 'undefined') {
    settings.attributes = Object.assign(settings.attributes, {
      floatingEffect: {
        type: 'object',
        default: {}
      }
    });
  }
  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter)('blocks.registerBlockType', 'pbg/floating-effect-attribute', addFloatingAttribute);
})();

/******/ })()
;
//# sourceMappingURL=floating-effect.js.map