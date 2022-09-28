/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/dom-chef/index.js":
/*!****************************************!*\
  !*** ./node_modules/dom-chef/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var svg_tag_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-tag-names */ "./node_modules/svg-tag-names/index.js");

const svgTags = new Set(svg_tag_names__WEBPACK_IMPORTED_MODULE_0__.svgTagNames);
svgTags.delete('a');
svgTags.delete('audio');
svgTags.delete('canvas');
svgTags.delete('iframe');
svgTags.delete('script');
svgTags.delete('video');
// Copied from Preact
// https://github.com/preactjs/preact/blob/1bbd687c13c1fd16f0d6393e79ea6232f55fbec4/src/constants.js#L3
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const isFragment = (type) => type === DocumentFragment;
const setCSSProps = (element, style) => {
    for (const [name, value] of Object.entries(style)) {
        if (name.startsWith('-')) {
            element.style.setProperty(name, value);
        }
        else if (typeof value === 'number' && !IS_NON_DIMENSIONAL.test(name)) {
            element.style[name] = `${value}px`;
        }
        else {
            element.style[name] = value;
        }
    }
};
const create = (type) => {
    if (typeof type === 'string') {
        if (svgTags.has(type)) {
            return document.createElementNS('http://www.w3.org/2000/svg', type);
        }
        return document.createElement(type);
    }
    if (isFragment(type)) {
        return document.createDocumentFragment();
    }
    return type(type.defaultProps);
};
const setAttribute = (element, name, value) => {
    if (value === undefined || value === null) {
        return;
    }
    // Naive support for xlink namespace
    // Full list: https://github.com/facebook/react/blob/1843f87/src/renderers/dom/shared/SVGDOMPropertyConfig.js#L258-L264
    if (/^xlink[AHRST]/.test(name)) {
        element.setAttributeNS('http://www.w3.org/1999/xlink', name.replace('xlink', 'xlink:').toLowerCase(), value);
    }
    else {
        element.setAttribute(name, value);
    }
};
const addChildren = (parent, children) => {
    for (const child of children) {
        if (child instanceof Node) {
            parent.appendChild(child);
        }
        else if (Array.isArray(child)) {
            addChildren(parent, child);
        }
        else if (typeof child !== 'boolean'
            && typeof child !== 'undefined'
            && child !== null) {
            parent.appendChild(document.createTextNode(child));
        }
    }
};
// These attributes allow "false" as a valid value
// https://github.com/facebook/react/blob/3f8990898309c61c817fbf663f5221d9a00d0eaa/packages/react-dom/src/shared/DOMProperty.js#L288-L322
const booleanishAttributes = new Set([
    // These attributes allow "false" as a valid value
    'contentEditable',
    'draggable',
    'spellCheck',
    'value',
    // SVG-specific
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
]);
const h = (type, attributes, ...children) => {
    var _a;
    const element = create(type);
    addChildren(element, children);
    if (element instanceof DocumentFragment || !attributes) {
        return element;
    }
    // Set attributes
    for (let [name, value] of Object.entries(attributes)) {
        if (name === 'htmlFor') {
            name = 'for';
        }
        if (name === 'class' || name === 'className') {
            const existingClassname = (_a = element.getAttribute('class')) !== null && _a !== void 0 ? _a : '';
            setAttribute(element, 'class', (existingClassname + ' ' + String(value)).trim());
        }
        else if (name === 'style') {
            setCSSProps(element, value);
        }
        else if (name.startsWith('on')) {
            const eventName = name.slice(2).toLowerCase().replace(/^-/, '');
            element.addEventListener(eventName, value);
        }
        else if (name === 'dangerouslySetInnerHTML' && '__html' in value) {
            element.innerHTML = value.__html;
        }
        else if (name !== 'key' && (booleanishAttributes.has(name) || value !== false)) {
            setAttribute(element, name, value === true ? '' : value);
        }
    }
    return element;
};
// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ur rong.
const Fragment = (typeof DocumentFragment === 'function' ? DocumentFragment : () => { });
// Improve TypeScript support for DocumentFragment
// https://github.com/Microsoft/TypeScript/issues/20469
const React = {
    createElement: h,
    Fragment,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React);


/***/ }),

/***/ "./node_modules/svg-tag-names/index.js":
/*!*********************************************!*\
  !*** ./node_modules/svg-tag-names/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgTagNames": () => (/* binding */ svgTagNames)
/* harmony export */ });
/**
 * List of known SVG tag names.
 *
 * @type {Array<string>}
 */
const svgTagNames = [
  'a',
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'animate',
  'animateColor',
  'animateMotion',
  'animateTransform',
  'animation',
  'audio',
  'canvas',
  'circle',
  'clipPath',
  'color-profile',
  'cursor',
  'defs',
  'desc',
  'discard',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'font',
  'font-face',
  'font-face-format',
  'font-face-name',
  'font-face-src',
  'font-face-uri',
  'foreignObject',
  'g',
  'glyph',
  'glyphRef',
  'handler',
  'hkern',
  'iframe',
  'image',
  'line',
  'linearGradient',
  'listener',
  'marker',
  'mask',
  'metadata',
  'missing-glyph',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'prefetch',
  'radialGradient',
  'rect',
  'script',
  'set',
  'solidColor',
  'stop',
  'style',
  'svg',
  'switch',
  'symbol',
  'tbreak',
  'text',
  'textArea',
  'textPath',
  'title',
  'tref',
  'tspan',
  'unknown',
  'use',
  'video',
  'view',
  'vkern'
]


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
/*!***********************************!*\
  !*** ./src/blocks/search/view.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_chef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-chef */ "./node_modules/dom-chef/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

// @jsx h



const getPostPreview = post => {
  const {
    _embedded,
    link: href,
    title
  } = post;
  return (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("a", {
    className: "premium-search-item",
    key: href,
    href
  }, _embedded['wp:featuredmedia'] && (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
    class: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      ['premium-image-container']: true
    })
  }, (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("img", {
    src: ((_embedded['wp:featuredmedia'][0].media_details || {
      sizes: {}
    }).sizes || {}).thumbnail ? (_embedded['wp:featuredmedia'][0].media_details || {
      sizes: []
    }).sizes.thumbnail.source_url : values((_embedded['wp:featuredmedia'][0].media_details || {
      sizes: []
    }).sizes || {}).reduce((currentSmallest, current) => current.width < currentSmallest.width ? current : currentSmallest, {
      width: 9999999999
    }).source_url || _embedded['wp:featuredmedia'][0].source_url
  }), (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
    class: "premium-ratio"
  })), (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
    dangerouslySetInnerHTML: {
      __html: title.rendered
    },
    key: "span"
  }));
};

const getPostsByName = async search => {
  const data = await fetch(`${PBGSearch.rest_url}wp/v2/posts${PBGSearch.rest_url.indexOf('?') > -1 ? '&' : '?'}_embed=1&post_type=post&per_page=6&search=${search}`);
  const jsonData = await data.json();
  return jsonData;
};

const searchBlocks = document.querySelectorAll('.wp-block-premium-search');

if (searchBlocks.length > 0) {
  searchBlocks.forEach(function (searchBlock) {
    if (searchBlock.classList.contains('premium-style-button')) {
      const searchButton = searchBlock.querySelector('.wp-block-premium-search__button');
      const searchModal = searchBlock.querySelector('.premium-search-modal');
      const closeButton = searchModal.querySelector('.premium-modal-actions button');
      const searchInput = searchBlock.querySelector('input[type="search"]');
      const form = searchBlock.querySelector('.premium-advanced-search-form');
      searchButton.addEventListener('click', e => {
        e.preventDefault();
        searchModal.classList.add('open');
        searchBlock.classList.add('modal-open');
      });
      closeButton.addEventListener('click', e => {
        e.preventDefault();
        searchModal.classList.remove('open');
        searchBlock.classList.remove('modal-open');
      });

      if (searchBlock.classList.contains('premium-ajax-search')) {
        searchInput.addEventListener('input', async e => {
          const value = e.target.value;
          const posts = await getPostsByName(value);
          const searchResultsElement = form.querySelector('.premium-search-results');

          if (searchResultsElement) {
            form.removeChild(searchResultsElement);
          }

          if (posts.length > 0 && e.target.value.trim().length > 0) {
            let searchResults = (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
              className: "premium-search-results"
            }, posts.map(post => getPostPreview(post)));
            form.appendChild(searchResults);
          }
        });
      }
    }

    if (searchBlock.classList.contains('premium-style-default') && searchBlock.classList.contains('premium-ajax-search')) {
      const searchInput = searchBlock.querySelector('input[type="search"]');
      searchInput.addEventListener('input', async e => {
        const value = e.target.value;
        const posts = await getPostsByName(value);
        const searchDropdownElement = searchBlock.querySelector('.premium-search-dropdown');

        if (searchDropdownElement) {
          searchBlock.removeChild(searchDropdownElement);
        }

        if (posts.length > 0 && e.target.value.trim().length > 0) {
          let searchResults = (0,dom_chef__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
            className: "premium-search-dropdown"
          }, posts.map(post => getPostPreview(post)));
          searchBlock.appendChild(searchResults);
        }
      });
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=view.js.map