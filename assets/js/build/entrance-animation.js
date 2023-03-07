/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AdvancedTabOptions.js":
/*!**********************************************!*\
  !*** ./src/components/AdvancedTabOptions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PBGAdvancedInspectorControls": () => (/* binding */ PBGAdvancedInspectorControls),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const {
  Fill,
  Slot
} = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.createSlotFill)('PBGAdvancedTabOptions');
const PBGAdvancedInspectorControls = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fill, null, props.children);
};
const AdvancedTabOptions = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Slot, null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.withFilters)('Pbg.AdvancedTab')(AdvancedTabOptions));

/***/ }),

/***/ "./src/global-features/entrance-animation/edit/blocks-hooks.js":
/*!*********************************************************************!*\
  !*** ./src/global-features/entrance-animation/edit/blocks-hooks.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/global-features/helpers/helpers.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EntranceAnimation */ "./src/global-features/entrance-animation/edit/components/EntranceAnimation.js");
/* harmony import */ var _components_AdvancedTabOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/AdvancedTabOptions */ "./src/components/AdvancedTabOptions.js");











const EntranceAnimationControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (!PremiumAnimation.allBlocks || (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.isPremiumBlock)(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      entranceAnimation = {}
    } = attributes;
    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select("core/edit-post");
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
    }, []);
    const blockRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!attributes?.entranceAnimation?.animation?.[deviceType]) {
        return;
      }
      let blockElement = blockRef.current;
      blockElement.style.animationTimingFunction = entranceAnimation.curve;
      blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
      blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
    }, [isSelected, entranceAnimation, deviceType]);
    const BlockContent = () => {
      if (attributes?.entranceAnimation?.animation?.[deviceType]) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: `pbg-entrance-animation ${attributes?.entranceAnimation?.animation?.[deviceType]}`,
          ref: blockRef
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props));
      }
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockContent, null), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      value: entranceAnimation,
      deviceType: deviceType,
      onChange: value => setAttributes({
        entranceAnimation: value
      })
    })));
  };
}, 'EntranceAnimationControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'pbg/entrance-animation-attribute', EntranceAnimationControl);

/***/ }),

/***/ "./src/global-features/entrance-animation/edit/components/EntranceAnimation.js":
/*!*************************************************************************************!*\
  !*** ./src/global-features/entrance-animation/edit/components/EntranceAnimation.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pbg/components */ "@pbg/components");
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pbg_components__WEBPACK_IMPORTED_MODULE_3__);




const EntranceAnimation = _ref => {
  let {
    value,
    onChange,
    deviceType
  } = _ref;
  const {
    animation,
    duration,
    delay,
    curve
  } = value;
  const changeHandler = newVal => {
    const newValue = {
      ...value,
      ...newVal
    };
    onChange(newValue);
  };
  const options = [{
    label: 'None',
    value: ''
  }, {
    label: 'Fading',
    options: [{
      label: 'Fade In',
      value: 'pbg-fade-in'
    }, {
      label: 'Fade In Down',
      value: 'pbg-fade-in-down'
    }, {
      label: 'Fade In Left',
      value: 'pbg-fade-in-left'
    }, {
      label: 'Fade In Right',
      value: 'pbg-fade-in-right'
    }, {
      label: 'Fade In Up',
      value: 'pbg-fade-in-up'
    }]
  }, {
    label: 'Zooming',
    options: [{
      label: 'Zoom In',
      value: 'pbg-zoom-in'
    }, {
      label: 'Zoom In Down',
      value: 'pbg-zoom-in-down'
    }, {
      label: 'Zoom In Left',
      value: 'pbg-zoom-in-left'
    }, {
      label: 'Zoom In Right',
      value: 'pbg-zoom-in-right'
    }, {
      label: 'Zoom In Up',
      value: 'pbg-zoom-in-up'
    }]
  }, {
    label: 'Bouncing',
    options: [{
      label: 'Bounce In',
      value: 'pbg-bounce-in'
    }, {
      label: 'Bounce In Down',
      value: 'pbg-bounce-in-down'
    }, {
      label: 'Bounce In Left',
      value: 'pbg-bounce-in-left'
    }, {
      label: 'Bounce In Right',
      value: 'pbg-bounce-in-right'
    }, {
      label: 'Bounce In Up',
      value: 'pbg-bounce-in-up'
    }]
  }, {
    label: 'Sliding',
    options: [{
      label: 'Slide In Down',
      value: 'pbg-slide-in-down'
    }, {
      label: 'Slide In Left',
      value: 'pbg-slide-in-left'
    }, {
      label: 'Slide In Right',
      value: 'pbg-slide-in-right'
    }, {
      label: 'Slide In Up',
      value: 'pbg-slide-in-up'
    }]
  }, {
    label: 'Rotating',
    options: [{
      label: 'Rotate In',
      value: 'pbg-rotate-in'
    }, {
      label: 'Rotate In Down Left',
      value: 'pbg-rotate-in-down-left'
    }, {
      label: 'Rotate In Down Right',
      value: 'pbg-rotate-in-down-right'
    }, {
      label: 'Rotate In Up Left',
      value: 'pbg-rotate-in-up-left'
    }, {
      label: 'Rotate In Up Right',
      value: 'pbg-rotate-in-up-right'
    }]
  }, {
    label: 'Attention Seekers',
    options: [{
      label: 'Bounce',
      value: 'pbg-bounce'
    }, {
      label: 'Flash',
      value: 'pbg-flash'
    }, {
      label: 'Pulse',
      value: 'pbg-pulse'
    }, {
      label: 'Rubber Band',
      value: 'pbg-rubber-band'
    }, {
      label: 'Shake',
      value: 'pbg-shake'
    }, {
      label: 'Head Shake',
      value: 'pbg-head-shake'
    }, {
      label: 'Swing',
      value: 'pbg-swing'
    }, {
      label: 'Tada',
      value: 'pbg-tada'
    }, {
      label: 'Wobble',
      value: 'pbg-wobble'
    }, {
      label: 'Jello',
      value: 'pbg-jello'
    }]
  }, {
    label: 'Light Speed',
    options: [{
      label: 'Light Speed In',
      value: 'pbg-light-speed-in'
    }]
  }, {
    label: 'Specials',
    options: [{
      label: 'Roll In',
      value: 'pbg-roll-in'
    }]
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Entrance Animation", 'premium-blocks-for-gutenberg'),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_3__.ResponsiveSelectControl, {
    value: animation,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Animation", "premium-blocks-for-gutenberg"),
    options: options,
    onChange: option => changeHandler({
      animation: option
    })
  }), animation?.[deviceType] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Easing", "premium-blocks-for-gutenberg"),
    value: curve,
    onChange: newValue => changeHandler({
      curve: newValue
    }),
    options: [{
      value: 'ease-in-out',
      label: 'ease-in-out'
    }, {
      value: 'ease',
      label: 'ease'
    }, {
      value: 'ease-in',
      label: 'ease-in'
    }, {
      value: 'ease-out',
      label: 'ease-out'
    }, {
      value: 'linear',
      label: 'linear'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_3__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: duration,
    onChange: newValue => changeHandler({
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_3__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: delay,
    onChange: newValue => changeHandler({
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EntranceAnimation);

/***/ }),

/***/ "./src/global-features/entrance-animation/edit/pbg-hooks.js":
/*!******************************************************************!*\
  !*** ./src/global-features/entrance-animation/edit/pbg-hooks.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/EntranceAnimation */ "./src/global-features/entrance-animation/edit/components/EntranceAnimation.js");
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pbg/components */ "@pbg/components");
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pbg_components__WEBPACK_IMPORTED_MODULE_8__);









const EntranceAnimationAdvancedOption = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockAdvancedTab => {
  return props => {
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      entranceAnimation = {}
    } = attributes;
    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select("core/edit-post");
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
    }, []);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockAdvancedTab, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_8__.PBGAdvancedInspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: entranceAnimation,
      onChange: value => setAttributes({
        entranceAnimation: value
      }),
      deviceType: deviceType
    })));
  };
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('Pbg.AdvancedTab', 'pbg/entrance-animation-option', EntranceAnimationAdvancedOption);
const PbgEntranceAnimationContent = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.createHigherOrderComponent)(BlockContent => {
  return props => {
    const {
      attributes,
      setAttributes,
      isSelected
    } = props.blockProps;
    const {
      entranceAnimation = {}
    } = attributes;
    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select("core/edit-post");
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
    }, []);
    const blockRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
      if (!attributes?.entranceAnimation?.animation?.[deviceType]) {
        return;
      }
      let blockElement = blockRef.current;
      blockElement.style.animationTimingFunction = entranceAnimation.curve;
      blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
      blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
    }, [isSelected, entranceAnimation, deviceType]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockContent, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: attributes?.entranceAnimation?.animation?.[deviceType],
      ref: blockRef
    }));
  };
});
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('pbg.BlockContent', 'pbg/entrance-pbg-block-content', PbgEntranceAnimationContent);

/***/ }),

/***/ "./src/global-features/helpers/defaults.js":
/*!*************************************************!*\
  !*** ./src/global-features/helpers/defaults.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entranceAnimationDefaults": () => (/* binding */ entranceAnimationDefaults)
/* harmony export */ });
const entranceAnimationDefaults = {
  animation: {
    Desktop: '',
    Tablet: '',
    Mobile: ''
  },
  duration: '1000',
  delay: '',
  curve: 'linear'
};

/***/ }),

/***/ "./src/global-features/helpers/helpers.js":
/*!************************************************!*\
  !*** ./src/global-features/helpers/helpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkSelector": () => (/* binding */ checkSelector),
/* harmony export */   "isPremiumBlock": () => (/* binding */ isPremiumBlock)
/* harmony export */ });
const checkSelector = selector => {
  try {
    const checker = document.querySelector(selector);
    return true;
  } catch (e) {
    return false;
  }
};
const isPremiumBlock = blockName => {
  return blockName.startsWith('premium/');
};

/***/ }),

/***/ "./src/global-features/entrance-animation/edit/animation.scss":
/*!********************************************************************!*\
  !*** ./src/global-features/entrance-animation/edit/animation.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@pbg/components":
/*!*********************************!*\
  !*** external "pbg.components" ***!
  \*********************************/
/***/ ((module) => {

module.exports = pbg.components;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

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
/*!**************************************************************!*\
  !*** ./src/global-features/entrance-animation/edit/index.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/global-features/helpers/helpers.js");
/* harmony import */ var _helpers_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/defaults */ "./src/global-features/helpers/defaults.js");
/* harmony import */ var _animation_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation.scss */ "./src/global-features/entrance-animation/edit/animation.scss");
/* harmony import */ var _pbg_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pbg-hooks */ "./src/global-features/entrance-animation/edit/pbg-hooks.js");
/* harmony import */ var _blocks_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks-hooks */ "./src/global-features/entrance-animation/edit/blocks-hooks.js");










const addEntranceAnimationAttribute = (settings, name) => {
  if (!PremiumAnimation.allBlocks && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__.isPremiumBlock)(name)) {
    return settings;
  }
  if (typeof settings.attributes !== 'undefined') {
    settings.attributes = Object.assign(settings.attributes, {
      entranceAnimation: {
        type: 'object',
        default: _helpers_defaults__WEBPACK_IMPORTED_MODULE_6__.entranceAnimationDefaults
      }
    });
  }
  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('blocks.registerBlockType', 'pbg/entrance-animation-attribute', addEntranceAnimationAttribute);
const withClientId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    if (!PremiumAnimation.allBlocks && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__.isPremiumBlock)(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, props);
    }
    const {
      attributes
    } = props;
    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select("core/edit-post");
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
    }, []);
    if (attributes?.entranceAnimation && attributes.entranceAnimation.animation?.[deviceType]) {
      attributes.entranceAnimation.clientId = props.clientId.split("-")[4];
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockListBlock, props);
  };
}, 'withClientId');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addFilter)('editor.BlockListBlock', 'pbg/entrance-animation-client-id', withClientId);
})();

/******/ })()
;
//# sourceMappingURL=entrance-animation.js.map