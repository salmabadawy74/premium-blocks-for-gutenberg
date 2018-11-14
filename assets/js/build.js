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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dualHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pricingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return maps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return countUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontAwesomeEnabled; });
//Blocks Keys
var _PremiumBlocksSetting = PremiumBlocksSettings.activeBlocks,
    banner = _PremiumBlocksSetting.banner,
    dualHeading = _PremiumBlocksSetting.dualHeading,
    pricingTable = _PremiumBlocksSetting.pricingTable,
    maps = _PremiumBlocksSetting.maps,
    testimonial = _PremiumBlocksSetting.testimonial,
    countUp = _PremiumBlocksSetting.countUp;

//Plugin Config Keys


var _FontAwesomeConfig = FontAwesomeConfig,
    FontAwesomeEnabled = _FontAwesomeConfig.FontAwesomeEnabled;


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


if (__WEBPACK_IMPORTED_MODULE_0__settings__["d" /* dualHeading */]) {
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


if (__WEBPACK_IMPORTED_MODULE_0__settings__["b" /* banner */]) {
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


if (__WEBPACK_IMPORTED_MODULE_0__settings__["f" /* pricingTable */]) {
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


if (__WEBPACK_IMPORTED_MODULE_0__settings__["e" /* maps */]) {
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






if (__WEBPACK_IMPORTED_MODULE_3__settings__["g" /* testimonial */]) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_icon__ = __webpack_require__(11);



if (__WEBPACK_IMPORTED_MODULE_0__settings__["c" /* countUp */]) {
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
        type: "string",
        default: "Prefix"
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
        type: "string",
        default: "Prefix"
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
        label: "Icon"
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
          wp.element.createElement(SelectControl, {
            label: __("Direction"),
            options: DIRECTION,
            value: flexDir,
            onChange: function onChange(newDir) {
              return setAttributes({ flexDir: newDir });
            }
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
          "icon" === icon && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_icon__["a" /* default */], {
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
        titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && wp.element.createElement(
          "h3",
          {
            className: className + "__title",
            style: {
              fontSize: titleSize + "px",
              marginTop: titleT + "px",
              marginBottom: titleB + "px",
              color: titleColor,
              fontWeight: titleWeight,
              alignSelf: selfAlign
            }
          },
          titleTxt
        ),
        wp.element.createElement(
          "div",
          {
            className: className + "__info",
            style: {
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && wp.element.createElement(
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
            { className: className + "__desc" },
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
        titleCheck && ("column" === flexDir || "column-reverse" === flexDir) && wp.element.createElement(
          "h3",
          {
            className: className + "__title",
            style: {
              fontSize: titleSize + "px",
              marginTop: titleT + "px",
              marginBottom: titleB + "px",
              color: titleColor,
              fontWeight: titleWeight,
              alignSelf: selfAlign
            }
          },
          titleTxt
        ),
        wp.element.createElement(
          "div",
          {
            className: className + "__info",
            style: {
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          titleCheck && ("row" === flexDir || "row-reverse" === flexDir) && wp.element.createElement(
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
            { className: className + "__desc" },
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
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_settings__ = __webpack_require__(0);
var __ = wp.i18n.__;
var SelectControl = wp.components.SelectControl;


function PremiumIcon(props) {
  var icon = props.icon,
      _props$onChangeIcon = props.onChangeIcon,
      onChangeIcon = _props$onChangeIcon === undefined ? function () {} : _props$onChangeIcon;
  //Dashicons

  var DASHICONS = [{
    value: "",
    label: "none"
  }, {
    value: "dashicons dashicons-menu",
    label: wp.element.createElement(
      "p",
      null,
      "\uF333 dashicons-menu"
    )
  }, {
    value: "dashicons dashicons-admin-site",
    label: wp.element.createElement(
      "p",
      null,
      "\uF319 dashicons-admin-site"
    )
  }, {
    value: "dashicons dashicons-dashboard",
    label: wp.element.createElement(
      "p",
      null,
      "\uF226 dashicons-dashboard"
    )
  }, {
    value: "dashicons dashicons-admin-post",
    label: wp.element.createElement(
      "p",
      null,
      "\uF109 dashicons-admin-post"
    )
  }, {
    value: "dashicons dashicons-admin-media",
    label: wp.element.createElement(
      "p",
      null,
      "\uF104 dashicons-admin-media"
    )
  }, {
    value: "dashicons dashicons-admin-links",
    label: wp.element.createElement(
      "p",
      null,
      "\uF103 dashicons-admin-links"
    )
  }, {
    value: "dashicons dashicons-admin-page",
    label: wp.element.createElement(
      "p",
      null,
      "\uF105 dashicons-admin-page"
    )
  }, {
    value: "dashicons dashicons-admin-comments",
    label: wp.element.createElement(
      "p",
      null,
      "\uF101 dashicons-admin-comments"
    )
  }, {
    value: "dashicons dashicons-admin-appearance",
    label: wp.element.createElement(
      "p",
      null,
      "\uF100 dashicons-admin-appearance"
    )
  }, {
    value: "dashicons dashicons-admin-plugins",
    label: wp.element.createElement(
      "p",
      null,
      "\uF106 dashicons-admin-plugins"
    )
  }, {
    value: "dashicons dashicons-admin-users",
    label: wp.element.createElement(
      "p",
      null,
      "\uF110 dashicons-admin-users"
    )
  }, {
    value: "dashicons dashicons-admin-tools",
    label: wp.element.createElement(
      "p",
      null,
      "\uF107 dashicons-admin-tools"
    )
  }, {
    value: "dashicons dashicons-admin-settings",
    label: wp.element.createElement(
      "p",
      null,
      "\uF108 dashicons-admin-settings"
    )
  }, {
    value: "dashicons dashicons-admin-network",
    label: wp.element.createElement(
      "p",
      null,
      "\uF112 dashicons-admin-network"
    )
  }, {
    value: "dashicons dashicons-admin-home",
    label: wp.element.createElement(
      "p",
      null,
      "\uF102 dashicons-admin-home"
    )
  }, {
    value: "dashicons dashicons-admin-generic",
    label: wp.element.createElement(
      "p",
      null,
      "\uF111 dashicons-admin-generic"
    )
  }, {
    value: "dashicons dashicons-admin-collapse",
    label: wp.element.createElement(
      "p",
      null,
      "\uF148 dashicons-admin-collapse"
    )
  }, {
    value: "dashicons dashicons-filter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF536 dashicons-filter"
    )
  }, {
    value: "dashicons dashicons-admin-customizer",
    label: wp.element.createElement(
      "p",
      null,
      "\uF540 dashicons-admin-customizer"
    )
  }, {
    value: "dashicons dashicons-admin-multisite",
    label: wp.element.createElement(
      "p",
      null,
      "\uF541 dashicons-admin-multisite"
    )
  }, {
    value: "dashicons dashicons-welcome-write-blog",
    label: wp.element.createElement(
      "p",
      null,
      "\uF119 dashicons-welcome-write-blog"
    )
  }, {
    value: "dashicons dashicons-welcome-add-page",
    label: wp.element.createElement(
      "p",
      null,
      "\uF133 dashicons-welcome-add-page"
    )
  }, {
    value: "dashicons dashicons-welcome-view-site",
    label: wp.element.createElement(
      "p",
      null,
      "\uF115 dashicons-welcome-view-site"
    )
  }, {
    value: "dashicons dashicons-welcome-widgets-menus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF116 dashicons-welcome-widgets-menus"
    )
  }, {
    value: "dashicons dashicons-welcome-comments",
    label: wp.element.createElement(
      "p",
      null,
      "\uF117 dashicons-welcome-comments"
    )
  }, {
    value: "dashicons dashicons-welcome-learn-more",
    label: wp.element.createElement(
      "p",
      null,
      "\uF118 dashicons-welcome-learn-more"
    )
  }, {
    value: "dashicons dashicons-format-aside",
    label: wp.element.createElement(
      "p",
      null,
      "\uF123 dashicons-format-aside"
    )
  }, {
    value: "dashicons dashicons-format-image",
    label: wp.element.createElement(
      "p",
      null,
      "\uF128 dashicons-format-image"
    )
  }, {
    value: "dashicons dashicons-format-gallery",
    label: wp.element.createElement(
      "p",
      null,
      "\uF161 dashicons-format-gallery"
    )
  }, {
    value: "dashicons dashicons-format-video",
    label: wp.element.createElement(
      "p",
      null,
      "\uF126 dashicons-format-video"
    )
  }, {
    value: "dashicons dashicons-format-status",
    label: wp.element.createElement(
      "p",
      null,
      "\uF130 dashicons-format-status"
    )
  }, {
    value: "dashicons dashicons-format-quote",
    label: wp.element.createElement(
      "p",
      null,
      "\uF122 dashicons-format-quote"
    )
  }, {
    value: "dashicons dashicons-format-chat",
    label: wp.element.createElement(
      "p",
      null,
      "\uF125 dashicons-format-chat"
    )
  }, {
    value: "dashicons dashicons-format-audio",
    label: wp.element.createElement(
      "p",
      null,
      "\uF127 dashicons-format-audio"
    )
  }, {
    value: "dashicons dashicons-camera",
    label: wp.element.createElement(
      "p",
      null,
      "\uF306 dashicons-camera"
    )
  }, {
    value: "dashicons dashicons-images-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF232 dashicons-images-alt"
    )
  }, {
    value: "dashicons dashicons-images-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF233 dashicons-images-alt2"
    )
  }, {
    value: "dashicons dashicons-video-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF234 dashicons-video-alt"
    )
  }, {
    value: "dashicons dashicons-video-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF235 dashicons-video-alt2"
    )
  }, {
    value: "dashicons dashicons-video-alt3",
    label: wp.element.createElement(
      "p",
      null,
      "\uF236 dashicons-video-alt3"
    )
  }, {
    value: "dashicons dashicons-media-archive",
    label: wp.element.createElement(
      "p",
      null,
      "\uF501 dashicons-media-archive"
    )
  }, {
    value: "dashicons dashicons-media-audio",
    label: wp.element.createElement(
      "p",
      null,
      "\uF500 dashicons-media-audio"
    )
  }, {
    value: "dashicons dashicons-media-code",
    label: wp.element.createElement(
      "p",
      null,
      "\uF499 dashicons-media-code"
    )
  }, {
    value: "dashicons dashicons-media-default",
    label: wp.element.createElement(
      "p",
      null,
      "\uF498 dashicons-media-default"
    )
  }, {
    value: "dashicons dashicons-media-document",
    label: wp.element.createElement(
      "p",
      null,
      "\uF497 dashicons-media-document"
    )
  }, {
    value: "dashicons dashicons-media-interactive",
    label: wp.element.createElement(
      "p",
      null,
      "\uF496 dashicons-media-interactive"
    )
  }, {
    value: "dashicons dashicons-media-spreadsheet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF495 dashicons-media-spreadsheet"
    )
  }, {
    value: "dashicons dashicons-media-text",
    label: wp.element.createElement(
      "p",
      null,
      "\uF491 dashicons-media-text"
    )
  }, {
    value: "dashicons dashicons-media-video",
    label: wp.element.createElement(
      "p",
      null,
      "\uF490 dashicons-media-video"
    )
  }, {
    value: "dashicons dashicons-playlist-audio",
    label: wp.element.createElement(
      "p",
      null,
      "\uF492 dashicons-playlist-audio"
    )
  }, {
    value: "dashicons dashicons-playlist-video",
    label: wp.element.createElement(
      "p",
      null,
      "\uF493 dashicons-playlist-video"
    )
  }, {
    value: "dashicons dashicons-controls-play",
    label: wp.element.createElement(
      "p",
      null,
      "\uF522 dashicons-controls-play"
    )
  }, {
    value: "dashicons dashicons-controls-pause",
    label: wp.element.createElement(
      "p",
      null,
      "\uF523 dashicons-controls-pause"
    )
  }, {
    value: "dashicons dashicons-controls-forward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF519 dashicons-controls-forward"
    )
  }, {
    value: "dashicons dashicons-controls-skipforward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF517 dashicons-controls-skipforward"
    )
  }, {
    value: "dashicons dashicons-controls-back",
    label: wp.element.createElement(
      "p",
      null,
      "\uF518 dashicons-controls-back"
    )
  }, {
    value: "dashicons dashicons-controls-skipback",
    label: wp.element.createElement(
      "p",
      null,
      "\uF516 dashicons-controls-skipback"
    )
  }, {
    value: "dashicons dashicons-controls-repeat",
    label: wp.element.createElement(
      "p",
      null,
      "\uF515 dashicons-controls-repeat"
    )
  }, {
    value: "dashicons dashicons-controls-volumeon",
    label: wp.element.createElement(
      "p",
      null,
      "\uF521 dashicons-controls-volumeon"
    )
  }, {
    value: "dashicons dashicons-controls-volumeoff",
    label: wp.element.createElement(
      "p",
      null,
      "\uF520 dashicons-controls-volumeoff"
    )
  }, {
    value: "dashicons dashicons-image-crop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF165 dashicons-image-crop"
    )
  }, {
    value: "dashicons dashicons-image-rotate",
    label: wp.element.createElement(
      "p",
      null,
      "\uF531 dashicons-image-rotate"
    )
  }, {
    value: "dashicons dashicons-image-rotate-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF166 dashicons-image-rotate-left"
    )
  }, {
    value: "dashicons dashicons-image-rotate-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF167 dashicons-image-rotate-right"
    )
  }, {
    value: "dashicons dashicons-image-flip-vertical",
    label: wp.element.createElement(
      "p",
      null,
      "\uF168 dashicons-image-flip-vertical"
    )
  }, {
    value: "dashicons dashicons-image-flip-horizontal",
    label: wp.element.createElement(
      "p",
      null,
      "\uF169 dashicons-image-flip-horizontal"
    )
  }, {
    value: "dashicons dashicons-image-filter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF533 dashicons-image-filter"
    )
  }, {
    value: "dashicons dashicons-undo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF171 dashicons-undo"
    )
  }, {
    value: "dashicons dashicons-redo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF172 dashicons-redo"
    )
  }, {
    value: "dashicons dashicons-editor-bold",
    label: wp.element.createElement(
      "p",
      null,
      "\uF200 dashicons-editor-bold"
    )
  }, {
    value: "dashicons dashicons-editor-italic",
    label: wp.element.createElement(
      "p",
      null,
      "\uF201 dashicons-editor-italic"
    )
  }, {
    value: "dashicons dashicons-editor-ul",
    label: wp.element.createElement(
      "p",
      null,
      "\uF203 dashicons-editor-ul"
    )
  }, {
    value: "dashicons dashicons-editor-ol",
    label: wp.element.createElement(
      "p",
      null,
      "\uF204 dashicons-editor-ol"
    )
  }, {
    value: "dashicons dashicons-editor-quote",
    label: wp.element.createElement(
      "p",
      null,
      "\uF205 dashicons-editor-quote"
    )
  }, {
    value: "dashicons dashicons-editor-alignleft",
    label: wp.element.createElement(
      "p",
      null,
      "\uF206 dashicons-editor-alignleft"
    )
  }, {
    value: "dashicons dashicons-editor-aligncenter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF207 dashicons-editor-aligncenter"
    )
  }, {
    value: "dashicons dashicons-editor-alignright",
    label: wp.element.createElement(
      "p",
      null,
      "\uF208 dashicons-editor-alignright"
    )
  }, {
    value: "dashicons dashicons-editor-insertmore",
    label: wp.element.createElement(
      "p",
      null,
      "\uF209 dashicons-editor-insertmore"
    )
  }, {
    value: "dashicons dashicons-editor-spellcheck",
    label: wp.element.createElement(
      "p",
      null,
      "\uF210 dashicons-editor-spellcheck"
    )
  }, {
    value: "dashicons dashicons-editor-expand",
    label: wp.element.createElement(
      "p",
      null,
      "\uF211 dashicons-editor-expand"
    )
  }, {
    value: "dashicons dashicons-editor-contract",
    label: wp.element.createElement(
      "p",
      null,
      "\uF506 dashicons-editor-contract"
    )
  }, {
    value: "dashicons dashicons-editor-kitchensink",
    label: wp.element.createElement(
      "p",
      null,
      "\uF212 dashicons-editor-kitchensink"
    )
  }, {
    value: "dashicons dashicons-editor-underline",
    label: wp.element.createElement(
      "p",
      null,
      "\uF213 dashicons-editor-underline"
    )
  }, {
    value: "dashicons dashicons-editor-justify",
    label: wp.element.createElement(
      "p",
      null,
      "\uF214 dashicons-editor-justify"
    )
  }, {
    value: "dashicons dashicons-editor-textcolor",
    label: wp.element.createElement(
      "p",
      null,
      "\uF215 dashicons-editor-textcolor"
    )
  }, {
    value: "dashicons dashicons-editor-paste-word",
    label: wp.element.createElement(
      "p",
      null,
      "\uF216 dashicons-editor-paste-word"
    )
  }, {
    value: "dashicons dashicons-editor-paste-text",
    label: wp.element.createElement(
      "p",
      null,
      "\uF217 dashicons-editor-paste-text"
    )
  }, {
    value: "dashicons dashicons-editor-removeformatting",
    label: wp.element.createElement(
      "p",
      null,
      "\uF218 dashicons-editor-removeformatting"
    )
  }, {
    value: "dashicons dashicons-editor-video",
    label: wp.element.createElement(
      "p",
      null,
      "\uF219 dashicons-editor-video"
    )
  }, {
    value: "dashicons dashicons-editor-customchar",
    label: wp.element.createElement(
      "p",
      null,
      "\uF220 dashicons-editor-customchar"
    )
  }, {
    value: "dashicons dashicons-editor-outdent",
    label: wp.element.createElement(
      "p",
      null,
      "\uF221 dashicons-editor-outdent"
    )
  }, {
    value: "dashicons dashicons-editor-indent",
    label: wp.element.createElement(
      "p",
      null,
      "\uF222 dashicons-editor-indent"
    )
  }, {
    value: "dashicons dashicons-editor-help",
    label: wp.element.createElement(
      "p",
      null,
      "\uF223 dashicons-editor-help"
    )
  }, {
    value: "dashicons dashicons-editor-strikethrough",
    label: wp.element.createElement(
      "p",
      null,
      "\uF224 dashicons-editor-strikethrough"
    )
  }, {
    value: "dashicons dashicons-editor-unlink",
    label: wp.element.createElement(
      "p",
      null,
      "\uF225 dashicons-editor-unlink"
    )
  }, {
    value: "dashicons dashicons-editor-rtl",
    label: wp.element.createElement(
      "p",
      null,
      "\uF320 dashicons-editor-rtl"
    )
  }, {
    value: "dashicons dashicons-editor-break",
    label: wp.element.createElement(
      "p",
      null,
      "\uF474 dashicons-editor-break"
    )
  }, {
    value: "dashicons dashicons-editor-code",
    label: wp.element.createElement(
      "p",
      null,
      "\uF475 dashicons-editor-code"
    )
  }, {
    value: "dashicons dashicons-editor-paragraph",
    label: wp.element.createElement(
      "p",
      null,
      "\uF476 dashicons-editor-paragraph"
    )
  }, {
    value: "dashicons dashicons-editor-table",
    label: wp.element.createElement(
      "p",
      null,
      "\uF535 dashicons-editor-table"
    )
  }, {
    value: "dashicons dashicons-align-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF135 dashicons-align-left"
    )
  }, {
    value: "dashicons dashicons-align-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF136 dashicons-align-right"
    )
  }, {
    value: "dashicons dashicons-align-center",
    label: wp.element.createElement(
      "p",
      null,
      "\uF134 dashicons-align-center"
    )
  }, {
    value: "dashicons dashicons-align-none",
    label: wp.element.createElement(
      "p",
      null,
      "\uF138 dashicons-align-none"
    )
  }, {
    value: "dashicons dashicons-lock",
    label: wp.element.createElement(
      "p",
      null,
      "\uF160 dashicons-lock"
    )
  }, {
    value: "dashicons dashicons-unlock",
    label: wp.element.createElement(
      "p",
      null,
      "\uF528 dashicons-unlock"
    )
  }, {
    value: "dashicons dashicons-calendar",
    label: wp.element.createElement(
      "p",
      null,
      "\uF145 dashicons-calendar"
    )
  }, {
    value: "dashicons dashicons-calendar-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF508 dashicons-calendar-alt"
    )
  }, {
    value: "dashicons dashicons-visibility",
    label: wp.element.createElement(
      "p",
      null,
      "\uF177 dashicons-visibility"
    )
  }, {
    value: "dashicons dashicons-hidden",
    label: wp.element.createElement(
      "p",
      null,
      "\uF530 dashicons-hidden"
    )
  }, {
    value: "dashicons dashicons-post-status",
    label: wp.element.createElement(
      "p",
      null,
      "\uF173 dashicons-post-status"
    )
  }, {
    value: "dashicons dashicons-edit",
    label: wp.element.createElement(
      "p",
      null,
      "\uF464 dashicons-edit"
    )
  }, {
    value: "dashicons dashicons-trash",
    label: wp.element.createElement(
      "p",
      null,
      "\uF182 dashicons-trash"
    )
  }, {
    value: "dashicons dashicons-sticky",
    label: wp.element.createElement(
      "p",
      null,
      "\uF537 dashicons-sticky"
    )
  }, {
    value: "dashicons dashicons-external",
    label: wp.element.createElement(
      "p",
      null,
      "\uF504 dashicons-external"
    )
  }, {
    value: "dashicons dashicons-arrow-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF142 dashicons-arrow-up"
    )
  }, {
    value: "dashicons dashicons-arrow-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF140 dashicons-arrow-down"
    )
  }, {
    value: "dashicons dashicons-arrow-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF139 dashicons-arrow-right"
    )
  }, {
    value: "dashicons dashicons-arrow-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF141 dashicons-arrow-left"
    )
  }, {
    value: "dashicons dashicons-arrow-up-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF342 dashicons-arrow-up-alt"
    )
  }, {
    value: "dashicons dashicons-arrow-down-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF346 dashicons-arrow-down-alt"
    )
  }, {
    value: "dashicons dashicons-arrow-right-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF344 dashicons-arrow-right-alt"
    )
  }, {
    value: "dashicons dashicons-arrow-left-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF340 dashicons-arrow-left-alt"
    )
  }, {
    value: "dashicons dashicons-arrow-up-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF343 dashicons-arrow-up-alt2"
    )
  }, {
    value: "dashicons dashicons-arrow-down-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF347 dashicons-arrow-down-alt2"
    )
  }, {
    value: "dashicons dashicons-arrow-right-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF345 dashicons-arrow-right-alt2"
    )
  }, {
    value: "dashicons dashicons-arrow-left-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF341 dashicons-arrow-left-alt2"
    )
  }, {
    value: "dashicons dashicons-sort",
    label: wp.element.createElement(
      "p",
      null,
      "\uF156 dashicons-sort"
    )
  }, {
    value: "dashicons dashicons-leftright",
    label: wp.element.createElement(
      "p",
      null,
      "\uF229 dashicons-leftright"
    )
  }, {
    value: "dashicons dashicons-randomize",
    label: wp.element.createElement(
      "p",
      null,
      "\uF503 dashicons-randomize"
    )
  }, {
    value: "dashicons dashicons-list-view",
    label: wp.element.createElement(
      "p",
      null,
      "\uF163 dashicons-list-view"
    )
  }, {
    value: "dashicons dashicons-exerpt-view",
    label: wp.element.createElement(
      "p",
      null,
      "\uF164 dashicons-exerpt-view"
    )
  }, {
    value: "dashicons dashicons-grid-view",
    label: wp.element.createElement(
      "p",
      null,
      "\uF509 dashicons-grid-view"
    )
  }, {
    value: "dashicons dashicons-move",
    label: wp.element.createElement(
      "p",
      null,
      "\uF545 dashicons-move"
    )
  }, {
    value: "dashicons dashicons-share",
    label: wp.element.createElement(
      "p",
      null,
      "\uF237 dashicons-share"
    )
  }, {
    value: "dashicons dashicons-share-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF240 dashicons-share-alt"
    )
  }, {
    value: "dashicons dashicons-share-alt2",
    label: wp.element.createElement(
      "p",
      null,
      "\uF242 dashicons-share-alt2"
    )
  }, {
    value: "dashicons dashicons-twitter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF301 dashicons-twitter"
    )
  }, {
    value: "dashicons dashicons-rss",
    label: wp.element.createElement(
      "p",
      null,
      "\uF303 dashicons-rss"
    )
  }, {
    value: "dashicons dashicons-email",
    label: wp.element.createElement(
      "p",
      null,
      "\uF465 dashicons-email"
    )
  }, {
    value: "dashicons dashicons-email-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF466 dashicons-email-alt"
    )
  }, {
    value: "dashicons dashicons-facebook",
    label: wp.element.createElement(
      "p",
      null,
      "\uF304 dashicons-facebook"
    )
  }, {
    value: "dashicons dashicons-facebook-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF305 dashicons-facebook-alt"
    )
  }, {
    value: "dashicons dashicons-googleplus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF462 dashicons-googleplus"
    )
  }, {
    value: "dashicons dashicons-networking",
    label: wp.element.createElement(
      "p",
      null,
      "\uF325 dashicons-networking"
    )
  }, {
    value: "dashicons dashicons-hammer",
    label: wp.element.createElement(
      "p",
      null,
      "\uF308 dashicons-hammer"
    )
  }, {
    value: "dashicons dashicons-art",
    label: wp.element.createElement(
      "p",
      null,
      "\uF309 dashicons-art"
    )
  }, {
    value: "dashicons dashicons-migrate",
    label: wp.element.createElement(
      "p",
      null,
      "\uF310 dashicons-migrate"
    )
  }, {
    value: "dashicons dashicons-performance",
    label: wp.element.createElement(
      "p",
      null,
      "\uF311 dashicons-performance"
    )
  }, {
    value: "dashicons dashicons-universal-access",
    label: wp.element.createElement(
      "p",
      null,
      "\uF483 dashicons-universal-access"
    )
  }, {
    value: "dashicons dashicons-universal-access-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF507 dashicons-universal-access-alt"
    )
  }, {
    value: "dashicons dashicons-tickets",
    label: wp.element.createElement(
      "p",
      null,
      "\uF486 dashicons-tickets"
    )
  }, {
    value: "dashicons dashicons-nametag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF484 dashicons-nametag"
    )
  }, {
    value: "dashicons dashicons-clipboard",
    label: wp.element.createElement(
      "p",
      null,
      "\uF481 dashicons-clipboard"
    )
  }, {
    value: "dashicons dashicons-heart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF487 dashicons-heart"
    )
  }, {
    value: "dashicons dashicons-megaphone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF488 dashicons-megaphone"
    )
  }, {
    value: "dashicons dashicons-schedule",
    label: wp.element.createElement(
      "p",
      null,
      "\uF489 dashicons-schedule"
    )
  }, {
    value: "dashicons dashicons-wordpress",
    label: wp.element.createElement(
      "p",
      null,
      "\uF120 dashicons-wordpress"
    )
  }, {
    value: "dashicons dashicons-wordpress-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF324 dashicons-wordpress-alt"
    )
  }, {
    value: "dashicons dashicons-pressthis",
    label: wp.element.createElement(
      "p",
      null,
      "\uF157 dashicons-pressthis"
    )
  }, {
    value: "dashicons dashicons-update",
    label: wp.element.createElement(
      "p",
      null,
      "\uF463 dashicons-update"
    )
  }, {
    value: "dashicons dashicons-screenoptions",
    label: wp.element.createElement(
      "p",
      null,
      "\uF180 dashicons-screenoptions"
    )
  }, {
    value: "dashicons dashicons-info",
    label: wp.element.createElement(
      "p",
      null,
      "\uF348 dashicons-info"
    )
  }, {
    value: "dashicons dashicons-cart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF174 dashicons-cart"
    )
  }, {
    value: "dashicons dashicons-feedback",
    label: wp.element.createElement(
      "p",
      null,
      "\uF175 dashicons-feedback"
    )
  }, {
    value: "dashicons dashicons-cloud",
    label: wp.element.createElement(
      "p",
      null,
      "\uF176 dashicons-cloud"
    )
  }, {
    value: "dashicons dashicons-translation",
    label: wp.element.createElement(
      "p",
      null,
      "\uF326 dashicons-translation"
    )
  }, {
    value: "dashicons dashicons-tag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF323 dashicons-tag"
    )
  }, {
    value: "dashicons dashicons-category",
    label: wp.element.createElement(
      "p",
      null,
      "\uF318 dashicons-category"
    )
  }, {
    value: "dashicons dashicons-archive",
    label: wp.element.createElement(
      "p",
      null,
      "\uF480 dashicons-archive"
    )
  }, {
    value: "dashicons dashicons-tagcloud",
    label: wp.element.createElement(
      "p",
      null,
      "\uF479 dashicons-tagcloud"
    )
  }, {
    value: "dashicons dashicons-text",
    label: wp.element.createElement(
      "p",
      null,
      "\uF478 dashicons-text"
    )
  }, {
    value: "dashicons dashicons-yes",
    label: wp.element.createElement(
      "p",
      null,
      "\uF147 dashicons-yes"
    )
  }, {
    value: "dashicons dashicons-no",
    label: wp.element.createElement(
      "p",
      null,
      "\uF158 dashicons-no"
    )
  }, {
    value: "dashicons dashicons-no-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF335 dashicons-no-alt"
    )
  }, {
    value: "dashicons dashicons-plus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF132 dashicons-plus"
    )
  }, {
    value: "dashicons dashicons-plus-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF502 dashicons-plus-alt"
    )
  }, {
    value: "dashicons dashicons-minus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF460 dashicons-minus"
    )
  }, {
    value: "dashicons dashicons-dismiss",
    label: wp.element.createElement(
      "p",
      null,
      "\uF153 dashicons-dismiss"
    )
  }, {
    value: "dashicons dashicons-marker",
    label: wp.element.createElement(
      "p",
      null,
      "\uF159 dashicons-marker"
    )
  }, {
    value: "dashicons dashicons-star-filled",
    label: wp.element.createElement(
      "p",
      null,
      "\uF155 dashicons-star-filled"
    )
  }, {
    value: "dashicons dashicons-star-half",
    label: wp.element.createElement(
      "p",
      null,
      "\uF459 dashicons-star-half"
    )
  }, {
    value: "dashicons dashicons-star-empty",
    label: wp.element.createElement(
      "p",
      null,
      "\uF154 dashicons-star-empty"
    )
  }, {
    value: "dashicons dashicons-flag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF227 dashicons-flag"
    )
  }, {
    value: "dashicons dashicons-warning",
    label: wp.element.createElement(
      "p",
      null,
      "\uF534 dashicons-warning"
    )
  }, {
    value: "dashicons dashicons-location",
    label: wp.element.createElement(
      "p",
      null,
      "\uF230 dashicons-location"
    )
  }, {
    value: "dashicons dashicons-location-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF231 dashicons-location-alt"
    )
  }, {
    value: "dashicons dashicons-vault",
    label: wp.element.createElement(
      "p",
      null,
      "\uF178 dashicons-vault"
    )
  }, {
    value: "dashicons dashicons-shield",
    label: wp.element.createElement(
      "p",
      null,
      "\uF332 dashicons-shield"
    )
  }, {
    value: "dashicons dashicons-shield-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF334 dashicons-shield-alt"
    )
  }, {
    value: "dashicons dashicons-sos",
    label: wp.element.createElement(
      "p",
      null,
      "\uF468 dashicons-sos"
    )
  }, {
    value: "dashicons dashicons-search",
    label: wp.element.createElement(
      "p",
      null,
      "\uF179 dashicons-search"
    )
  }, {
    value: "dashicons dashicons-slides",
    label: wp.element.createElement(
      "p",
      null,
      "\uF181 dashicons-slides"
    )
  }, {
    value: "dashicons dashicons-analytics",
    label: wp.element.createElement(
      "p",
      null,
      "\uF183 dashicons-analytics"
    )
  }, {
    value: "dashicons dashicons-chart-pie",
    label: wp.element.createElement(
      "p",
      null,
      "\uF184 dashicons-chart-pie"
    )
  }, {
    value: "dashicons dashicons-chart-bar",
    label: wp.element.createElement(
      "p",
      null,
      "\uF185 dashicons-chart-bar"
    )
  }, {
    value: "dashicons dashicons-chart-line",
    label: wp.element.createElement(
      "p",
      null,
      "\uF238 dashicons-chart-line"
    )
  }, {
    value: "dashicons dashicons-chart-area",
    label: wp.element.createElement(
      "p",
      null,
      "\uF239 dashicons-chart-area"
    )
  }, {
    value: "dashicons dashicons-groups",
    label: wp.element.createElement(
      "p",
      null,
      "\uF307 dashicons-groups"
    )
  }, {
    value: "dashicons dashicons-businessman",
    label: wp.element.createElement(
      "p",
      null,
      "\uF338 dashicons-businessman"
    )
  }, {
    value: "dashicons dashicons-id",
    label: wp.element.createElement(
      "p",
      null,
      "\uF336 dashicons-id"
    )
  }, {
    value: "dashicons dashicons-id-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF337 dashicons-id-alt"
    )
  }, {
    value: "dashicons dashicons-products",
    label: wp.element.createElement(
      "p",
      null,
      "\uF312 dashicons-products"
    )
  }, {
    value: "dashicons dashicons-awards",
    label: wp.element.createElement(
      "p",
      null,
      "\uF313 dashicons-awards"
    )
  }, {
    value: "dashicons dashicons-forms",
    label: wp.element.createElement(
      "p",
      null,
      "\uF314 dashicons-forms"
    )
  }, {
    value: "dashicons dashicons-testimonial",
    label: wp.element.createElement(
      "p",
      null,
      "\uF473 dashicons-testimonial"
    )
  }, {
    value: "dashicons dashicons-portfolio",
    label: wp.element.createElement(
      "p",
      null,
      "\uF322 dashicons-portfolio"
    )
  }, {
    value: "dashicons dashicons-book",
    label: wp.element.createElement(
      "p",
      null,
      "\uF330 dashicons-book"
    )
  }, {
    value: "dashicons dashicons-book-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF331 dashicons-book-alt"
    )
  }, {
    value: "dashicons dashicons-download",
    label: wp.element.createElement(
      "p",
      null,
      "\uF316 dashicons-download"
    )
  }, {
    value: "dashicons dashicons-upload",
    label: wp.element.createElement(
      "p",
      null,
      "\uF317 dashicons-upload"
    )
  }, {
    value: "dashicons dashicons-backup",
    label: wp.element.createElement(
      "p",
      null,
      "\uF321 dashicons-backup"
    )
  }, {
    value: "dashicons dashicons-clock",
    label: wp.element.createElement(
      "p",
      null,
      "\uF469 dashicons-clock"
    )
  }, {
    value: "dashicons dashicons-lightbulb",
    label: wp.element.createElement(
      "p",
      null,
      "\uF339 dashicons-lightbulb"
    )
  }, {
    value: "dashicons dashicons-microphone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF482 dashicons-microphone"
    )
  }, {
    value: "dashicons dashicons-desktop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF472 dashicons-desktop"
    )
  }, {
    value: "dashicons dashicons-laptop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF547 dashicons-laptop"
    )
  }, {
    value: "dashicons dashicons-tablet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF471 dashicons-tablet"
    )
  }, {
    value: "dashicons dashicons-smartphone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF470 dashicons-smartphone"
    )
  }, {
    value: "dashicons dashicons-phone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF525 dashicons-phone"
    )
  }, {
    value: "dashicons dashicons-index-card",
    label: wp.element.createElement(
      "p",
      null,
      "\uF510 dashicons-index-card"
    )
  }, {
    value: "dashicons dashicons-carrot",
    label: wp.element.createElement(
      "p",
      null,
      "\uF511 dashicons-carrot"
    )
  }, {
    value: "dashicons dashicons-building",
    label: wp.element.createElement(
      "p",
      null,
      "\uF512 dashicons-building"
    )
  }, {
    value: "dashicons dashicons-store",
    label: wp.element.createElement(
      "p",
      null,
      "\uF513 dashicons-store"
    )
  }, {
    value: "dashicons dashicons-album",
    label: wp.element.createElement(
      "p",
      null,
      "\uF514 dashicons-album"
    )
  }, {
    value: "dashicons dashicons-palmtree",
    label: wp.element.createElement(
      "p",
      null,
      "\uF527 dashicons-palmtree"
    )
  }, {
    value: "dashicons dashicons-tickets-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF524 dashicons-tickets-alt"
    )
  }, {
    value: "dashicons dashicons-money",
    label: wp.element.createElement(
      "p",
      null,
      "\uF526 dashicons-money"
    )
  }, {
    value: "dashicons dashicons-smiley",
    label: wp.element.createElement(
      "p",
      null,
      "\uF328 dashicons-smiley"
    )
  }, {
    value: "dashicons dashicons-thumbs-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF529 dashicons-thumbs-up"
    )
  }, {
    value: "dashicons dashicons-thumbs-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF542 dashicons-thumbs-down"
    )
  }, {
    value: "dashicons dashicons-layout",
    label: wp.element.createElement(
      "p",
      null,
      "\uF538 dashicons-layout"
    )
  }, {
    value: "dashicons dashicons-paperclip",
    label: wp.element.createElement(
      "p",
      null,
      "\uF546 dashicons-paperclip"
    )
  }];

  //Font Awesome Icons
  var ICONS = [{
    value: "",
    label: "none"
  }, {
    value: "fa fa-glass",
    label: wp.element.createElement(
      "p",
      null,
      "\uF000 fa-glass"
    )
  }, {
    value: "fa fa-music",
    label: wp.element.createElement(
      "p",
      null,
      "\uF001 fa-music"
    )
  }, {
    value: "fa fa-search",
    label: wp.element.createElement(
      "p",
      null,
      "\uF002 fa-search"
    )
  }, {
    value: "fa fa-envelope-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF003 fa-envelope-o"
    )
  }, {
    value: "fa fa-heart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF004 fa-heart"
    )
  }, {
    value: "fa fa-star",
    label: wp.element.createElement(
      "p",
      null,
      "\uF005 fa-star"
    )
  }, {
    value: "fa fa-star-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF006 fa-star-o"
    )
  }, {
    value: "fa fa-user",
    label: wp.element.createElement(
      "p",
      null,
      "\uF007 fa-user"
    )
  }, {
    value: "fa fa-film",
    label: wp.element.createElement(
      "p",
      null,
      "\uF008 fa-film"
    )
  }, {
    value: "fa fa-th-large",
    label: wp.element.createElement(
      "p",
      null,
      "\uF009 fa-th-large"
    )
  }, {
    value: "fa fa-th",
    label: wp.element.createElement(
      "p",
      null,
      "\uF00A fa-th"
    )
  }, {
    value: "fa fa-th-list",
    label: wp.element.createElement(
      "p",
      null,
      "\uF00B fa-th-list"
    )
  }, {
    value: "fa fa-check",
    label: wp.element.createElement(
      "p",
      null,
      "\uF00C fa-check"
    )
  }, {
    value: "fa fa-times",
    label: wp.element.createElement(
      "p",
      null,
      "\uF00D fa-times"
    )
  }, {
    value: "fa fa-search-plus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF00E fa-search-plus"
    )
  }, {
    value: "fa fa-search-minus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF010 fa-search-minus"
    )
  }, {
    value: "fa fa-power-off",
    label: wp.element.createElement(
      "p",
      null,
      "\uF011 fa-power-off"
    )
  }, {
    value: "fa fa-signal",
    label: wp.element.createElement(
      "p",
      null,
      "\uF012 fa-signal"
    )
  }, {
    value: "fa fa-cog",
    label: wp.element.createElement(
      "p",
      null,
      "\uF013 fa-cog"
    )
  }, {
    value: "fa fa-trash-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF014 fa-trash-o"
    )
  }, {
    value: "fa fa-home",
    label: wp.element.createElement(
      "p",
      null,
      "\uF015 fa-home"
    )
  }, {
    value: "fa fa-file-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF016 fa-file-o"
    )
  }, {
    value: "fa fa-clock-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF017 fa-clock-o"
    )
  }, {
    value: "fa fa-road",
    label: wp.element.createElement(
      "p",
      null,
      "\uF018 fa-road"
    )
  }, {
    value: "fa fa-download",
    label: wp.element.createElement(
      "p",
      null,
      "\uF019 fa-download"
    )
  }, {
    value: "fa fa-arrow-circle-o-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF01A fa-arrow-circle-o-down"
    )
  }, {
    value: "fa fa-arrow-circle-o-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF01B fa-arrow-circle-o-up"
    )
  }, {
    value: "fa fa-inbox",
    label: wp.element.createElement(
      "p",
      null,
      "\uF01C fa-inbox"
    )
  }, {
    value: "fa fa-play-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF01D fa-play-circle-o"
    )
  }, {
    value: "fa fa-repeat",
    label: wp.element.createElement(
      "p",
      null,
      "\uF01E fa-repeat"
    )
  }, {
    value: "fa fa-refresh",
    label: wp.element.createElement(
      "p",
      null,
      "\uF021 fa-refresh"
    )
  }, {
    value: "fa fa-list-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF022 fa-list-alt"
    )
  }, {
    value: "fa fa-lock",
    label: wp.element.createElement(
      "p",
      null,
      "\uF023 fa-lock"
    )
  }, {
    value: "fa fa-flag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF024 fa-flag"
    )
  }, {
    value: "fa fa-headphones",
    label: wp.element.createElement(
      "p",
      null,
      "\uF025 fa-headphones"
    )
  }, {
    value: "fa fa-volume-off",
    label: wp.element.createElement(
      "p",
      null,
      "\uF026 fa-volume-off"
    )
  }, {
    value: "fa fa-volume-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF027 fa-volume-down"
    )
  }, {
    value: "fa fa-volume-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF028 fa-volume-up"
    )
  }, {
    value: "fa fa-qrcode",
    label: wp.element.createElement(
      "p",
      null,
      "\uF029 fa-qrcode"
    )
  }, {
    value: "fa fa-barcode",
    label: wp.element.createElement(
      "p",
      null,
      "\uF02A fa-barcode"
    )
  }, {
    value: "fa fa-tag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF02B fa-tag"
    )
  }, {
    value: "fa fa-tags",
    label: wp.element.createElement(
      "p",
      null,
      "\uF02C fa-tags"
    )
  }, {
    value: "fa fa-book",
    label: wp.element.createElement(
      "p",
      null,
      "\uF02D fa-book"
    )
  }, {
    value: "fa fa-bookmark",
    label: wp.element.createElement(
      "p",
      null,
      "\uF02E fa-bookmark"
    )
  }, {
    value: "fa fa-print",
    label: wp.element.createElement(
      "p",
      null,
      "\uF02F fa-print"
    )
  }, {
    value: "fa fa-camera",
    label: wp.element.createElement(
      "p",
      null,
      "\uF030 fa-camera"
    )
  }, {
    value: "fa fa-font",
    label: wp.element.createElement(
      "p",
      null,
      "\uF031 fa-font"
    )
  }, {
    value: "fa fa-bold",
    label: wp.element.createElement(
      "p",
      null,
      "\uF032 fa-bold"
    )
  }, {
    value: "fa fa-italic",
    label: wp.element.createElement(
      "p",
      null,
      "\uF033 fa-italic"
    )
  }, {
    value: "fa fa-text-height",
    label: wp.element.createElement(
      "p",
      null,
      "\uF034 fa-text-height"
    )
  }, {
    value: "fa fa-text-width",
    label: wp.element.createElement(
      "p",
      null,
      "\uF035 fa-text-width"
    )
  }, {
    value: "fa fa-align-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF036 fa-align-left"
    )
  }, {
    value: "fa fa-align-center",
    label: wp.element.createElement(
      "p",
      null,
      "\uF037 fa-align-center"
    )
  }, {
    value: "fa fa-align-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF038 fa-align-right"
    )
  }, {
    value: "fa fa-align-justify",
    label: wp.element.createElement(
      "p",
      null,
      "\uF039 fa-align-justify"
    )
  }, {
    value: "fa fa-list",
    label: wp.element.createElement(
      "p",
      null,
      "\uF03A fa-list"
    )
  }, {
    value: "fa fa-outdent",
    label: wp.element.createElement(
      "p",
      null,
      "\uF03B fa-outdent"
    )
  }, {
    value: "fa fa-indent",
    label: wp.element.createElement(
      "p",
      null,
      "\uF03C fa-indent"
    )
  }, {
    value: "fa fa-video-camera",
    label: wp.element.createElement(
      "p",
      null,
      "\uF03D fa-video-camera"
    )
  }, {
    value: "fa fa-picture-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF03E fa-picture-o"
    )
  }, {
    value: "fa fa-pencil",
    label: wp.element.createElement(
      "p",
      null,
      "\uF040 fa-pencil"
    )
  }, {
    value: "fa fa-map-marker",
    label: wp.element.createElement(
      "p",
      null,
      "\uF041 fa-map-marker"
    )
  }, {
    value: "fa fa-adjust",
    label: wp.element.createElement(
      "p",
      null,
      "\uF042 fa-adjust"
    )
  }, {
    value: "fa fa-tint",
    label: wp.element.createElement(
      "p",
      null,
      "\uF043 fa-tint"
    )
  }, {
    value: "fa fa-pencil-square-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF044 fa-pencil-square-o"
    )
  }, {
    value: "fa fa-share-square-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF045 fa-share-square-o"
    )
  }, {
    value: "fa fa-check-square-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF046 fa-check-square-o"
    )
  }, {
    value: "fa fa-arrows",
    label: wp.element.createElement(
      "p",
      null,
      "\uF047 fa-arrows"
    )
  }, {
    value: "fa fa-step-backward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF048 fa-step-backward"
    )
  }, {
    value: "fa fa-fast-backward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF049 fa-fast-backward"
    )
  }, {
    value: "fa fa-backward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF04A fa-backward"
    )
  }, {
    value: "fa fa-play",
    label: wp.element.createElement(
      "p",
      null,
      "\uF04B fa-play"
    )
  }, {
    value: "fa fa-pause",
    label: wp.element.createElement(
      "p",
      null,
      "\uF04C fa-pause"
    )
  }, {
    value: "fa fa-stop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF04D fa-stop"
    )
  }, {
    value: "fa fa-forward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF04E fa-forward"
    )
  }, {
    value: "fa fa-fast-forward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF050 fa-fast-forward"
    )
  }, {
    value: "fa fa-step-forward",
    label: wp.element.createElement(
      "p",
      null,
      "\uF051 fa-step-forward"
    )
  }, {
    value: "fa fa-eject",
    label: wp.element.createElement(
      "p",
      null,
      "\uF052 fa-eject"
    )
  }, {
    value: "fa fa-chevron-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF053 fa-chevron-left"
    )
  }, {
    value: "fa fa-chevron-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF054 fa-chevron-right"
    )
  }, {
    value: "fa fa-plus-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF055 fa-plus-circle"
    )
  }, {
    value: "fa fa-minus-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF056 fa-minus-circle"
    )
  }, {
    value: "fa fa-times-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF057 fa-times-circle"
    )
  }, {
    value: "fa fa-check-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF058 fa-check-circle"
    )
  }, {
    value: "fa fa-question-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF059 fa-question-circle"
    )
  }, {
    value: "fa fa-info-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF05A fa-info-circle"
    )
  }, {
    value: "fa fa-crosshairs",
    label: wp.element.createElement(
      "p",
      null,
      "\uF05B fa-crosshairs"
    )
  }, {
    value: "fa fa-times-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF05C fa-times-circle-o"
    )
  }, {
    value: "fa fa-check-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF05D fa-check-circle-o"
    )
  }, {
    value: "fa fa-ban",
    label: wp.element.createElement(
      "p",
      null,
      "\uF05E fa-ban"
    )
  }, {
    value: "fa fa-arrow-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF060 fa-arrow-left"
    )
  }, {
    value: "fa fa-arrow-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF061 fa-arrow-right"
    )
  }, {
    value: "fa fa-arrow-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF062 fa-arrow-up"
    )
  }, {
    value: "fa fa-arrow-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF063 fa-arrow-down"
    )
  }, {
    value: "fa fa-share",
    label: wp.element.createElement(
      "p",
      null,
      "\uF064 fa-share"
    )
  }, {
    value: "fa fa-expand",
    label: wp.element.createElement(
      "p",
      null,
      "\uF065 fa-expand"
    )
  }, {
    value: "fa fa-compress",
    label: wp.element.createElement(
      "p",
      null,
      "\uF066 fa-compress"
    )
  }, {
    value: "fa fa-plus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF067 fa-plus"
    )
  }, {
    value: "fa fa-minus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF068 fa-minus"
    )
  }, {
    value: "fa fa-asterisk",
    label: wp.element.createElement(
      "p",
      null,
      "\uF069 fa-asterisk"
    )
  }, {
    value: "fa fa-exclamation-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF06A fa-exclamation-circle"
    )
  }, {
    value: "fa fa-gift",
    label: wp.element.createElement(
      "p",
      null,
      "\uF06B fa-gift"
    )
  }, {
    value: "fa fa-leaf",
    label: wp.element.createElement(
      "p",
      null,
      "\uF06C fa-leaf"
    )
  }, {
    value: "fa fa-fire",
    label: wp.element.createElement(
      "p",
      null,
      "\uF06D fa-fire"
    )
  }, {
    value: "fa fa-eye",
    label: wp.element.createElement(
      "p",
      null,
      "\uF06E fa-eye"
    )
  }, {
    value: "fa fa-eye-slash",
    label: wp.element.createElement(
      "p",
      null,
      "\uF070 fa-eye-slash"
    )
  }, {
    value: "fa fa-exclamation-triangle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF071 fa-exclamation-triangle"
    )
  }, {
    value: "fa fa-plane",
    label: wp.element.createElement(
      "p",
      null,
      "\uF072 fa-plane"
    )
  }, {
    value: "fa fa-calendar",
    label: wp.element.createElement(
      "p",
      null,
      "\uF073 fa-calendar"
    )
  }, {
    value: "fa fa-random",
    label: wp.element.createElement(
      "p",
      null,
      "\uF074 fa-random"
    )
  }, {
    value: "fa fa-comment",
    label: wp.element.createElement(
      "p",
      null,
      "\uF075 fa-comment"
    )
  }, {
    value: "fa fa-magnet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF076 fa-magnet"
    )
  }, {
    value: "fa fa-chevron-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF077 fa-chevron-up"
    )
  }, {
    value: "fa fa-chevron-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF078 fa-chevron-down"
    )
  }, {
    value: "fa fa-retweet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF079 fa-retweet"
    )
  }, {
    value: "fa fa-shopping-cart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF07A fa-shopping-cart"
    )
  }, {
    value: "fa fa-folder",
    label: wp.element.createElement(
      "p",
      null,
      "\uF07B fa-folder"
    )
  }, {
    value: "fa fa-folder-open",
    label: wp.element.createElement(
      "p",
      null,
      "\uF07C fa-folder-open"
    )
  }, {
    value: "fa fa-arrows-v",
    label: wp.element.createElement(
      "p",
      null,
      "\uF07D fa-arrows-v"
    )
  }, {
    value: "fa fa-arrows-h",
    label: wp.element.createElement(
      "p",
      null,
      "\uF07E fa-arrows-h"
    )
  }, {
    value: "fa fa-bar-chart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF080 fa-bar-chart"
    )
  }, {
    value: "fa fa-twitter-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF081 fa-twitter-square"
    )
  }, {
    value: "fa fa-facebook-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF082 fa-facebook-square"
    )
  }, {
    value: "fa fa-camera-retro",
    label: wp.element.createElement(
      "p",
      null,
      "\uF083 fa-camera-retro"
    )
  }, {
    value: "fa fa-key",
    label: wp.element.createElement(
      "p",
      null,
      "\uF084 fa-key"
    )
  }, {
    value: "fa fa-cogs",
    label: wp.element.createElement(
      "p",
      null,
      "\uF085 fa-cogs"
    )
  }, {
    value: "fa fa-comments",
    label: wp.element.createElement(
      "p",
      null,
      "\uF086 fa-comments"
    )
  }, {
    value: "fa fa-thumbs-o-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF087 fa-thumbs-o-up"
    )
  }, {
    value: "fa fa-thumbs-o-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF088 fa-thumbs-o-down"
    )
  }, {
    value: "fa fa-star-half",
    label: wp.element.createElement(
      "p",
      null,
      "\uF089 fa-star-half"
    )
  }, {
    value: "fa fa-heart-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF08A fa-heart-o"
    )
  }, {
    value: "fa fa-sign-out",
    label: wp.element.createElement(
      "p",
      null,
      "\uF08B fa-sign-out"
    )
  }, {
    value: "fa fa-linkedin-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF08C fa-linkedin-square"
    )
  }, {
    value: "fa fa-thumb-tack",
    label: wp.element.createElement(
      "p",
      null,
      "\uF08D fa-thumb-tack"
    )
  }, {
    value: "fa fa-external-link",
    label: wp.element.createElement(
      "p",
      null,
      "\uF08E fa-external-link"
    )
  }, {
    value: "fa fa-sign-in",
    label: wp.element.createElement(
      "p",
      null,
      "\uF090 fa-sign-in"
    )
  }, {
    value: "fa fa-trophy",
    label: wp.element.createElement(
      "p",
      null,
      "\uF091 fa-trophy"
    )
  }, {
    value: "fa fa-github-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF092 fa-github-square"
    )
  }, {
    value: "fa fa-upload",
    label: wp.element.createElement(
      "p",
      null,
      "\uF093 fa-upload"
    )
  }, {
    value: "fa fa-lemon-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF094 fa-lemon-o"
    )
  }, {
    value: "fa fa-phone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF095 fa-phone"
    )
  }, {
    value: "fa fa-square-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF096 fa-square-o"
    )
  }, {
    value: "fa fa-bookmark-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF097 fa-bookmark-o"
    )
  }, {
    value: "fa fa-phone-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF098 fa-phone-square"
    )
  }, {
    value: "fa fa-twitter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF099 fa-twitter"
    )
  }, {
    value: "fa fa-facebook",
    label: wp.element.createElement(
      "p",
      null,
      "\uF09A fa-facebook"
    )
  }, {
    value: "fa fa-github",
    label: wp.element.createElement(
      "p",
      null,
      "\uF09B fa-github"
    )
  }, {
    value: "fa fa-unlock",
    label: wp.element.createElement(
      "p",
      null,
      "\uF09C fa-unlock"
    )
  }, {
    value: "fa fa-credit-card",
    label: wp.element.createElement(
      "p",
      null,
      "\uF09D fa-credit-card"
    )
  }, {
    value: "fa fa-rss",
    label: wp.element.createElement(
      "p",
      null,
      "\uF09E fa-rss"
    )
  }, {
    value: "fa fa-hdd-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A0 fa-hdd-o"
    )
  }, {
    value: "fa fa-bullhorn",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A1 fa-bullhorn"
    )
  }, {
    value: "fa fa-bell",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F3 fa-bell"
    )
  }, {
    value: "fa fa-certificate",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A3 fa-certificate"
    )
  }, {
    value: "fa fa-hand-o-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A4 fa-hand-o-right"
    )
  }, {
    value: "fa fa-hand-o-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A5 fa-hand-o-left"
    )
  }, {
    value: "fa fa-hand-o-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A6 fa-hand-o-up"
    )
  }, {
    value: "fa fa-hand-o-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A7 fa-hand-o-down"
    )
  }, {
    value: "fa fa-arrow-circle-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A8 fa-arrow-circle-left"
    )
  }, {
    value: "fa fa-arrow-circle-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A9 fa-arrow-circle-right"
    )
  }, {
    value: "fa fa-arrow-circle-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0AA fa-arrow-circle-up"
    )
  }, {
    value: "fa fa-arrow-circle-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0AB fa-arrow-circle-down"
    )
  }, {
    value: "fa fa-globe",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0AC fa-globe"
    )
  }, {
    value: "fa fa-wrench",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0AD fa-wrench"
    )
  }, {
    value: "fa fa-tasks",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0AE fa-tasks"
    )
  }, {
    value: "fa fa-filter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0B0 fa-filter"
    )
  }, {
    value: "fa fa-briefcase",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0B1 fa-briefcase"
    )
  }, {
    value: "fa fa-arrows-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0B2 fa-arrows-alt"
    )
  }, {
    value: "fa fa-users",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C0 fa-users"
    )
  }, {
    value: "fa fa-link",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C1 fa-link"
    )
  }, {
    value: "fa fa-cloud",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C2 fa-cloud"
    )
  }, {
    value: "fa fa-flask",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C3 fa-flask"
    )
  }, {
    value: "fa fa-scissors",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C4 fa-scissors"
    )
  }, {
    value: "fa fa-files-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C5 fa-files-o"
    )
  }, {
    value: "fa fa-paperclip",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C6 fa-paperclip"
    )
  }, {
    value: "fa fa-floppy-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C7 fa-floppy-o"
    )
  }, {
    value: "fa fa-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C8 fa-square"
    )
  }, {
    value: "fa fa-bars",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0C9 fa-bars"
    )
  }, {
    value: "fa fa-list-ul",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0CA fa-list-ul"
    )
  }, {
    value: "fa fa-list-ol",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0CB fa-list-ol"
    )
  }, {
    value: "fa fa-strikethrough",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0CC fa-strikethrough"
    )
  }, {
    value: "fa fa-underline",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0CD fa-underline"
    )
  }, {
    value: "fa fa-table",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0CE fa-table"
    )
  }, {
    value: "fa fa-magic",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D0 fa-magic"
    )
  }, {
    value: "fa fa-truck",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D1 fa-truck"
    )
  }, {
    value: "fa fa-pinterest",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D2 fa-pinterest"
    )
  }, {
    value: "fa fa-pinterest-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D3 fa-pinterest-square"
    )
  }, {
    value: "fa fa-google-plus-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D4 fa-google-plus-square"
    )
  }, {
    value: "fa fa-google-plus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D5 fa-google-plus"
    )
  }, {
    value: "fa fa-money",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D6 fa-money"
    )
  }, {
    value: "fa fa-caret-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D7 fa-caret-down"
    )
  }, {
    value: "fa fa-caret-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D8 fa-caret-up"
    )
  }, {
    value: "fa fa-caret-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0D9 fa-caret-left"
    )
  }, {
    value: "fa fa-caret-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0DA fa-caret-right"
    )
  }, {
    value: "fa fa-columns",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0DB fa-columns"
    )
  }, {
    value: "fa fa-sort",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0DC fa-sort"
    )
  }, {
    value: "fa fa-sort-desc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0DD fa-sort-desc"
    )
  }, {
    value: "fa fa-sort-asc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0DE fa-sort-asc"
    )
  }, {
    value: "fa fa-envelope",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E0 fa-envelope"
    )
  }, {
    value: "fa fa-linkedin",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E1 fa-linkedin"
    )
  }, {
    value: "fa fa-undo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E2 fa-undo"
    )
  }, {
    value: "fa fa-gavel",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E3 fa-gavel"
    )
  }, {
    value: "fa fa-tachometer",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E4 fa-tachometer"
    )
  }, {
    value: "fa fa-comment-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E5 fa-comment-o"
    )
  }, {
    value: "fa fa-comments-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E6 fa-comments-o"
    )
  }, {
    value: "fa fa-bolt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E7 fa-bolt"
    )
  }, {
    value: "fa fa-sitemap",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E8 fa-sitemap"
    )
  }, {
    value: "fa fa-umbrella",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0E9 fa-umbrella"
    )
  }, {
    value: "fa fa-clipboard",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0EA fa-clipboard"
    )
  }, {
    value: "fa fa-lightbulb-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0EB fa-lightbulb-o"
    )
  }, {
    value: "fa fa-exchange",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0EC fa-exchange"
    )
  }, {
    value: "fa fa-cloud-download",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0ED fa-cloud-download"
    )
  }, {
    value: "fa fa-cloud-upload",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0EE fa-cloud-upload"
    )
  }, {
    value: "fa fa-user-md",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F0 fa-user-md"
    )
  }, {
    value: "fa fa-stethoscope",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F1 fa-stethoscope"
    )
  }, {
    value: "fa fa-suitcase",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F2 fa-suitcase"
    )
  }, {
    value: "fa fa-bell-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0A2 fa-bell-o"
    )
  }, {
    value: "fa fa-coffee",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F4 fa-coffee"
    )
  }, {
    value: "fa fa-cutlery",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F5 fa-cutlery"
    )
  }, {
    value: "fa fa-file-text-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F6 fa-file-text-o"
    )
  }, {
    value: "fa fa-building-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F7 fa-building-o"
    )
  }, {
    value: "fa fa-hospital-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F8 fa-hospital-o"
    )
  }, {
    value: "fa fa-ambulance",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0F9 fa-ambulance"
    )
  }, {
    value: "fa fa-medkit",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0FA fa-medkit"
    )
  }, {
    value: "fa fa-fighter-jet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0FB fa-fighter-jet"
    )
  }, {
    value: "fa fa-beer",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0FC fa-beer"
    )
  }, {
    value: "fa fa-h-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0FD fa-h-square"
    )
  }, {
    value: "fa fa-plus-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF0FE fa-plus-square"
    )
  }, {
    value: "fa fa-angle-double-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF100 fa-angle-double-left"
    )
  }, {
    value: "fa fa-angle-double-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF101 fa-angle-double-right"
    )
  }, {
    value: "fa fa-angle-double-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF102 fa-angle-double-up"
    )
  }, {
    value: "fa fa-angle-double-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF103 fa-angle-double-down"
    )
  }, {
    value: "fa fa-angle-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF104 fa-angle-left"
    )
  }, {
    value: "fa fa-angle-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF105 fa-angle-right"
    )
  }, {
    value: "fa fa-angle-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF106 fa-angle-up"
    )
  }, {
    value: "fa fa-angle-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF107 fa-angle-down"
    )
  }, {
    value: "fa fa-desktop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF108 fa-desktop"
    )
  }, {
    value: "fa fa-laptop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF109 fa-laptop"
    )
  }, {
    value: "fa fa-tablet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF10A fa-tablet"
    )
  }, {
    value: "fa fa-mobile",
    label: wp.element.createElement(
      "p",
      null,
      "\uF10B fa-mobile"
    )
  }, {
    value: "fa fa-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF10C fa-circle-o"
    )
  }, {
    value: "fa fa-quote-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF10D fa-quote-left"
    )
  }, {
    value: "fa fa-quote-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF10E fa-quote-right"
    )
  }, {
    value: "fa fa-spinner",
    label: wp.element.createElement(
      "p",
      null,
      "\uF110 fa-spinner"
    )
  }, {
    value: "fa fa-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF111 fa-circle"
    )
  }, {
    value: "fa fa-reply",
    label: wp.element.createElement(
      "p",
      null,
      "\uF112 fa-reply"
    )
  }, {
    value: "fa fa-github-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF113 fa-github-alt"
    )
  }, {
    value: "fa fa-folder-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF114 fa-folder-o"
    )
  }, {
    value: "fa fa-folder-open-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF115 fa-folder-open-o"
    )
  }, {
    value: "fa fa-smile-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF118 fa-smile-o"
    )
  }, {
    value: "fa fa-frown-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF119 fa-frown-o"
    )
  }, {
    value: "fa fa-meh-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF11A fa-meh-o"
    )
  }, {
    value: "fa fa-gamepad",
    label: wp.element.createElement(
      "p",
      null,
      "\uF11B fa-gamepad"
    )
  }, {
    value: "fa fa-keyboard-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF11C fa-keyboard-o"
    )
  }, {
    value: "fa fa-flag-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF11D fa-flag-o"
    )
  }, {
    value: "fa fa-flag-checkered",
    label: wp.element.createElement(
      "p",
      null,
      "\uF11E fa-flag-checkered"
    )
  }, {
    value: "fa fa-terminal",
    label: wp.element.createElement(
      "p",
      null,
      "\uF120 fa-terminal"
    )
  }, {
    value: "fa fa-code",
    label: wp.element.createElement(
      "p",
      null,
      "\uF121 fa-code"
    )
  }, {
    value: "fa fa-reply-all",
    label: wp.element.createElement(
      "p",
      null,
      "\uF122 fa-reply-all"
    )
  }, {
    value: "fa fa-star-half-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF123 fa-star-half-o"
    )
  }, {
    value: "fa fa-location-arrow",
    label: wp.element.createElement(
      "p",
      null,
      "\uF124 fa-location-arrow"
    )
  }, {
    value: "fa fa-crop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF125 fa-crop"
    )
  }, {
    value: "fa fa-code-fork",
    label: wp.element.createElement(
      "p",
      null,
      "\uF126 fa-code-fork"
    )
  }, {
    value: "fa fa-chain-broken",
    label: wp.element.createElement(
      "p",
      null,
      "\uF127 fa-chain-broken"
    )
  }, {
    value: "fa fa-question",
    label: wp.element.createElement(
      "p",
      null,
      "\uF128 fa-question"
    )
  }, {
    value: "fa fa-info",
    label: wp.element.createElement(
      "p",
      null,
      "\uF129 fa-info"
    )
  }, {
    value: "fa fa-exclamation",
    label: wp.element.createElement(
      "p",
      null,
      "\uF12A fa-exclamation"
    )
  }, {
    value: "fa fa-superscript",
    label: wp.element.createElement(
      "p",
      null,
      "\uF12B fa-superscript"
    )
  }, {
    value: "fa fa-subscript",
    label: wp.element.createElement(
      "p",
      null,
      "\uF12C fa-subscript"
    )
  }, {
    value: "fa fa-eraser",
    label: wp.element.createElement(
      "p",
      null,
      "\uF12D fa-eraser"
    )
  }, {
    value: "fa fa-puzzle-piece",
    label: wp.element.createElement(
      "p",
      null,
      "\uF12E fa-puzzle-piece"
    )
  }, {
    value: "fa fa-microphone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF130 fa-microphone"
    )
  }, {
    value: "fa fa-microphone-slash",
    label: wp.element.createElement(
      "p",
      null,
      "\uF131 fa-microphone-slash"
    )
  }, {
    value: "fa fa-shield",
    label: wp.element.createElement(
      "p",
      null,
      "\uF132 fa-shield"
    )
  }, {
    value: "fa fa-calendar-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF133 fa-calendar-o"
    )
  }, {
    value: "fa fa-fire-extinguisher",
    label: wp.element.createElement(
      "p",
      null,
      "\uF134 fa-fire-extinguisher"
    )
  }, {
    value: "fa fa-rocket",
    label: wp.element.createElement(
      "p",
      null,
      "\uF135 fa-rocket"
    )
  }, {
    value: "fa fa-maxcdn",
    label: wp.element.createElement(
      "p",
      null,
      "\uF136 fa-maxcdn"
    )
  }, {
    value: "fa fa-chevron-circle-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF137 fa-chevron-circle-left"
    )
  }, {
    value: "fa fa-chevron-circle-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF138 fa-chevron-circle-right"
    )
  }, {
    value: "fa fa-chevron-circle-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF139 fa-chevron-circle-up"
    )
  }, {
    value: "fa fa-chevron-circle-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF13A fa-chevron-circle-down"
    )
  }, {
    value: "fa fa-html5",
    label: wp.element.createElement(
      "p",
      null,
      "\uF13B fa-html5"
    )
  }, {
    value: "fa fa-css3",
    label: wp.element.createElement(
      "p",
      null,
      "\uF13C fa-css3"
    )
  }, {
    value: "fa fa-anchor",
    label: wp.element.createElement(
      "p",
      null,
      "\uF13D fa-anchor"
    )
  }, {
    value: "fa fa-unlock-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF13E fa-unlock-alt"
    )
  }, {
    value: "fa fa-bullseye",
    label: wp.element.createElement(
      "p",
      null,
      "\uF140 fa-bullseye"
    )
  }, {
    value: "fa fa-ellipsis-h",
    label: wp.element.createElement(
      "p",
      null,
      "\uF141 fa-ellipsis-h"
    )
  }, {
    value: "fa fa-ellipsis-v",
    label: wp.element.createElement(
      "p",
      null,
      "\uF142 fa-ellipsis-v"
    )
  }, {
    value: "fa fa-rss-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF143 fa-rss-square"
    )
  }, {
    value: "fa fa-play-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF144 fa-play-circle"
    )
  }, {
    value: "fa fa-ticket",
    label: wp.element.createElement(
      "p",
      null,
      "\uF145 fa-ticket"
    )
  }, {
    value: "fa fa-minus-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF146 fa-minus-square"
    )
  }, {
    value: "fa fa-minus-square-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF147 fa-minus-square-o"
    )
  }, {
    value: "fa fa-level-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF148 fa-level-up"
    )
  }, {
    value: "fa fa-level-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF149 fa-level-down"
    )
  }, {
    value: "fa fa-check-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF14A fa-check-square"
    )
  }, {
    value: "fa fa-pencil-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF14B fa-pencil-square"
    )
  }, {
    value: "fa fa-external-link-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF14C fa-external-link-square"
    )
  }, {
    value: "fa fa-share-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF14D fa-share-square"
    )
  }, {
    value: "fa fa-compass",
    label: wp.element.createElement(
      "p",
      null,
      "\uF14E fa-compass"
    )
  }, {
    value: "fa fa-caret-square-o-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF150 fa-caret-square-o-down"
    )
  }, {
    value: "fa fa-caret-square-o-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF151 fa-caret-square-o-up"
    )
  }, {
    value: "fa fa-caret-square-o-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF152 fa-caret-square-o-right"
    )
  }, {
    value: "fa fa-eur",
    label: wp.element.createElement(
      "p",
      null,
      "\uF153 fa-eur"
    )
  }, {
    value: "fa fa-gbp",
    label: wp.element.createElement(
      "p",
      null,
      "\uF154 fa-gbp"
    )
  }, {
    value: "fa fa-usd",
    label: wp.element.createElement(
      "p",
      null,
      "\uF155 fa-usd"
    )
  }, {
    value: "fa fa-inr",
    label: wp.element.createElement(
      "p",
      null,
      "\uF156 fa-inr"
    )
  }, {
    value: "fa fa-jpy",
    label: wp.element.createElement(
      "p",
      null,
      "\uF157 fa-jpy"
    )
  }, {
    value: "fa fa-rub",
    label: wp.element.createElement(
      "p",
      null,
      "\uF158 fa-rub"
    )
  }, {
    value: "fa fa-krw",
    label: wp.element.createElement(
      "p",
      null,
      "\uF159 fa-krw"
    )
  }, {
    value: "fa fa-btc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF15A fa-btc"
    )
  }, {
    value: "fa fa-file",
    label: wp.element.createElement(
      "p",
      null,
      "\uF15B fa-file"
    )
  }, {
    value: "fa fa-file-text",
    label: wp.element.createElement(
      "p",
      null,
      "\uF15C fa-file-text"
    )
  }, {
    value: "fa fa-sort-alpha-asc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF15D fa-sort-alpha-asc"
    )
  }, {
    value: "fa fa-sort-alpha-desc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF15E fa-sort-alpha-desc"
    )
  }, {
    value: "fa fa-sort-amount-asc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF160 fa-sort-amount-asc"
    )
  }, {
    value: "fa fa-sort-amount-desc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF161 fa-sort-amount-desc"
    )
  }, {
    value: "fa fa-sort-numeric-asc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF162 fa-sort-numeric-asc"
    )
  }, {
    value: "fa fa-sort-numeric-desc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF163 fa-sort-numeric-desc"
    )
  }, {
    value: "fa fa-thumbs-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF164 fa-thumbs-up"
    )
  }, {
    value: "fa fa-thumbs-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF165 fa-thumbs-down"
    )
  }, {
    value: "fa fa-youtube-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF166 fa-youtube-square"
    )
  }, {
    value: "fa fa-youtube",
    label: wp.element.createElement(
      "p",
      null,
      "\uF167 fa-youtube"
    )
  }, {
    value: "fa fa-xing",
    label: wp.element.createElement(
      "p",
      null,
      "\uF168 fa-xing"
    )
  }, {
    value: "fa fa-xing-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF169 fa-xing-square"
    )
  }, {
    value: "fa fa-youtube-play",
    label: wp.element.createElement(
      "p",
      null,
      "\uF16A fa-youtube-play"
    )
  }, {
    value: "fa fa-dropbox",
    label: wp.element.createElement(
      "p",
      null,
      "\uF16B fa-dropbox"
    )
  }, {
    value: "fa fa-stack-overflow",
    label: wp.element.createElement(
      "p",
      null,
      "\uF16C fa-stack-overflow"
    )
  }, {
    value: "fa fa-instagram",
    label: wp.element.createElement(
      "p",
      null,
      "\uF16D fa-instagram"
    )
  }, {
    value: "fa fa-flickr",
    label: wp.element.createElement(
      "p",
      null,
      "\uF16E fa-flickr"
    )
  }, {
    value: "fa fa-adn",
    label: wp.element.createElement(
      "p",
      null,
      "\uF170 fa-adn"
    )
  }, {
    value: "fa fa-bitbucket",
    label: wp.element.createElement(
      "p",
      null,
      "\uF171 fa-bitbucket"
    )
  }, {
    value: "fa fa-bitbucket-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF172 fa-bitbucket-square"
    )
  }, {
    value: "fa fa-tumblr",
    label: wp.element.createElement(
      "p",
      null,
      "\uF173 fa-tumblr"
    )
  }, {
    value: "fa fa-tumblr-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF174 fa-tumblr-square"
    )
  }, {
    value: "fa fa-long-arrow-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF175 fa-long-arrow-down"
    )
  }, {
    value: "fa fa-long-arrow-up",
    label: wp.element.createElement(
      "p",
      null,
      "\uF176 fa-long-arrow-up"
    )
  }, {
    value: "fa fa-long-arrow-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF177 fa-long-arrow-left"
    )
  }, {
    value: "fa fa-long-arrow-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF178 fa-long-arrow-right"
    )
  }, {
    value: "fa fa-apple",
    label: wp.element.createElement(
      "p",
      null,
      "\uF179 fa-apple"
    )
  }, {
    value: "fa fa-windows",
    label: wp.element.createElement(
      "p",
      null,
      "\uF17A fa-windows"
    )
  }, {
    value: "fa fa-android",
    label: wp.element.createElement(
      "p",
      null,
      "\uF17B fa-android"
    )
  }, {
    value: "fa fa-linux",
    label: wp.element.createElement(
      "p",
      null,
      "\uF17C fa-linux"
    )
  }, {
    value: "fa fa-dribbble",
    label: wp.element.createElement(
      "p",
      null,
      "\uF17D fa-dribbble"
    )
  }, {
    value: "fa fa-skype",
    label: wp.element.createElement(
      "p",
      null,
      "\uF17E fa-skype"
    )
  }, {
    value: "fa fa-foursquare",
    label: wp.element.createElement(
      "p",
      null,
      "\uF180 fa-foursquare"
    )
  }, {
    value: "fa fa-trello",
    label: wp.element.createElement(
      "p",
      null,
      "\uF181 fa-trello"
    )
  }, {
    value: "fa fa-female",
    label: wp.element.createElement(
      "p",
      null,
      "\uF182 fa-female"
    )
  }, {
    value: "fa fa-male",
    label: wp.element.createElement(
      "p",
      null,
      "\uF183 fa-male"
    )
  }, {
    value: "fa fa-gratipay",
    label: wp.element.createElement(
      "p",
      null,
      "\uF184 fa-gratipay"
    )
  }, {
    value: "fa fa-sun-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF185 fa-sun-o"
    )
  }, {
    value: "fa fa-moon-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF186 fa-moon-o"
    )
  }, {
    value: "fa fa-archive",
    label: wp.element.createElement(
      "p",
      null,
      "\uF187 fa-archive"
    )
  }, {
    value: "fa fa-bug",
    label: wp.element.createElement(
      "p",
      null,
      "\uF188 fa-bug"
    )
  }, {
    value: "fa fa-vk",
    label: wp.element.createElement(
      "p",
      null,
      "\uF189 fa-vk"
    )
  }, {
    value: "fa fa-weibo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF18A fa-weibo"
    )
  }, {
    value: "fa fa-renren",
    label: wp.element.createElement(
      "p",
      null,
      "\uF18B fa-renren"
    )
  }, {
    value: "fa fa-pagelines",
    label: wp.element.createElement(
      "p",
      null,
      "\uF18C fa-pagelines"
    )
  }, {
    value: "fa fa-stack-exchange",
    label: wp.element.createElement(
      "p",
      null,
      "\uF18D fa-stack-exchange"
    )
  }, {
    value: "fa fa-arrow-circle-o-right",
    label: wp.element.createElement(
      "p",
      null,
      "\uF18E fa-arrow-circle-o-right"
    )
  }, {
    value: "fa fa-arrow-circle-o-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF190 fa-arrow-circle-o-left"
    )
  }, {
    value: "fa fa-caret-square-o-left",
    label: wp.element.createElement(
      "p",
      null,
      "\uF191 fa-caret-square-o-left"
    )
  }, {
    value: "fa fa-dot-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF192 fa-dot-circle-o"
    )
  }, {
    value: "fa fa-wheelchair",
    label: wp.element.createElement(
      "p",
      null,
      "\uF193 fa-wheelchair"
    )
  }, {
    value: "fa fa-vimeo-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF194 fa-vimeo-square"
    )
  }, {
    value: "fa fa-try",
    label: wp.element.createElement(
      "p",
      null,
      "\uF195 fa-try"
    )
  }, {
    value: "fa fa-plus-square-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF196 fa-plus-square-o"
    )
  }, {
    value: "fa fa-space-shuttle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF197 fa-space-shuttle"
    )
  }, {
    value: "fa fa-slack",
    label: wp.element.createElement(
      "p",
      null,
      "\uF198 fa-slack"
    )
  }, {
    value: "fa fa-envelope-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF199 fa-envelope-square"
    )
  }, {
    value: "fa fa-wordpress",
    label: wp.element.createElement(
      "p",
      null,
      "\uF19A fa-wordpress"
    )
  }, {
    value: "fa fa-openid",
    label: wp.element.createElement(
      "p",
      null,
      "\uF19B fa-openid"
    )
  }, {
    value: "fa fa-university",
    label: wp.element.createElement(
      "p",
      null,
      "\uF19C fa-university"
    )
  }, {
    value: "fa fa-graduation-cap",
    label: wp.element.createElement(
      "p",
      null,
      "\uF19D fa-graduation-cap"
    )
  }, {
    value: "fa fa-yahoo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF19E fa-yahoo"
    )
  }, {
    value: "fa fa-google",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A0 fa-google"
    )
  }, {
    value: "fa fa-reddit",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A1 fa-reddit"
    )
  }, {
    value: "fa fa-reddit-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A2 fa-reddit-square"
    )
  }, {
    value: "fa fa-stumbleupon-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A3 fa-stumbleupon-circle"
    )
  }, {
    value: "fa fa-stumbleupon",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A4 fa-stumbleupon"
    )
  }, {
    value: "fa fa-delicious",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A5 fa-delicious"
    )
  }, {
    value: "fa fa-digg",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A6 fa-digg"
    )
  }, {
    value: "fa fa-pied-piper-pp",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A7 fa-pied-piper-pp"
    )
  }, {
    value: "fa fa-pied-piper-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A8 fa-pied-piper-alt"
    )
  }, {
    value: "fa fa-drupal",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1A9 fa-drupal"
    )
  }, {
    value: "fa fa-joomla",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1AA fa-joomla"
    )
  }, {
    value: "fa fa-language",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1AB fa-language"
    )
  }, {
    value: "fa fa-fax",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1AC fa-fax"
    )
  }, {
    value: "fa fa-building",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1AD fa-building"
    )
  }, {
    value: "fa fa-child",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1AE fa-child"
    )
  }, {
    value: "fa fa-paw",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B0 fa-paw"
    )
  }, {
    value: "fa fa-spoon",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B1 fa-spoon"
    )
  }, {
    value: "fa fa-cube",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B2 fa-cube"
    )
  }, {
    value: "fa fa-cubes",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B3 fa-cubes"
    )
  }, {
    value: "fa fa-behance",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B4 fa-behance"
    )
  }, {
    value: "fa fa-behance-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B5 fa-behance-square"
    )
  }, {
    value: "fa fa-steam",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B6 fa-steam"
    )
  }, {
    value: "fa fa-steam-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B7 fa-steam-square"
    )
  }, {
    value: "fa fa-recycle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B8 fa-recycle"
    )
  }, {
    value: "fa fa-car",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1B9 fa-car"
    )
  }, {
    value: "fa fa-taxi",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1BA fa-taxi"
    )
  }, {
    value: "fa fa-tree",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1BB fa-tree"
    )
  }, {
    value: "fa fa-spotify",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1BC fa-spotify"
    )
  }, {
    value: "fa fa-deviantart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1BD fa-deviantart"
    )
  }, {
    value: "fa fa-soundcloud",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1BE fa-soundcloud"
    )
  }, {
    value: "fa fa-database",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C0 fa-database"
    )
  }, {
    value: "fa fa-file-pdf-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C1 fa-file-pdf-o"
    )
  }, {
    value: "fa fa-file-word-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C2 fa-file-word-o"
    )
  }, {
    value: "fa fa-file-excel-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C3 fa-file-excel-o"
    )
  }, {
    value: "fa fa-file-powerpoint-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C4 fa-file-powerpoint-o"
    )
  }, {
    value: "fa fa-file-image-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C5 fa-file-image-o"
    )
  }, {
    value: "fa fa-file-archive-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C6 fa-file-archive-o"
    )
  }, {
    value: "fa fa-file-audio-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C7 fa-file-audio-o"
    )
  }, {
    value: "fa fa-file-video-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C8 fa-file-video-o"
    )
  }, {
    value: "fa fa-file-code-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1C9 fa-file-code-o"
    )
  }, {
    value: "fa fa-vine",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1CA fa-vine"
    )
  }, {
    value: "fa fa-codepen",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1CB fa-codepen"
    )
  }, {
    value: "fa fa-jsfiddle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1CC fa-jsfiddle"
    )
  }, {
    value: "fa fa-life-ring",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1CD fa-life-ring"
    )
  }, {
    value: "fa fa-circle-o-notch",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1CE fa-circle-o-notch"
    )
  }, {
    value: "fa fa-rebel",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D0 fa-rebel"
    )
  }, {
    value: "fa fa-empire",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D1 fa-empire"
    )
  }, {
    value: "fa fa-git-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D2 fa-git-square"
    )
  }, {
    value: "fa fa-git",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D3 fa-git"
    )
  }, {
    value: "fa fa-hacker-news",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D4 fa-hacker-news"
    )
  }, {
    value: "fa fa-tencent-weibo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D5 fa-tencent-weibo"
    )
  }, {
    value: "fa fa-qq",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D6 fa-qq"
    )
  }, {
    value: "fa fa-weixin",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D7 fa-weixin"
    )
  }, {
    value: "fa fa-paper-plane",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D8 fa-paper-plane"
    )
  }, {
    value: "fa fa-paper-plane-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1D9 fa-paper-plane-o"
    )
  }, {
    value: "fa fa-history",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1DA fa-history"
    )
  }, {
    value: "fa fa-circle-thin",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1DB fa-circle-thin"
    )
  }, {
    value: "fa fa-header",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1DC fa-header"
    )
  }, {
    value: "fa fa-paragraph",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1DD fa-paragraph"
    )
  }, {
    value: "fa fa-sliders",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1DE fa-sliders"
    )
  }, {
    value: "fa fa-share-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E0 fa-share-alt"
    )
  }, {
    value: "fa fa-share-alt-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E1 fa-share-alt-square"
    )
  }, {
    value: "fa fa-bomb",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E2 fa-bomb"
    )
  }, {
    value: "fa fa-futbol-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E3 fa-futbol-o"
    )
  }, {
    value: "fa fa-tty",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E4 fa-tty"
    )
  }, {
    value: "fa fa-binoculars",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E5 fa-binoculars"
    )
  }, {
    value: "fa fa-plug",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E6 fa-plug"
    )
  }, {
    value: "fa fa-slideshare",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E7 fa-slideshare"
    )
  }, {
    value: "fa fa-twitch",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E8 fa-twitch"
    )
  }, {
    value: "fa fa-yelp",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1E9 fa-yelp"
    )
  }, {
    value: "fa fa-newspaper-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1EA fa-newspaper-o"
    )
  }, {
    value: "fa fa-wifi",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1EB fa-wifi"
    )
  }, {
    value: "fa fa-calculator",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1EC fa-calculator"
    )
  }, {
    value: "fa fa-paypal",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1ED fa-paypal"
    )
  }, {
    value: "fa fa-google-wallet",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1EE fa-google-wallet"
    )
  }, {
    value: "fa fa-cc-visa",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F0 fa-cc-visa"
    )
  }, {
    value: "fa fa-cc-mastercard",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F1 fa-cc-mastercard"
    )
  }, {
    value: "fa fa-cc-discover",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F2 fa-cc-discover"
    )
  }, {
    value: "fa fa-cc-amex",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F3 fa-cc-amex"
    )
  }, {
    value: "fa fa-cc-paypal",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F4 fa-cc-paypal"
    )
  }, {
    value: "fa fa-cc-stripe",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F5 fa-cc-stripe"
    )
  }, {
    value: "fa fa-bell-slash",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F6 fa-bell-slash"
    )
  }, {
    value: "fa fa-bell-slash-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F7 fa-bell-slash-o"
    )
  }, {
    value: "fa fa-trash",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F8 fa-trash"
    )
  }, {
    value: "fa fa-copyright",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1F9 fa-copyright"
    )
  }, {
    value: "fa fa-at",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1FA fa-at"
    )
  }, {
    value: "fa fa-eyedropper",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1FB fa-eyedropper"
    )
  }, {
    value: "fa fa-paint-brush",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1FC fa-paint-brush"
    )
  }, {
    value: "fa fa-birthday-cake",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1FD fa-birthday-cake"
    )
  }, {
    value: "fa fa-area-chart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF1FE fa-area-chart"
    )
  }, {
    value: "fa fa-pie-chart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF200 fa-pie-chart"
    )
  }, {
    value: "fa fa-line-chart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF201 fa-line-chart"
    )
  }, {
    value: "fa fa-lastfm",
    label: wp.element.createElement(
      "p",
      null,
      "\uF202 fa-lastfm"
    )
  }, {
    value: "fa fa-lastfm-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF203 fa-lastfm-square"
    )
  }, {
    value: "fa fa-toggle-off",
    label: wp.element.createElement(
      "p",
      null,
      "\uF204 fa-toggle-off"
    )
  }, {
    value: "fa fa-toggle-on",
    label: wp.element.createElement(
      "p",
      null,
      "\uF205 fa-toggle-on"
    )
  }, {
    value: "fa fa-bicycle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF206 fa-bicycle"
    )
  }, {
    value: "fa fa-bus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF207 fa-bus"
    )
  }, {
    value: "fa fa-ioxhost",
    label: wp.element.createElement(
      "p",
      null,
      "\uF208 fa-ioxhost"
    )
  }, {
    value: "fa fa-angellist",
    label: wp.element.createElement(
      "p",
      null,
      "\uF209 fa-angellist"
    )
  }, {
    value: "fa fa-cc",
    label: wp.element.createElement(
      "p",
      null,
      "\uF20A fa-cc"
    )
  }, {
    value: "fa fa-ils",
    label: wp.element.createElement(
      "p",
      null,
      "\uF20B fa-ils"
    )
  }, {
    value: "fa fa-meanpath",
    label: wp.element.createElement(
      "p",
      null,
      "\uF20C fa-meanpath"
    )
  }, {
    value: "fa fa-buysellads",
    label: wp.element.createElement(
      "p",
      null,
      "\uF20D fa-buysellads"
    )
  }, {
    value: "fa fa-connectdevelop",
    label: wp.element.createElement(
      "p",
      null,
      "\uF20E fa-connectdevelop"
    )
  }, {
    value: "fa fa-dashcube",
    label: wp.element.createElement(
      "p",
      null,
      "\uF210 fa-dashcube"
    )
  }, {
    value: "fa fa-forumbee",
    label: wp.element.createElement(
      "p",
      null,
      "\uF211 fa-forumbee"
    )
  }, {
    value: "fa fa-leanpub",
    label: wp.element.createElement(
      "p",
      null,
      "\uF212 fa-leanpub"
    )
  }, {
    value: "fa fa-sellsy",
    label: wp.element.createElement(
      "p",
      null,
      "\uF213 fa-sellsy"
    )
  }, {
    value: "fa fa-shirtsinbulk",
    label: wp.element.createElement(
      "p",
      null,
      "\uF214 fa-shirtsinbulk"
    )
  }, {
    value: "fa fa-simplybuilt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF215 fa-simplybuilt"
    )
  }, {
    value: "fa fa-skyatlas",
    label: wp.element.createElement(
      "p",
      null,
      "\uF216 fa-skyatlas"
    )
  }, {
    value: "fa fa-cart-plus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF217 fa-cart-plus"
    )
  }, {
    value: "fa fa-cart-arrow-down",
    label: wp.element.createElement(
      "p",
      null,
      "\uF218 fa-cart-arrow-down"
    )
  }, {
    value: "fa fa-diamond",
    label: wp.element.createElement(
      "p",
      null,
      "\uF219 fa-diamond"
    )
  }, {
    value: "fa fa-ship",
    label: wp.element.createElement(
      "p",
      null,
      "\uF21A fa-ship"
    )
  }, {
    value: "fa fa-user-secret",
    label: wp.element.createElement(
      "p",
      null,
      "\uF21B fa-user-secret"
    )
  }, {
    value: "fa fa-motorcycle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF21C fa-motorcycle"
    )
  }, {
    value: "fa fa-street-view",
    label: wp.element.createElement(
      "p",
      null,
      "\uF21D fa-street-view"
    )
  }, {
    value: "fa fa-heartbeat",
    label: wp.element.createElement(
      "p",
      null,
      "\uF21E fa-heartbeat"
    )
  }, {
    value: "fa fa-venus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF221 fa-venus"
    )
  }, {
    value: "fa fa-mars",
    label: wp.element.createElement(
      "p",
      null,
      "\uF222 fa-mars"
    )
  }, {
    value: "fa fa-mercury",
    label: wp.element.createElement(
      "p",
      null,
      "\uF223 fa-mercury"
    )
  }, {
    value: "fa fa-transgender",
    label: wp.element.createElement(
      "p",
      null,
      "\uF224 fa-transgender"
    )
  }, {
    value: "fa fa-transgender-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF225 fa-transgender-alt"
    )
  }, {
    value: "fa fa-venus-double",
    label: wp.element.createElement(
      "p",
      null,
      "\uF226 fa-venus-double"
    )
  }, {
    value: "fa fa-mars-double",
    label: wp.element.createElement(
      "p",
      null,
      "\uF227 fa-mars-double"
    )
  }, {
    value: "fa fa-venus-mars",
    label: wp.element.createElement(
      "p",
      null,
      "\uF228 fa-venus-mars"
    )
  }, {
    value: "fa fa-mars-stroke",
    label: wp.element.createElement(
      "p",
      null,
      "\uF229 fa-mars-stroke"
    )
  }, {
    value: "fa fa-mars-stroke-v",
    label: wp.element.createElement(
      "p",
      null,
      "\uF22A fa-mars-stroke-v"
    )
  }, {
    value: "fa fa-mars-stroke-h",
    label: wp.element.createElement(
      "p",
      null,
      "\uF22B fa-mars-stroke-h"
    )
  }, {
    value: "fa fa-neuter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF22C fa-neuter"
    )
  }, {
    value: "fa fa-genderless",
    label: wp.element.createElement(
      "p",
      null,
      "\uF22D fa-genderless"
    )
  }, {
    value: "fa fa-facebook-official",
    label: wp.element.createElement(
      "p",
      null,
      "\uF230 fa-facebook-official"
    )
  }, {
    value: "fa fa-pinterest-p",
    label: wp.element.createElement(
      "p",
      null,
      "\uF231 fa-pinterest-p"
    )
  }, {
    value: "fa fa-whatsapp",
    label: wp.element.createElement(
      "p",
      null,
      "\uF232 fa-whatsapp"
    )
  }, {
    value: "fa fa-server",
    label: wp.element.createElement(
      "p",
      null,
      "\uF233 fa-server"
    )
  }, {
    value: "fa fa-user-plus",
    label: wp.element.createElement(
      "p",
      null,
      "\uF234 fa-user-plus"
    )
  }, {
    value: "fa fa-user-times",
    label: wp.element.createElement(
      "p",
      null,
      "\uF235 fa-user-times"
    )
  }, {
    value: "fa fa-bed",
    label: wp.element.createElement(
      "p",
      null,
      "\uF236 fa-bed"
    )
  }, {
    value: "fa fa-viacoin",
    label: wp.element.createElement(
      "p",
      null,
      "\uF237 fa-viacoin"
    )
  }, {
    value: "fa fa-train",
    label: wp.element.createElement(
      "p",
      null,
      "\uF238 fa-train"
    )
  }, {
    value: "fa fa-subway",
    label: wp.element.createElement(
      "p",
      null,
      "\uF239 fa-subway"
    )
  }, {
    value: "fa fa-medium",
    label: wp.element.createElement(
      "p",
      null,
      "\uF23A fa-medium"
    )
  }, {
    value: "fa fa-y-combinator",
    label: wp.element.createElement(
      "p",
      null,
      "\uF23B fa-y-combinator"
    )
  }, {
    value: "fa fa-optin-monster",
    label: wp.element.createElement(
      "p",
      null,
      "\uF23C fa-optin-monster"
    )
  }, {
    value: "fa fa-opencart",
    label: wp.element.createElement(
      "p",
      null,
      "\uF23D fa-opencart"
    )
  }, {
    value: "fa fa-expeditedssl",
    label: wp.element.createElement(
      "p",
      null,
      "\uF23E fa-expeditedssl"
    )
  }, {
    value: "fa fa-battery-full",
    label: wp.element.createElement(
      "p",
      null,
      "\uF240 fa-battery-full"
    )
  }, {
    value: "fa fa-battery-three-quarters",
    label: wp.element.createElement(
      "p",
      null,
      "\uF241 fa-battery-three-quarters"
    )
  }, {
    value: "fa fa-battery-half",
    label: wp.element.createElement(
      "p",
      null,
      "\uF242 fa-battery-half"
    )
  }, {
    value: "fa fa-battery-quarter",
    label: wp.element.createElement(
      "p",
      null,
      "\uF243 fa-battery-quarter"
    )
  }, {
    value: "fa fa-battery-empty",
    label: wp.element.createElement(
      "p",
      null,
      "\uF244 fa-battery-empty"
    )
  }, {
    value: "fa fa-mouse-pointer",
    label: wp.element.createElement(
      "p",
      null,
      "\uF245 fa-mouse-pointer"
    )
  }, {
    value: "fa fa-i-cursor",
    label: wp.element.createElement(
      "p",
      null,
      "\uF246 fa-i-cursor"
    )
  }, {
    value: "fa fa-object-group",
    label: wp.element.createElement(
      "p",
      null,
      "\uF247 fa-object-group"
    )
  }, {
    value: "fa fa-object-ungroup",
    label: wp.element.createElement(
      "p",
      null,
      "\uF248 fa-object-ungroup"
    )
  }, {
    value: "fa fa-sticky-note",
    label: wp.element.createElement(
      "p",
      null,
      "\uF249 fa-sticky-note"
    )
  }, {
    value: "fa fa-sticky-note-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF24A fa-sticky-note-o"
    )
  }, {
    value: "fa fa-cc-jcb",
    label: wp.element.createElement(
      "p",
      null,
      "\uF24B fa-cc-jcb"
    )
  }, {
    value: "fa fa-cc-diners-club",
    label: wp.element.createElement(
      "p",
      null,
      "\uF24C fa-cc-diners-club"
    )
  }, {
    value: "fa fa-clone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF24D fa-clone"
    )
  }, {
    value: "fa fa-balance-scale",
    label: wp.element.createElement(
      "p",
      null,
      "\uF24E fa-balance-scale"
    )
  }, {
    value: "fa fa-hourglass-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF250 fa-hourglass-o"
    )
  }, {
    value: "fa fa-hourglass-start",
    label: wp.element.createElement(
      "p",
      null,
      "\uF251 fa-hourglass-start"
    )
  }, {
    value: "fa fa-hourglass-half",
    label: wp.element.createElement(
      "p",
      null,
      "\uF252 fa-hourglass-half"
    )
  }, {
    value: "fa fa-hourglass-end",
    label: wp.element.createElement(
      "p",
      null,
      "\uF253 fa-hourglass-end"
    )
  }, {
    value: "fa fa-hourglass",
    label: wp.element.createElement(
      "p",
      null,
      "\uF254 fa-hourglass"
    )
  }, {
    value: "fa fa-hand-rock-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF255 fa-hand-rock-o"
    )
  }, {
    value: "fa fa-hand-paper-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF256 fa-hand-paper-o"
    )
  }, {
    value: "fa fa-hand-scissors-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF257 fa-hand-scissors-o"
    )
  }, {
    value: "fa fa-hand-lizard-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF258 fa-hand-lizard-o"
    )
  }, {
    value: "fa fa-hand-spock-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF259 fa-hand-spock-o"
    )
  }, {
    value: "fa fa-hand-pointer-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF25A fa-hand-pointer-o"
    )
  }, {
    value: "fa fa-hand-peace-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF25B fa-hand-peace-o"
    )
  }, {
    value: "fa fa-trademark",
    label: wp.element.createElement(
      "p",
      null,
      "\uF25C fa-trademark"
    )
  }, {
    value: "fa fa-registered",
    label: wp.element.createElement(
      "p",
      null,
      "\uF25D fa-registered"
    )
  }, {
    value: "fa fa-creative-commons",
    label: wp.element.createElement(
      "p",
      null,
      "\uF25E fa-creative-commons"
    )
  }, {
    value: "fa fa-gg",
    label: wp.element.createElement(
      "p",
      null,
      "\uF260 fa-gg"
    )
  }, {
    value: "fa fa-gg-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF261 fa-gg-circle"
    )
  }, {
    value: "fa fa-tripadvisor",
    label: wp.element.createElement(
      "p",
      null,
      "\uF262 fa-tripadvisor"
    )
  }, {
    value: "fa fa-odnoklassniki",
    label: wp.element.createElement(
      "p",
      null,
      "\uF263 fa-odnoklassniki"
    )
  }, {
    value: "fa fa-odnoklassniki-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF264 fa-odnoklassniki-square"
    )
  }, {
    value: "fa fa-get-pocket",
    label: wp.element.createElement(
      "p",
      null,
      "\uF265 fa-get-pocket"
    )
  }, {
    value: "fa fa-wikipedia-w",
    label: wp.element.createElement(
      "p",
      null,
      "\uF266 fa-wikipedia-w"
    )
  }, {
    value: "fa fa-safari",
    label: wp.element.createElement(
      "p",
      null,
      "\uF267 fa-safari"
    )
  }, {
    value: "fa fa-chrome",
    label: wp.element.createElement(
      "p",
      null,
      "\uF268 fa-chrome"
    )
  }, {
    value: "fa fa-firefox",
    label: wp.element.createElement(
      "p",
      null,
      "\uF269 fa-firefox"
    )
  }, {
    value: "fa fa-opera",
    label: wp.element.createElement(
      "p",
      null,
      "\uF26A fa-opera"
    )
  }, {
    value: "fa fa-internet-explorer",
    label: wp.element.createElement(
      "p",
      null,
      "\uF26B fa-internet-explorer"
    )
  }, {
    value: "fa fa-television",
    label: wp.element.createElement(
      "p",
      null,
      "\uF26C fa-television"
    )
  }, {
    value: "fa fa-contao",
    label: wp.element.createElement(
      "p",
      null,
      "\uF26D fa-contao"
    )
  }, {
    value: "fa fa-500px",
    label: wp.element.createElement(
      "p",
      null,
      "\uF26E fa-500px"
    )
  }, {
    value: "fa fa-amazon",
    label: wp.element.createElement(
      "p",
      null,
      "\uF270 fa-amazon"
    )
  }, {
    value: "fa fa-calendar-plus-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF271 fa-calendar-plus-o"
    )
  }, {
    value: "fa fa-calendar-minus-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF272 fa-calendar-minus-o"
    )
  }, {
    value: "fa fa-calendar-times-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF273 fa-calendar-times-o"
    )
  }, {
    value: "fa fa-calendar-check-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF274 fa-calendar-check-o"
    )
  }, {
    value: "fa fa-industry",
    label: wp.element.createElement(
      "p",
      null,
      "\uF275 fa-industry"
    )
  }, {
    value: "fa fa-map-pin",
    label: wp.element.createElement(
      "p",
      null,
      "\uF276 fa-map-pin"
    )
  }, {
    value: "fa fa-map-signs",
    label: wp.element.createElement(
      "p",
      null,
      "\uF277 fa-map-signs"
    )
  }, {
    value: "fa fa-map-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF278 fa-map-o"
    )
  }, {
    value: "fa fa-map",
    label: wp.element.createElement(
      "p",
      null,
      "\uF279 fa-map"
    )
  }, {
    value: "fa fa-commenting",
    label: wp.element.createElement(
      "p",
      null,
      "\uF27A fa-commenting"
    )
  }, {
    value: "fa fa-commenting-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF27B fa-commenting-o"
    )
  }, {
    value: "fa fa-houzz",
    label: wp.element.createElement(
      "p",
      null,
      "\uF27C fa-houzz"
    )
  }, {
    value: "fa fa-vimeo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF27D fa-vimeo"
    )
  }, {
    value: "fa fa-black-tie",
    label: wp.element.createElement(
      "p",
      null,
      "\uF27E fa-black-tie"
    )
  }, {
    value: "fa fa-fonticons",
    label: wp.element.createElement(
      "p",
      null,
      "\uF280 fa-fonticons"
    )
  }, {
    value: "fa fa-reddit-alien",
    label: wp.element.createElement(
      "p",
      null,
      "\uF281 fa-reddit-alien"
    )
  }, {
    value: "fa fa-edge",
    label: wp.element.createElement(
      "p",
      null,
      "\uF282 fa-edge"
    )
  }, {
    value: "fa fa-credit-card-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF283 fa-credit-card-alt"
    )
  }, {
    value: "fa fa-codiepie",
    label: wp.element.createElement(
      "p",
      null,
      "\uF284 fa-codiepie"
    )
  }, {
    value: "fa fa-modx",
    label: wp.element.createElement(
      "p",
      null,
      "\uF285 fa-modx"
    )
  }, {
    value: "fa fa-fort-awesome",
    label: wp.element.createElement(
      "p",
      null,
      "\uF286 fa-fort-awesome"
    )
  }, {
    value: "fa fa-usb",
    label: wp.element.createElement(
      "p",
      null,
      "\uF287 fa-usb"
    )
  }, {
    value: "fa fa-product-hunt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF288 fa-product-hunt"
    )
  }, {
    value: "fa fa-mixcloud",
    label: wp.element.createElement(
      "p",
      null,
      "\uF289 fa-mixcloud"
    )
  }, {
    value: "fa fa-scribd",
    label: wp.element.createElement(
      "p",
      null,
      "\uF28A fa-scribd"
    )
  }, {
    value: "fa fa-pause-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF28B fa-pause-circle"
    )
  }, {
    value: "fa fa-pause-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF28C fa-pause-circle-o"
    )
  }, {
    value: "fa fa-stop-circle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF28D fa-stop-circle"
    )
  }, {
    value: "fa fa-stop-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF28E fa-stop-circle-o"
    )
  }, {
    value: "fa fa-shopping-bag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF290 fa-shopping-bag"
    )
  }, {
    value: "fa fa-shopping-basket",
    label: wp.element.createElement(
      "p",
      null,
      "\uF291 fa-shopping-basket"
    )
  }, {
    value: "fa fa-hashtag",
    label: wp.element.createElement(
      "p",
      null,
      "\uF292 fa-hashtag"
    )
  }, {
    value: "fa fa-bluetooth",
    label: wp.element.createElement(
      "p",
      null,
      "\uF293 fa-bluetooth"
    )
  }, {
    value: "fa fa-bluetooth-b",
    label: wp.element.createElement(
      "p",
      null,
      "\uF294 fa-bluetooth-b"
    )
  }, {
    value: "fa fa-percent",
    label: wp.element.createElement(
      "p",
      null,
      "\uF295 fa-percent"
    )
  }, {
    value: "fa fa-gitlab",
    label: wp.element.createElement(
      "p",
      null,
      "\uF296 fa-gitlab"
    )
  }, {
    value: "fa fa-wpbeginner",
    label: wp.element.createElement(
      "p",
      null,
      "\uF297 fa-wpbeginner"
    )
  }, {
    value: "fa fa-wpforms",
    label: wp.element.createElement(
      "p",
      null,
      "\uF298 fa-wpforms"
    )
  }, {
    value: "fa fa-envira",
    label: wp.element.createElement(
      "p",
      null,
      "\uF299 fa-envira"
    )
  }, {
    value: "fa fa-universal-access",
    label: wp.element.createElement(
      "p",
      null,
      "\uF29A fa-universal-access"
    )
  }, {
    value: "fa fa-wheelchair-alt",
    label: wp.element.createElement(
      "p",
      null,
      "\uF29B fa-wheelchair-alt"
    )
  }, {
    value: "fa fa-question-circle-o",
    label: wp.element.createElement(
      "p",
      null,
      "\uF29C fa-question-circle-o"
    )
  }, {
    value: "fa fa-blind",
    label: wp.element.createElement(
      "p",
      null,
      "\uF29D fa-blind"
    )
  }, {
    value: "fa fa-audio-description",
    label: wp.element.createElement(
      "p",
      null,
      "\uF29E fa-audio-description"
    )
  }, {
    value: "fa fa-volume-control-phone",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A0 fa-volume-control-phone"
    )
  }, {
    value: "fa fa-braille",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A1 fa-braille"
    )
  }, {
    value: "fa fa-assistive-listening-systems",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A2 fa-assistive-listening-systems"
    )
  }, {
    value: "fa fa-american-sign-language-interpreting",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A3 fa-american-sign-language-interpreting"
    )
  }, {
    value: "fa fa-deaf",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A4 fa-deaf"
    )
  }, {
    value: "fa fa-glide",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A5 fa-glide"
    )
  }, {
    value: "fa fa-glide-g",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A6 fa-glide-g"
    )
  }, {
    value: "fa fa-sign-language",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A7 fa-sign-language"
    )
  }, {
    value: "fa fa-low-vision",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A8 fa-low-vision"
    )
  }, {
    value: "fa fa-viadeo",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2A9 fa-viadeo"
    )
  }, {
    value: "fa fa-viadeo-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2AA fa-viadeo-square"
    )
  }, {
    value: "fa fa-snapchat",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2AB fa-snapchat"
    )
  }, {
    value: "fa fa-snapchat-ghost",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2AC fa-snapchat-ghost"
    )
  }, {
    value: "fa fa-snapchat-square",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2AD fa-snapchat-square"
    )
  }, {
    value: "fa fa-pied-piper",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2AE fa-pied-piper"
    )
  }, {
    value: "fa fa-first-order",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2B0 fa-first-order"
    )
  }, {
    value: "fa fa-yoast",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2B1 fa-yoast"
    )
  }, {
    value: "fa fa-themeisle",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2B2 fa-themeisle"
    )
  }, {
    value: "fa fa-google-plus-official",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2B3 fa-google-plus-official"
    )
  }, {
    value: "fa fa-font-awesome",
    label: wp.element.createElement(
      "p",
      null,
      "\uF2B4 fa-font-awesome"
    )
  }];
  return wp.element.createElement(SelectControl, {
    label: __("Choose Icon"),
    options: 1 == __WEBPACK_IMPORTED_MODULE_0__blocks_settings__["a" /* FontAwesomeEnabled */] ? ICONS : DASHICONS,
    value: icon,
    onChange: onChangeIcon
  });
}

/***/ })
/******/ ]);