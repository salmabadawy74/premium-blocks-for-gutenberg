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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dualHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pricingTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return maps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return testimonial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return countUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontAwesomeEnabled; });
//Blocks Keys
var _PremiumBlocksSetting = PremiumBlocksSettings.activeBlocks,
    banner = _PremiumBlocksSetting.banner,
    dualHeading = _PremiumBlocksSetting.dualHeading,
    pricingTable = _PremiumBlocksSetting.pricingTable,
    maps = _PremiumBlocksSetting.maps,
    testimonial = _PremiumBlocksSetting.testimonial,
    countUp = _PremiumBlocksSetting.countUp,
    icon = _PremiumBlocksSetting.icon;

//Plugin Config Keys


var _FontAwesomeConfig = FontAwesomeConfig,
    FontAwesomeEnabled = _FontAwesomeConfig.FontAwesomeEnabled;


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

/*const { __ } = wp.i18n;
const { SelectControl } = wp.components;
export default function PremiumIcon(props) {
  const { type, icon, onChangeIcon = () => {} } = props;
  //Dashicons
  const DASHICONS = [
    {
      value: "dashicons dashicons-menu",
      label: <p>&#xf333; dashicons-menu</p>
    },
    {
      value: "dashicons dashicons-admin-site",
      label: <p>&#xf319; dashicons-admin-site</p>
    },
    {
      value: "dashicons dashicons-dashboard",
      label: <p>&#xf226; dashicons-dashboard</p>
    },
    {
      value: "dashicons dashicons-admin-post",
      label: <p>&#xf109; dashicons-admin-post</p>
    },
    {
      value: "dashicons dashicons-admin-media",
      label: <p>&#xf104; dashicons-admin-media</p>
    },
    {
      value: "dashicons dashicons-admin-links",
      label: <p>&#xf103; dashicons-admin-links</p>
    },
    {
      value: "dashicons dashicons-admin-page",
      label: <p>&#xf105; dashicons-admin-page</p>
    },
    {
      value: "dashicons dashicons-admin-comments",
      label: <p>&#xf101; dashicons-admin-comments</p>
    },
    {
      value: "dashicons dashicons-admin-appearance",
      label: <p>&#xf100; dashicons-admin-appearance</p>
    },
    {
      value: "dashicons dashicons-admin-plugins",
      label: <p>&#xf106; dashicons-admin-plugins</p>
    },
    {
      value: "dashicons dashicons-admin-users",
      label: <p>&#xf110; dashicons-admin-users</p>
    },
    {
      value: "dashicons dashicons-admin-tools",
      label: <p>&#xf107; dashicons-admin-tools</p>
    },
    {
      value: "dashicons dashicons-admin-settings",
      label: <p>&#xf108; dashicons-admin-settings</p>
    },
    {
      value: "dashicons dashicons-admin-network",
      label: <p>&#xf112; dashicons-admin-network</p>
    },
    {
      value: "dashicons dashicons-admin-home",
      label: <p>&#xf102; dashicons-admin-home</p>
    },
    {
      value: "dashicons dashicons-admin-generic",
      label: <p>&#xf111; dashicons-admin-generic</p>
    },
    {
      value: "dashicons dashicons-admin-collapse",
      label: <p>&#xf148; dashicons-admin-collapse</p>
    },
    {
      value: "dashicons dashicons-filter",
      label: <p>&#xf536; dashicons-filter</p>
    },
    {
      value: "dashicons dashicons-admin-customizer",
      label: <p>&#xf540; dashicons-admin-customizer</p>
    },
    {
      value: "dashicons dashicons-admin-multisite",
      label: <p>&#xf541; dashicons-admin-multisite</p>
    },
    {
      value: "dashicons dashicons-welcome-write-blog",
      label: <p>&#xf119; dashicons-welcome-write-blog</p>
    },
    {
      value: "dashicons dashicons-welcome-add-page",
      label: <p>&#xf133; dashicons-welcome-add-page</p>
    },
    {
      value: "dashicons dashicons-welcome-view-site",
      label: <p>&#xf115; dashicons-welcome-view-site</p>
    },
    {
      value: "dashicons dashicons-welcome-widgets-menus",
      label: <p>&#xf116; dashicons-welcome-widgets-menus</p>
    },
    {
      value: "dashicons dashicons-welcome-comments",
      label: <p>&#xf117; dashicons-welcome-comments</p>
    },
    {
      value: "dashicons dashicons-welcome-learn-more",
      label: <p>&#xf118; dashicons-welcome-learn-more</p>
    },
    {
      value: "dashicons dashicons-format-aside",
      label: <p>&#xf123; dashicons-format-aside</p>
    },
    {
      value: "dashicons dashicons-format-image",
      label: <p>&#xf128; dashicons-format-image</p>
    },
    {
      value: "dashicons dashicons-format-gallery",
      label: <p>&#xf161; dashicons-format-gallery</p>
    },
    {
      value: "dashicons dashicons-format-video",
      label: <p>&#xf126; dashicons-format-video</p>
    },
    {
      value: "dashicons dashicons-format-status",
      label: <p>&#xf130; dashicons-format-status</p>
    },
    {
      value: "dashicons dashicons-format-quote",
      label: <p>&#xf122; dashicons-format-quote</p>
    },
    {
      value: "dashicons dashicons-format-chat",
      label: <p>&#xf125; dashicons-format-chat</p>
    },
    {
      value: "dashicons dashicons-format-audio",
      label: <p>&#xf127; dashicons-format-audio</p>
    },
    {
      value: "dashicons dashicons-camera",
      label: <p>&#xf306; dashicons-camera</p>
    },
    {
      value: "dashicons dashicons-images-alt",
      label: <p>&#xf232; dashicons-images-alt</p>
    },
    {
      value: "dashicons dashicons-images-alt2",
      label: <p>&#xf233; dashicons-images-alt2</p>
    },
    {
      value: "dashicons dashicons-video-alt",
      label: <p>&#xf234; dashicons-video-alt</p>
    },
    {
      value: "dashicons dashicons-video-alt2",
      label: <p>&#xf235; dashicons-video-alt2</p>
    },
    {
      value: "dashicons dashicons-video-alt3",
      label: <p>&#xf236; dashicons-video-alt3</p>
    },
    {
      value: "dashicons dashicons-media-archive",
      label: <p>&#xf501; dashicons-media-archive</p>
    },
    {
      value: "dashicons dashicons-media-audio",
      label: <p>&#xf500; dashicons-media-audio</p>
    },
    {
      value: "dashicons dashicons-media-code",
      label: <p>&#xf499; dashicons-media-code</p>
    },
    {
      value: "dashicons dashicons-media-default",
      label: <p>&#xf498; dashicons-media-default</p>
    },
    {
      value: "dashicons dashicons-media-document",
      label: <p>&#xf497; dashicons-media-document</p>
    },
    {
      value: "dashicons dashicons-media-interactive",
      label: <p>&#xf496; dashicons-media-interactive</p>
    },
    {
      value: "dashicons dashicons-media-spreadsheet",
      label: <p>&#xf495; dashicons-media-spreadsheet</p>
    },
    {
      value: "dashicons dashicons-media-text",
      label: <p>&#xf491; dashicons-media-text</p>
    },
    {
      value: "dashicons dashicons-media-video",
      label: <p>&#xf490; dashicons-media-video</p>
    },
    {
      value: "dashicons dashicons-playlist-audio",
      label: <p>&#xf492; dashicons-playlist-audio</p>
    },
    {
      value: "dashicons dashicons-playlist-video",
      label: <p>&#xf493; dashicons-playlist-video</p>
    },
    {
      value: "dashicons dashicons-controls-play",
      label: <p>&#xf522; dashicons-controls-play</p>
    },
    {
      value: "dashicons dashicons-controls-pause",
      label: <p>&#xf523; dashicons-controls-pause</p>
    },
    {
      value: "dashicons dashicons-controls-forward",
      label: <p>&#xf519; dashicons-controls-forward</p>
    },
    {
      value: "dashicons dashicons-controls-skipforward",
      label: <p>&#xf517; dashicons-controls-skipforward</p>
    },
    {
      value: "dashicons dashicons-controls-back",
      label: <p>&#xf518; dashicons-controls-back</p>
    },
    {
      value: "dashicons dashicons-controls-skipback",
      label: <p>&#xf516; dashicons-controls-skipback</p>
    },
    {
      value: "dashicons dashicons-controls-repeat",
      label: <p>&#xf515; dashicons-controls-repeat</p>
    },
    {
      value: "dashicons dashicons-controls-volumeon",
      label: <p>&#xf521; dashicons-controls-volumeon</p>
    },
    {
      value: "dashicons dashicons-controls-volumeoff",
      label: <p>&#xf520; dashicons-controls-volumeoff</p>
    },
    {
      value: "dashicons dashicons-image-crop",
      label: <p>&#xf165; dashicons-image-crop</p>
    },
    {
      value: "dashicons dashicons-image-rotate",
      label: <p>&#xf531; dashicons-image-rotate</p>
    },
    {
      value: "dashicons dashicons-image-rotate-left",
      label: <p>&#xf166; dashicons-image-rotate-left</p>
    },
    {
      value: "dashicons dashicons-image-rotate-right",
      label: <p>&#xf167; dashicons-image-rotate-right</p>
    },
    {
      value: "dashicons dashicons-image-flip-vertical",
      label: <p>&#xf168; dashicons-image-flip-vertical</p>
    },
    {
      value: "dashicons dashicons-image-flip-horizontal",
      label: <p>&#xf169; dashicons-image-flip-horizontal</p>
    },
    {
      value: "dashicons dashicons-image-filter",
      label: <p>&#xf533; dashicons-image-filter</p>
    },
    {
      value: "dashicons dashicons-undo",
      label: <p>&#xf171; dashicons-undo</p>
    },
    {
      value: "dashicons dashicons-redo",
      label: <p>&#xf172; dashicons-redo</p>
    },
    {
      value: "dashicons dashicons-editor-bold",
      label: <p>&#xf200; dashicons-editor-bold</p>
    },
    {
      value: "dashicons dashicons-editor-italic",
      label: <p>&#xf201; dashicons-editor-italic</p>
    },
    {
      value: "dashicons dashicons-editor-ul",
      label: <p>&#xf203; dashicons-editor-ul</p>
    },
    {
      value: "dashicons dashicons-editor-ol",
      label: <p>&#xf204; dashicons-editor-ol</p>
    },
    {
      value: "dashicons dashicons-editor-quote",
      label: <p>&#xf205; dashicons-editor-quote</p>
    },
    {
      value: "dashicons dashicons-editor-alignleft",
      label: <p>&#xf206; dashicons-editor-alignleft</p>
    },
    {
      value: "dashicons dashicons-editor-aligncenter",
      label: <p>&#xf207; dashicons-editor-aligncenter</p>
    },
    {
      value: "dashicons dashicons-editor-alignright",
      label: <p>&#xf208; dashicons-editor-alignright</p>
    },
    {
      value: "dashicons dashicons-editor-insertmore",
      label: <p>&#xf209; dashicons-editor-insertmore</p>
    },
    {
      value: "dashicons dashicons-editor-spellcheck",
      label: <p>&#xf210; dashicons-editor-spellcheck</p>
    },
    {
      value: "dashicons dashicons-editor-expand",
      label: <p>&#xf211; dashicons-editor-expand</p>
    },
    {
      value: "dashicons dashicons-editor-contract",
      label: <p>&#xf506; dashicons-editor-contract</p>
    },
    {
      value: "dashicons dashicons-editor-kitchensink",
      label: <p>&#xf212; dashicons-editor-kitchensink</p>
    },
    {
      value: "dashicons dashicons-editor-underline",
      label: <p>&#xf213; dashicons-editor-underline</p>
    },
    {
      value: "dashicons dashicons-editor-justify",
      label: <p>&#xf214; dashicons-editor-justify</p>
    },
    {
      value: "dashicons dashicons-editor-textcolor",
      label: <p>&#xf215; dashicons-editor-textcolor</p>
    },
    {
      value: "dashicons dashicons-editor-paste-word",
      label: <p>&#xf216; dashicons-editor-paste-word</p>
    },
    {
      value: "dashicons dashicons-editor-paste-text",
      label: <p>&#xf217; dashicons-editor-paste-text</p>
    },
    {
      value: "dashicons dashicons-editor-removeformatting",
      label: <p>&#xf218; dashicons-editor-removeformatting</p>
    },
    {
      value: "dashicons dashicons-editor-video",
      label: <p>&#xf219; dashicons-editor-video</p>
    },
    {
      value: "dashicons dashicons-editor-customchar",
      label: <p>&#xf220; dashicons-editor-customchar</p>
    },
    {
      value: "dashicons dashicons-editor-outdent",
      label: <p>&#xf221; dashicons-editor-outdent</p>
    },
    {
      value: "dashicons dashicons-editor-indent",
      label: <p>&#xf222; dashicons-editor-indent</p>
    },
    {
      value: "dashicons dashicons-editor-help",
      label: <p>&#xf223; dashicons-editor-help</p>
    },
    {
      value: "dashicons dashicons-editor-strikethrough",
      label: <p>&#xf224; dashicons-editor-strikethrough</p>
    },
    {
      value: "dashicons dashicons-editor-unlink",
      label: <p>&#xf225; dashicons-editor-unlink</p>
    },
    {
      value: "dashicons dashicons-editor-rtl",
      label: <p>&#xf320; dashicons-editor-rtl</p>
    },
    {
      value: "dashicons dashicons-editor-break",
      label: <p>&#xf474; dashicons-editor-break</p>
    },
    {
      value: "dashicons dashicons-editor-code",
      label: <p>&#xf475; dashicons-editor-code</p>
    },
    {
      value: "dashicons dashicons-editor-paragraph",
      label: <p>&#xf476; dashicons-editor-paragraph</p>
    },
    {
      value: "dashicons dashicons-editor-table",
      label: <p>&#xf535; dashicons-editor-table</p>
    },
    {
      value: "dashicons dashicons-align-left",
      label: <p>&#xf135; dashicons-align-left</p>
    },
    {
      value: "dashicons dashicons-align-right",
      label: <p>&#xf136; dashicons-align-right</p>
    },
    {
      value: "dashicons dashicons-align-center",
      label: <p>&#xf134; dashicons-align-center</p>
    },
    {
      value: "dashicons dashicons-align-none",
      label: <p>&#xf138; dashicons-align-none</p>
    },
    {
      value: "dashicons dashicons-lock",
      label: <p>&#xf160; dashicons-lock</p>
    },
    {
      value: "dashicons dashicons-unlock",
      label: <p>&#xf528; dashicons-unlock</p>
    },
    {
      value: "dashicons dashicons-calendar",
      label: <p>&#xf145; dashicons-calendar</p>
    },
    {
      value: "dashicons dashicons-calendar-alt",
      label: <p>&#xf508; dashicons-calendar-alt</p>
    },
    {
      value: "dashicons dashicons-visibility",
      label: <p>&#xf177; dashicons-visibility</p>
    },
    {
      value: "dashicons dashicons-hidden",
      label: <p>&#xf530; dashicons-hidden</p>
    },
    {
      value: "dashicons dashicons-post-status",
      label: <p>&#xf173; dashicons-post-status</p>
    },
    {
      value: "dashicons dashicons-edit",
      label: <p>&#xf464; dashicons-edit</p>
    },
    {
      value: "dashicons dashicons-trash",
      label: <p>&#xf182; dashicons-trash</p>
    },
    {
      value: "dashicons dashicons-sticky",
      label: <p>&#xf537; dashicons-sticky</p>
    },
    {
      value: "dashicons dashicons-external",
      label: <p>&#xf504; dashicons-external</p>
    },
    {
      value: "dashicons dashicons-arrow-up",
      label: <p>&#xf142; dashicons-arrow-up</p>
    },
    {
      value: "dashicons dashicons-arrow-down",
      label: <p>&#xf140; dashicons-arrow-down</p>
    },
    {
      value: "dashicons dashicons-arrow-right",
      label: <p>&#xf139; dashicons-arrow-right</p>
    },
    {
      value: "dashicons dashicons-arrow-left",
      label: <p>&#xf141; dashicons-arrow-left</p>
    },
    {
      value: "dashicons dashicons-arrow-up-alt",
      label: <p>&#xf342; dashicons-arrow-up-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-down-alt",
      label: <p>&#xf346; dashicons-arrow-down-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-right-alt",
      label: <p>&#xf344; dashicons-arrow-right-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-left-alt",
      label: <p>&#xf340; dashicons-arrow-left-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-up-alt2",
      label: <p>&#xf343; dashicons-arrow-up-alt2</p>
    },
    {
      value: "dashicons dashicons-arrow-down-alt2",
      label: <p>&#xf347; dashicons-arrow-down-alt2</p>
    },
    {
      value: "dashicons dashicons-arrow-right-alt2",
      label: <p>&#xf345; dashicons-arrow-right-alt2</p>
    },
    {
      value: "dashicons dashicons-arrow-left-alt2",
      label: <p>&#xf341; dashicons-arrow-left-alt2</p>
    },
    {
      value: "dashicons dashicons-sort",
      label: <p>&#xf156; dashicons-sort</p>
    },
    {
      value: "dashicons dashicons-leftright",
      label: <p>&#xf229; dashicons-leftright</p>
    },
    {
      value: "dashicons dashicons-randomize",
      label: <p>&#xf503; dashicons-randomize</p>
    },
    {
      value: "dashicons dashicons-list-view",
      label: <p>&#xf163; dashicons-list-view</p>
    },
    {
      value: "dashicons dashicons-exerpt-view",
      label: <p>&#xf164; dashicons-exerpt-view</p>
    },
    {
      value: "dashicons dashicons-grid-view",
      label: <p>&#xf509; dashicons-grid-view</p>
    },
    {
      value: "dashicons dashicons-move",
      label: <p>&#xf545; dashicons-move</p>
    },
    {
      value: "dashicons dashicons-share",
      label: <p>&#xf237; dashicons-share</p>
    },
    {
      value: "dashicons dashicons-share-alt",
      label: <p>&#xf240; dashicons-share-alt</p>
    },
    {
      value: "dashicons dashicons-share-alt2",
      label: <p>&#xf242; dashicons-share-alt2</p>
    },
    {
      value: "dashicons dashicons-twitter",
      label: <p>&#xf301; dashicons-twitter</p>
    },
    {
      value: "dashicons dashicons-rss",
      label: <p>&#xf303; dashicons-rss</p>
    },
    {
      value: "dashicons dashicons-email",
      label: <p>&#xf465; dashicons-email</p>
    },
    {
      value: "dashicons dashicons-email-alt",
      label: <p>&#xf466; dashicons-email-alt</p>
    },
    {
      value: "dashicons dashicons-facebook",
      label: <p>&#xf304; dashicons-facebook</p>
    },
    {
      value: "dashicons dashicons-facebook-alt",
      label: <p>&#xf305; dashicons-facebook-alt</p>
    },
    {
      value: "dashicons dashicons-googleplus",
      label: <p>&#xf462; dashicons-googleplus</p>
    },
    {
      value: "dashicons dashicons-networking",
      label: <p>&#xf325; dashicons-networking</p>
    },
    {
      value: "dashicons dashicons-hammer",
      label: <p>&#xf308; dashicons-hammer</p>
    },
    {
      value: "dashicons dashicons-art",
      label: <p>&#xf309; dashicons-art</p>
    },
    {
      value: "dashicons dashicons-migrate",
      label: <p>&#xf310; dashicons-migrate</p>
    },
    {
      value: "dashicons dashicons-performance",
      label: <p>&#xf311; dashicons-performance</p>
    },
    {
      value: "dashicons dashicons-universal-access",
      label: <p>&#xf483; dashicons-universal-access</p>
    },
    {
      value: "dashicons dashicons-universal-access-alt",
      label: <p>&#xf507; dashicons-universal-access-alt</p>
    },
    {
      value: "dashicons dashicons-tickets",
      label: <p>&#xf486; dashicons-tickets</p>
    },
    {
      value: "dashicons dashicons-nametag",
      label: <p>&#xf484; dashicons-nametag</p>
    },
    {
      value: "dashicons dashicons-clipboard",
      label: <p>&#xf481; dashicons-clipboard</p>
    },
    {
      value: "dashicons dashicons-heart",
      label: <p>&#xf487; dashicons-heart</p>
    },
    {
      value: "dashicons dashicons-megaphone",
      label: <p>&#xf488; dashicons-megaphone</p>
    },
    {
      value: "dashicons dashicons-schedule",
      label: <p>&#xf489; dashicons-schedule</p>
    },
    {
      value: "dashicons dashicons-wordpress",
      label: <p>&#xf120; dashicons-wordpress</p>
    },
    {
      value: "dashicons dashicons-wordpress-alt",
      label: <p>&#xf324; dashicons-wordpress-alt</p>
    },
    {
      value: "dashicons dashicons-pressthis",
      label: <p>&#xf157; dashicons-pressthis</p>
    },
    {
      value: "dashicons dashicons-update",
      label: <p>&#xf463; dashicons-update</p>
    },
    {
      value: "dashicons dashicons-screenoptions",
      label: <p>&#xf180; dashicons-screenoptions</p>
    },
    {
      value: "dashicons dashicons-info",
      label: <p>&#xf348; dashicons-info</p>
    },
    {
      value: "dashicons dashicons-cart",
      label: <p>&#xf174; dashicons-cart</p>
    },
    {
      value: "dashicons dashicons-feedback",
      label: <p>&#xf175; dashicons-feedback</p>
    },
    {
      value: "dashicons dashicons-cloud",
      label: <p>&#xf176; dashicons-cloud</p>
    },
    {
      value: "dashicons dashicons-translation",
      label: <p>&#xf326; dashicons-translation</p>
    },
    {
      value: "dashicons dashicons-tag",
      label: <p>&#xf323; dashicons-tag</p>
    },
    {
      value: "dashicons dashicons-category",
      label: <p>&#xf318; dashicons-category</p>
    },
    {
      value: "dashicons dashicons-archive",
      label: <p>&#xf480; dashicons-archive</p>
    },
    {
      value: "dashicons dashicons-tagcloud",
      label: <p>&#xf479; dashicons-tagcloud</p>
    },
    {
      value: "dashicons dashicons-text",
      label: <p>&#xf478; dashicons-text</p>
    },
    {
      value: "dashicons dashicons-yes",
      label: <p>&#xf147; dashicons-yes</p>
    },
    {
      value: "dashicons dashicons-no",
      label: <p>&#xf158; dashicons-no</p>
    },
    {
      value: "dashicons dashicons-no-alt",
      label: <p>&#xf335; dashicons-no-alt</p>
    },
    {
      value: "dashicons dashicons-plus",
      label: <p>&#xf132; dashicons-plus</p>
    },
    {
      value: "dashicons dashicons-plus-alt",
      label: <p>&#xf502; dashicons-plus-alt</p>
    },
    {
      value: "dashicons dashicons-minus",
      label: <p>&#xf460; dashicons-minus</p>
    },
    {
      value: "dashicons dashicons-dismiss",
      label: <p>&#xf153; dashicons-dismiss</p>
    },
    {
      value: "dashicons dashicons-marker",
      label: <p>&#xf159; dashicons-marker</p>
    },
    {
      value: "dashicons dashicons-star-filled",
      label: <p>&#xf155; dashicons-star-filled</p>
    },
    {
      value: "dashicons dashicons-star-half",
      label: <p>&#xf459; dashicons-star-half</p>
    },
    {
      value: "dashicons dashicons-star-empty",
      label: <p>&#xf154; dashicons-star-empty</p>
    },
    {
      value: "dashicons dashicons-flag",
      label: <p>&#xf227; dashicons-flag</p>
    },
    {
      value: "dashicons dashicons-warning",
      label: <p>&#xf534; dashicons-warning</p>
    },
    {
      value: "dashicons dashicons-location",
      label: <p>&#xf230; dashicons-location</p>
    },
    {
      value: "dashicons dashicons-location-alt",
      label: <p>&#xf231; dashicons-location-alt</p>
    },
    {
      value: "dashicons dashicons-vault",
      label: <p>&#xf178; dashicons-vault</p>
    },
    {
      value: "dashicons dashicons-shield",
      label: <p>&#xf332; dashicons-shield</p>
    },
    {
      value: "dashicons dashicons-shield-alt",
      label: <p>&#xf334; dashicons-shield-alt</p>
    },
    {
      value: "dashicons dashicons-sos",
      label: <p>&#xf468; dashicons-sos</p>
    },
    {
      value: "dashicons dashicons-search",
      label: <p>&#xf179; dashicons-search</p>
    },
    {
      value: "dashicons dashicons-slides",
      label: <p>&#xf181; dashicons-slides</p>
    },
    {
      value: "dashicons dashicons-analytics",
      label: <p>&#xf183; dashicons-analytics</p>
    },
    {
      value: "dashicons dashicons-chart-pie",
      label: <p>&#xf184; dashicons-chart-pie</p>
    },
    {
      value: "dashicons dashicons-chart-bar",
      label: <p>&#xf185; dashicons-chart-bar</p>
    },
    {
      value: "dashicons dashicons-chart-line",
      label: <p>&#xf238; dashicons-chart-line</p>
    },
    {
      value: "dashicons dashicons-chart-area",
      label: <p>&#xf239; dashicons-chart-area</p>
    },
    {
      value: "dashicons dashicons-groups",
      label: <p>&#xf307; dashicons-groups</p>
    },
    {
      value: "dashicons dashicons-businessman",
      label: <p>&#xf338; dashicons-businessman</p>
    },
    {
      value: "dashicons dashicons-id",
      label: <p>&#xf336; dashicons-id</p>
    },
    {
      value: "dashicons dashicons-id-alt",
      label: <p>&#xf337; dashicons-id-alt</p>
    },
    {
      value: "dashicons dashicons-products",
      label: <p>&#xf312; dashicons-products</p>
    },
    {
      value: "dashicons dashicons-awards",
      label: <p>&#xf313; dashicons-awards</p>
    },
    {
      value: "dashicons dashicons-forms",
      label: <p>&#xf314; dashicons-forms</p>
    },
    {
      value: "dashicons dashicons-testimonial",
      label: <p>&#xf473; dashicons-testimonial</p>
    },
    {
      value: "dashicons dashicons-portfolio",
      label: <p>&#xf322; dashicons-portfolio</p>
    },
    {
      value: "dashicons dashicons-book",
      label: <p>&#xf330; dashicons-book</p>
    },
    {
      value: "dashicons dashicons-book-alt",
      label: <p>&#xf331; dashicons-book-alt</p>
    },
    {
      value: "dashicons dashicons-download",
      label: <p>&#xf316; dashicons-download</p>
    },
    {
      value: "dashicons dashicons-upload",
      label: <p>&#xf317; dashicons-upload</p>
    },
    {
      value: "dashicons dashicons-backup",
      label: <p>&#xf321; dashicons-backup</p>
    },
    {
      value: "dashicons dashicons-clock",
      label: <p>&#xf469; dashicons-clock</p>
    },
    {
      value: "dashicons dashicons-lightbulb",
      label: <p>&#xf339; dashicons-lightbulb</p>
    },
    {
      value: "dashicons dashicons-microphone",
      label: <p>&#xf482; dashicons-microphone</p>
    },
    {
      value: "dashicons dashicons-desktop",
      label: <p>&#xf472; dashicons-desktop</p>
    },
    {
      value: "dashicons dashicons-laptop",
      label: <p>&#xf547; dashicons-laptop</p>
    },
    {
      value: "dashicons dashicons-tablet",
      label: <p>&#xf471; dashicons-tablet</p>
    },
    {
      value: "dashicons dashicons-smartphone",
      label: <p>&#xf470; dashicons-smartphone</p>
    },
    {
      value: "dashicons dashicons-phone",
      label: <p>&#xf525; dashicons-phone</p>
    },
    {
      value: "dashicons dashicons-index-card",
      label: <p>&#xf510; dashicons-index-card</p>
    },
    {
      value: "dashicons dashicons-carrot",
      label: <p>&#xf511; dashicons-carrot</p>
    },
    {
      value: "dashicons dashicons-building",
      label: <p>&#xf512; dashicons-building</p>
    },
    {
      value: "dashicons dashicons-store",
      label: <p>&#xf513; dashicons-store</p>
    },
    {
      value: "dashicons dashicons-album",
      label: <p>&#xf514; dashicons-album</p>
    },
    {
      value: "dashicons dashicons-palmtree",
      label: <p>&#xf527; dashicons-palmtree</p>
    },
    {
      value: "dashicons dashicons-tickets-alt",
      label: <p>&#xf524; dashicons-tickets-alt</p>
    },
    {
      value: "dashicons dashicons-money",
      label: <p>&#xf526; dashicons-money</p>
    },
    {
      value: "dashicons dashicons-smiley",
      label: <p>&#xf328; dashicons-smiley</p>
    },
    {
      value: "dashicons dashicons-thumbs-up",
      label: <p>&#xf529; dashicons-thumbs-up</p>
    },
    {
      value: "dashicons dashicons-thumbs-down",
      label: <p>&#xf542; dashicons-thumbs-down</p>
    },
    {
      value: "dashicons dashicons-layout",
      label: <p>&#xf538; dashicons-layout</p>
    },
    {
      value: "dashicons dashicons-paperclip",
      label: <p>&#xf546; dashicons-paperclip</p>
    }
  ];

  //Font Awesome Icons
  const ICONS = [
    {
      value: "fa fa-glass",
      label: <p>&#xf000; fa-glass</p>
    },
    {
      value: "fa fa-music",
      label: <p>&#xf001; fa-music</p>
    },
    {
      value: "fa fa-search",
      label: <p>&#xf002; fa-search</p>
    },
    {
      value: "fa fa-envelope-o",
      label: <p>&#xf003; fa-envelope-o</p>
    },
    {
      value: "fa fa-heart",
      label: <p>&#xf004; fa-heart</p>
    },
    {
      value: "fa fa-star",
      label: <p>&#xf005; fa-star</p>
    },
    {
      value: "fa fa-star-o",
      label: <p>&#xf006; fa-star-o</p>
    },
    {
      value: "fa fa-user",
      label: <p>&#xf007; fa-user</p>
    },
    {
      value: "fa fa-film",
      label: <p>&#xf008; fa-film</p>
    },
    {
      value: "fa fa-th-large",
      label: <p>&#xf009; fa-th-large</p>
    },
    {
      value: "fa fa-th",
      label: <p>&#xf00a; fa-th</p>
    },
    {
      value: "fa fa-th-list",
      label: <p>&#xf00b; fa-th-list</p>
    },
    {
      value: "fa fa-check",
      label: <p>&#xf00c; fa-check</p>
    },
    {
      value: "fa fa-times",
      label: <p>&#xf00d; fa-times</p>
    },
    {
      value: "fa fa-search-plus",
      label: <p>&#xf00e; fa-search-plus</p>
    },
    {
      value: "fa fa-search-minus",
      label: <p>&#xf010; fa-search-minus</p>
    },
    {
      value: "fa fa-power-off",
      label: <p>&#xf011; fa-power-off</p>
    },
    {
      value: "fa fa-signal",
      label: <p>&#xf012; fa-signal</p>
    },
    {
      value: "fa fa-cog",
      label: <p>&#xf013; fa-cog</p>
    },
    {
      value: "fa fa-trash-o",
      label: <p>&#xf014; fa-trash-o</p>
    },
    {
      value: "fa fa-home",
      label: <p>&#xf015; fa-home</p>
    },
    {
      value: "fa fa-file-o",
      label: <p>&#xf016; fa-file-o</p>
    },
    {
      value: "fa fa-clock-o",
      label: <p>&#xf017; fa-clock-o</p>
    },
    {
      value: "fa fa-road",
      label: <p>&#xf018; fa-road</p>
    },
    {
      value: "fa fa-download",
      label: <p>&#xf019; fa-download</p>
    },
    {
      value: "fa fa-arrow-circle-o-down",
      label: <p>&#xf01a; fa-arrow-circle-o-down</p>
    },
    {
      value: "fa fa-arrow-circle-o-up",
      label: <p>&#xf01b; fa-arrow-circle-o-up</p>
    },
    {
      value: "fa fa-inbox",
      label: <p>&#xf01c; fa-inbox</p>
    },
    {
      value: "fa fa-play-circle-o",
      label: <p>&#xf01d; fa-play-circle-o</p>
    },
    {
      value: "fa fa-repeat",
      label: <p>&#xf01e; fa-repeat</p>
    },
    {
      value: "fa fa-refresh",
      label: <p>&#xf021; fa-refresh</p>
    },
    {
      value: "fa fa-list-alt",
      label: <p>&#xf022; fa-list-alt</p>
    },
    {
      value: "fa fa-lock",
      label: <p>&#xf023; fa-lock</p>
    },
    {
      value: "fa fa-flag",
      label: <p>&#xf024; fa-flag</p>
    },
    {
      value: "fa fa-headphones",
      label: <p>&#xf025; fa-headphones</p>
    },
    {
      value: "fa fa-volume-off",
      label: <p>&#xf026; fa-volume-off</p>
    },
    {
      value: "fa fa-volume-down",
      label: <p>&#xf027; fa-volume-down</p>
    },
    {
      value: "fa fa-volume-up",
      label: <p>&#xf028; fa-volume-up</p>
    },
    {
      value: "fa fa-qrcode",
      label: <p>&#xf029; fa-qrcode</p>
    },
    {
      value: "fa fa-barcode",
      label: <p>&#xf02a; fa-barcode</p>
    },
    {
      value: "fa fa-tag",
      label: <p>&#xf02b; fa-tag</p>
    },
    {
      value: "fa fa-tags",
      label: <p>&#xf02c; fa-tags</p>
    },
    {
      value: "fa fa-book",
      label: <p>&#xf02d; fa-book</p>
    },
    {
      value: "fa fa-bookmark",
      label: <p>&#xf02e; fa-bookmark</p>
    },
    {
      value: "fa fa-print",
      label: <p>&#xf02f; fa-print</p>
    },
    {
      value: "fa fa-camera",
      label: <p>&#xf030; fa-camera</p>
    },
    {
      value: "fa fa-font",
      label: <p>&#xf031; fa-font</p>
    },
    {
      value: "fa fa-bold",
      label: <p>&#xf032; fa-bold</p>
    },
    {
      value: "fa fa-italic",
      label: <p>&#xf033; fa-italic</p>
    },
    {
      value: "fa fa-text-height",
      label: <p>&#xf034; fa-text-height</p>
    },
    {
      value: "fa fa-text-width",
      label: <p>&#xf035; fa-text-width</p>
    },
    {
      value: "fa fa-align-left",
      label: <p>&#xf036; fa-align-left</p>
    },
    {
      value: "fa fa-align-center",
      label: <p>&#xf037; fa-align-center</p>
    },
    {
      value: "fa fa-align-right",
      label: <p>&#xf038; fa-align-right</p>
    },
    {
      value: "fa fa-align-justify",
      label: <p>&#xf039; fa-align-justify</p>
    },
    {
      value: "fa fa-list",
      label: <p>&#xf03a; fa-list</p>
    },
    {
      value: "fa fa-outdent",
      label: <p>&#xf03b; fa-outdent</p>
    },
    {
      value: "fa fa-indent",
      label: <p>&#xf03c; fa-indent</p>
    },
    {
      value: "fa fa-video-camera",
      label: <p>&#xf03d; fa-video-camera</p>
    },
    {
      value: "fa fa-picture-o",
      label: <p>&#xf03e; fa-picture-o</p>
    },
    {
      value: "fa fa-pencil",
      label: <p>&#xf040; fa-pencil</p>
    },
    {
      value: "fa fa-map-marker",
      label: <p>&#xf041; fa-map-marker</p>
    },
    {
      value: "fa fa-adjust",
      label: <p>&#xf042; fa-adjust</p>
    },
    {
      value: "fa fa-tint",
      label: <p>&#xf043; fa-tint</p>
    },
    {
      value: "fa fa-pencil-square-o",
      label: <p>&#xf044; fa-pencil-square-o</p>
    },
    {
      value: "fa fa-share-square-o",
      label: <p>&#xf045; fa-share-square-o</p>
    },
    {
      value: "fa fa-check-square-o",
      label: <p>&#xf046; fa-check-square-o</p>
    },
    {
      value: "fa fa-arrows",
      label: <p>&#xf047; fa-arrows</p>
    },
    {
      value: "fa fa-step-backward",
      label: <p>&#xf048; fa-step-backward</p>
    },
    {
      value: "fa fa-fast-backward",
      label: <p>&#xf049; fa-fast-backward</p>
    },
    {
      value: "fa fa-backward",
      label: <p>&#xf04a; fa-backward</p>
    },
    {
      value: "fa fa-play",
      label: <p>&#xf04b; fa-play</p>
    },
    {
      value: "fa fa-pause",
      label: <p>&#xf04c; fa-pause</p>
    },
    {
      value: "fa fa-stop",
      label: <p>&#xf04d; fa-stop</p>
    },
    {
      value: "fa fa-forward",
      label: <p>&#xf04e; fa-forward</p>
    },
    {
      value: "fa fa-fast-forward",
      label: <p>&#xf050; fa-fast-forward</p>
    },
    {
      value: "fa fa-step-forward",
      label: <p>&#xf051; fa-step-forward</p>
    },
    {
      value: "fa fa-eject",
      label: <p>&#xf052; fa-eject</p>
    },
    {
      value: "fa fa-chevron-left",
      label: <p>&#xf053; fa-chevron-left</p>
    },
    {
      value: "fa fa-chevron-right",
      label: <p>&#xf054; fa-chevron-right</p>
    },
    {
      value: "fa fa-plus-circle",
      label: <p>&#xf055; fa-plus-circle</p>
    },
    {
      value: "fa fa-minus-circle",
      label: <p>&#xf056; fa-minus-circle</p>
    },
    {
      value: "fa fa-times-circle",
      label: <p>&#xf057; fa-times-circle</p>
    },
    {
      value: "fa fa-check-circle",
      label: <p>&#xf058; fa-check-circle</p>
    },
    {
      value: "fa fa-question-circle",
      label: <p>&#xf059; fa-question-circle</p>
    },
    {
      value: "fa fa-info-circle",
      label: <p>&#xf05a; fa-info-circle</p>
    },
    {
      value: "fa fa-crosshairs",
      label: <p>&#xf05b; fa-crosshairs</p>
    },
    {
      value: "fa fa-times-circle-o",
      label: <p>&#xf05c; fa-times-circle-o</p>
    },
    {
      value: "fa fa-check-circle-o",
      label: <p>&#xf05d; fa-check-circle-o</p>
    },
    {
      value: "fa fa-ban",
      label: <p>&#xf05e; fa-ban</p>
    },
    {
      value: "fa fa-arrow-left",
      label: <p>&#xf060; fa-arrow-left</p>
    },
    {
      value: "fa fa-arrow-right",
      label: <p>&#xf061; fa-arrow-right</p>
    },
    {
      value: "fa fa-arrow-up",
      label: <p>&#xf062; fa-arrow-up</p>
    },
    {
      value: "fa fa-arrow-down",
      label: <p>&#xf063; fa-arrow-down</p>
    },
    {
      value: "fa fa-share",
      label: <p>&#xf064; fa-share</p>
    },
    {
      value: "fa fa-expand",
      label: <p>&#xf065; fa-expand</p>
    },
    {
      value: "fa fa-compress",
      label: <p>&#xf066; fa-compress</p>
    },
    {
      value: "fa fa-plus",
      label: <p>&#xf067; fa-plus</p>
    },
    {
      value: "fa fa-minus",
      label: <p>&#xf068; fa-minus</p>
    },
    {
      value: "fa fa-asterisk",
      label: <p>&#xf069; fa-asterisk</p>
    },
    {
      value: "fa fa-exclamation-circle",
      label: <p>&#xf06a; fa-exclamation-circle</p>
    },
    {
      value: "fa fa-gift",
      label: <p>&#xf06b; fa-gift</p>
    },
    {
      value: "fa fa-leaf",
      label: <p>&#xf06c; fa-leaf</p>
    },
    {
      value: "fa fa-fire",
      label: <p>&#xf06d; fa-fire</p>
    },
    {
      value: "fa fa-eye",
      label: <p>&#xf06e; fa-eye</p>
    },
    {
      value: "fa fa-eye-slash",
      label: <p>&#xf070; fa-eye-slash</p>
    },
    {
      value: "fa fa-exclamation-triangle",
      label: <p>&#xf071; fa-exclamation-triangle</p>
    },
    {
      value: "fa fa-plane",
      label: <p>&#xf072; fa-plane</p>
    },
    {
      value: "fa fa-calendar",
      label: <p>&#xf073; fa-calendar</p>
    },
    {
      value: "fa fa-random",
      label: <p>&#xf074; fa-random</p>
    },
    {
      value: "fa fa-comment",
      label: <p>&#xf075; fa-comment</p>
    },
    {
      value: "fa fa-magnet",
      label: <p>&#xf076; fa-magnet</p>
    },
    {
      value: "fa fa-chevron-up",
      label: <p>&#xf077; fa-chevron-up</p>
    },
    {
      value: "fa fa-chevron-down",
      label: <p>&#xf078; fa-chevron-down</p>
    },
    {
      value: "fa fa-retweet",
      label: <p>&#xf079; fa-retweet</p>
    },
    {
      value: "fa fa-shopping-cart",
      label: <p>&#xf07a; fa-shopping-cart</p>
    },
    {
      value: "fa fa-folder",
      label: <p>&#xf07b; fa-folder</p>
    },
    {
      value: "fa fa-folder-open",
      label: <p>&#xf07c; fa-folder-open</p>
    },
    {
      value: "fa fa-arrows-v",
      label: <p>&#xf07d; fa-arrows-v</p>
    },
    {
      value: "fa fa-arrows-h",
      label: <p>&#xf07e; fa-arrows-h</p>
    },
    {
      value: "fa fa-bar-chart",
      label: <p>&#xf080; fa-bar-chart</p>
    },
    {
      value: "fa fa-twitter-square",
      label: <p>&#xf081; fa-twitter-square</p>
    },
    {
      value: "fa fa-facebook-square",
      label: <p>&#xf082; fa-facebook-square</p>
    },
    {
      value: "fa fa-camera-retro",
      label: <p>&#xf083; fa-camera-retro</p>
    },
    {
      value: "fa fa-key",
      label: <p>&#xf084; fa-key</p>
    },
    {
      value: "fa fa-cogs",
      label: <p>&#xf085; fa-cogs</p>
    },
    {
      value: "fa fa-comments",
      label: <p>&#xf086; fa-comments</p>
    },
    {
      value: "fa fa-thumbs-o-up",
      label: <p>&#xf087; fa-thumbs-o-up</p>
    },
    {
      value: "fa fa-thumbs-o-down",
      label: <p>&#xf088; fa-thumbs-o-down</p>
    },
    {
      value: "fa fa-star-half",
      label: <p>&#xf089; fa-star-half</p>
    },
    {
      value: "fa fa-heart-o",
      label: <p>&#xf08a; fa-heart-o</p>
    },
    {
      value: "fa fa-sign-out",
      label: <p>&#xf08b; fa-sign-out</p>
    },
    {
      value: "fa fa-linkedin-square",
      label: <p>&#xf08c; fa-linkedin-square</p>
    },
    {
      value: "fa fa-thumb-tack",
      label: <p>&#xf08d; fa-thumb-tack</p>
    },
    {
      value: "fa fa-external-link",
      label: <p>&#xf08e; fa-external-link</p>
    },
    {
      value: "fa fa-sign-in",
      label: <p>&#xf090; fa-sign-in</p>
    },
    {
      value: "fa fa-trophy",
      label: <p>&#xf091; fa-trophy</p>
    },
    {
      value: "fa fa-github-square",
      label: <p>&#xf092; fa-github-square</p>
    },
    {
      value: "fa fa-upload",
      label: <p>&#xf093; fa-upload</p>
    },
    {
      value: "fa fa-lemon-o",
      label: <p>&#xf094; fa-lemon-o</p>
    },
    {
      value: "fa fa-phone",
      label: <p>&#xf095; fa-phone</p>
    },
    {
      value: "fa fa-square-o",
      label: <p>&#xf096; fa-square-o</p>
    },
    {
      value: "fa fa-bookmark-o",
      label: <p>&#xf097; fa-bookmark-o</p>
    },
    {
      value: "fa fa-phone-square",
      label: <p>&#xf098; fa-phone-square</p>
    },
    {
      value: "fa fa-twitter",
      label: <p>&#xf099; fa-twitter</p>
    },
    {
      value: "fa fa-facebook",
      label: <p>&#xf09a; fa-facebook</p>
    },
    {
      value: "fa fa-github",
      label: <p>&#xf09b; fa-github</p>
    },
    {
      value: "fa fa-unlock",
      label: <p>&#xf09c; fa-unlock</p>
    },
    {
      value: "fa fa-credit-card",
      label: <p>&#xf09d; fa-credit-card</p>
    },
    {
      value: "fa fa-rss",
      label: <p>&#xf09e; fa-rss</p>
    },
    {
      value: "fa fa-hdd-o",
      label: <p>&#xf0a0; fa-hdd-o</p>
    },
    {
      value: "fa fa-bullhorn",
      label: <p>&#xf0a1; fa-bullhorn</p>
    },
    {
      value: "fa fa-bell",
      label: <p>&#xf0f3; fa-bell</p>
    },
    {
      value: "fa fa-certificate",
      label: <p>&#xf0a3; fa-certificate</p>
    },
    {
      value: "fa fa-hand-o-right",
      label: <p>&#xf0a4; fa-hand-o-right</p>
    },
    {
      value: "fa fa-hand-o-left",
      label: <p>&#xf0a5; fa-hand-o-left</p>
    },
    {
      value: "fa fa-hand-o-up",
      label: <p>&#xf0a6; fa-hand-o-up</p>
    },
    {
      value: "fa fa-hand-o-down",
      label: <p>&#xf0a7; fa-hand-o-down</p>
    },
    {
      value: "fa fa-arrow-circle-left",
      label: <p>&#xf0a8; fa-arrow-circle-left</p>
    },
    {
      value: "fa fa-arrow-circle-right",
      label: <p>&#xf0a9; fa-arrow-circle-right</p>
    },
    {
      value: "fa fa-arrow-circle-up",
      label: <p>&#xf0aa; fa-arrow-circle-up</p>
    },
    {
      value: "fa fa-arrow-circle-down",
      label: <p>&#xf0ab; fa-arrow-circle-down</p>
    },
    {
      value: "fa fa-globe",
      label: <p>&#xf0ac; fa-globe</p>
    },
    {
      value: "fa fa-wrench",
      label: <p>&#xf0ad; fa-wrench</p>
    },
    {
      value: "fa fa-tasks",
      label: <p>&#xf0ae; fa-tasks</p>
    },
    {
      value: "fa fa-filter",
      label: <p>&#xf0b0; fa-filter</p>
    },
    {
      value: "fa fa-briefcase",
      label: <p>&#xf0b1; fa-briefcase</p>
    },
    {
      value: "fa fa-arrows-alt",
      label: <p>&#xf0b2; fa-arrows-alt</p>
    },
    {
      value: "fa fa-users",
      label: <p>&#xf0c0; fa-users</p>
    },
    {
      value: "fa fa-link",
      label: <p>&#xf0c1; fa-link</p>
    },
    {
      value: "fa fa-cloud",
      label: <p>&#xf0c2; fa-cloud</p>
    },
    {
      value: "fa fa-flask",
      label: <p>&#xf0c3; fa-flask</p>
    },
    {
      value: "fa fa-scissors",
      label: <p>&#xf0c4; fa-scissors</p>
    },
    {
      value: "fa fa-files-o",
      label: <p>&#xf0c5; fa-files-o</p>
    },
    {
      value: "fa fa-paperclip",
      label: <p>&#xf0c6; fa-paperclip</p>
    },
    {
      value: "fa fa-floppy-o",
      label: <p>&#xf0c7; fa-floppy-o</p>
    },
    {
      value: "fa fa-square",
      label: <p>&#xf0c8; fa-square</p>
    },
    {
      value: "fa fa-bars",
      label: <p>&#xf0c9; fa-bars</p>
    },
    {
      value: "fa fa-list-ul",
      label: <p>&#xf0ca; fa-list-ul</p>
    },
    {
      value: "fa fa-list-ol",
      label: <p>&#xf0cb; fa-list-ol</p>
    },
    {
      value: "fa fa-strikethrough",
      label: <p>&#xf0cc; fa-strikethrough</p>
    },
    {
      value: "fa fa-underline",
      label: <p>&#xf0cd; fa-underline</p>
    },
    {
      value: "fa fa-table",
      label: <p>&#xf0ce; fa-table</p>
    },
    {
      value: "fa fa-magic",
      label: <p>&#xf0d0; fa-magic</p>
    },
    {
      value: "fa fa-truck",
      label: <p>&#xf0d1; fa-truck</p>
    },
    {
      value: "fa fa-pinterest",
      label: <p>&#xf0d2; fa-pinterest</p>
    },
    {
      value: "fa fa-pinterest-square",
      label: <p>&#xf0d3; fa-pinterest-square</p>
    },
    {
      value: "fa fa-google-plus-square",
      label: <p>&#xf0d4; fa-google-plus-square</p>
    },
    {
      value: "fa fa-google-plus",
      label: <p>&#xf0d5; fa-google-plus</p>
    },
    {
      value: "fa fa-money",
      label: <p>&#xf0d6; fa-money</p>
    },
    {
      value: "fa fa-caret-down",
      label: <p>&#xf0d7; fa-caret-down</p>
    },
    {
      value: "fa fa-caret-up",
      label: <p>&#xf0d8; fa-caret-up</p>
    },
    {
      value: "fa fa-caret-left",
      label: <p>&#xf0d9; fa-caret-left</p>
    },
    {
      value: "fa fa-caret-right",
      label: <p>&#xf0da; fa-caret-right</p>
    },
    {
      value: "fa fa-columns",
      label: <p>&#xf0db; fa-columns</p>
    },
    {
      value: "fa fa-sort",
      label: <p>&#xf0dc; fa-sort</p>
    },
    {
      value: "fa fa-sort-desc",
      label: <p>&#xf0dd; fa-sort-desc</p>
    },
    {
      value: "fa fa-sort-asc",
      label: <p>&#xf0de; fa-sort-asc</p>
    },
    {
      value: "fa fa-envelope",
      label: <p>&#xf0e0; fa-envelope</p>
    },
    {
      value: "fa fa-linkedin",
      label: <p>&#xf0e1; fa-linkedin</p>
    },
    {
      value: "fa fa-undo",
      label: <p>&#xf0e2; fa-undo</p>
    },
    {
      value: "fa fa-gavel",
      label: <p>&#xf0e3; fa-gavel</p>
    },
    {
      value: "fa fa-tachometer",
      label: <p>&#xf0e4; fa-tachometer</p>
    },
    {
      value: "fa fa-comment-o",
      label: <p>&#xf0e5; fa-comment-o</p>
    },
    {
      value: "fa fa-comments-o",
      label: <p>&#xf0e6; fa-comments-o</p>
    },
    {
      value: "fa fa-bolt",
      label: <p>&#xf0e7; fa-bolt</p>
    },
    {
      value: "fa fa-sitemap",
      label: <p>&#xf0e8; fa-sitemap</p>
    },
    {
      value: "fa fa-umbrella",
      label: <p>&#xf0e9; fa-umbrella</p>
    },
    {
      value: "fa fa-clipboard",
      label: <p>&#xf0ea; fa-clipboard</p>
    },
    {
      value: "fa fa-lightbulb-o",
      label: <p>&#xf0eb; fa-lightbulb-o</p>
    },
    {
      value: "fa fa-exchange",
      label: <p>&#xf0ec; fa-exchange</p>
    },
    {
      value: "fa fa-cloud-download",
      label: <p>&#xf0ed; fa-cloud-download</p>
    },
    {
      value: "fa fa-cloud-upload",
      label: <p>&#xf0ee; fa-cloud-upload</p>
    },
    {
      value: "fa fa-user-md",
      label: <p>&#xf0f0; fa-user-md</p>
    },
    {
      value: "fa fa-stethoscope",
      label: <p>&#xf0f1; fa-stethoscope</p>
    },
    {
      value: "fa fa-suitcase",
      label: <p>&#xf0f2; fa-suitcase</p>
    },
    {
      value: "fa fa-bell-o",
      label: <p>&#xf0a2; fa-bell-o</p>
    },
    {
      value: "fa fa-coffee",
      label: <p>&#xf0f4; fa-coffee</p>
    },
    {
      value: "fa fa-cutlery",
      label: <p>&#xf0f5; fa-cutlery</p>
    },
    {
      value: "fa fa-file-text-o",
      label: <p>&#xf0f6; fa-file-text-o</p>
    },
    {
      value: "fa fa-building-o",
      label: <p>&#xf0f7; fa-building-o</p>
    },
    {
      value: "fa fa-hospital-o",
      label: <p>&#xf0f8; fa-hospital-o</p>
    },
    {
      value: "fa fa-ambulance",
      label: <p>&#xf0f9; fa-ambulance</p>
    },
    {
      value: "fa fa-medkit",
      label: <p>&#xf0fa; fa-medkit</p>
    },
    {
      value: "fa fa-fighter-jet",
      label: <p>&#xf0fb; fa-fighter-jet</p>
    },
    {
      value: "fa fa-beer",
      label: <p>&#xf0fc; fa-beer</p>
    },
    {
      value: "fa fa-h-square",
      label: <p>&#xf0fd; fa-h-square</p>
    },
    {
      value: "fa fa-plus-square",
      label: <p>&#xf0fe; fa-plus-square</p>
    },
    {
      value: "fa fa-angle-double-left",
      label: <p>&#xf100; fa-angle-double-left</p>
    },
    {
      value: "fa fa-angle-double-right",
      label: <p>&#xf101; fa-angle-double-right</p>
    },
    {
      value: "fa fa-angle-double-up",
      label: <p>&#xf102; fa-angle-double-up</p>
    },
    {
      value: "fa fa-angle-double-down",
      label: <p>&#xf103; fa-angle-double-down</p>
    },
    {
      value: "fa fa-angle-left",
      label: <p>&#xf104; fa-angle-left</p>
    },
    {
      value: "fa fa-angle-right",
      label: <p>&#xf105; fa-angle-right</p>
    },
    {
      value: "fa fa-angle-up",
      label: <p>&#xf106; fa-angle-up</p>
    },
    {
      value: "fa fa-angle-down",
      label: <p>&#xf107; fa-angle-down</p>
    },
    {
      value: "fa fa-desktop",
      label: <p>&#xf108; fa-desktop</p>
    },
    {
      value: "fa fa-laptop",
      label: <p>&#xf109; fa-laptop</p>
    },
    {
      value: "fa fa-tablet",
      label: <p>&#xf10a; fa-tablet</p>
    },
    {
      value: "fa fa-mobile",
      label: <p>&#xf10b; fa-mobile</p>
    },
    {
      value: "fa fa-circle-o",
      label: <p>&#xf10c; fa-circle-o</p>
    },
    {
      value: "fa fa-quote-left",
      label: <p>&#xf10d; fa-quote-left</p>
    },
    {
      value: "fa fa-quote-right",
      label: <p>&#xf10e; fa-quote-right</p>
    },
    {
      value: "fa fa-spinner",
      label: <p>&#xf110; fa-spinner</p>
    },
    {
      value: "fa fa-circle",
      label: <p>&#xf111; fa-circle</p>
    },
    {
      value: "fa fa-reply",
      label: <p>&#xf112; fa-reply</p>
    },
    {
      value: "fa fa-github-alt",
      label: <p>&#xf113; fa-github-alt</p>
    },
    {
      value: "fa fa-folder-o",
      label: <p>&#xf114; fa-folder-o</p>
    },
    {
      value: "fa fa-folder-open-o",
      label: <p>&#xf115; fa-folder-open-o</p>
    },
    {
      value: "fa fa-smile-o",
      label: <p>&#xf118; fa-smile-o</p>
    },
    {
      value: "fa fa-frown-o",
      label: <p>&#xf119; fa-frown-o</p>
    },
    {
      value: "fa fa-meh-o",
      label: <p>&#xf11a; fa-meh-o</p>
    },
    {
      value: "fa fa-gamepad",
      label: <p>&#xf11b; fa-gamepad</p>
    },
    {
      value: "fa fa-keyboard-o",
      label: <p>&#xf11c; fa-keyboard-o</p>
    },
    {
      value: "fa fa-flag-o",
      label: <p>&#xf11d; fa-flag-o</p>
    },
    {
      value: "fa fa-flag-checkered",
      label: <p>&#xf11e; fa-flag-checkered</p>
    },
    {
      value: "fa fa-terminal",
      label: <p>&#xf120; fa-terminal</p>
    },
    {
      value: "fa fa-code",
      label: <p>&#xf121; fa-code</p>
    },
    {
      value: "fa fa-reply-all",
      label: <p>&#xf122; fa-reply-all</p>
    },
    {
      value: "fa fa-star-half-o",
      label: <p>&#xf123; fa-star-half-o</p>
    },
    {
      value: "fa fa-location-arrow",
      label: <p>&#xf124; fa-location-arrow</p>
    },
    {
      value: "fa fa-crop",
      label: <p>&#xf125; fa-crop</p>
    },
    {
      value: "fa fa-code-fork",
      label: <p>&#xf126; fa-code-fork</p>
    },
    {
      value: "fa fa-chain-broken",
      label: <p>&#xf127; fa-chain-broken</p>
    },
    {
      value: "fa fa-question",
      label: <p>&#xf128; fa-question</p>
    },
    {
      value: "fa fa-info",
      label: <p>&#xf129; fa-info</p>
    },
    {
      value: "fa fa-exclamation",
      label: <p>&#xf12a; fa-exclamation</p>
    },
    {
      value: "fa fa-superscript",
      label: <p>&#xf12b; fa-superscript</p>
    },
    {
      value: "fa fa-subscript",
      label: <p>&#xf12c; fa-subscript</p>
    },
    {
      value: "fa fa-eraser",
      label: <p>&#xf12d; fa-eraser</p>
    },
    {
      value: "fa fa-puzzle-piece",
      label: <p>&#xf12e; fa-puzzle-piece</p>
    },
    {
      value: "fa fa-microphone",
      label: <p>&#xf130; fa-microphone</p>
    },
    {
      value: "fa fa-microphone-slash",
      label: <p>&#xf131; fa-microphone-slash</p>
    },
    {
      value: "fa fa-shield",
      label: <p>&#xf132; fa-shield</p>
    },
    {
      value: "fa fa-calendar-o",
      label: <p>&#xf133; fa-calendar-o</p>
    },
    {
      value: "fa fa-fire-extinguisher",
      label: <p>&#xf134; fa-fire-extinguisher</p>
    },
    {
      value: "fa fa-rocket",
      label: <p>&#xf135; fa-rocket</p>
    },
    {
      value: "fa fa-maxcdn",
      label: <p>&#xf136; fa-maxcdn</p>
    },
    {
      value: "fa fa-chevron-circle-left",
      label: <p>&#xf137; fa-chevron-circle-left</p>
    },
    {
      value: "fa fa-chevron-circle-right",
      label: <p>&#xf138; fa-chevron-circle-right</p>
    },
    {
      value: "fa fa-chevron-circle-up",
      label: <p>&#xf139; fa-chevron-circle-up</p>
    },
    {
      value: "fa fa-chevron-circle-down",
      label: <p>&#xf13a; fa-chevron-circle-down</p>
    },
    {
      value: "fa fa-html5",
      label: <p>&#xf13b; fa-html5</p>
    },
    {
      value: "fa fa-css3",
      label: <p>&#xf13c; fa-css3</p>
    },
    {
      value: "fa fa-anchor",
      label: <p>&#xf13d; fa-anchor</p>
    },
    {
      value: "fa fa-unlock-alt",
      label: <p>&#xf13e; fa-unlock-alt</p>
    },
    {
      value: "fa fa-bullseye",
      label: <p>&#xf140; fa-bullseye</p>
    },
    {
      value: "fa fa-ellipsis-h",
      label: <p>&#xf141; fa-ellipsis-h</p>
    },
    {
      value: "fa fa-ellipsis-v",
      label: <p>&#xf142; fa-ellipsis-v</p>
    },
    {
      value: "fa fa-rss-square",
      label: <p>&#xf143; fa-rss-square</p>
    },
    {
      value: "fa fa-play-circle",
      label: <p>&#xf144; fa-play-circle</p>
    },
    {
      value: "fa fa-ticket",
      label: <p>&#xf145; fa-ticket</p>
    },
    {
      value: "fa fa-minus-square",
      label: <p>&#xf146; fa-minus-square</p>
    },
    {
      value: "fa fa-minus-square-o",
      label: <p>&#xf147; fa-minus-square-o</p>
    },
    {
      value: "fa fa-level-up",
      label: <p>&#xf148; fa-level-up</p>
    },
    {
      value: "fa fa-level-down",
      label: <p>&#xf149; fa-level-down</p>
    },
    {
      value: "fa fa-check-square",
      label: <p>&#xf14a; fa-check-square</p>
    },
    {
      value: "fa fa-pencil-square",
      label: <p>&#xf14b; fa-pencil-square</p>
    },
    {
      value: "fa fa-external-link-square",
      label: <p>&#xf14c; fa-external-link-square</p>
    },
    {
      value: "fa fa-share-square",
      label: <p>&#xf14d; fa-share-square</p>
    },
    {
      value: "fa fa-compass",
      label: <p>&#xf14e; fa-compass</p>
    },
    {
      value: "fa fa-caret-square-o-down",
      label: <p>&#xf150; fa-caret-square-o-down</p>
    },
    {
      value: "fa fa-caret-square-o-up",
      label: <p>&#xf151; fa-caret-square-o-up</p>
    },
    {
      value: "fa fa-caret-square-o-right",
      label: <p>&#xf152; fa-caret-square-o-right</p>
    },
    {
      value: "fa fa-eur",
      label: <p>&#xf153; fa-eur</p>
    },
    {
      value: "fa fa-gbp",
      label: <p>&#xf154; fa-gbp</p>
    },
    {
      value: "fa fa-usd",
      label: <p>&#xf155; fa-usd</p>
    },
    {
      value: "fa fa-inr",
      label: <p>&#xf156; fa-inr</p>
    },
    {
      value: "fa fa-jpy",
      label: <p>&#xf157; fa-jpy</p>
    },
    {
      value: "fa fa-rub",
      label: <p>&#xf158; fa-rub</p>
    },
    {
      value: "fa fa-krw",
      label: <p>&#xf159; fa-krw</p>
    },
    {
      value: "fa fa-btc",
      label: <p>&#xf15a; fa-btc</p>
    },
    {
      value: "fa fa-file",
      label: <p>&#xf15b; fa-file</p>
    },
    {
      value: "fa fa-file-text",
      label: <p>&#xf15c; fa-file-text</p>
    },
    {
      value: "fa fa-sort-alpha-asc",
      label: <p>&#xf15d; fa-sort-alpha-asc</p>
    },
    {
      value: "fa fa-sort-alpha-desc",
      label: <p>&#xf15e; fa-sort-alpha-desc</p>
    },
    {
      value: "fa fa-sort-amount-asc",
      label: <p>&#xf160; fa-sort-amount-asc</p>
    },
    {
      value: "fa fa-sort-amount-desc",
      label: <p>&#xf161; fa-sort-amount-desc</p>
    },
    {
      value: "fa fa-sort-numeric-asc",
      label: <p>&#xf162; fa-sort-numeric-asc</p>
    },
    {
      value: "fa fa-sort-numeric-desc",
      label: <p>&#xf163; fa-sort-numeric-desc</p>
    },
    {
      value: "fa fa-thumbs-up",
      label: <p>&#xf164; fa-thumbs-up</p>
    },
    {
      value: "fa fa-thumbs-down",
      label: <p>&#xf165; fa-thumbs-down</p>
    },
    {
      value: "fa fa-youtube-square",
      label: <p>&#xf166; fa-youtube-square</p>
    },
    {
      value: "fa fa-youtube",
      label: <p>&#xf167; fa-youtube</p>
    },
    {
      value: "fa fa-xing",
      label: <p>&#xf168; fa-xing</p>
    },
    {
      value: "fa fa-xing-square",
      label: <p>&#xf169; fa-xing-square</p>
    },
    {
      value: "fa fa-youtube-play",
      label: <p>&#xf16a; fa-youtube-play</p>
    },
    {
      value: "fa fa-dropbox",
      label: <p>&#xf16b; fa-dropbox</p>
    },
    {
      value: "fa fa-stack-overflow",
      label: <p>&#xf16c; fa-stack-overflow</p>
    },
    {
      value: "fa fa-instagram",
      label: <p>&#xf16d; fa-instagram</p>
    },
    {
      value: "fa fa-flickr",
      label: <p>&#xf16e; fa-flickr</p>
    },
    {
      value: "fa fa-adn",
      label: <p>&#xf170; fa-adn</p>
    },
    {
      value: "fa fa-bitbucket",
      label: <p>&#xf171; fa-bitbucket</p>
    },
    {
      value: "fa fa-bitbucket-square",
      label: <p>&#xf172; fa-bitbucket-square</p>
    },
    {
      value: "fa fa-tumblr",
      label: <p>&#xf173; fa-tumblr</p>
    },
    {
      value: "fa fa-tumblr-square",
      label: <p>&#xf174; fa-tumblr-square</p>
    },
    {
      value: "fa fa-long-arrow-down",
      label: <p>&#xf175; fa-long-arrow-down</p>
    },
    {
      value: "fa fa-long-arrow-up",
      label: <p>&#xf176; fa-long-arrow-up</p>
    },
    {
      value: "fa fa-long-arrow-left",
      label: <p>&#xf177; fa-long-arrow-left</p>
    },
    {
      value: "fa fa-long-arrow-right",
      label: <p>&#xf178; fa-long-arrow-right</p>
    },
    {
      value: "fa fa-apple",
      label: <p>&#xf179; fa-apple</p>
    },
    {
      value: "fa fa-windows",
      label: <p>&#xf17a; fa-windows</p>
    },
    {
      value: "fa fa-android",
      label: <p>&#xf17b; fa-android</p>
    },
    {
      value: "fa fa-linux",
      label: <p>&#xf17c; fa-linux</p>
    },
    {
      value: "fa fa-dribbble",
      label: <p>&#xf17d; fa-dribbble</p>
    },
    {
      value: "fa fa-skype",
      label: <p>&#xf17e; fa-skype</p>
    },
    {
      value: "fa fa-foursquare",
      label: <p>&#xf180; fa-foursquare</p>
    },
    {
      value: "fa fa-trello",
      label: <p>&#xf181; fa-trello</p>
    },
    {
      value: "fa fa-female",
      label: <p>&#xf182; fa-female</p>
    },
    {
      value: "fa fa-male",
      label: <p>&#xf183; fa-male</p>
    },
    {
      value: "fa fa-gratipay",
      label: <p>&#xf184; fa-gratipay</p>
    },
    {
      value: "fa fa-sun-o",
      label: <p>&#xf185; fa-sun-o</p>
    },
    {
      value: "fa fa-moon-o",
      label: <p>&#xf186; fa-moon-o</p>
    },
    {
      value: "fa fa-archive",
      label: <p>&#xf187; fa-archive</p>
    },
    {
      value: "fa fa-bug",
      label: <p>&#xf188; fa-bug</p>
    },
    {
      value: "fa fa-vk",
      label: <p>&#xf189; fa-vk</p>
    },
    {
      value: "fa fa-weibo",
      label: <p>&#xf18a; fa-weibo</p>
    },
    {
      value: "fa fa-renren",
      label: <p>&#xf18b; fa-renren</p>
    },
    {
      value: "fa fa-pagelines",
      label: <p>&#xf18c; fa-pagelines</p>
    },
    {
      value: "fa fa-stack-exchange",
      label: <p>&#xf18d; fa-stack-exchange</p>
    },
    {
      value: "fa fa-arrow-circle-o-right",
      label: <p>&#xf18e; fa-arrow-circle-o-right</p>
    },
    {
      value: "fa fa-arrow-circle-o-left",
      label: <p>&#xf190; fa-arrow-circle-o-left</p>
    },
    {
      value: "fa fa-caret-square-o-left",
      label: <p>&#xf191; fa-caret-square-o-left</p>
    },
    {
      value: "fa fa-dot-circle-o",
      label: <p>&#xf192; fa-dot-circle-o</p>
    },
    {
      value: "fa fa-wheelchair",
      label: <p>&#xf193; fa-wheelchair</p>
    },
    {
      value: "fa fa-vimeo-square",
      label: <p>&#xf194; fa-vimeo-square</p>
    },
    {
      value: "fa fa-try",
      label: <p>&#xf195; fa-try</p>
    },
    {
      value: "fa fa-plus-square-o",
      label: <p>&#xf196; fa-plus-square-o</p>
    },
    {
      value: "fa fa-space-shuttle",
      label: <p>&#xf197; fa-space-shuttle</p>
    },
    {
      value: "fa fa-slack",
      label: <p>&#xf198; fa-slack</p>
    },
    {
      value: "fa fa-envelope-square",
      label: <p>&#xf199; fa-envelope-square</p>
    },
    {
      value: "fa fa-wordpress",
      label: <p>&#xf19a; fa-wordpress</p>
    },
    {
      value: "fa fa-openid",
      label: <p>&#xf19b; fa-openid</p>
    },
    {
      value: "fa fa-university",
      label: <p>&#xf19c; fa-university</p>
    },
    {
      value: "fa fa-graduation-cap",
      label: <p>&#xf19d; fa-graduation-cap</p>
    },
    {
      value: "fa fa-yahoo",
      label: <p>&#xf19e; fa-yahoo</p>
    },
    {
      value: "fa fa-google",
      label: <p>&#xf1a0; fa-google</p>
    },
    {
      value: "fa fa-reddit",
      label: <p>&#xf1a1; fa-reddit</p>
    },
    {
      value: "fa fa-reddit-square",
      label: <p>&#xf1a2; fa-reddit-square</p>
    },
    {
      value: "fa fa-stumbleupon-circle",
      label: <p>&#xf1a3; fa-stumbleupon-circle</p>
    },
    {
      value: "fa fa-stumbleupon",
      label: <p>&#xf1a4; fa-stumbleupon</p>
    },
    {
      value: "fa fa-delicious",
      label: <p>&#xf1a5; fa-delicious</p>
    },
    {
      value: "fa fa-digg",
      label: <p>&#xf1a6; fa-digg</p>
    },
    {
      value: "fa fa-pied-piper-pp",
      label: <p>&#xf1a7; fa-pied-piper-pp</p>
    },
    {
      value: "fa fa-pied-piper-alt",
      label: <p>&#xf1a8; fa-pied-piper-alt</p>
    },
    {
      value: "fa fa-drupal",
      label: <p>&#xf1a9; fa-drupal</p>
    },
    {
      value: "fa fa-joomla",
      label: <p>&#xf1aa; fa-joomla</p>
    },
    {
      value: "fa fa-language",
      label: <p>&#xf1ab; fa-language</p>
    },
    {
      value: "fa fa-fax",
      label: <p>&#xf1ac; fa-fax</p>
    },
    {
      value: "fa fa-building",
      label: <p>&#xf1ad; fa-building</p>
    },
    {
      value: "fa fa-child",
      label: <p>&#xf1ae; fa-child</p>
    },
    {
      value: "fa fa-paw",
      label: <p>&#xf1b0; fa-paw</p>
    },
    {
      value: "fa fa-spoon",
      label: <p>&#xf1b1; fa-spoon</p>
    },
    {
      value: "fa fa-cube",
      label: <p>&#xf1b2; fa-cube</p>
    },
    {
      value: "fa fa-cubes",
      label: <p>&#xf1b3; fa-cubes</p>
    },
    {
      value: "fa fa-behance",
      label: <p>&#xf1b4; fa-behance</p>
    },
    {
      value: "fa fa-behance-square",
      label: <p>&#xf1b5; fa-behance-square</p>
    },
    {
      value: "fa fa-steam",
      label: <p>&#xf1b6; fa-steam</p>
    },
    {
      value: "fa fa-steam-square",
      label: <p>&#xf1b7; fa-steam-square</p>
    },
    {
      value: "fa fa-recycle",
      label: <p>&#xf1b8; fa-recycle</p>
    },
    {
      value: "fa fa-car",
      label: <p>&#xf1b9; fa-car</p>
    },
    {
      value: "fa fa-taxi",
      label: <p>&#xf1ba; fa-taxi</p>
    },
    {
      value: "fa fa-tree",
      label: <p>&#xf1bb; fa-tree</p>
    },
    {
      value: "fa fa-spotify",
      label: <p>&#xf1bc; fa-spotify</p>
    },
    {
      value: "fa fa-deviantart",
      label: <p>&#xf1bd; fa-deviantart</p>
    },
    {
      value: "fa fa-soundcloud",
      label: <p>&#xf1be; fa-soundcloud</p>
    },
    {
      value: "fa fa-database",
      label: <p>&#xf1c0; fa-database</p>
    },
    {
      value: "fa fa-file-pdf-o",
      label: <p>&#xf1c1; fa-file-pdf-o</p>
    },
    {
      value: "fa fa-file-word-o",
      label: <p>&#xf1c2; fa-file-word-o</p>
    },
    {
      value: "fa fa-file-excel-o",
      label: <p>&#xf1c3; fa-file-excel-o</p>
    },
    {
      value: "fa fa-file-powerpoint-o",
      label: <p>&#xf1c4; fa-file-powerpoint-o</p>
    },
    {
      value: "fa fa-file-image-o",
      label: <p>&#xf1c5; fa-file-image-o</p>
    },
    {
      value: "fa fa-file-archive-o",
      label: <p>&#xf1c6; fa-file-archive-o</p>
    },
    {
      value: "fa fa-file-audio-o",
      label: <p>&#xf1c7; fa-file-audio-o</p>
    },
    {
      value: "fa fa-file-video-o",
      label: <p>&#xf1c8; fa-file-video-o</p>
    },
    {
      value: "fa fa-file-code-o",
      label: <p>&#xf1c9; fa-file-code-o</p>
    },
    {
      value: "fa fa-vine",
      label: <p>&#xf1ca; fa-vine</p>
    },
    {
      value: "fa fa-codepen",
      label: <p>&#xf1cb; fa-codepen</p>
    },
    {
      value: "fa fa-jsfiddle",
      label: <p>&#xf1cc; fa-jsfiddle</p>
    },
    {
      value: "fa fa-life-ring",
      label: <p>&#xf1cd; fa-life-ring</p>
    },
    {
      value: "fa fa-circle-o-notch",
      label: <p>&#xf1ce; fa-circle-o-notch</p>
    },
    {
      value: "fa fa-rebel",
      label: <p>&#xf1d0; fa-rebel</p>
    },
    {
      value: "fa fa-empire",
      label: <p>&#xf1d1; fa-empire</p>
    },
    {
      value: "fa fa-git-square",
      label: <p>&#xf1d2; fa-git-square</p>
    },
    {
      value: "fa fa-git",
      label: <p>&#xf1d3; fa-git</p>
    },
    {
      value: "fa fa-hacker-news",
      label: <p>&#xf1d4; fa-hacker-news</p>
    },
    {
      value: "fa fa-tencent-weibo",
      label: <p>&#xf1d5; fa-tencent-weibo</p>
    },
    {
      value: "fa fa-qq",
      label: <p>&#xf1d6; fa-qq</p>
    },
    {
      value: "fa fa-weixin",
      label: <p>&#xf1d7; fa-weixin</p>
    },
    {
      value: "fa fa-paper-plane",
      label: <p>&#xf1d8; fa-paper-plane</p>
    },
    {
      value: "fa fa-paper-plane-o",
      label: <p>&#xf1d9; fa-paper-plane-o</p>
    },
    {
      value: "fa fa-history",
      label: <p>&#xf1da; fa-history</p>
    },
    {
      value: "fa fa-circle-thin",
      label: <p>&#xf1db; fa-circle-thin</p>
    },
    {
      value: "fa fa-header",
      label: <p>&#xf1dc; fa-header</p>
    },
    {
      value: "fa fa-paragraph",
      label: <p>&#xf1dd; fa-paragraph</p>
    },
    {
      value: "fa fa-sliders",
      label: <p>&#xf1de; fa-sliders</p>
    },
    {
      value: "fa fa-share-alt",
      label: <p>&#xf1e0; fa-share-alt</p>
    },
    {
      value: "fa fa-share-alt-square",
      label: <p>&#xf1e1; fa-share-alt-square</p>
    },
    {
      value: "fa fa-bomb",
      label: <p>&#xf1e2; fa-bomb</p>
    },
    {
      value: "fa fa-futbol-o",
      label: <p>&#xf1e3; fa-futbol-o</p>
    },
    {
      value: "fa fa-tty",
      label: <p>&#xf1e4; fa-tty</p>
    },
    {
      value: "fa fa-binoculars",
      label: <p>&#xf1e5; fa-binoculars</p>
    },
    {
      value: "fa fa-plug",
      label: <p>&#xf1e6; fa-plug</p>
    },
    {
      value: "fa fa-slideshare",
      label: <p>&#xf1e7; fa-slideshare</p>
    },
    {
      value: "fa fa-twitch",
      label: <p>&#xf1e8; fa-twitch</p>
    },
    {
      value: "fa fa-yelp",
      label: <p>&#xf1e9; fa-yelp</p>
    },
    {
      value: "fa fa-newspaper-o",
      label: <p>&#xf1ea; fa-newspaper-o</p>
    },
    {
      value: "fa fa-wifi",
      label: <p>&#xf1eb; fa-wifi</p>
    },
    {
      value: "fa fa-calculator",
      label: <p>&#xf1ec; fa-calculator</p>
    },
    {
      value: "fa fa-paypal",
      label: <p>&#xf1ed; fa-paypal</p>
    },
    {
      value: "fa fa-google-wallet",
      label: <p>&#xf1ee; fa-google-wallet</p>
    },
    {
      value: "fa fa-cc-visa",
      label: <p>&#xf1f0; fa-cc-visa</p>
    },
    {
      value: "fa fa-cc-mastercard",
      label: <p>&#xf1f1; fa-cc-mastercard</p>
    },
    {
      value: "fa fa-cc-discover",
      label: <p>&#xf1f2; fa-cc-discover</p>
    },
    {
      value: "fa fa-cc-amex",
      label: <p>&#xf1f3; fa-cc-amex</p>
    },
    {
      value: "fa fa-cc-paypal",
      label: <p>&#xf1f4; fa-cc-paypal</p>
    },
    {
      value: "fa fa-cc-stripe",
      label: <p>&#xf1f5; fa-cc-stripe</p>
    },
    {
      value: "fa fa-bell-slash",
      label: <p>&#xf1f6; fa-bell-slash</p>
    },
    {
      value: "fa fa-bell-slash-o",
      label: <p>&#xf1f7; fa-bell-slash-o</p>
    },
    {
      value: "fa fa-trash",
      label: <p>&#xf1f8; fa-trash</p>
    },
    {
      value: "fa fa-copyright",
      label: <p>&#xf1f9; fa-copyright</p>
    },
    {
      value: "fa fa-at",
      label: <p>&#xf1fa; fa-at</p>
    },
    {
      value: "fa fa-eyedropper",
      label: <p>&#xf1fb; fa-eyedropper</p>
    },
    {
      value: "fa fa-paint-brush",
      label: <p>&#xf1fc; fa-paint-brush</p>
    },
    {
      value: "fa fa-birthday-cake",
      label: <p>&#xf1fd; fa-birthday-cake</p>
    },
    {
      value: "fa fa-area-chart",
      label: <p>&#xf1fe; fa-area-chart</p>
    },
    {
      value: "fa fa-pie-chart",
      label: <p>&#xf200; fa-pie-chart</p>
    },
    {
      value: "fa fa-line-chart",
      label: <p>&#xf201; fa-line-chart</p>
    },
    {
      value: "fa fa-lastfm",
      label: <p>&#xf202; fa-lastfm</p>
    },
    {
      value: "fa fa-lastfm-square",
      label: <p>&#xf203; fa-lastfm-square</p>
    },
    {
      value: "fa fa-toggle-off",
      label: <p>&#xf204; fa-toggle-off</p>
    },
    {
      value: "fa fa-toggle-on",
      label: <p>&#xf205; fa-toggle-on</p>
    },
    {
      value: "fa fa-bicycle",
      label: <p>&#xf206; fa-bicycle</p>
    },
    {
      value: "fa fa-bus",
      label: <p>&#xf207; fa-bus</p>
    },
    {
      value: "fa fa-ioxhost",
      label: <p>&#xf208; fa-ioxhost</p>
    },
    {
      value: "fa fa-angellist",
      label: <p>&#xf209; fa-angellist</p>
    },
    {
      value: "fa fa-cc",
      label: <p>&#xf20a; fa-cc</p>
    },
    {
      value: "fa fa-ils",
      label: <p>&#xf20b; fa-ils</p>
    },
    {
      value: "fa fa-meanpath",
      label: <p>&#xf20c; fa-meanpath</p>
    },
    {
      value: "fa fa-buysellads",
      label: <p>&#xf20d; fa-buysellads</p>
    },
    {
      value: "fa fa-connectdevelop",
      label: <p>&#xf20e; fa-connectdevelop</p>
    },
    {
      value: "fa fa-dashcube",
      label: <p>&#xf210; fa-dashcube</p>
    },
    {
      value: "fa fa-forumbee",
      label: <p>&#xf211; fa-forumbee</p>
    },
    {
      value: "fa fa-leanpub",
      label: <p>&#xf212; fa-leanpub</p>
    },
    {
      value: "fa fa-sellsy",
      label: <p>&#xf213; fa-sellsy</p>
    },
    {
      value: "fa fa-shirtsinbulk",
      label: <p>&#xf214; fa-shirtsinbulk</p>
    },
    {
      value: "fa fa-simplybuilt",
      label: <p>&#xf215; fa-simplybuilt</p>
    },
    {
      value: "fa fa-skyatlas",
      label: <p>&#xf216; fa-skyatlas</p>
    },
    {
      value: "fa fa-cart-plus",
      label: <p>&#xf217; fa-cart-plus</p>
    },
    {
      value: "fa fa-cart-arrow-down",
      label: <p>&#xf218; fa-cart-arrow-down</p>
    },
    {
      value: "fa fa-diamond",
      label: <p>&#xf219; fa-diamond</p>
    },
    {
      value: "fa fa-ship",
      label: <p>&#xf21a; fa-ship</p>
    },
    {
      value: "fa fa-user-secret",
      label: <p>&#xf21b; fa-user-secret</p>
    },
    {
      value: "fa fa-motorcycle",
      label: <p>&#xf21c; fa-motorcycle</p>
    },
    {
      value: "fa fa-street-view",
      label: <p>&#xf21d; fa-street-view</p>
    },
    {
      value: "fa fa-heartbeat",
      label: <p>&#xf21e; fa-heartbeat</p>
    },
    {
      value: "fa fa-venus",
      label: <p>&#xf221; fa-venus</p>
    },
    {
      value: "fa fa-mars",
      label: <p>&#xf222; fa-mars</p>
    },
    {
      value: "fa fa-mercury",
      label: <p>&#xf223; fa-mercury</p>
    },
    {
      value: "fa fa-transgender",
      label: <p>&#xf224; fa-transgender</p>
    },
    {
      value: "fa fa-transgender-alt",
      label: <p>&#xf225; fa-transgender-alt</p>
    },
    {
      value: "fa fa-venus-double",
      label: <p>&#xf226; fa-venus-double</p>
    },
    {
      value: "fa fa-mars-double",
      label: <p>&#xf227; fa-mars-double</p>
    },
    {
      value: "fa fa-venus-mars",
      label: <p>&#xf228; fa-venus-mars</p>
    },
    {
      value: "fa fa-mars-stroke",
      label: <p>&#xf229; fa-mars-stroke</p>
    },
    {
      value: "fa fa-mars-stroke-v",
      label: <p>&#xf22a; fa-mars-stroke-v</p>
    },
    {
      value: "fa fa-mars-stroke-h",
      label: <p>&#xf22b; fa-mars-stroke-h</p>
    },
    {
      value: "fa fa-neuter",
      label: <p>&#xf22c; fa-neuter</p>
    },
    {
      value: "fa fa-genderless",
      label: <p>&#xf22d; fa-genderless</p>
    },
    {
      value: "fa fa-facebook-official",
      label: <p>&#xf230; fa-facebook-official</p>
    },
    {
      value: "fa fa-pinterest-p",
      label: <p>&#xf231; fa-pinterest-p</p>
    },
    {
      value: "fa fa-whatsapp",
      label: <p>&#xf232; fa-whatsapp</p>
    },
    {
      value: "fa fa-server",
      label: <p>&#xf233; fa-server</p>
    },
    {
      value: "fa fa-user-plus",
      label: <p>&#xf234; fa-user-plus</p>
    },
    {
      value: "fa fa-user-times",
      label: <p>&#xf235; fa-user-times</p>
    },
    {
      value: "fa fa-bed",
      label: <p>&#xf236; fa-bed</p>
    },
    {
      value: "fa fa-viacoin",
      label: <p>&#xf237; fa-viacoin</p>
    },
    {
      value: "fa fa-train",
      label: <p>&#xf238; fa-train</p>
    },
    {
      value: "fa fa-subway",
      label: <p>&#xf239; fa-subway</p>
    },
    {
      value: "fa fa-medium",
      label: <p>&#xf23a; fa-medium</p>
    },
    {
      value: "fa fa-y-combinator",
      label: <p>&#xf23b; fa-y-combinator</p>
    },
    {
      value: "fa fa-optin-monster",
      label: <p>&#xf23c; fa-optin-monster</p>
    },
    {
      value: "fa fa-opencart",
      label: <p>&#xf23d; fa-opencart</p>
    },
    {
      value: "fa fa-expeditedssl",
      label: <p>&#xf23e; fa-expeditedssl</p>
    },
    {
      value: "fa fa-battery-full",
      label: <p>&#xf240; fa-battery-full</p>
    },
    {
      value: "fa fa-battery-three-quarters",
      label: <p>&#xf241; fa-battery-three-quarters</p>
    },
    {
      value: "fa fa-battery-half",
      label: <p>&#xf242; fa-battery-half</p>
    },
    {
      value: "fa fa-battery-quarter",
      label: <p>&#xf243; fa-battery-quarter</p>
    },
    {
      value: "fa fa-battery-empty",
      label: <p>&#xf244; fa-battery-empty</p>
    },
    {
      value: "fa fa-mouse-pointer",
      label: <p>&#xf245; fa-mouse-pointer</p>
    },
    {
      value: "fa fa-i-cursor",
      label: <p>&#xf246; fa-i-cursor</p>
    },
    {
      value: "fa fa-object-group",
      label: <p>&#xf247; fa-object-group</p>
    },
    {
      value: "fa fa-object-ungroup",
      label: <p>&#xf248; fa-object-ungroup</p>
    },
    {
      value: "fa fa-sticky-note",
      label: <p>&#xf249; fa-sticky-note</p>
    },
    {
      value: "fa fa-sticky-note-o",
      label: <p>&#xf24a; fa-sticky-note-o</p>
    },
    {
      value: "fa fa-cc-jcb",
      label: <p>&#xf24b; fa-cc-jcb</p>
    },
    {
      value: "fa fa-cc-diners-club",
      label: <p>&#xf24c; fa-cc-diners-club</p>
    },
    {
      value: "fa fa-clone",
      label: <p>&#xf24d; fa-clone</p>
    },
    {
      value: "fa fa-balance-scale",
      label: <p>&#xf24e; fa-balance-scale</p>
    },
    {
      value: "fa fa-hourglass-o",
      label: <p>&#xf250; fa-hourglass-o</p>
    },
    {
      value: "fa fa-hourglass-start",
      label: <p>&#xf251; fa-hourglass-start</p>
    },
    {
      value: "fa fa-hourglass-half",
      label: <p>&#xf252; fa-hourglass-half</p>
    },
    {
      value: "fa fa-hourglass-end",
      label: <p>&#xf253; fa-hourglass-end</p>
    },
    {
      value: "fa fa-hourglass",
      label: <p>&#xf254; fa-hourglass</p>
    },
    {
      value: "fa fa-hand-rock-o",
      label: <p>&#xf255; fa-hand-rock-o</p>
    },
    {
      value: "fa fa-hand-paper-o",
      label: <p>&#xf256; fa-hand-paper-o</p>
    },
    {
      value: "fa fa-hand-scissors-o",
      label: <p>&#xf257; fa-hand-scissors-o</p>
    },
    {
      value: "fa fa-hand-lizard-o",
      label: <p>&#xf258; fa-hand-lizard-o</p>
    },
    {
      value: "fa fa-hand-spock-o",
      label: <p>&#xf259; fa-hand-spock-o</p>
    },
    {
      value: "fa fa-hand-pointer-o",
      label: <p>&#xf25a; fa-hand-pointer-o</p>
    },
    {
      value: "fa fa-hand-peace-o",
      label: <p>&#xf25b; fa-hand-peace-o</p>
    },
    {
      value: "fa fa-trademark",
      label: <p>&#xf25c; fa-trademark</p>
    },
    {
      value: "fa fa-registered",
      label: <p>&#xf25d; fa-registered</p>
    },
    {
      value: "fa fa-creative-commons",
      label: <p>&#xf25e; fa-creative-commons</p>
    },
    {
      value: "fa fa-gg",
      label: <p>&#xf260; fa-gg</p>
    },
    {
      value: "fa fa-gg-circle",
      label: <p>&#xf261; fa-gg-circle</p>
    },
    {
      value: "fa fa-tripadvisor",
      label: <p>&#xf262; fa-tripadvisor</p>
    },
    {
      value: "fa fa-odnoklassniki",
      label: <p>&#xf263; fa-odnoklassniki</p>
    },
    {
      value: "fa fa-odnoklassniki-square",
      label: <p>&#xf264; fa-odnoklassniki-square</p>
    },
    {
      value: "fa fa-get-pocket",
      label: <p>&#xf265; fa-get-pocket</p>
    },
    {
      value: "fa fa-wikipedia-w",
      label: <p>&#xf266; fa-wikipedia-w</p>
    },
    {
      value: "fa fa-safari",
      label: <p>&#xf267; fa-safari</p>
    },
    {
      value: "fa fa-chrome",
      label: <p>&#xf268; fa-chrome</p>
    },
    {
      value: "fa fa-firefox",
      label: <p>&#xf269; fa-firefox</p>
    },
    {
      value: "fa fa-opera",
      label: <p>&#xf26a; fa-opera</p>
    },
    {
      value: "fa fa-internet-explorer",
      label: <p>&#xf26b; fa-internet-explorer</p>
    },
    {
      value: "fa fa-television",
      label: <p>&#xf26c; fa-television</p>
    },
    {
      value: "fa fa-contao",
      label: <p>&#xf26d; fa-contao</p>
    },
    {
      value: "fa fa-500px",
      label: <p>&#xf26e; fa-500px</p>
    },
    {
      value: "fa fa-amazon",
      label: <p>&#xf270; fa-amazon</p>
    },
    {
      value: "fa fa-calendar-plus-o",
      label: <p>&#xf271; fa-calendar-plus-o</p>
    },
    {
      value: "fa fa-calendar-minus-o",
      label: <p>&#xf272; fa-calendar-minus-o</p>
    },
    {
      value: "fa fa-calendar-times-o",
      label: <p>&#xf273; fa-calendar-times-o</p>
    },
    {
      value: "fa fa-calendar-check-o",
      label: <p>&#xf274; fa-calendar-check-o</p>
    },
    {
      value: "fa fa-industry",
      label: <p>&#xf275; fa-industry</p>
    },
    {
      value: "fa fa-map-pin",
      label: <p>&#xf276; fa-map-pin</p>
    },
    {
      value: "fa fa-map-signs",
      label: <p>&#xf277; fa-map-signs</p>
    },
    {
      value: "fa fa-map-o",
      label: <p>&#xf278; fa-map-o</p>
    },
    {
      value: "fa fa-map",
      label: <p>&#xf279; fa-map</p>
    },
    {
      value: "fa fa-commenting",
      label: <p>&#xf27a; fa-commenting</p>
    },
    {
      value: "fa fa-commenting-o",
      label: <p>&#xf27b; fa-commenting-o</p>
    },
    {
      value: "fa fa-houzz",
      label: <p>&#xf27c; fa-houzz</p>
    },
    {
      value: "fa fa-vimeo",
      label: <p>&#xf27d; fa-vimeo</p>
    },
    {
      value: "fa fa-black-tie",
      label: <p>&#xf27e; fa-black-tie</p>
    },
    {
      value: "fa fa-fonticons",
      label: <p>&#xf280; fa-fonticons</p>
    },
    {
      value: "fa fa-reddit-alien",
      label: <p>&#xf281; fa-reddit-alien</p>
    },
    {
      value: "fa fa-edge",
      label: <p>&#xf282; fa-edge</p>
    },
    {
      value: "fa fa-credit-card-alt",
      label: <p>&#xf283; fa-credit-card-alt</p>
    },
    {
      value: "fa fa-codiepie",
      label: <p>&#xf284; fa-codiepie</p>
    },
    {
      value: "fa fa-modx",
      label: <p>&#xf285; fa-modx</p>
    },
    {
      value: "fa fa-fort-awesome",
      label: <p>&#xf286; fa-fort-awesome</p>
    },
    {
      value: "fa fa-usb",
      label: <p>&#xf287; fa-usb</p>
    },
    {
      value: "fa fa-product-hunt",
      label: <p>&#xf288; fa-product-hunt</p>
    },
    {
      value: "fa fa-mixcloud",
      label: <p>&#xf289; fa-mixcloud</p>
    },
    {
      value: "fa fa-scribd",
      label: <p>&#xf28a; fa-scribd</p>
    },
    {
      value: "fa fa-pause-circle",
      label: <p>&#xf28b; fa-pause-circle</p>
    },
    {
      value: "fa fa-pause-circle-o",
      label: <p>&#xf28c; fa-pause-circle-o</p>
    },
    {
      value: "fa fa-stop-circle",
      label: <p>&#xf28d; fa-stop-circle</p>
    },
    {
      value: "fa fa-stop-circle-o",
      label: <p>&#xf28e; fa-stop-circle-o</p>
    },
    {
      value: "fa fa-shopping-bag",
      label: <p>&#xf290; fa-shopping-bag</p>
    },
    {
      value: "fa fa-shopping-basket",
      label: <p>&#xf291; fa-shopping-basket</p>
    },
    {
      value: "fa fa-hashtag",
      label: <p>&#xf292; fa-hashtag</p>
    },
    {
      value: "fa fa-bluetooth",
      label: <p>&#xf293; fa-bluetooth</p>
    },
    {
      value: "fa fa-bluetooth-b",
      label: <p>&#xf294; fa-bluetooth-b</p>
    },
    {
      value: "fa fa-percent",
      label: <p>&#xf295; fa-percent</p>
    },
    {
      value: "fa fa-gitlab",
      label: <p>&#xf296; fa-gitlab</p>
    },
    {
      value: "fa fa-wpbeginner",
      label: <p>&#xf297; fa-wpbeginner</p>
    },
    {
      value: "fa fa-wpforms",
      label: <p>&#xf298; fa-wpforms</p>
    },
    {
      value: "fa fa-envira",
      label: <p>&#xf299; fa-envira</p>
    },
    {
      value: "fa fa-universal-access",
      label: <p>&#xf29a; fa-universal-access</p>
    },
    {
      value: "fa fa-wheelchair-alt",
      label: <p>&#xf29b; fa-wheelchair-alt</p>
    },
    {
      value: "fa fa-question-circle-o",
      label: <p>&#xf29c; fa-question-circle-o</p>
    },
    {
      value: "fa fa-blind",
      label: <p>&#xf29d; fa-blind</p>
    },
    {
      value: "fa fa-audio-description",
      label: <p>&#xf29e; fa-audio-description</p>
    },
    {
      value: "fa fa-volume-control-phone",
      label: <p>&#xf2a0; fa-volume-control-phone</p>
    },
    {
      value: "fa fa-braille",
      label: <p>&#xf2a1; fa-braille</p>
    },
    {
      value: "fa fa-assistive-listening-systems",
      label: <p>&#xf2a2; fa-assistive-listening-systems</p>
    },
    {
      value: "fa fa-american-sign-language-interpreting",
      label: <p>&#xf2a3; fa-american-sign-language-interpreting</p>
    },
    {
      value: "fa fa-deaf",
      label: <p>&#xf2a4; fa-deaf</p>
    },
    {
      value: "fa fa-glide",
      label: <p>&#xf2a5; fa-glide</p>
    },
    {
      value: "fa fa-glide-g",
      label: <p>&#xf2a6; fa-glide-g</p>
    },
    {
      value: "fa fa-sign-language",
      label: <p>&#xf2a7; fa-sign-language</p>
    },
    {
      value: "fa fa-low-vision",
      label: <p>&#xf2a8; fa-low-vision</p>
    },
    {
      value: "fa fa-viadeo",
      label: <p>&#xf2a9; fa-viadeo</p>
    },
    {
      value: "fa fa-viadeo-square",
      label: <p>&#xf2aa; fa-viadeo-square</p>
    },
    {
      value: "fa fa-snapchat",
      label: <p>&#xf2ab; fa-snapchat</p>
    },
    {
      value: "fa fa-snapchat-ghost",
      label: <p>&#xf2ac; fa-snapchat-ghost</p>
    },
    {
      value: "fa fa-snapchat-square",
      label: <p>&#xf2ad; fa-snapchat-square</p>
    },
    {
      value: "fa fa-pied-piper",
      label: <p>&#xf2ae; fa-pied-piper</p>
    },
    {
      value: "fa fa-first-order",
      label: <p>&#xf2b0; fa-first-order</p>
    },
    {
      value: "fa fa-yoast",
      label: <p>&#xf2b1; fa-yoast</p>
    },
    {
      value: "fa fa-themeisle",
      label: <p>&#xf2b2; fa-themeisle</p>
    },
    {
      value: "fa fa-google-plus-official",
      label: <p>&#xf2b3; fa-google-plus-official</p>
    },
    {
      value: "fa fa-font-awesome",
      label: <p>&#xf2b4; fa-font-awesome</p>
    }
  ];

  return (
    <SelectControl
      label={__("Choose Icon")}
      options={"fa" === type ? ICONS : DASHICONS}
      value={icon}
      onChange={onChangeIcon}
    />
  );
}
*/

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_dual_heading__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_banner__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_pricing_table__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_maps__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_testimonials__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_count_up__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_icon__ = __webpack_require__(13);








/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(1);



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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(1);



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
        value: 100,
        label: "100"
      }, {
        value: 200,
        label: "200"
      }, {
        value: 300,
        label: "300"
      }, {
        value: 400,
        label: "Normal"
      }, {
        value: 500,
        label: "500"
      }, {
        value: 600,
        label: "600"
      }, {
        value: 700,
        label: "700"
      }, {
        value: 800,
        label: "800"
      }, {
        value: 900,
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
          wp.element.createElement(RangeControl, {
            label: __("Font Weight"),
            min: "100",
            max: "900",
            step: "100",
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
          wp.element.createElement(RangeControl, {
            label: __("Font Weight"),
            min: "100",
            max: "900",
            step: "100",
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(1);



if (__WEBPACK_IMPORTED_MODULE_0__settings__["g" /* pricingTable */]) {
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


if (__WEBPACK_IMPORTED_MODULE_0__settings__["f" /* maps */]) {
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_default_image__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_testimonials_upper_quote__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_testimonials_lower_quote__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






if (__WEBPACK_IMPORTED_MODULE_3__settings__["h" /* testimonial */]) {
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
/* 9 */
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
      return wp.element.createElement("img", { src: imgURL });
    }
  }]);

  return DefaultImage;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (DefaultImage);

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_icon__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_premium_icon__);




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
          "icon" === icon && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_icon___default.a, {
            type: 1 == __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* FontAwesomeEnabled */] ? "fa" : "dash",
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_premium_border__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_premium_margin__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_premium_padding__ = __webpack_require__(15);


//import PremiumIcon from "../../components/premium-icon";




if (__WEBPACK_IMPORTED_MODULE_0__settings__["e" /* icon */]) {
  var className = "premium-icon";

  var __ = wp.i18n.__;
  var registerBlockType = wp.blocks.registerBlockType;
  var _wp$components = wp.components,
      PanelBody = _wp$components.PanelBody,
      Toolbar = _wp$components.Toolbar,
      SelectControl = _wp$components.SelectControl,
      RangeControl = _wp$components.RangeControl,
      TextControl = _wp$components.TextControl;
  var _wp$editor = wp.editor,
      InspectorControls = _wp$editor.InspectorControls,
      PanelColorSettings = _wp$editor.PanelColorSettings;


  registerBlockType("premium/icon", {
    title: __("Icon"),
    icon: "admin-customizer",
    category: "premium-blocks",
    attributes: {
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
        type: "string",
        default: "#54595f"
      },
      padding: {
        type: "string",
        default: "up"
      },
      paddingT: {
        type: "number",
        default: 25
      },
      paddingR: {
        type: "number",
        default: 25
      },
      paddingB: {
        type: "number",
        default: 25
      },
      paddingL: {
        type: "number",
        default: 25
      },
      margin: {
        type: "string",
        default: "up"
      },
      marginT: {
        type: "number",
        default: 5
      },
      marginR: {
        type: "number",
        default: 5
      },
      marginB: {
        type: "number",
        default: 5
      },
      marginL: {
        type: "number",
        default: 5
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
        type: "number",
        default: 25
      },
      wrapPaddingR: {
        type: "number",
        default: 25
      },
      wrapPaddingB: {
        type: "number",
        default: 25
      },
      wrapPaddingL: {
        type: "number",
        default: 25
      },
      wrapMargin: {
        type: "string",
        default: "up"
      },
      wrapMarginT: {
        type: "number",
        default: 5
      },
      wrapMarginR: {
        type: "number",
        default: 5
      },
      wrapMarginB: {
        type: "number",
        default: 5
      },
      wrapMarginL: {
        type: "number",
        default: 5
      }
    },
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
          wrapMarginL = _props$attributes.wrapMarginL;

      var iconClass = "fa" === iconType ? "fa fa-" + selectedIcon : "dashicons " + selectedIcon;
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
      var TYPE = [{
        value: "fa",
        label: "Font Awesome Icon"
      }, {
        value: "dash",
        label: "Dashicon"
      }];

      var ALIGNS = ["left", "center", "right"];

      return [isSelected && wp.element.createElement(
        InspectorControls,
        { key: "inspector" },
        wp.element.createElement(
          PanelBody,
          { title: __("Icon"), initialOpen: true },
          wp.element.createElement(SelectControl, {
            label: __("Icon Type"),
            value: iconType,
            options: TYPE,
            onChange: function onChange(newType) {
              return setAttributes({ iconType: newType });
            }
          }),
          ("" !== selectedIcon || "undefined" !== typeof selectedIcon) && wp.element.createElement(
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
            onChange: function onChange(newIcon) {
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
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Icon Style"), initialOpen: true },
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: iconColor,
              onChange: function onChange(colorValue) {
                return setAttributes({ iconColor: colorValue });
              },
              label: __("Color")
            }]
          }),
          wp.element.createElement(RangeControl, {
            label: __("Size (PX)"),
            value: iconSize,
            onChange: function onChange(newValue) {
              return setAttributes({ iconSize: newValue });
            }
          }),
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: iconBack,
              onChange: function onChange(colorValue) {
                return setAttributes({ iconBack: colorValue });
              },
              label: __("Background Color")
            }]
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
              return setAttributes({ borderWidth: newWidth });
            },
            onChangeColor: function onChangeColor(colorValue) {
              return setAttributes({ borderColor: colorValue });
            },
            onChangeRadius: function onChangeRadius(newrRadius) {
              return setAttributes({ borderRadius: newrRadius });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_margin__["a" /* default */], {
            marginTop: marginT,
            marginRight: marginR,
            marginBottom: marginB,
            marginLeft: marginL,
            onChangeMarTop: function onChangeMarTop(value) {
              return setAttributes({ marginT: value });
            },
            onChangeMarRight: function onChangeMarRight(value) {
              return setAttributes({ marginR: value });
            },
            onChangeMarBottom: function onChangeMarBottom(value) {
              return setAttributes({ marginB: value });
            },
            onChangeMarLeft: function onChangeMarLeft(value) {
              return setAttributes({ marginL: value });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_padding__["a" /* default */], {
            marginTop: paddingT,
            marginRight: paddingR,
            marginBottom: paddingB,
            marginLeft: paddingL,
            onChangePadTop: function onChangePadTop(value) {
              return setAttributes({ paddingT: value });
            },
            onChangePadRight: function onChangePadRight(value) {
              return setAttributes({ paddingR: value });
            },
            onChangePadBottom: function onChangePadBottom(value) {
              return setAttributes({ paddingB: value });
            },
            onChangePadLeft: function onChangePadLeft(value) {
              return setAttributes({ paddingL: value });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Container Style"), initialOpen: true },
          wp.element.createElement(PanelColorSettings, {
            colorSettings: [{
              value: background,
              onChange: function onChange(colorValue) {
                return setAttributes({ background: colorValue });
              },
              label: __("Background Color")
            }]
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_premium_border__["a" /* default */], {
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
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_premium_margin__["a" /* default */], {
            marginTop: wrapMarginT,
            marginRight: wrapMarginR,
            marginBottom: wrapMarginB,
            marginLeft: wrapMarginL,
            onChangeMarTop: function onChangeMarTop(value) {
              return setAttributes({ wrapMarginT: value });
            },
            onChangeMarRight: function onChangeMarRight(value) {
              return setAttributes({ wrapMarginR: value });
            },
            onChangeMarBottom: function onChangeMarBottom(value) {
              return setAttributes({ wrapMarginB: value });
            },
            onChangeMarLeft: function onChangeMarLeft(value) {
              return setAttributes({ wrapMarginL: value });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_premium_padding__["a" /* default */], {
            marginTop: wrapPaddingT,
            marginRight: wrapPaddingR,
            marginBottom: wrapPaddingB,
            marginLeft: wrapPaddingL,
            onChangePadTop: function onChangePadTop(value) {
              return setAttributes({ wrapPaddingT: value });
            },
            onChangePadRight: function onChangePadRight(value) {
              return setAttributes({ wrapPaddingR: value });
            },
            onChangePadBottom: function onChangePadBottom(value) {
              return setAttributes({ wrapPaddingB: value });
            },
            onChangePadLeft: function onChangePadLeft(value) {
              return setAttributes({ wrapPaddingL: value });
            }
          })
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
            borderColor: borderColor
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
          wrapMarginL = _props$attributes2.wrapMarginL;

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
      );
    }
  });
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PremiumMargin;
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var RangeControl = wp.components.RangeControl;

function PremiumMargin(props) {
  var marginTop = props.marginTop,
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
    wp.element.createElement(RangeControl, {
      label: __("Margin Top (PX)"),
      value: marginTop,
      min: "0",
      max: "150",
      onChange: onChangeMarTop
    }),
    wp.element.createElement(RangeControl, {
      label: __("Margin Right (PX)"),
      value: marginRight,
      min: "0",
      max: "150",
      onChange: onChangeMarRight
    }),
    wp.element.createElement(RangeControl, {
      label: __("Margin Bottom (PX)"),
      value: marginBottom,
      min: "0",
      max: "150",
      onChange: onChangeMarBottom
    }),
    wp.element.createElement(RangeControl, {
      label: __("Margin Left (PX)"),
      value: marginLeft,
      min: "0",
      max: "150",
      onChange: onChangeMarLeft
    })
  );
}

/***/ }),
/* 15 */
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

/***/ })
/******/ ]);