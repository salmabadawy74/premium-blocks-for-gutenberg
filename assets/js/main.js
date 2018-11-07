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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_dual_heading__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_dual_heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_dual_heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_banner__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__blocks_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_pricing_table__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_pricing_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__blocks_pricing_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_maps__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__blocks_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_testimonials__ = __webpack_require__(5);






/***/ }),
/* 1 */
/***/ (function(module, exports) {

var className = "premium-dheading-block";

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    Toolbar = _wp$components.Toolbar,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    URLInput = _wp$editor.URLInput;


registerBlockType("premium/dheading-block", {
  title: __("Dual Heading"),
  icon: "editor-paragraph",
  category: "premium-blocks",
  attributes: {
    contentAlign: {
      type: "string",
      default: "center"
    },
    firstHeading: {
      type: "array",
      source: "children",
      default: "Premium ",
      selector: ".premium-dheading-block__first"
    },
    secondHeading: {
      type: "array",
      source: "children",
      default: "Blocks",
      selector: ".premium-dheading-block__second"
    },
    titleTag: {
      type: "string",
      default: "h1"
    },
    display: {
      type: "string",
      default: "inline"
    },
    firstColor: {
      type: "string",
      default: "#6ec1e4"
    },
    firstSize: {
      type: "number",
      default: "20"
    },
    firstBackground: {
      type: "string"
    },
    firstBorderType: {
      type: "string",
      default: "none"
    },
    firstBorderWidth: {
      type: "number",
      default: "1"
    },
    firstBorderRadius: {
      type: "number",
      default: "0"
    },
    firstBorderColor: {
      type: "string"
    },
    firstMarginR: {
      type: "number",
      default: "0"
    },
    firstMarginL: {
      type: "number",
      default: "0"
    },
    firstPadding: {
      type: "number",
      default: "0"
    },
    firstClip: {
      type: "boolean",
      default: false
    },
    firstAnim: {
      type: "boolean",
      default: false
    },
    firstClipColor: {
      type: "string",
      default: "#54595f"
    },
    secondColor: {
      type: "string",
      default: "#54595f"
    },
    secondSize: {
      type: "number",
      default: "20"
    },
    secondBackground: {
      type: "string"
    },
    secondBorderType: {
      type: "string",
      default: "none"
    },
    secondBorderWidth: {
      type: "number",
      default: "1"
    },
    secondBorderRadius: {
      type: "number",
      default: "0"
    },
    secondBorderColor: {
      type: "string"
    },
    secondMarginR: {
      type: "number",
      default: "0"
    },
    secondMarginL: {
      type: "number",
      default: "0"
    },
    secondPadding: {
      type: "number",
      default: "0"
    },
    secondClip: {
      type: "boolean",
      default: false
    },
    secondAnim: {
      type: "boolean",
      default: false
    },
    secondClipColor: {
      type: "string",
      default: "#6ec1e4"
    },
    link: {
      type: "boolean",
      default: false
    },
    target: {
      type: "boolean",
      default: false
    },
    headingURL: {
      type: "string"
    }
  },

  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var _props$attributes = props.attributes,
        contentAlign = _props$attributes.contentAlign,
        firstHeading = _props$attributes.firstHeading,
        secondHeading = _props$attributes.secondHeading,
        titleTag = _props$attributes.titleTag,
        display = _props$attributes.display,
        firstColor = _props$attributes.firstColor,
        firstBackground = _props$attributes.firstBackground,
        firstSize = _props$attributes.firstSize,
        firstBorderType = _props$attributes.firstBorderType,
        firstBorderWidth = _props$attributes.firstBorderWidth,
        firstBorderRadius = _props$attributes.firstBorderRadius,
        firstBorderColor = _props$attributes.firstBorderColor,
        firstPadding = _props$attributes.firstPadding,
        firstMarginR = _props$attributes.firstMarginR,
        firstMarginL = _props$attributes.firstMarginL,
        firstClip = _props$attributes.firstClip,
        firstAnim = _props$attributes.firstAnim,
        firstClipColor = _props$attributes.firstClipColor,
        secondColor = _props$attributes.secondColor,
        secondBackground = _props$attributes.secondBackground,
        secondSize = _props$attributes.secondSize,
        secondBorderType = _props$attributes.secondBorderType,
        secondBorderWidth = _props$attributes.secondBorderWidth,
        secondBorderRadius = _props$attributes.secondBorderRadius,
        secondBorderColor = _props$attributes.secondBorderColor,
        secondPadding = _props$attributes.secondPadding,
        secondMarginL = _props$attributes.secondMarginL,
        secondMarginR = _props$attributes.secondMarginR,
        secondClip = _props$attributes.secondClip,
        secondAnim = _props$attributes.secondAnim,
        secondClipColor = _props$attributes.secondClipColor,
        link = _props$attributes.link,
        target = _props$attributes.target,
        headingURL = _props$attributes.headingURL;

    var DISPLAY = [{
      value: "inline",
      label: "Inline"
    }, {
      value: "block",
      label: "Block"
    }];
    var BORDER = [{
      value: "none",
      label: "None"
    }, {
      value: "solid",
      label: "Solid"
    }, {
      value: "double",
      label: "Double"
    }, {
      value: "dotted",
      label: "Dotted"
    }, {
      value: "dashed",
      label: "Dashed"
    }, {
      value: "groove",
      label: "Groove"
    }];
    return [isSelected && wp.element.createElement(
      BlockControls,
      { key: "controls" },
      wp.element.createElement(AlignmentToolbar, {
        value: contentAlign,
        onChange: function onChange(newAlign) {
          return setAttributes({ contentAlign: newAlign });
        }
      })
    ), isSelected && wp.element.createElement(
      InspectorControls,
      { key: "inspector" },
      wp.element.createElement(
        PanelBody,
        { title: __("General Settings"), initialOpen: false },
        wp.element.createElement(TextControl, {
          label: __("First Heading"),
          type: "url",
          value: firstHeading,
          onChange: function onChange(value) {
            return setAttributes({ firstHeading: value });
          }
        }),
        wp.element.createElement(TextControl, {
          label: __("Second Heading"),
          type: "url",
          value: secondHeading,
          onChange: function onChange(value) {
            return setAttributes({ secondHeading: value });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Display"),
          value: display,
          options: DISPLAY,
          onChange: function onChange(value) {
            return setAttributes({ display: value });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Link"),
          checked: link,
          onChange: function onChange(newValue) {
            return setAttributes({ link: newValue });
          }
        }),
        link && wp.element.createElement(CheckboxControl, {
          label: __("Open link in new tab"),
          checked: target,
          onChange: function onChange(newValue) {
            return setAttributes({ target: newValue });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("First Heading"), initialOpen: false },
        wp.element.createElement(CheckboxControl, {
          label: __("Clipped"),
          checked: firstClip,
          onChange: function onChange(newValue) {
            return setAttributes({ firstClip: newValue });
          }
        }),
        firstClip && wp.element.createElement(CheckboxControl, {
          label: __("Animated"),
          checked: firstAnim,
          onChange: function onChange(newValue) {
            return setAttributes({ firstAnim: newValue });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: firstColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ firstColor: colorValue });
            },
            label: __("Color")
          }]
        }),
        wp.element.createElement(
          "p",
          null,
          __("Font Size (PX)")
        ),
        wp.element.createElement(RangeControl, {
          value: firstSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ firstSize: newSize });
          }
        }),
        !firstClip && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: firstBackground,
            onChange: function onChange(colorValue) {
              return setAttributes({ firstBackground: colorValue });
            },
            label: __("Background Color")
          }]
        }),
        firstClip && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: firstClipColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ firstClipColor: colorValue });
            },
            label: __("Second Color")
          }]
        }),
        wp.element.createElement(SelectControl, {
          label: __("Border Type"),
          options: BORDER,
          value: firstBorderType,
          onChange: function onChange(newType) {
            return setAttributes({ firstBorderType: newType });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          "none" != firstBorderType && __("Border Width")
        ),
        "none" != firstBorderType && wp.element.createElement(RangeControl, {
          value: firstBorderWidth,
          min: "0",
          max: "50",
          onChange: function onChange(newWidth) {
            return setAttributes({ firstBorderWidth: newWidth });
          }
        }),
        "none" != firstBorderType && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: firstBorderColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ firstBorderColor: colorValue });
            },
            label: __("Border Color")
          }]
        }),
        wp.element.createElement(
          "p",
          null,
          __("Border Radius")
        ),
        wp.element.createElement(RangeControl, {
          value: firstBorderRadius,
          min: "0",
          max: "150",
          onChange: function onChange(newRadius) {
            return setAttributes({ firstBorderRadius: newRadius });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          __("Margin Left")
        ),
        wp.element.createElement(RangeControl, {
          value: firstMarginL,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ firstMarginL: newMargin });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          __("Margin Right")
        ),
        wp.element.createElement(RangeControl, {
          value: firstMarginR,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ firstMarginR: newMargin });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          __("Padding")
        ),
        wp.element.createElement(RangeControl, {
          value: firstPadding,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ firstPadding: newPadding });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Second Heading"), initialOpen: false },
        wp.element.createElement(CheckboxControl, {
          label: __("Clipped"),
          checked: secondClip,
          onChange: function onChange(newValue) {
            return setAttributes({ secondClip: newValue });
          }
        }),
        secondClip && wp.element.createElement(CheckboxControl, {
          label: __("Animated"),
          checked: secondAnim,
          onChange: function onChange(newValue) {
            return setAttributes({ secondAnim: newValue });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: secondColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ secondColor: colorValue });
            },
            label: __("Color")
          }]
        }),
        wp.element.createElement(
          "p",
          null,
          __("Font Size (PX)")
        ),
        wp.element.createElement(RangeControl, {
          min: "10",
          max: "80",
          value: secondSize,
          onChange: function onChange(newSize) {
            return setAttributes({ secondSize: newSize });
          }
        }),
        !secondClip && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: secondBackground,
            onChange: function onChange(colorValue) {
              return setAttributes({ secondBackground: colorValue });
            },
            label: __("Background Color")
          }]
        }),
        secondClip && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: secondClipColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ secondClipColor: colorValue });
            },
            label: __("Second Color")
          }]
        }),
        wp.element.createElement(SelectControl, {
          label: __("Border Type"),
          options: BORDER,
          value: secondBorderType,
          onChange: function onChange(newType) {
            return setAttributes({ secondBorderType: newType });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          "none" != secondBorderType && __("Border Width")
        ),
        "none" != secondBorderType && wp.element.createElement(RangeControl, {
          value: secondBorderWidth,
          min: "0",
          max: "50",
          onChange: function onChange(newWidth) {
            return setAttributes({ secondBorderWidth: newWidth });
          }
        }),
        "none" != secondBorderType && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: secondBorderColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ secondBorderColor: colorValue });
            },
            label: __("Border Color")
          }]
        }),
        wp.element.createElement(
          "p",
          null,
          __("Border Radius")
        ),
        wp.element.createElement(RangeControl, {
          value: secondBorderRadius,
          min: "0",
          max: "150",
          onChange: function onChange(newRadius) {
            return setAttributes({ secondBorderRadius: newRadius });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          __("Margin Left")
        ),
        wp.element.createElement(RangeControl, {
          value: secondMarginL,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ secondMarginL: newMargin });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          __("Margin Right")
        ),
        wp.element.createElement(RangeControl, {
          value: secondMarginR,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ secondMarginR: newMargin });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          __("Padding")
        ),
        wp.element.createElement(RangeControl, {
          value: secondPadding,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ secondPadding: newPadding });
          }
        })
      )
    ), wp.element.createElement(
      "div",
      {
        className: className + "__container",
        style: { textAlign: contentAlign }
      },
      link && isSelected && wp.element.createElement(URLInput, {
        value: headingURL,
        onChange: function onChange(newUrl) {
          return setAttributes({ headingURL: newUrl });
        }
      }),
      wp.element.createElement(
        "h2",
        { className: className + "__title" },
        wp.element.createElement(
          "span",
          {
            className: className + "__first premium-headingc-" + firstClip + " premium-headinga-" + firstAnim,
            style: {
              display: display,
              color: firstColor,
              backgroundColor: firstClip ? "none" : firstBackground,
              backgroundImage: firstClip ? "linear-gradient(to left, " + firstColor + ", " + firstClipColor + ")" : "none",
              fontSize: firstSize + "px",
              border: firstBorderType,
              borderWidth: firstBorderWidth + "px",
              borderRadius: firstBorderRadius + "px",
              borderColor: firstBorderColor,
              padding: firstPadding + "px",
              marginLeft: firstMarginL + "px",
              marginRight: firstMarginR + "px"
            }
          },
          firstHeading
        ),
        wp.element.createElement(
          "span",
          {
            className: className + "__second premium-headingc-" + secondClip + " premium-headinga-" + secondAnim,
            style: {
              display: display,
              color: secondColor,
              backgroundColor: secondClip ? "none" : secondBackground,
              backgroundImage: secondClip ? "linear-gradient(to left, " + secondColor + ", " + secondClipColor + ")" : "none",
              fontSize: secondSize + "px",
              border: secondBorderType,
              borderWidth: secondBorderWidth + "px",
              borderRadius: secondBorderRadius + "px",
              borderColor: secondBorderColor,
              padding: secondPadding + "px",
              marginLeft: secondMarginL + "px",
              marginRight: secondMarginR + "px"
            }
          },
          secondHeading
        )
      )
    )];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        contentAlign = _props$attributes2.contentAlign,
        firstHeading = _props$attributes2.firstHeading,
        secondHeading = _props$attributes2.secondHeading,
        display = _props$attributes2.display,
        firstColor = _props$attributes2.firstColor,
        firstBackground = _props$attributes2.firstBackground,
        firstSize = _props$attributes2.firstSize,
        firstBorderType = _props$attributes2.firstBorderType,
        firstBorderWidth = _props$attributes2.firstBorderWidth,
        firstBorderRadius = _props$attributes2.firstBorderRadius,
        firstBorderColor = _props$attributes2.firstBorderColor,
        firstPadding = _props$attributes2.firstPadding,
        firstMargin = _props$attributes2.firstMargin,
        firstClip = _props$attributes2.firstClip,
        firstAnim = _props$attributes2.firstAnim,
        firstClipColor = _props$attributes2.firstClipColor,
        secondColor = _props$attributes2.secondColor,
        secondBackground = _props$attributes2.secondBackground,
        secondSize = _props$attributes2.secondSize,
        secondBorderType = _props$attributes2.secondBorderType,
        secondBorderWidth = _props$attributes2.secondBorderWidth,
        secondBorderRadius = _props$attributes2.secondBorderRadius,
        secondBorderColor = _props$attributes2.secondBorderColor,
        secondPadding = _props$attributes2.secondPadding,
        secondMargin = _props$attributes2.secondMargin,
        secondClip = _props$attributes2.secondClip,
        secondAnim = _props$attributes2.secondAnim,
        secondClipColor = _props$attributes2.secondClipColor,
        link = _props$attributes2.link,
        target = _props$attributes2.target,
        headingURL = _props$attributes2.headingURL;


    return wp.element.createElement(
      "a",
      {
        className: className + "__link",
        href: link && headingURL,
        target: target && "_blank"
      },
      wp.element.createElement(
        "div",
        {
          className: className + "__container",
          style: {
            textAlign: contentAlign
          }
        },
        wp.element.createElement(
          "h2",
          { className: className + "__title" },
          wp.element.createElement(
            "span",
            {
              className: className + "__first premium-headingc-" + firstClip + " premium-headinga-" + firstAnim,
              style: {
                display: display,
                color: firstColor,
                backgroundColor: firstClip ? "none" : firstBackground,
                backgroundImage: firstClip ? "linear-gradient(to left, " + firstColor + ", " + firstClipColor + ")" : "none",
                fontSize: firstSize + "px",
                border: firstBorderType,
                borderWidth: firstBorderWidth + "px",
                borderRadius: firstBorderRadius + "px",
                borderColor: firstBorderColor,
                padding: firstPadding + "px",
                margin: firstMargin + "px"
              }
            },
            firstHeading
          ),
          wp.element.createElement(
            "span",
            {
              className: className + "__second premium-headingc-" + secondClip + " premium-headinga-" + secondAnim,
              style: {
                display: display,
                color: secondColor,
                backgroundColor: secondClip ? "none" : secondBackground,
                backgroundImage: secondClip ? "linear-gradient(to left, " + secondColor + ", " + secondClipColor + ")" : "none",
                fontSize: secondSize + "px",
                border: secondBorderType,
                borderWidth: secondBorderWidth + "px",
                borderRadius: secondBorderRadius + "px",
                borderColor: secondBorderColor,
                padding: secondPadding + "px",
                margin: secondMargin + "px"
              }
            },
            secondHeading
          )
        )
      )
    );
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var className = "premium-banner";

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelColor = _wp$components.PanelColor,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    ColorPalette = _wp$editor.ColorPalette;


registerBlockType("premium/banner", {
  title: __("Banner"),
  icon: "admin-page",
  category: "premium-blocks",
  attributes: {
    imageID: {
      type: "number"
    },
    imageURL: {
      type: "string",
      source: "attribute",
      attribute: "src",
      selector: ".premium-banner__img"
    },
    title: {
      type: "array",
      source: "children",
      selector: ".premium-banner__title",
      default: __("Awesome Title")
    },
    titleTag: {
      type: "string",
      default: "H3"
    },
    desc: {
      type: "array",
      source: "children",
      selector: ".premium-banner__desc",
      default: __("Cool Description!!")
    },
    contentAlign: {
      type: "string",
      default: "left"
    },
    effect: {
      type: "string",
      default: "effect1"
    },
    hoverEffect: {
      type: "string",
      default: "none"
    },
    height: {
      type: "string",
      default: "default"
    },
    minHeight: {
      type: "number"
    },
    verAlign: {
      type: "string",
      default: "top"
    },
    hovered: {
      type: "boolean",
      default: false
    },
    responsive: {
      type: "boolean",
      default: false
    },
    background: {
      type: "string"
    },
    opacity: {
      type: "number",
      default: "100"
    },
    borderType: {
      type: "string",
      default: "none"
    },
    borderWidth: {
      type: "number",
      default: "1"
    },
    borderRadius: {
      type: "number",
      default: "0"
    },
    borderColor: {
      type: "string"
    },
    titleColor: {
      type: "string"
    },
    titleSize: {
      type: "number",
      default: "20"
    },
    titleLine: {
      type: "number"
    },
    titleWeight: {
      type: "number"
    },
    descColor: {
      type: "string",
      default: "#000"
    },
    descSize: {
      type: "number",
      default: "20"
    },
    descLine: {
      type: "number"
    },
    descWeight: {
      type: "number"
    },
    urlCheck: {
      type: "boolean",
      default: false
    },
    target: {
      type: "boolean",
      default: false
    },
    url: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".premium-banner__link"
    }
  },
  edit: function edit(props) {
    var isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    var _props$attributes = props.attributes,
        imageID = _props$attributes.imageID,
        imageURL = _props$attributes.imageURL,
        title = _props$attributes.title,
        titleTag = _props$attributes.titleTag,
        desc = _props$attributes.desc,
        contentAlign = _props$attributes.contentAlign,
        effect = _props$attributes.effect,
        hoverEffect = _props$attributes.hoverEffect,
        height = _props$attributes.height,
        minHeight = _props$attributes.minHeight,
        verAlign = _props$attributes.verAlign,
        hovered = _props$attributes.hovered,
        responsive = _props$attributes.responsive,
        background = _props$attributes.background,
        opacity = _props$attributes.opacity,
        borderType = _props$attributes.borderType,
        borderWidth = _props$attributes.borderWidth,
        borderRadius = _props$attributes.borderRadius,
        borderColor = _props$attributes.borderColor,
        titleColor = _props$attributes.titleColor,
        titleSize = _props$attributes.titleSize,
        titleLine = _props$attributes.titleLine,
        titleWeight = _props$attributes.titleWeight,
        descColor = _props$attributes.descColor,
        descSize = _props$attributes.descSize,
        descLine = _props$attributes.descLine,
        descWeight = _props$attributes.descWeight,
        urlCheck = _props$attributes.urlCheck,
        url = _props$attributes.url,
        target = _props$attributes.target;

    var ALIGNS = [{
      value: "flex-start",
      label: "Top"
    }, {
      value: "center",
      label: "Middle"
    }, {
      value: "flex-end",
      label: "Bottom"
    }, {
      value: "inherit",
      label: "Full"
    }];
    var EFFECTS = [{
      value: "effect1",
      label: "Effect 1"
    }, {
      value: "effect2",
      label: "Effect 2"
    }, {
      value: "effect3",
      label: "Effect 3"
    }, {
      value: "effect4",
      label: "Effect 4"
    }, {
      value: "effect5",
      label: "Effect 5"
    }, {
      value: "effect6",
      label: "Effect 6"
    }];
    var WEIGHT = [{
      value: "100",
      label: "100"
    }, {
      value: "200",
      label: "200"
    }, {
      value: "300",
      label: "300"
    }, {
      value: "400",
      label: "Normal"
    }, {
      value: "500",
      label: "500"
    }, {
      value: "600",
      label: "600"
    }, {
      value: "700",
      label: "700"
    }, {
      value: "800",
      label: "800"
    }, {
      value: "900",
      label: "Bold"
    }];
    var HOVER = [{
      value: "none",
      label: "None"
    }, {
      value: "zoomin",
      label: "Zoom In"
    }, {
      value: "zoomout",
      label: "Zoom Out"
    }, {
      value: "scale",
      label: "Scale"
    }, {
      value: "gray",
      label: "Gray Scale"
    }, {
      value: "blur",
      label: "Blur"
    }, {
      value: "bright",
      label: "Bright"
    }, {
      value: "sepia",
      label: "Sepia"
    }];
    var BORDER = [{
      value: "none",
      label: "None"
    }, {
      value: "solid",
      label: "Solid"
    }, {
      value: "double",
      label: "Double"
    }, {
      value: "dotted",
      label: "Dotted"
    }, {
      value: "dashed",
      label: "Dashed"
    }, {
      value: "groove",
      label: "Groove"
    }];
    var HEIGHT = [{
      value: "default",
      label: "Default"
    }, {
      value: "custom",
      label: "Custom"
    }];

    return [isSelected && wp.element.createElement(
      BlockControls,
      { key: "controls" },
      wp.element.createElement(AlignmentToolbar, {
        value: contentAlign,
        onChange: function onChange(newAlign) {
          return setAttributes({ contentAlign: newAlign });
        }
      }),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(MediaUpload, {
          onSelect: function onSelect(media) {
            return setAttributes({
              imageURL: media.url,
              imageID: media.id
            });
          },
          value: imageID,
          type: "image",
          render: function render(_ref) {
            var open = _ref.open;
            return wp.element.createElement(IconButton, {
              className: "components-toolbar__control",
              label: __("Edit Image"),
              icon: "edit",
              onClick: open
            });
          }
        })
      )
    ), isSelected && imageURL && wp.element.createElement(
      InspectorControls,
      { key: "inspector" },
      wp.element.createElement(
        PanelBody,
        { title: __("General Settings"), initialOpen: false },
        wp.element.createElement(SelectControl, {
          label: __("Effect"),
          value: effect,
          onChange: function onChange(newEffect) {
            return setAttributes({ effect: newEffect });
          },
          options: EFFECTS
        }),
        wp.element.createElement(SelectControl, {
          label: __("Image Hover Effect"),
          options: HOVER,
          value: hoverEffect,
          onChange: function onChange(newEffect) {
            return setAttributes({ hoverEffect: newEffect });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Always Hovered"),
          checked: hovered,
          onChange: function onChange(check) {
            return setAttributes({ hovered: check });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Height"),
          options: HEIGHT,
          value: height,
          onChange: function onChange(newHeight) {
            return setAttributes({ height: newHeight });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          "custom" === height && __("Min Height (PX)")
        ),
        "custom" === height && wp.element.createElement(RangeControl, {
          value: minHeight,
          min: "10",
          max: "500",
          onChange: function onChange(newSize) {
            return setAttributes({ minHeight: newSize });
          }
        }),
        "custom" === height && wp.element.createElement(SelectControl, {
          label: __("Vertical Align"),
          options: ALIGNS,
          value: verAlign,
          onChange: function onChange(newValue) {
            return setAttributes({ verAlign: newValue });
          }
        }),
        wp.element.createElement(
          PanelColor,
          {
            title: __("Background Color"),
            colorValue: background
          },
          wp.element.createElement(ColorPalette, {
            value: background,
            onChange: function onChange(newColor) {
              return setAttributes({ background: newColor });
            }
          })
        ),
        wp.element.createElement(RangeControl, {
          label: __("Opacity"),
          value: opacity,
          min: "1",
          max: "100",
          onChange: function onChange(newOpacity) {
            return setAttributes({ opacity: newOpacity });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Border Type"),
          options: BORDER,
          value: borderType,
          onChange: function onChange(newType) {
            return setAttributes({ borderType: newType });
          }
        }),
        "none" != borderType && wp.element.createElement(RangeControl, {
          label: __("Border  Width"),
          value: borderWidth,
          min: "0",
          max: "50",
          onChange: function onChange(newWidth) {
            return setAttributes({ borderWidth: newWidth });
          }
        }),
        "none" != borderType && wp.element.createElement(
          PanelColor,
          { title: __("Border Color"), colorValue: borderColor },
          wp.element.createElement(ColorPalette, {
            value: borderColor,
            onChange: function onChange(newColor) {
              return setAttributes({ borderColor: newColor });
            }
          })
        ),
        wp.element.createElement(RangeControl, {
          label: __("Border Radius"),
          value: borderRadius,
          min: "0",
          max: "150",
          onChange: function onChange(newRadius) {
            return setAttributes({ borderRadius: newRadius });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Link"),
          checked: urlCheck,
          onChange: function onChange(newCheck) {
            return setAttributes({ urlCheck: newCheck });
          }
        }),
        urlCheck && wp.element.createElement(TextControl, {
          value: url,
          onChange: function onChange(newURL) {
            return setAttributes({ url: newURL });
          }
        }),
        urlCheck && wp.element.createElement(CheckboxControl, {
          label: __("Open link in new tab"),
          checked: target,
          onChange: function onChange(newValue) {
            return setAttributes({ target: newValue });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Hide Description on Mobiles"),
          checked: responsive,
          onChange: function onChange(newValue) {
            return setAttributes({ responsive: newValue });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Title Settings"), initialOpen: false },
        wp.element.createElement(
          "p",
          null,
          __("HTML Tag")
        ),
        wp.element.createElement(Toolbar, {
          controls: "123456".split("").map(function (tag) {
            return {
              icon: "heading",
              isActive: "H" + tag === titleTag,
              onClick: function onClick() {
                return setAttributes({ titleTag: "H" + tag });
              },
              subscript: tag
            };
          })
        }),
        wp.element.createElement(
          PanelColor,
          { title: __("Color"), colorValue: titleColor },
          wp.element.createElement(ColorPalette, {
            value: titleColor,
            onChange: function onChange(newColor) {
              return setAttributes({ titleColor: newColor });
            }
          })
        ),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: titleSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ titleSize: newSize });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Font Weight"),
          options: WEIGHT,
          value: titleWeight,
          onChange: function onChange(newWeight) {
            return setAttributes({ titleWeight: newWeight });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Line Height (PX)"),
          value: titleLine,
          onChange: function onChange(newValue) {
            return setAttributes({ titleLine: newValue });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Description Settings"), initialOpen: false },
        wp.element.createElement(
          PanelColor,
          { title: __("Color"), colorValue: descColor },
          wp.element.createElement(ColorPalette, {
            value: descColor,
            onChange: function onChange(newColor) {
              return setAttributes({ descColor: newColor });
            }
          })
        ),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: descSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ descSize: newSize });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Font Weight"),
          options: WEIGHT,
          value: descWeight,
          onChange: function onChange(newWeight) {
            return setAttributes({ descWeight: newWeight });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Line Height (PX)"),
          value: descLine,
          onChange: function onChange(newValue) {
            return setAttributes({ descLine: newValue });
          }
        })
      )
    ), wp.element.createElement(
      "div",
      { className: className + " " + className + "__responsive_" + responsive },
      !imageURL && wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          return setAttributes({
            imageURL: media.url,
            imageID: media.id
          });
        },
        type: "image",
        value: imageID,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(
            Button,
            { className: "button", onClick: open },
            __("Upload Banner Image")
          );
        }
      }),
      imageURL && wp.element.createElement(
        "div",
        {
          className: className + "__inner " + className + "__min " + className + "__" + effect + " " + className + "__" + hoverEffect + " hover_" + hovered,
          style: {
            backgroundColor: background,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor
          }
        },
        wp.element.createElement(
          "div",
          {
            className: className + "__img_wrap " + className + "__" + height,
            style: {
              minHeight: minHeight,
              alignItems: verAlign
            }
          },
          wp.element.createElement("img", {
            className: className + "__img",
            alt: "Banner Image",
            src: imageURL,
            style: {
              opacity: opacity / 100
            }
          })
        ),
        wp.element.createElement(
          "div",
          { className: className + "__content" },
          wp.element.createElement(
            "div",
            {
              className: className + "__title_wrap",
              style: {
                textAlign: contentAlign
              }
            },
            wp.element.createElement(RichText, {
              tagName: titleTag.toLowerCase(),
              className: className + "__title",
              value: title,
              isSelected: false,
              onChange: function onChange(newText) {
                return setAttributes({ title: newText });
              },
              style: {
                color: titleColor,
                fontSize: titleSize + "px",
                fontWeight: titleWeight,
                lineHeight: titleLine + "px"
              }
            })
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__desc_wrap",
              style: {
                textAlign: contentAlign
              }
            },
            wp.element.createElement(RichText, {
              tagName: "p",
              className: className + "__desc",
              value: desc,
              isSelected: false,
              onChange: function onChange(newText) {
                return setAttributes({ desc: newText });
              },
              style: {
                color: descColor,
                fontSize: descSize + "px",
                fontWeight: descWeight,
                lineHeight: descLine + "px"
              }
            })
          )
        )
      )
    )];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        imageURL = _props$attributes2.imageURL,
        title = _props$attributes2.title,
        titleTag = _props$attributes2.titleTag,
        desc = _props$attributes2.desc,
        contentAlign = _props$attributes2.contentAlign,
        effect = _props$attributes2.effect,
        hoverEffect = _props$attributes2.hoverEffect,
        height = _props$attributes2.height,
        minHeight = _props$attributes2.minHeight,
        verAlign = _props$attributes2.verAlign,
        hovered = _props$attributes2.hovered,
        responsive = _props$attributes2.responsive,
        background = _props$attributes2.background,
        opacity = _props$attributes2.opacity,
        borderType = _props$attributes2.borderType,
        borderWidth = _props$attributes2.borderWidth,
        borderRadius = _props$attributes2.borderRadius,
        borderColor = _props$attributes2.borderColor,
        titleColor = _props$attributes2.titleColor,
        titleSize = _props$attributes2.titleSize,
        titleWeight = _props$attributes2.titleWeight,
        titleLine = _props$attributes2.titleLine,
        descColor = _props$attributes2.descColor,
        descSize = _props$attributes2.descSize,
        descWeight = _props$attributes2.descWeight,
        descLine = _props$attributes2.descLine,
        urlCheck = _props$attributes2.urlCheck,
        url = _props$attributes2.url,
        target = _props$attributes2.target;


    return wp.element.createElement(
      "div",
      { className: className + " " + className + "__responsive_" + responsive },
      wp.element.createElement(
        "div",
        {
          className: className + "__inner " + className + "__min " + className + "__" + effect + " " + className + "__" + hoverEffect + " hover_" + hovered,
          style: {
            backgroundColor: background,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor
          }
        },
        wp.element.createElement(
          "div",
          {
            className: className + "__img_wrap " + className + "__" + height,
            style: {
              minHeight: minHeight,
              alignItems: verAlign
            }
          },
          wp.element.createElement("img", {
            className: className + "__img",
            alt: "Banner Image",
            src: imageURL,
            style: {
              opacity: opacity / 100
            }
          })
        ),
        wp.element.createElement(
          "div",
          { className: className + "__content" },
          wp.element.createElement(
            "div",
            {
              className: className + "__title_wrap",
              style: {
                textAlign: contentAlign
              }
            },
            wp.element.createElement(RichText.Content, {
              tagName: titleTag.toLowerCase(),
              className: className + "__title",
              value: title,
              style: {
                color: titleColor,
                fontSize: titleSize + "px",
                fontWeight: titleWeight,
                lineHeight: titleLine + "px"
              }
            })
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__desc_wrap",
              style: {
                textAlign: contentAlign
              }
            },
            wp.element.createElement(RichText.Content, {
              tagName: "p",
              className: className + "__desc",
              value: desc,
              style: {
                color: descColor,
                fontSize: descSize + "px",
                fontWeight: descWeight,
                lineHeight: descLine + "px"
              }
            })
          )
        ),
        urlCheck && "" !== url && wp.element.createElement("a", {
          className: className + "__link",
          href: url,
          target: target && "_blank"
        })
      )
    );
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var blockClass = "premium-pricing-table";

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    URLInput = _wp$editor.URLInput;


registerBlockType("premium/pricing-table", {
  title: __("Pricing Table"),
  icon: "editor-table",
  category: "premium-blocks",
  attributes: {
    contentAlign: {
      type: "string",
      default: "center"
    },
    tableBack: {
      type: "string"
    },
    borderType: {
      type: "string",
      default: "none"
    },
    borderWidth: {
      type: "number",
      default: "1"
    },
    borderRadius: {
      type: "number",
      default: "0"
    },
    borderColor: {
      type: "string"
    },
    tablePadding: {
      type: "number",
      default: "0"
    },
    title: {
      type: "array",
      source: "children",
      selector: ".premium-pricing-table__title",
      default: "Pricing Table"
    },
    titleTag: {
      type: "string",
      default: "H2"
    },
    titleColor: {
      type: "string",
      default: "#6ec1e4"
    },
    titleSize: {
      type: "number"
    },
    titleLine: {
      type: "number"
    },
    titleWeight: {
      type: "number",
      default: 500
    },
    titleBack: {
      type: "string"
    },
    titleMarginB: {
      type: "number",
      default: 20
    },
    titleMarginT: {
      type: "number",
      default: 20
    },
    titlePadding: {
      type: "number",
      default: "0"
    },
    desc: {
      type: "array",
      source: "children",
      selector: ".premium-pricing-table__desc"
    },
    descColor: {
      type: "string",
      default: "#000"
    },
    descSize: {
      type: "number"
    },
    descLine: {
      type: "number"
    },
    descWeight: {
      type: "number"
    },
    descBack: {
      type: "string"
    },
    descMarginT: {
      type: "number",
      default: "0"
    },
    descMarginB: {
      type: "number",
      default: "30"
    },
    descPadding: {
      type: "number",
      default: "0"
    },
    titleChecked: {
      type: "boolean",
      default: true
    },
    descChecked: {
      type: "boolean",
      default: false
    },
    priceChecked: {
      type: "boolean",
      default: true
    },
    priceBack: {
      type: "string"
    },
    priceMarginT: {
      type: "number"
    },
    priceMarginB: {
      type: "number",
      default: 10
    },
    pricePadding: {
      type: "number"
    },
    slashPrice: {
      type: "string"
    },
    slashColor: {
      type: "string"
    },
    slashSize: {
      type: "number",
      default: 20
    },
    currPrice: {
      type: "string",
      default: "$"
    },
    currColor: {
      type: "string"
    },
    currSize: {
      type: "number",
      default: 20
    },
    valPrice: {
      type: "string",
      default: "25"
    },
    valColor: {
      type: "string"
    },
    valSize: {
      type: "number",
      default: 50
    },
    divPrice: {
      type: "string",
      default: "/"
    },
    divColor: {
      type: "string"
    },
    divSize: {
      type: "number",
      default: 20
    },
    durPrice: {
      type: "string",
      default: "m"
    },
    durColor: {
      type: "string"
    },
    durSize: {
      type: "number",
      default: 20
    },
    selectedStyle: {
      type: "string",
      default: "price"
    },
    btnChecked: {
      type: "boolean",
      default: true
    },
    btnText: {
      type: "string",
      default: "Get Started"
    },
    btnLink: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".premium-pricing__button_link"
    },
    btnTarget: {
      type: "boolean",
      default: true
    },
    btnColor: {
      type: "string",
      default: "#fff"
    },
    btnWidth: {
      type: "number"
    },
    btnSize: {
      type: "number"
    },
    btnWeight: {
      type: "number",
      default: 900
    },
    btnBack: {
      type: "string",
      default: "#6ec1e4"
    },
    btnMarginT: {
      type: "number",
      default: "0"
    },
    btnMarginB: {
      type: "number",
      default: "0"
    },
    btnPadding: {
      type: "number",
      default: 10
    },
    btnBorderType: {
      type: "string",
      default: "none"
    },
    btnBorderWidth: {
      type: "number",
      default: "1"
    },
    btnBorderRadius: {
      type: "number",
      default: "0"
    },
    btnBorderColor: {
      type: "string"
    },
    badgeChecked: {
      type: "boolean",
      default: true
    },
    badgePos: {
      type: "string",
      default: "right"
    },
    badgeBack: {
      type: "string",
      default: "#6ec1e4"
    },
    badgeSize: {
      type: "number"
    },
    badgeText: {
      type: "string",
      default: "popular"
    },
    listChecked: {
      type: "boolean",
      default: true
    },
    listColor: {
      type: "string"
    },
    listSize: {
      type: "number"
    },
    listWeight: {
      type: "number",
      default: 500
    },
    listBack: {
      type: "string"
    },
    listItems: {
      type: "array",
      source: "children",
      selector: ".premium-pricing-table__list"
    },
    listMarginB: {
      type: "number",
      default: 20
    },
    listMarginT: {
      type: "number"
    },
    listPadding: {
      type: "number"
    },
    listStyle: {
      type: "string",
      default: "disc"
    },
    slashV: {
      type: "string",
      default: "center"
    },
    currV: {
      type: "string",
      default: "center"
    },
    valV: {
      type: "string",
      default: "center"
    },
    divV: {
      type: "string",
      default: "center"
    },
    durV: {
      type: "string",
      default: "center"
    }
  },
  edit: function edit(props) {
    var isSelected = props.isSelected,
        setAttributes = props.setAttributes,
        className = props.className;
    var _props$attributes = props.attributes,
        contentAlign = _props$attributes.contentAlign,
        tableBack = _props$attributes.tableBack,
        borderType = _props$attributes.borderType,
        borderWidth = _props$attributes.borderWidth,
        borderRadius = _props$attributes.borderRadius,
        borderColor = _props$attributes.borderColor,
        tablePadding = _props$attributes.tablePadding,
        titleChecked = _props$attributes.titleChecked,
        title = _props$attributes.title,
        titleTag = _props$attributes.titleTag,
        titleColor = _props$attributes.titleColor,
        titleSize = _props$attributes.titleSize,
        titleLine = _props$attributes.titleLine,
        titleWeight = _props$attributes.titleWeight,
        titleBack = _props$attributes.titleBack,
        titleMarginT = _props$attributes.titleMarginT,
        titleMarginB = _props$attributes.titleMarginB,
        titlePadding = _props$attributes.titlePadding,
        descChecked = _props$attributes.descChecked,
        desc = _props$attributes.desc,
        descColor = _props$attributes.descColor,
        descSize = _props$attributes.descSize,
        descLine = _props$attributes.descLine,
        descWeight = _props$attributes.descWeight,
        descBack = _props$attributes.descBack,
        descMarginT = _props$attributes.descMarginT,
        descMarginB = _props$attributes.descMarginB,
        descPadding = _props$attributes.descPadding,
        priceChecked = _props$attributes.priceChecked,
        priceBack = _props$attributes.priceBack,
        priceMarginT = _props$attributes.priceMarginT,
        priceMarginB = _props$attributes.priceMarginB,
        pricePadding = _props$attributes.pricePadding,
        slashPrice = _props$attributes.slashPrice,
        slashColor = _props$attributes.slashColor,
        slashSize = _props$attributes.slashSize,
        slashV = _props$attributes.slashV,
        currPrice = _props$attributes.currPrice,
        currColor = _props$attributes.currColor,
        currSize = _props$attributes.currSize,
        currV = _props$attributes.currV,
        valPrice = _props$attributes.valPrice,
        valColor = _props$attributes.valColor,
        valSize = _props$attributes.valSize,
        valV = _props$attributes.valV,
        divPrice = _props$attributes.divPrice,
        divColor = _props$attributes.divColor,
        divSize = _props$attributes.divSize,
        divV = _props$attributes.divV,
        durPrice = _props$attributes.durPrice,
        durColor = _props$attributes.durColor,
        durSize = _props$attributes.durSize,
        durV = _props$attributes.durV,
        selectedStyle = _props$attributes.selectedStyle,
        btnChecked = _props$attributes.btnChecked,
        btnText = _props$attributes.btnText,
        btnTarget = _props$attributes.btnTarget,
        btnLink = _props$attributes.btnLink,
        btnColor = _props$attributes.btnColor,
        btnSize = _props$attributes.btnSize,
        btnWeight = _props$attributes.btnWeight,
        btnBack = _props$attributes.btnBack,
        btnMarginT = _props$attributes.btnMarginT,
        btnMarginB = _props$attributes.btnMarginB,
        btnPadding = _props$attributes.btnPadding,
        btnWidth = _props$attributes.btnWidth,
        btnBorderType = _props$attributes.btnBorderType,
        btnBorderWidth = _props$attributes.btnBorderWidth,
        btnBorderRadius = _props$attributes.btnBorderRadius,
        btnBorderColor = _props$attributes.btnBorderColor,
        badgeChecked = _props$attributes.badgeChecked,
        badgePos = _props$attributes.badgePos,
        badgeBack = _props$attributes.badgeBack,
        badgeSize = _props$attributes.badgeSize,
        badgeText = _props$attributes.badgeText,
        listChecked = _props$attributes.listChecked,
        listColor = _props$attributes.listColor,
        listWeight = _props$attributes.listWeight,
        listSize = _props$attributes.listSize,
        listBack = _props$attributes.listBack,
        listItems = _props$attributes.listItems,
        listMarginT = _props$attributes.listMarginT,
        listMarginB = _props$attributes.listMarginB,
        listPadding = _props$attributes.listPadding,
        listStyle = _props$attributes.listStyle;

    var ALIGNS = [{
      value: "flex-start",
      label: "Top"
    }, {
      value: "center",
      label: "Middle"
    }, {
      value: "flex-end",
      label: "Bottom"
    }];
    var PRICE = [{
      value: "slash",
      label: "Slashed Price"
    }, {
      value: "curr",
      label: "Currency"
    }, {
      value: "price",
      label: "Price"
    }, {
      value: "divider",
      label: "Divider"
    }, {
      value: "duration",
      label: "Duration"
    }];
    var WEIGHT = [{
      value: "100",
      label: "100"
    }, {
      value: "200",
      label: "200"
    }, {
      value: "300",
      label: "300"
    }, {
      value: "400",
      label: "Normal"
    }, {
      value: "500",
      label: "500"
    }, {
      value: "600",
      label: "600"
    }, {
      value: "700",
      label: "700"
    }, {
      value: "800",
      label: "800"
    }, {
      value: "900",
      label: "Bold"
    }];
    var BORDER = [{
      value: "none",
      label: "None"
    }, {
      value: "solid",
      label: "Solid"
    }, {
      value: "double",
      label: "Double"
    }, {
      value: "dotted",
      label: "Dotted"
    }, {
      value: "dashed",
      label: "Dashed"
    }, {
      value: "groove",
      label: "Groove"
    }];
    var TYPE = [{
      value: "none",
      label: "None"
    }, {
      value: "disc",
      label: "Filled Circle"
    }, {
      value: "circle",
      label: "Outline Circle"
    }, {
      value: "square",
      label: "Square"
    }];
    var POSITION = [{
      value: "right",
      label: "Right"
    }, {
      value: "left",
      label: "Left"
    }];

    return [isSelected && wp.element.createElement(
      BlockControls,
      { key: "controls" },
      wp.element.createElement(AlignmentToolbar, {
        value: contentAlign,
        onChange: function onChange(newAlign) {
          return setAttributes({ contentAlign: newAlign });
        }
      })
    ), isSelected && wp.element.createElement(
      InspectorControls,
      { key: "inspector" },
      titleChecked && wp.element.createElement(
        PanelBody,
        { title: __("Title"), initialOpen: false },
        wp.element.createElement(Toolbar, {
          controls: "123456".split("").map(function (tag) {
            return {
              icon: "heading",
              isActive: "H" + tag === titleTag,
              onClick: function onClick() {
                return setAttributes({ titleTag: "H" + tag });
              },
              subscript: tag
            };
          })
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: titleColor,
            onChange: function onChange(newColor) {
              return setAttributes({ titleColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: titleSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ titleSize: newSize });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Font Weight"),
          options: WEIGHT,
          value: titleWeight,
          onChange: function onChange(newWeight) {
            return setAttributes({ titleWeight: newWeight });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Line Height (PX)"),
          value: titleLine,
          onChange: function onChange(newValue) {
            return setAttributes({ titleLine: newValue });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: titleBack,
            onChange: function onChange(newColor) {
              return setAttributes({ titleBack: newColor });
            },
            label: __("Background Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Top (PX)"),
          value: titleMarginT,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ titleMarginT: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Bottom (PX)"),
          value: titleMarginB,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ titleMarginB: newMargin });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Padding (PX)"),
          value: titlePadding,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ titlePadding: newPadding });
          }
        })
      ),
      priceChecked && wp.element.createElement(
        PanelBody,
        { title: __("Price"), initialOpen: false },
        wp.element.createElement(TextControl, {
          label: __("Slashed Price"),
          value: slashPrice,
          onChange: function onChange(value) {
            return setAttributes({ slashPrice: value });
          }
        }),
        wp.element.createElement(TextControl, {
          label: __("Currency"),
          value: currPrice,
          onChange: function onChange(value) {
            return setAttributes({ currPrice: value });
          }
        }),
        wp.element.createElement(TextControl, {
          label: __("Price"),
          value: valPrice,
          onChange: function onChange(value) {
            return setAttributes({ valPrice: value });
          }
        }),
        wp.element.createElement(TextControl, {
          label: __("Divider"),
          value: divPrice,
          onChange: function onChange(value) {
            return setAttributes({ divPrice: value });
          }
        }),
        wp.element.createElement(TextControl, {
          label: __("Duration"),
          value: durPrice,
          onChange: function onChange(value) {
            return setAttributes({ durPrice: value });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Element to Style"),
          options: PRICE,
          value: selectedStyle,
          onChange: function onChange(newElem) {
            return setAttributes({ selectedStyle: newElem });
          }
        }),
        "slash" === selectedStyle && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: slashColor,
            onChange: function onChange(newColor) {
              return setAttributes({ slashColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        "slash" === selectedStyle && wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: slashSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ slashSize: newSize });
          }
        }),
        "slash" === selectedStyle && wp.element.createElement(SelectControl, {
          label: __("Vertical Align"),
          options: ALIGNS,
          value: slashV,
          onChange: function onChange(newValue) {
            return setAttributes({ slashV: newValue });
          }
        }),
        "curr" === selectedStyle && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: currColor,
            onChange: function onChange(newColor) {
              return setAttributes({ currColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        "curr" === selectedStyle && wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: currSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ currSize: newSize });
          }
        }),
        "curr" === selectedStyle && wp.element.createElement(SelectControl, {
          label: __("Vertical Align"),
          options: ALIGNS,
          value: currV,
          onChange: function onChange(newValue) {
            return setAttributes({ currV: newValue });
          }
        }),
        "price" === selectedStyle && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: valColor,
            onChange: function onChange(newColor) {
              return setAttributes({ valColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        "price" === selectedStyle && wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: valSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ valSize: newSize });
          }
        }),
        "price" === selectedStyle && wp.element.createElement(SelectControl, {
          label: __("Vertical Align"),
          options: ALIGNS,
          value: valV,
          onChange: function onChange(newValue) {
            return setAttributes({ valV: newValue });
          }
        }),
        "divider" === selectedStyle && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: divColor,
            onChange: function onChange(newColor) {
              return setAttributes({ divColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        "divider" === selectedStyle && wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: divSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ divSize: newSize });
          }
        }),
        "divider" === selectedStyle && wp.element.createElement(SelectControl, {
          label: __("Vertical Align"),
          options: ALIGNS,
          value: divV,
          onChange: function onChange(newValue) {
            return setAttributes({ divV: newValue });
          }
        }),
        "duration" === selectedStyle && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: durColor,
            onChange: function onChange(newColor) {
              return setAttributes({ durColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        "duration" === selectedStyle && wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: durSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ durSize: newSize });
          }
        }),
        "duration" === selectedStyle && wp.element.createElement(SelectControl, {
          label: __("Vertical Align"),
          options: ALIGNS,
          value: durV,
          onChange: function onChange(newValue) {
            return setAttributes({ durV: newValue });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: priceBack,
            onChange: function onChange(newColor) {
              return setAttributes({ priceBack: newColor });
            },
            label: __("Container Background Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Container Margin Top (PX)"),
          value: priceMarginT,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ priceMarginT: newMargin });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Container Margin Bottom (PX)"),
          value: priceMarginB,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ priceMarginB: newPadding });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Container Padding (PX)"),
          value: pricePadding,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ pricePadding: newPadding });
          }
        })
      ),
      listChecked && wp.element.createElement(
        PanelBody,
        { title: __("Features"), initialOpen: false },
        wp.element.createElement(SelectControl, {
          label: __("List Style Type"),
          options: TYPE,
          value: listStyle,
          onChange: function onChange(newType) {
            return setAttributes({ listStyle: newType });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: listColor,
            onChange: function onChange(newColor) {
              return setAttributes({ listColor: newColor });
            },
            label: __("List Items Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: listSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ listSize: newSize });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Font Weight"),
          options: WEIGHT,
          value: listWeight,
          onChange: function onChange(newWeight) {
            return setAttributes({ listWeight: newWeight });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: listBack,
            onChange: function onChange(newColor) {
              return setAttributes({ listBack: newColor });
            },
            label: __("Background Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Top (PX)"),
          value: listMarginT,
          onChange: function onChange(newSize) {
            return setAttributes({ listMarginT: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Bottom (PX)"),
          value: listMarginB,
          onChange: function onChange(newSize) {
            return setAttributes({ listMarginB: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Padding (PX)"),
          value: listPadding,
          onChange: function onChange(newSize) {
            return setAttributes({ listPadding: newSize });
          }
        })
      ),
      descChecked && wp.element.createElement(
        PanelBody,
        { title: __("Description"), initialOpen: false },
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: descColor,
            onChange: function onChange(newColor) {
              return setAttributes({ descColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: descSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ descSize: newSize });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Font Weight"),
          options: WEIGHT,
          value: descWeight,
          onChange: function onChange(newWeight) {
            return setAttributes({ descWeight: newWeight });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Line Height (PX)"),
          value: descLine,
          onChange: function onChange(newValue) {
            return setAttributes({ descLine: newValue });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: descBack,
            onChange: function onChange(newColor) {
              return setAttributes({ descBack: newColor });
            },
            label: __("Background Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Top (PX)"),
          value: descMarginT,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ descMarginT: newMargin });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Bottom (PX)"),
          value: descMarginB,
          min: "0",
          max: "100",
          onChange: function onChange(newMargin) {
            return setAttributes({ descMarginB: newMargin });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Padding (PX)"),
          value: descPadding,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ descPadding: newPadding });
          }
        })
      ),
      btnChecked && wp.element.createElement(
        PanelBody,
        { title: __("Button"), initialOpen: false },
        wp.element.createElement(TextControl, {
          label: __("Button Text"),
          value: btnText,
          onChange: function onChange(newText) {
            return setAttributes({ btnText: newText });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: btnColor,
            onChange: function onChange(newColor) {
              return setAttributes({ btnColor: newColor });
            },
            label: __("Text Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Width (%)"),
          value: btnWidth,
          onChange: function onChange(newSize) {
            return setAttributes({ btnWidth: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: btnSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ btnSize: newSize });
          }
        }),
        wp.element.createElement(SelectControl, {
          label: __("Font Weight"),
          options: WEIGHT,
          value: btnWeight,
          onChange: function onChange(newWeight) {
            return setAttributes({ btnWeight: newWeight });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: btnBack,
            onChange: function onChange(newColor) {
              return setAttributes({ btnBack: newColor });
            },
            label: __("Text Color")
          }]
        }),
        wp.element.createElement(SelectControl, {
          label: __("Border Type"),
          options: BORDER,
          value: btnBorderType,
          onChange: function onChange(newType) {
            return setAttributes({ btnBorderType: newType });
          }
        }),
        "none" != btnBorderType && wp.element.createElement(RangeControl, {
          label: __("Border Width"),
          value: btnBorderWidth,
          min: "0",
          max: "50",
          onChange: function onChange(newWidth) {
            return setAttributes({ btnBorderWidth: newWidth });
          }
        }),
        "none" != btnBorderType && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: btnBorderColor,
            onChange: function onChange(newColor) {
              return setAttributes({ btnBorderColor: newColor });
            },
            label: __("Border Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Border Radius"),
          value: btnBorderRadius,
          min: "0",
          max: "150",
          onChange: function onChange(newRadius) {
            return setAttributes({ btnBorderRadius: newRadius });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Top (PX)"),
          value: btnMarginT,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ btnMarginT: newPadding });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Bottom (PX)"),
          value: btnMarginB,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ btnMarginB: newPadding });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Padding (PX)"),
          value: btnPadding,
          min: "0",
          max: "100",
          onChange: function onChange(newPadding) {
            return setAttributes({ btnPadding: newPadding });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Open Link in a new tab"),
          checked: btnTarget,
          onChange: function onChange(newValue) {
            return setAttributes({ btnTarget: newValue });
          }
        })
      ),
      badgeChecked && wp.element.createElement(
        PanelBody,
        { title: __("Badge"), initialOpen: false },
        wp.element.createElement(SelectControl, {
          label: __("Position"),
          options: POSITION,
          value: badgePos,
          onChange: function onChange(newValue) {
            return setAttributes({ badgePos: newValue });
          }
        }),
        wp.element.createElement(TextControl, {
          label: __("Text"),
          value: badgeText,
          onChange: function onChange(value) {
            return setAttributes({ badgeText: value });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Size"),
          value: badgeSize,
          max: "250",
          onChange: function onChange(newValue) {
            return setAttributes({ badgeSize: newValue });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: badgeBack,
            onChange: function onChange(newColor) {
              return setAttributes({ badgeBack: newColor });
            },
            label: __("Background Color")
          }]
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Display Options"), initialOpen: false },
        wp.element.createElement(CheckboxControl, {
          label: __("Title"),
          checked: titleChecked,
          onChange: function onChange(newValue) {
            return setAttributes({ titleChecked: newValue });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Price"),
          checked: priceChecked,
          onChange: function onChange(newValue) {
            return setAttributes({ priceChecked: newValue });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Features"),
          checked: listChecked,
          onChange: function onChange(newValue) {
            return setAttributes({ listChecked: newValue });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Description"),
          checked: descChecked,
          onChange: function onChange(newValue) {
            return setAttributes({ descChecked: newValue });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Button"),
          checked: btnChecked,
          onChange: function onChange(newValue) {
            return setAttributes({ btnChecked: newValue });
          }
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("Badge"),
          checked: badgeChecked,
          onChange: function onChange(newValue) {
            return setAttributes({ badgeChecked: newValue });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Table"), initialOpen: false },
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: tableBack,
            onChange: function onChange(newColor) {
              return setAttributes({ tableBack: newColor });
            },
            label: __("Background Color")
          }]
        }),
        wp.element.createElement(SelectControl, {
          label: __("Border Type"),
          options: BORDER,
          value: borderType,
          onChange: function onChange(newType) {
            return setAttributes({ borderType: newType });
          }
        }),
        "none" != borderType && wp.element.createElement(RangeControl, {
          label: __("Border Width"),
          value: borderWidth,
          min: "0",
          max: "50",
          onChange: function onChange(newWidth) {
            return setAttributes({ borderWidth: newWidth });
          }
        }),
        "none" != borderType && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: borderColor,
            onChange: function onChange(newColor) {
              return setAttributes({ borderColor: newColor });
            },
            label: __("Border Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Border Radius"),
          value: borderRadius,
          min: "0",
          max: "150",
          onChange: function onChange(newRadius) {
            return setAttributes({ borderRadius: newRadius });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Padding"),
          value: tablePadding,
          min: "0",
          max: "50",
          onChange: function onChange(newValue) {
            return setAttributes({ tablePadding: newValue });
          }
        })
      )
    ), wp.element.createElement(
      "div",
      {
        className: "" + blockClass,
        style: {
          textAlign: contentAlign,
          background: tableBack,
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          padding: tablePadding + "px"
        }
      },
      badgeChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__badge_wrap " + blockClass + "__badge_" + badgePos
        },
        wp.element.createElement(
          "div",
          {
            className: blockClass + "__badge",
            style: {
              borderRightColor: "right" === badgePos ? badgeBack : "transparent",
              borderTopColor: "left" === badgePos ? badgeBack : "transparent",
              borderBottomWidth: badgeSize + "px",
              borderRightWidth: badgeSize + "px",
              borderTopWidth: "left" === badgePos ? badgeSize + "px" : "none",
              borderLeftWidth: "right" === badgePos ? badgeSize + "px" : "none"
            }
          },
          wp.element.createElement(
            "span",
            null,
            badgeText
          )
        )
      ),
      titleChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__title_wrap",
          style: {
            paddingTop: titleMarginT + "px",
            paddingBottom: titleMarginB + "px"
          }
        },
        wp.element.createElement(RichText, {
          tagName: titleTag.toLowerCase(),
          className: blockClass + "__title",
          onChange: function onChange(newText) {
            return setAttributes({ title: newText });
          },
          placeholder: __("Awesome Title"),
          value: title,
          isSelected: false,
          style: {
            color: titleColor,
            background: titleBack,
            fontSize: titleSize + "px",
            fontWeight: titleWeight,
            lineHeight: titleLine + "px",
            padding: titlePadding + "px"
          }
        })
      ),
      priceChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__price_wrap",
          style: {
            background: priceBack,
            marginTop: priceMarginT + "px",
            marginBottom: priceMarginB + "px",
            padding: pricePadding + "px",
            justifyContent: contentAlign
          }
        },
        "" !== slashPrice && wp.element.createElement(
          "strike",
          {
            className: blockClass + "__slash",
            style: {
              color: slashColor,
              fontSize: slashSize + "px",
              alignSelf: slashV
            }
          },
          slashPrice
        ),
        "" !== currPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__currency",
            style: {
              color: currColor,
              fontSize: currSize + "px",
              alignSelf: currV
            }
          },
          currPrice
        ),
        "" !== valPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__val",
            style: {
              color: valColor,
              fontSize: valSize + "px",
              alignSelf: valV
            }
          },
          valPrice
        ),
        "" !== divPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__divider",
            style: {
              color: divColor,
              fontSize: divSize + "px",
              alignSelf: divV
            }
          },
          divPrice
        ),
        "" !== durPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__dur",
            style: {
              color: durColor,
              fontSize: durSize + "px",
              alignSelf: durV
            }
          },
          durPrice
        )
      ),
      listChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__list_wrap",
          style: {
            marginTop: listMarginT + "px",
            marginBottom: listMarginB + "px"
          }
        },
        wp.element.createElement(RichText, {
          tagName: "ul",
          className: blockClass + "__list",
          placeholder: __("List Item #1"),
          multiline: "li",
          onChange: function onChange(newText) {
            return setAttributes({ listItems: newText });
          },
          value: listItems,
          isSelected: false,
          style: {
            color: listColor,
            fontSize: listSize + "px",
            background: listBack,
            padding: listPadding + "px",
            listStyle: listStyle,
            listStylePosition: "inside",
            fontWeight: listWeight
          },
          keepPlaceholderOnFocus: true
        })
      ),
      descChecked && wp.element.createElement(
        "div",
        { className: blockClass + "__desc_wrap" },
        wp.element.createElement(RichText, {
          tagName: "p",
          className: blockClass + "__desc",
          onChange: function onChange(newText) {
            return setAttributes({ desc: newText });
          },
          placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          value: desc,
          isSelected: false,
          style: {
            color: descColor,
            background: descBack,
            fontSize: descSize + "px",
            fontWeight: descWeight,
            lineHeight: descLine + "px",
            marginTop: descMarginT + "px",
            marginBottom: descMarginB + "px",
            padding: descPadding + "px"
          }
        })
      ),
      btnChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__button",
          style: {
            width: btnWidth + "%"
          }
        },
        wp.element.createElement(
          "a",
          {
            "class": blockClass + "__button_link",
            style: {
              color: btnColor,
              background: btnBack,
              fontWeight: btnWeight,
              marginTop: btnMarginT,
              marginBottom: btnMarginB,
              padding: btnPadding,
              fontSize: btnSize + "px",
              border: btnBorderType,
              borderWidth: btnBorderWidth + "px",
              borderRadius: btnBorderRadius + "px",
              borderColor: btnBorderColor
            }
          },
          wp.element.createElement(
            "span",
            null,
            btnText
          )
        ),
        wp.element.createElement(URLInput, {
          value: btnLink,
          onChange: function onChange(newLink) {
            return setAttributes({ btnLink: newLink });
          }
        })
      )
    )];
  },
  save: function save(props) {
    var className = props.className,
        _props$attributes2 = props.attributes,
        contentAlign = _props$attributes2.contentAlign,
        tableBack = _props$attributes2.tableBack,
        borderType = _props$attributes2.borderType,
        borderWidth = _props$attributes2.borderWidth,
        borderRadius = _props$attributes2.borderRadius,
        borderColor = _props$attributes2.borderColor,
        tablePadding = _props$attributes2.tablePadding,
        titleChecked = _props$attributes2.titleChecked,
        title = _props$attributes2.title,
        titleTag = _props$attributes2.titleTag,
        titleColor = _props$attributes2.titleColor,
        titleSize = _props$attributes2.titleSize,
        titleLine = _props$attributes2.titleLine,
        titleWeight = _props$attributes2.titleWeight,
        titleBack = _props$attributes2.titleBack,
        titleMarginT = _props$attributes2.titleMarginT,
        titleMarginB = _props$attributes2.titleMarginB,
        titlePadding = _props$attributes2.titlePadding,
        descChecked = _props$attributes2.descChecked,
        desc = _props$attributes2.desc,
        descColor = _props$attributes2.descColor,
        descSize = _props$attributes2.descSize,
        descLine = _props$attributes2.descLine,
        descWeight = _props$attributes2.descWeight,
        descBack = _props$attributes2.descBack,
        descMarginT = _props$attributes2.descMarginT,
        descMarginB = _props$attributes2.descMarginB,
        descPadding = _props$attributes2.descPadding,
        priceChecked = _props$attributes2.priceChecked,
        priceBack = _props$attributes2.priceBack,
        priceMarginT = _props$attributes2.priceMarginT,
        priceMarginB = _props$attributes2.priceMarginB,
        pricePadding = _props$attributes2.pricePadding,
        slashPrice = _props$attributes2.slashPrice,
        slashColor = _props$attributes2.slashColor,
        slashSize = _props$attributes2.slashSize,
        slashV = _props$attributes2.slashV,
        currPrice = _props$attributes2.currPrice,
        currColor = _props$attributes2.currColor,
        currSize = _props$attributes2.currSize,
        currV = _props$attributes2.currV,
        valPrice = _props$attributes2.valPrice,
        valColor = _props$attributes2.valColor,
        valSize = _props$attributes2.valSize,
        valV = _props$attributes2.valV,
        divPrice = _props$attributes2.divPrice,
        divColor = _props$attributes2.divColor,
        divSize = _props$attributes2.divSize,
        divV = _props$attributes2.divV,
        durPrice = _props$attributes2.durPrice,
        durColor = _props$attributes2.durColor,
        durSize = _props$attributes2.durSize,
        durV = _props$attributes2.durV,
        btnChecked = _props$attributes2.btnChecked,
        btnText = _props$attributes2.btnText,
        btnLink = _props$attributes2.btnLink,
        btnTarget = _props$attributes2.btnTarget,
        btnColor = _props$attributes2.btnColor,
        btnSize = _props$attributes2.btnSize,
        btnWeight = _props$attributes2.btnWeight,
        btnBack = _props$attributes2.btnBack,
        btnMarginT = _props$attributes2.btnMarginT,
        btnMarginB = _props$attributes2.btnMarginB,
        btnPadding = _props$attributes2.btnPadding,
        btnWidth = _props$attributes2.btnWidth,
        btnBorderType = _props$attributes2.btnBorderType,
        btnBorderWidth = _props$attributes2.btnBorderWidth,
        btnBorderRadius = _props$attributes2.btnBorderRadius,
        btnBorderColor = _props$attributes2.btnBorderColor,
        badgeChecked = _props$attributes2.badgeChecked,
        badgePos = _props$attributes2.badgePos,
        badgeBack = _props$attributes2.badgeBack,
        badgeSize = _props$attributes2.badgeSize,
        badgeText = _props$attributes2.badgeText,
        listChecked = _props$attributes2.listChecked,
        listColor = _props$attributes2.listColor,
        listWeight = _props$attributes2.listWeight,
        listSize = _props$attributes2.listSize,
        listBack = _props$attributes2.listBack,
        listItems = _props$attributes2.listItems,
        listMarginB = _props$attributes2.listMarginB,
        listMarginT = _props$attributes2.listMarginT,
        listPadding = _props$attributes2.listPadding,
        listStyle = _props$attributes2.listStyle;


    return wp.element.createElement(
      "div",
      {
        className: "" + blockClass,
        style: {
          textAlign: contentAlign,
          background: tableBack,
          border: borderType,
          borderWidth: borderWidth + "px",
          borderRadius: borderRadius + "px",
          borderColor: borderColor,
          padding: tablePadding + "px"
        }
      },
      badgeChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__badge_wrap " + blockClass + "__badge_" + badgePos
        },
        wp.element.createElement(
          "div",
          {
            className: blockClass + "__badge",
            style: {
              borderRightColor: "right" === badgePos ? badgeBack : "transparent",
              borderTopColor: "left" === badgePos ? badgeBack : "transparent",
              borderBottomWidth: badgeSize + "px",
              borderRightWidth: badgeSize + "px",
              borderTopWidth: "left" === badgePos ? badgeSize + "px" : "none",
              borderLeftWidth: "right" === badgePos ? badgeSize + "px" : "none"
            }
          },
          wp.element.createElement(
            "span",
            null,
            badgeText
          )
        )
      ),
      titleChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__title_wrap",
          style: {
            paddingTop: titleMarginT + "px",
            paddingBottom: titleMarginB + "px"
          }
        },
        wp.element.createElement(RichText.Content, {
          tagName: titleTag.toLowerCase(),
          className: blockClass + "__title",
          value: title,
          style: {
            color: titleColor,
            background: titleBack,
            fontSize: titleSize + "px",
            fontWeight: titleWeight,
            lineHeight: titleLine + "px",
            marginBottom: titleMarginB + "px",
            padding: titlePadding + "px"
          }
        })
      ),
      priceChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__price_wrap",
          style: {
            background: priceBack,
            marginTop: priceMarginT + "px",
            marginBottom: priceMarginB + "px",
            padding: pricePadding + "px",
            justifyContent: contentAlign
          }
        },
        "" !== slashPrice && wp.element.createElement(
          "strike",
          {
            className: blockClass + "__slash",
            style: {
              color: slashColor,
              fontSize: slashSize + "px",
              alignSelf: slashV
            }
          },
          slashPrice
        ),
        "" !== currPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__currency",
            style: {
              color: currColor,
              fontSize: currSize + "px",
              alignSelf: currV
            }
          },
          currPrice
        ),
        "" !== valPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__val",
            style: {
              color: valColor,
              fontSize: valSize + "px",
              alignSelf: valV
            }
          },
          valPrice
        ),
        "" !== divPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__divider",
            style: {
              color: divColor,
              fontSize: divSize + "px",
              alignSelf: divV
            }
          },
          divPrice
        ),
        "" !== durPrice && wp.element.createElement(
          "span",
          {
            className: blockClass + "__dur",
            style: {
              color: durColor,
              fontSize: durSize + "px",
              alignSelf: durV
            }
          },
          durPrice
        )
      ),
      listChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__list_wrap",
          style: {
            marginTop: listMarginT + "px",
            marginBottom: listMarginB + "px"
          }
        },
        wp.element.createElement(
          "ul",
          {
            className: blockClass + "__list",
            style: {
              color: listColor,
              fontSize: listSize + "px",
              background: listBack,
              padding: listPadding + "px",
              listStyle: listStyle,
              listStylePosition: "inside",
              fontWeight: listWeight
            }
          },
          listItems
        )
      ),
      descChecked && wp.element.createElement(
        "div",
        { className: blockClass + "__desc_wrap" },
        wp.element.createElement(RichText.Content, {
          tagName: "p",
          className: blockClass + "__desc",
          value: desc,
          style: {
            color: descColor,
            background: descBack,
            fontSize: descSize + "px",
            fontWeight: descWeight,
            lineHeight: descLine + "px",
            marginTop: descMarginT + "px",
            marginBottom: descMarginB + "px",
            padding: descPadding + "px"
          }
        })
      ),
      btnChecked && wp.element.createElement(
        "div",
        {
          className: blockClass + "__button",
          style: {
            width: btnWidth + "%"
          }
        },
        wp.element.createElement(
          "a",
          {
            "class": blockClass + "__button_link",
            href: btnLink,
            target: btnTarget ? "_target" : "",
            style: {
              color: btnColor,
              background: btnBack,
              fontWeight: btnWeight,
              marginTop: btnMarginT,
              marginBottom: btnMarginB,
              padding: btnPadding,
              fontSize: btnSize + "px",
              border: btnBorderType,
              borderWidth: btnBorderWidth + "px",
              borderRadius: btnBorderRadius + "px",
              borderColor: btnBorderColor
            }
          },
          wp.element.createElement(
            "span",
            null,
            btnText
          )
        )
      )
    );
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var className = "premium-maps";

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelColor = _wp$components.PanelColor,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    ColorPalette = _wp$editor.ColorPalette,
    URLInput = _wp$editor.URLInput;
var Component = wp.element.Component;


var isMapUpdated = null;

var PremiumMap = function (_Component) {
  _inherits(PremiumMap, _Component);

  function PremiumMap() {
    _classCallCheck(this, PremiumMap);

    var _this = _possibleConstructorReturn(this, (PremiumMap.__proto__ || Object.getPrototypeOf(PremiumMap)).apply(this, arguments));

    _this.state = {
      thisAddress: "",
      thisMap: null,
      thisMarker: null,
      thisInfo: null,
      fetching: false
    };

    _this.initMap = _this.initMap.bind(_this);
    return _this;
  }

  _createClass(PremiumMap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          attributes = _props.attributes,
          setAttributes = _props.setAttributes,
          clientId = _props.clientId;


      if (!attributes.mapID) {
        setAttributes({ mapID: "premium-map-" + clientId });
      }
      this.initMap();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      //if (prevProps.attributes !== this.props.attributes) {
      clearTimeout(isMapUpdated);
      isMapUpdated = setTimeout(this.initMap, 500);
      //}
    }
  }, {
    key: "initMap",
    value: function initMap() {
      if (typeof google === "undefined" || !this.props.attributes.mapID) return null;

      var _state = this.state,
          thisMap = _state.thisMap,
          thisMarker = _state.thisMarker,
          thisInfo = _state.thisInfo;
      var _props$attributes = this.props.attributes,
          mapID = _props$attributes.mapID,
          mapStyle = _props$attributes.mapStyle,
          mapType = _props$attributes.mapType,
          zoom = _props$attributes.zoom,
          mapTypeControl = _props$attributes.mapTypeControl,
          zoomControl = _props$attributes.zoomControl,
          fullscreenControl = _props$attributes.fullscreenControl,
          streetViewControl = _props$attributes.streetViewControl,
          scrollwheel = _props$attributes.scrollwheel,
          centerLng = _props$attributes.centerLng,
          centerLat = _props$attributes.centerLat,
          markerTitle = _props$attributes.markerTitle,
          markerDesc = _props$attributes.markerDesc,
          mapMarker = _props$attributes.mapMarker,
          markerIconUrl = _props$attributes.markerIconUrl,
          markerCustom = _props$attributes.markerCustom,
          maxWidth = _props$attributes.maxWidth,
          boxAlign = _props$attributes.boxAlign,
          boxPadding = _props$attributes.boxPadding,
          titleColor = _props$attributes.titleColor,
          titleSize = _props$attributes.titleSize,
          descColor = _props$attributes.descColor,
          descSize = _props$attributes.descSize,
          gapBetween = _props$attributes.gapBetween;


      var map = thisMap;
      var infoWindow = thisInfo;
      var latlng = new google.maps.LatLng(parseFloat(centerLat), parseFloat(centerLng));

      if (!map) {
        var mapElem = document.getElementById(mapID);

        map = new google.maps.Map(mapElem, {
          zoom: zoom,
          gestureHandling: "cooperative",
          mapTypeId: mapType,
          mapTypeControl: mapTypeControl,
          zoomControl: zoomControl,
          fullscreenControl: fullscreenControl,
          streetViewControl: streetViewControl,
          scrollwheel: scrollwheel,
          center: latlng,
          styles: JSON.parse(mapStyle)
        });
        this.setState({ thisMap: map });
      }

      map.setOptions({
        zoom: zoom,
        mapTypeId: mapType,
        mapTypeControl: mapTypeControl,
        zoomControl: zoomControl,
        fullscreenControl: fullscreenControl,
        streetViewControl: streetViewControl,
        styles: JSON.parse(mapStyle)
      });

      if (!infoWindow && mapMarker && "" !== markerTitle && "" !== markerDesc) {
        infoWindow = new google.maps.InfoWindow({
          maxWidth: maxWidth
        });
        this.setState({ thisInfo: infoWindow });
      }

      if (mapMarker && "" !== markerTitle && "" !== markerDesc) {
        infoWindow.setContent("<div class=\"" + className + "__info\" style=\"text-align:" + boxAlign + ";padding:" + boxPadding + "px\"\n            >\n            <h3\n                class=\"" + className + "__title\"\n                style=\"color:" + titleColor + ";font-size:" + titleSize + "px;margin-bottom:" + gapBetween + "px\"\n            >\n                " + markerTitle + "\n            </h3>\n            <div\n                class=\"" + className + "__desc\"\n                style=\"color: " + descColor + ";font-size: " + descSize + "px\"\n            >\n                " + markerDesc + "\n            </div>\n        </div>");
      }

      map.setCenter(latlng);

      if (mapMarker) {
        var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          icon: markerCustom ? markerIconUrl : ""
        });

        google.maps.event.addListener(marker, "click", function () {
          infoWindow.open(map, marker);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          isSelected = _props2.isSelected,
          setAttributes = _props2.setAttributes,
          clientId = _props2.clientId;
      var _props$attributes2 = this.props.attributes,
          mapID = _props$attributes2.mapID,
          mapStyle = _props$attributes2.mapStyle,
          mapType = _props$attributes2.mapType,
          height = _props$attributes2.height,
          zoom = _props$attributes2.zoom,
          mapTypeControl = _props$attributes2.mapTypeControl,
          zoomControl = _props$attributes2.zoomControl,
          fullscreenControl = _props$attributes2.fullscreenControl,
          streetViewControl = _props$attributes2.streetViewControl,
          scrollwheel = _props$attributes2.scrollwheel,
          centerLng = _props$attributes2.centerLng,
          centerLat = _props$attributes2.centerLat,
          markerDesc = _props$attributes2.markerDesc,
          markerTitle = _props$attributes2.markerTitle,
          mapMarker = _props$attributes2.mapMarker,
          markerIconUrl = _props$attributes2.markerIconUrl,
          markerIconId = _props$attributes2.markerIconId,
          markerCustom = _props$attributes2.markerCustom,
          maxWidth = _props$attributes2.maxWidth,
          titleColor = _props$attributes2.titleColor,
          titleSize = _props$attributes2.titleSize,
          descColor = _props$attributes2.descColor,
          descSize = _props$attributes2.descSize,
          boxAlign = _props$attributes2.boxAlign,
          boxPadding = _props$attributes2.boxPadding,
          gapBetween = _props$attributes2.gapBetween;


      var TYPES = [{
        value: "roadmap",
        label: "Road Map"
      }, {
        value: "satellite",
        label: "Satellite"
      }, {
        value: "terrain",
        label: "Terrain"
      }, {
        value: "hybrid",
        label: "Hybrid"
      }];

      var ALIGNS = ["left", "center", "right"];
      return [typeof google !== "undefined" && isSelected && wp.element.createElement(
        InspectorControls,
        { key: "key" },
        wp.element.createElement(
          PanelBody,
          { title: __("Center Location"), initialOpen: false },
          wp.element.createElement(TextControl, {
            label: __("Longitude"),
            value: centerLng,
            help: [__("Get your location coordinates from"), wp.element.createElement(
              "a",
              { href: "https://www.latlong.net/", target: "_blank" },
              "\xA0",
              __("here")
            )],
            onChange: function onChange(newLng) {
              return setAttributes({ centerLng: newLng });
            }
          }),
          wp.element.createElement(TextControl, {
            label: __("Latitude"),
            value: centerLat,
            onChange: function onChange(newLat) {
              return setAttributes({ centerLat: newLat });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Marker"), initialOpen: false },
          wp.element.createElement(CheckboxControl, {
            label: __("Enable Marker"),
            checked: mapMarker,
            onChange: function onChange(check) {
              return setAttributes({ mapMarker: check });
            }
          }),
          mapMarker && wp.element.createElement(TextControl, {
            label: __("Marker Title"),
            value: markerTitle,
            onChange: function onChange(newText) {
              return setAttributes({ markerTitle: newText });
            }
          }),
          mapMarker && wp.element.createElement(TextareaControl, {
            label: __("Marker Description"),
            value: markerDesc,
            onChange: function onChange(newText) {
              return setAttributes({ markerDesc: newText });
            }
          }),
          mapMarker && wp.element.createElement(RangeControl, {
            label: __("Spacing (PX)"),
            value: gapBetween,
            min: "10",
            max: "80",
            onChange: function onChange(newSize) {
              return setAttributes({ gapBetween: newSize });
            }
          }),
          mapMarker && wp.element.createElement(Toolbar, {
            controls: ALIGNS.map(function (align) {
              return {
                icon: "editor-align" + align,
                isActive: align === boxAlign,
                onClick: function onClick() {
                  return setAttributes({ boxAlign: align });
                }
              };
            })
          }),
          mapMarker && wp.element.createElement(CheckboxControl, {
            label: __("Custom Marker Icon"),
            checked: markerCustom,
            onChange: function onChange(check) {
              return setAttributes({ markerCustom: check });
            }
          }),
          mapMarker && markerCustom && markerIconUrl && wp.element.createElement("img", { src: markerIconUrl, width: "100%", height: "auto" }),
          markerCustom && mapMarker && wp.element.createElement(MediaUpload, {
            allowedTypes: ["image"],
            onSelect: function onSelect(media) {
              setAttributes({
                markerIconId: media.id,
                markerIconUrl: "undefined" === typeof media.sizes.thumbnail ? media.url : media.sizes.thumbnail.url
              });
            },
            type: "image",
            value: markerIconId,
            render: function render(_ref) {
              var open = _ref.open;
              return wp.element.createElement(
                IconButton,
                {
                  label: __("Change Marker Icon"),
                  icon: "edit",
                  onClick: open
                },
                __("Change Marker Icon")
              );
            }
          }),
          mapMarker && wp.element.createElement(RangeControl, {
            label: __("Description Box Max Width (PX)"),
            value: maxWidth,
            min: "10",
            max: "500",
            onChange: function onChange(newSize) {
              return setAttributes({ maxWidth: newSize });
            }
          }),
          mapMarker && wp.element.createElement(RangeControl, {
            label: __("Description Box Padding (PX)"),
            value: boxPadding,
            min: "1",
            max: "50",
            onChange: function onChange(newSize) {
              return setAttributes({ boxPadding: newSize });
            }
          })
        ),
        mapMarker && "" !== markerTitle && wp.element.createElement(
          PanelBody,
          { title: __("Marker Title Style"), initialOpen: false },
          wp.element.createElement(
            PanelColor,
            { title: __("Color"), colorValue: titleColor },
            wp.element.createElement(ColorPalette, {
              value: titleColor,
              onChange: function onChange(newColor) {
                return setAttributes({ titleColor: newColor });
              }
            })
          ),
          wp.element.createElement(RangeControl, {
            label: __("Font Size (PX)"),
            value: titleSize,
            min: "10",
            max: "80",
            onChange: function onChange(newSize) {
              return setAttributes({ titleSize: newSize });
            }
          })
        ),
        mapMarker && "" !== markerDesc && wp.element.createElement(
          PanelBody,
          {
            title: __("Marker Description Style"),
            initialOpen: false
          },
          wp.element.createElement(
            PanelColor,
            { title: __("Color"), colorValue: descColor },
            wp.element.createElement(ColorPalette, {
              value: descColor,
              onChange: function onChange(newColor) {
                return setAttributes({ descColor: newColor });
              }
            })
          ),
          wp.element.createElement(RangeControl, {
            label: __("Font Size (PX)"),
            value: descSize,
            min: "10",
            max: "80",
            onChange: function onChange(newSize) {
              return setAttributes({ descSize: newSize });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Controls"), initialOpen: false },
          wp.element.createElement(SelectControl, {
            label: __("Map Type"),
            options: TYPES,
            value: mapType,
            onChange: function onChange(newType) {
              return setAttributes({ mapType: newType });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Map Height (PX)"),
            value: height,
            min: "10",
            max: "800",
            onChange: function onChange(newSize) {
              return setAttributes({ height: newSize });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Zoom"),
            value: zoom,
            min: "1",
            max: "14",
            onChange: function onChange(newSize) {
              return setAttributes({ zoom: newSize });
            }
          }),
          wp.element.createElement(CheckboxControl, {
            label: __("Map Type Controls"),
            checked: mapTypeControl,
            onChange: function onChange(check) {
              return setAttributes({ mapTypeControl: check });
            }
          }),
          wp.element.createElement(CheckboxControl, {
            label: __("Zoom Controls"),
            checked: zoomControl,
            onChange: function onChange(check) {
              return setAttributes({ zoomControl: check });
            }
          }),
          wp.element.createElement(CheckboxControl, {
            label: __("Street View Control"),
            checked: streetViewControl,
            onChange: function onChange(check) {
              return setAttributes({ streetViewControl: check });
            }
          }),
          wp.element.createElement(CheckboxControl, {
            label: __("Full Screen Control"),
            checked: fullscreenControl,
            onChange: function onChange(check) {
              return setAttributes({ fullscreenControl: check });
            }
          }),
          wp.element.createElement(CheckboxControl, {
            label: __("Scroll Wheel Zoom"),
            checked: scrollwheel,
            onChange: function onChange(check) {
              return setAttributes({ scrollwheel: check });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Map Style"), initialOpen: false },
          wp.element.createElement(TextareaControl, {
            label: __("Maps Style"),
            value: mapStyle,
            help: [__("Get your custom styling from"), wp.element.createElement(
              "a",
              { href: "https://snazzymaps.com/", target: "_blank" },
              "\xA0",
              __("here")
            )],
            onChange: function onChange(newStyle) {
              return setAttributes({ mapStyle: "" !== newStyle ? newStyle : "[]" });
            }
          })
        )
      ), wp.element.createElement("div", {
        className: className + "__wrap",
        id: mapID,
        style: {
          height: height + "px"
        }
      })];
    }
  }]);

  return PremiumMap;
}(Component);

registerBlockType("premium/maps", {
  title: __("Premium Maps"),
  icon: "location",
  category: "premium-blocks",
  attributes: {
    mapID: {
      type: "string"
    },
    mapStyle: {
      type: "string",
      default: "[]"
    },
    mapType: {
      type: "string",
      default: "roadmap"
    },
    height: {
      type: "number",
      default: 500
    },
    zoom: {
      type: "number",
      default: 6
    },
    mapTypeControl: {
      type: "boolean",
      default: true
    },
    zoomControl: {
      type: "boolean",
      default: true
    },
    fullscreenControl: {
      type: "boolean",
      default: true
    },
    streetViewControl: {
      type: "boolean",
      default: false
    },
    scrollwheel: {
      type: "boolean",
      default: false
    },
    centerLat: {
      type: "number",
      default: "40.7569733"
    },
    centerLng: {
      type: "string",
      default: " -73.98878250000001"
    },
    markerTitle: {
      type: "string",
      default: __("Awesome Title")
    },
    markerDesc: {
      type: "string",
      default: __("Cool Description")
    },
    mapMarker: {
      type: "boolean",
      default: true
    },
    markerIconUrl: {
      type: "string"
    },
    markerIconId: {
      type: "number",
      default: ""
    },
    markerCustom: {
      type: "boolean",
      default: false
    },
    maxWidth: {
      type: "number",
      default: 300
    },
    titleColor: {
      type: "string",
      default: "#6ec1e4"
    },
    titleSize: {
      type: "number",
      default: 20
    },
    descColor: {
      type: "string",
      default: "#000"
    },
    descSize: {
      type: "number",
      default: 16
    },
    boxAlign: {
      type: "string",
      default: "center"
    },
    boxPadding: {
      type: "number",
      default: "0"
    },
    gapBetween: {
      type: "number",
      default: 5
    }
  },
  edit: PremiumMap,
  save: function save(props) {
    var _props$attributes3 = props.attributes,
        mapID = _props$attributes3.mapID,
        height = _props$attributes3.height,
        mapStyle = _props$attributes3.mapStyle,
        mapType = _props$attributes3.mapType,
        zoom = _props$attributes3.zoom,
        mapTypeControl = _props$attributes3.mapTypeControl,
        zoomControl = _props$attributes3.zoomControl,
        fullscreenControl = _props$attributes3.fullscreenControl,
        streetViewControl = _props$attributes3.streetViewControl,
        scrollwheel = _props$attributes3.scrollwheel,
        centerLat = _props$attributes3.centerLat,
        centerLng = _props$attributes3.centerLng,
        mapMarker = _props$attributes3.mapMarker,
        markerIconUrl = _props$attributes3.markerIconUrl,
        markerCustom = _props$attributes3.markerCustom,
        maxWidth = _props$attributes3.maxWidth,
        markerTitle = _props$attributes3.markerTitle,
        markerDesc = _props$attributes3.markerDesc,
        titleColor = _props$attributes3.titleColor,
        titleSize = _props$attributes3.titleSize,
        descColor = _props$attributes3.descColor,
        descSize = _props$attributes3.descSize,
        boxAlign = _props$attributes3.boxAlign,
        boxPadding = _props$attributes3.boxPadding,
        gapBetween = _props$attributes3.gapBetween;


    return wp.element.createElement(
      "div",
      {
        className: className + "__wrap",
        id: mapID,
        style: {
          height: height + "px"
        }
      },
      wp.element.createElement(
        "div",
        { className: className + "__marker" },
        wp.element.createElement(
          "div",
          {
            className: className + "__info",
            style: {
              textAlign: boxAlign,
              padding: boxPadding + "px"
            }
          },
          "" !== markerTitle && wp.element.createElement(
            "h3",
            {
              className: className + "__title",
              style: {
                color: titleColor,
                fontSize: titleSize + "px",
                marginBottom: gapBetween + "px"
              }
            },
            markerTitle
          ),
          "" !== markerDesc && wp.element.createElement(
            "div",
            {
              className: className + "__desc",
              style: {
                color: descColor,
                fontSize: descSize + "px"
              }
            },
            markerDesc
          )
        )
      ),
      wp.element.createElement(
        "script",
        null,
        "window.addEventListener('load',function(){\n                    if( typeof google === 'undefined' ) return;\n                    let mapElem = document.getElementById('" + mapID + "');\n                    let pin = mapElem.querySelector('." + className + "__marker');\n                    \n                    let latlng = new google.maps.LatLng( parseFloat( " + centerLat + " ) , parseFloat( " + centerLng + " ) );\n                    let map = new google.maps.Map(mapElem, {\n                        zoom: " + zoom + ",\n                        gestureHandling: 'cooperative',\n                        mapTypeId: '" + mapType + "',\n                        mapTypeControl: " + mapTypeControl + ",\n                        zoomControl: " + zoomControl + ",\n                        fullscreenControl: " + fullscreenControl + ",\n                        streetViewControl: " + streetViewControl + ",\n                        scrollwheel: " + scrollwheel + ",\n                        center: latlng,\n                        styles: " + mapStyle + "\n                    });\n                    if( " + mapMarker + " ) {\n                        let markerIcon = '" + markerIconUrl + "';\n                        let marker = new google.maps.Marker({\n                            position\t: latlng,\n                            map\t\t\t: map,\n                            icon        : " + markerCustom + " ? markerIcon : ''\n                        });\n                        \n                        let infowindow = new google.maps.InfoWindow({\n                            maxWidth    : " + maxWidth + ",\n                            content\t\t: pin.innerHTML\n                        });\n                        \n                        google.maps.event.addListener(marker, 'click', function() {\n                            infowindow.open( map, marker );\n                        });\n                    }\n                    \n                });"
      )
    );
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_image__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_testimonials_upper_quote__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_testimonials_lower_quote__ = __webpack_require__(8);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var className = "premium-testimonial";

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar,
    PanelBody = _wp$components.PanelBody,
    PanelColor = _wp$components.PanelColor,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PanelColorSettings = _wp$editor.PanelColorSettings;


registerBlockType("premium/testimonial", {
  title: __("Premium Testimonial"),
  icon: "format-quote",
  category: "premium-blocks",
  attributes: {
    align: {
      type: "string",
      default: "center"
    },
    authorImgId: {
      type: "string"
    },
    authorImgUrl: {
      type: "string"
    },
    imgRadius: {
      type: "string",
      default: "50%"
    },
    imgSize: {
      type: "number"
    },
    imgBorder: {
      type: "number",
      default: "1"
    },
    imgBorderColor: {
      type: "string"
    },
    author: {
      type: "array",
      source: "children",
      selector: ".premium-testimonial__author",
      default: "John Doe"
    },
    authorTag: {
      type: "string",
      default: "H3"
    },
    authorColor: {
      type: "string"
    },
    authorSize: {
      type: "number"
    },
    authorComTag: {
      type: "string",
      default: "H4"
    },
    text: {
      source: "array",
      selector: ".premium-testimonial__text"
    },
    authorCom: {
      type: "array",
      source: "children",
      selector: ".premium-testimonial__author_comp",
      default: "Leap13"
    },
    authorComColor: {
      type: "string"
    },
    authorComSize: {
      type: "number"
    },
    urlCheck: {
      type: "boolean",
      default: false
    },
    urlText: {
      type: "string"
    },
    urlTarget: {
      type: "boolean",
      default: false
    },
    quotSize: {
      type: "number"
    },
    quotColor: {
      type: "string",
      default: "rgba(110,193,228,0.2)"
    },
    quotOpacity: {
      type: "number"
    },
    bodyColor: {
      type: "string"
    },
    bodySize: {
      type: "number"
    },
    bodyLine: {
      type: "number"
    },
    bodyTop: {
      type: "number"
    },
    bodyBottom: {
      type: "number"
    },
    dashColor: {
      type: "string"
    }
  },

  edit: function edit(props) {
    var isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    var _props$attributes = props.attributes,
        align = _props$attributes.align,
        authorImgId = _props$attributes.authorImgId,
        authorImgUrl = _props$attributes.authorImgUrl,
        imgRadius = _props$attributes.imgRadius,
        imgSize = _props$attributes.imgSize,
        imgBorder = _props$attributes.imgBorder,
        imgBorderColor = _props$attributes.imgBorderColor,
        text = _props$attributes.text,
        authorTag = _props$attributes.authorTag,
        authorColor = _props$attributes.authorColor,
        authorSize = _props$attributes.authorSize,
        author = _props$attributes.author,
        authorComTag = _props$attributes.authorComTag,
        authorCom = _props$attributes.authorCom,
        authorComColor = _props$attributes.authorComColor,
        authorComSize = _props$attributes.authorComSize,
        urlCheck = _props$attributes.urlCheck,
        urlText = _props$attributes.urlText,
        urlTarget = _props$attributes.urlTarget,
        quotSize = _props$attributes.quotSize,
        quotColor = _props$attributes.quotColor,
        quotOpacity = _props$attributes.quotOpacity,
        bodyColor = _props$attributes.bodyColor,
        bodySize = _props$attributes.bodySize,
        bodyLine = _props$attributes.bodyLine,
        bodyTop = _props$attributes.bodyTop,
        bodyBottom = _props$attributes.bodyBottom,
        dashColor = _props$attributes.dashColor;

    var ALIGNS = [{
      value: "left",
      label: "Left"
    }, {
      value: "center",
      label: "Center"
    }, {
      value: "right",
      label: "Right"
    }];
    var RADIUS = [{
      value: "0",
      label: "Square"
    }, {
      value: "50%",
      label: "Circle"
    }, {
      value: "15px",
      label: "Rounded"
    }];

    return [isSelected && wp.element.createElement(
      BlockControls,
      { key: "controls" },
      wp.element.createElement(AlignmentToolbar, {
        value: align,
        onChange: function onChange(newAlign) {
          return setAttributes({ align: newAlign });
        }
      })
    ), isSelected && wp.element.createElement(
      InspectorControls,
      { key: "inspector" },
      wp.element.createElement(
        PanelBody,
        { title: __("Author"), initialOpen: true },
        wp.element.createElement(
          "p",
          null,
          __("Author Image")
        ),
        authorImgUrl && wp.element.createElement("img", { src: authorImgUrl, width: "100%", height: "auto" }),
        !authorImgUrl && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_default_image__["a" /* default */], null),
        wp.element.createElement(MediaUpload, {
          allowedTypes: ["image"],
          onSelect: function onSelect(media) {
            setAttributes({
              authorImgId: media.id,
              authorImgUrl: "undefined" === typeof media.sizes.thumbnail ? media.url : media.sizes.thumbnail.url
            });
          },
          type: "image",
          value: authorImgId,
          render: function render(_ref) {
            var open = _ref.open;
            return wp.element.createElement(
              IconButton,
              {
                label: __("Change Author Image"),
                icon: "edit",
                onClick: open
              },
              __("Change Author Image")
            );
          }
        }),
        authorImgUrl && wp.element.createElement(SelectControl, {
          label: __("Image Style"),
          options: RADIUS,
          value: imgRadius,
          onChange: function onChange(newWeight) {
            return setAttributes({ imgRadius: newWeight });
          }
        }),
        authorImgUrl && wp.element.createElement(RangeControl, {
          label: __("Size"),
          max: "200",
          value: imgSize,
          onChange: function onChange(newSize) {
            return setAttributes({ imgSize: newSize });
          }
        }),
        authorImgUrl && wp.element.createElement(RangeControl, {
          label: __("Border Width (PX)"),
          value: imgBorder,
          onChange: function onChange(newSize) {
            return setAttributes({ imgBorder: newSize });
          }
        }),
        authorImgUrl && wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: imgBorderColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ imgBorderColor: colorValue });
            },
            label: __("Border Color")
          }]
        }),
        wp.element.createElement(
          "p",
          null,
          __("Author HTML Tag")
        ),
        wp.element.createElement(Toolbar, {
          controls: "123456".split("").map(function (tag) {
            return {
              icon: "heading",
              isActive: "H" + tag === authorTag,
              onClick: function onClick() {
                return setAttributes({ authorTag: "H" + tag });
              },
              subscript: tag
            };
          })
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: authorColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ authorColor: colorValue });
            },
            label: __("Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: authorSize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ authorSize: newSize });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Content"), initialOpen: false },
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: bodyColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ bodyColor: colorValue });
            },
            label: __("Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX)"),
          value: bodySize,
          min: "10",
          max: "80",
          onChange: function onChange(newSize) {
            return setAttributes({ bodySize: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Line Height (PX)"),
          value: bodyLine,
          min: "10",
          max: "50",
          onChange: function onChange(newSize) {
            return setAttributes({ bodyLine: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Top (PX)"),
          value: bodyTop,
          onChange: function onChange(newSize) {
            return setAttributes({ bodyTop: newSize });
          }
        }),
        wp.element.createElement(RangeControl, {
          label: __("Margin Bottom (PX)"),
          value: bodyBottom,
          onChange: function onChange(newSize) {
            return setAttributes({ bodyBottom: newSize });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Company"), initialOpen: false },
        wp.element.createElement(
          "p",
          null,
          __("HTML Tag")
        ),
        wp.element.createElement(Toolbar, {
          controls: "123456".split("").map(function (tag) {
            return {
              icon: "heading",
              isActive: "H" + tag === authorComTag,
              onClick: function onClick() {
                return setAttributes({ authorComTag: "H" + tag });
              },
              subscript: tag
            };
          })
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: authorComColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ authorComColor: colorValue });
            },
            label: __("Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Font Size (PX"),
          value: authorComSize,
          onChange: function onChange(newSize) {
            return setAttributes({ authorComSize: newSize });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: dashColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ dashColor: colorValue });
            },
            label: __("Dash Color")
          }]
        }),
        wp.element.createElement(CheckboxControl, {
          label: __("URL"),
          checked: urlCheck,
          onChange: function onChange(newCheck) {
            return setAttributes({ urlCheck: newCheck });
          }
        }),
        urlCheck && wp.element.createElement(TextControl, {
          label: __("URL"),
          value: urlText,
          onChange: function onChange(newURL) {
            return setAttributes({ urlText: newURL });
          }
        }),
        urlCheck && wp.element.createElement(CheckboxControl, {
          label: __("Open Link in a New Tab"),
          checked: urlTarget,
          onChange: function onChange(newCheck) {
            return setAttributes({ urlTarget: newCheck });
          }
        })
      ),
      wp.element.createElement(
        PanelBody,
        { title: __("Quotations"), initialOpen: false },
        wp.element.createElement(RangeControl, {
          label: __("Size (EM)"),
          value: quotSize,
          min: "1",
          max: "12",
          onChange: function onChange(newSize) {
            return setAttributes({ quotSize: newSize });
          }
        }),
        wp.element.createElement(PanelColorSettings, {
          colorSettings: [{
            value: quotColor,
            onChange: function onChange(colorValue) {
              return setAttributes({ quotColor: colorValue });
            },
            label: __("Color")
          }]
        }),
        wp.element.createElement(RangeControl, {
          label: __("Opacity"),
          min: "0",
          max: "100",
          value: quotOpacity,
          onChange: function onChange(newValue) {
            return setAttributes({ quotOpacity: newValue });
          }
        })
      )
    ), wp.element.createElement(
      "div",
      { className: className + "__wrap" },
      wp.element.createElement(
        "div",
        { className: className + "__container" },
        wp.element.createElement(
          "span",
          { className: className + "__upper" },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_testimonials_upper_quote__["a" /* default */], {
            size: quotSize,
            color: quotColor,
            opacity: quotOpacity
          })
        ),
        wp.element.createElement(
          "div",
          {
            className: className + "__content",
            style: {
              textAlign: align
            }
          },
          wp.element.createElement(
            "div",
            { className: className + "__img_wrap" },
            authorImgUrl && wp.element.createElement("img", {
              className: className + "__img",
              src: "" + authorImgUrl,
              alt: "Author",
              style: {
                borderWidth: imgBorder + "px",
                borderRadius: imgRadius,
                borderColor: imgBorderColor,
                width: imgSize + "px",
                height: imgSize + "px"
              }
            }),
            !authorImgUrl && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_default_image__["a" /* default */], { className: className })
          ),
          wp.element.createElement(
            "div",
            { className: className + "__text_wrap" },
            wp.element.createElement(
              "div",
              null,
              wp.element.createElement(RichText, {
                tagName: "p",
                className: className + "__text",
                onChange: function onChange(newText) {
                  return setAttributes({ text: newText });
                },
                value: text,
                isSelected: false,
                placeholder: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
                style: {
                  color: bodyColor,
                  fontSize: bodySize + "px",
                  lineHeight: bodyLine + "px",
                  marginTop: bodyTop + "px",
                  marginBottom: bodyBottom + "px"
                },
                keepPlaceholderOnFocus: true
              })
            )
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__info",
              style: { justifyContent: align }
            },
            wp.element.createElement(RichText, _defineProperty({
              tagName: authorTag.toLowerCase(),
              className: className + "__author",
              onChange: function onChange(newText) {
                return setAttributes({ author: newText });
              },
              value: author,
              isSelected: false,
              style: {
                color: authorColor,
                fontSize: authorSize + "px"
              }
            }, "isSelected", false)),
            wp.element.createElement(
              "span",
              {
                className: className + "__sep",
                style: {
                  color: dashColor
                }
              },
              "\xA0-\xA0"
            ),
            wp.element.createElement(RichText, {
              tagName: authorComTag.toLowerCase(),
              className: className + "__author_comp",
              onChange: function onChange(newText) {
                return setAttributes({ authorCom: newText });
              },
              value: authorCom,
              isSelected: false,
              style: {
                color: authorComColor,
                fontSize: authorComSize + "px"
              }
            })
          )
        ),
        wp.element.createElement(
          "span",
          { className: className + "__lower" },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_testimonials_lower_quote__["a" /* default */], {
            size: quotSize,
            color: quotColor,
            opacity: quotOpacity
          })
        )
      )
    )];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        align = _props$attributes2.align,
        authorImgUrl = _props$attributes2.authorImgUrl,
        imgRadius = _props$attributes2.imgRadius,
        imgBorder = _props$attributes2.imgBorder,
        imgBorderColor = _props$attributes2.imgBorderColor,
        imgSize = _props$attributes2.imgSize,
        text = _props$attributes2.text,
        authorTag = _props$attributes2.authorTag,
        authorColor = _props$attributes2.authorColor,
        authorSize = _props$attributes2.authorSize,
        author = _props$attributes2.author,
        authorComTag = _props$attributes2.authorComTag,
        authorComColor = _props$attributes2.authorComColor,
        authorComSize = _props$attributes2.authorComSize,
        authorCom = _props$attributes2.authorCom,
        quotSize = _props$attributes2.quotSize,
        quotColor = _props$attributes2.quotColor,
        quotOpacity = _props$attributes2.quotOpacity,
        bodyColor = _props$attributes2.bodyColor,
        bodySize = _props$attributes2.bodySize,
        bodyLine = _props$attributes2.bodyLine,
        bodyTop = _props$attributes2.bodyTop,
        bodyBottom = _props$attributes2.bodyBottom,
        dashColor = _props$attributes2.dashColor,
        urlCheck = _props$attributes2.urlCheck,
        urlText = _props$attributes2.urlText,
        urlTarget = _props$attributes2.urlTarget;


    return wp.element.createElement(
      "div",
      { className: className + "__wrap" },
      wp.element.createElement(
        "div",
        { className: className + "__container" },
        wp.element.createElement(
          "span",
          { className: className + "__upper" },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_testimonials_upper_quote__["a" /* default */], {
            size: quotSize,
            color: quotColor,
            opacity: quotOpacity
          })
        ),
        wp.element.createElement(
          "div",
          {
            className: className + "__content",
            style: {
              textAlign: align
            }
          },
          wp.element.createElement(
            "div",
            { className: className + "__img_wrap" },
            authorImgUrl && wp.element.createElement("img", {
              className: className + "__img",
              src: "" + authorImgUrl,
              alt: "Author",
              style: {
                borderWidth: imgBorder + "px",
                borderRadius: imgRadius,
                borderColor: imgBorderColor,
                width: imgSize + "px",
                height: imgSize + "px"
              }
            }),
            !authorImgUrl && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_default_image__["a" /* default */], { className: className })
          ),
          wp.element.createElement(
            "div",
            { className: className + "__text_wrap" },
            wp.element.createElement(
              "div",
              null,
              wp.element.createElement(RichText.Content, {
                tagName: "p",
                className: className + "__text",
                value: text,
                style: {
                  color: bodyColor,
                  fontSize: bodySize + "px",
                  lineHeight: bodyLine + "px",
                  marginTop: bodyTop + "px",
                  marginBottom: bodyBottom + "px"
                }
              })
            )
          ),
          wp.element.createElement(
            "div",
            { className: className + "__info" },
            wp.element.createElement(RichText.Content, {
              tagName: authorTag.toLowerCase(),
              className: className + "__author",
              value: author,
              style: {
                color: authorColor,
                fontSize: authorSize + "px"
              }
            }),
            wp.element.createElement(
              "span",
              {
                className: className + "__sep",
                style: {
                  color: dashColor
                }
              },
              "\xA0-\xA0"
            ),
            wp.element.createElement(
              "div",
              { className: className + "__link_wrap" },
              wp.element.createElement(RichText.Content, {
                tagName: authorComTag.toLowerCase(),
                className: className + "__author_comp",
                value: authorCom,
                style: {
                  color: authorComColor,
                  fontSize: authorComSize + "px"
                }
              }),
              urlCheck && wp.element.createElement("a", { href: urlText, target: urlTarget ? "_blank" : "" })
            )
          )
        ),
        wp.element.createElement(
          "span",
          { className: className + "__lower" },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_testimonials_lower_quote__["a" /* default */], {
            color: quotColor,
            size: quotSize,
            opacity: quotOpacity
          })
        )
      )
    );
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgURL = PremiumBlocksSettings.defaultAuthImg;

var Component = wp.element.Component;

var DefaultImage = function (_Component) {
    _inherits(DefaultImage, _Component);

    function DefaultImage() {
        _classCallCheck(this, DefaultImage);

        return _possibleConstructorReturn(this, (DefaultImage.__proto__ || Object.getPrototypeOf(DefaultImage)).apply(this, arguments));
    }

    _createClass(DefaultImage, [{
        key: "render",
        value: function render() {
            var className = this.props.className;


            return wp.element.createElement("img", { src: imgURL });
        }
    }]);

    return DefaultImage;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (DefaultImage);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

var PremiumLowerQuote = function (_Component) {
  _inherits(PremiumLowerQuote, _Component);

  function PremiumLowerQuote() {
    _classCallCheck(this, PremiumLowerQuote);

    return _possibleConstructorReturn(this, (PremiumLowerQuote.__proto__ || Object.getPrototypeOf(PremiumLowerQuote)).apply(this, arguments));
  }

  _createClass(PremiumLowerQuote, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.size !== nextProps.size || this.props.color !== nextProps.color || this.props.opacity !== nextProps.opacity;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          size = _props.size,
          color = _props.color,
          opacity = _props.opacity;

      return wp.element.createElement(
        "svg",
        {
          style: { width: size + "em", opacity: opacity / 100 },
          "aria-hidden": "true",
          "data-prefix": "fas",
          "data-icon": "quote-left",
          "class": "svg-inline--fa fa-quote-left fa-w-16",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        },
        wp.element.createElement("path", {
          fill: "" + color,
          d: "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
        })
      );
    }
  }]);

  return PremiumLowerQuote;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (PremiumLowerQuote);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

var PremiumUpperQuote = function (_Component) {
  _inherits(PremiumUpperQuote, _Component);

  function PremiumUpperQuote() {
    _classCallCheck(this, PremiumUpperQuote);

    return _possibleConstructorReturn(this, (PremiumUpperQuote.__proto__ || Object.getPrototypeOf(PremiumUpperQuote)).apply(this, arguments));
  }

  _createClass(PremiumUpperQuote, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.size !== nextProps.size || this.props.color !== nextProps.color || this.props.opacity !== nextProps.opacity;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          size = _props.size,
          color = _props.color,
          opacity = _props.opacity;


      return wp.element.createElement(
        "svg",
        {
          style: { width: size + "em", opacity: opacity / 100 },
          "aria-hidden": "true",
          "data-prefix": "fas",
          "data-icon": "quote-right",
          "class": "svg-inline--fa fa-quote-right fa-w-16",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        },
        wp.element.createElement("path", {
          fill: "" + color,
          d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
        })
      );
    }
  }]);

  return PremiumUpperQuote;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (PremiumUpperQuote);

/***/ })
/******/ ]);