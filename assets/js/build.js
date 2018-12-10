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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dualHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pricingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return maps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return countUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontAwesomeEnabled; });
//Blocks Keys
var _PremiumBlocksSetting = PremiumBlocksSettings.activeBlocks,
    banner = _PremiumBlocksSetting.banner,
    dualHeading = _PremiumBlocksSetting.dualHeading,
    pricingTable = _PremiumBlocksSetting.pricingTable,
    maps = _PremiumBlocksSetting.maps,
    testimonial = _PremiumBlocksSetting.testimonial,
    countUp = _PremiumBlocksSetting.countUp,
    icon = _PremiumBlocksSetting.icon,
    button = _PremiumBlocksSetting.button,
    container = _PremiumBlocksSetting.container,
    accordion = _PremiumBlocksSetting.accordion;

//Plugin Config Keys


var _FontAwesomeConfig = FontAwesomeConfig,
    FontAwesomeEnabled = _FontAwesomeConfig.FontAwesomeEnabled;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PbgIcon = function (_wp$element$Component) {
  _inherits(PbgIcon, _wp$element$Component);

  function PbgIcon() {
    _classCallCheck(this, PbgIcon);

    return _possibleConstructorReturn(this, (PbgIcon.__proto__ || Object.getPrototypeOf(PbgIcon)).apply(this, arguments));
  }

  _createClass(PbgIcon, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.icon !== nextProps.icon;
    }
  }, {
    key: "render",
    value: function render() {
      var icon = this.props.icon;


      return wp.element.createElement("i", { className: "pbg-" + icon + "-block", "aria-hidden": "true" });
    }
  }]);

  return PbgIcon;
}(wp.element.Component);

/* harmony default export */ __webpack_exports__["a"] = (PbgIcon);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumBorder;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl;
var PanelColorSettings = wp.editor.PanelColorSettings;

function PremiumBorder(props) {
  var borderType = props.borderType,
      borderWidth = props.borderWidth,
      borderColor = props.borderColor,
      borderRadius = props.borderRadius,
      _props$onChangeType = props.onChangeType,
      onChangeType = _props$onChangeType === undefined ? function () {} : _props$onChangeType,
      _props$onChangeWidth = props.onChangeWidth,
      onChangeWidth = _props$onChangeWidth === undefined ? function () {} : _props$onChangeWidth,
      _props$onChangeColor = props.onChangeColor,
      onChangeColor = _props$onChangeColor === undefined ? function () {} : _props$onChangeColor,
      _props$onChangeRadius = props.onChangeRadius,
      onChangeRadius = _props$onChangeRadius === undefined ? function () {} : _props$onChangeRadius;

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
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(SelectControl, {
      label: __("Border Type"),
      options: BORDER,
      value: borderType,
      onChange: onChangeType
    }),
    "none" != borderType && wp.element.createElement(RangeControl, {
      label: __("Border Width"),
      value: borderWidth,
      min: "0",
      max: "50",
      onChange: onChangeWidth
    }),
    "none" != borderType && wp.element.createElement(PanelColorSettings, _extends({
      title: __("Colors"),
      colorSettings: [{
        value: borderColor,
        onChange: onChangeColor,
        label: __("Border Color")
      }]
    }, props)),
    wp.element.createElement(RangeControl, {
      label: __("Border Radius"),
      value: borderRadius,
      min: "0",
      max: "150",
      onChange: onChangeRadius
    })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumTypo;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    CheckboxControl = _wp$components.CheckboxControl;

function PremiumTypo(props) {
  var components = props.components,
      size = props.size,
      weight = props.weight,
      style = props.style,
      spacing = props.spacing,
      line = props.line,
      upper = props.upper,
      _props$onChangeSize = props.onChangeSize,
      onChangeSize = _props$onChangeSize === undefined ? function () {} : _props$onChangeSize,
      _props$onChangeWeight = props.onChangeWeight,
      onChangeWeight = _props$onChangeWeight === undefined ? function () {} : _props$onChangeWeight,
      _props$onChangeStyle = props.onChangeStyle,
      onChangeStyle = _props$onChangeStyle === undefined ? function () {} : _props$onChangeStyle,
      _props$onChangeSpacin = props.onChangeSpacing,
      onChangeSpacing = _props$onChangeSpacin === undefined ? function () {} : _props$onChangeSpacin,
      _props$onChangeLine = props.onChangeLine,
      onChangeLine = _props$onChangeLine === undefined ? function () {} : _props$onChangeLine,
      _props$onChangeUpper = props.onChangeUpper,
      onChangeUpper = _props$onChangeUpper === undefined ? function () {} : _props$onChangeUpper;

  var STYLE = [{
    value: "normal",
    label: "Normal"
  }, {
    value: "italic",
    label: "Italic"
  }];
  return wp.element.createElement(
    Fragment,
    null,
    components.includes("size") && wp.element.createElement(RangeControl, {
      label: __("Font Size (PX)"),
      value: size,
      min: "10",
      max: "80",
      onChange: onChangeSize
    }),
    components.includes("weight") && wp.element.createElement(RangeControl, {
      label: __("Font Weight"),
      min: "100",
      max: "900",
      step: "100",
      value: weight,
      onChange: onChangeWeight
    }),
    components.includes("style") && wp.element.createElement(SelectControl, {
      label: __("Style"),
      options: STYLE,
      value: style,
      onChange: onChangeStyle
    }),
    components.includes("upper") && wp.element.createElement(CheckboxControl, {
      label: __("Uppercase"),
      checked: upper,
      onChange: onChangeUpper
    }),
    components.includes("spacing") && wp.element.createElement(RangeControl, {
      label: __("Letter Spacing (PX)"),
      value: spacing,
      onChange: onChangeSpacing
    }),
    components.includes("line") && wp.element.createElement(RangeControl, {
      label: __("Line Height (PX)"),
      value: line,
      onChange: onChangeLine
    })
  );
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumTextShadow;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;
var PanelColorSettings = wp.editor.PanelColorSettings;

function PremiumTextShadow(props) {
  var label = props.label,
      color = props.color,
      blur = props.blur,
      horizontal = props.horizontal,
      vertical = props.vertical,
      _props$onChangeColor = props.onChangeColor,
      onChangeColor = _props$onChangeColor === undefined ? function () {} : _props$onChangeColor,
      _props$onChangeBlur = props.onChangeBlur,
      onChangeBlur = _props$onChangeBlur === undefined ? function () {} : _props$onChangeBlur,
      _props$onChangehHoriz = props.onChangehHorizontal,
      onChangehHorizontal = _props$onChangehHoriz === undefined ? function () {} : _props$onChangehHoriz,
      _props$onChangeVertic = props.onChangeVertical,
      onChangeVertical = _props$onChangeVertic === undefined ? function () {} : _props$onChangeVertic;


  return wp.element.createElement(
    PanelBody,
    {
      title: __(label || "Text Shadow"),
      className: "premium-panel-body premium-panel-body-inner",
      initialOpen: false
    },
    wp.element.createElement(PanelColorSettings, {
      title: __("Colors"),
      colorSettings: [{
        label: __("Shadow Color"),
        value: color,
        onChange: onChangeColor
      }]
    }),
    wp.element.createElement(RangeControl, { label: __("Blur"), value: blur, onChange: onChangeBlur }),
    wp.element.createElement(RangeControl, {
      label: __("Horizontal"),
      value: horizontal,
      onChange: onChangehHorizontal
    }),
    wp.element.createElement(RangeControl, {
      label: __("Vertical"),
      value: vertical,
      onChange: onChangeVertical
    })
  );
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumPadding;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var RangeControl = wp.components.RangeControl;


function PremiumPadding(props) {
  var paddingTop = props.paddingTop,
      paddingRight = props.paddingRight,
      paddingBottom = props.paddingBottom,
      paddingLeft = props.paddingLeft,
      _props$onChangePadTop = props.onChangePadTop,
      onChangePadTop = _props$onChangePadTop === undefined ? function () {} : _props$onChangePadTop,
      _props$onChangePadRig = props.onChangePadRight,
      onChangePadRight = _props$onChangePadRig === undefined ? function () {} : _props$onChangePadRig,
      _props$onChangePadBot = props.onChangePadBottom,
      onChangePadBottom = _props$onChangePadBot === undefined ? function () {} : _props$onChangePadBot,
      _props$onChangePadLef = props.onChangePadLeft,
      onChangePadLeft = _props$onChangePadLef === undefined ? function () {} : _props$onChangePadLef;

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(RangeControl, {
      label: __("Padding Top (PX)"),
      value: paddingTop,
      min: "0",
      max: "150",
      onChange: onChangePadTop
    }),
    wp.element.createElement(RangeControl, {
      label: __("Padding Right (PX)"),
      value: paddingRight,
      min: "0",
      max: "150",
      onChange: onChangePadRight
    }),
    wp.element.createElement(RangeControl, {
      label: __("Padding Bottom (PX)"),
      value: paddingBottom,
      min: "0",
      max: "150",
      onChange: onChangePadBottom
    }),
    wp.element.createElement(RangeControl, {
      label: __("Padding Left (PX)"),
      value: paddingLeft,
      min: "0",
      max: "150",
      onChange: onChangePadLeft
    })
  );
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumMargin;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var RangeControl = wp.components.RangeControl;

function PremiumMargin(props) {
  var directions = props.directions,
      marginTop = props.marginTop,
      marginRight = props.marginRight,
      marginBottom = props.marginBottom,
      marginLeft = props.marginLeft,
      _props$onChangeMarTop = props.onChangeMarTop,
      onChangeMarTop = _props$onChangeMarTop === undefined ? function () {} : _props$onChangeMarTop,
      _props$onChangeMarRig = props.onChangeMarRight,
      onChangeMarRight = _props$onChangeMarRig === undefined ? function () {} : _props$onChangeMarRig,
      _props$onChangeMarBot = props.onChangeMarBottom,
      onChangeMarBottom = _props$onChangeMarBot === undefined ? function () {} : _props$onChangeMarBot,
      _props$onChangeMarLef = props.onChangeMarLeft,
      onChangeMarLeft = _props$onChangeMarLef === undefined ? function () {} : _props$onChangeMarLef;

  return wp.element.createElement(
    Fragment,
    null,
    (directions.includes("all") || directions.includes("top")) && wp.element.createElement(RangeControl, {
      label: __("Margin Top (PX)"),
      value: marginTop,
      min: "0",
      max: "150",
      onChange: onChangeMarTop
    }),
    (directions.includes("all") || directions.includes("right")) && wp.element.createElement(RangeControl, {
      label: __("Margin Right (PX)"),
      value: marginRight,
      min: "0",
      max: "150",
      onChange: onChangeMarRight
    }),
    (directions.includes("all") || directions.includes("bottom")) && wp.element.createElement(RangeControl, {
      label: __("Margin Bottom (PX)"),
      value: marginBottom,
      min: "0",
      max: "150",
      onChange: onChangeMarBottom
    }),
    (directions.includes("all") || directions.includes("left")) && wp.element.createElement(RangeControl, {
      label: __("Margin Left (PX)"),
      value: marginLeft,
      min: "0",
      max: "150",
      onChange: onChangeMarLeft
    })
  );
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumTextShadow;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;
var PanelColorSettings = wp.editor.PanelColorSettings;

function PremiumTextShadow(props) {
  var inner = props.inner,
      label = props.label,
      color = props.color,
      blur = props.blur,
      horizontal = props.horizontal,
      vertical = props.vertical,
      position = props.position,
      _props$onChangeColor = props.onChangeColor,
      onChangeColor = _props$onChangeColor === undefined ? function () {} : _props$onChangeColor,
      _props$onChangeBlur = props.onChangeBlur,
      onChangeBlur = _props$onChangeBlur === undefined ? function () {} : _props$onChangeBlur,
      _props$onChangehHoriz = props.onChangehHorizontal,
      onChangehHorizontal = _props$onChangehHoriz === undefined ? function () {} : _props$onChangehHoriz,
      _props$onChangeVertic = props.onChangeVertical,
      onChangeVertical = _props$onChangeVertic === undefined ? function () {} : _props$onChangeVertic,
      _props$onChangePositi = props.onChangePosition,
      onChangePosition = _props$onChangePositi === undefined ? function () {} : _props$onChangePositi;


  var POSITION = [{
    value: "inset",
    label: __("Inset")
  }, {
    value: "",
    label: __("Outline")
  }];

  return wp.element.createElement(
    PanelBody,
    {
      title: __(label || "Box Shadow"),
      className: "premium-panel-body premium-panel-body-" + (inner && "inner"),
      initialOpen: false
    },
    wp.element.createElement(PanelColorSettings, {
      title: __("Colors"),
      colorSettings: [{
        label: __("Color"),
        value: color,
        onChange: onChangeColor
      }]
    }),
    wp.element.createElement(RangeControl, {
      label: __("Horizontal"),
      value: horizontal,
      onChange: onChangehHorizontal
    }),
    wp.element.createElement(RangeControl, {
      label: __("Vertical"),
      value: vertical,
      onChange: onChangeVertical
    }),
    wp.element.createElement(RangeControl, { label: __("Blur"), value: blur, onChange: onChangeBlur }),
    wp.element.createElement(SelectControl, {
      label: __("Position"),
      options: POSITION,
      value: position,
      onChange: onChangePosition
    })
  );
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_dual_heading__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_banner__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_pricing_table__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_maps__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_testimonials__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_count_up__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_icon__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_button__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks_section__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blocks_accordion__ = __webpack_require__(23);











/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons__ = __webpack_require__(1);






if (__WEBPACK_IMPORTED_MODULE_0__settings__["g" /* dualHeading */]) {
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


  var dualHeadingAttrs = {
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
    firstLetter: {
      type: "number"
    },
    firstStyle: {
      type: "string"
    },
    firstUpper: {
      type: "boolean"
    },
    firstWeight: {
      type: "number",
      default: 500
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
    firstShadowColor: {
      type: "string"
    },
    firstShadowBlur: {
      type: "number",
      default: "0"
    },
    firstShadowHorizontal: {
      type: "number",
      default: "0"
    },
    firstShadowVertical: {
      type: "number",
      default: "0"
    },
    secondColor: {
      type: "string",
      default: "#54595f"
    },
    secondSize: {
      type: "number",
      default: "20"
    },
    secondLetter: {
      type: "number"
    },
    secondStyle: {
      type: "string"
    },
    secondUpper: {
      type: "boolean"
    },
    secondWeight: {
      type: "number",
      default: 500
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
    secondShadowColor: {
      type: "string"
    },
    secondShadowBlur: {
      type: "number",
      default: "0"
    },
    secondShadowHorizontal: {
      type: "number",
      default: "0"
    },
    secondShadowVertical: {
      type: "number",
      default: "0"
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
  };
  registerBlockType("premium/dheading-block", {
    title: __("Dual Heading"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__icons__["a" /* default */], { icon: "dual-heading" }),
    category: "premium-blocks",
    attributes: dualHeadingAttrs,
    edit: function edit(props) {
      var setAttributes = props.setAttributes,
          isSelected = props.isSelected;
      var _props$attributes = props.attributes,
          contentAlign = _props$attributes.contentAlign,
          firstHeading = _props$attributes.firstHeading,
          secondHeading = _props$attributes.secondHeading,
          display = _props$attributes.display,
          firstColor = _props$attributes.firstColor,
          firstBackground = _props$attributes.firstBackground,
          firstSize = _props$attributes.firstSize,
          firstStyle = _props$attributes.firstStyle,
          firstUpper = _props$attributes.firstUpper,
          firstLetter = _props$attributes.firstLetter,
          firstWeight = _props$attributes.firstWeight,
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
          firstShadowBlur = _props$attributes.firstShadowBlur,
          firstShadowColor = _props$attributes.firstShadowColor,
          firstShadowHorizontal = _props$attributes.firstShadowHorizontal,
          firstShadowVertical = _props$attributes.firstShadowVertical,
          secondColor = _props$attributes.secondColor,
          secondBackground = _props$attributes.secondBackground,
          secondSize = _props$attributes.secondSize,
          secondLetter = _props$attributes.secondLetter,
          secondUpper = _props$attributes.secondUpper,
          secondWeight = _props$attributes.secondWeight,
          secondStyle = _props$attributes.secondStyle,
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
          secondShadowBlur = _props$attributes.secondShadowBlur,
          secondShadowColor = _props$attributes.secondShadowColor,
          secondShadowHorizontal = _props$attributes.secondShadowHorizontal,
          secondShadowVertical = _props$attributes.secondShadowVertical,
          link = _props$attributes.link,
          target = _props$attributes.target,
          headingURL = _props$attributes.headingURL;

      var DISPLAY = [{
        value: "inline",
        label: __("Inline")
      }, {
        value: "block",
        label: __("Block")
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
          {
            title: __("General Settings"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
          {
            title: __("First Heading Style"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "upper", "spacing"],
              size: firstSize,
              weight: firstWeight,
              style: firstStyle,
              spacing: firstLetter,
              upper: firstUpper,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ firstSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ firstWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ firstStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ firstLetter: newValue });
              },
              onChangeUpper: function onChangeUpper(check) {
                return setAttributes({ firstUpper: check });
              }
            })
          ),
          !firstClip && wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              label: __("Text Color"),
              value: firstColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ firstColor: colorValue });
              }
            }, {
              label: __("Background Color"),
              value: firstBackground,
              onChange: function onChange(colorValue) {
                return setAttributes({ firstBackground: colorValue });
              }
            }]
          }),
          firstClip && wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              label: __("First Color"),
              value: firstColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ firstColor: colorValue });
              }
            }, {
              label: __("Second Color"),
              value: firstClipColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ firstClipColor: colorValue });
              }
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
              borderType: firstBorderType,
              borderWidth: firstBorderWidth,
              borderColor: firstBorderColor,
              borderRadius: firstBorderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ firstBorderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ firstBorderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ firstBorderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ firstBorderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__["a" /* default */], {
            color: firstShadowColor,
            blur: firstShadowBlur,
            horizontal: firstShadowHorizontal,
            vertical: firstShadowVertical,
            onChangeColor: function onChangeColor(newColor) {
              return setAttributes({ firstShadowColor: newColor });
            },
            onChangeBlur: function onChangeBlur(newBlur) {
              return setAttributes({ firstShadowBlur: newBlur });
            },
            onChangehHorizontal: function onChangehHorizontal(newValue) {
              return setAttributes({ firstShadowHorizontal: newValue });
            },
            onChangeVertical: function onChangeVertical(newValue) {
              return setAttributes({ firstShadowVertical: newValue });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
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
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Second Heading Style"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "upper", "spacing"],
              size: secondSize,
              weight: secondWeight,
              style: secondStyle,
              spacing: secondLetter,
              upper: secondUpper,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ secondSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ secondWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ secondStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ secondLetter: newValue });
              },
              onChangeUpper: function onChangeUpper(check) {
                return setAttributes({ secondUpper: check });
              }
            })
          ),
          !secondClip && wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              label: __("Text Color"),
              value: secondColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ secondColor: colorValue });
              }
            }, {
              label: __("Background Color"),
              value: secondBackground,
              onChange: function onChange(colorValue) {
                return setAttributes({ secondBackground: colorValue });
              }
            }]
          }),
          secondClip && wp.element.createElement(PanelColorSettings, {
            title: __("Second Color"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              label: __("First Color"),
              value: secondColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ secondColor: colorValue });
              }
            }, {
              value: secondClipColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ secondClipColor: colorValue });
              },
              label: __("Second Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
              borderType: secondBorderType,
              borderWidth: secondBorderWidth,
              borderColor: secondBorderColor,
              borderRadius: secondBorderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ secondBorderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ secondBorderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ secondBorderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ secondBorderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__["a" /* default */], {
            color: secondShadowColor,
            blur: secondShadowBlur,
            horizontal: secondShadowHorizontal,
            vertical: secondShadowVertical,
            onChangeColor: function onChangeColor(newColor) {
              return setAttributes({ secondShadowColor: newColor });
            },
            onChangeBlur: function onChangeBlur(newBlur) {
              return setAttributes({ secondShadowBlur: newBlur });
            },
            onChangehHorizontal: function onChangehHorizontal(newValue) {
              return setAttributes({ secondShadowHorizontal: newValue });
            },
            onChangeVertical: function onChangeVertical(newValue) {
              return setAttributes({ secondShadowVertical: newValue });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
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
                letterSpacing: firstLetter + "px",
                textTransform: firstUpper ? "uppercase" : "none",
                fontStyle: firstStyle,
                fontWeight: firstWeight,
                border: firstBorderType,
                borderWidth: firstBorderWidth + "px",
                borderRadius: firstBorderRadius + "px",
                borderColor: firstBorderColor,
                padding: firstPadding + "px",
                marginLeft: firstMarginL + "px",
                marginRight: firstMarginR + "px",
                textShadow: firstShadowHorizontal + "px " + firstShadowVertical + "px " + firstShadowBlur + "px " + firstShadowColor
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
                letterSpacing: secondLetter + "px",
                textTransform: secondUpper ? "uppercase" : "none",
                fontStyle: secondStyle,
                fontWeight: secondWeight,
                border: secondBorderType,
                borderWidth: secondBorderWidth + "px",
                borderRadius: secondBorderRadius + "px",
                borderColor: secondBorderColor,
                padding: secondPadding + "px",
                marginLeft: secondMarginL + "px",
                marginRight: secondMarginR + "px",
                textShadow: secondShadowHorizontal + "px " + secondShadowVertical + "px " + secondShadowBlur + "px " + secondShadowColor
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
          firstStyle = _props$attributes2.firstStyle,
          firstUpper = _props$attributes2.firstUpper,
          firstLetter = _props$attributes2.firstLetter,
          firstWeight = _props$attributes2.firstWeight,
          firstBorderType = _props$attributes2.firstBorderType,
          firstBorderWidth = _props$attributes2.firstBorderWidth,
          firstBorderRadius = _props$attributes2.firstBorderRadius,
          firstBorderColor = _props$attributes2.firstBorderColor,
          firstPadding = _props$attributes2.firstPadding,
          firstMargin = _props$attributes2.firstMargin,
          firstClip = _props$attributes2.firstClip,
          firstAnim = _props$attributes2.firstAnim,
          firstClipColor = _props$attributes2.firstClipColor,
          firstShadowBlur = _props$attributes2.firstShadowBlur,
          firstShadowColor = _props$attributes2.firstShadowColor,
          firstShadowHorizontal = _props$attributes2.firstShadowHorizontal,
          firstShadowVertical = _props$attributes2.firstShadowVertical,
          secondColor = _props$attributes2.secondColor,
          secondBackground = _props$attributes2.secondBackground,
          secondSize = _props$attributes2.secondSize,
          secondLetter = _props$attributes2.secondLetter,
          secondUpper = _props$attributes2.secondUpper,
          secondWeight = _props$attributes2.secondWeight,
          secondStyle = _props$attributes2.secondStyle,
          secondBorderType = _props$attributes2.secondBorderType,
          secondBorderWidth = _props$attributes2.secondBorderWidth,
          secondBorderRadius = _props$attributes2.secondBorderRadius,
          secondBorderColor = _props$attributes2.secondBorderColor,
          secondPadding = _props$attributes2.secondPadding,
          secondMargin = _props$attributes2.secondMargin,
          secondClip = _props$attributes2.secondClip,
          secondAnim = _props$attributes2.secondAnim,
          secondClipColor = _props$attributes2.secondClipColor,
          secondShadowBlur = _props$attributes2.secondShadowBlur,
          secondShadowColor = _props$attributes2.secondShadowColor,
          secondShadowHorizontal = _props$attributes2.secondShadowHorizontal,
          secondShadowVertical = _props$attributes2.secondShadowVertical,
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
                  letterSpacing: firstLetter + "px",
                  textTransform: firstUpper ? "uppercase" : "none",
                  fontStyle: firstStyle,
                  fontWeight: firstWeight,
                  border: firstBorderType,
                  borderWidth: firstBorderWidth + "px",
                  borderRadius: firstBorderRadius + "px",
                  borderColor: firstBorderColor,
                  padding: firstPadding + "px",
                  margin: firstMargin + "px",
                  textShadow: firstShadowHorizontal + "px " + firstShadowVertical + "px " + firstShadowBlur + "px " + firstShadowColor
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
                  letterSpacing: secondLetter + "px",
                  textTransform: secondUpper ? "uppercase" : "none",
                  fontStyle: secondStyle,
                  fontWeight: secondWeight,
                  border: secondBorderType,
                  borderWidth: secondBorderWidth + "px",
                  borderRadius: secondBorderRadius + "px",
                  borderColor: secondBorderColor,
                  padding: secondPadding + "px",
                  margin: secondMargin + "px",
                  textShadow: secondShadowHorizontal + "px " + secondShadowVertical + "px " + secondShadowBlur + "px " + secondShadowColor
                }
              },
              secondHeading
            )
          )
        )
      );
    },
    deprecated: [{
      attributes: dualHeadingAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            contentAlign = _props$attributes3.contentAlign,
            firstHeading = _props$attributes3.firstHeading,
            secondHeading = _props$attributes3.secondHeading,
            display = _props$attributes3.display,
            firstColor = _props$attributes3.firstColor,
            firstBackground = _props$attributes3.firstBackground,
            firstSize = _props$attributes3.firstSize,
            firstStyle = _props$attributes3.firstStyle,
            firstUpper = _props$attributes3.firstUpper,
            firstLetter = _props$attributes3.firstLetter,
            firstWeight = _props$attributes3.firstWeight,
            firstBorderType = _props$attributes3.firstBorderType,
            firstBorderWidth = _props$attributes3.firstBorderWidth,
            firstBorderRadius = _props$attributes3.firstBorderRadius,
            firstBorderColor = _props$attributes3.firstBorderColor,
            firstPadding = _props$attributes3.firstPadding,
            firstMargin = _props$attributes3.firstMargin,
            firstClip = _props$attributes3.firstClip,
            firstAnim = _props$attributes3.firstAnim,
            firstClipColor = _props$attributes3.firstClipColor,
            firstShadowBlur = _props$attributes3.firstShadowBlur,
            firstShadowColor = _props$attributes3.firstShadowColor,
            firstShadowHorizontal = _props$attributes3.firstShadowHorizontal,
            firstShadowVertical = _props$attributes3.firstShadowVertical,
            secondColor = _props$attributes3.secondColor,
            secondBackground = _props$attributes3.secondBackground,
            secondSize = _props$attributes3.secondSize,
            secondLetter = _props$attributes3.secondLetter,
            secondUpper = _props$attributes3.secondUpper,
            secondWeight = _props$attributes3.secondWeight,
            secondStyle = _props$attributes3.secondStyle,
            secondBorderType = _props$attributes3.secondBorderType,
            secondBorderWidth = _props$attributes3.secondBorderWidth,
            secondBorderRadius = _props$attributes3.secondBorderRadius,
            secondBorderColor = _props$attributes3.secondBorderColor,
            secondPadding = _props$attributes3.secondPadding,
            secondMargin = _props$attributes3.secondMargin,
            secondClip = _props$attributes3.secondClip,
            secondAnim = _props$attributes3.secondAnim,
            secondClipColor = _props$attributes3.secondClipColor,
            secondShadowBlur = _props$attributes3.secondShadowBlur,
            secondShadowColor = _props$attributes3.secondShadowColor,
            secondShadowHorizontal = _props$attributes3.secondShadowHorizontal,
            secondShadowVertical = _props$attributes3.secondShadowVertical,
            link = _props$attributes3.link,
            target = _props$attributes3.target,
            headingURL = _props$attributes3.headingURL;


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
                    letterSpacing: firstLetter + "px",
                    textTransform: firstUpper ? "uppercase" : "none",
                    fontStyle: firstStyle,
                    fontWeight: firstWeight,
                    border: firstBorderType,
                    borderWidth: firstBorderWidth + "px",
                    borderRadius: firstBorderRadius + "px",
                    borderColor: firstBorderColor,
                    padding: firstPadding + "px",
                    margin: firstMargin + "px",
                    textShadow: firstShadowHorizontal + "px " + firstShadowVertical + "px " + firstShadowBlur + "px " + firstShadowColor
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
                    letterSpacing: secondLetter + "px",
                    textTransform: secondUpper ? "uppercase" : "none",
                    fontStyle: secondStyle,
                    fontWeight: secondWeight,
                    border: secondBorderType,
                    borderWidth: secondBorderWidth + "px",
                    borderRadius: secondBorderRadius + "px",
                    borderColor: secondBorderColor,
                    padding: secondPadding + "px",
                    margin: secondMargin + "px",
                    textShadow: secondShadowHorizontal + "px " + secondShadowVertical + "px " + secondShadowBlur + "px " + secondShadowColor
                  }
                },
                secondHeading
              )
            )
          )
        );
      }
    }]
  });
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons__ = __webpack_require__(1);






if (__WEBPACK_IMPORTED_MODULE_0__settings__["c" /* banner */]) {
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


  var bannerAttrs = {
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
      default: 50
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
    titleBack: {
      type: "string"
    },
    shadowColor: {
      type: "string"
    },
    shadowBlur: {
      type: "number",
      default: "0"
    },
    shadowHorizontal: {
      type: "number",
      default: "0"
    },
    shadowVertical: {
      type: "number",
      default: "0"
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
    },
    sepColor: {
      type: "string"
    },
    id: {
      type: "string"
    }
  };
  registerBlockType("premium/banner", {
    title: __("Banner"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__icons__["a" /* default */], { icon: "banner" }),
    category: "premium-blocks",
    attributes: bannerAttrs,
    edit: function edit(props) {
      var isSelected = props.isSelected,
          setAttributes = props.setAttributes,
          blockID = props.clientId;
      var _props$attributes = props.attributes,
          id = _props$attributes.id,
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
          titleBack = _props$attributes.titleBack,
          shadowBlur = _props$attributes.shadowBlur,
          shadowColor = _props$attributes.shadowColor,
          shadowHorizontal = _props$attributes.shadowHorizontal,
          shadowVertical = _props$attributes.shadowVertical,
          descColor = _props$attributes.descColor,
          descSize = _props$attributes.descSize,
          descLine = _props$attributes.descLine,
          descWeight = _props$attributes.descWeight,
          urlCheck = _props$attributes.urlCheck,
          url = _props$attributes.url,
          target = _props$attributes.target,
          sepColor = _props$attributes.sepColor;

      var ALIGNS = [{
        value: "flex-start",
        label: __("Top")
      }, {
        value: "center",
        label: __("Middle")
      }, {
        value: "flex-end",
        label: __("Bottom")
      }, {
        value: "inherit",
        label: __("Full")
      }];
      var EFFECTS = [{
        value: "effect1",
        label: __("Effect 1")
      }, {
        value: "effect2",
        label: __("Effect 2")
      }, {
        value: "effect3",
        label: __("Effect 3")
      }, {
        value: "effect4",
        label: __("Effect 4")
      }, {
        value: "effect5",
        label: __("Effect 5")
      }, {
        value: "effect6",
        label: __("Effect 6")
      }];
      var HOVER = [{
        value: "none",
        label: __("None")
      }, {
        value: "zoomin",
        label: __("Zoom In")
      }, {
        value: "zoomout",
        label: "Zoom Out"
      }, {
        value: "scale",
        label: __("Scale")
      }, {
        value: "gray",
        label: __("Gray Scale")
      }, {
        value: "blur",
        label: __("Blur")
      }, {
        value: "bright",
        label: __("Bright")
      }, {
        value: "sepia",
        label: __("Sepia")
      }];
      var HEIGHT = [{
        value: "default",
        label: __("Default")
      }, {
        value: "custom",
        label: __("Custom")
      }];
      setAttributes({ id: blockID });
      return [isSelected && wp.element.createElement(
        BlockControls,
        { key: "controls" },
        wp.element.createElement(
          Toolbar,
          null,
          wp.element.createElement(IconButton, {
            label: __("Refresh this button when it conflict with other buttons styles"),
            icon: "update",
            className: "components-toolbar__control",
            onClick: function onClick() {
              return setAttributes({ id: blockID });
            }
          })
        ),
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
          {
            title: __("General Settings"),
            className: "premium-panel-body",
            initialOpen: true
          },
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
            title: __("Overlay"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: background,
              onChange: function onChange(colorValue) {
                return setAttributes({ background: colorValue });
              },
              label: __("Overlay Color")
            }]
          }),
          wp.element.createElement(RangeControl, {
            label: __("Overlay Opacity"),
            value: opacity,
            min: "1",
            max: "100",
            onChange: function onChange(newOpacity) {
              return setAttributes({
                opacity: newOpacity === undefined ? 50 : newOpacity
              });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
            borderType: borderType,
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderRadius: borderRadius,
            onChangeType: function onChangeType(newType) {
              return setAttributes({ borderType: newType });
            },
            onChangeWidth: function onChangeWidth(newWidth) {
              return setAttributes({
                borderWidth: newWidth === undefined ? 0 : newWidth
              });
            },
            onChangeColor: function onChangeColor(colorValue) {
              return setAttributes({
                borderColor: colorValue === undefined ? "transparent" : colorValue
              });
            },
            onChangeRadius: function onChangeRadius(newRadius) {
              return setAttributes({
                borderRadius: newRadius === undefined ? 0 : newRadius
              });
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
          {
            title: __("Title Settings"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "line"],
              size: titleSize,
              weight: titleWeight,
              line: titleLine,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ titleSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({
                  titleWeight: newWeight === undefined ? 500 : newWeight
                });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({
                  titleLine: newValue === undefined ? 10 : newValue
                });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: titleColor,
              onChange: function onChange(colorValue) {
                return setAttributes({
                  titleColor: colorValue === undefined ? "transparent" : colorValue
                });
              },
              label: __("Text Color")
            }]
          }),
          "effect3" == effect && wp.element.createElement(PanelColorSettings, {
            title: __("Separator Color"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: sepColor,
              onChange: function onChange(colorValue) {
                return setAttributes({
                  sepColor: colorValue === undefined ? "transparent" : colorValue
                });
              },
              label: __("")
            }]
          }),
          "effect2" == effect && wp.element.createElement(PanelColorSettings, {
            title: __("Background Color"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: titleBack,
              onChange: function onChange(colorValue) {
                return setAttributes({
                  titleBack: colorValue === undefined ? "transparent" : colorValue
                });
              },
              label: __("")
            }]
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__["a" /* default */], {
            color: shadowColor,
            blur: shadowBlur,
            horizontal: shadowHorizontal,
            vertical: shadowVertical,
            onChangeColor: function onChangeColor(newColor) {
              return setAttributes({
                shadowColor: newColor === undefined ? "transparent" : newColor
              });
            },
            onChangeBlur: function onChangeBlur(newBlur) {
              return setAttributes({
                shadowBlur: newBlur === undefined ? 0 : newBlur
              });
            },
            onChangehHorizontal: function onChangehHorizontal(newValue) {
              return setAttributes({
                shadowHorizontal: newValue === undefined ? 0 : newValue
              });
            },
            onChangeVertical: function onChangeVertical(newValue) {
              return setAttributes({
                shadowVertical: newValue === undefined ? 0 : newValue
              });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Description Settings"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "line"],
              size: descSize,
              weight: descWeight,
              line: descLine,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ descSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({
                  descWeight: newWeight === undefined ? 500 : newWeight
                });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({
                  descLine: newValue === undefined ? 10 : newValue
                });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: descColor,
              onChange: function onChange(colorValue) {
                return setAttributes({
                  descColor: colorValue === undefined ? "transparent" : colorValue
                });
              },
              label: __("Text Color")
            }]
          })
        )
      ), wp.element.createElement(
        "div",
        {
          id: "premium-banner-" + id,
          className: className + " " + className + "__responsive_" + responsive
        },
        wp.element.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: ["#premium-banner-" + id + " .premium-banner__effect3 .premium-banner__title_wrap::after{", "background: " + sepColor, "}", "#premium-banner-" + id + " .premium-banner__inner {", "background: " + background, "}", "#premium-banner-" + id + " .premium-banner__img.premium-banner__active {", "opacity: " + (background ? 1 - opacity / 100 : 1) + " ", "}"].join("\n")
          }
        }),
        imageURL && wp.element.createElement(
          "div",
          {
            className: className + "__inner " + className + "__min " + className + "__" + effect + " " + className + "__" + hoverEffect + " hover_" + hovered,
            style: {
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
              src: imageURL
            })
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__content",
              style: {
                background: "effect2" == effect ? titleBack : "transparent"
              }
            },
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
                  lineHeight: titleLine + "px",
                  textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor
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
          id = _props$attributes2.id,
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
          titleBack = _props$attributes2.titleBack,
          titleSize = _props$attributes2.titleSize,
          titleWeight = _props$attributes2.titleWeight,
          titleLine = _props$attributes2.titleLine,
          shadowBlur = _props$attributes2.shadowBlur,
          shadowColor = _props$attributes2.shadowColor,
          shadowHorizontal = _props$attributes2.shadowHorizontal,
          shadowVertical = _props$attributes2.shadowVertical,
          descColor = _props$attributes2.descColor,
          descSize = _props$attributes2.descSize,
          descWeight = _props$attributes2.descWeight,
          descLine = _props$attributes2.descLine,
          urlCheck = _props$attributes2.urlCheck,
          url = _props$attributes2.url,
          target = _props$attributes2.target,
          sepColor = _props$attributes2.sepColor;

      return wp.element.createElement(
        "div",
        {
          id: "premium-banner-" + id,
          className: className + " " + className + "__responsive_" + responsive
        },
        wp.element.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: ["#premium-banner-" + id + " .premium-banner__effect3 .premium-banner__title_wrap::after{", "background: " + sepColor, "}", "#premium-banner-" + id + " .premium-banner__inner {", "background: " + background, "}", "#premium-banner-" + id + " .premium-banner__img.premium-banner__active {", "opacity: " + (background ? 1 - opacity / 100 : 1) + " ", "}"].join("\n")
          }
        }),
        wp.element.createElement(
          "div",
          {
            className: className + "__inner " + className + "__min " + className + "__" + effect + " " + className + "__" + hoverEffect + " hover_" + hovered,
            style: {
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
              src: imageURL
            })
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__content",
              style: {
                background: "effect2" == effect ? titleBack : "transparent"
              }
            },
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
                  lineHeight: titleLine + "px",
                  textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor
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
    },
    deprecated: [{
      attributes: bannerAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            id = _props$attributes3.id,
            imageURL = _props$attributes3.imageURL,
            title = _props$attributes3.title,
            titleTag = _props$attributes3.titleTag,
            desc = _props$attributes3.desc,
            contentAlign = _props$attributes3.contentAlign,
            effect = _props$attributes3.effect,
            hoverEffect = _props$attributes3.hoverEffect,
            height = _props$attributes3.height,
            minHeight = _props$attributes3.minHeight,
            verAlign = _props$attributes3.verAlign,
            hovered = _props$attributes3.hovered,
            responsive = _props$attributes3.responsive,
            background = _props$attributes3.background,
            opacity = _props$attributes3.opacity,
            borderType = _props$attributes3.borderType,
            borderWidth = _props$attributes3.borderWidth,
            borderRadius = _props$attributes3.borderRadius,
            borderColor = _props$attributes3.borderColor,
            titleColor = _props$attributes3.titleColor,
            titleBack = _props$attributes3.titleBack,
            titleSize = _props$attributes3.titleSize,
            titleWeight = _props$attributes3.titleWeight,
            titleLine = _props$attributes3.titleLine,
            descColor = _props$attributes3.descColor,
            descSize = _props$attributes3.descSize,
            descWeight = _props$attributes3.descWeight,
            descLine = _props$attributes3.descLine,
            urlCheck = _props$attributes3.urlCheck,
            url = _props$attributes3.url,
            target = _props$attributes3.target,
            sepColor = _props$attributes3.sepColor;

        return wp.element.createElement(
          "div",
          {
            id: "premium-banner-" + id,
            className: className + " " + className + "__responsive_" + responsive
          },
          wp.element.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: ["#premium-banner-" + id + " .premium-banner__effect3 .premium-banner__title_wrap::after{", "background: " + sepColor, "}", "#premium-banner-" + id + " .premium-banner__inner {", "background: " + background, "}", "#premium-banner-" + id + " .premium-banner__img.premium-banner__active {", "opacity: " + opacity / 100 + " ", "}"].join("\n")
            }
          }),
          wp.element.createElement(
            "div",
            {
              className: className + "__inner " + className + "__min " + className + "__" + effect + " " + className + "__" + hoverEffect + " hover_" + hovered,
              style: {
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
                src: imageURL
              })
            ),
            wp.element.createElement(
              "div",
              {
                className: className + "__content",
                style: {
                  background: "effect2" == effect ? titleBack : "transparent"
                }
              },
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
    }]
  });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons__ = __webpack_require__(1);





if (__WEBPACK_IMPORTED_MODULE_0__settings__["j" /* pricingTable */]) {
  var className = "premium-pricing-table";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var Fragment = wp.element.Fragment;
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


  var pricingAttrs = {
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
    titleLetter: {
      type: "number"
    },
    titleStyle: {
      type: "string"
    },
    titleUpper: {
      type: "boolean"
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
    descWeight: {
      type: "number"
    },
    descLetter: {
      type: "number"
    },
    descStyle: {
      type: "string"
    },
    descLine: {
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
    slashWeight: {
      type: "number"
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
    currWeight: {
      type: "number"
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
    valWeight: {
      type: "number"
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
    divWeight: {
      type: "number"
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
    durWeight: {
      type: "number"
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
      selector: ".premium-pricing-table__button_link"
    },
    btnTarget: {
      type: "boolean",
      default: true
    },
    btnColor: {
      type: "string",
      default: "#fff"
    },
    btnHoverColor: {
      type: "string"
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
    btnLine: {
      type: "number"
    },
    btnLetter: {
      type: "number"
    },
    btnStyle: {
      type: "string"
    },
    btnUpper: {
      type: "boolean"
    },
    btnBack: {
      type: "string",
      default: "#6ec1e4"
    },
    btnHoverBack: {
      type: "string"
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
      type: "boolean"
    },
    badgePos: {
      type: "string",
      default: "right"
    },
    badgeBack: {
      type: "string",
      default: "#6ec1e4"
    },
    badgeColor: {
      type: "string"
    },
    badgeTextSize: {
      type: "number"
    },
    badgeSize: {
      type: "number"
    },
    badgeTop: {
      type: "number"
    },
    badgeHorizontal: {
      type: "number"
    },
    badgeWidth: {
      type: "number"
    },
    badgeWeight: {
      type: "number",
      default: 900
    },
    badgeLetter: {
      type: "number"
    },
    badgeStyle: {
      type: "string"
    },
    badgeUpper: {
      type: "boolean"
    },
    badgeText: {
      type: "string",
      default: __("Popular")
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
    listItemsStyle: {
      type: "string"
    },
    listLetter: {
      type: "number"
    },
    listLine: {
      type: "number"
    },
    listUpper: {
      type: "boolean"
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
    },
    id: {
      type: "string"
    }
  };

  registerBlockType("premium/pricing-table", {
    title: __("Pricing Table"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["a" /* default */], { icon: "pricing-table" }),
    category: "premium-blocks",
    attributes: pricingAttrs,
    edit: function edit(props) {
      var isSelected = props.isSelected,
          setAttributes = props.setAttributes,
          blockId = props.clientId;
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
          titleLetter = _props$attributes.titleLetter,
          titleStyle = _props$attributes.titleStyle,
          titleUpper = _props$attributes.titleUpper,
          titleWeight = _props$attributes.titleWeight,
          titleBack = _props$attributes.titleBack,
          titleMarginT = _props$attributes.titleMarginT,
          titleMarginB = _props$attributes.titleMarginB,
          titlePadding = _props$attributes.titlePadding,
          descChecked = _props$attributes.descChecked,
          descColor = _props$attributes.descColor,
          descSize = _props$attributes.descSize,
          descLine = _props$attributes.descLine,
          descWeight = _props$attributes.descWeight,
          descStyle = _props$attributes.descStyle,
          descLetter = _props$attributes.descLetter,
          desc = _props$attributes.desc,
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
          slashWeight = _props$attributes.slashWeight,
          slashV = _props$attributes.slashV,
          currPrice = _props$attributes.currPrice,
          currColor = _props$attributes.currColor,
          currSize = _props$attributes.currSize,
          currWeight = _props$attributes.currWeight,
          currV = _props$attributes.currV,
          valPrice = _props$attributes.valPrice,
          valColor = _props$attributes.valColor,
          valSize = _props$attributes.valSize,
          valWeight = _props$attributes.valWeight,
          valV = _props$attributes.valV,
          divPrice = _props$attributes.divPrice,
          divColor = _props$attributes.divColor,
          divSize = _props$attributes.divSize,
          divWeight = _props$attributes.divWeight,
          divV = _props$attributes.divV,
          durPrice = _props$attributes.durPrice,
          durColor = _props$attributes.durColor,
          durSize = _props$attributes.durSize,
          durWeight = _props$attributes.durWeight,
          durV = _props$attributes.durV,
          selectedStyle = _props$attributes.selectedStyle,
          btnChecked = _props$attributes.btnChecked,
          btnText = _props$attributes.btnText,
          btnTarget = _props$attributes.btnTarget,
          btnLink = _props$attributes.btnLink,
          btnColor = _props$attributes.btnColor,
          btnHoverColor = _props$attributes.btnHoverColor,
          btnSize = _props$attributes.btnSize,
          btnWeight = _props$attributes.btnWeight,
          btnLetter = _props$attributes.btnLetter,
          btnLine = _props$attributes.btnLine,
          btnUpper = _props$attributes.btnUpper,
          btnStyle = _props$attributes.btnStyle,
          btnBack = _props$attributes.btnBack,
          btnHoverBack = _props$attributes.btnHoverBack,
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
          badgeColor = _props$attributes.badgeColor,
          badgeSize = _props$attributes.badgeSize,
          badgeTextSize = _props$attributes.badgeTextSize,
          badgeTop = _props$attributes.badgeTop,
          badgeHorizontal = _props$attributes.badgeHorizontal,
          badgeWidth = _props$attributes.badgeWidth,
          badgeWeight = _props$attributes.badgeWeight,
          badgeLetter = _props$attributes.badgeLetter,
          badgeStyle = _props$attributes.badgeStyle,
          badgeUpper = _props$attributes.badgeUpper,
          badgeText = _props$attributes.badgeText,
          listChecked = _props$attributes.listChecked,
          listColor = _props$attributes.listColor,
          listWeight = _props$attributes.listWeight,
          listSize = _props$attributes.listSize,
          listItemsStyle = _props$attributes.listItemsStyle,
          listLetter = _props$attributes.listLetter,
          listLine = _props$attributes.listLine,
          listUpper = _props$attributes.listUpper,
          listBack = _props$attributes.listBack,
          listItems = _props$attributes.listItems,
          listMarginT = _props$attributes.listMarginT,
          listMarginB = _props$attributes.listMarginB,
          listPadding = _props$attributes.listPadding,
          listStyle = _props$attributes.listStyle,
          id = _props$attributes.id;

      var ALIGNS = [{
        value: "flex-start",
        label: __("Top")
      }, {
        value: "center",
        label: __("Middle")
      }, {
        value: "flex-end",
        label: __("Bottom")
      }];
      var PRICE = [{
        value: "slash",
        label: __("Slashed Price")
      }, {
        value: "curr",
        label: __("Currency")
      }, {
        value: "price",
        label: __("Price")
      }, {
        value: "divider",
        label: __("Divider")
      }, {
        value: "duration",
        label: __("Duration")
      }];
      var TYPE = [{
        value: "none",
        label: __("None")
      }, {
        value: "check",
        label: __("Check Mark")
      }, {
        value: "disc",
        label: __("Filled Circle")
      }, {
        value: "circle",
        label: __("Outline Circle")
      }, {
        value: "square",
        label: __("Square")
      }];
      var POSITION = [{
        value: "right",
        label: __("Right")
      }, {
        value: "left",
        label: __("Left")
      }];
      setAttributes({ id: blockId });
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
          {
            title: __("Display Options"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
        titleChecked && wp.element.createElement(
          PanelBody,
          {
            title: __("Title"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(
              "p",
              null,
              __("Heading")
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "upper", "spacing", "line"],
              size: titleSize,
              weight: titleWeight,
              style: titleStyle,
              spacing: titleLetter,
              line: titleLine,
              upper: titleUpper,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ titleSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ titleWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ titleStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ titleLetter: newValue });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({ titleLine: newValue });
              },
              onChangeUpper: function onChangeUpper(check) {
                return setAttributes({ titleUpper: check });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: titleColor,
              onChange: function onChange(newColor) {
                return setAttributes({ titleColor: newColor });
              },
              label: __("Text Color")
            }, {
              value: titleBack,
              onChange: function onChange(newColor) {
                return setAttributes({ titleBack: newColor });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body premium-panel-body-inner",
              initialOpen: false
            },
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
          )
        ),
        priceChecked && wp.element.createElement(
          PanelBody,
          {
            title: __("Price"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
          wp.element.createElement(
            PanelBody,
            {
              title: __("Element to Style"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(SelectControl, {
              label: __("Element"),
              options: PRICE,
              value: selectedStyle,
              onChange: function onChange(newElem) {
                return setAttributes({ selectedStyle: newElem });
              }
            }),
            "slash" === selectedStyle && wp.element.createElement(
              Fragment,
              null,
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
                components: ["size", "weight"],
                size: slashSize,
                weight: slashWeight,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ slashSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ slashWeight: newWeight });
                }
              }),
              wp.element.createElement(SelectControl, {
                label: __("Vertical Align"),
                options: ALIGNS,
                value: slashV,
                onChange: function onChange(newValue) {
                  return setAttributes({ slashV: newValue });
                }
              }),
              wp.element.createElement(PanelColorSettings, {
                title: __("Colors"),
                className: "premium-panel-body-inner",
                initialOpen: false,
                colorSettings: [{
                  value: slashColor,
                  onChange: function onChange(newColor) {
                    return setAttributes({ slashColor: newColor });
                  },
                  label: __("Text Color")
                }]
              })
            ),
            "curr" === selectedStyle && wp.element.createElement(
              Fragment,
              null,
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
                components: ["size", "weight"],
                size: currSize,
                weight: currWeight,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ currSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ currWeight: newWeight });
                }
              }),
              wp.element.createElement(SelectControl, {
                label: __("Vertical Align"),
                options: ALIGNS,
                value: currV,
                onChange: function onChange(newValue) {
                  return setAttributes({ currV: newValue });
                }
              }),
              wp.element.createElement(PanelColorSettings, {
                title: __("Colors"),
                className: "premium-panel-body-inner",
                initialOpen: false,
                colorSettings: [{
                  value: currColor,
                  onChange: function onChange(newColor) {
                    return setAttributes({ currColor: newColor });
                  },
                  label: __("Text Color")
                }]
              })
            ),
            "price" === selectedStyle && wp.element.createElement(
              Fragment,
              null,
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
                components: ["size", "weight"],
                size: valSize,
                weight: valWeight,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ valSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ valWeight: newWeight });
                }
              }),
              wp.element.createElement(SelectControl, {
                label: __("Vertical Align"),
                options: ALIGNS,
                value: valV,
                onChange: function onChange(newValue) {
                  return setAttributes({ valV: newValue });
                }
              }),
              wp.element.createElement(PanelColorSettings, {
                title: __("Colors"),
                className: "premium-panel-body-inner",
                initialOpen: false,
                colorSettings: [{
                  value: valColor,
                  onChange: function onChange(newColor) {
                    return setAttributes({ valColor: newColor });
                  },
                  label: __("Text Color")
                }]
              })
            ),
            "divider" === selectedStyle && wp.element.createElement(
              Fragment,
              null,
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
                components: ["size", "weight"],
                size: divSize,
                weight: divWeight,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ divSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ divWeight: newWeight });
                }
              }),
              wp.element.createElement(SelectControl, {
                label: __("Vertical Align"),
                options: ALIGNS,
                value: divV,
                onChange: function onChange(newValue) {
                  return setAttributes({ divV: newValue });
                }
              }),
              wp.element.createElement(PanelColorSettings, {
                title: __("Colors"),
                className: "premium-panel-body-inner",
                initialOpen: false,
                colorSettings: [{
                  value: divColor,
                  onChange: function onChange(newColor) {
                    return setAttributes({ divColor: newColor });
                  },
                  label: __("Text Color")
                }]
              })
            ),
            "duration" === selectedStyle && wp.element.createElement(
              Fragment,
              null,
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
                components: ["size", "weight"],
                size: durSize,
                weight: durWeight,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ durSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ durWeight: newWeight });
                }
              }),
              wp.element.createElement(SelectControl, {
                label: __("Vertical Align"),
                options: ALIGNS,
                value: durV,
                onChange: function onChange(newValue) {
                  return setAttributes({ durV: newValue });
                }
              }),
              wp.element.createElement(PanelColorSettings, {
                title: __("Colors"),
                className: "premium-panel-body-inner",
                initialOpen: false,
                colorSettings: [{
                  value: durColor,
                  onChange: function onChange(newColor) {
                    return setAttributes({ durColor: newColor });
                  },
                  label: __("Text Color")
                }]
              })
            )
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
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
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: priceBack,
              onChange: function onChange(newColor) {
                return setAttributes({ priceBack: newColor });
              },
              label: __("Container Background Color")
            }]
          })
        ),
        listChecked && wp.element.createElement(
          PanelBody,
          {
            title: __("Features"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(SelectControl, {
            label: __("List Style"),
            options: TYPE,
            value: listStyle,
            onChange: function onChange(newType) {
              return setAttributes({ listStyle: newType });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "upper", "spacing", "line"],
              size: listSize,
              weight: listWeight,
              style: listItemsStyle,
              spacing: listLetter,
              line: listLine,
              upper: listUpper,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ listSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ listWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ listItemsStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ listLetter: newValue });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({ listLine: newValue });
              },
              onChangeUpper: function onChangeUpper(check) {
                return setAttributes({ listUpper: check });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: listColor,
              onChange: function onChange(newColor) {
                return setAttributes({ listColor: newColor });
              },
              label: __("List Items Color")
            }, {
              value: listBack,
              onChange: function onChange(newColor) {
                return setAttributes({ listBack: newColor });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              initialOpen: false,
              className: "premium-panel-body-inner premium-panel-body"
            },
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
          )
        ),
        descChecked && wp.element.createElement(
          PanelBody,
          {
            title: __("Description"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "spacing", "line"],
              size: descSize,
              weight: descWeight,
              style: descStyle,
              spacing: descLetter,
              line: descLine,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ descSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ descWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ descStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ descLetter: newValue });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({ descLine: newValue });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: descColor,
              onChange: function onChange(newColor) {
                return setAttributes({ descColor: newColor });
              },
              label: __("Text Color")
            }, {
              value: descBack,
              onChange: function onChange(newColor) {
                return setAttributes({ descBack: newColor });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
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
          )
        ),
        btnChecked && wp.element.createElement(
          PanelBody,
          {
            title: __("Button"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "upper", "spacing", "line"],
              size: btnSize,
              weight: btnWeight,
              style: btnStyle,
              spacing: btnLetter,
              line: btnLine,
              upper: btnUpper,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ btnSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ btnWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ btnStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ btnLetter: newValue });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({ btnLine: newValue });
              },
              onChangeUpper: function onChangeUpper(check) {
                return setAttributes({ btnUpper: check });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: btnColor,
              onChange: function onChange(newColor) {
                return setAttributes({ btnColor: newColor });
              },
              label: __("Text Color")
            }, {
              value: btnHoverColor,
              onChange: function onChange(newColor) {
                return setAttributes({ btnHoverColor: newColor });
              },
              label: __("Text Hover Color")
            }, {
              value: btnBack,
              onChange: function onChange(newColor) {
                return setAttributes({ btnBack: newColor });
              },
              label: __("Background Color")
            }, {
              value: btnHoverBack,
              onChange: function onChange(newColor) {
                return setAttributes({ btnHoverBack: newColor });
              },
              label: __("Background Hover Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
              borderType: btnBorderType,
              borderWidth: btnBorderWidth,
              borderColor: btnBorderColor,
              borderRadius: btnBorderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ btnBorderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ btnBorderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ btnBorderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ btnBorderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(RangeControl, {
              label: __("Width (%)"),
              value: btnWidth,
              onChange: function onChange(newSize) {
                return setAttributes({ btnWidth: newSize });
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
            })
          ),
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
          {
            title: __("Badge"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(TextControl, {
            label: __("Text"),
            value: badgeText,
            onChange: function onChange(value) {
              return setAttributes({ badgeText: value });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Position"),
            options: POSITION,
            value: badgePos,
            onChange: function onChange(newValue) {
              return setAttributes({ badgePos: newValue });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_typo__["a" /* default */], {
              components: ["size", "weight", "style", "upper", "spacing"],
              size: badgeTextSize,
              weight: badgeWeight,
              style: badgeStyle,
              spacing: badgeLetter,
              upper: badgeUpper,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ badgeTextSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ badgeWeight: newWeight });
              },
              onChangeStyle: function onChangeStyle(newStyle) {
                return setAttributes({ badgeStyle: newStyle });
              },
              onChangeSpacing: function onChangeSpacing(newValue) {
                return setAttributes({ badgeLetter: newValue });
              },
              onChangeUpper: function onChangeUpper(check) {
                return setAttributes({ badgeUpper: check });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: badgeColor,
              onChange: function onChange(newColor) {
                return setAttributes({ badgeColor: newColor });
              },
              label: __("Text Color")
            }, {
              value: badgeBack,
              onChange: function onChange(newColor) {
                return setAttributes({ badgeBack: newColor });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(RangeControl, {
            label: __("Vertical Offset"),
            value: badgeTop,
            onChange: function onChange(newValue) {
              return setAttributes({ badgeTop: newValue });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Horizontal Offset"),
            value: badgeHorizontal,
            min: "1",
            max: "150",
            onChange: function onChange(newValue) {
              return setAttributes({ badgeHorizontal: newValue });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Badge Size"),
            value: badgeSize,
            max: "250",
            onChange: function onChange(newValue) {
              return setAttributes({ badgeSize: newValue });
            }
          }),
          wp.element.createElement(RangeControl, {
            label: __("Text Width"),
            min: "1",
            max: "200",
            value: badgeWidth,
            onChange: function onChange(newValue) {
              return setAttributes({ badgeWidth: newValue });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Table"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: tableBack,
              onChange: function onChange(newColor) {
                return setAttributes({ tableBack: newColor });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
              borderType: borderType,
              borderWidth: borderWidth,
              borderColor: borderColor,
              borderRadius: borderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ borderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ borderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ borderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ borderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner premium-panel-body",
              initialOpen: false
            },
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
        )
      ), wp.element.createElement(
        "div",
        {
          id: className + "-" + id,
          className: "" + className,
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
            className: className + "__badge_wrap " + className + "__badge_" + badgePos
          },
          wp.element.createElement(
            "div",
            {
              className: className + "__badge",
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
              {
                style: {
                  color: badgeColor,
                  fontSize: badgeTextSize + "px",
                  fontWeight: badgeWeight,
                  textTransform: badgeUpper ? "uppercase" : "none",
                  letterSpacing: badgeLetter + "px",
                  fontStyle: badgeStyle,
                  width: badgeWidth + "px",
                  top: badgeTop + "px",
                  left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                  right: "right" === badgePos ? badgeHorizontal + "px" : "auto"
                }
              },
              badgeText
            )
          )
        ),
        titleChecked && wp.element.createElement(
          "div",
          {
            className: className + "__title_wrap",
            style: {
              paddingTop: titleMarginT + "px",
              paddingBottom: titleMarginB + "px"
            }
          },
          wp.element.createElement(RichText, {
            tagName: titleTag.toLowerCase(),
            className: className + "__title",
            onChange: function onChange(newText) {
              return setAttributes({ title: newText });
            },
            placeholder: __("Awesome Title"),
            value: title,
            style: {
              color: titleColor,
              background: titleBack,
              fontSize: titleSize + "px",
              letterSpacing: titleLetter + "px",
              textTransform: titleUpper ? "uppercase" : "none",
              fontStyle: titleStyle,
              fontWeight: titleWeight,
              lineHeight: titleLine + "px",
              padding: titlePadding + "px"
            }
          })
        ),
        priceChecked && wp.element.createElement(
          "div",
          {
            className: className + "__price_wrap",
            style: {
              background: priceBack,
              marginTop: priceMarginT + "px",
              marginBottom: priceMarginB + "px",
              padding: pricePadding + "px",
              justifyContent: contentAlign
            }
          },
          slashPrice && wp.element.createElement(
            "strike",
            {
              className: className + "__slash",
              style: {
                color: slashColor,
                fontSize: slashSize + "px",
                fontWeight: slashWeight,
                alignSelf: slashV
              }
            },
            slashPrice
          ),
          currPrice && wp.element.createElement(
            "span",
            {
              className: className + "__currency",
              style: {
                color: currColor,
                fontSize: currSize + "px",
                fontWeight: currWeight,
                alignSelf: currV
              }
            },
            currPrice
          ),
          valPrice && wp.element.createElement(
            "span",
            {
              className: className + "__val",
              style: {
                color: valColor,
                fontSize: valSize + "px",
                fontWeight: valWeight,
                alignSelf: valV
              }
            },
            valPrice
          ),
          divPrice && wp.element.createElement(
            "span",
            {
              className: className + "__divider",
              style: {
                color: divColor,
                fontSize: divSize + "px",
                fontWeight: divWeight,
                alignSelf: divV
              }
            },
            divPrice
          ),
          durPrice && wp.element.createElement(
            "span",
            {
              className: className + "__dur",
              style: {
                color: durColor,
                fontSize: durSize + "px",
                fontWeight: durWeight,
                alignSelf: durV
              }
            },
            durPrice
          )
        ),
        listChecked && wp.element.createElement(
          "div",
          {
            className: className + "__list_wrap",
            style: {
              marginTop: listMarginT + "px",
              marginBottom: listMarginB + "px"
            }
          },
          wp.element.createElement(RichText, {
            tagName: "ul",
            className: className + "__list list-" + listStyle,
            multiline: "li",
            placeholder: __("List Item #1"),
            value: listItems,
            onChange: function onChange(newText) {
              return setAttributes({ listItems: newText });
            },
            style: {
              color: listColor,
              fontSize: listSize + "px",
              background: listBack,
              padding: listPadding + "px",
              listStyle: "check" !== listStyle ? listStyle : "none",
              listStylePosition: "inside",
              fontWeight: listWeight,
              textTransform: listUpper ? "uppercase" : "none",
              letterSpacing: listLetter + "px",
              fontStyle: listItemsStyle,
              lineHeight: listLine + "px"
            }
          })
        ),
        descChecked && wp.element.createElement(
          "div",
          { className: className + "__desc_wrap" },
          wp.element.createElement(RichText, {
            tagName: "p",
            className: className + "__desc",
            onChange: function onChange(newText) {
              return setAttributes({ desc: newText });
            },
            placeholder: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            value: desc,
            style: {
              color: descColor,
              background: descBack,
              fontSize: descSize + "px",
              fontWeight: descWeight,
              letterSpacing: descLetter + "px",
              fontStyle: descStyle,
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
            className: className + "__button",
            style: {
              width: btnWidth + "%"
            }
          },
          wp.element.createElement(
            "a",
            {
              "class": className + "__button_link",
              href: "{ attributes.btnUrl }",
              target: btnTarget ? "_blank" : "_self",
              style: {
                color: btnColor,
                background: btnBack ? btnBack : "transparent",
                fontSize: btnSize + "px",
                fontWeight: btnWeight,
                letterSpacing: btnLetter + "px",
                fontStyle: btnStyle,
                lineHeight: btnLine + "px",
                marginTop: btnMarginT,
                marginBottom: btnMarginB,
                padding: btnPadding,
                border: btnBorderType,
                borderWidth: btnBorderWidth + "px",
                borderRadius: btnBorderRadius + "px",
                borderColor: btnBorderColor
              }
            },
            wp.element.createElement(RichText, {
              tagName: "span",
              onChange: function onChange(newText) {
                return setAttributes({ btnText: newText });
              },
              value: btnText,
              style: {
                textTransform: btnUpper ? "uppercase" : "none"
              }
            })
          ),
          wp.element.createElement(URLInput, {
            value: btnLink,
            onChange: function onChange(newLink) {
              return setAttributes({ btnLink: newLink });
            }
          }),
          wp.element.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: ["#premium-pricing-table-" + id + " .premium-pricing-table__button_link:hover {", "color: " + btnHoverColor + " !important;", "background: " + btnHoverBack + " !important", "}"].join("\n")
            }
          })
        )
      )];
    },
    save: function save(props) {
      var _props$attributes2 = props.attributes,
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
          titleLetter = _props$attributes2.titleLetter,
          titleUpper = _props$attributes2.titleUpper,
          titleStyle = _props$attributes2.titleStyle,
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
          descStyle = _props$attributes2.descStyle,
          descLetter = _props$attributes2.descLetter,
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
          slashWeight = _props$attributes2.slashWeight,
          slashV = _props$attributes2.slashV,
          currPrice = _props$attributes2.currPrice,
          currColor = _props$attributes2.currColor,
          currSize = _props$attributes2.currSize,
          currWeight = _props$attributes2.currWeight,
          currV = _props$attributes2.currV,
          valPrice = _props$attributes2.valPrice,
          valColor = _props$attributes2.valColor,
          valSize = _props$attributes2.valSize,
          valWeight = _props$attributes2.valWeight,
          valV = _props$attributes2.valV,
          divPrice = _props$attributes2.divPrice,
          divColor = _props$attributes2.divColor,
          divSize = _props$attributes2.divSize,
          divWeight = _props$attributes2.divWeight,
          divV = _props$attributes2.divV,
          durPrice = _props$attributes2.durPrice,
          durColor = _props$attributes2.durColor,
          durSize = _props$attributes2.durSize,
          durWeight = _props$attributes2.durWeight,
          durV = _props$attributes2.durV,
          btnChecked = _props$attributes2.btnChecked,
          btnText = _props$attributes2.btnText,
          btnLink = _props$attributes2.btnLink,
          btnTarget = _props$attributes2.btnTarget,
          btnColor = _props$attributes2.btnColor,
          btnHoverColor = _props$attributes2.btnHoverColor,
          btnSize = _props$attributes2.btnSize,
          btnWeight = _props$attributes2.btnWeight,
          btnLine = _props$attributes2.btnLine,
          btnLetter = _props$attributes2.btnLetter,
          btnUpper = _props$attributes2.btnUpper,
          btnStyle = _props$attributes2.btnStyle,
          btnBack = _props$attributes2.btnBack,
          btnHoverBack = _props$attributes2.btnHoverBack,
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
          badgeColor = _props$attributes2.badgeColor,
          badgeTop = _props$attributes2.badgeTop,
          badgeHorizontal = _props$attributes2.badgeHorizontal,
          badgeWidth = _props$attributes2.badgeWidth,
          badgeSize = _props$attributes2.badgeSize,
          badgeTextSize = _props$attributes2.badgeTextSize,
          badgeWeight = _props$attributes2.badgeWeight,
          badgeLetter = _props$attributes2.badgeLetter,
          badgeStyle = _props$attributes2.badgeStyle,
          badgeUpper = _props$attributes2.badgeUpper,
          badgeText = _props$attributes2.badgeText,
          listChecked = _props$attributes2.listChecked,
          listColor = _props$attributes2.listColor,
          listWeight = _props$attributes2.listWeight,
          listSize = _props$attributes2.listSize,
          listItemsStyle = _props$attributes2.listItemsStyle,
          listLine = _props$attributes2.listLine,
          listUpper = _props$attributes2.listUpper,
          listLetter = _props$attributes2.listLetter,
          listBack = _props$attributes2.listBack,
          listItems = _props$attributes2.listItems,
          listMarginB = _props$attributes2.listMarginB,
          listMarginT = _props$attributes2.listMarginT,
          listPadding = _props$attributes2.listPadding,
          listStyle = _props$attributes2.listStyle,
          id = _props$attributes2.id;

      return wp.element.createElement(
        "div",
        {
          id: className + "-" + id,
          className: "" + className,
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
            className: className + "__badge_wrap " + className + "__badge_" + badgePos
          },
          wp.element.createElement(
            "div",
            {
              className: className + "__badge",
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
              {
                style: {
                  fontSize: badgeTextSize + "px",
                  color: badgeColor,
                  fontWeight: badgeWeight,
                  textTransform: badgeUpper ? "uppercase" : "none",
                  letterSpacing: badgeLetter + "px",
                  fontStyle: badgeStyle,
                  width: badgeWidth + "px",
                  top: badgeTop + "px",
                  left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                  right: "right" === badgePos ? badgeHorizontal + "px" : "auto"
                }
              },
              badgeText
            )
          )
        ),
        titleChecked && wp.element.createElement(
          "div",
          {
            className: className + "__title_wrap",
            style: {
              paddingTop: titleMarginT + "px",
              paddingBottom: titleMarginB + "px"
            }
          },
          wp.element.createElement(RichText.Content, {
            tagName: titleTag.toLowerCase(),
            className: className + "__title",
            value: title,
            style: {
              color: titleColor,
              background: titleBack,
              fontSize: titleSize + "px",
              letterSpacing: titleLetter + "px",
              textTransform: titleUpper ? "uppercase" : "none",
              fontStyle: titleStyle,
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
            className: className + "__price_wrap",
            style: {
              background: priceBack,
              marginTop: priceMarginT + "px",
              marginBottom: priceMarginB + "px",
              padding: pricePadding + "px",
              justifyContent: contentAlign
            }
          },
          slashPrice && wp.element.createElement(
            "strike",
            {
              className: className + "__slash",
              style: {
                color: slashColor,
                fontSize: slashSize + "px",
                fontWeight: slashWeight,
                alignSelf: slashV
              }
            },
            slashPrice
          ),
          currPrice && wp.element.createElement(
            "span",
            {
              className: className + "__currency",
              style: {
                color: currColor,
                fontSize: currSize + "px",
                fontWeight: currWeight,
                alignSelf: currV
              }
            },
            currPrice
          ),
          valPrice && wp.element.createElement(
            "span",
            {
              className: className + "__val",
              style: {
                color: valColor,
                fontSize: valSize + "px",
                fontWeight: valWeight,
                alignSelf: valV
              }
            },
            valPrice
          ),
          divPrice && wp.element.createElement(
            "span",
            {
              className: className + "__divider",
              style: {
                color: divColor,
                fontSize: divSize + "px",
                fontWeight: divWeight,
                alignSelf: divV
              }
            },
            divPrice
          ),
          durPrice && wp.element.createElement(
            "span",
            {
              className: className + "__dur",
              style: {
                color: durColor,
                fontSize: durSize + "px",
                fontWeight: durWeight,
                alignSelf: durV
              }
            },
            durPrice
          )
        ),
        listChecked && wp.element.createElement(
          "div",
          {
            className: className + "__list_wrap",
            style: {
              marginTop: listMarginT + "px",
              marginBottom: listMarginB + "px"
            }
          },
          wp.element.createElement(
            "ul",
            {
              className: className + "__list list-" + listStyle,
              style: {
                color: listColor,
                fontSize: listSize + "px",
                background: listBack,
                padding: listPadding + "px",
                listStyle: "check" !== listStyle ? listStyle : "none",
                listStylePosition: "inside",
                fontWeight: listWeight,
                letterSpacing: listLetter + "px",
                textTransform: listUpper ? "uppercase" : "none",
                fontStyle: listItemsStyle,
                lineHeight: listLine + "px"
              }
            },
            listItems
          )
        ),
        descChecked && wp.element.createElement(
          "div",
          { className: className + "__desc_wrap" },
          wp.element.createElement(RichText.Content, {
            tagName: "p",
            className: className + "__desc",
            value: desc,
            style: {
              color: descColor,
              background: descBack,
              fontSize: descSize + "px",
              fontWeight: descWeight,
              lineHeight: descLine + "px",
              letterSpacing: descLetter + "px",
              fontStyle: descStyle,
              marginTop: descMarginT + "px",
              marginBottom: descMarginB + "px",
              padding: descPadding + "px"
            }
          })
        ),
        btnChecked && wp.element.createElement(
          "div",
          {
            className: className + "__button",
            style: {
              width: btnWidth + "%"
            }
          },
          wp.element.createElement(
            "a",
            {
              "class": className + "__button_link",
              href: btnLink,
              target: btnTarget ? "_blank" : "_self",
              style: {
                color: btnColor,
                background: btnBack ? btnBack : "transparent",
                fontSize: btnSize + "px",
                fontWeight: btnWeight,
                letterSpacing: btnLetter + "px",
                fontStyle: btnStyle,
                lineHeight: btnLine + "px",
                marginTop: btnMarginT,
                marginBottom: btnMarginB,
                padding: btnPadding,
                border: btnBorderType,
                borderWidth: btnBorderWidth + "px",
                borderRadius: btnBorderRadius + "px",
                borderColor: btnBorderColor
              }
            },
            wp.element.createElement(RichText.Content, {
              tagName: "span",
              onChange: function onChange(newText) {
                return setAttributes({ btnText: newText });
              },
              value: btnText,
              style: {
                textTransform: btnUpper ? "uppercase" : "none"
              }
            })
          ),
          wp.element.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: ["#premium-pricing-table-" + id + " .premium-pricing-table__button_link:hover {", "color: " + btnHoverColor + " !important;", "background: " + btnHoverBack + " !important", "}"].join("\n")
            }
          })
        )
      );
    },
    deprecated: [{
      attributes: pricingAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            contentAlign = _props$attributes3.contentAlign,
            tableBack = _props$attributes3.tableBack,
            borderType = _props$attributes3.borderType,
            borderWidth = _props$attributes3.borderWidth,
            borderRadius = _props$attributes3.borderRadius,
            borderColor = _props$attributes3.borderColor,
            tablePadding = _props$attributes3.tablePadding,
            titleChecked = _props$attributes3.titleChecked,
            title = _props$attributes3.title,
            titleTag = _props$attributes3.titleTag,
            titleColor = _props$attributes3.titleColor,
            titleSize = _props$attributes3.titleSize,
            titleLetter = _props$attributes3.titleLetter,
            titleUpper = _props$attributes3.titleUpper,
            titleStyle = _props$attributes3.titleStyle,
            titleLine = _props$attributes3.titleLine,
            titleWeight = _props$attributes3.titleWeight,
            titleBack = _props$attributes3.titleBack,
            titleMarginT = _props$attributes3.titleMarginT,
            titleMarginB = _props$attributes3.titleMarginB,
            titlePadding = _props$attributes3.titlePadding,
            descChecked = _props$attributes3.descChecked,
            desc = _props$attributes3.desc,
            descColor = _props$attributes3.descColor,
            descSize = _props$attributes3.descSize,
            descLine = _props$attributes3.descLine,
            descWeight = _props$attributes3.descWeight,
            descStyle = _props$attributes3.descStyle,
            descLetter = _props$attributes3.descLetter,
            descBack = _props$attributes3.descBack,
            descMarginT = _props$attributes3.descMarginT,
            descMarginB = _props$attributes3.descMarginB,
            descPadding = _props$attributes3.descPadding,
            priceChecked = _props$attributes3.priceChecked,
            priceBack = _props$attributes3.priceBack,
            priceMarginT = _props$attributes3.priceMarginT,
            priceMarginB = _props$attributes3.priceMarginB,
            pricePadding = _props$attributes3.pricePadding,
            slashPrice = _props$attributes3.slashPrice,
            slashColor = _props$attributes3.slashColor,
            slashSize = _props$attributes3.slashSize,
            slashWeight = _props$attributes3.slashWeight,
            slashV = _props$attributes3.slashV,
            currPrice = _props$attributes3.currPrice,
            currColor = _props$attributes3.currColor,
            currSize = _props$attributes3.currSize,
            currWeight = _props$attributes3.currWeight,
            currV = _props$attributes3.currV,
            valPrice = _props$attributes3.valPrice,
            valColor = _props$attributes3.valColor,
            valSize = _props$attributes3.valSize,
            valWeight = _props$attributes3.valWeight,
            valV = _props$attributes3.valV,
            divPrice = _props$attributes3.divPrice,
            divColor = _props$attributes3.divColor,
            divSize = _props$attributes3.divSize,
            divWeight = _props$attributes3.divWeight,
            divV = _props$attributes3.divV,
            durPrice = _props$attributes3.durPrice,
            durColor = _props$attributes3.durColor,
            durSize = _props$attributes3.durSize,
            durWeight = _props$attributes3.durWeight,
            durV = _props$attributes3.durV,
            btnChecked = _props$attributes3.btnChecked,
            btnText = _props$attributes3.btnText,
            btnLink = _props$attributes3.btnLink,
            btnTarget = _props$attributes3.btnTarget,
            btnColor = _props$attributes3.btnColor,
            btnHoverColor = _props$attributes3.btnHoverColor,
            btnSize = _props$attributes3.btnSize,
            btnWeight = _props$attributes3.btnWeight,
            btnLine = _props$attributes3.btnLine,
            btnLetter = _props$attributes3.btnLetter,
            btnUpper = _props$attributes3.btnUpper,
            btnStyle = _props$attributes3.btnStyle,
            btnBack = _props$attributes3.btnBack,
            btnHoverBack = _props$attributes3.btnHoverBack,
            btnMarginT = _props$attributes3.btnMarginT,
            btnMarginB = _props$attributes3.btnMarginB,
            btnPadding = _props$attributes3.btnPadding,
            btnWidth = _props$attributes3.btnWidth,
            btnBorderType = _props$attributes3.btnBorderType,
            btnBorderWidth = _props$attributes3.btnBorderWidth,
            btnBorderRadius = _props$attributes3.btnBorderRadius,
            btnBorderColor = _props$attributes3.btnBorderColor,
            badgeChecked = _props$attributes3.badgeChecked,
            badgePos = _props$attributes3.badgePos,
            badgeBack = _props$attributes3.badgeBack,
            badgeColor = _props$attributes3.badgeColor,
            badgeTop = _props$attributes3.badgeTop,
            badgeHorizontal = _props$attributes3.badgeHorizontal,
            badgeWidth = _props$attributes3.badgeWidth,
            badgeSize = _props$attributes3.badgeSize,
            badgeWeight = _props$attributes3.badgeWeight,
            badgeLetter = _props$attributes3.badgeLetter,
            badgeStyle = _props$attributes3.badgeStyle,
            badgeUpper = _props$attributes3.badgeUpper,
            badgeText = _props$attributes3.badgeText,
            listChecked = _props$attributes3.listChecked,
            listColor = _props$attributes3.listColor,
            listWeight = _props$attributes3.listWeight,
            listSize = _props$attributes3.listSize,
            listItemsStyle = _props$attributes3.listItemsStyle,
            listLine = _props$attributes3.listLine,
            listUpper = _props$attributes3.listUpper,
            listLetter = _props$attributes3.listLetter,
            listBack = _props$attributes3.listBack,
            listItems = _props$attributes3.listItems,
            listMarginB = _props$attributes3.listMarginB,
            listMarginT = _props$attributes3.listMarginT,
            listPadding = _props$attributes3.listPadding,
            listStyle = _props$attributes3.listStyle,
            id = _props$attributes3.id;

        return wp.element.createElement(
          "div",
          {
            id: className + "-" + id,
            className: "" + className,
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
              className: className + "__badge_wrap " + className + "__badge_" + badgePos
            },
            wp.element.createElement(
              "div",
              {
                className: className + "__badge",
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
                {
                  style: {
                    color: badgeColor,
                    fontWeight: badgeWeight,
                    textTransform: badgeUpper ? "uppercase" : "none",
                    letterSpacing: badgeLetter + "px",
                    fontStyle: badgeStyle,
                    width: badgeWidth + "px",
                    top: badgeTop + "px",
                    left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                    right: "right" === badgePos ? badgeHorizontal + "px" : "auto"
                  }
                },
                badgeText
              )
            )
          ),
          titleChecked && wp.element.createElement(
            "div",
            {
              className: className + "__title_wrap",
              style: {
                paddingTop: titleMarginT + "px",
                paddingBottom: titleMarginB + "px"
              }
            },
            wp.element.createElement(RichText.Content, {
              tagName: titleTag.toLowerCase(),
              className: className + "__title",
              value: title,
              style: {
                color: titleColor,
                background: titleBack,
                fontSize: titleSize + "px",
                letterSpacing: titleLetter + "px",
                textTransform: titleUpper ? "uppercase" : "none",
                fontStyle: titleStyle,
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
              className: className + "__price_wrap",
              style: {
                background: priceBack,
                marginTop: priceMarginT + "px",
                marginBottom: priceMarginB + "px",
                padding: pricePadding + "px",
                justifyContent: contentAlign
              }
            },
            slashPrice && wp.element.createElement(
              "strike",
              {
                className: className + "__slash",
                style: {
                  color: slashColor,
                  fontSize: slashSize + "px",
                  fontWeight: slashWeight,
                  alignSelf: slashV
                }
              },
              slashPrice
            ),
            currPrice && wp.element.createElement(
              "span",
              {
                className: className + "__currency",
                style: {
                  color: currColor,
                  fontSize: currSize + "px",
                  fontWeight: currWeight,
                  alignSelf: currV
                }
              },
              currPrice
            ),
            valPrice && wp.element.createElement(
              "span",
              {
                className: className + "__val",
                style: {
                  color: valColor,
                  fontSize: valSize + "px",
                  fontWeight: valWeight,
                  alignSelf: valV
                }
              },
              valPrice
            ),
            divPrice && wp.element.createElement(
              "span",
              {
                className: className + "__divider",
                style: {
                  color: divColor,
                  fontSize: divSize + "px",
                  fontWeight: divWeight,
                  alignSelf: divV
                }
              },
              divPrice
            ),
            durPrice && wp.element.createElement(
              "span",
              {
                className: className + "__dur",
                style: {
                  color: durColor,
                  fontSize: durSize + "px",
                  fontWeight: durWeight,
                  alignSelf: durV
                }
              },
              durPrice
            )
          ),
          listChecked && wp.element.createElement(
            "div",
            {
              className: className + "__list_wrap",
              style: {
                marginTop: listMarginT + "px",
                marginBottom: listMarginB + "px"
              }
            },
            wp.element.createElement(
              "ul",
              {
                className: className + "__list list-" + listStyle,
                style: {
                  color: listColor,
                  fontSize: listSize + "px",
                  background: listBack,
                  padding: listPadding + "px",
                  listStyle: "check" !== listStyle ? listStyle : "none",
                  listStylePosition: "inside",
                  fontWeight: listWeight,
                  letterSpacing: listLetter + "px",
                  textTransform: listUpper ? "uppercase" : "none",
                  fontStyle: listItemsStyle,
                  lineHeight: listLine + "px"
                }
              },
              listItems
            )
          ),
          descChecked && wp.element.createElement(
            "div",
            { className: className + "__desc_wrap" },
            wp.element.createElement(RichText.Content, {
              tagName: "p",
              className: className + "__desc",
              value: desc,
              style: {
                color: descColor,
                background: descBack,
                fontSize: descSize + "px",
                fontWeight: descWeight,
                lineHeight: descLine + "px",
                letterSpacing: descLetter + "px",
                fontStyle: descStyle,
                marginTop: descMarginT + "px",
                marginBottom: descMarginB + "px",
                padding: descPadding + "px"
              }
            })
          ),
          btnChecked && wp.element.createElement(
            "div",
            {
              className: className + "__button",
              style: {
                width: btnWidth + "%"
              }
            },
            wp.element.createElement(
              "a",
              {
                "class": className + "__button_link",
                href: btnLink,
                target: btnTarget ? "_blank" : "_self",
                style: {
                  color: btnColor,
                  background: btnBack ? btnBack : "transparent",
                  fontSize: btnSize + "px",
                  fontWeight: btnWeight,
                  letterSpacing: btnLetter + "px",
                  fontStyle: btnStyle,
                  lineHeight: btnLine + "px",
                  marginTop: btnMarginT,
                  marginBottom: btnMarginB,
                  padding: btnPadding,
                  border: btnBorderType,
                  borderWidth: btnBorderWidth + "px",
                  borderRadius: btnBorderRadius + "px",
                  borderColor: btnBorderColor
                }
              },
              wp.element.createElement(RichText.Content, {
                tagName: "span",
                onChange: function onChange(newText) {
                  return setAttributes({ btnText: newText });
                },
                value: btnText,
                style: {
                  textTransform: btnUpper ? "uppercase" : "none"
                }
              })
            ),
            wp.element.createElement("style", {
              dangerouslySetInnerHTML: {
                __html: ["#premium-pricing-table-" + id + " .premium-pricing-table__button_link:hover {", "color: " + btnHoverColor + " !important;", "background: " + btnHoverBack + " !important", "}"].join("\n")
              }
            })
          )
        );
      }
    }]
  });
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



if (__WEBPACK_IMPORTED_MODULE_0__settings__["i" /* maps */]) {
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
      CheckboxControl = _wp$components.CheckboxControl,
      ToggleControl = _wp$components.ToggleControl;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      MediaUpload = _wp$editor.MediaUpload,
      PanelColorSettings = _wp$editor.PanelColorSettings;
  var _wp$element = wp.element,
      Component = _wp$element.Component,
      Fragment = _wp$element.Fragment;


  var isMapUpdated = null;

  var mapAttrs = {
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
      type: "string",
      default: "40.7569733"
    },
    centerLng: {
      type: "string",
      default: " -73.98878250000001"
    },
    markerOpen: {
      type: "boolean",
      default: false
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
  };

  var PremiumMap = function (_Component) {
    _inherits(PremiumMap, _Component);

    function PremiumMap() {
      _classCallCheck(this, PremiumMap);

      var _this = _possibleConstructorReturn(this, (PremiumMap.__proto__ || Object.getPrototypeOf(PremiumMap)).apply(this, arguments));

      _this.state = {
        thisAddress: "",
        thisMap: null,
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
            markerOpen = _props$attributes.markerOpen,
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

          if (markerOpen) {
            infoWindow.open(map, marker);
          }

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
            markerOpen = _props$attributes2.markerOpen,
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
          label: __("Road Map")
        }, {
          value: "satellite",
          label: __("Satellite")
        }, {
          value: "terrain",
          label: __("Terrain")
        }, {
          value: "hybrid",
          label: __("Hybrid")
        }];

        var ALIGNS = ["left", "center", "right"];
        return [typeof google !== "undefined" && isSelected && wp.element.createElement(
          InspectorControls,
          { key: "key" },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Center Location"),
              className: "premium-panel-body",
              initialOpen: false
            },
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
            {
              title: __("Marker"),
              className: "premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(CheckboxControl, {
              label: __("Enable Marker"),
              checked: mapMarker,
              onChange: function onChange(check) {
                return setAttributes({ mapMarker: check });
              },
              help: __("Disable marker is applied on page reload")
            }),
            mapMarker && wp.element.createElement(
              Fragment,
              null,
              wp.element.createElement(TextControl, {
                label: __("Marker Title"),
                value: markerTitle,
                onChange: function onChange(newText) {
                  return setAttributes({ markerTitle: newText });
                }
              }),
              wp.element.createElement(TextareaControl, {
                label: __("Marker Description"),
                value: markerDesc,
                onChange: function onChange(newText) {
                  return setAttributes({ markerDesc: newText });
                }
              }),
              wp.element.createElement(RangeControl, {
                label: __("Spacing (PX)"),
                value: gapBetween,
                min: "10",
                max: "80",
                onChange: function onChange(newSize) {
                  return setAttributes({ gapBetween: newSize });
                }
              }),
              wp.element.createElement(ToggleControl, {
                label: __("Description opened by default"),
                checked: markerOpen,
                onChange: function onChange(newValue) {
                  return setAttributes({ markerOpen: newValue });
                }
              }),
              wp.element.createElement(Toolbar, {
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
              wp.element.createElement(CheckboxControl, {
                label: __("Custom Marker Icon"),
                checked: markerCustom,
                onChange: function onChange(check) {
                  return setAttributes({ markerCustom: check });
                }
              }),
              markerCustom && markerIconUrl && wp.element.createElement("img", { src: markerIconUrl, width: "100%", height: "auto" }),
              markerCustom && wp.element.createElement(MediaUpload, {
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
              wp.element.createElement(RangeControl, {
                label: __("Description Box Max Width (PX)"),
                value: maxWidth,
                min: "10",
                max: "500",
                onChange: function onChange(newSize) {
                  return setAttributes({ maxWidth: newSize });
                }
              }),
              wp.element.createElement(RangeControl, {
                label: __("Description Box Padding (PX)"),
                value: boxPadding,
                min: "1",
                max: "50",
                onChange: function onChange(newSize) {
                  return setAttributes({ boxPadding: newSize });
                }
              })
            )
          ),
          mapMarker && markerTitle && wp.element.createElement(
            PanelBody,
            {
              title: __("Marker Title Style"),
              className: "premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(RangeControl, {
              label: __("Font Size (PX)"),
              value: titleSize,
              min: "10",
              max: "80",
              onChange: function onChange(newSize) {
                return setAttributes({ titleSize: newSize });
              }
            }),
            wp.element.createElement(PanelColorSettings, {
              title: __("Colors"),
              className: "premium-panel-body-inner",
              initialOpen: false,
              colorSettings: [{
                value: titleColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ titleColor: colorValue });
                },
                label: __("Text Color")
              }]
            })
          ),
          mapMarker && markerDesc && wp.element.createElement(
            PanelBody,
            {
              title: __("Marker Description Style"),
              className: "premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(RangeControl, {
              label: __("Font Size (PX)"),
              value: descSize,
              min: "10",
              max: "80",
              onChange: function onChange(newSize) {
                return setAttributes({ descSize: newSize });
              }
            }),
            wp.element.createElement(PanelColorSettings, {
              title: __("Colors"),
              className: "premium-panel-body-inner",
              initialOpen: false,
              colorSettings: [{
                value: descColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ descColor: colorValue });
                },
                label: __("Text Color")
              }]
            })
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Controls"),
              className: "premium-panel-body",
              initialOpen: false
            },
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
            {
              title: __("Map Style"),
              className: "premium-panel-body",
              initialOpen: false
            },
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
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__icons__["a" /* default */], { icon: "maps" }),
    category: "premium-blocks",
    attributes: mapAttrs,
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
          markerOpen = _props$attributes3.markerOpen,
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
            markerTitle && wp.element.createElement(
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
            markerDesc && wp.element.createElement(
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
          "window.addEventListener('load',function(){\n                    if( typeof google === 'undefined' ) return;\n                    let mapElem = document.getElementById('" + mapID + "');\n                    let pin = mapElem.querySelector('." + className + "__marker');\n                    let latlng = new google.maps.LatLng( parseFloat( " + centerLat + " ) , parseFloat( " + centerLng + " ) );\n\n                    let map = new google.maps.Map(mapElem, {\n                        zoom: " + zoom + ",\n                        gestureHandling: 'cooperative',\n                        mapTypeId: '" + mapType + "',\n                        mapTypeControl: " + mapTypeControl + ",\n                        zoomControl: " + zoomControl + ",\n                        fullscreenControl: " + fullscreenControl + ",\n                        streetViewControl: " + streetViewControl + ",\n                        scrollwheel: " + scrollwheel + ",\n                        center: latlng,\n                        styles: " + mapStyle + "\n                    });\n                    if( " + mapMarker + " ) {\n                        let markerIcon = '" + markerIconUrl + "';\n                        let marker = new google.maps.Marker({\n                            position\t: latlng,\n                            map\t\t\t: map,\n                            icon        : " + markerCustom + " ? markerIcon : ''\n                        });\n                        \n                        let infowindow = new google.maps.InfoWindow({\n                            maxWidth    : " + maxWidth + ",\n                            content\t\t: pin.innerHTML\n                        });\n                        if (" + markerOpen + ") {\n                          infowindow.open( map, marker );\n                        }\n                        google.maps.event.addListener(marker, 'click', function() {\n                            infowindow.open( map, marker );\n                        });\n                    }\n                    \n                });"
        )
      );
    },
    deprecated: [{
      attributes: mapAttrs,
      save: function save(props) {
        var _props$attributes4 = props.attributes,
            mapID = _props$attributes4.mapID,
            height = _props$attributes4.height,
            mapStyle = _props$attributes4.mapStyle,
            mapType = _props$attributes4.mapType,
            zoom = _props$attributes4.zoom,
            mapTypeControl = _props$attributes4.mapTypeControl,
            zoomControl = _props$attributes4.zoomControl,
            fullscreenControl = _props$attributes4.fullscreenControl,
            streetViewControl = _props$attributes4.streetViewControl,
            scrollwheel = _props$attributes4.scrollwheel,
            centerLat = _props$attributes4.centerLat,
            centerLng = _props$attributes4.centerLng,
            mapMarker = _props$attributes4.mapMarker,
            markerOpen = _props$attributes4.markerOpen,
            markerIconUrl = _props$attributes4.markerIconUrl,
            markerCustom = _props$attributes4.markerCustom,
            maxWidth = _props$attributes4.maxWidth,
            markerTitle = _props$attributes4.markerTitle,
            markerDesc = _props$attributes4.markerDesc,
            titleColor = _props$attributes4.titleColor,
            titleSize = _props$attributes4.titleSize,
            descColor = _props$attributes4.descColor,
            descSize = _props$attributes4.descSize,
            boxAlign = _props$attributes4.boxAlign,
            boxPadding = _props$attributes4.boxPadding,
            gapBetween = _props$attributes4.gapBetween;


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
              markerTitle && wp.element.createElement(
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
              markerDesc && wp.element.createElement(
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
            "window.addEventListener('load',function(){\n                        if( typeof google === 'undefined' ) return;\n                        let mapElem = document.getElementById('" + mapID + "');\n                        let pin = mapElem.querySelector('." + className + "__marker');\n                        let latlng = new google.maps.LatLng( parseFloat( " + centerLat + " ) , parseFloat( " + centerLng + " ) );\n    \n                        let map = new google.maps.Map(mapElem, {\n                            zoom: " + zoom + ",\n                            gestureHandling: 'cooperative',\n                            mapTypeId: '" + mapType + "',\n                            mapTypeControl: " + mapTypeControl + ",\n                            zoomControl: " + zoomControl + ",\n                            fullscreenControl: " + fullscreenControl + ",\n                            streetViewControl: " + streetViewControl + ",\n                            scrollwheel: " + scrollwheel + ",\n                            center: latlng,\n                            styles: " + mapStyle + "\n                        });\n                        if( " + mapMarker + " ) {\n                            let markerIcon = '" + markerIconUrl + "';\n                            let marker = new google.maps.Marker({\n                                position\t: latlng,\n                                map\t\t\t: map,\n                                icon        : " + markerCustom + " ? markerIcon : ''\n                            });\n                            \n                            let infowindow = new google.maps.InfoWindow({\n                                maxWidth    : " + maxWidth + ",\n                                content\t\t: pin.innerHTML\n                            });\n                            if (" + markerOpen + ") {\n                              infowindow.open( map, marker );\n                            }\n                            google.maps.event.addListener(marker, 'click', function() {\n                                infowindow.open( map, marker );\n                            });\n                        }\n                        \n                    });"
          )
        );
      }
    }]
  });
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_image__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_testimonials_upper_quote__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_testimonials_lower_quote__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(1);







if (__WEBPACK_IMPORTED_MODULE_4__settings__["k" /* testimonial */]) {
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


  var testimonialsAttrs = {
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
      type: "array",
      source: "children",
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
  };

  registerBlockType("premium/testimonial", {
    title: __("Testimonial"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__icons__["a" /* default */], { icon: "testimonials" }),
    category: "premium-blocks",
    attributes: testimonialsAttrs,
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


      var RADIUS = [{
        value: "0",
        label: __("Square")
      }, {
        value: "50%",
        label: __("Circle")
      }, {
        value: "15px",
        label: __("Rounded")
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
          {
            title: __("Author"),
            className: "premium-panel-body",
            initialOpen: true
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Image"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
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
              title: __("Border Color"),
              className: "premium-panel-body-inner",
              initialOpen: false,
              colorSettings: [{
                value: imgBorderColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ imgBorderColor: colorValue });
                },
                label: __("Color")
              }]
            })
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size"],
              size: authorSize,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ authorSize: newSize });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: authorColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ authorColor: colorValue });
              },
              label: __("Text Color")
            }]
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Content"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size", "line"],
              size: bodySize,
              line: bodyLine,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ bodySize: newSize });
              },
              onChangeLine: function onChangeLine(newWeight) {
                return setAttributes({ bodyLine: newWeight });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: bodyColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ bodyColor: colorValue });
              },
              label: __("Text Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
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
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Company"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size"],
              size: authorComSize,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ authorComSize: newSize });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: authorComColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ authorComColor: colorValue });
              },
              label: __("Text Color")
            }, {
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
          {
            title: __("Quotations"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: quotColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ quotColor: colorValue });
              },
              label: __("Quotations Color")
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_testimonials_upper_quote__["a" /* default */], {
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
                  value: text,
                  isSelected: false,
                  placeholder: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.",
                  onChange: function onChange(newText) {
                    return setAttributes({ text: newText });
                  },
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
              wp.element.createElement(RichText, {
                tagName: authorTag.toLowerCase(),
                className: className + "__author",
                value: author,
                isSelected: false,
                onChange: function onChange(newText) {
                  return setAttributes({ author: newText });
                },
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_testimonials_lower_quote__["a" /* default */], {
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_testimonials_upper_quote__["a" /* default */], {
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
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_testimonials_lower_quote__["a" /* default */], {
              color: quotColor,
              size: quotSize,
              opacity: quotOpacity
            })
          )
        )
      );
    },
    deprecated: [{
      attributes: testimonialsAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            align = _props$attributes3.align,
            authorImgUrl = _props$attributes3.authorImgUrl,
            imgRadius = _props$attributes3.imgRadius,
            imgBorder = _props$attributes3.imgBorder,
            imgBorderColor = _props$attributes3.imgBorderColor,
            imgSize = _props$attributes3.imgSize,
            text = _props$attributes3.text,
            authorTag = _props$attributes3.authorTag,
            authorColor = _props$attributes3.authorColor,
            authorSize = _props$attributes3.authorSize,
            author = _props$attributes3.author,
            authorComTag = _props$attributes3.authorComTag,
            authorComColor = _props$attributes3.authorComColor,
            authorComSize = _props$attributes3.authorComSize,
            authorCom = _props$attributes3.authorCom,
            quotSize = _props$attributes3.quotSize,
            quotColor = _props$attributes3.quotColor,
            quotOpacity = _props$attributes3.quotOpacity,
            bodyColor = _props$attributes3.bodyColor,
            bodySize = _props$attributes3.bodySize,
            bodyLine = _props$attributes3.bodyLine,
            bodyTop = _props$attributes3.bodyTop,
            bodyBottom = _props$attributes3.bodyBottom,
            dashColor = _props$attributes3.dashColor,
            urlCheck = _props$attributes3.urlCheck,
            urlText = _props$attributes3.urlText,
            urlTarget = _props$attributes3.urlTarget;


        return wp.element.createElement(
          "div",
          { className: className + "__wrap" },
          wp.element.createElement(
            "div",
            { className: className + "__container" },
            wp.element.createElement(
              "span",
              { className: className + "__upper" },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_testimonials_upper_quote__["a" /* default */], {
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
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_testimonials_lower_quote__["a" /* default */], {
                color: quotColor,
                size: quotSize,
                opacity: quotOpacity
              })
            )
          )
        );
      }
    }]
  });
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var placeHolder = PremiumBlocksSettings.defaultAuthImg;

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
      return wp.element.createElement("img", { src: placeHolder });
    }
  }]);

  return DefaultImage;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (DefaultImage);

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(1);





if (__WEBPACK_IMPORTED_MODULE_0__settings__["f" /* countUp */]) {
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
  var Fragment = wp.element.Fragment;


  var counterAttrs = {
    increment: {
      type: "string",
      default: 500
    },
    time: {
      type: "string",
      default: 1000
    },
    delay: {
      type: "string",
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
      default: "Suffix"
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
    iconSpacing: {
      type: "number",
      default: 10
    },
    imageID: {
      type: "string"
    },
    imageURL: {
      type: "string"
    },
    iconType: {
      type: "string",
      default: "dash"
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
      type: "string",
      default: "dashicons-clock"
    }
  };

  registerBlockType("premium/countup", {
    title: __("CountUp"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* default */], { icon: "counter" }),
    category: "premium-blocks",
    attributes: counterAttrs,
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
          iconSpacing = _props$attributes.iconSpacing,
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
          iconType = _props$attributes.iconType,
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

      var iconClass = "fa" === iconType ? "fa fa-" + faIcon : "dashicons " + faIcon;
      var ICONS = [{
        value: "icon",
        label: __("Icon")
      }, {
        value: "img",
        label: __("Image")
      }];
      var DIRECTION = [{
        value: "row",
        label: __("Row")
      }, {
        value: "row-reverse",
        label: __("Reversed Row")
      }, {
        value: "column",
        label: __("Column")
      }, {
        value: "column-reverse",
        label: __("Reversed Column")
      }];
      var TYPE = [{
        value: "fa",
        label: "Font Awesome Icon"
      }, {
        value: "dash",
        label: "Dashicon"
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
          {
            title: __("Counter"),
            className: "premium-panel-body",
            initialOpen: false
          },
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
          ("row" === flexDir || "row-reverse" === flexDir) && wp.element.createElement(RangeControl, {
            label: __("Spacing (PX)"),
            value: iconSpacing,
            onChange: function onChange(newValue) {
              return setAttributes({ iconSpacing: newValue });
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
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Title"),
            checked: titleCheck,
            onChange: function onChange(check) {
              return setAttributes({ titleCheck: check });
            }
          })
        ),
        iconCheck && wp.element.createElement(
          PanelBody,
          {
            title: __("Icon"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(SelectControl, {
            label: __("Icon Type"),
            options: ICONS,
            value: icon,
            onChange: function onChange(newType) {
              return setAttributes({ icon: newType });
            }
          }),
          ("" !== faIcon || "undefined" !== typeof faIcon) && "icon" === icon && wp.element.createElement(
            "div",
            { className: "premium-icon__sidebar_icon" },
            wp.element.createElement("i", { className: iconClass })
          ),
          "icon" === icon && wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(SelectControl, {
              label: __("Icon Type"),
              value: iconType,
              options: TYPE,
              onChange: function onChange(newType) {
                return setAttributes({ iconType: newType });
              }
            }),
            wp.element.createElement(TextControl, {
              label: __("Icon Class"),
              value: faIcon,
              help: [__("Get icon class from"), wp.element.createElement(
                "a",
                {
                  href: "fa" === iconType ? "https://fontawesome.com/v4.7.0/icons/" : "https://developer.wordpress.org/resource/dashicons/",
                  target: "_blank"
                },
                "\xA0",
                __("here")
              ), __(" , for example: "), "fa" === iconType ? "address-book" : "dashicons-admin-site"],
              onChange: function onChange(newIcon) {
                return setAttributes({ faIcon: newIcon });
              }
            })
          ),
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
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: iconColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ iconColor: colorValue });
              },
              label: __("Icon Color")
            }]
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Number"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size", "weight"],
              size: numberSize,
              weight: numberWeight,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ numberSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ numberWeight: newWeight });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: numberColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ numberColor: colorValue });
              },
              label: __("Number Color")
            }]
          })
        ),
        prefix && wp.element.createElement(
          PanelBody,
          {
            title: __("Prefix"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(TextControl, {
            label: __("Prefix"),
            value: prefixTxt,
            onChange: function onChange(value) {
              return setAttributes({ prefixTxt: value });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size", "weight"],
              size: prefixSize,
              weight: prefixWeight,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ prefixSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ prefixWeight: newWeight });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: prefixColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ prefixColor: colorValue });
              },
              label: __("Text Color")
            }]
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
          {
            title: __("Suffix"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(TextControl, {
            label: __("Suffix"),
            value: suffixTxt,
            onChange: function onChange(value) {
              return setAttributes({ suffixTxt: value });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size", "weight"],
              size: suffixSize,
              weight: suffixWeight,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ suffixSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ suffixWeight: newWeight });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: suffixColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ suffixColor: colorValue });
              },
              label: __("Text Color")
            }]
          }),
          wp.element.createElement(RangeControl, {
            label: __("Gap Before (PX)"),
            value: suffixGap,
            onChange: function onChange(newValue) {
              return setAttributes({ suffixGap: newValue });
            }
          })
        ),
        titleCheck && wp.element.createElement(
          PanelBody,
          {
            title: __("Title"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(TextControl, {
            label: __("Title Text"),
            value: titleTxt,
            onChange: function onChange(value) {
              return setAttributes({ titleTxt: value });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], {
              components: ["size", "weight"],
              size: titleSize,
              weight: titleWeight,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ titleSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ titleWeight: newWeight });
              }
            })
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: titleColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ titleColor: colorValue });
              },
              label: __("Text Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
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
          )
        )
      ), wp.element.createElement(
        "div",
        null,
        iconType === "fa" && 1 != __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* FontAwesomeEnabled */] && iconCheck && wp.element.createElement(
          "p",
          { className: className + "__alert" },
          __("Please Enable Font Awesome Icons from Plugin settings")
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
              marginRight: "row" === flexDir || "row-reverse" === flexDir ? iconSpacing + "px" : "0",
              marginLeft: "row" === flexDir || "row-reverse" === flexDir ? iconSpacing + "px" : "0",
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          "icon" === icon && wp.element.createElement("i", {
            className: className + "__icon " + iconClass,
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
          ),
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
          )
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
          iconSpacing = _props$attributes2.iconSpacing,
          iconType = _props$attributes2.iconType,
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

      var iconClass = "fa" === iconType ? "fa fa-" + faIcon : "dashicons " + faIcon;
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
            className: className + "__icon_wrap",
            style: {
              marginRight: "row" === flexDir || "row-reverse" === flexDir ? iconSpacing + "px" : "0",
              marginLeft: "row" === flexDir || "row-reverse" === flexDir ? iconSpacing + "px" : "0",
              alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
            }
          },
          "icon" === icon && wp.element.createElement("i", {
            className: className + "__icon " + iconClass,
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
          ),
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
          )
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
        )
      );
    },
    deprecated: [{
      attributes: counterAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            increment = _props$attributes3.increment,
            time = _props$attributes3.time,
            delay = _props$attributes3.delay,
            align = _props$attributes3.align,
            flexDir = _props$attributes3.flexDir,
            numberSize = _props$attributes3.numberSize,
            numberColor = _props$attributes3.numberColor,
            numberWeight = _props$attributes3.numberWeight,
            prefix = _props$attributes3.prefix,
            prefixTxt = _props$attributes3.prefixTxt,
            prefixSize = _props$attributes3.prefixSize,
            prefixColor = _props$attributes3.prefixColor,
            prefixWeight = _props$attributes3.prefixWeight,
            prefixGap = _props$attributes3.prefixGap,
            suffix = _props$attributes3.suffix,
            suffixTxt = _props$attributes3.suffixTxt,
            suffixSize = _props$attributes3.suffixSize,
            suffixColor = _props$attributes3.suffixColor,
            suffixWeight = _props$attributes3.suffixWeight,
            suffixGap = _props$attributes3.suffixGap,
            iconCheck = _props$attributes3.iconCheck,
            icon = _props$attributes3.icon,
            iconSpacing = _props$attributes3.iconSpacing,
            iconType = _props$attributes3.iconType,
            imageURL = _props$attributes3.imageURL,
            iconSize = _props$attributes3.iconSize,
            iconColor = _props$attributes3.iconColor,
            selfAlign = _props$attributes3.selfAlign,
            titleCheck = _props$attributes3.titleCheck,
            titleTxt = _props$attributes3.titleTxt,
            titleColor = _props$attributes3.titleColor,
            titleSize = _props$attributes3.titleSize,
            titleT = _props$attributes3.titleT,
            titleB = _props$attributes3.titleB,
            titleWeight = _props$attributes3.titleWeight,
            faIcon = _props$attributes3.faIcon;

        var iconClass = "fa" === iconType ? "fa fa-" + faIcon : "dashicons " + faIcon;
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
              className: className + "__icon_wrap",
              style: {
                marginRight: "row" === flexDir || "row-reverse" === flexDir ? iconSpacing + "px" : "0",
                marginLeft: "row" === flexDir || "row-reverse" === flexDir ? iconSpacing + "px" : "0",
                alignSelf: "row-reverse" === flexDir || "row" === flexDir ? "center" : selfAlign
              }
            },
            "icon" === icon && wp.element.createElement("i", {
              className: className + "__icon " + iconClass,
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
            ),
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
            )
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
          )
        );
      }
    }]
  });
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_icon__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_margin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_premium_padding__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_premium_text_shadow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons__ = __webpack_require__(1);









if (__WEBPACK_IMPORTED_MODULE_0__settings__["h" /* icon */]) {
  var className = "premium-icon";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      Toolbar = _wp$components.Toolbar,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      ToggleControl = _wp$components.ToggleControl;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      URLInput = _wp$editor.URLInput;


  var iconAttrs = {
    iconType: {
      type: "string",
      default: "dash"
    },
    selectedIcon: {
      type: "string",
      default: "dashicons-admin-site"
    },
    align: {
      type: "string",
      default: "center"
    },
    hoverEffect: {
      type: "string",
      default: "none"
    },
    iconSize: {
      type: "number",
      default: 50
    },
    iconColor: {
      type: "string",
      default: "#6ec1e4"
    },
    iconBack: {
      type: "string"
    },
    padding: {
      type: "string",
      default: "up"
    },
    shadowColor: {
      type: "string"
    },
    shadowBlur: {
      type: "number",
      default: "0"
    },
    shadowHorizontal: {
      type: "number",
      default: "0"
    },
    shadowVertical: {
      type: "number",
      default: "0"
    },
    paddingT: {
      type: "number"
    },
    paddingR: {
      type: "number"
    },
    paddingB: {
      type: "number"
    },
    paddingL: {
      type: "number"
    },
    margin: {
      type: "string",
      default: "up"
    },
    marginT: {
      type: "number"
    },
    marginR: {
      type: "number"
    },
    marginB: {
      type: "number"
    },
    marginL: {
      type: "number"
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
      default: 100
    },
    borderColor: {
      type: "string"
    },
    background: {
      type: "string"
    },
    wrapBorderType: {
      type: "string",
      default: "none"
    },
    wrapBorderWidth: {
      type: "number",
      default: "1"
    },
    wrapBorderRadius: {
      type: "number"
    },
    wrapBorderColor: {
      type: "string"
    },
    wrapPadding: {
      type: "string",
      default: "up"
    },
    wrapPaddingT: {
      type: "number"
    },
    wrapPaddingR: {
      type: "number"
    },
    wrapPaddingB: {
      type: "number"
    },
    wrapPaddingL: {
      type: "number"
    },
    wrapMargin: {
      type: "string",
      default: "up"
    },
    wrapMarginT: {
      type: "number"
    },
    wrapMarginR: {
      type: "number"
    },
    wrapMarginB: {
      type: "number"
    },
    wrapMarginL: {
      type: "number"
    },
    urlCheck: {
      type: "boolean"
    },
    link: {
      type: "string"
    },
    target: {
      type: "boolean"
    }
  };

  registerBlockType("premium/icon", {
    title: __("Icon"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__icons__["a" /* default */], { icon: "icon" }),
    category: "premium-blocks",
    attributes: iconAttrs,
    edit: function edit(props) {
      var isSelected = props.isSelected,
          setAttributes = props.setAttributes;
      var _props$attributes = props.attributes,
          iconType = _props$attributes.iconType,
          selectedIcon = _props$attributes.selectedIcon,
          align = _props$attributes.align,
          hoverEffect = _props$attributes.hoverEffect,
          iconSize = _props$attributes.iconSize,
          iconColor = _props$attributes.iconColor,
          iconBack = _props$attributes.iconBack,
          shadowBlur = _props$attributes.shadowBlur,
          shadowColor = _props$attributes.shadowColor,
          shadowHorizontal = _props$attributes.shadowHorizontal,
          shadowVertical = _props$attributes.shadowVertical,
          paddingT = _props$attributes.paddingT,
          paddingR = _props$attributes.paddingR,
          paddingB = _props$attributes.paddingB,
          paddingL = _props$attributes.paddingL,
          marginT = _props$attributes.marginT,
          marginR = _props$attributes.marginR,
          marginB = _props$attributes.marginB,
          marginL = _props$attributes.marginL,
          borderType = _props$attributes.borderType,
          borderWidth = _props$attributes.borderWidth,
          borderRadius = _props$attributes.borderRadius,
          borderColor = _props$attributes.borderColor,
          background = _props$attributes.background,
          wrapBorderType = _props$attributes.wrapBorderType,
          wrapBorderWidth = _props$attributes.wrapBorderWidth,
          wrapBorderRadius = _props$attributes.wrapBorderRadius,
          wrapBorderColor = _props$attributes.wrapBorderColor,
          wrapPaddingT = _props$attributes.wrapPaddingT,
          wrapPaddingR = _props$attributes.wrapPaddingR,
          wrapPaddingB = _props$attributes.wrapPaddingB,
          wrapPaddingL = _props$attributes.wrapPaddingL,
          wrapMarginT = _props$attributes.wrapMarginT,
          wrapMarginR = _props$attributes.wrapMarginR,
          wrapMarginB = _props$attributes.wrapMarginB,
          wrapMarginL = _props$attributes.wrapMarginL,
          urlCheck = _props$attributes.urlCheck,
          link = _props$attributes.link,
          target = _props$attributes.target;

      var iconClass = "fa" === iconType ? ("" + selectedIcon).startsWith("fa-") ? "fa " + selectedIcon : "fa fa-" + selectedIcon : "dashicons " + selectedIcon;
      var EFFECTS = [{
        value: "none",
        label: __("None")
      }, {
        value: "pulse",
        label: __("Pulse")
      }, {
        value: "rotate",
        label: __("Rotate")
      }, {
        value: "drotate",
        label: __("3D Rotate")
      }, {
        value: "buzz",
        label: __("Buzz")
      }, {
        value: "drop",
        label: __("Drop Shadow")
      }, {
        value: "wobble",
        label: __("Wobble")
      }];

      var ALIGNS = ["left", "center", "right"];

      return [isSelected && wp.element.createElement(
        InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          PanelBody,
          {
            title: __("Icon"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_icon__["a" /* default */], {
            iconType: iconType,
            selectedIcon: selectedIcon,
            onChangeType: function onChangeType(newType) {
              return setAttributes({ iconType: newType });
            },
            onChangeIcon: function onChangeIcon(newIcon) {
              return setAttributes({ selectedIcon: newIcon });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Hover Effect"),
            options: EFFECTS,
            value: hoverEffect,
            onChange: function onChange(newEffect) {
              return setAttributes({ hoverEffect: newEffect });
            }
          }),
          wp.element.createElement(
            "p",
            null,
            __("Align")
          ),
          wp.element.createElement(Toolbar, {
            controls: ALIGNS.map(function (iconAlign) {
              return {
                icon: "editor-align" + iconAlign,
                isActive: iconAlign === align,
                onClick: function onClick() {
                  return setAttributes({ align: iconAlign });
                }
              };
            })
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Link"),
            checked: urlCheck,
            onChange: function onChange(newValue) {
              return setAttributes({ urlCheck: newValue });
            }
          }),
          urlCheck && wp.element.createElement(ToggleControl, {
            label: __("Open link in new tab"),
            checked: target,
            onChange: function onChange(newValue) {
              return setAttributes({ target: newValue });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Icon Style"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(RangeControl, {
            label: __("Size (PX)"),
            value: iconSize,
            onChange: function onChange(newValue) {
              return setAttributes({ iconSize: newValue });
            }
          }),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: iconColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ iconColor: colorValue });
              },
              label: __("Icon Color")
            }, {
              value: iconBack,
              onChange: function onChange(colorValue) {
                return setAttributes({ iconBack: colorValue });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_border__["a" /* default */], {
              borderType: borderType,
              borderWidth: borderWidth,
              borderColor: borderColor,
              borderRadius: borderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ borderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ borderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ borderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ borderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components_premium_text_shadow__["a" /* default */], {
            label: "Shadow",
            color: shadowColor,
            blur: shadowBlur,
            horizontal: shadowHorizontal,
            vertical: shadowVertical,
            onChangeColor: function onChangeColor(newColor) {
              return setAttributes({ shadowColor: newColor });
            },
            onChangeBlur: function onChangeBlur(newBlur) {
              return setAttributes({ shadowBlur: newBlur });
            },
            onChangehHorizontal: function onChangehHorizontal(newValue) {
              return setAttributes({ shadowHorizontal: newValue });
            },
            onChangeVertical: function onChangeVertical(newValue) {
              return setAttributes({ shadowVertical: newValue });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_margin__["a" /* default */], {
              directions: ["all"],
              marginTop: marginT,
              marginRight: marginR,
              marginBottom: marginB,
              marginLeft: marginL,
              onChangeMarTop: function onChangeMarTop(value) {
                return setAttributes({
                  marginT: value === undefined ? 0 : value
                });
              },
              onChangeMarRight: function onChangeMarRight(value) {
                return setAttributes({
                  marginR: value === undefined ? 0 : value
                });
              },
              onChangeMarBottom: function onChangeMarBottom(value) {
                return setAttributes({
                  marginB: value === undefined ? 0 : value
                });
              },
              onChangeMarLeft: function onChangeMarLeft(value) {
                return setAttributes({
                  marginL: value === undefined ? 0 : value
                });
              }
            }),
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__components_premium_padding__["a" /* default */], {
              paddingTop: paddingT,
              paddingRight: paddingR,
              paddingBottom: paddingB,
              paddingLeft: paddingL,
              onChangePadTop: function onChangePadTop(value) {
                return setAttributes({
                  paddingT: value === undefined ? 0 : value
                });
              },
              onChangePadRight: function onChangePadRight(value) {
                return setAttributes({
                  paddingR: value === undefined ? 0 : value
                });
              },
              onChangePadBottom: function onChangePadBottom(value) {
                return setAttributes({
                  paddingB: value === undefined ? 0 : value
                });
              },
              onChangePadLeft: function onChangePadLeft(value) {
                return setAttributes({
                  paddingL: value === undefined ? 0 : value
                });
              }
            })
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Container Style"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: background,
              onChange: function onChange(colorValue) {
                return setAttributes({ background: colorValue });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_border__["a" /* default */], {
              borderType: wrapBorderType,
              borderWidth: wrapBorderWidth,
              borderColor: wrapBorderColor,
              borderRadius: wrapBorderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ wrapBorderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ wrapBorderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ wrapBorderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ wrapBorderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_margin__["a" /* default */], {
              directions: ["all"],
              marginTop: wrapMarginT,
              marginRight: wrapMarginR,
              marginBottom: wrapMarginB,
              marginLeft: wrapMarginL,
              onChangeMarTop: function onChangeMarTop(value) {
                return setAttributes({
                  wrapMarginT: value === undefined ? 0 : value
                });
              },
              onChangeMarRight: function onChangeMarRight(value) {
                return setAttributes({
                  wrapMarginR: value === undefined ? 0 : value
                });
              },
              onChangeMarBottom: function onChangeMarBottom(value) {
                return setAttributes({
                  wrapMarginB: value === undefined ? 0 : value
                });
              },
              onChangeMarLeft: function onChangeMarLeft(value) {
                return setAttributes({
                  wrapMarginL: value === undefined ? 0 : value
                });
              }
            }),
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__components_premium_padding__["a" /* default */], {
              paddingTop: wrapPaddingT,
              paddingRight: wrapPaddingR,
              paddingBottom: wrapPaddingB,
              paddingLeft: wrapPaddingL,
              onChangePadTop: function onChangePadTop(value) {
                return setAttributes({
                  wrapPaddingT: value === undefined ? 0 : value
                });
              },
              onChangePadRight: function onChangePadRight(value) {
                return setAttributes({
                  wrapPaddingR: value === undefined ? 0 : value
                });
              },
              onChangePadBottom: function onChangePadBottom(value) {
                return setAttributes({
                  wrapPaddingB: value === undefined ? 0 : value
                });
              },
              onChangePadLeft: function onChangePadLeft(value) {
                return setAttributes({
                  wrapPaddingL: value === undefined ? 0 : value
                });
              }
            })
          )
        )
      ), wp.element.createElement(
        "div",
        {
          className: className + "__container",
          style: {
            textAlign: align,
            backgroundColor: background,
            border: wrapBorderType,
            borderWidth: wrapBorderWidth + "px",
            borderRadius: wrapBorderRadius + "px",
            borderColor: wrapBorderColor,
            paddingTop: wrapPaddingT,
            paddingRight: wrapPaddingR,
            paddingBottom: wrapPaddingB,
            paddingLeft: wrapPaddingL,
            marginTop: wrapMarginT,
            marginRight: wrapMarginR,
            marginBottom: wrapMarginB,
            marginLeft: wrapMarginL
          }
        },
        iconType === "fa" && 1 != __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* FontAwesomeEnabled */] && wp.element.createElement(
          "p",
          { className: className + "__alert" },
          __("Please Enable Font Awesome Icons from Plugin settings")
        ),
        (iconType === "dash" || 1 == __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* FontAwesomeEnabled */]) && wp.element.createElement("i", {
          className: className + " " + iconClass + " " + className + "__" + hoverEffect,
          style: {
            color: iconColor,
            backgroundColor: iconBack,
            fontSize: iconSize,
            paddingTop: paddingT,
            paddingRight: paddingR,
            paddingBottom: paddingB,
            paddingLeft: paddingL,
            marginTop: marginT,
            marginRight: marginR,
            marginBottom: marginB,
            marginLeft: marginL,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor
          }
        }),
        urlCheck && isSelected && wp.element.createElement(URLInput, {
          value: link,
          onChange: function onChange(newUrl) {
            return setAttributes({ link: newUrl });
          }
        })
      )];
    },
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          selectedIcon = _props$attributes2.selectedIcon,
          align = _props$attributes2.align,
          hoverEffect = _props$attributes2.hoverEffect,
          iconSize = _props$attributes2.iconSize,
          iconColor = _props$attributes2.iconColor,
          iconType = _props$attributes2.iconType,
          iconBack = _props$attributes2.iconBack,
          shadowBlur = _props$attributes2.shadowBlur,
          shadowColor = _props$attributes2.shadowColor,
          shadowHorizontal = _props$attributes2.shadowHorizontal,
          shadowVertical = _props$attributes2.shadowVertical,
          paddingT = _props$attributes2.paddingT,
          paddingR = _props$attributes2.paddingR,
          paddingB = _props$attributes2.paddingB,
          paddingL = _props$attributes2.paddingL,
          marginT = _props$attributes2.marginT,
          marginR = _props$attributes2.marginR,
          marginB = _props$attributes2.marginB,
          marginL = _props$attributes2.marginL,
          borderType = _props$attributes2.borderType,
          borderWidth = _props$attributes2.borderWidth,
          borderRadius = _props$attributes2.borderRadius,
          borderColor = _props$attributes2.borderColor,
          background = _props$attributes2.background,
          wrapBorderType = _props$attributes2.wrapBorderType,
          wrapBorderWidth = _props$attributes2.wrapBorderWidth,
          wrapBorderRadius = _props$attributes2.wrapBorderRadius,
          wrapBorderColor = _props$attributes2.wrapBorderColor,
          wrapPaddingT = _props$attributes2.wrapPaddingT,
          wrapPaddingR = _props$attributes2.wrapPaddingR,
          wrapPaddingB = _props$attributes2.wrapPaddingB,
          wrapPaddingL = _props$attributes2.wrapPaddingL,
          wrapMarginT = _props$attributes2.wrapMarginT,
          wrapMarginR = _props$attributes2.wrapMarginR,
          wrapMarginB = _props$attributes2.wrapMarginB,
          wrapMarginL = _props$attributes2.wrapMarginL,
          urlCheck = _props$attributes2.urlCheck,
          link = _props$attributes2.link,
          target = _props$attributes2.target;

      var iconClass = "fa" === iconType ? "fa fa-" + selectedIcon : "dashicons " + selectedIcon;
      return wp.element.createElement(
        "div",
        {
          className: className + "__container",
          style: {
            textAlign: align,
            backgroundColor: background,
            border: wrapBorderType,
            borderWidth: wrapBorderWidth + "px",
            borderRadius: wrapBorderRadius + "px",
            borderColor: wrapBorderColor,
            paddingTop: wrapPaddingT,
            paddingRight: wrapPaddingR,
            paddingBottom: wrapPaddingB,
            paddingLeft: wrapPaddingL,
            marginTop: wrapMarginT,
            marginRight: wrapMarginR,
            marginBottom: wrapMarginB,
            marginLeft: wrapMarginL
          }
        },
        wp.element.createElement(
          "a",
          {
            className: className + "__link",
            href: urlCheck && link,
            target: target ? "_blank" : "_self"
          },
          wp.element.createElement("i", {
            className: className + " " + iconClass + " " + className + "__" + hoverEffect,
            style: {
              color: iconColor,
              backgroundColor: iconBack,
              fontSize: iconSize,
              paddingTop: paddingT,
              paddingRight: paddingR,
              paddingBottom: paddingB,
              paddingLeft: paddingL,
              marginTop: marginT,
              marginRight: marginR,
              marginBottom: marginB,
              marginLeft: marginL,
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor
            }
          })
        )
      );
    },
    deprecated: [{
      attributes: iconAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            selectedIcon = _props$attributes3.selectedIcon,
            align = _props$attributes3.align,
            hoverEffect = _props$attributes3.hoverEffect,
            iconSize = _props$attributes3.iconSize,
            iconColor = _props$attributes3.iconColor,
            iconType = _props$attributes3.iconType,
            iconBack = _props$attributes3.iconBack,
            paddingT = _props$attributes3.paddingT,
            paddingR = _props$attributes3.paddingR,
            paddingB = _props$attributes3.paddingB,
            paddingL = _props$attributes3.paddingL,
            marginT = _props$attributes3.marginT,
            marginR = _props$attributes3.marginR,
            marginB = _props$attributes3.marginB,
            marginL = _props$attributes3.marginL,
            borderType = _props$attributes3.borderType,
            borderWidth = _props$attributes3.borderWidth,
            borderRadius = _props$attributes3.borderRadius,
            borderColor = _props$attributes3.borderColor,
            background = _props$attributes3.background,
            wrapBorderType = _props$attributes3.wrapBorderType,
            wrapBorderWidth = _props$attributes3.wrapBorderWidth,
            wrapBorderRadius = _props$attributes3.wrapBorderRadius,
            wrapBorderColor = _props$attributes3.wrapBorderColor,
            wrapPaddingT = _props$attributes3.wrapPaddingT,
            wrapPaddingR = _props$attributes3.wrapPaddingR,
            wrapPaddingB = _props$attributes3.wrapPaddingB,
            wrapPaddingL = _props$attributes3.wrapPaddingL,
            wrapMarginT = _props$attributes3.wrapMarginT,
            wrapMarginR = _props$attributes3.wrapMarginR,
            wrapMarginB = _props$attributes3.wrapMarginB,
            wrapMarginL = _props$attributes3.wrapMarginL,
            urlCheck = _props$attributes3.urlCheck,
            link = _props$attributes3.link,
            target = _props$attributes3.target;

        var iconClass = "fa" === iconType ? "fa fa-" + selectedIcon : "dashicons " + selectedIcon;
        return wp.element.createElement(
          "div",
          {
            className: className + "__container",
            style: {
              textAlign: align,
              backgroundColor: background,
              border: wrapBorderType,
              borderWidth: wrapBorderWidth + "px",
              borderRadius: wrapBorderRadius + "px",
              borderColor: wrapBorderColor,
              paddingTop: wrapPaddingT,
              paddingRight: wrapPaddingR,
              paddingBottom: wrapPaddingB,
              paddingLeft: wrapPaddingL,
              marginTop: wrapMarginT,
              marginRight: wrapMarginR,
              marginBottom: wrapMarginB,
              marginLeft: wrapMarginL
            }
          },
          wp.element.createElement(
            "a",
            {
              className: className + "__link",
              href: urlCheck && link,
              target: target ? "_blank" : "_self"
            },
            wp.element.createElement("i", {
              className: className + " " + iconClass + " " + className + "__" + hoverEffect,
              style: {
                color: iconColor,
                backgroundColor: iconBack,
                fontSize: iconSize,
                paddingTop: paddingT,
                paddingRight: paddingR,
                paddingBottom: paddingB,
                paddingLeft: paddingL,
                marginTop: marginT,
                marginRight: marginR,
                marginBottom: marginB,
                marginLeft: marginL,
                border: borderType,
                borderWidth: borderWidth + "px",
                borderRadius: borderRadius + "px",
                borderColor: borderColor
              }
            })
          )
        );
      }
    }]
  });
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumIcon;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;

function PremiumIcon(props) {
  var iconType = props.iconType,
      selectedIcon = props.selectedIcon,
      _props$onChangeType = props.onChangeType,
      onChangeType = _props$onChangeType === undefined ? function () {} : _props$onChangeType,
      _props$onChangeIcon = props.onChangeIcon,
      onChangeIcon = _props$onChangeIcon === undefined ? function () {} : _props$onChangeIcon;

  var iconClass = "fa" === iconType ? "fa fa-" + selectedIcon : "dashicons " + selectedIcon;
  var TYPE = [{
    value: "fa",
    label: "Font Awesome Icon"
  }, {
    value: "dash",
    label: "Dashicon"
  }];
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(SelectControl, {
      label: __("Icon Type"),
      value: iconType,
      options: TYPE,
      onChange: onChangeType
    }),
    selectedIcon && wp.element.createElement(
      "div",
      { className: "premium-icon__sidebar_icon" },
      wp.element.createElement("i", { className: iconClass })
    ),
    wp.element.createElement(TextControl, {
      label: __("Icon Class"),
      value: selectedIcon,
      help: [__("Get icon class from"), wp.element.createElement(
        "a",
        {
          href: "fa" === iconType ? "https://fontawesome.com/v4.7.0/icons/" : "https://developer.wordpress.org/resource/dashicons/",
          target: "_blank"
        },
        "\xA0",
        __("here")
      ), __(" , for example: "), "fa" === iconType ? "address-book" : "dashicons-admin-site"],
      onChange: onChangeIcon
    })
  );
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_premium_box_shadow__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




//import PremiumIcon from "../../components/premium-icon";



if (__WEBPACK_IMPORTED_MODULE_0__settings__["d" /* button */]) {
  var className = "premium-button";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      ToggleControl = _wp$components.ToggleControl;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      AlignmentToolbar = _wp$editor.AlignmentToolbar,
      BlockControls = _wp$editor.BlockControls,
      RichText = _wp$editor.RichText,
      URLInput = _wp$editor.URLInput;


  var buttonAttrs = {
    btnText: {
      type: "string",
      default: __("Premium Button")
    },
    btnSize: {
      type: "string",
      default: "md"
    },
    btnAlign: {
      type: "string",
      default: "center"
    },
    btnLink: {
      type: "string",
      source: "attribute",
      attribute: "href",
      selector: ".premium-button"
    },
    btnTarget: {
      type: "boolean",
      default: false
    },
    effect: {
      type: "string",
      default: "none"
    },
    effectDir: {
      type: "string",
      default: "top"
    },
    textColor: {
      type: "string"
    },
    textHoverColor: {
      type: "string"
    },
    backColor: {
      type: "string"
    },
    backHoverColor: {
      type: "string"
    },
    slideColor: {
      type: "string"
    },
    textSize: {
      type: "number"
    },
    textLetter: {
      type: "number"
    },
    textStyle: {
      type: "string"
    },
    textUpper: {
      type: "boolean"
    },
    textWeight: {
      type: "number",
      default: 500
    },
    textLine: {
      type: "number"
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
      type: "number"
    },
    borderColor: {
      type: "string"
    },
    padding: {
      type: "number"
    },
    shadowColor: {
      type: "string"
    },
    shadowBlur: {
      type: "number",
      default: "0"
    },
    shadowHorizontal: {
      type: "number",
      default: "0"
    },
    shadowVertical: {
      type: "number",
      default: "0"
    },
    btnShadowBlur: {
      type: "number",
      default: "0"
    },
    btnShadowHorizontal: {
      type: "number",
      default: "0"
    },
    btnShadowVertical: {
      type: "number",
      default: "0"
    },
    btnShadowPosition: {
      type: "string",
      default: ""
    },
    id: {
      type: "string"
    }
  };

  registerBlockType("premium/button", {
    title: __("Button"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__icons__["a" /* default */], { icon: "button" }),
    category: "premium-blocks",
    attributes: buttonAttrs,
    edit: function edit(props) {
      var _wp$element$createEle;

      var isSelected = props.isSelected,
          setAttributes = props.setAttributes,
          blockId = props.clientId;
      var _props$attributes = props.attributes,
          id = _props$attributes.id,
          btnText = _props$attributes.btnText,
          btnSize = _props$attributes.btnSize,
          btnAlign = _props$attributes.btnAlign,
          btnLink = _props$attributes.btnLink,
          btnTarget = _props$attributes.btnTarget,
          effect = _props$attributes.effect,
          effectDir = _props$attributes.effectDir,
          textColor = _props$attributes.textColor,
          textHoverColor = _props$attributes.textHoverColor,
          backColor = _props$attributes.backColor,
          backHoverColor = _props$attributes.backHoverColor,
          slideColor = _props$attributes.slideColor,
          textSize = _props$attributes.textSize,
          textWeight = _props$attributes.textWeight,
          textLetter = _props$attributes.textLetter,
          textUpper = _props$attributes.textUpper,
          textLine = _props$attributes.textLine,
          textStyle = _props$attributes.textStyle,
          borderType = _props$attributes.borderType,
          borderWidth = _props$attributes.borderWidth,
          borderRadius = _props$attributes.borderRadius,
          borderColor = _props$attributes.borderColor,
          shadowBlur = _props$attributes.shadowBlur,
          shadowColor = _props$attributes.shadowColor,
          shadowHorizontal = _props$attributes.shadowHorizontal,
          shadowVertical = _props$attributes.shadowVertical,
          padding = _props$attributes.padding,
          btnShadowBlur = _props$attributes.btnShadowBlur,
          btnShadowColor = _props$attributes.btnShadowColor,
          btnShadowHorizontal = _props$attributes.btnShadowHorizontal,
          btnShadowVertical = _props$attributes.btnShadowVertical,
          btnShadowPosition = _props$attributes.btnShadowPosition;


      var SIZE = [{
        value: "sm",
        label: __("Small")
      }, {
        value: "md",
        label: __("Medium")
      }, {
        value: "lg",
        label: __("Large")
      }, {
        value: "block",
        label: __("Block")
      }];
      var DIRECTION = [{
        value: "top",
        label: __("Top to Bottom")
      }, {
        value: "bottom",
        label: __("Bottom to Top")
      }, {
        value: "left",
        label: __("Left to Right")
      }, {
        value: "right",
        label: __("Right to Left")
      }];
      var SHUTTER = [{
        value: "shutouthor",
        label: __("Shutter out Horizontal")
      }, {
        value: "shutoutver",
        label: __("Shutter out Vertical")
      }, {
        value: "scshutoutver",
        label: __("Scaled Shutter Vertical")
      }, {
        value: "scshutouthor",
        label: __("Scaled Shutter Horizontal")
      }, {
        value: "dshutinver",
        label: __("Tilted Left")
      }, {
        value: "dshutinhor",
        label: __("Tilted Right")
      }];
      var RADIAL = [{
        value: "radialin",
        label: __("Radial In")
      }, {
        value: "radialout",
        label: __("Radial Out")
      }, {
        value: "rectin",
        label: __("Rectangle In")
      }, {
        value: "rectout",
        label: __("Rectangle Out")
      }];
      var EFFECTS = [{
        value: "none",
        label: __("None")
      }, {
        value: "slide",
        label: __("Slide")
      }, {
        value: "shutter",
        label: __("Shutter")
      }, {
        value: "radial",
        label: __("Radial")
      }];
      var onChangeHover = function onChangeHover(newValue) {
        props.setAttributes({ effect: newValue });
        switch (newValue) {
          case "slide":
            props.setAttributes({ effectDir: "top" });
            break;
          case "shutter":
            props.setAttributes({ effectDir: "shutouthor" });
            break;
          case "radial":
            props.setAttributes({ effectDir: "radialin" });
            break;
        }
      };
      setAttributes({ id: blockId });
      return [isSelected && "block" != btnSize && wp.element.createElement(
        BlockControls,
        { key: "controls" },
        wp.element.createElement(AlignmentToolbar, {
          value: btnAlign,
          onChange: function onChange(newAlign) {
            return setAttributes({ btnAlign: newAlign });
          }
        })
      ), isSelected && wp.element.createElement(
        InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          PanelBody,
          {
            title: __("General Settings"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(SelectControl, {
            options: EFFECTS,
            label: __("Hover Effect"),
            value: effect,
            onChange: onChangeHover
          }),
          "slide" === effect && wp.element.createElement(SelectControl, {
            options: DIRECTION,
            label: __("Direction"),
            value: effectDir,
            onChange: function onChange(newValue) {
              return setAttributes({ effectDir: newValue });
            }
          }),
          "shutter" === effect && wp.element.createElement(SelectControl, {
            options: SHUTTER,
            label: __("Shutter Direction"),
            value: effectDir,
            onChange: function onChange(newValue) {
              return setAttributes({ effectDir: newValue });
            }
          }),
          "radial" === effect && wp.element.createElement(SelectControl, {
            options: RADIAL,
            label: __("Style"),
            value: effectDir,
            onChange: function onChange(newValue) {
              return setAttributes({ effectDir: newValue });
            }
          }),
          wp.element.createElement(SelectControl, {
            options: SIZE,
            label: __("Button Size"),
            value: btnSize,
            onChange: function onChange(newSize) {
              return setAttributes({ btnSize: newSize });
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __("Open link in new tab"),
            checked: btnTarget,
            onChange: function onChange(newValue) {
              return setAttributes({ btnTarget: newValue });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Text Style"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Font"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_typo__["a" /* default */], (_wp$element$createEle = {
              components: ["size", "weight", "line", "style", "upper", "spacing"],
              size: textSize,
              weight: textWeight,
              style: textStyle,
              spacing: textLetter,
              upper: textUpper,
              line: textLine,
              onChangeSize: function onChangeSize(newSize) {
                return setAttributes({ textSize: newSize });
              },
              onChangeWeight: function onChangeWeight(newWeight) {
                return setAttributes({ textWeight: newWeight });
              },
              onChangeLine: function onChangeLine(newValue) {
                return setAttributes({ textLine: newValue });
              }
            }, _defineProperty(_wp$element$createEle, "onChangeSize", function onChangeSize(newSize) {
              return setAttributes({ textSize: newSize });
            }), _defineProperty(_wp$element$createEle, "onChangeStyle", function onChangeStyle(newStyle) {
              return setAttributes({ textStyle: newStyle });
            }), _defineProperty(_wp$element$createEle, "onChangeSpacing", function onChangeSpacing(newValue) {
              return setAttributes({ textLetter: newValue });
            }), _defineProperty(_wp$element$createEle, "onChangeUpper", function onChangeUpper(check) {
              return setAttributes({ textUpper: check });
            }), _wp$element$createEle))
          ),
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              label: __("Text Color"),
              value: textColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ textColor: colorValue });
              }
            }, {
              label: __("Text Hover Color"),
              value: textHoverColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ textHoverColor: colorValue });
              }
            }]
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_text_shadow__["a" /* default */], {
            color: shadowColor,
            blur: shadowBlur,
            horizontal: shadowHorizontal,
            vertical: shadowVertical,
            onChangeColor: function onChangeColor(newColor) {
              return setAttributes({ shadowColor: newColor });
            },
            onChangeBlur: function onChangeBlur(newBlur) {
              return setAttributes({ shadowBlur: newBlur });
            },
            onChangehHorizontal: function onChangehHorizontal(newValue) {
              return setAttributes({ shadowHorizontal: newValue });
            },
            onChangeVertical: function onChangeVertical(newValue) {
              return setAttributes({ shadowVertical: newValue });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Button Style"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              label: "radial" !== effect ? __("Background Color") : __("Background Hover Color"),
              value: backColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ backColor: colorValue });
              }
            }, {
              label: "radial" !== effect ? __("Background Hover Color") : __("Background Color"),
              value: backHoverColor,
              onChange: function onChange(colorValue) {
                return setAttributes({
                  backHoverColor: colorValue,
                  slideColor: colorValue
                });
              }
            }]
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Border"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_border__["a" /* default */], {
              borderType: borderType,
              borderWidth: borderWidth,
              borderColor: borderColor,
              borderRadius: borderRadius,
              onChangeType: function onChangeType(newType) {
                return setAttributes({ borderType: newType });
              },
              onChangeWidth: function onChangeWidth(newWidth) {
                return setAttributes({ borderWidth: newWidth });
              },
              onChangeColor: function onChangeColor(colorValue) {
                return setAttributes({ borderColor: colorValue });
              },
              onChangeRadius: function onChangeRadius(newrRadius) {
                return setAttributes({ borderRadius: newrRadius });
              }
            })
          ),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__components_premium_box_shadow__["a" /* default */], {
            label: "Shadow",
            inner: true,
            color: btnShadowColor,
            blur: btnShadowBlur,
            horizontal: btnShadowHorizontal,
            vertical: btnShadowVertical,
            position: btnShadowPosition,
            onChangeColor: function onChangeColor(newColor) {
              return setAttributes({
                btnShadowColor: newColor === undefined ? "transparent" : newColor
              });
            },
            onChangeBlur: function onChangeBlur(newBlur) {
              return setAttributes({
                btnShadowBlur: newBlur === undefined ? 0 : newBlur
              });
            },
            onChangehHorizontal: function onChangehHorizontal(newValue) {
              return setAttributes({
                btnShadowHorizontal: newValue === undefined ? 0 : newValue
              });
            },
            onChangeVertical: function onChangeVertical(newValue) {
              return setAttributes({
                btnShadowVertical: newValue === undefined ? 0 : newValue
              });
            },
            onChangePosition: function onChangePosition(newValue) {
              return setAttributes({
                btnShadowPosition: newValue === undefined ? 0 : newValue
              });
            }
          }),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Spacings"),
              className: "premium-panel-body-inner",
              initialOpen: false
            },
            wp.element.createElement(RangeControl, {
              label: __("Padding (PX)"),
              value: padding,
              onChange: function onChange(newValue) {
                return setAttributes({ padding: newValue });
              }
            })
          )
        )
      ), wp.element.createElement(
        "div",
        {
          id: className + "-wrap-" + id,
          className: className + "__wrap " + className + "__" + effect + " " + className + "__" + effectDir,
          style: { textAlign: btnAlign }
        },
        wp.element.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: ["#premium-button-wrap-" + id + " .premium-button:hover {", "color: " + textHoverColor + " !important;", "}", "#premium-button-wrap-" + id + ".premium-button__none .premium-button:hover {", "background-color: " + backHoverColor + " !important;", "}", "#premium-button-wrap-" + id + ".premium-button__slide .premium-button::before,", "#premium-button-wrap-" + id + ".premium-button__shutter .premium-button::before,", "#premium-button-wrap-" + id + ".premium-button__radial .premium-button::before {", "background-color: " + slideColor, "}"].join("\n")
          }
        }),
        wp.element.createElement(RichText, {
          className: className + " " + className + "__" + btnSize,
          value: btnText,
          onChange: function onChange(value) {
            return setAttributes({ btnText: value });
          },
          style: {
            color: textColor,
            backgroundColor: backColor,
            fontSize: textSize + "px",
            letterSpacing: textLetter + "px",
            textTransform: textUpper ? "uppercase" : "none",
            fontStyle: textStyle,
            lineHeight: textLine + "px",
            fontWeight: textWeight,
            textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor,
            boxShadow: btnShadowHorizontal + "px " + btnShadowVertical + "px " + btnShadowBlur + "px " + btnShadowColor + " " + btnShadowPosition,
            padding: padding + "px",
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor
          },
          keepPlaceholderOnFocus: true
        }),
        wp.element.createElement(URLInput, {
          value: btnLink,
          onChange: function onChange(newLink) {
            return setAttributes({ btnLink: newLink });
          }
        })
      )];
    },
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          id = _props$attributes2.id,
          btnText = _props$attributes2.btnText,
          btnSize = _props$attributes2.btnSize,
          btnAlign = _props$attributes2.btnAlign,
          btnLink = _props$attributes2.btnLink,
          btnTarget = _props$attributes2.btnTarget,
          effect = _props$attributes2.effect,
          effectDir = _props$attributes2.effectDir,
          textColor = _props$attributes2.textColor,
          textHoverColor = _props$attributes2.textHoverColor,
          backColor = _props$attributes2.backColor,
          backHoverColor = _props$attributes2.backHoverColor,
          slideColor = _props$attributes2.slideColor,
          textSize = _props$attributes2.textSize,
          textWeight = _props$attributes2.textWeight,
          textLine = _props$attributes2.textLine,
          textLetter = _props$attributes2.textLetter,
          textStyle = _props$attributes2.textStyle,
          textUpper = _props$attributes2.textUpper,
          borderType = _props$attributes2.borderType,
          borderWidth = _props$attributes2.borderWidth,
          borderRadius = _props$attributes2.borderRadius,
          borderColor = _props$attributes2.borderColor,
          padding = _props$attributes2.padding,
          shadowBlur = _props$attributes2.shadowBlur,
          shadowColor = _props$attributes2.shadowColor,
          shadowHorizontal = _props$attributes2.shadowHorizontal,
          shadowVertical = _props$attributes2.shadowVertical,
          btnShadowBlur = _props$attributes2.btnShadowBlur,
          btnShadowColor = _props$attributes2.btnShadowColor,
          btnShadowHorizontal = _props$attributes2.btnShadowHorizontal,
          btnShadowVertical = _props$attributes2.btnShadowVertical,
          btnShadowPosition = _props$attributes2.btnShadowPosition;

      return wp.element.createElement(
        "div",
        {
          id: className + "-wrap-" + id,
          className: className + "__wrap " + className + "__" + effect + " " + className + "__" + effectDir,
          style: { textAlign: btnAlign }
        },
        wp.element.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: ["#premium-button-wrap-" + id + " .premium-button:hover {", "color: " + textHoverColor + " !important;", "}", "#premium-button-wrap-" + id + ".premium-button__none .premium-button:hover {", "background-color: " + backHoverColor + " !important;", "}", "#premium-button-wrap-" + id + ".premium-button__slide .premium-button::before,", "#premium-button-wrap-" + id + ".premium-button__shutter .premium-button::before,", "#premium-button-wrap-" + id + ".premium-button__radial .premium-button::before {", "background-color: " + slideColor, "}"].join("\n")
          }
        }),
        wp.element.createElement(RichText.Content, {
          tagName: "a",
          value: btnText,
          className: className + " " + className + "__" + btnSize,
          href: btnLink,
          target: btnTarget ? "_blank" : "_self",
          style: {
            color: textColor,
            backgroundColor: backColor,
            fontSize: textSize + "px",
            letterSpacing: textLetter + "px",
            textTransform: textUpper ? "uppercase" : "none",
            fontStyle: textStyle,
            lineHeight: textLine + "px",
            fontWeight: textWeight,
            textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor,
            boxShadow: btnShadowHorizontal + "px " + btnShadowVertical + "px " + btnShadowBlur + "px " + btnShadowColor + " " + btnShadowPosition,
            padding: padding + "px",
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor
          }
        })
      );
    },
    deprecated: [{
      attributes: buttonAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            id = _props$attributes3.id,
            btnText = _props$attributes3.btnText,
            btnSize = _props$attributes3.btnSize,
            btnAlign = _props$attributes3.btnAlign,
            btnLink = _props$attributes3.btnLink,
            btnTarget = _props$attributes3.btnTarget,
            effect = _props$attributes3.effect,
            effectDir = _props$attributes3.effectDir,
            textColor = _props$attributes3.textColor,
            textHoverColor = _props$attributes3.textHoverColor,
            backColor = _props$attributes3.backColor,
            backHoverColor = _props$attributes3.backHoverColor,
            slideColor = _props$attributes3.slideColor,
            textSize = _props$attributes3.textSize,
            textWeight = _props$attributes3.textWeight,
            textLine = _props$attributes3.textLine,
            textLetter = _props$attributes3.textLetter,
            textStyle = _props$attributes3.textStyle,
            textUpper = _props$attributes3.textUpper,
            borderType = _props$attributes3.borderType,
            borderWidth = _props$attributes3.borderWidth,
            borderRadius = _props$attributes3.borderRadius,
            borderColor = _props$attributes3.borderColor,
            padding = _props$attributes3.padding,
            shadowBlur = _props$attributes3.shadowBlur,
            shadowColor = _props$attributes3.shadowColor,
            shadowHorizontal = _props$attributes3.shadowHorizontal,
            shadowVertical = _props$attributes3.shadowVertical;

        return wp.element.createElement(
          "div",
          {
            id: className + "-wrap-" + id,
            className: className + "__wrap " + className + "__" + effect + " " + className + "__" + effectDir,
            style: { textAlign: btnAlign }
          },
          wp.element.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: ["#premium-button-wrap-" + id + " .premium-button:hover {", "color: " + textHoverColor + " !important;", "}", "#premium-button-wrap-" + id + ".premium-button__none .premium-button:hover {", "background-color: " + backHoverColor + " !important;", "}", "#premium-button-wrap-" + id + ".premium-button__slide .premium-button::before,", "#premium-button-wrap-" + id + ".premium-button__shutter .premium-button::before,", "#premium-button-wrap-" + id + ".premium-button__radial .premium-button::before {", "background-color: " + slideColor, "}"].join("\n")
            }
          }),
          wp.element.createElement(RichText.Content, {
            tagName: "a",
            value: btnText,
            className: className + " " + className + "__" + btnSize,
            href: btnLink,
            target: btnTarget ? "_blank" : "_self",
            style: {
              color: textColor,
              backgroundColor: backColor,
              fontSize: textSize + "px",
              letterSpacing: textLetter + "px",
              textTransform: textUpper ? "uppercase" : "none",
              fontStyle: textStyle,
              lineHeight: textLine + "px",
              fontWeight: textWeight,
              textShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor,
              padding: padding + "px",
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor
            }
          })
        );
      }
    }]
  });
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_padding__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_margin__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_premium_box_shadow__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_premium_background__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons__ = __webpack_require__(1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









if (__WEBPACK_IMPORTED_MODULE_0__settings__["e" /* container */]) {
  var className = "premium-container";

  var __ = wp.i18n.__;
  var Fragment = wp.element.Fragment;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      ToggleControl = _wp$components.ToggleControl,
      RangeControl = _wp$components.RangeControl,
      SelectControl = _wp$components.SelectControl,
      IconButton = _wp$components.IconButton;
  var _wp$editor = wp.editor,
      BlockControls = _wp$editor.BlockControls,
      AlignmentToolbar = _wp$editor.AlignmentToolbar,
      InnerBlocks = _wp$editor.InnerBlocks,
      InspectorControls = _wp$editor.InspectorControls,
      PanelColorSettings = _wp$editor.PanelColorSettings,
      MediaUpload = _wp$editor.MediaUpload;


  var CONTENT = [["core/paragraph", { content: __("Insert Your Content Here") }], ["core/paragraph", { content: __("Insert Your Content Here") }]];

  var containerAttrs = {
    stretchSection: {
      type: "boolean",
      default: false
    },
    innerWidthType: {
      type: "string",
      default: "boxed"
    },
    horAlign: {
      type: "string",
      default: "center"
    },
    height: {
      type: "string",
      default: "min"
    },
    innerWidth: {
      type: "number"
    },
    minHeight: {
      type: "number"
    },
    vPos: {
      type: "string",
      default: "top"
    },
    color: {
      type: "string"
    },
    imageID: {
      type: "string"
    },
    imageURL: {
      type: "string"
    },
    backgroundRepeat: {
      type: "string",
      default: "no-repeat"
    },
    backgroundPosition: {
      type: "string",
      default: "top center"
    },
    backgroundSize: {
      type: "string",
      default: "auto"
    },
    fixed: {
      type: "boolean",
      default: false
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
      type: "number"
    },
    borderColor: {
      type: "string"
    },
    marginTop: {
      type: "number"
    },
    marginBottom: {
      type: "number"
    },
    marginLeft: {
      type: "number"
    },
    marginRight: {
      type: "number"
    },
    paddingTop: {
      type: "number"
    },
    paddingRight: {
      type: "number"
    },
    paddingBottom: {
      type: "number"
    },
    paddingLeft: {
      type: "number"
    },
    shadowColor: {
      type: "string"
    },
    shadowBlur: {
      type: "number",
      default: "0"
    },
    shadowHorizontal: {
      type: "number",
      default: "0"
    },
    shadowVertical: {
      type: "number",
      default: "0"
    },
    shadowPosition: {
      type: "string",
      default: ""
    }
  };
  registerBlockType("premium/container", {
    title: __("Section"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__icons__["a" /* default */], { icon: "section" }),
    category: "premium-blocks",
    attributes: containerAttrs,
    supports: _defineProperty({
      align: true
    }, "align", ["center", "wide", "full"]),
    edit: function edit(props) {
      var isSelected = props.isSelected,
          setAttributes = props.setAttributes,
          clientId = props.clientId;
      var _props$attributes = props.attributes,
          stretchSection = _props$attributes.stretchSection,
          horAlign = _props$attributes.horAlign,
          innerWidthType = _props$attributes.innerWidthType,
          innerWidth = _props$attributes.innerWidth,
          minHeight = _props$attributes.minHeight,
          vPos = _props$attributes.vPos,
          height = _props$attributes.height,
          color = _props$attributes.color,
          imageID = _props$attributes.imageID,
          imageURL = _props$attributes.imageURL,
          fixed = _props$attributes.fixed,
          backgroundRepeat = _props$attributes.backgroundRepeat,
          backgroundPosition = _props$attributes.backgroundPosition,
          backgroundSize = _props$attributes.backgroundSize,
          borderType = _props$attributes.borderType,
          borderWidth = _props$attributes.borderWidth,
          borderColor = _props$attributes.borderColor,
          borderRadius = _props$attributes.borderRadius,
          marginTop = _props$attributes.marginTop,
          marginBottom = _props$attributes.marginBottom,
          marginLeft = _props$attributes.marginLeft,
          marginRight = _props$attributes.marginRight,
          paddingTop = _props$attributes.paddingTop,
          paddingRight = _props$attributes.paddingRight,
          paddingBottom = _props$attributes.paddingBottom,
          paddingLeft = _props$attributes.paddingLeft,
          shadowBlur = _props$attributes.shadowBlur,
          shadowColor = _props$attributes.shadowColor,
          shadowHorizontal = _props$attributes.shadowHorizontal,
          shadowVertical = _props$attributes.shadowVertical,
          shadowPosition = _props$attributes.shadowPosition;

      var WIDTH = [{
        value: "boxed",
        label: __("Boxed")
      }, {
        value: "full",
        label: __("Full Width")
      }];
      var HEIGHT = [{
        value: "fit",
        label: __("Fit to Screen")
      }, {
        value: "min",
        label: __("Min Height")
      }];
      var POSITION = [{
        value: "top left",
        label: __("Top Left")
      }, {
        value: "top center",
        label: __("Top Center")
      }, {
        value: "top right",
        label: __("Top Right")
      }, {
        value: "center left",
        label: __("Center Left")
      }, {
        value: "center center",
        label: __("Center Center")
      }, {
        value: "center right",
        label: __("Center Right")
      }, {
        value: "bottom left",
        label: __("Bottom Left")
      }, {
        value: "bottom center",
        label: __("Bottom Center")
      }, {
        value: "bottom right",
        label: __("Bottom Right")
      }];
      var REPEAT = [{
        value: "no-repeat",
        label: __("No Repeat")
      }, {
        value: "repeat",
        label: __("Repeat")
      }, {
        value: "repeat-x",
        label: __("Repeat Horizontally")
      }, {
        value: "repeat-y",
        label: __("Repeat Vertically")
      }];
      var SIZE = [{
        value: "auto",
        label: __("Auto")
      }, {
        value: "cover",
        label: __("Cover")
      }, {
        value: "contain",
        label: __("Contain")
      }];
      var VPOSITION = [{
        value: "top",
        label: __("Top")
      }, {
        value: "middle",
        label: __("Middle")
      }, {
        value: "bottom",
        label: __("Bottom")
      }];
      return [isSelected && wp.element.createElement(
        BlockControls,
        { key: "controls" },
        wp.element.createElement(AlignmentToolbar, {
          value: horAlign,
          onChange: function onChange(newAlign) {
            return setAttributes({ horAlign: newAlign });
          }
        })
      ), isSelected && wp.element.createElement(
        InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          PanelBody,
          {
            title: __("General Settings"),
            className: "premium-panel-body premium-stretch-section",
            initialOpen: true
          },
          wp.element.createElement(ToggleControl, {
            label: __("Stretch Section"),
            checked: stretchSection,
            onChange: function onChange(check) {
              return setAttributes({ stretchSection: check });
            },
            help: __("This option stretches the section to the full width of the page using JS. You will need to reload the page after you enable this option for the first time.")
          }),
          stretchSection && wp.element.createElement(SelectControl, {
            label: __("Content Width"),
            options: WIDTH,
            value: innerWidthType,
            onChange: function onChange(newValue) {
              return setAttributes({ innerWidthType: newValue });
            }
          }),
          "boxed" === innerWidthType && stretchSection && wp.element.createElement(RangeControl, {
            label: __("Max Width (%)"),
            min: "1",
            max: "1600",
            value: innerWidth,
            onChange: function onChange(newValue) {
              return setAttributes({ innerWidth: newValue });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Height"),
            options: HEIGHT,
            value: height,
            onChange: function onChange(newValue) {
              return setAttributes({ height: newValue });
            }
          }),
          "min" === height && wp.element.createElement(RangeControl, {
            label: __("Min Height (PX)"),
            value: minHeight,
            min: "1",
            max: "800",
            onChange: function onChange(newValue) {
              return setAttributes({ minHeight: newValue });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Content Position"),
            options: VPOSITION,
            value: vPos,
            onChange: function onChange(newValue) {
              return setAttributes({ vPos: newValue });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Background"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(PanelColorSettings, {
            title: __("Colors"),
            className: "premium-panel-body-inner",
            initialOpen: false,
            colorSettings: [{
              value: color,
              onChange: function onChange(colorValue) {
                return setAttributes({ color: colorValue });
              },
              label: __("Background Color")
            }]
          }),
          imageURL && wp.element.createElement("img", { src: imageURL, width: "100%", height: "auto" }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components_premium_background__["a" /* default */], {
            imageID: imageID,
            imageURL: imageURL,
            backgroundPosition: backgroundPosition,
            backgroundRepeat: backgroundRepeat,
            backgroundSize: backgroundSize,
            fixed: fixed,
            onSelectMedia: function onSelectMedia(media) {
              setAttributes({
                imageID: media.id,
                imageURL: media.url
              });
            },
            onRemoveImage: function onRemoveImage(value) {
              return setAttributes({ imageURL: "", imageID: "" });
            },
            onChangeBackPos: function onChangeBackPos(newValue) {
              return setAttributes({ backgroundPosition: newValue });
            },
            onchangeBackRepeat: function onchangeBackRepeat(newValue) {
              return setAttributes({ backgroundRepeat: newValue });
            },
            onChangeBackSize: function onChangeBackSize(newValue) {
              return setAttributes({ backgroundSize: newValue });
            },
            onChangeFixed: function onChangeFixed(check) {
              return setAttributes({ fixed: check });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Border"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
            borderType: borderType,
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderRadius: borderRadius,
            onChangeType: function onChangeType(newType) {
              return setAttributes({ borderType: newType });
            },
            onChangeWidth: function onChangeWidth(newWidth) {
              return setAttributes({ borderWidth: newWidth });
            },
            onChangeColor: function onChangeColor(colorValue) {
              return setAttributes({ borderColor: colorValue });
            },
            onChangeRadius: function onChangeRadius(newrRadius) {
              return setAttributes({ borderRadius: newrRadius });
            }
          })
        ),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__components_premium_box_shadow__["a" /* default */], {
          inner: false,
          color: shadowColor,
          blur: shadowBlur,
          horizontal: shadowHorizontal,
          vertical: shadowVertical,
          position: shadowPosition,
          onChangeColor: function onChangeColor(newColor) {
            return setAttributes({
              shadowColor: newColor === undefined ? "transparent" : newColor
            });
          },
          onChangeBlur: function onChangeBlur(newBlur) {
            return setAttributes({
              shadowBlur: newBlur === undefined ? 0 : newBlur
            });
          },
          onChangehHorizontal: function onChangehHorizontal(newValue) {
            return setAttributes({
              shadowHorizontal: newValue === undefined ? 0 : newValue
            });
          },
          onChangeVertical: function onChangeVertical(newValue) {
            return setAttributes({
              shadowVertical: newValue === undefined ? 0 : newValue
            });
          },
          onChangePosition: function onChangePosition(newValue) {
            return setAttributes({
              shadowPosition: newValue === undefined ? 0 : newValue
            });
          }
        }),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Spacings"),
            className: "premium-panel-body",
            initialOpen: false
          },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_margin__["a" /* default */], {
            directions: ["all"],
            marginTop: marginTop,
            marginRight: marginRight,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            onChangeMarTop: function onChangeMarTop(value) {
              return setAttributes({
                marginTop: value === undefined ? 0 : value
              });
            },
            onChangeMarRight: function onChangeMarRight(value) {
              return setAttributes({
                marginRight: value === undefined ? 0 : value
              });
            },
            onChangeMarBottom: function onChangeMarBottom(value) {
              return setAttributes({
                marginBottom: value === undefined ? 0 : value
              });
            },
            onChangeMarLeft: function onChangeMarLeft(value) {
              return setAttributes({
                marginLeft: value === undefined ? 0 : value
              });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_padding__["a" /* default */], {
            paddingTop: paddingTop,
            paddingRight: paddingRight,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            onChangePadTop: function onChangePadTop(value) {
              return setAttributes({
                paddingTop: value === undefined ? 0 : value
              });
            },
            onChangePadRight: function onChangePadRight(value) {
              return setAttributes({
                paddingRight: value === undefined ? 0 : value
              });
            },
            onChangePadBottom: function onChangePadBottom(value) {
              return setAttributes({
                paddingBottom: value === undefined ? 0 : value
              });
            },
            onChangePadLeft: function onChangePadLeft(value) {
              return setAttributes({
                paddingLeft: value === undefined ? 0 : value
              });
            }
          })
        )
      ), wp.element.createElement(
        "div",
        {
          className: className + " " + className + "__stretch_" + stretchSection + " " + className + "__" + innerWidthType,
          style: {
            textAlign: horAlign,
            height: "fit" === height ? "100vh" : minHeight,
            backgroundColor: color,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            backgroundImage: "url('" + imageURL + "')",
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            backgroundAttachment: fixed ? "fixed" : "unset",
            marginTop: marginTop + "px",
            marginBottom: marginBottom + "px",
            marginLeft: marginLeft + "px",
            marginRight: marginRight + "px",
            paddingTop: paddingTop + "px",
            paddingBottom: paddingBottom + "px",
            paddingLeft: paddingLeft + "px",
            paddingRight: paddingRight + "px",
            boxShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor + " " + shadowPosition
          }
        },
        wp.element.createElement(
          "div",
          {
            className: className + "__content_wrap " + className + "__" + vPos,
            style: {
              maxWidth: "boxed" == innerWidthType && stretchSection ? innerWidth ? innerWidth + "px" : "1140px" : "100%"
            }
          },
          wp.element.createElement(
            "div",
            { className: className + "__content_inner" },
            wp.element.createElement(InnerBlocks, { template: CONTENT })
          )
        )
      )];
    },
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          stretchSection = _props$attributes2.stretchSection,
          horAlign = _props$attributes2.horAlign,
          innerWidthType = _props$attributes2.innerWidthType,
          innerWidth = _props$attributes2.innerWidth,
          height = _props$attributes2.height,
          vPos = _props$attributes2.vPos,
          minHeight = _props$attributes2.minHeight,
          color = _props$attributes2.color,
          imageURL = _props$attributes2.imageURL,
          fixed = _props$attributes2.fixed,
          backgroundRepeat = _props$attributes2.backgroundRepeat,
          backgroundPosition = _props$attributes2.backgroundPosition,
          backgroundSize = _props$attributes2.backgroundSize,
          borderType = _props$attributes2.borderType,
          borderWidth = _props$attributes2.borderWidth,
          borderColor = _props$attributes2.borderColor,
          borderRadius = _props$attributes2.borderRadius,
          marginTop = _props$attributes2.marginTop,
          marginBottom = _props$attributes2.marginBottom,
          marginLeft = _props$attributes2.marginLeft,
          marginRight = _props$attributes2.marginRight,
          paddingTop = _props$attributes2.paddingTop,
          paddingRight = _props$attributes2.paddingRight,
          paddingBottom = _props$attributes2.paddingBottom,
          paddingLeft = _props$attributes2.paddingLeft,
          shadowBlur = _props$attributes2.shadowBlur,
          shadowColor = _props$attributes2.shadowColor,
          shadowHorizontal = _props$attributes2.shadowHorizontal,
          shadowVertical = _props$attributes2.shadowVertical,
          shadowPosition = _props$attributes2.shadowPosition;

      return wp.element.createElement(
        "div",
        {
          className: className + " " + className + "__stretch_" + stretchSection + " " + className + "__" + innerWidthType,
          style: {
            textAlign: horAlign,
            height: "fit" === height ? "100vh" : minHeight,
            backgroundColor: color,
            border: borderType,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            borderColor: borderColor,
            backgroundImage: "url('" + imageURL + "')",
            backgroundRepeat: backgroundRepeat,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize,
            backgroundAttachment: fixed ? "fixed" : "unset",
            marginTop: marginTop + "px",
            marginBottom: marginBottom + "px",
            paddingTop: paddingTop + "px",
            marginLeft: marginLeft + "px",
            marginRight: marginRight + "px",
            paddingBottom: paddingBottom + "px",
            paddingLeft: paddingLeft + "px",
            paddingRight: paddingRight + "px",
            boxShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor + " " + shadowPosition
          }
        },
        wp.element.createElement(
          "div",
          {
            className: className + "__content_wrap " + className + "__" + vPos,
            style: {
              maxWidth: "boxed" == innerWidthType && stretchSection ? innerWidth ? innerWidth + "px" : "1140px" : "100%"
            }
          },
          wp.element.createElement(
            "div",
            { className: className + "__content_inner" },
            wp.element.createElement(InnerBlocks.Content, null)
          )
        )
      );
    },
    deprecated: [{
      attributes: containerAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            horAlign = _props$attributes3.horAlign,
            innerWidth = _props$attributes3.innerWidth,
            innerWidthType = _props$attributes3.innerWidthType,
            stretchSection = _props$attributes3.stretchSection,
            height = _props$attributes3.height,
            vPos = _props$attributes3.vPos,
            minHeight = _props$attributes3.minHeight,
            color = _props$attributes3.color,
            imageURL = _props$attributes3.imageURL,
            fixed = _props$attributes3.fixed,
            backgroundRepeat = _props$attributes3.backgroundRepeat,
            backgroundPosition = _props$attributes3.backgroundPosition,
            backgroundSize = _props$attributes3.backgroundSize,
            borderType = _props$attributes3.borderType,
            borderWidth = _props$attributes3.borderWidth,
            borderColor = _props$attributes3.borderColor,
            borderRadius = _props$attributes3.borderRadius,
            marginTop = _props$attributes3.marginTop,
            marginBottom = _props$attributes3.marginBottom,
            marginLeft = _props$attributes3.marginLeft,
            marginRight = _props$attributes3.marginRight,
            paddingTop = _props$attributes3.paddingTop,
            paddingRight = _props$attributes3.paddingRight,
            paddingBottom = _props$attributes3.paddingBottom,
            paddingLeft = _props$attributes3.paddingLeft,
            shadowBlur = _props$attributes3.shadowBlur,
            shadowColor = _props$attributes3.shadowColor,
            shadowHorizontal = _props$attributes3.shadowHorizontal,
            shadowVertical = _props$attributes3.shadowVertical,
            shadowPosition = _props$attributes3.shadowPosition;

        return wp.element.createElement(
          "div",
          {
            className: className,
            style: {
              textAlign: horAlign,
              height: "fit" === height ? "100vh" : minHeight,
              backgroundColor: color,
              border: borderType,
              borderWidth: borderWidth + "px",
              borderRadius: borderRadius + "px",
              borderColor: borderColor,
              backgroundImage: "url('" + imageURL + "')",
              backgroundRepeat: backgroundRepeat,
              backgroundPosition: backgroundPosition,
              backgroundSize: backgroundSize,
              backgroundAttachment: fixed ? "fixed" : "unset",
              marginTop: marginTop + "px",
              marginBottom: marginBottom + "px",
              paddingTop: paddingTop + "px",
              marginLeft: marginLeft + "px",
              marginRight: marginRight + "px",
              paddingBottom: paddingBottom + "px",
              paddingLeft: paddingLeft + "px",
              paddingRight: paddingRight + "px",
              boxShadow: shadowHorizontal + "px " + shadowVertical + "px " + shadowBlur + "px " + shadowColor + " " + shadowPosition
            }
          },
          wp.element.createElement(
            "div",
            {
              className: className + "__content_wrap " + className + "__" + vPos,
              style: { width: innerWidth ? innerWidth + "%" : "100%" }
            },
            wp.element.createElement(
              "div",
              { className: className + "__content_inner" },
              wp.element.createElement(InnerBlocks.Content, null)
            )
          )
        );
      }
    }]
  });
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumBackground;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    IconButton = _wp$components.IconButton,
    ToggleControl = _wp$components.ToggleControl;
var MediaUpload = wp.editor.MediaUpload;


function PremiumBackground(props) {
  var imageID = props.imageID,
      imageURL = props.imageURL,
      backgroundPosition = props.backgroundPosition,
      backgroundRepeat = props.backgroundRepeat,
      backgroundSize = props.backgroundSize,
      fixed = props.fixed,
      _props$onSelectMedia = props.onSelectMedia,
      onSelectMedia = _props$onSelectMedia === undefined ? function () {} : _props$onSelectMedia,
      _props$onRemoveImage = props.onRemoveImage,
      onRemoveImage = _props$onRemoveImage === undefined ? function () {} : _props$onRemoveImage,
      _props$onChangeBackPo = props.onChangeBackPos,
      onChangeBackPos = _props$onChangeBackPo === undefined ? function () {} : _props$onChangeBackPo,
      _props$onchangeBackRe = props.onchangeBackRepeat,
      onchangeBackRepeat = _props$onchangeBackRe === undefined ? function () {} : _props$onchangeBackRe,
      _props$onChangeBackSi = props.onChangeBackSize,
      onChangeBackSize = _props$onChangeBackSi === undefined ? function () {} : _props$onChangeBackSi,
      _props$onChangeFixed = props.onChangeFixed,
      onChangeFixed = _props$onChangeFixed === undefined ? function () {} : _props$onChangeFixed;


  var POSITION = [{
    value: "top left",
    label: __("Top Left")
  }, {
    value: "top center",
    label: __("Top Center")
  }, {
    value: "top right",
    label: __("Top Right")
  }, {
    value: "center left",
    label: __("Center Left")
  }, {
    value: "center center",
    label: __("Center Center")
  }, {
    value: "center right",
    label: __("Center Right")
  }, {
    value: "bottom left",
    label: __("Bottom Left")
  }, {
    value: "bottom center",
    label: __("Bottom Center")
  }, {
    value: "bottom right",
    label: __("Bottom Right")
  }];
  var REPEAT = [{
    value: "no-repeat",
    label: __("No Repeat")
  }, {
    value: "repeat",
    label: __("Repeat")
  }, {
    value: "repeat-x",
    label: __("Repeat Horizontally")
  }, {
    value: "repeat-y",
    label: __("Repeat Vertically")
  }];
  var SIZE = [{
    value: "auto",
    label: __("Auto")
  }, {
    value: "cover",
    label: __("Cover")
  }, {
    value: "contain",
    label: __("Contain")
  }];
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(MediaUpload, {
      allowedTypes: ["image"],
      onSelect: onSelectMedia,
      type: "image",
      value: imageID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(
          Fragment,
          null,
          !imageURL && wp.element.createElement(
            IconButton,
            { label: __("Change Image"), icon: "edit", onClick: open },
            __("Change Image")
          ),
          imageURL && wp.element.createElement(
            IconButton,
            {
              label: __("Remove Image"),
              icon: "no",
              onClick: onRemoveImage
            },
            __("Remove Image")
          )
        );
      }
    }),
    imageURL && wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(SelectControl, {
        label: __("Position"),
        options: POSITION,
        value: backgroundPosition,
        onChange: onChangeBackPos
      }),
      wp.element.createElement(SelectControl, {
        label: __("Repeat"),
        options: REPEAT,
        value: backgroundRepeat,
        onChange: onchangeBackRepeat
      }),
      wp.element.createElement(SelectControl, {
        label: __("Size"),
        options: SIZE,
        value: backgroundSize,
        onChange: onChangeBackSize
      }),
      wp.element.createElement(ToggleControl, {
        label: __("Fixed Background"),
        checked: fixed,
        onChange: onChangeFixed
      })
    )
  );
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_padding__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_typo__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__icons__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







if (__WEBPACK_IMPORTED_MODULE_0__settings__["b" /* accordion */]) {
  var className = "premium-accordion";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$element = wp.element,
      Component = _wp$element.Component,
      Fragment = _wp$element.Fragment;
  var _wp$components = wp.components,
      Toolbar = _wp$components.Toolbar,
      PanelBody = _wp$components.PanelBody,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      RichText = _wp$editor.RichText,
      PanelColorSettings = _wp$editor.PanelColorSettings;


  var accordionAttrs = {
    accordionId: {
      type: "string"
    },
    repeaterItems: {
      type: "array",
      default: [{
        titleText: __("Awesome Title"),
        descText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }]
    },
    direction: {
      type: "string",
      default: "ltr"
    },
    titleTag: {
      type: "string",
      default: "H4"
    },
    titleColor: {
      type: "string"
    },
    titleSize: {
      type: "number"
    },
    titleLine: {
      type: "number"
    },
    titleLetter: {
      type: "number"
    },
    titleStyle: {
      type: "string"
    },
    titleUpper: {
      type: "boolean"
    },
    titleWeight: {
      type: "number",
      default: 500
    },
    titleBorder: {
      type: "string",
      default: "none"
    },
    titleBorderWidth: {
      type: "number",
      default: "1"
    },
    titleBorderRadius: {
      type: "number",
      default: "0"
    },
    titleBorderColor: {
      type: "string"
    },
    titleBack: {
      type: "string"
    },
    titlePaddingT: {
      type: "number"
    },
    titlePaddingR: {
      type: "number"
    },
    titlePaddingB: {
      type: "number"
    },
    titlePaddingL: {
      type: "number"
    },
    arrowColor: {
      type: "string"
    },
    arrowBack: {
      type: "string"
    },
    arrowPadding: {
      type: "number"
    },
    arrowRadius: {
      type: "number"
    },
    arrowSize: {
      type: "number",
      default: 20
    },
    descAlign: {
      type: "string",
      default: "left"
    },
    descColor: {
      type: "string"
    },
    descBack: {
      type: "string"
    },
    descBorder: {
      type: "string",
      default: "none"
    },
    descBorderWidth: {
      type: "number",
      default: "1"
    },
    descBorderRadius: {
      type: "number",
      default: "0"
    },
    descBorderColor: {
      type: "string"
    },
    descSize: {
      type: "number"
    },
    descLine: {
      type: "number"
    },
    descLetter: {
      type: "number"
    },
    descStyle: {
      type: "string"
    },
    descUpper: {
      type: "boolean"
    },
    descWeight: {
      type: "number",
      default: 500
    },
    descPaddingT: {
      type: "number"
    },
    descPaddingR: {
      type: "number"
    },
    descPaddingB: {
      type: "number"
    },
    descPaddingL: {
      type: "number",
      default: 10
    }
  };

  var isAccUpdated = null;

  var PremiumAccordion = function (_Component) {
    _inherits(PremiumAccordion, _Component);

    function PremiumAccordion() {
      _classCallCheck(this, PremiumAccordion);

      var _this = _possibleConstructorReturn(this, (PremiumAccordion.__proto__ || Object.getPrototypeOf(PremiumAccordion)).apply(this, arguments));

      _this.initAccordion = _this.initAccordion.bind(_this);
      return _this;
    }

    _createClass(PremiumAccordion, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _props = this.props,
            attributes = _props.attributes,
            setAttributes = _props.setAttributes,
            clientId = _props.clientId;

        if (!attributes.accordionId) {
          setAttributes({ accordionId: "premium-accordion-" + clientId });
        }
        this.initAccordion();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        clearTimeout(isAccUpdated);
        isAccUpdated = setTimeout(this.initAccordion, 500);
      }
    }, {
      key: "initAccordion",
      value: function initAccordion() {
        var accordionId = this.props.attributes.accordionId;

        if (!this.props.attributes.accordionId) return null;
        var title = document.getElementById(accordionId).getElementsByClassName("premium-accordion__title_wrap")[0];
        title.addEventListener("click", function () {
          title.getElementsByClassName("premium-accordion__icon")[0].classList.toggle("premium-accordion__closed");
          title.nextSibling.classList.toggle("premium-accordion__desc_close");
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props,
            isSelected = _props2.isSelected,
            setAttributes = _props2.setAttributes,
            clientId = _props2.clientId;
        var _props$attributes = this.props.attributes,
            accordionId = _props$attributes.accordionId,
            repeaterItems = _props$attributes.repeaterItems,
            direction = _props$attributes.direction,
            titleTag = _props$attributes.titleTag,
            titleColor = _props$attributes.titleColor,
            titleSize = _props$attributes.titleSize,
            titleLine = _props$attributes.titleLine,
            titleLetter = _props$attributes.titleLetter,
            titleStyle = _props$attributes.titleStyle,
            titleUpper = _props$attributes.titleUpper,
            titleWeight = _props$attributes.titleWeight,
            titleBorder = _props$attributes.titleBorder,
            titleBorderWidth = _props$attributes.titleBorderWidth,
            titleBorderColor = _props$attributes.titleBorderColor,
            titleBorderRadius = _props$attributes.titleBorderRadius,
            titleBack = _props$attributes.titleBack,
            titlePaddingT = _props$attributes.titlePaddingT,
            titlePaddingR = _props$attributes.titlePaddingR,
            titlePaddingB = _props$attributes.titlePaddingB,
            titlePaddingL = _props$attributes.titlePaddingL,
            arrowColor = _props$attributes.arrowColor,
            arrowBack = _props$attributes.arrowBack,
            arrowPadding = _props$attributes.arrowPadding,
            arrowRadius = _props$attributes.arrowRadius,
            arrowSize = _props$attributes.arrowSize,
            descAlign = _props$attributes.descAlign,
            descColor = _props$attributes.descColor,
            descBack = _props$attributes.descBack,
            descBorder = _props$attributes.descBorder,
            descBorderColor = _props$attributes.descBorderColor,
            descBorderRadius = _props$attributes.descBorderRadius,
            descBorderWidth = _props$attributes.descBorderWidth,
            descSize = _props$attributes.descSize,
            descLine = _props$attributes.descLine,
            descLetter = _props$attributes.descLetter,
            descStyle = _props$attributes.descStyle,
            descUpper = _props$attributes.descUpper,
            descWeight = _props$attributes.descWeight,
            descPaddingT = _props$attributes.descPaddingT,
            descPaddingR = _props$attributes.descPaddingR,
            descPaddingB = _props$attributes.descPaddingB,
            descPaddingL = _props$attributes.descPaddingL;


        var DIRECTION = [{
          value: "ltr",
          label: __("LTR")
        }, {
          value: "rtl",
          label: __("RTL")
        }];
        var ALIGNS = ["left", "center", "right"];

        var onAccordionChange = function onAccordionChange(attr, value, index) {
          var items = repeaterItems;

          return items.map(function (item, currIndex) {
            if (index == currIndex) {
              item[attr] = value;
            }

            return item;
          });
        };

        var accordionItems = repeaterItems.map(function (item, index) {
          return wp.element.createElement(
            "div",
            {
              id: className + "__layer" + index,
              className: className + "__content_wrap"
            },
            wp.element.createElement(
              "div",
              {
                className: className + "__title_wrap " + className + "__" + direction,
                style: {
                  backgroundColor: titleBack,
                  border: titleBorder,
                  borderWidth: titleBorderWidth + "px",
                  borderRadius: titleBorderRadius + "px",
                  borderColor: titleBorderColor,
                  paddingTop: titlePaddingT,
                  paddingRight: titlePaddingR,
                  paddingBottom: titlePaddingB,
                  paddingLeft: titlePaddingL
                }
              },
              wp.element.createElement(
                "div",
                { className: className + "__title" },
                wp.element.createElement(RichText, {
                  tagName: titleTag.toLowerCase(),
                  className: className + "__title_text",
                  onChange: function onChange(newText) {
                    return setAttributes({
                      repeaterItems: onAccordionChange("titleText", newText, index)
                    });
                  },
                  placeholder: __("Awesome Title"),
                  value: item.titleText,
                  style: {
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px"
                  }
                })
              ),
              wp.element.createElement(
                "div",
                { className: className + "__icon_wrap" },
                wp.element.createElement(
                  "svg",
                  {
                    className: className + "__icon",
                    role: "img",
                    focusable: "false",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: arrowSize,
                    height: arrowSize,
                    viewBox: "0 0 20 20",
                    style: {
                      fill: arrowColor,
                      backgroundColor: arrowBack,
                      padding: arrowPadding + "px",
                      borderRadius: arrowRadius + "px"
                    }
                  },
                  wp.element.createElement("polygon", { points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " })
                )
              )
            ),
            wp.element.createElement(
              "div",
              {
                className: className + "__desc_wrap",
                style: {
                  textAlign: descAlign,
                  backgroundColor: descBack,
                  border: descBorder,
                  borderWidth: descBorderWidth + "px",
                  borderRadius: descBorderRadius + "px",
                  borderColor: descBorderColor,
                  paddingTop: descPaddingT,
                  paddingRight: descPaddingR,
                  paddingBottom: descPaddingB,
                  paddingLeft: descPaddingL
                }
              },
              wp.element.createElement(RichText, {
                tagName: "p",
                className: className + "__desc",
                onChange: function onChange(newText) {
                  return setAttributes({
                    repeaterItems: onAccordionChange("descText", newText, index)
                  });
                },
                value: item.descText,
                style: {
                  color: descColor,
                  fontSize: descSize + "px",
                  letterSpacing: descLetter + "px",
                  textTransform: descUpper ? "uppercase" : "none",
                  fontStyle: descStyle,
                  fontWeight: descWeight,
                  lineHeight: descLine + "px"
                }
              })
            )
          );
        });
        return [isSelected && wp.element.createElement(
          InspectorControls,
          { key: "inspector" },
          wp.element.createElement(
            PanelBody,
            {
              title: __("Title"),
              className: "premium-panel-body",
              initialOpen: false
            },
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
            wp.element.createElement(SelectControl, {
              label: __("Direction"),
              options: DIRECTION,
              value: direction,
              onChange: function onChange(newEffect) {
                return setAttributes({ direction: newEffect });
              }
            }),
            wp.element.createElement(
              PanelBody,
              {
                title: __("Font"),
                className: "premium-panel-body-inner",
                initialOpen: false
              },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_typo__["a" /* default */], {
                components: ["size", "weight", "style", "upper", "spacing", "line"],
                size: titleSize,
                weight: titleWeight,
                style: titleStyle,
                spacing: titleLetter,
                line: titleLine,
                upper: titleUpper,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ titleSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ titleWeight: newWeight });
                },
                onChangeStyle: function onChangeStyle(newStyle) {
                  return setAttributes({ titleStyle: newStyle });
                },
                onChangeSpacing: function onChangeSpacing(newValue) {
                  return setAttributes({ titleLetter: newValue });
                },
                onChangeLine: function onChangeLine(newValue) {
                  return setAttributes({ titleLine: newValue });
                },
                onChangeUpper: function onChangeUpper(check) {
                  return setAttributes({ titleUpper: check });
                }
              })
            ),
            wp.element.createElement(PanelColorSettings, {
              title: __("Colors"),
              className: "premium-panel-body-inner",
              colorSettings: [{
                label: __("Text Color"),
                value: titleColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ titleColor: colorValue });
                }
              }, {
                label: __("Background Color"),
                value: titleBack,
                onChange: function onChange(colorValue) {
                  return setAttributes({ titleBack: colorValue });
                }
              }]
            }),
            wp.element.createElement(
              PanelBody,
              {
                title: __("Border"),
                className: "premium-panel-body-inner",
                initialOpen: false
              },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
                borderType: titleBorder,
                borderWidth: titleBorderWidth,
                borderColor: titleBorderColor,
                borderRadius: titleBorderRadius,
                onChangeType: function onChangeType(newType) {
                  return setAttributes({ titleBorder: newType });
                },
                onChangeWidth: function onChangeWidth(newWidth) {
                  return setAttributes({ titleBorderWidth: newWidth });
                },
                onChangeColor: function onChangeColor(colorValue) {
                  return setAttributes({ titleBorderColor: colorValue });
                },
                onChangeRadius: function onChangeRadius(newrRadius) {
                  return setAttributes({ titleBorderRadius: newrRadius });
                }
              })
            ),
            wp.element.createElement(
              PanelBody,
              {
                title: __("Padding"),
                className: "premium-panel-body-inner",
                initialOpen: false
              },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_padding__["a" /* default */], {
                paddingTop: titlePaddingT,
                paddingRight: titlePaddingR,
                paddingBottom: titlePaddingB,
                paddingLeft: titlePaddingL,
                onChangePadTop: function onChangePadTop(value) {
                  return setAttributes({
                    titlePaddingT: value === undefined ? 0 : value
                  });
                },
                onChangePadRight: function onChangePadRight(value) {
                  return setAttributes({
                    titlePaddingR: value === undefined ? 0 : value
                  });
                },
                onChangePadBottom: function onChangePadBottom(value) {
                  return setAttributes({
                    titlePaddingB: value === undefined ? 0 : value
                  });
                },
                onChangePadLeft: function onChangePadLeft(value) {
                  return setAttributes({
                    titlePaddingL: value === undefined ? 0 : value
                  });
                }
              })
            )
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Arrow"),
              className: "premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(RangeControl, {
              label: __("Size "),
              value: arrowSize,
              onChange: function onChange(newValue) {
                return setAttributes({ arrowSize: newValue });
              }
            }),
            wp.element.createElement(PanelColorSettings, {
              title: __("Colors"),
              className: "premium-panel-body-inner",
              colorSettings: [{
                label: __("Arrow Color"),
                value: arrowColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ arrowColor: colorValue });
                }
              }, {
                label: __("Background Color"),
                value: arrowBack,
                onChange: function onChange(colorValue) {
                  return setAttributes({ arrowBack: colorValue });
                }
              }]
            }),
            wp.element.createElement(RangeControl, {
              label: __("Border Radius (PX)"),
              value: arrowRadius,
              onChange: function onChange(newValue) {
                return setAttributes({
                  arrowRadius: newValue === undefined ? 0 : newValue
                });
              }
            }),
            wp.element.createElement(RangeControl, {
              label: __("Padding (PX)"),
              value: arrowPadding,
              onChange: function onChange(newValue) {
                return setAttributes({
                  arrowPadding: newValue === undefined ? 0 : newValue
                });
              }
            })
          ),
          wp.element.createElement(
            PanelBody,
            {
              title: __("Description"),
              className: "premium-panel-body",
              initialOpen: false
            },
            wp.element.createElement(Toolbar, {
              controls: ALIGNS.map(function (align) {
                return {
                  icon: "editor-align" + align,
                  isActive: align === descAlign,
                  onClick: function onClick() {
                    return setAttributes({ descAlign: align });
                  }
                };
              })
            }),
            wp.element.createElement(
              PanelBody,
              {
                title: __("Font"),
                className: "premium-panel-body-inner",
                initialOpen: false
              },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_typo__["a" /* default */], {
                components: ["size", "weight", "style", "upper", "spacing", "line"],
                size: descSize,
                weight: descWeight,
                style: descStyle,
                spacing: descLetter,
                line: descLine,
                upper: descUpper,
                onChangeSize: function onChangeSize(newSize) {
                  return setAttributes({ descSize: newSize });
                },
                onChangeWeight: function onChangeWeight(newWeight) {
                  return setAttributes({ descWeight: newWeight });
                },
                onChangeStyle: function onChangeStyle(newStyle) {
                  return setAttributes({ descStyle: newStyle });
                },
                onChangeSpacing: function onChangeSpacing(newValue) {
                  return setAttributes({ descLetter: newValue });
                },
                onChangeLine: function onChangeLine(newValue) {
                  return setAttributes({ descLine: newValue });
                },
                onChangeUpper: function onChangeUpper(check) {
                  return setAttributes({ descUpper: check });
                }
              })
            ),
            wp.element.createElement(PanelColorSettings, {
              title: __("Colors"),
              className: "premium-panel-body-inner",
              colorSettings: [{
                label: __("Text Color"),
                value: descColor,
                onChange: function onChange(colorValue) {
                  return setAttributes({ descColor: colorValue });
                }
              }, {
                label: __("Background Color"),
                value: descBack,
                onChange: function onChange(colorValue) {
                  return setAttributes({ descBack: colorValue });
                }
              }]
            }),
            wp.element.createElement(
              PanelBody,
              {
                title: __("Border"),
                className: "premium-panel-body-inner",
                initialOpen: false
              },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
                borderType: descBorder,
                borderWidth: descBorderWidth,
                borderColor: descBorderColor,
                borderRadius: descBorderRadius,
                onChangeType: function onChangeType(newType) {
                  return setAttributes({ descBorder: newType });
                },
                onChangeWidth: function onChangeWidth(newWidth) {
                  return setAttributes({ descBorderWidth: newWidth });
                },
                onChangeColor: function onChangeColor(colorValue) {
                  return setAttributes({ descBorderColor: colorValue });
                },
                onChangeRadius: function onChangeRadius(newrRadius) {
                  return setAttributes({ descBorderRadius: newrRadius });
                }
              })
            ),
            wp.element.createElement(
              PanelBody,
              {
                title: __("Padding"),
                className: "premium-panel-body-inner",
                initialOpen: false
              },
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_padding__["a" /* default */], {
                paddingTop: descPaddingT,
                paddingRight: descPaddingR,
                paddingBottom: descPaddingB,
                paddingLeft: descPaddingL,
                onChangePadTop: function onChangePadTop(value) {
                  return setAttributes({
                    descPaddingT: value === undefined ? 0 : value
                  });
                },
                onChangePadRight: function onChangePadRight(value) {
                  return setAttributes({
                    descPaddingR: value === undefined ? 0 : value
                  });
                },
                onChangePadBottom: function onChangePadBottom(value) {
                  return setAttributes({
                    descPaddingB: value === undefined ? 0 : value
                  });
                },
                onChangePadLeft: function onChangePadLeft(value) {
                  return setAttributes({
                    descPaddingL: value === undefined ? 0 : value
                  });
                }
              })
            )
          )
        ), wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(
            "div",
            { id: accordionId, className: "" + className },
            accordionItems
          ),
          wp.element.createElement(
            "div",
            { className: "premium-repeater" },
            wp.element.createElement(
              "button",
              {
                className: "premium-repeater-btn",
                onClick: function onClick() {
                  return setAttributes({
                    repeaterItems: repeaterItems.concat([{
                      titleText: __("Awesome Title"),
                      descText: __("Cool Description")
                    }])
                  });
                }
              },
              wp.element.createElement("i", { className: "dashicons dashicons-plus premium-repeater-icon" }),
              __("Add New Item")
            ),
            wp.element.createElement(
              "p",
              null,
              __("Add the items you need then reload the page")
            )
          )
        )];
      }
    }]);

    return PremiumAccordion;
  }(Component);

  registerBlockType("premium/accordion", {
    title: __("Accordion"),
    icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__icons__["a" /* default */], { icon: "accordion" }),
    category: "premium-blocks",
    attributes: accordionAttrs,
    edit: PremiumAccordion,
    save: function save(props) {
      var _props$attributes2 = props.attributes,
          accordionId = _props$attributes2.accordionId,
          repeaterItems = _props$attributes2.repeaterItems,
          direction = _props$attributes2.direction,
          titleTag = _props$attributes2.titleTag,
          titleSize = _props$attributes2.titleSize,
          titleLine = _props$attributes2.titleLine,
          titleLetter = _props$attributes2.titleLetter,
          titleStyle = _props$attributes2.titleStyle,
          titleUpper = _props$attributes2.titleUpper,
          titleWeight = _props$attributes2.titleWeight,
          titleColor = _props$attributes2.titleColor,
          titleBorder = _props$attributes2.titleBorder,
          titleBorderColor = _props$attributes2.titleBorderColor,
          titleBorderWidth = _props$attributes2.titleBorderWidth,
          titleBorderRadius = _props$attributes2.titleBorderRadius,
          titleBack = _props$attributes2.titleBack,
          titlePaddingT = _props$attributes2.titlePaddingT,
          titlePaddingR = _props$attributes2.titlePaddingR,
          titlePaddingB = _props$attributes2.titlePaddingB,
          titlePaddingL = _props$attributes2.titlePaddingL,
          arrowColor = _props$attributes2.arrowColor,
          arrowBack = _props$attributes2.arrowBack,
          arrowPadding = _props$attributes2.arrowPadding,
          arrowSize = _props$attributes2.arrowSize,
          arrowRadius = _props$attributes2.arrowRadius,
          descAlign = _props$attributes2.descAlign,
          descSize = _props$attributes2.descSize,
          descLine = _props$attributes2.descLine,
          descLetter = _props$attributes2.descLetter,
          descStyle = _props$attributes2.descStyle,
          descUpper = _props$attributes2.descUpper,
          descWeight = _props$attributes2.descWeight,
          descColor = _props$attributes2.descColor,
          descBack = _props$attributes2.descBack,
          descBorder = _props$attributes2.descBorder,
          descBorderColor = _props$attributes2.descBorderColor,
          descBorderRadius = _props$attributes2.descBorderRadius,
          descBorderWidth = _props$attributes2.descBorderWidth,
          descPaddingT = _props$attributes2.descPaddingT,
          descPaddingR = _props$attributes2.descPaddingR,
          descPaddingB = _props$attributes2.descPaddingB,
          descPaddingL = _props$attributes2.descPaddingL;


      var accordionItems = repeaterItems.map(function (item, index) {
        return wp.element.createElement(
          "div",
          {
            id: className + "__layer" + index,
            className: className + "__content_wrap"
          },
          wp.element.createElement(
            "div",
            {
              className: className + "__title_wrap " + className + "__" + direction,
              style: {
                backgroundColor: titleBack,
                border: titleBorder,
                borderWidth: titleBorderWidth + "px",
                borderRadius: titleBorderRadius + "px",
                borderColor: titleBorderColor,
                paddingTop: titlePaddingT,
                paddingRight: titlePaddingR,
                paddingBottom: titlePaddingB,
                paddingLeft: titlePaddingL
              }
            },
            wp.element.createElement(
              "div",
              { className: className + "__title" },
              wp.element.createElement(RichText.Content, {
                tagName: titleTag.toLowerCase(),
                className: className + "__title_text",
                value: item.titleText,
                style: {
                  color: titleColor,
                  fontSize: titleSize + "px",
                  letterSpacing: titleLetter + "px",
                  textTransform: titleUpper ? "uppercase" : "none",
                  fontStyle: titleStyle,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px"
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: className + "__icon_wrap" },
              wp.element.createElement(
                "svg",
                {
                  className: className + "__icon premium-accordion__closed",
                  role: "img",
                  focusable: "false",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: arrowSize,
                  height: arrowSize,
                  viewBox: "0 0 20 20",
                  style: {
                    fill: arrowColor,
                    backgroundColor: arrowBack,
                    padding: arrowPadding + "px",
                    borderRadius: arrowRadius + "px"
                  }
                },
                wp.element.createElement("polygon", { points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " })
              )
            )
          ),
          wp.element.createElement(
            "div",
            {
              className: className + "__desc_wrap premium-accordion__desc_close",
              style: {
                textAlign: descAlign,
                backgroundColor: descBack,
                border: descBorder,
                borderWidth: descBorderWidth + "px",
                borderRadius: descBorderRadius + "px",
                borderColor: descBorderColor,
                paddingTop: descPaddingT,
                paddingRight: descPaddingR,
                paddingBottom: descPaddingB,
                paddingLeft: descPaddingL
              }
            },
            wp.element.createElement(RichText.Content, {
              tagName: "p",
              className: className + "__desc",
              value: item.descText,
              style: {
                color: descColor,
                fontSize: descSize + "px",
                letterSpacing: descLetter + "px",
                textTransform: descUpper ? "uppercase" : "none",
                fontStyle: descStyle,
                fontWeight: descWeight,
                lineHeight: descLine + "px"
              }
            })
          )
        );
      });
      return wp.element.createElement(
        "div",
        { id: accordionId, className: "" + className },
        accordionItems
      );
    },
    deprecated: [{
      attributes: accordionAttrs,
      save: function save(props) {
        var _props$attributes3 = props.attributes,
            direction = _props$attributes3.direction,
            titleText = _props$attributes3.titleText,
            titleTag = _props$attributes3.titleTag,
            titleColor = _props$attributes3.titleColor,
            titleBorder = _props$attributes3.titleBorder,
            titleBorderColor = _props$attributes3.titleBorderColor,
            titleBorderWidth = _props$attributes3.titleBorderWidth,
            titleBorderRadius = _props$attributes3.titleBorderRadius,
            titleSize = _props$attributes3.titleSize,
            titleLetter = _props$attributes3.titleLetter,
            titleUpper = _props$attributes3.titleUpper,
            titleStyle = _props$attributes3.titleStyle,
            titleWeight = _props$attributes3.titleWeight,
            titleLine = _props$attributes3.titleLine,
            titleBack = _props$attributes3.titleBack,
            titlePaddingT = _props$attributes3.titlePaddingT,
            titlePaddingR = _props$attributes3.titlePaddingR,
            titlePaddingB = _props$attributes3.titlePaddingB,
            titlePaddingL = _props$attributes3.titlePaddingL,
            arrowColor = _props$attributes3.arrowColor,
            arrowBack = _props$attributes3.arrowBack,
            arrowPadding = _props$attributes3.arrowPadding,
            arrowSize = _props$attributes3.arrowSize,
            arrowRadius = _props$attributes3.arrowRadius,
            descAlign = _props$attributes3.descAlign,
            descSize = _props$attributes3.descSize,
            descLine = _props$attributes3.descLine,
            descLetter = _props$attributes3.descLetter,
            descStyle = _props$attributes3.descStyle,
            descUpper = _props$attributes3.descUpper,
            descWeight = _props$attributes3.descWeight,
            descColor = _props$attributes3.descColor,
            descText = _props$attributes3.descText,
            descBack = _props$attributes3.descBack,
            descBorder = _props$attributes3.descBorder,
            descBorderColor = _props$attributes3.descBorderColor,
            descBorderRadius = _props$attributes3.descBorderRadius,
            descBorderWidth = _props$attributes3.descBorderWidth,
            descPaddingT = _props$attributes3.descPaddingT,
            descPaddingR = _props$attributes3.descPaddingR,
            descPaddingB = _props$attributes3.descPaddingB,
            descPaddingL = _props$attributes3.descPaddingL;

        return wp.element.createElement(
          "div",
          { className: "" + className },
          wp.element.createElement(
            "div",
            { className: className + "__content_wrap" },
            wp.element.createElement(
              "div",
              {
                className: className + "__title_wrap " + className + "__" + direction,
                style: {
                  backgroundColor: titleBack,
                  border: titleBorder,
                  borderWidth: titleBorderWidth + "px",
                  borderRadius: titleBorderRadius + "px",
                  borderColor: titleBorderColor,
                  paddingTop: titlePaddingT,
                  paddingRight: titlePaddingR,
                  paddingBottom: titlePaddingB,
                  paddingLeft: titlePaddingL
                }
              },
              wp.element.createElement(
                "div",
                { className: className + "__title" },
                wp.element.createElement(RichText.Content, {
                  tagName: titleTag.toLowerCase(),
                  className: className + "__title_text",
                  value: titleText,
                  style: {
                    color: titleColor,
                    fontSize: titleSize + "px",
                    letterSpacing: titleLetter + "px",
                    textTransform: titleUpper ? "uppercase" : "none",
                    fontStyle: titleStyle,
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px"
                  }
                })
              ),
              wp.element.createElement(
                "div",
                { className: className + "__icon_wrap" },
                wp.element.createElement(
                  "svg",
                  {
                    className: className + "__icon",
                    role: "img",
                    focusable: "false",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: arrowSize,
                    height: arrowSize,
                    viewBox: "0 0 20 20",
                    style: {
                      fill: arrowColor,
                      backgroundColor: arrowBack,
                      padding: arrowPadding + "px",
                      borderRadius: arrowRadius + "px"
                    }
                  },
                  wp.element.createElement("polygon", { points: "16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " })
                )
              )
            ),
            wp.element.createElement(
              "div",
              {
                className: className + "__desc_wrap",
                style: {
                  textAlign: descAlign,
                  backgroundColor: descBack,
                  border: descBorder,
                  borderWidth: descBorderWidth + "px",
                  borderRadius: descBorderRadius + "px",
                  borderColor: descBorderColor,
                  paddingTop: descPaddingT,
                  paddingRight: descPaddingR,
                  paddingBottom: descPaddingB,
                  paddingLeft: descPaddingL
                }
              },
              wp.element.createElement(RichText.Content, {
                tagName: "p",
                className: className + "__desc",
                value: descText,
                style: {
                  color: descColor,
                  fontSize: descSize + "px",
                  letterSpacing: descLetter + "px",
                  textTransform: descUpper ? "uppercase" : "none",
                  fontStyle: descStyle,
                  fontWeight: descWeight,
                  lineHeight: descLine + "px"
                }
              })
            )
          )
        );
      }
    }]
  });
}

/***/ })
/******/ ]);