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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dualHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pricingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return maps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countUp; });
//Blocks Keys
var _PremiumBlocksSetting = PremiumBlocksSettings.activeBlocks,
    banner = _PremiumBlocksSetting.banner,
    dualHeading = _PremiumBlocksSetting.dualHeading,
    pricingTable = _PremiumBlocksSetting.pricingTable,
    maps = _PremiumBlocksSetting.maps,
    testimonial = _PremiumBlocksSetting.testimonial,
    countUp = _PremiumBlocksSetting.countUp;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_dual_heading__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_banner__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_pricing_table__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_maps__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_testimonials__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_count_up__ = __webpack_require__(10);







/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);


if (__WEBPACK_IMPORTED_MODULE_0__settings__["c" /* dualHeading */]) {
  var className = "premium-dheading-block";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
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
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);


if (__WEBPACK_IMPORTED_MODULE_0__settings__["a" /* banner */]) {
  var className = "premium-banner";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      IconButton = _wp$components.IconButton,
      Toolbar = _wp$components.Toolbar,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl;
  var _wp$editor = wp.editor,
      BlockControls = _wp$editor.BlockControls,
      InspectorControls = _wp$editor.InspectorControls,
      AlignmentToolbar = _wp$editor.AlignmentToolbar,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      RichText = _wp$editor.RichText,
      MediaUpload = _wp$editor.MediaUpload;


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
        })
      ), isSelected && wp.element.createElement(
        InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          PanelBody,
          { title: __("General Settings"), initialOpen: true },
          imageURL && wp.element.createElement("img", { src: imageURL, width: "100%", height: "auto" }),
          wp.element.createElement(MediaUpload, {
            allowedTypes: ["image"],
            onSelect: function onSelect(media) {
              setAttributes({
                imageURL: media.url,
                imageID: media.id
              });
            },
            type: "image",
            value: imageID,
            render: function render(_ref) {
              var open = _ref.open;
              return wp.element.createElement(
                IconButton,
                {
                  label: __("Change Image"),
                  icon: "edit",
                  onClick: open
                },
                __("Change Image")
              );
            }
          }),
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
          wp.element.createElement(ToggleControl, {
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
            max: "800",
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
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: background,
              onChange: function onChange(colorValue) {
                return setAttributes({ background: colorValue });
              },
              label: __("Background Color")
            }]
          }),
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
          "none" != borderType && wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: borderColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ borderColor: colorValue });
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
          wp.element.createElement(ToggleControl, {
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
          urlCheck && wp.element.createElement(ToggleControl, {
            label: __("Open link in new tab"),
            checked: target,
            onChange: function onChange(newValue) {
              return setAttributes({ target: newValue });
            }
          }),
          wp.element.createElement(ToggleControl, {
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
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: titleColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ titleColor: colorValue });
              },
              label: __("Color")
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
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Description Settings"), initialOpen: false },
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: descColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ descColor: colorValue });
              },
              label: __("Color")
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
          })
        )
      ), wp.element.createElement(
        "div",
        { className: className + " " + className + "__responsive_" + responsive },
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
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);


if (__WEBPACK_IMPORTED_MODULE_0__settings__["e" /* pricingTable */]) {
  var blockClass = "premium-pricing-table";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      Toolbar = _wp$components.Toolbar,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl;
  var _wp$editor = wp.editor,
      BlockControls = _wp$editor.BlockControls,
      InspectorControls = _wp$editor.InspectorControls,
      AlignmentToolbar = _wp$editor.AlignmentToolbar,
      RichText = _wp$editor.RichText,
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
          wp.element.createElement(ToggleControl, {
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
          wp.element.createElement(ToggleControl, {
            label: __("Title"),
            checked: titleChecked,
            onChange: function onChange(newValue) {
              return setAttributes({ titleChecked: newValue });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Price"),
            checked: priceChecked,
            onChange: function onChange(newValue) {
              return setAttributes({ priceChecked: newValue });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Features"),
            checked: listChecked,
            onChange: function onChange(newValue) {
              return setAttributes({ listChecked: newValue });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Description"),
            checked: descChecked,
            onChange: function onChange(newValue) {
              return setAttributes({ descChecked: newValue });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Button"),
            checked: btnChecked,
            onChange: function onChange(newValue) {
              return setAttributes({ btnChecked: newValue });
            }
          }),
          wp.element.createElement(ToggleControl, {
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
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


if (__WEBPACK_IMPORTED_MODULE_0__settings__["d" /* maps */]) {
  var className = "premium-maps";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      IconButton = _wp$components.IconButton,
      Toolbar = _wp$components.Toolbar,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      TextControl = _wp$components.TextControl,
      TextareaControl = _wp$components.TextareaControl,
      CheckboxControl = _wp$components.CheckboxControl;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      MediaUpload = _wp$editor.MediaUpload,
      PanelColorSettings = _wp$editor.PanelColorSettings;
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
              },
              help: __("Disable marker is applied on page reload")
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
            wp.element.createElement(PanelColorSettings, {
              colorSettings: [{
                value: titleColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ titleColor: colorValue });
                },
                label: __("Color")
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
            })
          ),
          mapMarker && "" !== markerDesc && wp.element.createElement(
            PanelBody,
            {
              title: __("Marker Description Style"),
              initialOpen: false
            },
            wp.element.createElement(PanelColorSettings, {
              colorSettings: [{
                value: descColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ descColor: colorValue });
                },
                label: __("Color")
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
    title: __("Maps"),
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
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_image__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_testimonials_upper_quote__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_testimonials_lower_quote__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






if (__WEBPACK_IMPORTED_MODULE_3__settings__["f" /* testimonial */]) {
  var className = "premium-testimonial";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      IconButton = _wp$components.IconButton,
      Toolbar = _wp$components.Toolbar,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      TextControl = _wp$components.TextControl,
      ToggleControl = _wp$components.ToggleControl;
  var _wp$editor = wp.editor,
      BlockControls = _wp$editor.BlockControls,
      InspectorControls = _wp$editor.InspectorControls,
      AlignmentToolbar = _wp$editor.AlignmentToolbar,
      RichText = _wp$editor.RichText,
      MediaUpload = _wp$editor.MediaUpload,
      PanelColorSettings = _wp$editor.PanelColorSettings;


  registerBlockType("premium/testimonial", {
    title: __("Testimonial"),
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
          wp.element.createElement(ToggleControl, {
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
          urlCheck && wp.element.createElement(ToggleControl, {
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
}

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
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

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_font_awesome__ = __webpack_require__(11);



if (__WEBPACK_IMPORTED_MODULE_0__settings__["b" /* countUp */]) {
  var className = "premium-countup";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      Toolbar = _wp$components.Toolbar,
      SelectControl = _wp$components.SelectControl,
      TextControl = _wp$components.TextControl,
      RangeControl = _wp$components.RangeControl,
      ToggleControl = _wp$components.ToggleControl,
      IconButton = _wp$components.IconButton;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      MediaUpload = _wp$editor.MediaUpload;


  registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: "clock",
    category: "premium-blocks",
    attributes: {
      increment: {
        type: "string",
        default: 500
      },
      time: {
        type: "number",
        default: 1000
      },
      delay: {
        type: "number",
        default: 10
      },
      align: {
        type: "string",
        default: "center"
      },
      flexDir: {
        type: "string",
        default: "column"
      },
      numberSize: {
        type: "number",
        default: 30
      },
      numberColor: {
        type: "string",
        default: "#6ec1e4"
      },
      numberWeight: {
        type: "number",
        default: 900
      },
      prefix: {
        type: "boolean",
        default: true
      },
      prefixTxt: {
        type: "string"
      },
      prefixSize: {
        type: "number",
        default: 20
      },
      prefixColor: {
        type: "string"
      },
      prefixWeight: {
        type: "number"
      },
      prefixGap: {
        type: "number",
        default: 2
      },
      suffix: {
        type: "boolean",
        default: true
      },
      suffixTxt: {
        type: "string"
      },
      suffixSize: {
        type: "number",
        default: 20
      },
      suffixColor: {
        type: "string"
      },
      suffixWeight: {
        type: "number"
      },
      suffixGap: {
        type: "number",
        default: 2
      },
      icon: {
        type: "string",
        default: "icon"
      },
      imageID: {
        type: "string"
      },
      imageURL: {
        type: "string"
      },
      iconCheck: {
        type: "boolean",
        default: true
      },
      iconSize: {
        type: "number",
        default: 40
      },
      iconColor: {
        type: "string",
        default: "#6ec1e4"
      },
      selfAlign: {
        type: "string",
        default: "center"
      },
      titleCheck: {
        type: "boolean",
        default: true
      },
      titleTxt: {
        type: "string",
        default: "Premium Count Up"
      },
      titleSize: {
        type: "number",
        default: 20
      },
      titleT: {
        type: "number",
        default: 1
      },
      titleB: {
        type: "number",
        default: 1
      },
      titleColor: {
        type: "string"
      },
      titleWeight: {
        type: "number",
        default: 500
      },
      faIcon: {
        type: "string"
      }
    },
    edit: function edit(props) {
      var isSelected = props.isSelected,
          setAttributes = props.setAttributes;
      var _props$attributes = props.attributes,
          increment = _props$attributes.increment,
          time = _props$attributes.time,
          delay = _props$attributes.delay,
          align = _props$attributes.align,
          flexDir = _props$attributes.flexDir,
          numberSize = _props$attributes.numberSize,
          numberColor = _props$attributes.numberColor,
          numberWeight = _props$attributes.numberWeight,
          icon = _props$attributes.icon,
          iconSize = _props$attributes.iconSize,
          iconColor = _props$attributes.iconColor,
          titleCheck = _props$attributes.titleCheck,
          titleTxt = _props$attributes.titleTxt,
          titleColor = _props$attributes.titleColor,
          titleSize = _props$attributes.titleSize,
          titleT = _props$attributes.titleT,
          titleB = _props$attributes.titleB,
          titleWeight = _props$attributes.titleWeight,
          imageID = _props$attributes.imageID,
          imageURL = _props$attributes.imageURL,
          iconCheck = _props$attributes.iconCheck,
          prefix = _props$attributes.prefix,
          prefixTxt = _props$attributes.prefixTxt,
          prefixSize = _props$attributes.prefixSize,
          prefixColor = _props$attributes.prefixColor,
          prefixWeight = _props$attributes.prefixWeight,
          prefixGap = _props$attributes.prefixGap,
          suffix = _props$attributes.suffix,
          suffixTxt = _props$attributes.suffixTxt,
          suffixSize = _props$attributes.suffixSize,
          suffixColor = _props$attributes.suffixColor,
          suffixWeight = _props$attributes.suffixWeight,
          suffixGap = _props$attributes.suffixGap,
          selfAlign = _props$attributes.selfAlign,
          faIcon = _props$attributes.faIcon;

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
      var ICONS = [{
        value: "icon",
        label: "Clock Icon"
      }, {
        value: "img",
        label: "Image"
      }];
      var DIRECTION = [{
        value: "row",
        label: "Row"
      }, {
        value: "row-reverse",
        label: "Reversed Row"
      }, {
        value: "column",
        label: "Column"
      }, {
        value: "column-reverse",
        label: "Reversed Column"
      }];
      var ALIGNS = ["left", "center", "right"];
      var REVALIGNS = ["right", "center", "left"];
      switch (align) {
        case "left":
          setAttributes({ selfAlign: "flex-start" });
          break;
        case "center":
          setAttributes({ selfAlign: "center" });
          break;
        case "right":
          setAttributes({ selfAlign: "flex-end" });
          break;
      }
      return [isSelected && wp.element.createElement(
        InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          PanelBody,
          { title: __("Counter"), initialOpen: true },
          wp.element.createElement(TextControl, {
            label: __("Increment"),
            value: increment,
            onChange: function onChange(value) {
              return setAttributes({ increment: value });
            }
          }),
          wp.element.createElement(TextControl, {
            label: __("Rolling Time"),
            value: time,
            onChange: function onChange(value) {
              return setAttributes({ time: value });
            },
            help: __("Set counting time in milliseconds, for example: 1000")
          }),
          wp.element.createElement(TextControl, {
            label: __("Delay"),
            value: delay,
            onChange: function onChange(value) {
              return setAttributes({ delay: value });
            },
            help: __("Set delay in milliseconds, for example: 10")
          }),
          wp.element.createElement(
            "p",
            null,
            __("Align")
          ),
          "row-reverse" !== flexDir && wp.element.createElement(Toolbar, {
            controls: ALIGNS.map(function (contentAlign) {
              return {
                icon: "editor-align" + contentAlign,
                isActive: contentAlign === align,
                onClick: function onClick() {
                  return setAttributes({ align: contentAlign });
                }
              };
            })
          }),
          wp.element.createElement(
            "p",
            null,
            __("Align")
          ),
          "row-reverse" === flexDir && wp.element.createElement(Toolbar, {
            label: __("Align"),
            controls: REVALIGNS.map(function (contentAlign) {
              return {
                icon: "editor-align" + contentAlign,
                isActive: contentAlign === align,
                onClick: function onClick() {
                  return setAttributes({ align: contentAlign });
                }
              };
            })
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Icon"),
            checked: iconCheck,
            onChange: function onChange(check) {
              return setAttributes({ iconCheck: check });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Title"),
            checked: titleCheck,
            onChange: function onChange(check) {
              return setAttributes({ titleCheck: check });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Prefix"),
            checked: prefix,
            onChange: function onChange(check) {
              return setAttributes({ prefix: check });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Suffix"),
            checked: suffix,
            onChange: function onChange(check) {
              return setAttributes({ suffix: check });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Number"), initialOpen: false },
          wp.element.createElement(RangeControl, {
            label: __("Font Size (PX)"),
            value: numberSize,
            onChange: function onChange(newValue) {
              return setAttributes({ numberSize: newValue });
            }
          }),
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: numberColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ numberColor: colorValue });
              },
              label: __("Number Color")
            }]
          }),
          wp.element.createElement(SelectControl, {
            label: __("Font Weight"),
            options: WEIGHT,
            value: numberWeight,
            onChange: function onChange(newWeight) {
              return setAttributes({ numberWeight: newWeight });
            }
          })
        ),
        titleCheck && wp.element.createElement(
          PanelBody,
          { title: __("Title"), initialOpen: false },
          wp.element.createElement(TextControl, {
            label: __("Title Text"),
            value: titleTxt,
            onChange: function onChange(value) {
              return setAttributes({ titleTxt: value });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Font Size (PX)"),
            value: titleSize,
            onChange: function onChange(newValue) {
              return setAttributes({ titleSize: newValue });
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
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: titleColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ titleColor: colorValue });
              },
              label: __("Color")
            }]
          }),
          wp.element.createElement(RangeControl, {
            label: __("Margin Top (PX)"),
            value: titleT,
            onChange: function onChange(newValue) {
              return setAttributes({ titleT: newValue });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Margin Bottom (PX)"),
            value: titleB,
            onChange: function onChange(newValue) {
              return setAttributes({ titleB: newValue });
            }
          })
        ),
        prefix && wp.element.createElement(
          PanelBody,
          { title: __("Prefix"), initialOpen: false },
          wp.element.createElement(TextControl, {
            label: __("Prefix"),
            value: prefixTxt,
            onChange: function onChange(value) {
              return setAttributes({ prefixTxt: value });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Font Size (PX)"),
            value: prefixSize,
            onChange: function onChange(newValue) {
              return setAttributes({ prefixSize: newValue });
            }
          }),
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: prefixColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ prefixColor: colorValue });
              },
              label: __("Color")
            }]
          }),
          wp.element.createElement(SelectControl, {
            label: __("Font Weight"),
            options: WEIGHT,
            value: prefixWeight,
            onChange: function onChange(newWeight) {
              return setAttributes({ prefixWeight: newWeight });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Gap After (PX)"),
            value: prefixGap,
            onChange: function onChange(newValue) {
              return setAttributes({ prefixGap: newValue });
            }
          })
        ),
        suffix && wp.element.createElement(
          PanelBody,
          { title: __("Suffix"), initialOpen: false },
          wp.element.createElement(TextControl, {
            label: __("Suffix"),
            value: suffixTxt,
            onChange: function onChange(value) {
              return setAttributes({ suffixTxt: value });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Font Size (PX)"),
            value: suffixSize,
            onChange: function onChange(newValue) {
              return setAttributes({ suffixSize: newValue });
            }
          }),
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: suffixColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ suffixColor: colorValue });
              },
              label: __("Color")
            }]
          }),
          wp.element.createElement(SelectControl, {
            label: __("Font Weight"),
            options: WEIGHT,
            value: suffixWeight,
            onChange: function onChange(newWeight) {
              return setAttributes({ suffixWeight: newWeight });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Gap Before (PX)"),
            value: suffixGap,
            onChange: function onChange(newValue) {
              return setAttributes({ suffixGap: newValue });
            }
          })
        ),
        iconCheck && wp.element.createElement(
          PanelBody,
          { title: __("Icon"), initialOpen: false },
          wp.element.createElement(SelectControl, {
            label: __("Icon Type"),
            options: ICONS,
            value: icon,
            onChange: function onChange(newType) {
              return setAttributes({ icon: newType });
            }
          }),
          "icon" === icon && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_font_awesome__["a" /* default */], {
            icon: faIcon,
            onChangeIcon: function onChangeIcon(newIcon) {
              return setAttributes({ faIcon: newIcon });
            }
          }),
          "img" === icon && imageURL && wp.element.createElement("img", { src: imageURL, width: "100%", height: "auto" }),
          "img" === icon && wp.element.createElement(MediaUpload, {
            allowedTypes: ["image"],
            onSelect: function onSelect(media) {
              setAttributes({
                imageID: media.id,
                imageURL: "undefined" === typeof media.sizes.thumbnail ? media.url : media.sizes.thumbnail.url
              });
            },
            type: "image",
            value: imageID,
            render: function render(_ref) {
              var open = _ref.open;
              return wp.element.createElement(
                IconButton,
                {
                  label: __("Change Image"),
                  icon: "edit",
                  onClick: open
                },
                __("Change Image")
              );
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Size (PX)"),
            max: "200",
            value: iconSize,
            onChange: function onChange(newValue) {
              return setAttributes({ iconSize: newValue });
            }
          }),
          "icon" === icon && wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: iconColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ iconColor: colorValue });
              },
              label: __("Color")
            }]
          }),
          wp.element.createElement(SelectControl, {
            label: __("Direction"),
            options: DIRECTION,
            value: flexDir,
            onChange: function onChange(newDir) {
              return setAttributes({ flexDir: newDir });
            }
          })
        )
      ), wp.element.createElement(
        "div",
        {
          className: className + "__wrap",
          style: {
            justifyContent: align,
            flexDirection: flexDir
          }
        },
        iconCheck && wp.element.createElement(
          "div",
          {
            className: className + "__icon_wrap",
            style: {
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          "icon" === icon && wp.element.createElement("span", {
            className: className + "__icon " + faIcon,
            style: {
              fontSize: iconSize + "px",
              color: iconColor
            }
          }),
          "img" === icon && imageURL && wp.element.createElement("img", {
            src: imageURL,
            style: {
              width: iconSize + "px",
              height: iconSize + "px"
            }
          })
        ),
        wp.element.createElement(
          "div",
          {
            className: className + "__info",
            style: {
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          titleCheck && wp.element.createElement(
            "h3",
            {
              className: className + "__title",
              style: {
                fontSize: titleSize + "px",
                marginTop: titleT + "px",
                marginBottom: titleB + "px",
                color: titleColor,
                fontWeight: titleWeight
              }
            },
            titleTxt
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__desc",
              style: {
                justifyContent: align
              }
            },
            prefix && wp.element.createElement(
              "p",
              {
                style: {
                  fontSize: prefixSize + "px",
                  color: prefixColor,
                  fontWeight: prefixWeight,
                  marginRight: prefixGap + "px"
                }
              },
              prefixTxt
            ),
            wp.element.createElement(
              "p",
              {
                className: className + "__increment",
                "data-interval": time,
                "data-delay": delay,
                style: {
                  fontSize: numberSize + "px",
                  color: numberColor,
                  fontWeight: numberWeight
                }
              },
              increment
            ),
            suffix && wp.element.createElement(
              "p",
              {
                style: {
                  fontSize: suffixSize + "px",
                  color: suffixColor,
                  fontWeight: suffixWeight,
                  marginLeft: suffixGap + "px"
                }
              },
              suffixTxt
            )
          )
        )
      )];
    },
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          increment = _props$attributes2.increment,
          time = _props$attributes2.time,
          delay = _props$attributes2.delay,
          align = _props$attributes2.align,
          flexDir = _props$attributes2.flexDir,
          numberSize = _props$attributes2.numberSize,
          numberColor = _props$attributes2.numberColor,
          numberWeight = _props$attributes2.numberWeight,
          prefix = _props$attributes2.prefix,
          prefixTxt = _props$attributes2.prefixTxt,
          prefixSize = _props$attributes2.prefixSize,
          prefixColor = _props$attributes2.prefixColor,
          prefixWeight = _props$attributes2.prefixWeight,
          prefixGap = _props$attributes2.prefixGap,
          suffix = _props$attributes2.suffix,
          suffixTxt = _props$attributes2.suffixTxt,
          suffixSize = _props$attributes2.suffixSize,
          suffixColor = _props$attributes2.suffixColor,
          suffixWeight = _props$attributes2.suffixWeight,
          suffixGap = _props$attributes2.suffixGap,
          iconCheck = _props$attributes2.iconCheck,
          icon = _props$attributes2.icon,
          imageURL = _props$attributes2.imageURL,
          iconSize = _props$attributes2.iconSize,
          iconColor = _props$attributes2.iconColor,
          selfAlign = _props$attributes2.selfAlign,
          titleCheck = _props$attributes2.titleCheck,
          titleTxt = _props$attributes2.titleTxt,
          titleColor = _props$attributes2.titleColor,
          titleSize = _props$attributes2.titleSize,
          titleT = _props$attributes2.titleT,
          titleB = _props$attributes2.titleB,
          titleWeight = _props$attributes2.titleWeight,
          faIcon = _props$attributes2.faIcon;

      return wp.element.createElement(
        "div",
        {
          className: className + "__wrap",
          style: {
            justifyContent: align,
            flexDirection: flexDir
          }
        },
        iconCheck && wp.element.createElement(
          "div",
          {
            className: className + "__icon",
            style: {
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          "icon" === icon && wp.element.createElement("span", {
            className: className + "__icon " + faIcon,
            style: {
              fontSize: iconSize + "px",
              color: iconColor
            }
          }),
          "img" === icon && imageURL && wp.element.createElement("img", {
            src: imageURL,
            style: {
              width: iconSize + "px",
              height: iconSize + "px"
            }
          })
        ),
        wp.element.createElement(
          "div",
          {
            className: className + "__info",
            style: {
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          titleCheck && wp.element.createElement(
            "h3",
            {
              className: className + "__title",
              style: {
                fontSize: titleSize + "px",
                marginTop: titleT + "px",
                marginBottom: titleB + "px",
                color: titleColor,
                fontWeight: titleWeight
              }
            },
            titleTxt
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__desc",
              style: {
                justifyContent: align
              }
            },
            prefix && wp.element.createElement(
              "p",
              {
                style: {
                  fontSize: prefixSize + "px",
                  color: prefixColor,
                  fontWeight: prefixWeight,
                  marginRight: prefixGap + "px"
                }
              },
              prefixTxt
            ),
            wp.element.createElement(
              "p",
              {
                className: className + "__increment",
                "data-interval": time,
                "data-delay": delay,
                style: {
                  fontSize: numberSize + "px",
                  color: numberColor,
                  fontWeight: numberWeight
                }
              },
              increment
            ),
            suffix && wp.element.createElement(
              "p",
              {
                style: {
                  fontSize: suffixSize + "px",
                  color: suffixColor,
                  fontWeight: suffixWeight,
                  marginLeft: suffixGap + "px"
                }
              },
              suffixTxt
            )
          )
        )
      );
    }
  });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FontAwesome;
var __ = wp.i18n.__;
var SelectControl = wp.components.SelectControl;

function FontAwesome(props) {
  var icon = props.icon,
      _props$onChangeIcon = props.onChangeIcon,
      onChangeIcon = _props$onChangeIcon === undefined ? function () {} : _props$onChangeIcon;

  var ICONS = [{
    value: "fa fa-500px",
    label: "500px"
  }, {
    value: "fa fa-address-book",
    label: "address-book"
  }, {
    value: "fa fa-address-book-o",
    label: "address-book-o"
  }, {
    value: "fa fa-address-card",
    label: "address-card"
  }, {
    value: "fa fa-address-card-o",
    label: "address-card-o"
  }, {
    value: "fa fa-adjust",
    label: "adjust"
  }, {
    value: "fa fa-adn",
    label: "adn"
  }, {
    value: "fa fa-align-center",
    label: "align-center"
  }, {
    value: "fa fa-align-justify",
    label: "align-justify"
  }, {
    value: "fa fa-align-left",
    label: "align-left"
  }, {
    value: "fa fa-align-right",
    label: "align-right"
  }, {
    value: "fa fa-amazon",
    label: "amazon"
  }, {
    value: "fa fa-ambulance",
    label: "ambulance"
  }, {
    value: "fa fa-american-sign-language-interpreting",
    label: "american-sign-language-interpreting"
  }, {
    value: "fa fa-anchor",
    label: "anchor"
  }, {
    value: "fa fa-android",
    label: "android"
  }, {
    value: "fa fa-angellist",
    label: "angellist"
  }, {
    value: "fa fa-angle-double-down",
    label: "angle-double-down"
  }, {
    value: "fa fa-angle-double-left",
    label: "angle-double-left"
  }, {
    value: "fa fa-angle-double-right",
    label: "angle-double-right"
  }, {
    value: "fa fa-angle-double-up",
    label: "angle-double-up"
  }, {
    value: "fa fa-angle-down",
    label: "angle-down"
  }, {
    value: "fa fa-angle-left",
    label: "angle-left"
  }, {
    value: "fa fa-angle-right",
    label: "angle-right"
  }, {
    value: "fa fa-angle-up",
    label: "angle-up"
  }, {
    value: "fa fa-apple",
    label: "apple"
  }, {
    value: "fa fa-archive",
    label: "archive"
  }, {
    value: "fa fa-area-chart",
    label: "area-chart"
  }, {
    value: "fa fa-arrow-circle-down",
    label: "arrow-circle-down"
  }, {
    value: "fa fa-arrow-circle-left",
    label: "arrow-circle-left"
  }, {
    value: "fa fa-arrow-circle-o-down",
    label: "arrow-circle-o-down"
  }, {
    value: "fa fa-arrow-circle-o-left",
    label: "arrow-circle-o-left"
  }, {
    value: "fa fa-arrow-circle-o-right",
    label: "arrow-circle-o-right"
  }, {
    value: "fa fa-arrow-circle-o-up",
    label: "arrow-circle-o-up"
  }, {
    value: "fa fa-arrow-circle-right",
    label: "arrow-circle-right"
  }, {
    value: "fa fa-arrow-circle-up",
    label: "arrow-circle-up"
  }, {
    value: "fa fa-arrow-down",
    label: "arrow-down"
  }, {
    value: "fa fa-arrow-left",
    label: "arrow-left"
  }, {
    value: "fa fa-arrow-right",
    label: "arrow-right"
  }, {
    value: "fa fa-arrow-up",
    label: "arrow-up"
  }, {
    value: "fa fa-arrows",
    label: "arrows"
  }, {
    value: "fa fa-arrows-alt",
    label: "arrows-alt"
  }, {
    value: "fa fa-arrows-h",
    label: "arrows-h"
  }, {
    value: "fa fa-arrows-v",
    label: "arrows-v"
  }, {
    value: "fa fa-asl-interpreting",
    label: "asl-interpreting"
  }, {
    value: "fa fa-assistive-listening-systems",
    label: "assistive-listening-systems"
  }, {
    value: "fa fa-asterisk",
    label: "asterisk"
  }, {
    value: "fa fa-at",
    label: "at"
  }, {
    value: "fa fa-audio-description",
    label: "audio-description"
  }, {
    value: "fa fa-automobile",
    label: "automobile"
  }, {
    value: "fa fa-backward",
    label: "backward"
  }, {
    value: "fa fa-balance-scale",
    label: "balance-scale"
  }, {
    value: "fa fa-ban",
    label: "ban"
  }, {
    value: "fa fa-bandcamp",
    label: "bandcamp"
  }, {
    value: "fa fa-bank",
    label: "bank"
  }, {
    value: "fa fa-bar-chart",
    label: "bar-chart"
  }, {
    value: "fa fa-bar-chart-o",
    label: "bar-chart-o"
  }, {
    value: "fa fa-barcode",
    label: "barcode"
  }, {
    value: "fa fa-bars",
    label: "bars"
  }, {
    value: "fa fa-bath",
    label: "bath"
  }, {
    value: "fa fa-bathtub",
    label: "bathtub"
  }, {
    value: "fa fa-battery",
    label: "battery"
  }, {
    value: "fa fa-battery-0",
    label: "battery-0"
  }, {
    value: "fa fa-battery-1",
    label: "battery-1"
  }, {
    value: "fa fa-battery-2",
    label: "battery-2"
  }, {
    value: "fa fa-battery-3",
    label: "battery-3"
  }, {
    value: "fa fa-battery-4",
    label: "battery-4"
  }, {
    value: "fa fa-battery-empty",
    label: "battery-empty"
  }, {
    value: "fa fa-battery-full",
    label: "battery-full"
  }, {
    value: "fa fa-battery-half",
    label: "battery-half"
  }, {
    value: "fa fa-battery-quarter",
    label: "battery-quarter"
  }, {
    value: "fa fa-battery-three-quarters",
    label: "battery-three-quarters"
  }, {
    value: "fa fa-bed",
    label: "bed"
  }, {
    value: "fa fa-beer",
    label: "beer"
  }, {
    value: "fa fa-behance",
    label: "behance"
  }, {
    value: "fa fa-behance-square",
    label: "behance-square"
  }, {
    value: "fa fa-bell",
    label: "bell"
  }, {
    value: "fa fa-bell-o",
    label: "bell-o"
  }, {
    value: "fa fa-bell-slash",
    label: "bell-slash"
  }, {
    value: "fa fa-bell-slash-o",
    label: "bell-slash-o"
  }, {
    value: "fa fa-bicycle",
    label: "bicycle"
  }, {
    value: "fa fa-binoculars",
    label: "binoculars"
  }, {
    value: "fa fa-birthday-cake",
    label: "birthday-cake"
  }, {
    value: "fa fa-bitbucket",
    label: "bitbucket"
  }, {
    value: "fa fa-bitbucket-square",
    label: "bitbucket-square"
  }, {
    value: "fa fa-bitcoin",
    label: "bitcoin"
  }, {
    value: "fa fa-black-tie",
    label: "black-tie"
  }, {
    value: "fa fa-blind",
    label: "blind"
  }, {
    value: "fa fa-bluetooth",
    label: "bluetooth"
  }, {
    value: "fa fa-bluetooth-b",
    label: "bluetooth-b"
  }, {
    value: "fa fa-bold",
    label: "bold"
  }, {
    value: "fa fa-bolt",
    label: "bolt"
  }, {
    value: "fa fa-bomb",
    label: "bomb"
  }, {
    value: "fa fa-book",
    label: "book"
  }, {
    value: "fa fa-bookmark",
    label: "bookmark"
  }, {
    value: "fa fa-bookmark-o",
    label: "bookmark-o"
  }, {
    value: "fa fa-braille",
    label: "braille"
  }, {
    value: "fa fa-briefcase",
    label: "briefcase"
  }, {
    value: "fa fa-btc",
    label: "btc"
  }, {
    value: "fa fa-bug",
    label: "bug"
  }, {
    value: "fa fa-building",
    label: "building"
  }, {
    value: "fa fa-building-o",
    label: "building-o"
  }, {
    value: "fa fa-bullhorn",
    label: "bullhorn"
  }, {
    value: "fa fa-bullseye",
    label: "bullseye"
  }, {
    value: "fa fa-bus",
    label: "bus"
  }, {
    value: "fa fa-buysellads",
    label: "buysellads"
  }, {
    value: "fa fa-cab",
    label: "cab"
  }, {
    value: "fa fa-calculator",
    label: "calculator"
  }, {
    value: "fa fa-calendar",
    label: "calendar"
  }, {
    value: "fa fa-calendar-check-o",
    label: "calendar-check-o"
  }, {
    value: "fa fa-calendar-minus-o",
    label: "calendar-minus-o"
  }, {
    value: "fa fa-calendar-o",
    label: "calendar-o"
  }, {
    value: "fa fa-calendar-plus-o",
    label: "calendar-plus-o"
  }, {
    value: "fa fa-calendar-times-o",
    label: "calendar-times-o"
  }, {
    value: "fa fa-camera",
    label: "camera"
  }, {
    value: "fa fa-camera-retro",
    label: "camera-retro"
  }, {
    value: "fa fa-car",
    label: "car"
  }, {
    value: "fa fa-caret-down",
    label: "caret-down"
  }, {
    value: "fa fa-caret-left",
    label: "caret-left"
  }, {
    value: "fa fa-caret-right",
    label: "caret-right"
  }, {
    value: "fa fa-caret-square-o-down",
    label: "caret-square-o-down"
  }, {
    value: "fa fa-caret-square-o-left",
    label: "caret-square-o-left"
  }, {
    value: "fa fa-caret-square-o-right",
    label: "caret-square-o-right"
  }, {
    value: "fa fa-caret-square-o-up",
    label: "caret-square-o-up"
  }, {
    value: "fa fa-caret-up",
    label: "caret-up"
  }, {
    value: "fa fa-cart-arrow-down",
    label: "cart-arrow-down"
  }, {
    value: "fa fa-cart-plus",
    label: "cart-plus"
  }, {
    value: "fa fa-cc",
    label: "cc"
  }, {
    value: "fa fa-cc-amex",
    label: "cc-amex"
  }, {
    value: "fa fa-cc-diners-club",
    label: "cc-diners-club"
  }, {
    value: "fa fa-cc-discover",
    label: "cc-discover"
  }, {
    value: "fa fa-cc-jcb",
    label: "cc-jcb"
  }, {
    value: "fa fa-cc-mastercard",
    label: "cc-mastercard"
  }, {
    value: "fa fa-cc-paypal",
    label: "cc-paypal"
  }, {
    value: "fa fa-cc-stripe",
    label: "cc-stripe"
  }, {
    value: "fa fa-cc-visa",
    label: "cc-visa"
  }, {
    value: "fa fa-certificate",
    label: "certificate"
  }, {
    value: "fa fa-chain",
    label: "chain"
  }, {
    value: "fa fa-chain-broken",
    label: "chain-broken"
  }, {
    value: "fa fa-check",
    label: "check"
  }, {
    value: "fa fa-check-circle",
    label: "check-circle"
  }, {
    value: "fa fa-check-circle-o",
    label: "check-circle-o"
  }, {
    value: "fa fa-check-square",
    label: "check-square"
  }, {
    value: "fa fa-check-square-o",
    label: "check-square-o"
  }, {
    value: "fa fa-chevron-circle-down",
    label: "chevron-circle-down"
  }, {
    value: "fa fa-chevron-circle-left",
    label: "chevron-circle-left"
  }, {
    value: "fa fa-chevron-circle-right",
    label: "chevron-circle-right"
  }, {
    value: "fa fa-chevron-circle-up",
    label: "chevron-circle-up"
  }, {
    value: "fa fa-chevron-down",
    label: "chevron-down"
  }, {
    value: "fa fa-chevron-left",
    label: "chevron-left"
  }, {
    value: "fa fa-chevron-right",
    label: "chevron-right"
  }, {
    value: "fa fa-chevron-up",
    label: "chevron-up"
  }, {
    value: "fa fa-child",
    label: "child"
  }, {
    value: "fa fa-chrome",
    label: "chrome"
  }, {
    value: "fa fa-circle",
    label: "circle"
  }, {
    value: "fa fa-circle-o",
    label: "circle-o"
  }, {
    value: "fa fa-circle-o-notch",
    label: "circle-o-notch"
  }, {
    value: "fa fa-circle-thin",
    label: "circle-thin"
  }, {
    value: "fa fa-clipboard",
    label: "clipboard"
  }, {
    value: "fa fa-clock-o",
    label: "clock-o"
  }, {
    value: "fa fa-clone",
    label: "clone"
  }, {
    value: "fa fa-close",
    label: "close"
  }, {
    value: "fa fa-cloud",
    label: "cloud"
  }, {
    value: "fa fa-cloud-download",
    label: "cloud-download"
  }, {
    value: "fa fa-cloud-upload",
    label: "cloud-upload"
  }, {
    value: "fa fa-cny",
    label: "cny"
  }, {
    value: "fa fa-code",
    label: "code"
  }, {
    value: "fa fa-code-fork",
    label: "code-fork"
  }, {
    value: "fa fa-codepen",
    label: "codepen"
  }, {
    value: "fa fa-codiepie",
    label: "codiepie"
  }, {
    value: "fa fa-coffee",
    label: "coffee"
  }, {
    value: "fa fa-cog",
    label: "cog"
  }, {
    value: "fa fa-cogs",
    label: "cogs"
  }, {
    value: "fa fa-columns",
    label: "columns"
  }, {
    value: "fa fa-comment",
    label: "comment"
  }, {
    value: "fa fa-comment-o",
    label: "comment-o"
  }, {
    value: "fa fa-commenting",
    label: "commenting"
  }, {
    value: "fa fa-commenting-o",
    label: "commenting-o"
  }, {
    value: "fa fa-comments",
    label: "comments"
  }, {
    value: "fa fa-comments-o",
    label: "comments-o"
  }, {
    value: "fa fa-compass",
    label: "compass"
  }, {
    value: "fa fa-compress",
    label: "compress"
  }, {
    value: "fa fa-connectdevelop",
    label: "connectdevelop"
  }, {
    value: "fa fa-contao",
    label: "contao"
  }, {
    value: "fa fa-copy",
    label: "copy"
  }, {
    value: "fa fa-copyright",
    label: "copyright"
  }, {
    value: "fa fa-creative-commons",
    label: "creative-commons"
  }, {
    value: "fa fa-credit-card",
    label: "credit-card"
  }, {
    value: "fa fa-credit-card-alt",
    label: "credit-card-alt"
  }, {
    value: "fa fa-crop",
    label: "crop"
  }, {
    value: "fa fa-crosshairs",
    label: "crosshairs"
  }, {
    value: "fa fa-css3",
    label: "css3"
  }, {
    value: "fa fa-cube",
    label: "cube"
  }, {
    value: "fa fa-cubes",
    label: "cubes"
  }, {
    value: "fa fa-cut",
    label: "cut"
  }, {
    value: "fa fa-cutlery",
    label: "cutlery"
  }, {
    value: "fa fa-dashboard",
    label: "dashboard"
  }, {
    value: "fa fa-dashcube",
    label: "dashcube"
  }, {
    value: "fa fa-database",
    label: "database"
  }, {
    value: "fa fa-deaf",
    label: "deaf"
  }, {
    value: "fa fa-deafness",
    label: "deafness"
  }, {
    value: "fa fa-dedent",
    label: "dedent"
  }, {
    value: "fa fa-delicious",
    label: "delicious"
  }, {
    value: "fa fa-desktop",
    label: "desktop"
  }, {
    value: "fa fa-deviantart",
    label: "deviantart"
  }, {
    value: "fa fa-diamond",
    label: "diamond"
  }, {
    value: "fa fa-digg",
    label: "digg"
  }, {
    value: "fa fa-dollar",
    label: "dollar"
  }, {
    value: "fa fa-dot-circle-o",
    label: "dot-circle-o"
  }, {
    value: "fa fa-download",
    label: "download"
  }, {
    value: "fa fa-dribbble",
    label: "dribbble"
  }, {
    value: "fa fa-drivers-license",
    label: "drivers-license"
  }, {
    value: "fa fa-drivers-license-o",
    label: "drivers-license-o"
  }, {
    value: "fa fa-dropbox",
    label: "dropbox"
  }, {
    value: "fa fa-drupal",
    label: "drupal"
  }, {
    value: "fa fa-edge",
    label: "edge"
  }, {
    value: "fa fa-edit",
    label: "edit"
  }, {
    value: "fa fa-eercast",
    label: "eercast"
  }, {
    value: "fa fa-eject",
    label: "eject"
  }, {
    value: "fa fa-ellipsis-h",
    label: "ellipsis-h"
  }, {
    value: "fa fa-ellipsis-v",
    label: "ellipsis-v"
  }, {
    value: "fa fa-empire",
    label: "empire"
  }, {
    value: "fa fa-envelope",
    label: "envelope"
  }, {
    value: "fa fa-envelope-o",
    label: "envelope-o"
  }, {
    value: "fa fa-envelope-open",
    label: "envelope-open"
  }, {
    value: "fa fa-envelope-open-o",
    label: "envelope-open-o"
  }, {
    value: "fa fa-envelope-square",
    label: "envelope-square"
  }, {
    value: "fa fa-envira",
    label: "envira"
  }, {
    value: "fa fa-eraser",
    label: "eraser"
  }, {
    value: "fa fa-etsy",
    label: "etsy"
  }, {
    value: "fa fa-eur",
    label: "eur"
  }, {
    value: "fa fa-euro",
    label: "euro"
  }, {
    value: "fa fa-exchange",
    label: "exchange"
  }, {
    value: "fa fa-exclamation",
    label: "exclamation"
  }, {
    value: "fa fa-exclamation-circle",
    label: "exclamation-circle"
  }, {
    value: "fa fa-exclamation-triangle",
    label: "exclamation-triangle"
  }, {
    value: "fa fa-expand",
    label: "expand"
  }, {
    value: "fa fa-expeditedssl",
    label: "expeditedssl"
  }, {
    value: "fa fa-external-link",
    label: "external-link"
  }, {
    value: "fa fa-external-link-square",
    label: "external-link-square"
  }, {
    value: "fa fa-eye",
    label: "eye"
  }, {
    value: "fa fa-eye-slash",
    label: "eye-slash"
  }, {
    value: "fa fa-eyedropper",
    label: "eyedropper"
  }, {
    value: "fa fa-fa",
    label: "fa"
  }, {
    value: "fa fa-facebook",
    label: "facebook"
  }, {
    value: "fa fa-facebook-f",
    label: "facebook-f"
  }, {
    value: "fa fa-facebook-official",
    label: "facebook-official"
  }, {
    value: "fa fa-facebook-square",
    label: "facebook-square"
  }, {
    value: "fa fa-fast-backward",
    label: "fast-backward"
  }, {
    value: "fa fa-fast-forward",
    label: "fast-forward"
  }, {
    value: "fa fa-fax",
    label: "fax"
  }, {
    value: "fa fa-feed",
    label: "feed"
  }, {
    value: "fa fa-female",
    label: "female"
  }, {
    value: "fa fa-fighter-jet",
    label: "fighter-jet"
  }, {
    value: "fa fa-file",
    label: "file"
  }, {
    value: "fa fa-file-archive-o",
    label: "file-archive-o"
  }, {
    value: "fa fa-file-audio-o",
    label: "file-audio-o"
  }, {
    value: "fa fa-file-code-o",
    label: "file-code-o"
  }, {
    value: "fa fa-file-excel-o",
    label: "file-excel-o"
  }, {
    value: "fa fa-file-image-o",
    label: "file-image-o"
  }, {
    value: "fa fa-file-movie-o",
    label: "file-movie-o"
  }, {
    value: "fa fa-file-o",
    label: "file-o"
  }, {
    value: "fa fa-file-pdf-o",
    label: "file-pdf-o"
  }, {
    value: "fa fa-file-photo-o",
    label: "file-photo-o"
  }, {
    value: "fa fa-file-picture-o",
    label: "file-picture-o"
  }, {
    value: "fa fa-file-powerpoint-o",
    label: "file-powerpoint-o"
  }, {
    value: "fa fa-file-sound-o",
    label: "file-sound-o"
  }, {
    value: "fa fa-file-text",
    label: "file-text"
  }, {
    value: "fa fa-file-text-o",
    label: "file-text-o"
  }, {
    value: "fa fa-file-video-o",
    label: "file-video-o"
  }, {
    value: "fa fa-file-word-o",
    label: "file-word-o"
  }, {
    value: "fa fa-file-zip-o",
    label: "file-zip-o"
  }, {
    value: "fa fa-files-o",
    label: "files-o"
  }, {
    value: "fa fa-film",
    label: "film"
  }, {
    value: "fa fa-filter",
    label: "filter"
  }, {
    value: "fa fa-fire",
    label: "fire"
  }, {
    value: "fa fa-fire-extinguisher",
    label: "fire-extinguisher"
  }, {
    value: "fa fa-firefox",
    label: "firefox"
  }, {
    value: "fa fa-first-order",
    label: "first-order"
  }, {
    value: "fa fa-flag",
    label: "flag"
  }, {
    value: "fa fa-flag-checkered",
    label: "flag-checkered"
  }, {
    value: "fa fa-flag-o",
    label: "flag-o"
  }, {
    value: "fa fa-flash",
    label: "flash"
  }, {
    value: "fa fa-flask",
    label: "flask"
  }, {
    value: "fa fa-flickr",
    label: "flickr"
  }, {
    value: "fa fa-floppy-o",
    label: "floppy-o"
  }, {
    value: "fa fa-folder",
    label: "folder"
  }, {
    value: "fa fa-folder-o",
    label: "folder-o"
  }, {
    value: "fa fa-folder-open",
    label: "folder-open"
  }, {
    value: "fa fa-folder-open-o",
    label: "folder-open-o"
  }, {
    value: "fa fa-font",
    label: "font"
  }, {
    value: "fa fa-font-awesome",
    label: "font-awesome"
  }, {
    value: "fa fa-fonticons",
    label: "fonticons"
  }, {
    value: "fa fa-fort-awesome",
    label: "fort-awesome"
  }, {
    value: "fa fa-forumbee",
    label: "forumbee"
  }, {
    value: "fa fa-forward",
    label: "forward"
  }, {
    value: "fa fa-foursquare",
    label: "foursquare"
  }, {
    value: "fa fa-free-code-camp",
    label: "free-code-camp"
  }, {
    value: "fa fa-frown-o",
    label: "frown-o"
  }, {
    value: "fa fa-futbol-o",
    label: "futbol-o"
  }, {
    value: "fa fa-gamepad",
    label: "gamepad"
  }, {
    value: "fa fa-gavel",
    label: "gavel"
  }, {
    value: "fa fa-gbp",
    label: "gbp"
  }, {
    value: "fa fa-ge",
    label: "ge"
  }, {
    value: "fa fa-gear",
    label: "gear"
  }, {
    value: "fa fa-gears",
    label: "gears"
  }, {
    value: "fa fa-genderless",
    label: "genderless"
  }, {
    value: "fa fa-get-pocket",
    label: "get-pocket"
  }, {
    value: "fa fa-gg",
    label: "gg"
  }, {
    value: "fa fa-gg-circle",
    label: "gg-circle"
  }, {
    value: "fa fa-gift",
    label: "gift"
  }, {
    value: "fa fa-git",
    label: "git"
  }, {
    value: "fa fa-git-square",
    label: "git-square"
  }, {
    value: "fa fa-github",
    label: "github"
  }, {
    value: "fa fa-github-alt",
    label: "github-alt"
  }, {
    value: "fa fa-github-square",
    label: "github-square"
  }, {
    value: "fa fa-gitlab",
    label: "gitlab"
  }, {
    value: "fa fa-gittip",
    label: "gittip"
  }, {
    value: "fa fa-glass",
    label: "glass"
  }, {
    value: "fa fa-glide",
    label: "glide"
  }, {
    value: "fa fa-glide-g",
    label: "glide-g"
  }, {
    value: "fa fa-globe",
    label: "globe"
  }, {
    value: "fa fa-google",
    label: "google"
  }, {
    value: "fa fa-google-plus",
    label: "google-plus"
  }, {
    value: "fa fa-google-plus-circle",
    label: "google-plus-circle"
  }, {
    value: "fa fa-google-plus-official",
    label: "google-plus-official"
  }, {
    value: "fa fa-google-plus-square",
    label: "google-plus-square"
  }, {
    value: "fa fa-google-wallet",
    label: "google-wallet"
  }, {
    value: "fa fa-graduation-cap",
    label: "graduation-cap"
  }, {
    value: "fa fa-gratipay",
    label: "gratipay"
  }, {
    value: "fa fa-grav",
    label: "grav"
  }, {
    value: "fa fa-group",
    label: "group"
  }, {
    value: "fa fa-h-square",
    label: "h-square"
  }, {
    value: "fa fa-hacker-news",
    label: "hacker-news"
  }, {
    value: "fa fa-hand-grab-o",
    label: "hand-grab-o"
  }, {
    value: "fa fa-hand-lizard-o",
    label: "hand-lizard-o"
  }, {
    value: "fa fa-hand-o-down",
    label: "hand-o-down"
  }, {
    value: "fa fa-hand-o-left",
    label: "hand-o-left"
  }, {
    value: "fa fa-hand-o-right",
    label: "hand-o-right"
  }, {
    value: "fa fa-hand-o-up",
    label: "hand-o-up"
  }, {
    value: "fa fa-hand-paper-o",
    label: "hand-paper-o"
  }, {
    value: "fa fa-hand-peace-o",
    label: "hand-peace-o"
  }, {
    value: "fa fa-hand-pointer-o",
    label: "hand-pointer-o"
  }, {
    value: "fa fa-hand-rock-o",
    label: "hand-rock-o"
  }, {
    value: "fa fa-hand-scissors-o",
    label: "hand-scissors-o"
  }, {
    value: "fa fa-hand-spock-o",
    label: "hand-spock-o"
  }, {
    value: "fa fa-hand-stop-o",
    label: "hand-stop-o"
  }, {
    value: "fa fa-handshake-o",
    label: "handshake-o"
  }, {
    value: "fa fa-hard-of-hearing",
    label: "hard-of-hearing"
  }, {
    value: "fa fa-hashtag",
    label: "hashtag"
  }, {
    value: "fa fa-hdd-o",
    label: "hdd-o"
  }, {
    value: "fa fa-header",
    label: "header"
  }, {
    value: "fa fa-headphones",
    label: "headphones"
  }, {
    value: "fa fa-heart",
    label: "heart"
  }, {
    value: "fa fa-heart-o",
    label: "heart-o"
  }, {
    value: "fa fa-heartbeat",
    label: "heartbeat"
  }, {
    value: "fa fa-history",
    label: "history"
  }, {
    value: "fa fa-home",
    label: "home"
  }, {
    value: "fa fa-hospital-o",
    label: "hospital-o"
  }, {
    value: "fa fa-hotel",
    label: "hotel"
  }, {
    value: "fa fa-hourglass",
    label: "hourglass"
  }, {
    value: "fa fa-hourglass-1",
    label: "hourglass-1"
  }, {
    value: "fa fa-hourglass-2",
    label: "hourglass-2"
  }, {
    value: "fa fa-hourglass-3",
    label: "hourglass-3"
  }, {
    value: "fa fa-hourglass-end",
    label: "hourglass-end"
  }, {
    value: "fa fa-hourglass-half",
    label: "hourglass-half"
  }, {
    value: "fa fa-hourglass-o",
    label: "hourglass-o"
  }, {
    value: "fa fa-hourglass-start",
    label: "hourglass-start"
  }, {
    value: "fa fa-houzz",
    label: "houzz"
  }, {
    value: "fa fa-html5",
    label: "html5"
  }, {
    value: "fa fa-i-cursor",
    label: "i-cursor"
  }, {
    value: "fa fa-id-badge",
    label: "id-badge"
  }, {
    value: "fa fa-id-card",
    label: "id-card"
  }, {
    value: "fa fa-id-card-o",
    label: "id-card-o"
  }, {
    value: "fa fa-ils",
    label: "ils"
  }, {
    value: "fa fa-image",
    label: "image"
  }, {
    value: "fa fa-imdb",
    label: "imdb"
  }, {
    value: "fa fa-inbox",
    label: "inbox"
  }, {
    value: "fa fa-indent",
    label: "indent"
  }, {
    value: "fa fa-industry",
    label: "industry"
  }, {
    value: "fa fa-info",
    label: "info"
  }, {
    value: "fa fa-info-circle",
    label: "info-circle"
  }, {
    value: "fa fa-inr",
    label: "inr"
  }, {
    value: "fa fa-instagram",
    label: "instagram"
  }, {
    value: "fa fa-institution",
    label: "institution"
  }, {
    value: "fa fa-internet-explorer",
    label: "internet-explorer"
  }, {
    value: "fa fa-intersex",
    label: "intersex"
  }, {
    value: "fa fa-ioxhost",
    label: "ioxhost"
  }, {
    value: "fa fa-italic",
    label: "italic"
  }, {
    value: "fa fa-joomla",
    label: "joomla"
  }, {
    value: "fa fa-jpy",
    label: "jpy"
  }, {
    value: "fa fa-jsfiddle",
    label: "jsfiddle"
  }, {
    value: "fa fa-key",
    label: "key"
  }, {
    value: "fa fa-keyboard-o",
    label: "keyboard-o"
  }, {
    value: "fa fa-krw",
    label: "krw"
  }, {
    value: "fa fa-language",
    label: "language"
  }, {
    value: "fa fa-laptop",
    label: "laptop"
  }, {
    value: "fa fa-lastfm",
    label: "lastfm"
  }, {
    value: "fa fa-lastfm-square",
    label: "lastfm-square"
  }, {
    value: "fa fa-leaf",
    label: "leaf"
  }, {
    value: "fa fa-leanpub",
    label: "leanpub"
  }, {
    value: "fa fa-legal",
    label: "legal"
  }, {
    value: "fa fa-lemon-o",
    label: "lemon-o"
  }, {
    value: "fa fa-level-down",
    label: "level-down"
  }, {
    value: "fa fa-level-up",
    label: "level-up"
  }, {
    value: "fa fa-life-bouy",
    label: "life-bouy"
  }, {
    value: "fa fa-life-buoy",
    label: "life-buoy"
  }, {
    value: "fa fa-life-ring",
    label: "life-ring"
  }, {
    value: "fa fa-life-saver",
    label: "life-saver"
  }, {
    value: "fa fa-lightbulb-o",
    label: "lightbulb-o"
  }, {
    value: "fa fa-line-chart",
    label: "line-chart"
  }, {
    value: "fa fa-link",
    label: "link"
  }, {
    value: "fa fa-linkedin",
    label: "linkedin"
  }, {
    value: "fa fa-linkedin-square",
    label: "linkedin-square"
  }, {
    value: "fa fa-linode",
    label: "linode"
  }, {
    value: "fa fa-linux",
    label: "linux"
  }, {
    value: "fa fa-list",
    label: "list"
  }, {
    value: "fa fa-list-alt",
    label: "list-alt"
  }, {
    value: "fa fa-list-ol",
    label: "list-ol"
  }, {
    value: "fa fa-list-ul",
    label: "list-ul"
  }, {
    value: "fa fa-location-arrow",
    label: "location-arrow"
  }, {
    value: "fa fa-lock",
    label: "lock"
  }, {
    value: "fa fa-long-arrow-down",
    label: "long-arrow-down"
  }, {
    value: "fa fa-long-arrow-left",
    label: "long-arrow-left"
  }, {
    value: "fa fa-long-arrow-right",
    label: "long-arrow-right"
  }, {
    value: "fa fa-long-arrow-up",
    label: "long-arrow-up"
  }, {
    value: "fa fa-low-vision",
    label: "low-vision"
  }, {
    value: "fa fa-magic",
    label: "magic"
  }, {
    value: "fa fa-magnet",
    label: "magnet"
  }, {
    value: "fa fa-mail-forward",
    label: "mail-forward"
  }, {
    value: "fa fa-mail-reply",
    label: "mail-reply"
  }, {
    value: "fa fa-mail-reply-all",
    label: "mail-reply-all"
  }, {
    value: "fa fa-male",
    label: "male"
  }, {
    value: "fa fa-map",
    label: "map"
  }, {
    value: "fa fa-map-marker",
    label: "map-marker"
  }, {
    value: "fa fa-map-o",
    label: "map-o"
  }, {
    value: "fa fa-map-pin",
    label: "map-pin"
  }, {
    value: "fa fa-map-signs",
    label: "map-signs"
  }, {
    value: "fa fa-mars",
    label: "mars"
  }, {
    value: "fa fa-mars-double",
    label: "mars-double"
  }, {
    value: "fa fa-mars-stroke",
    label: "mars-stroke"
  }, {
    value: "fa fa-mars-stroke-h",
    label: "mars-stroke-h"
  }, {
    value: "fa fa-mars-stroke-v",
    label: "mars-stroke-v"
  }, {
    value: "fa fa-maxcdn",
    label: "maxcdn"
  }, {
    value: "fa fa-meanpath",
    label: "meanpath"
  }, {
    value: "fa fa-medium",
    label: "medium"
  }, {
    value: "fa fa-medkit",
    label: "medkit"
  }, {
    value: "fa fa-meetup",
    label: "meetup"
  }, {
    value: "fa fa-meh-o",
    label: "meh-o"
  }, {
    value: "fa fa-mercury",
    label: "mercury"
  }, {
    value: "fa fa-microchip",
    label: "microchip"
  }, {
    value: "fa fa-microphone",
    label: "microphone"
  }, {
    value: "fa fa-microphone-slash",
    label: "microphone-slash"
  }, {
    value: "fa fa-minus",
    label: "minus"
  }, {
    value: "fa fa-minus-circle",
    label: "minus-circle"
  }, {
    value: "fa fa-minus-square",
    label: "minus-square"
  }, {
    value: "fa fa-minus-square-o",
    label: "minus-square-o"
  }, {
    value: "fa fa-mixcloud",
    label: "mixcloud"
  }, {
    value: "fa fa-mobile",
    label: "mobile"
  }, {
    value: "fa fa-mobile-phone",
    label: "mobile-phone"
  }, {
    value: "fa fa-modx",
    label: "modx"
  }, {
    value: "fa fa-money",
    label: "money"
  }, {
    value: "fa fa-moon-o",
    label: "moon-o"
  }, {
    value: "fa fa-mortar-board",
    label: "mortar-board"
  }, {
    value: "fa fa-motorcycle",
    label: "motorcycle"
  }, {
    value: "fa fa-mouse-pointer",
    label: "mouse-pointer"
  }, {
    value: "fa fa-music",
    label: "music"
  }, {
    value: "fa fa-navicon",
    label: "navicon"
  }, {
    value: "fa fa-neuter",
    label: "neuter"
  }, {
    value: "fa fa-newspaper-o",
    label: "newspaper-o"
  }, {
    value: "fa fa-object-group",
    label: "object-group"
  }, {
    value: "fa fa-object-ungroup",
    label: "object-ungroup"
  }, {
    value: "fa fa-odnoklassniki",
    label: "odnoklassniki"
  }, {
    value: "fa fa-odnoklassniki-square",
    label: "odnoklassniki-square"
  }, {
    value: "fa fa-opencart",
    label: "opencart"
  }, {
    value: "fa fa-openid",
    label: "openid"
  }, {
    value: "fa fa-opera",
    label: "opera"
  }, {
    value: "fa fa-optin-monster",
    label: "optin-monster"
  }, {
    value: "fa fa-outdent",
    label: "outdent"
  }, {
    value: "fa fa-pagelines",
    label: "pagelines"
  }, {
    value: "fa fa-paint-brush",
    label: "paint-brush"
  }, {
    value: "fa fa-paper-plane",
    label: "paper-plane"
  }, {
    value: "fa fa-paper-plane-o",
    label: "paper-plane-o"
  }, {
    value: "fa fa-paperclip",
    label: "paperclip"
  }, {
    value: "fa fa-paragraph",
    label: "paragraph"
  }, {
    value: "fa fa-paste",
    label: "paste"
  }, {
    value: "fa fa-pause",
    label: "pause"
  }, {
    value: "fa fa-pause-circle",
    label: "pause-circle"
  }, {
    value: "fa fa-pause-circle-o",
    label: "pause-circle-o"
  }, {
    value: "fa fa-paw",
    label: "paw"
  }, {
    value: "fa fa-paypal",
    label: "paypal"
  }, {
    value: "fa fa-pencil",
    label: "pencil"
  }, {
    value: "fa fa-pencil-square",
    label: "pencil-square"
  }, {
    value: "fa fa-pencil-square-o",
    label: "pencil-square-o"
  }, {
    value: "fa fa-percent",
    label: "percent"
  }, {
    value: "fa fa-phone",
    label: "phone"
  }, {
    value: "fa fa-phone-square",
    label: "phone-square"
  }, {
    value: "fa fa-photo",
    label: "photo"
  }, {
    value: "fa fa-picture-o",
    label: "picture-o"
  }, {
    value: "fa fa-pie-chart",
    label: "pie-chart"
  }, {
    value: "fa fa-pied-piper",
    label: "pied-piper"
  }, {
    value: "fa fa-pied-piper-alt",
    label: "pied-piper-alt"
  }, {
    value: "fa fa-pied-piper-pp",
    label: "pied-piper-pp"
  }, {
    value: "fa fa-pinterest",
    label: "pinterest"
  }, {
    value: "fa fa-pinterest-p",
    label: "pinterest-p"
  }, {
    value: "fa fa-pinterest-square",
    label: "pinterest-square"
  }, {
    value: "fa fa-plane",
    label: "plane"
  }, {
    value: "fa fa-play",
    label: "play"
  }, {
    value: "fa fa-play-circle",
    label: "play-circle"
  }, {
    value: "fa fa-play-circle-o",
    label: "play-circle-o"
  }, {
    value: "fa fa-plug",
    label: "plug"
  }, {
    value: "fa fa-plus",
    label: "plus"
  }, {
    value: "fa fa-plus-circle",
    label: "plus-circle"
  }, {
    value: "fa fa-plus-square",
    label: "plus-square"
  }, {
    value: "fa fa-plus-square-o",
    label: "plus-square-o"
  }, {
    value: "fa fa-podcast",
    label: "podcast"
  }, {
    value: "fa fa-power-off",
    label: "power-off"
  }, {
    value: "fa fa-print",
    label: "print"
  }, {
    value: "fa fa-product-hunt",
    label: "product-hunt"
  }, {
    value: "fa fa-pull-left",
    label: "pull-left"
  }, {
    value: "fa fa-pull-right",
    label: "pull-right"
  }, {
    value: "fa fa-puzzle-piece",
    label: "puzzle-piece"
  }, {
    value: "fa fa-qq",
    label: "qq"
  }, {
    value: "fa fa-qrcode",
    label: "qrcode"
  }, {
    value: "fa fa-question",
    label: "question"
  }, {
    value: "fa fa-question-circle",
    label: "question-circle"
  }, {
    value: "fa fa-question-circle-o",
    label: "question-circle-o"
  }, {
    value: "fa fa-quora",
    label: "quora"
  }, {
    value: "fa fa-quote-left",
    label: "quote-left"
  }, {
    value: "fa fa-quote-right",
    label: "quote-right"
  }, {
    value: "fa fa-ra",
    label: "ra"
  }, {
    value: "fa fa-random",
    label: "random"
  }, {
    value: "fa fa-ravelry",
    label: "ravelry"
  }, {
    value: "fa fa-rebel",
    label: "rebel"
  }, {
    value: "fa fa-recycle",
    label: "recycle"
  }, {
    value: "fa fa-reddit",
    label: "reddit"
  }, {
    value: "fa fa-reddit-alien",
    label: "reddit-alien"
  }, {
    value: "fa fa-reddit-square",
    label: "reddit-square"
  }, {
    value: "fa fa-refresh",
    label: "refresh"
  }, {
    value: "fa fa-registered",
    label: "registered"
  }, {
    value: "fa fa-remove",
    label: "remove"
  }, {
    value: "fa fa-renren",
    label: "renren"
  }, {
    value: "fa fa-reorder",
    label: "reorder"
  }, {
    value: "fa fa-repeat",
    label: "repeat"
  }, {
    value: "fa fa-reply",
    label: "reply"
  }, {
    value: "fa fa-reply-all",
    label: "reply-all"
  }, {
    value: "fa fa-resistance",
    label: "resistance"
  }, {
    value: "fa fa-retweet",
    label: "retweet"
  }, {
    value: "fa fa-rmb",
    label: "rmb"
  }, {
    value: "fa fa-road",
    label: "road"
  }, {
    value: "fa fa-rocket",
    label: "rocket"
  }, {
    value: "fa fa-rotate-left",
    label: "rotate-left"
  }, {
    value: "fa fa-rotate-right",
    label: "rotate-right"
  }, {
    value: "fa fa-rouble",
    label: "rouble"
  }, {
    value: "fa fa-rss",
    label: "rss"
  }, {
    value: "fa fa-rss-square",
    label: "rss-square"
  }, {
    value: "fa fa-rub",
    label: "rub"
  }, {
    value: "fa fa-ruble",
    label: "ruble"
  }, {
    value: "fa fa-rupee",
    label: "rupee"
  }, {
    value: "fa fa-s15",
    label: "s15"
  }, {
    value: "fa fa-safari",
    label: "safari"
  }, {
    value: "fa fa-save",
    label: "save"
  }, {
    value: "fa fa-scissors",
    label: "scissors"
  }, {
    value: "fa fa-scribd",
    label: "scribd"
  }, {
    value: "fa fa-search",
    label: "search"
  }, {
    value: "fa fa-search-minus",
    label: "search-minus"
  }, {
    value: "fa fa-search-plus",
    label: "search-plus"
  }, {
    value: "fa fa-sellsy",
    label: "sellsy"
  }, {
    value: "fa fa-send",
    label: "send"
  }, {
    value: "fa fa-send-o",
    label: "send-o"
  }, {
    value: "fa fa-server",
    label: "server"
  }, {
    value: "fa fa-share",
    label: "share"
  }, {
    value: "fa fa-share-alt",
    label: "share-alt"
  }, {
    value: "fa fa-share-alt-square",
    label: "share-alt-square"
  }, {
    value: "fa fa-share-square",
    label: "share-square"
  }, {
    value: "fa fa-share-square-o",
    label: "share-square-o"
  }, {
    value: "fa fa-shekel",
    label: "shekel"
  }, {
    value: "fa fa-sheqel",
    label: "sheqel"
  }, {
    value: "fa fa-shield",
    label: "shield"
  }, {
    value: "fa fa-ship",
    label: "ship"
  }, {
    value: "fa fa-shirtsinbulk",
    label: "shirtsinbulk"
  }, {
    value: "fa fa-shopping-bag",
    label: "shopping-bag"
  }, {
    value: "fa fa-shopping-basket",
    label: "shopping-basket"
  }, {
    value: "fa fa-shopping-cart",
    label: "shopping-cart"
  }, {
    value: "fa fa-shower",
    label: "shower"
  }, {
    value: "fa fa-sign-in",
    label: "sign-in"
  }, {
    value: "fa fa-sign-language",
    label: "sign-language"
  }, {
    value: "fa fa-sign-out",
    label: "sign-out"
  }, {
    value: "fa fa-signal",
    label: "signal"
  }, {
    value: "fa fa-signing",
    label: "signing"
  }, {
    value: "fa fa-simplybuilt",
    label: "simplybuilt"
  }, {
    value: "fa fa-sitemap",
    label: "sitemap"
  }, {
    value: "fa fa-skyatlas",
    label: "skyatlas"
  }, {
    value: "fa fa-skype",
    label: "skype"
  }, {
    value: "fa fa-slack",
    label: "slack"
  }, {
    value: "fa fa-sliders",
    label: "sliders"
  }, {
    value: "fa fa-slideshare",
    label: "slideshare"
  }, {
    value: "fa fa-smile-o",
    label: "smile-o"
  }, {
    value: "fa fa-snapchat",
    label: "snapchat"
  }, {
    value: "fa fa-snapchat-ghost",
    label: "snapchat-ghost"
  }, {
    value: "fa fa-snapchat-square",
    label: "snapchat-square"
  }, {
    value: "fa fa-snowflake-o",
    label: "snowflake-o"
  }, {
    value: "fa fa-soccer-ball-o",
    label: "soccer-ball-o"
  }, {
    value: "fa fa-sort",
    label: "sort"
  }, {
    value: "fa fa-sort-alpha-asc",
    label: "sort-alpha-asc"
  }, {
    value: "fa fa-sort-alpha-desc",
    label: "sort-alpha-desc"
  }, {
    value: "fa fa-sort-amount-asc",
    label: "sort-amount-asc"
  }, {
    value: "fa fa-sort-amount-desc",
    label: "sort-amount-desc"
  }, {
    value: "fa fa-sort-asc",
    label: "sort-asc"
  }, {
    value: "fa fa-sort-desc",
    label: "sort-desc"
  }, {
    value: "fa fa-sort-down",
    label: "sort-down"
  }, {
    value: "fa fa-sort-numeric-asc",
    label: "sort-numeric-asc"
  }, {
    value: "fa fa-sort-numeric-desc",
    label: "sort-numeric-desc"
  }, {
    value: "fa fa-sort-up",
    label: "sort-up"
  }, {
    value: "fa fa-soundcloud",
    label: "soundcloud"
  }, {
    value: "fa fa-space-shuttle",
    label: "space-shuttle"
  }, {
    value: "fa fa-spinner",
    label: "spinner"
  }, {
    value: "fa fa-spoon",
    label: "spoon"
  }, {
    value: "fa fa-spotify",
    label: "spotify"
  }, {
    value: "fa fa-square",
    label: "square"
  }, {
    value: "fa fa-square-o",
    label: "square-o"
  }, {
    value: "fa fa-stack-exchange",
    label: "stack-exchange"
  }, {
    value: "fa fa-stack-overflow",
    label: "stack-overflow"
  }, {
    value: "fa fa-star",
    label: "star"
  }, {
    value: "fa fa-star-half",
    label: "star-half"
  }, {
    value: "fa fa-star-half-empty",
    label: "star-half-empty"
  }, {
    value: "fa fa-star-half-full",
    label: "star-half-full"
  }, {
    value: "fa fa-star-half-o",
    label: "star-half-o"
  }, {
    value: "fa fa-star-o",
    label: "star-o"
  }, {
    value: "fa fa-steam",
    label: "steam"
  }, {
    value: "fa fa-steam-square",
    label: "steam-square"
  }, {
    value: "fa fa-step-backward",
    label: "step-backward"
  }, {
    value: "fa fa-step-forward",
    label: "step-forward"
  }, {
    value: "fa fa-stethoscope",
    label: "stethoscope"
  }, {
    value: "fa fa-sticky-note",
    label: "sticky-note"
  }, {
    value: "fa fa-sticky-note-o",
    label: "sticky-note-o"
  }, {
    value: "fa fa-stop",
    label: "stop"
  }, {
    value: "fa fa-stop-circle",
    label: "stop-circle"
  }, {
    value: "fa fa-stop-circle-o",
    label: "stop-circle-o"
  }, {
    value: "fa fa-street-view",
    label: "street-view"
  }, {
    value: "fa fa-strikethrough",
    label: "strikethrough"
  }, {
    value: "fa fa-stumbleupon",
    label: "stumbleupon"
  }, {
    value: "fa fa-stumbleupon-circle",
    label: "stumbleupon-circle"
  }, {
    value: "fa fa-subscript",
    label: "subscript"
  }, {
    value: "fa fa-subway",
    label: "subway"
  }, {
    value: "fa fa-suitcase",
    label: "suitcase"
  }, {
    value: "fa fa-sun-o",
    label: "sun-o"
  }, {
    value: "fa fa-superpowers",
    label: "superpowers"
  }, {
    value: "fa fa-superscript",
    label: "superscript"
  }, {
    value: "fa fa-support",
    label: "support"
  }, {
    value: "fa fa-table",
    label: "table"
  }, {
    value: "fa fa-tablet",
    label: "tablet"
  }, {
    value: "fa fa-tachometer",
    label: "tachometer"
  }, {
    value: "fa fa-tag",
    label: "tag"
  }, {
    value: "fa fa-tags",
    label: "tags"
  }, {
    value: "fa fa-tasks",
    label: "tasks"
  }, {
    value: "fa fa-taxi",
    label: "taxi"
  }, {
    value: "fa fa-telegram",
    label: "telegram"
  }, {
    value: "fa fa-television",
    label: "television"
  }, {
    value: "fa fa-tencent-weibo",
    label: "tencent-weibo"
  }, {
    value: "fa fa-terminal",
    label: "terminal"
  }, {
    value: "fa fa-text-height",
    label: "text-height"
  }, {
    value: "fa fa-text-width",
    label: "text-width"
  }, {
    value: "fa fa-th",
    label: "th"
  }, {
    value: "fa fa-th-large",
    label: "th-large"
  }, {
    value: "fa fa-th-list",
    label: "th-list"
  }, {
    value: "fa fa-themeisle",
    label: "themeisle"
  }, {
    value: "fa fa-thermometer",
    label: "thermometer"
  }, {
    value: "fa fa-thermometer-0",
    label: "thermometer-0"
  }, {
    value: "fa fa-thermometer-1",
    label: "thermometer-1"
  }, {
    value: "fa fa-thermometer-2",
    label: "thermometer-2"
  }, {
    value: "fa fa-thermometer-3",
    label: "thermometer-3"
  }, {
    value: "fa fa-thermometer-4",
    label: "thermometer-4"
  }, {
    value: "fa fa-thermometer-empty",
    label: "thermometer-empty"
  }, {
    value: "fa fa-thermometer-full",
    label: "thermometer-full"
  }, {
    value: "fa fa-thermometer-half",
    label: "thermometer-half"
  }, {
    value: "fa fa-thermometer-quarter",
    label: "thermometer-quarter"
  }, {
    value: "fa fa-thermometer-three-quarters",
    label: "thermometer-three-quarters"
  }, {
    value: "fa fa-thumb-tack",
    label: "thumb-tack"
  }, {
    value: "fa fa-thumbs-down",
    label: "thumbs-down"
  }, {
    value: "fa fa-thumbs-o-down",
    label: "thumbs-o-down"
  }, {
    value: "fa fa-thumbs-o-up",
    label: "thumbs-o-up"
  }, {
    value: "fa fa-thumbs-up",
    label: "thumbs-up"
  }, {
    value: "fa fa-ticket",
    label: "ticket"
  }, {
    value: "fa fa-times",
    label: "times"
  }, {
    value: "fa fa-times-circle",
    label: "times-circle"
  }, {
    value: "fa fa-times-circle-o",
    label: "times-circle-o"
  }, {
    value: "fa fa-times-rectangle",
    label: "times-rectangle"
  }, {
    value: "fa fa-times-rectangle-o",
    label: "times-rectangle-o"
  }, {
    value: "fa fa-tint",
    label: "tint"
  }, {
    value: "fa fa-toggle-down",
    label: "toggle-down"
  }, {
    value: "fa fa-toggle-left",
    label: "toggle-left"
  }, {
    value: "fa fa-toggle-off",
    label: "toggle-off"
  }, {
    value: "fa fa-toggle-on",
    label: "toggle-on"
  }, {
    value: "fa fa-toggle-right",
    label: "toggle-right"
  }, {
    value: "fa fa-toggle-up",
    label: "toggle-up"
  }, {
    value: "fa fa-trademark",
    label: "trademark"
  }, {
    value: "fa fa-train",
    label: "train"
  }, {
    value: "fa fa-transgender",
    label: "transgender"
  }, {
    value: "fa fa-transgender-alt",
    label: "transgender-alt"
  }, {
    value: "fa fa-trash",
    label: "trash"
  }, {
    value: "fa fa-trash-o",
    label: "trash-o"
  }, {
    value: "fa fa-tree",
    label: "tree"
  }, {
    value: "fa fa-trello",
    label: "trello"
  }, {
    value: "fa fa-tripadvisor",
    label: "tripadvisor"
  }, {
    value: "fa fa-trophy",
    label: "trophy"
  }, {
    value: "fa fa-truck",
    label: "truck"
  }, {
    value: "fa fa-try",
    label: "try"
  }, {
    value: "fa fa-tty",
    label: "tty"
  }, {
    value: "fa fa-tumblr",
    label: "tumblr"
  }, {
    value: "fa fa-tumblr-square",
    label: "tumblr-square"
  }, {
    value: "fa fa-turkish-lira",
    label: "turkish-lira"
  }, {
    value: "fa fa-tv",
    label: "tv"
  }, {
    value: "fa fa-twitch",
    label: "twitch"
  }, {
    value: "fa fa-twitter",
    label: "twitter"
  }, {
    value: "fa fa-twitter-square",
    label: "twitter-square"
  }, {
    value: "fa fa-umbrella",
    label: "umbrella"
  }, {
    value: "fa fa-underline",
    label: "underline"
  }, {
    value: "fa fa-undo",
    label: "undo"
  }, {
    value: "fa fa-universal-access",
    label: "universal-access"
  }, {
    value: "fa fa-university",
    label: "university"
  }, {
    value: "fa fa-unlink",
    label: "unlink"
  }, {
    value: "fa fa-unlock",
    label: "unlock"
  }, {
    value: "fa fa-unlock-alt",
    label: "unlock-alt"
  }, {
    value: "fa fa-unsorted",
    label: "unsorted"
  }, {
    value: "fa fa-upload",
    label: "upload"
  }, {
    value: "fa fa-usb",
    label: "usb"
  }, {
    value: "fa fa-usd",
    label: "usd"
  }, {
    value: "fa fa-user",
    label: "user"
  }, {
    value: "fa fa-user-circle",
    label: "user-circle"
  }, {
    value: "fa fa-user-circle-o",
    label: "user-circle-o"
  }, {
    value: "fa fa-user-md",
    label: "user-md"
  }, {
    value: "fa fa-user-o",
    label: "user-o"
  }, {
    value: "fa fa-user-plus",
    label: "user-plus"
  }, {
    value: "fa fa-user-secret",
    label: "user-secret"
  }, {
    value: "fa fa-user-times",
    label: "user-times"
  }, {
    value: "fa fa-users",
    label: "users"
  }, {
    value: "fa fa-vcard",
    label: "vcard"
  }, {
    value: "fa fa-vcard-o",
    label: "vcard-o"
  }, {
    value: "fa fa-venus",
    label: "venus"
  }, {
    value: "fa fa-venus-double",
    label: "venus-double"
  }, {
    value: "fa fa-venus-mars",
    label: "venus-mars"
  }, {
    value: "fa fa-viacoin",
    label: "viacoin"
  }, {
    value: "fa fa-viadeo",
    label: "viadeo"
  }, {
    value: "fa fa-viadeo-square",
    label: "viadeo-square"
  }, {
    value: "fa fa-video-camera",
    label: "video-camera"
  }, {
    value: "fa fa-vimeo",
    label: "vimeo"
  }, {
    value: "fa fa-vimeo-square",
    label: "vimeo-square"
  }, {
    value: "fa fa-vine",
    label: "vine"
  }, {
    value: "fa fa-vk",
    label: "vk"
  }, {
    value: "fa fa-volume-control-phone",
    label: "volume-control-phone"
  }, {
    value: "fa fa-volume-down",
    label: "volume-down"
  }, {
    value: "fa fa-volume-off",
    label: "volume-off"
  }, {
    value: "fa fa-volume-up",
    label: "volume-up"
  }, {
    value: "fa fa-warning",
    label: "warning"
  }, {
    value: "fa fa-wechat",
    label: "wechat"
  }, {
    value: "fa fa-weibo",
    label: "weibo"
  }, {
    value: "fa fa-weixin",
    label: "weixin"
  }, {
    value: "fa fa-whatsapp",
    label: "whatsapp"
  }, {
    value: "fa fa-wheelchair",
    label: "wheelchair"
  }, {
    value: "fa fa-wheelchair-alt",
    label: "wheelchair-alt"
  }, {
    value: "fa fa-wifi",
    label: "wifi"
  }, {
    value: "fa fa-wikipedia-w",
    label: "wikipedia-w"
  }, {
    value: "fa fa-window-close",
    label: "window-close"
  }, {
    value: "fa fa-window-close-o",
    label: "window-close-o"
  }, {
    value: "fa fa-window-maximize",
    label: "window-maximize"
  }, {
    value: "fa fa-window-minimize",
    label: "window-minimize"
  }, {
    value: "fa fa-window-restore",
    label: "window-restore"
  }, {
    value: "fa fa-windows",
    label: "windows"
  }, {
    value: "fa fa-won",
    label: "won"
  }, {
    value: "fa fa-wordpress",
    label: "wordpress"
  }, {
    value: "fa fa-wpbeginner",
    label: "wpbeginner"
  }, {
    value: "fa fa-wpexplorer",
    label: "wpexplorer"
  }, {
    value: "fa fa-wpforms",
    label: "wpforms"
  }, {
    value: "fa fa-wrench",
    label: "wrench"
  }, {
    value: "fa fa-xing",
    label: "xing"
  }, {
    value: "fa fa-xing-square",
    label: "xing-square"
  }, {
    value: "fa fa-y-combinator",
    label: "y-combinator"
  }, {
    value: "fa fa-y-combinator-square",
    label: "y-combinator-square"
  }, {
    value: "fa fa-yahoo",
    label: "yahoo"
  }, {
    value: "fa fa-yc",
    label: "yc"
  }, {
    value: "fa fa-yc-square",
    label: "yc-square"
  }, {
    value: "fa fa-yelp",
    label: "yelp"
  }, {
    value: "fa fa-yen",
    label: "yen"
  }, {
    value: "fa fa-yoast",
    label: "yoast"
  }, {
    value: "fa fa-youtube",
    label: "youtube"
  }, {
    value: "fa fa-youtube-play",
    label: "youtube-play"
  }, {
    value: "fa fa-youtube-square",
    label: "youtube-square"
  }];
  return wp.element.createElement(SelectControl, {
    label: __("Choose Icon"),
    options: ICONS,
    value: icon,
    onChange: onChangeIcon
  });
}

/***/ })
/******/ ]);