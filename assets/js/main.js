/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/dual-heading/index.js":
/*!******************************************!*\
  !*** ./src/blocks/dual-heading/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Toolbar = _wp$components.Toolbar,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl;\nvar _wp$editor = wp.editor,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    ColorPalette = _wp$editor.ColorPalette,\n    URLInput = _wp$editor.URLInput;\nregisterBlockType('premium/dheading-block', {\n  title: __('Dual Heading'),\n  icon: 'editor-paragraph',\n  category: 'premium-blocks',\n  attributes: {\n    align: {\n      type: 'string',\n      default: 'center'\n    },\n    firstHeading: {\n      type: 'array',\n      source: 'children',\n      default: 'Premium ' //            selector: `.${className}__first`\n\n    },\n    secondHeading: {\n      type: 'array',\n      source: 'children',\n      default: 'Blocks' //            selector: `.${className}__first`\n\n    },\n    titleTag: {\n      type: 'string',\n      default: 'h2'\n    },\n    display: {\n      type: 'string',\n      default: 'inline'\n    }\n  },\n  edit: function edit(props) {\n    var setAttributes = props.setAttributes,\n        isSelected = props.isSelected,\n        className = props.className;\n    var _props$attributes = props.attributes,\n        contentAlign = _props$attributes.contentAlign,\n        firstHeading = _props$attributes.firstHeading,\n        secondHeading = _props$attributes.secondHeading,\n        titleTag = _props$attributes.titleTag,\n        display = _props$attributes.display;\n    var DISPLAY = [{\n      value: \"inline\",\n      label: \"Inline\"\n    }, {\n      value: \"block\",\n      label: \"Block\"\n    }];\n    return [isSelected && wp.element.createElement(BlockControls, {\n      key: \"controls\"\n    }, wp.element.createElement(AlignmentToolbar, {\n      value: contentAlign,\n      onChange: function onChange(newAlign) {\n        return setAttributes({\n          contentAlign: newAlign\n        });\n      }\n    })), isSelected && wp.element.createElement(InspectorControls, {\n      key: \"inspector\"\n    }, wp.element.createElement(PanelBody, {\n      title: __(\"General Settings\"),\n      initialOpen: false\n    }, wp.element.createElement(TextControl, {\n      label: __('First Heading'),\n      type: \"url\",\n      value: firstHeading,\n      onChange: function onChange(value) {\n        return setAttributes({\n          firstHeading: value\n        });\n      }\n    }), wp.element.createElement(TextControl, {\n      label: __('Second Heading'),\n      type: \"url\",\n      value: secondHeading,\n      onChange: function onChange(value) {\n        return setAttributes({\n          secondHeading: value\n        });\n      }\n    }), wp.element.createElement(\"p\", null, __('HTML Tag')), wp.element.createElement(Toolbar, {\n      controls: '123456'.split('').map(function (tag) {\n        return {\n          icon: 'heading',\n          isActive: 'H' + tag === titleTag,\n          onClick: function onClick() {\n            return setAttributes({\n              titleTag: 'H' + tag\n            });\n          },\n          subscript: tag\n        };\n      })\n    }), wp.element.createElement(SelectControl, {\n      label: __('Display'),\n      value: display,\n      options: DISPLAY,\n      onChange: function onChange(value) {\n        return setAttributes({\n          display: value\n        });\n      }\n    }))), wp.element.createElement(\"div\", {\n      className: \"\".concat(className, \"__container\"),\n      style: {\n        textAlign: contentAlign\n      }\n    }, wp.element.createElement(\"h1\", null, wp.element.createElement(\"span\", {\n      className: \"\".concat(className, \"__first\"),\n      style: {\n        display: display\n      }\n    }, firstHeading), wp.element.createElement(\"span\", {\n      className: \"\".concat(className, \"__second\"),\n      style: {\n        display: display\n      }\n    }, secondHeading)))];\n  },\n  save: function save(props) {\n    var align = props.align,\n        firstHeading = props.firstHeading,\n        secondHeading = props.secondHeading,\n        contentAlign = props.contentAlign,\n        className = props.className;\n    return [wp.element.createElement(\"div\", {\n      className: \"\".concat(className, \"__container\")\n    }, wp.element.createElement(\"span\", {\n      className: \"\".concat(className, \"__first\")\n    }, \"Hello\"), wp.element.createElement(\"span\", {\n      className: \"\".concat(className, \"__second\")\n    }, \"World\"))];\n  }\n});\n\n//# sourceURL=webpack:///./src/blocks/dual-heading/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_dual_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/dual-heading */ \"./src/blocks/dual-heading/index.js\");\n/* harmony import */ var _blocks_dual_heading__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_dual_heading__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });