/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pbg-entrance-animation",
      ref: blockRef
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props)), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EntranceAnimation */ "./src/global-features/entrance-animation/edit/components/EntranceAnimation.js");






const EntranceAnimationAdvancedOption = (content, props) => {
  const {
    attributes,
    setAttributes,
    isSelected
  } = props;
  const {
    entranceAnimation = {}
  } = attributes;
  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType = null
    } = select("core/edit-post");
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, content, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EntranceAnimation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: entranceAnimation,
    onChange: value => setAttributes({
      entranceAnimation: value
    }),
    deviceType: deviceType
  }));
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('Pbg.AdvancedTab', 'pbg/entrance-animation-option', EntranceAnimationAdvancedOption);
const PbgEntranceAnimationContent = (content, props) => {
  const {
    attributes,
    setAttributes,
    isSelected
  } = props;
  const {
    entranceAnimation = {}
  } = attributes;
  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType = null
    } = select("core/edit-post");
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
  }, []);
  const blockRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!attributes?.entranceAnimation?.animation?.[deviceType]) {
      return;
    }
    let blockElement = blockRef.current;
    blockElement.style.animationTimingFunction = entranceAnimation.curve;
    blockElement.style.animationDuration = entranceAnimation.duration ? `${entranceAnimation.duration}ms` : '';
    blockElement.style.animationDelay = entranceAnimation.delay ? `${entranceAnimation.delay}ms` : '';
  }, [isSelected, entranceAnimation, deviceType]);
  const Content = () => {
    if (attributes?.entranceAnimation?.animation?.[deviceType]) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "pbg-entrance-animation",
        ref: blockRef
      }, content);
    }
    return content;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Content, null);
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.addFilter)('Pbg.BlockContent', 'pbg/entrance-pbg-block-content', PbgEntranceAnimationContent);

/***/ }),

/***/ "./src/global-features/helpers/defaults.js":
/*!*************************************************!*\
  !*** ./src/global-features/helpers/defaults.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entranceAnimationDefaults": () => (/* binding */ entranceAnimationDefaults),
/* harmony export */   "floatingEffectDefaults": () => (/* binding */ floatingEffectDefaults)
/* harmony export */ });
const floatingEffectDefaults = {
  enable: false,
  type: 'motion',
  translate: {
    enable: false,
    x: {
      Desktop: {
        from: -5,
        to: 5,
        unit: 'px'
      },
      Tablet: {
        from: -5,
        to: 5,
        unit: 'px'
      },
      Mobile: {
        from: -5,
        to: 5,
        unit: 'px'
      }
    },
    y: {
      Desktop: {
        from: -5,
        to: 5,
        unit: 'px'
      },
      Tablet: {
        from: -5,
        to: 5,
        unit: 'px'
      },
      Mobile: {
        from: -5,
        to: 5,
        unit: 'px'
      }
    },
    duration: 1000,
    delay: '',
    flag: false
  },
  rotate: {
    enable: false,
    x: {
      Desktop: {
        from: 0,
        to: 45,
        unit: 'deg'
      },
      Tablet: {
        from: 0,
        to: 45,
        unit: 'deg'
      },
      Mobile: {
        from: 0,
        to: 45,
        unit: 'deg'
      }
    },
    y: {
      Desktop: {
        from: 0,
        to: 45,
        unit: 'deg'
      },
      Tablet: {
        from: 0,
        to: 45,
        unit: 'deg'
      },
      Mobile: {
        from: 0,
        to: 45,
        unit: 'deg'
      }
    },
    z: {
      Desktop: {
        from: 0,
        to: 45,
        unit: 'deg'
      },
      Tablet: {
        from: 0,
        to: 45,
        unit: 'deg'
      },
      Mobile: {
        from: 0,
        to: 45,
        unit: 'deg'
      }
    },
    duration: 1000,
    delay: ''
  },
  scale: {
    enable: false,
    x: {
      Desktop: {
        from: 1,
        to: 1.2,
        unit: 'px'
      },
      Tablet: {
        from: 1,
        to: 1.2,
        unit: 'px'
      },
      Mobile: {
        from: 1,
        to: 1.2,
        unit: 'px'
      }
    },
    y: {
      Desktop: {
        from: 1,
        to: 1.2,
        unit: 'px'
      },
      Tablet: {
        from: 1,
        to: 1.2,
        unit: 'px'
      },
      Mobile: {
        from: 1,
        to: 1.2,
        unit: 'px'
      }
    },
    duration: 1000,
    delay: ''
  },
  skew: {
    enable: false,
    x: {
      Desktop: {
        from: 0,
        to: 20,
        unit: 'deg'
      },
      Tablet: {
        from: 0,
        to: 20,
        unit: 'deg'
      },
      Mobile: {
        from: 0,
        to: 20,
        unit: 'deg'
      }
    },
    y: {
      Desktop: {
        from: 0,
        to: 20,
        unit: 'deg'
      },
      Tablet: {
        from: 0,
        to: 20,
        unit: 'deg'
      },
      Mobile: {
        from: 0,
        to: 20,
        unit: 'deg'
      }
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
  disableOnSafari: false,
  steps: 5,
  customSelector: ''
};
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
/* harmony export */   "checkSafariBrowser": () => (/* binding */ checkSafariBrowser),
/* harmony export */   "checkSelector": () => (/* binding */ checkSelector),
/* harmony export */   "getAnimationObj": () => (/* binding */ getAnimationObj),
/* harmony export */   "isPremiumBlock": () => (/* binding */ isPremiumBlock),
/* harmony export */   "resetStyles": () => (/* binding */ resetStyles)
/* harmony export */ });
const getAnimationObj = function (floatingEffect) {
  let deviceType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Desktop';
  const {
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
    saturation
  } = floatingEffect;
  const animeObj = {};
  const filters = [];
  if (translate.enable) {
    animeObj.translateX = {
      value: [translate?.x?.[deviceType]?.from || 0, translate?.x?.[deviceType]?.to || 0],
      delay: translate.delay || 0,
      duration: translate.duration || 1000
    };
    animeObj.translateY = {
      value: [translate?.y?.[deviceType]?.from || 0, translate?.y?.[deviceType]?.to || 0],
      delay: translate.delay || 0,
      duration: translate.duration || 1000
    };
  }
  if (rotate.enable) {
    animeObj.rotateX = {
      value: [rotate?.x?.[deviceType]?.from || 0, rotate?.x?.[deviceType]?.to || 0],
      delay: rotate.delay || 0,
      duration: rotate.duration || 1000
    };
    animeObj.rotateY = {
      value: [rotate?.y?.[deviceType]?.from || 0, rotate?.y?.[deviceType]?.to || 0],
      delay: rotate.delay || 0,
      duration: rotate.duration || 1000
    };
    animeObj.rotateZ = {
      value: [rotate?.z?.[deviceType]?.from || 0, rotate?.z?.[deviceType]?.to || 0],
      delay: rotate.delay || 0,
      duration: rotate.duration || 1000
    };
  }
  if (scale.enable) {
    animeObj.scaleX = {
      value: [scale?.x?.[deviceType]?.from || 0, scale?.x?.[deviceType]?.to || 0],
      delay: scale.delay || 0,
      duration: scale.duration || 1000
    };
    animeObj.scaleY = {
      value: [scale?.y?.[deviceType]?.from || 0, scale?.y?.[deviceType]?.to || 0],
      delay: scale.delay || 0,
      duration: scale.duration || 1000
    };
  }
  if (skew.enable) {
    animeObj.skewX = {
      value: [skew?.x?.[deviceType]?.from || 0, skew?.x?.[deviceType]?.to || 0],
      delay: skew.delay || 0,
      duration: skew.duration || 1000
    };
    animeObj.skewY = {
      value: [skew?.y?.[deviceType]?.from || 0, skew?.y?.[deviceType]?.to || 0],
      delay: skew.delay || 0,
      duration: skew.duration || 1000
    };
  }
  if (opacity.enable) {
    animeObj.opacity = {
      value: [opacity?.value?.from / 100 || 0, opacity?.value?.to / 100 || 0],
      duration: opacity.duration || 1000,
      delay: opacity.delay || 0
    };
  }
  if (background.enable) {
    animeObj.backgroundColor = {
      value: [background?.value?.from || 0, background?.value?.to || 0],
      duration: background.duration || 1000,
      delay: background?.delay || 0
    };
  }
  if (blur.enable) {
    filters.push({
      value: [`blur(${blur?.value?.from}${blur?.value?.unit})` || 0, `blur(${blur?.value?.to}${blur?.value?.unit})` || 0],
      duration: blur.duration || 1000,
      delay: blur.delay || 0
    });
  }
  if (contrast.enable) {
    filters.push({
      value: [`contrast(${contrast?.value?.from}${contrast?.value?.unit})` || 0, `contrast(${contrast?.value?.to}${contrast?.value?.unit})` || 0],
      duration: contrast.duration || 1000,
      delay: contrast.delay || 0
    });
  }
  if (grayscale.enable) {
    filters.push({
      value: [`grayscale(${grayscale?.value?.from}${grayscale?.value?.unit})` || 0, `grayscale(${grayscale?.value?.to}${grayscale?.value?.unit})` || 0],
      duration: grayscale.duration || 1000,
      delay: grayscale.delay || 0
    });
  }
  if (hue.enable) {
    filters.push({
      value: [`hue-rotate(${hue?.value?.from}${hue?.value?.unit})` || 0, `hue-rotate(${hue?.value?.to}${hue?.value?.unit})` || 0],
      duration: hue.duration || 1000,
      delay: hue.delay || 0
    });
  }
  if (brightness.enable) {
    filters.push({
      value: [`brightness(${brightness?.value?.from}${brightness?.value?.unit})` || 0, `brightness(${brightness?.value?.to}${brightness?.value?.unit})` || 0],
      duration: brightness.duration || 1000,
      delay: brightness.delay || 0
    });
  }
  if (saturation.enable) {
    filters.push({
      value: [`saturate(${saturation?.value?.from}${saturation?.value?.unit})` || 0, `saturate(${saturation?.value?.to}${saturation?.value?.unit})` || 0],
      duration: saturation.duration || 1000,
      delay: saturation.delay || 0
    });
  }
  if (filters.length > 0) {
    animeObj.filter = filters;
  }
  return animeObj;
};
const checkSafariBrowser = () => {
  const iOS = /iP(hone|ad|od)/i.test(navigator.userAgent) && !window.MSStream;
  if (iOS) {
    const allowedBrowser = /(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);
    if (!allowedBrowser) {
      const isFireFox = '' === navigator.vendor;
      allowedBrowser = allowedBrowser || isFireFox;
    }
    const isSafari = /WebKit/i.test(navigator.userAgent) && !allowedBrowser;
  } else {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  return isSafari ? true : false;
};
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
const resetStyles = elements => {
  Array.from(elements).forEach(element => {
    if (!element) {
      return;
    }
    const styles = element.getAttribute('style');
    if (styles) {
      const filteredStyles = styles.split(';').filter(style => {
        const property = style.trim().split(":")[0];
        return !['transform', 'opacity', 'background-color', 'filter'].includes(property);
      }).map(style => style.trim()).join(';');
      element.setAttribute('style', filteredStyles);
    }
  });
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/global-features/helpers/helpers.js");
/* harmony import */ var _helpers_defaults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/defaults */ "./src/global-features/helpers/defaults.js");
/* harmony import */ var _animation_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation.scss */ "./src/global-features/entrance-animation/edit/animation.scss");
/* harmony import */ var _pbg_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pbg-hooks */ "./src/global-features/entrance-animation/edit/pbg-hooks.js");
/* harmony import */ var _blocks_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks-hooks */ "./src/global-features/entrance-animation/edit/blocks-hooks.js");











const addEntranceAnimationAttribute = (settings, name) => {
  if (!PremiumAnimation.allBlocks && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.isPremiumBlock)(name)) {
    return settings;
  }
  if (typeof settings.attributes !== 'undefined') {
    settings.attributes = Object.assign(settings.attributes, {
      entranceAnimation: {
        type: 'object',
        default: _helpers_defaults__WEBPACK_IMPORTED_MODULE_7__.entranceAnimationDefaults
      }
    });
  }
  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.addFilter)('blocks.registerBlockType', 'pbg/entrance-animation-attribute', addEntranceAnimationAttribute);
const withClientId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    if (!PremiumAnimation.allBlocks && !(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_6__.isPremiumBlock)(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    const {
      attributes
    } = props;
    const wrapperProps = {
      ...props.wrapperProps
    };
    const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select("core/edit-post");
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
    }, []);
    if (attributes?.entranceAnimation && attributes.entranceAnimation.animation?.[deviceType]) {
      attributes.entranceAnimation.clientId = props.clientId.split("-")[4];
      const animationClass = attributes.entranceAnimation.animation?.[deviceType];
      if (animationClass) {
        props.className += ` ${animationClass}`;
      }
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      wrapperProps: wrapperProps
    }));
  };
}, 'withClientId');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.addFilter)('editor.BlockListBlock', 'pbg/entrance-animation-client-id', withClientId);
})();

/******/ })()
;
//# sourceMappingURL=entrance-animation.js.map