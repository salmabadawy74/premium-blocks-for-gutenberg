/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion-item/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/accordion-item/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HelperFunction */ "./src/components/HelperFunction.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./src/blocks/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);








function AccordionItemEdit(_ref) {
  let {
    attributes,
    setAttributes,
    context,
    clientId,
    className
  } = _ref;
  const {
    blockId,
    title,
    description
  } = attributes;
  const {
    titleTag,
    contentType,
    direction,
    arrowStyles
  } = context;
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const iconClasse = isOpen ? ' premium-accordion__closed' : '';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, blockId, 'premium-accordion__content_wrap')
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!blockId) {
      setAttributes({
        blockId: "premium-accordion-item-" + (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.generateBlockId)(clientId)
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (direction !== attributes.direction) {
      setAttributes({
        direction: direction
      });
    }

    if (contentType !== attributes.contentType) {
      setAttributes({
        contentType: contentType
      });
    }

    if (titleTag !== attributes.titleTag) {
      setAttributes({
        titleTag: titleTag
      });
    }

    if (arrowStyles[0].arrowPos !== attributes.arrowPosition) {
      setAttributes({
        arrowPosition: arrowStyles[0].arrowPos
      });
    }
  }, [titleTag, contentType, direction, arrowStyles]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowStyles[0].arrowPos}`,
    onClick: () => setIsOpen(!isOpen)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: titleTag.toLowerCase(),
    className: `premium-accordion__title_text`,
    onChange: newText => setAttributes({
      title: newText
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Awesome Title", 'premium-blocks-for-gutenberg'),
    value: title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__icon_wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: `premium-accordion__icon${iconClasse}`,
    role: "img",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 "
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__desc_wrap${isOpen ? ' premium-accordion__desc_close' : ''}`
  }, "text" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "p",
    className: `premium-accordion__desc`,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 'premium-blocks-for-gutenberg'),
    onChange: newText => setAttributes({
      description: newText
    }),
    value: description
  }), "block" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    templateLock: false
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, props) => {
  const {
    __experimentalGetPreviewDeviceType = null
  } = select('core/edit-post');
  let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
  return {
    deviceType: deviceType
  };
})(AccordionItemEdit));

/***/ }),

/***/ "./src/blocks/accordion-item/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/accordion-item/save.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./src/blocks/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function save(props) {
  const {
    className
  } = props;
  const {
    blockId,
    description,
    direction,
    titleTag,
    arrowPosition,
    contentType,
    title
  } = props.attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, blockId, 'premium-accordion__content_wrap')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title_wrap premium-accordion__${direction} premium-accordion__${arrowPosition}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__title`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag.toLowerCase(),
    className: `premium-accordion__title_text`,
    value: title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__icon_wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: `premium-accordion__icon premium-accordion__closed`,
    role: "img",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 "
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-accordion__desc_wrap premium-accordion__desc_close`
  }, "text" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: `premium-accordion__desc`,
    value: description
  }), "block" === contentType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/components/HelperFunction.js":
/*!******************************************!*\
  !*** ./src/components/HelperFunction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationAttr": () => (/* binding */ animationAttr),
/* harmony export */   "borderCss": () => (/* binding */ borderCss),
/* harmony export */   "generateBlockId": () => (/* binding */ generateBlockId),
/* harmony export */   "gradientBackground": () => (/* binding */ gradientBackground),
/* harmony export */   "marginCss": () => (/* binding */ marginCss),
/* harmony export */   "padddingCss": () => (/* binding */ padddingCss)
/* harmony export */ });
const gradientBackground = value => {
  const {
    backgroundType,
    backgroundColor,
    backgroundRepeat,
    backgroundPosition,
    fixed,
    backgroundSize,
    gradientColorTwo,
    gradientPosition,
    gradientType,
    gradientLocationOne,
    gradientLocationTwo,
    gradientAngle,
    backgroundImageURL
  } = value;
  let btnGrad, btnGrad2, btnbg;

  if (undefined !== backgroundType && 'gradient' === backgroundType) {
    btnGrad = 'transparent' === backgroundColor || undefined === backgroundColor ? 'rgba(255,255,255,0)' : backgroundColor;
    btnGrad2 = undefined !== gradientColorTwo && undefined !== gradientColorTwo && '' !== gradientColorTwo ? gradientColorTwo : '#777';

    if ('radial' === gradientType) {
      btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    } else if ('radial' !== gradientType) {
      btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    }
  } else {
    btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : '';
  }

  return {
    backgroundColor: backgroundColor,
    backgroundImage: btnbg,
    backgroundRepeat: backgroundRepeat,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
    backgroundAttachment: fixed ? "fixed" : "unset"
  };
};
const borderCss = (value, device) => {
  return {
    borderStyle: value.borderType,
    borderTopWidth: value['borderWidth'][device]['top'] && value['borderWidth'][device]['top'] + "px",
    borderRightWidth: value['borderWidth'][device]['right'] && value['borderWidth'][device]['right'] + "px",
    borderBottomWidth: value['borderWidth'][device]['bottom'] && value['borderWidth'][device]['bottom'] + "px",
    borderLeftWidth: value['borderWidth'][device]['left'] && value['borderWidth'][device]['left'] + "px",
    borderBottomLeftRadius: value['borderRadius'][device]['left'] && value['borderRadius'][device]['left'] + "px",
    borderTopLeftRadius: value['borderRadius'][device]['top'] && value['borderRadius'][device]['top'] + "px",
    borderTopRightRadius: value['borderRadius'][device]['right'] && value['borderRadius'][device]['right'] + "px",
    borderBottomRightRadius: value['borderRadius'][device]['bottom'] && value['borderRadius'][device]['bottom'] + "px",
    borderColor: value.borderColor
  };
};
const padddingCss = (value, device) => {
  return {
    paddingTop: value[device]['top'] && value[device]['top'] + value.unit,
    paddingRight: value[device]['right'] && value[device]['right'] + value.unit,
    paddingBottom: value[device]['bottom'] && value[device]['bottom'] + value.unit,
    paddingLeft: value[device]['left'] && value[device]['left'] + value.unit
  };
};
const marginCss = (value, device) => {
  return {
    marginTop: value[device]['top'] && value[device]['top'] + value.unit,
    marginRight: value[device]['right'] && value[device]['right'] + value.unit,
    marginBottom: value[device]['bottom'] && value[device]['bottom'] + value.unit,
    marginLeft: value[device]['left'] && value[device]['left'] + value.unit
  };
};
const animationAttr = data => {
  if (typeof data !== 'undefined' && typeof data.name !== 'undefined' && data.openAnimation) {
    return {
      'data-premiumanimation': JSON.stringify(data)
    };
  } else {
    return {};
  }
};
const generateBlockId = clientId => {
  return clientId.split('-')[4];
};

/***/ }),

/***/ "./src/blocks/node_modules/classnames/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/node_modules/classnames/index.js ***!
  \*****************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/accordion-item/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/accordion-item/block.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"premium/accordion-item","title":"Accordion Item","category":"premium-blocks","parent":["premium/accordion"],"description":"A collection of blocks that allow visitors to get around your site.","keywords":["accordion"],"textdomain":"default","attributes":{"blockId":{"type":"string"},"title":{"type":"string","default":"Awesome Title"},"description":{"type":"string","default":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},"titleTag":{"type":"string"},"contentType":{"type":"string"},"direction":{"type":"string"},"arrowPosition":{"type":"string"}},"supports":{"anchor":true},"usesContext":["direction","arrowStyles","titleTag","contentType"],"editorScript":"file:./build/index.js"}');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************!*\
  !*** ./src/blocks/accordion-item/index.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion-item/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  // icon: ,
  __experimentalLabel: _ref => {
    let {
      label
    } = _ref;
    return label;
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map