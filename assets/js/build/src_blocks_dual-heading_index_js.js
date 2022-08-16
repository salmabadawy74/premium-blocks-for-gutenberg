"use strict";
(self["webpackChunkpremium_blocks_for_gutenberg"] = self["webpackChunkpremium_blocks_for_gutenberg"] || []).push([["src_blocks_dual-heading_index_js"],{

/***/ "./src/blocks/dual-heading/attributes.js":
/*!***********************************************!*\
  !*** ./src/blocks/dual-heading/attributes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  __
} = wp.i18n;
const attributes = {
  blockId: {
    type: "string"
  },
  align: {
    type: "object",
    default: {
      'Desktop': 'center',
      'Tablet': 'center',
      'Mobile': 'center'
    }
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
  firstStyles: {
    type: "array",
    default: [{
      firstClip: false,
      firstAnim: false,
      firstStroke: false,
      firstColor: "",
      firstBackground: "",
      firstOpacity: "1",
      firstClipColor: "#54595f"
    }]
  },
  firstShadow: {
    type: "object",
    default: {
      color: "undefined",
      blur: "10",
      horizontal: "0",
      vertical: "0"
    }
  },
  firstTypography: {
    type: "object",
    default: {
      fontWeight: "400",
      fontStyle: "",
      fontFamily: "Default",
      textDecoration: "",
      textTransform: "",
      fontSize: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      },
      letterSpacing: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      },
      lineHeight: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      }
    }
  },
  secondStyles: {
    type: "array",
    default: [{
      secondClip: false,
      secondAnim: false,
      secondStroke: false,
      secondColor: "#54595f",
      secondBackground: "",
      secondOpacity: "",
      secondClipColor: "#6ec1e4",
      secondMarginL: "0",
      secondMarginR: "0",
      secondPadding: "0"
    }]
  },
  secondShadow: {
    type: "object",
    default: {
      color: "undefined",
      blur: "10",
      horizontal: "0",
      vertical: "0"
    }
  },
  secondTypography: {
    type: "object",
    default: {
      fontWeight: "400",
      fontStyle: "",
      textTransform: "",
      fontFamily: "Default",
      textDecoration: "",
      fontSize: {
        Desktop: "20",
        Tablet: "",
        Mobile: "",
        unit: "px"
      },
      letterSpacing: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      },
      lineHeight: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      }
    }
  },
  background: {
    type: "object",
    default: {
      backgroundType: "",
      backgroundColor: "",
      backgroundImageID: "",
      backgroundImageURL: "",
      backgroundPosition: "",
      backgroundRepeat: "",
      backgroundSize: "",
      fixed: false,
      gradientLocationOne: "0",
      gradientColorTwo: "",
      gradientLocationTwo: "100",
      gradientAngle: "180",
      gradientPosition: "center center",
      gradientType: ""
    }
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
  },
  hideDesktop: {
    type: "boolean",
    default: false
  },
  hideTablet: {
    type: "boolean",
    default: false
  },
  hideMobile: {
    type: "boolean",
    default: false
  },
  firstBorder: {
    type: "object",
    default: {
      borderType: "none",
      borderColor: "",
      borderWidth: {
        Desktop: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      },
      borderRadius: {
        Desktop: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      }
    }
  },
  secondBorder: {
    type: "object",
    default: {
      borderType: "none",
      borderColor: "",
      borderWidth: {
        Desktop: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      },
      borderRadius: {
        Desktop: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      }
    }
  },
  containerBorder: {
    type: "object",
    default: {
      borderType: "none",
      borderColor: "",
      borderWidth: {
        Desktop: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      },
      borderRadius: {
        Desktop: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Tablet: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        },
        Mobile: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      }
    }
  },
  firstPadding: {
    type: "object",
    default: {
      Desktop: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Tablet: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Mobile: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      unit: "px"
    }
  },
  firstMargin: {
    type: "object",
    default: {
      Desktop: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Tablet: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Mobile: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      unit: "px"
    }
  },
  secondPadding: {
    type: "object",
    default: {
      Desktop: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Tablet: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Mobile: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      unit: "px"
    }
  },
  secondMargin: {
    type: "object",
    default: {
      Desktop: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Tablet: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      Mobile: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      },
      unit: "px"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/blocks/dual-heading/deprecated.js":
/*!***********************************************!*\
  !*** ./src/blocks/dual-heading/deprecated.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./src/blocks/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hex-to-rgba */ "./node_modules/hex-to-rgba/build/index.js");
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__);


const {
  __
} = wp.i18n;
const className = "premium-dheading-block";

const attributes = {
  block_id: {
    type: "string"
  },
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
  firstSizeUnit: {
    type: "string",
    default: 'px'
  },
  firstSizeTablet: {
    type: "number"
  },
  firstSizeMobile: {
    type: "number"
  },
  firstFamily: {
    type: "string"
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
  firstOpacity: {
    type: "number",
    default: "1"
  },
  firstBorderType: {
    type: "string",
    default: "none"
  },
  firstBorderWidth: {
    type: "number",
    default: "1"
  },
  firstBorder: {
    type: "boolean",
    default: false
  },
  firstBorderTop: {
    type: "number"
  },
  firstBorderRight: {
    type: "number"
  },
  firstBorderBottom: {
    type: "number"
  },
  firstBorderLeft: {
    type: "number"
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
  firstStroke: {
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
  secondSizeUnit: {
    type: "string",
    default: 'px'
  },
  secondSizeTablet: {
    type: "number"
  },
  secondSizeMobile: {
    type: "number"
  },
  secondFamily: {
    type: "string"
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
  secondOpacity: {
    type: "number",
    default: "1"
  },
  secondBorderType: {
    type: "string",
    default: "none"
  },
  secondBorderWidth: {
    type: "number",
    default: "1"
  },
  secondBorder: {
    type: "boolean",
    default: false
  },
  secondBorderTop: {
    type: "number"
  },
  secondBorderRight: {
    type: "number"
  },
  secondBorderBottom: {
    type: "number"
  },
  secondBorderLeft: {
    type: "number"
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
  secondStroke: {
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
  },
  containerBack: {
    type: "string"
  },
  containerOpacity: {
    type: "number",
    default: "1"
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
  containerBorderType: {
    type: "string",
    default: "none"
  },
  containerBorderWidth: {
    type: "number",
    default: "1"
  },
  containerBorder: {
    type: "boolean",
    default: false
  },
  containerBorderTop: {
    type: "number"
  },
  containerBorderRight: {
    type: "number"
  },
  containerBorderBottom: {
    type: "number"
  },
  containerBorderLeft: {
    type: "number"
  },
  containerBorderRadius: {
    type: "number",
    default: "0"
  },
  containerBorderColor: {
    type: "string"
  },
  hideDesktop: {
    type: 'boolean',
    default: false
  },
  hideTablet: {
    type: 'boolean',
    default: false
  },
  hideMobile: {
    type: 'boolean',
    default: false
  }
};
const new_attributes = {
  firstStyles: {
    type: "array",
    default: [{
      firstClip: false,
      firstAnim: false,
      firstStroke: false,
      firstFamily: __('Default', 'premium-blocks-for-gutenebrg'),
      firstSizeUnit: 'px',
      firstSize: '',
      firstSizeMobile: '',
      firstWeight: '',
      firstStyle: '',
      firstLetter: '',
      firstUpper: false,
      firstColor: '',
      firstBackground: '',
      firstOpacity: '1',
      firstClipColor: "#54595f",
      firstBorderType: 'none',
      firstBorderWidth: '',
      firstBorderColor: '',
      firstBorderRadius: 0,
      firstShadowColor: '',
      firstShadowBlur: 0,
      firstShadowHorizontal: 0,
      firstShadowVertical: 0,
      firstMarginL: 0,
      firstMarginR: 0,
      firstPadding: 0
    }]
  },
  secondStyles: {
    type: "array",
    default: [{
      secondClip: false,
      secondAnim: false,
      secondStroke: false,
      secondFamily: __('Default', 'premium-blocks-for-gutenberg'),
      secondSizeUnit: 'px',
      secondSize: '20',
      secondSizeTablet: '',
      secondSizeMobile: '',
      secondWeight: '',
      secondStyle: '',
      secondLetter: '',
      secondUpper: false,
      secondColor: "#54595f",
      secondBackground: '',
      secondOpacity: '',
      secondClipColor: "#6ec1e4",
      secondBorderType: "none",
      secondBorderWidth: '1',
      secondBorderColor: '',
      secondBorderRadius: '0',
      secondShadowColor: '',
      secondShadowBlur: '0',
      secondShadowHorizontal: '0',
      secondShadowVertical: '0',
      secondMarginL: '0',
      secondMarginR: '0',
      secondPadding: '0'
    }]
  },
  containerStyles: {
    type: 'array',
    default: [{
      backgroundImageID: '',
      backgroundImageURL: '',
      backgroundRepeat: 'no-reapet',
      backgroundPosition: 'top center',
      backgroundSize: 'auto',
      fixed: false,
      containerBorderType: "none",
      containerBorderWidth: "1",
      containerBorderColor: '',
      containerBorderRadius: '0',
      containerBack: '',
      containerOpacity: 1,
      gradientLocationOne: '0',
      gradientColorTwo: '',
      gradientLocationTwo: '100',
      gradientType: 'linear',
      gradientAngle: '180',
      gradientPosition: 'center center'
    }]
  },
  backgroundType: {
    type: "string",
    default: ""
  }
};
const deprecated_attributes = Object.assign(attributes, new_attributes);
const v8Attriutes = {
  block_id: {
    type: "string"
  },
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
  firstStyles: {
    type: "array",
    default: [{
      firstClip: false,
      firstAnim: false,
      firstStroke: false,
      firstFamily: __('Default', 'premium-blocks-for-gutenebrg'),
      firstSizeUnit: 'px',
      firstSize: '',
      firstSizeMobile: '',
      firstWeight: '',
      firstStyle: '',
      firstLetter: '',
      firstUpper: false,
      firstColor: '',
      firstBackground: '',
      firstOpacity: '1',
      firstClipColor: "#54595f",
      firstBorderType: 'none',
      firstBorderWidth: '',
      firstBorderColor: '',
      firstBorderRadius: 0,
      firstShadowColor: '',
      firstShadowBlur: 0,
      firstShadowHorizontal: 0,
      firstShadowVertical: 0,
      firstMarginL: 0,
      firstMarginR: 0,
      firstPadding: 0
    }]
  },
  secondStyles: {
    type: "array",
    default: [{
      secondClip: false,
      secondAnim: false,
      secondStroke: false,
      secondFamily: __('Default', 'premium-blocks-for-gutenberg'),
      secondSizeUnit: 'px',
      secondSize: '20',
      secondSizeTablet: '',
      secondSizeMobile: '',
      secondWeight: '',
      secondStyle: '',
      secondLetter: '',
      secondUpper: false,
      secondColor: "#54595f",
      secondBackground: '',
      secondOpacity: '',
      secondClipColor: "#6ec1e4",
      secondBorderType: "none",
      secondBorderWidth: '1',
      secondBorderColor: '',
      secondBorderRadius: '0',
      secondShadowColor: '',
      secondShadowBlur: '0',
      secondShadowHorizontal: '0',
      secondShadowVertical: '0',
      secondMarginL: '0',
      secondMarginR: '0',
      secondPadding: '0'
    }]
  },
  containerStyles: {
    type: 'array',
    default: [{
      backgroundImageID: '',
      backgroundImageURL: '',
      backgroundRepeat: 'no-reapet',
      backgroundPosition: 'top center',
      backgroundSize: 'auto',
      fixed: false,
      containerBorderType: "none",
      containerBorderWidth: "1",
      containerBorderColor: '',
      containerBorderRadius: '0',
      containerBack: '',
      containerOpacity: 1,
      gradientLocationOne: '0',
      gradientColorTwo: '',
      gradientLocationTwo: '100',
      gradientType: 'linear',
      gradientAngle: '180',
      gradientPosition: 'center center'
    }]
  },
  containerBorder: {
    type: 'boolean',
    default: false
  },
  firstBorder: {
    type: 'boolean',
    default: false
  },
  secondBorder: {
    type: 'boolean',
    default: false
  },
  containerBorderTop: {
    type: 'number'
  },
  containerBorderRight: {
    type: 'number'
  },
  containerBorderBottom: {
    type: 'number'
  },
  containerBorderLeft: {
    type: 'number'
  },
  firstBorderTop: {
    type: 'number'
  },
  firstBorderRight: {
    type: 'number'
  },
  firstBorderBottom: {
    type: 'number'
  },
  firstBorderLeft: {
    type: 'number'
  },
  secondBorderTop: {
    type: 'number'
  },
  secondBorderRight: {
    type: 'number'
  },
  secondBorderBottom: {
    type: 'number'
  },
  secondBorderLeft: {
    type: 'number'
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
  },
  hideDesktop: {
    type: 'boolean',
    default: false
  },
  hideTablet: {
    type: 'boolean',
    default: false
  },
  hideMobile: {
    type: 'boolean',
    default: false
  },
  secondBorder: {
    type: 'boolean',
    default: false
  },
  backgroundType: {
    type: "string",
    default: ""
  }
};
const deprecatedContent = [{
  attributes: v8Attriutes,
  migrate: attributes => {
    var _attributes$firstStyl, _attributes$firstStyl2, _attributes$firstStyl3, _attributes$firstStyl4, _attributes$firstStyl5, _attributes$firstStyl6, _attributes$firstStyl7, _attributes$firstStyl8, _attributes$firstStyl9, _attributes$firstStyl10, _attributes$firstStyl11, _attributes$firstStyl12, _attributes$secondSty, _attributes$secondSty2, _attributes$secondSty3, _attributes$secondSty4, _attributes$secondSty5, _attributes$secondSty6, _attributes$secondSty7, _attributes$secondSty8, _attributes$secondSty9, _attributes$secondSty10, _attributes$secondSty11, _attributes$secondSty12, _attributes$container, _attributes$container2, _attributes$container3, _attributes$container4, _attributes$container5, _attributes$container6, _attributes$container7, _attributes$container8, _attributes$container9, _attributes$container10, _attributes$container11, _attributes$container12, _attributes$firstStyl13, _attributes$firstStyl14, _attributes$firstStyl15, _attributes$firstStyl16, _attributes$firstStyl17, _attributes$firstStyl18, _attributes$firstStyl19, _attributes$firstStyl20, _attributes$firstStyl21, _attributes$firstStyl22, _attributes$firstStyl23, _attributes$firstStyl24, _attributes$firstStyl25, _attributes$firstStyl26, _attributes$firstStyl27, _attributes$firstStyl28, _attributes$firstStyl29, _attributes$firstStyl30, _attributes$firstStyl31, _attributes$firstStyl32, _attributes$firstStyl33, _attributes$firstStyl34, _attributes$secondSty13, _attributes$secondSty14, _attributes$secondSty15, _attributes$secondSty16, _attributes$secondSty17, _attributes$secondSty18, _attributes$secondSty19, _attributes$secondSty20, _attributes$secondSty21, _attributes$secondSty22, _attributes$secondSty23, _attributes$secondSty24, _attributes$secondSty25, _attributes$secondSty26, _attributes$secondSty27, _attributes$secondSty28, _attributes$secondSty29, _attributes$secondSty30, _attributes$secondSty31, _attributes$secondSty32, _attributes$secondSty33, _attributes$secondSty34, _attributes$container13, _attributes$container14, _attributes$container15, _attributes$container16, _attributes$container17, _attributes$container18, _attributes$container19, _attributes$container20, _attributes$container21, _attributes$container22, _attributes$container23, _attributes$container24, _attributes$container25, _attributes$container26, _attributes$container27, _attributes$container28, _attributes$container29, _attributes$container30, _attributes$container31, _attributes$container32, _attributes$container33, _attributes$container34, _attributes$container35, _attributes$container36, _attributes$container37, _attributes$container38, _attributes$firstStyl35, _attributes$firstStyl36, _attributes$firstStyl37, _attributes$firstStyl38, _attributes$firstStyl39, _attributes$firstStyl40, _attributes$firstStyl41, _attributes$firstStyl42, _attributes$secondSty35, _attributes$secondSty36, _attributes$secondSty37, _attributes$secondSty38, _attributes$secondSty39, _attributes$secondSty40, _attributes$secondSty41, _attributes$secondSty42, _attributes$firstStyl43, _attributes$firstStyl44, _attributes$firstStyl45, _attributes$firstStyl46, _attributes$firstStyl47, _attributes$firstStyl48, _attributes$firstStyl49, _attributes$firstStyl50, _attributes$firstStyl51, _attributes$firstStyl52, _attributes$firstStyl53, _attributes$firstStyl54, _attributes$secondSty43, _attributes$secondSty44, _attributes$secondSty45, _attributes$secondSty46, _attributes$secondSty47, _attributes$secondSty48, _attributes$secondSty49, _attributes$secondSty50, _attributes$secondSty51, _attributes$secondSty52, _attributes$secondSty53, _attributes$secondSty54;

    let newAttributes = {
      blockId: attributes.accordionId ? `premium-dual-heading-${attributes.accordionId.split('-')[2]}` : '',
      firstBorder: {
        "borderType": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl = attributes.firstStyles) === null || _attributes$firstStyl === void 0 ? void 0 : (_attributes$firstStyl2 = _attributes$firstStyl[0]) === null || _attributes$firstStyl2 === void 0 ? void 0 : _attributes$firstStyl2.firstBorderType) || '',
        "borderColor": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl3 = attributes.firstStyles) === null || _attributes$firstStyl3 === void 0 ? void 0 : (_attributes$firstStyl4 = _attributes$firstStyl3[0]) === null || _attributes$firstStyl4 === void 0 ? void 0 : _attributes$firstStyl4.firstBorderColor) || '',
        "borderWidth": {
          Desktop: {
            top: (attributes === null || attributes === void 0 ? void 0 : attributes.firstBorderTop) || '',
            right: (attributes === null || attributes === void 0 ? void 0 : attributes.firstBorderRight) || '',
            bottom: (attributes === null || attributes === void 0 ? void 0 : attributes.firstBorderBottom) || '',
            left: (attributes === null || attributes === void 0 ? void 0 : attributes.firstBorderLeft) || ''
          },
          Tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          },
          Mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          }
        },
        "borderRadius": {
          Desktop: {
            top: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl5 = attributes.firstStyles) === null || _attributes$firstStyl5 === void 0 ? void 0 : (_attributes$firstStyl6 = _attributes$firstStyl5[0]) === null || _attributes$firstStyl6 === void 0 ? void 0 : _attributes$firstStyl6.firstBorderRadius) || '',
            right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl7 = attributes.firstStyles) === null || _attributes$firstStyl7 === void 0 ? void 0 : (_attributes$firstStyl8 = _attributes$firstStyl7[0]) === null || _attributes$firstStyl8 === void 0 ? void 0 : _attributes$firstStyl8.firstBorderRadius) || '',
            bottom: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl9 = attributes.firstStyles) === null || _attributes$firstStyl9 === void 0 ? void 0 : (_attributes$firstStyl10 = _attributes$firstStyl9[0]) === null || _attributes$firstStyl10 === void 0 ? void 0 : _attributes$firstStyl10.firstBorderRadius) || '',
            left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl11 = attributes.firstStyles) === null || _attributes$firstStyl11 === void 0 ? void 0 : (_attributes$firstStyl12 = _attributes$firstStyl11[0]) === null || _attributes$firstStyl12 === void 0 ? void 0 : _attributes$firstStyl12.firstBorderRadius) || ''
          },
          Tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          },
          Mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          }
        }
      },
      secondBorder: {
        "borderType": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty = attributes.secondStyles) === null || _attributes$secondSty === void 0 ? void 0 : (_attributes$secondSty2 = _attributes$secondSty[0]) === null || _attributes$secondSty2 === void 0 ? void 0 : _attributes$secondSty2.secondBorderType) || '',
        "borderColor": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty3 = attributes.secondStyles) === null || _attributes$secondSty3 === void 0 ? void 0 : (_attributes$secondSty4 = _attributes$secondSty3[0]) === null || _attributes$secondSty4 === void 0 ? void 0 : _attributes$secondSty4.secondBorderColor) || '',
        "borderWidth": {
          Desktop: {
            top: (attributes === null || attributes === void 0 ? void 0 : attributes.secondBorderTop) || '',
            right: (attributes === null || attributes === void 0 ? void 0 : attributes.secondBorderRight) || '',
            bottom: (attributes === null || attributes === void 0 ? void 0 : attributes.secondBorderBottom) || '',
            left: (attributes === null || attributes === void 0 ? void 0 : attributes.secondBorderLeft) || ''
          },
          Tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          },
          Mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          }
        },
        "borderRadius": {
          Desktop: {
            top: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty5 = attributes.secondStyles) === null || _attributes$secondSty5 === void 0 ? void 0 : (_attributes$secondSty6 = _attributes$secondSty5[0]) === null || _attributes$secondSty6 === void 0 ? void 0 : _attributes$secondSty6.secondBorderRadius) || '',
            right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty7 = attributes.secondStyles) === null || _attributes$secondSty7 === void 0 ? void 0 : (_attributes$secondSty8 = _attributes$secondSty7[0]) === null || _attributes$secondSty8 === void 0 ? void 0 : _attributes$secondSty8.secondBorderRadius) || '',
            bottom: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty9 = attributes.secondStyles) === null || _attributes$secondSty9 === void 0 ? void 0 : (_attributes$secondSty10 = _attributes$secondSty9[0]) === null || _attributes$secondSty10 === void 0 ? void 0 : _attributes$secondSty10.secondBorderRadius) || '',
            left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty11 = attributes.secondStyles) === null || _attributes$secondSty11 === void 0 ? void 0 : (_attributes$secondSty12 = _attributes$secondSty11[0]) === null || _attributes$secondSty12 === void 0 ? void 0 : _attributes$secondSty12.secondBorderRadius) || ''
          },
          Tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          },
          Mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          }
        }
      },
      containerBorder: {
        "borderType": (attributes === null || attributes === void 0 ? void 0 : (_attributes$container = attributes.containerStyles) === null || _attributes$container === void 0 ? void 0 : (_attributes$container2 = _attributes$container[0]) === null || _attributes$container2 === void 0 ? void 0 : _attributes$container2.containerBorderType) || '',
        "borderColor": (attributes === null || attributes === void 0 ? void 0 : (_attributes$container3 = attributes.containerStyles) === null || _attributes$container3 === void 0 ? void 0 : (_attributes$container4 = _attributes$container3[0]) === null || _attributes$container4 === void 0 ? void 0 : _attributes$container4.containerBorderColor) || '',
        "borderWidth": {
          Desktop: {
            top: (attributes === null || attributes === void 0 ? void 0 : attributes.containerBorderTop) || '',
            right: (attributes === null || attributes === void 0 ? void 0 : attributes.containerBorderRight) || '',
            bottom: (attributes === null || attributes === void 0 ? void 0 : attributes.containerBorderBottom) || '',
            left: (attributes === null || attributes === void 0 ? void 0 : attributes.containerBorderLeft) || ''
          },
          Tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          },
          Mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          }
        },
        "borderRadius": {
          Desktop: {
            top: (attributes === null || attributes === void 0 ? void 0 : (_attributes$container5 = attributes.containerStyles) === null || _attributes$container5 === void 0 ? void 0 : (_attributes$container6 = _attributes$container5[0]) === null || _attributes$container6 === void 0 ? void 0 : _attributes$container6.containerBorderRadius) || '',
            right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$container7 = attributes.containerStyles) === null || _attributes$container7 === void 0 ? void 0 : (_attributes$container8 = _attributes$container7[0]) === null || _attributes$container8 === void 0 ? void 0 : _attributes$container8.containerBorderRadius) || '',
            bottom: (attributes === null || attributes === void 0 ? void 0 : (_attributes$container9 = attributes.containerStyles) === null || _attributes$container9 === void 0 ? void 0 : (_attributes$container10 = _attributes$container9[0]) === null || _attributes$container10 === void 0 ? void 0 : _attributes$container10.containerBorderRadius) || '',
            left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$container11 = attributes.containerStyles) === null || _attributes$container11 === void 0 ? void 0 : (_attributes$container12 = _attributes$container11[0]) === null || _attributes$container12 === void 0 ? void 0 : _attributes$container12.containerBorderRadius) || ''
          },
          Tablet: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          },
          Mobile: {
            top: '',
            right: '',
            bottom: '',
            left: ''
          }
        }
      },
      firstTypography: {
        "fontWeight": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl13 = attributes.firstStyles) === null || _attributes$firstStyl13 === void 0 ? void 0 : (_attributes$firstStyl14 = _attributes$firstStyl13[0]) === null || _attributes$firstStyl14 === void 0 ? void 0 : _attributes$firstStyl14.firstWeight) || '',
        'fontStyle': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl15 = attributes.firstStyles) === null || _attributes$firstStyl15 === void 0 ? void 0 : (_attributes$firstStyl16 = _attributes$firstStyl15[0]) === null || _attributes$firstStyl16 === void 0 ? void 0 : _attributes$firstStyl16.firstStyle) || '',
        'textTransform': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl17 = attributes.firstStyles) === null || _attributes$firstStyl17 === void 0 ? void 0 : (_attributes$firstStyl18 = _attributes$firstStyl17[0]) === null || _attributes$firstStyl18 === void 0 ? void 0 : _attributes$firstStyl18.firstUpper) || '',
        'fontFamily': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl19 = attributes.firstStyles) === null || _attributes$firstStyl19 === void 0 ? void 0 : (_attributes$firstStyl20 = _attributes$firstStyl19[0]) === null || _attributes$firstStyl20 === void 0 ? void 0 : _attributes$firstStyl20.firstFamily) || '',
        'textDecoration': '',
        'lineHeight': {
          'Desktop': '',
          "Tablet": '',
          "Mobile": '',
          "unit": 'px'
        },
        'letterSpacing': {
          'Desktop': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl21 = attributes.firstStyles) === null || _attributes$firstStyl21 === void 0 ? void 0 : (_attributes$firstStyl22 = _attributes$firstStyl21[0]) === null || _attributes$firstStyl22 === void 0 ? void 0 : _attributes$firstStyl22.firstLetter) || '',
          "Tablet": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl23 = attributes.firstStyles) === null || _attributes$firstStyl23 === void 0 ? void 0 : (_attributes$firstStyl24 = _attributes$firstStyl23[0]) === null || _attributes$firstStyl24 === void 0 ? void 0 : _attributes$firstStyl24.firstLetter) || '',
          "Mobile": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl25 = attributes.firstStyles) === null || _attributes$firstStyl25 === void 0 ? void 0 : (_attributes$firstStyl26 = _attributes$firstStyl25[0]) === null || _attributes$firstStyl26 === void 0 ? void 0 : _attributes$firstStyl26.firstLetter) || '',
          "unit": 'px'
        },
        'fontSize': {
          'Desktop': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl27 = attributes.firstStyles) === null || _attributes$firstStyl27 === void 0 ? void 0 : (_attributes$firstStyl28 = _attributes$firstStyl27[0]) === null || _attributes$firstStyl28 === void 0 ? void 0 : _attributes$firstStyl28.firstSize) || '',
          "Tablet": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl29 = attributes.firstStyles) === null || _attributes$firstStyl29 === void 0 ? void 0 : (_attributes$firstStyl30 = _attributes$firstStyl29[0]) === null || _attributes$firstStyl30 === void 0 ? void 0 : _attributes$firstStyl30.firstSizeTablet) || '',
          "Mobile": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl31 = attributes.firstStyles) === null || _attributes$firstStyl31 === void 0 ? void 0 : (_attributes$firstStyl32 = _attributes$firstStyl31[0]) === null || _attributes$firstStyl32 === void 0 ? void 0 : _attributes$firstStyl32.firstSizeMobile) || '',
          "unit": (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl33 = attributes.firstStyles) === null || _attributes$firstStyl33 === void 0 ? void 0 : (_attributes$firstStyl34 = _attributes$firstStyl33[0]) === null || _attributes$firstStyl34 === void 0 ? void 0 : _attributes$firstStyl34.firstSizeUnit) || 'px'
        }
      },
      secondTypography: {
        "fontWeight": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty13 = attributes.secondStyles) === null || _attributes$secondSty13 === void 0 ? void 0 : (_attributes$secondSty14 = _attributes$secondSty13[0]) === null || _attributes$secondSty14 === void 0 ? void 0 : _attributes$secondSty14.secondWeight) || '',
        'fontStyle': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty15 = attributes.secondStyles) === null || _attributes$secondSty15 === void 0 ? void 0 : (_attributes$secondSty16 = _attributes$secondSty15[0]) === null || _attributes$secondSty16 === void 0 ? void 0 : _attributes$secondSty16.secondStyle) || '',
        'textTransform': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty17 = attributes.secondStyles) === null || _attributes$secondSty17 === void 0 ? void 0 : (_attributes$secondSty18 = _attributes$secondSty17[0]) === null || _attributes$secondSty18 === void 0 ? void 0 : _attributes$secondSty18.secondUpper) || '',
        'fontFamily': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty19 = attributes.secondStyles) === null || _attributes$secondSty19 === void 0 ? void 0 : (_attributes$secondSty20 = _attributes$secondSty19[0]) === null || _attributes$secondSty20 === void 0 ? void 0 : _attributes$secondSty20.secondFamily) || '',
        'lineHeight': {
          'Desktop': '',
          "Tablet": '',
          "Mobile": '',
          "unit": 'px'
        },
        'letterSpacing': {
          'Desktop': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty21 = attributes.secondStyles) === null || _attributes$secondSty21 === void 0 ? void 0 : (_attributes$secondSty22 = _attributes$secondSty21[0]) === null || _attributes$secondSty22 === void 0 ? void 0 : _attributes$secondSty22.secondLetter) || '',
          "Tablet": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty23 = attributes.secondStyles) === null || _attributes$secondSty23 === void 0 ? void 0 : (_attributes$secondSty24 = _attributes$secondSty23[0]) === null || _attributes$secondSty24 === void 0 ? void 0 : _attributes$secondSty24.secondLetter) || '',
          "Mobile": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty25 = attributes.secondStyles) === null || _attributes$secondSty25 === void 0 ? void 0 : (_attributes$secondSty26 = _attributes$secondSty25[0]) === null || _attributes$secondSty26 === void 0 ? void 0 : _attributes$secondSty26.secondLetter) || '',
          "unit": 'px'
        },
        'textDecoration': '',
        'fontSize': {
          'Desktop': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty27 = attributes.secondStyles) === null || _attributes$secondSty27 === void 0 ? void 0 : (_attributes$secondSty28 = _attributes$secondSty27[0]) === null || _attributes$secondSty28 === void 0 ? void 0 : _attributes$secondSty28.secondSize) || '20',
          "Tablet": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty29 = attributes.secondStyles) === null || _attributes$secondSty29 === void 0 ? void 0 : (_attributes$secondSty30 = _attributes$secondSty29[0]) === null || _attributes$secondSty30 === void 0 ? void 0 : _attributes$secondSty30.secondSizeTablet) || '',
          "Mobile": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty31 = attributes.secondStyles) === null || _attributes$secondSty31 === void 0 ? void 0 : (_attributes$secondSty32 = _attributes$secondSty31[0]) === null || _attributes$secondSty32 === void 0 ? void 0 : _attributes$secondSty32.secondSizeMobile) || '',
          "unit": (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty33 = attributes.secondStyles) === null || _attributes$secondSty33 === void 0 ? void 0 : (_attributes$secondSty34 = _attributes$secondSty33[0]) === null || _attributes$secondSty34 === void 0 ? void 0 : _attributes$secondSty34.secondSizeUnit) || 'px'
        }
      },
      background: {
        'backgroundType': (attributes === null || attributes === void 0 ? void 0 : attributes.backgroundType) || '',
        'backgroundColor': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container13 = attributes.containerStyles) === null || _attributes$container13 === void 0 ? void 0 : (_attributes$container14 = _attributes$container13[0]) === null || _attributes$container14 === void 0 ? void 0 : _attributes$container14.containerBack) || '',
        'backgroundImageID': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container15 = attributes.containerStyles) === null || _attributes$container15 === void 0 ? void 0 : (_attributes$container16 = _attributes$container15[0]) === null || _attributes$container16 === void 0 ? void 0 : _attributes$container16.backgroundImageID) || '',
        'backgroundImageURL': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container17 = attributes.containerStyles) === null || _attributes$container17 === void 0 ? void 0 : (_attributes$container18 = _attributes$container17[0]) === null || _attributes$container18 === void 0 ? void 0 : _attributes$container18.backgroundImageURL) || '',
        'backgroundPosition': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container19 = attributes.containerStyles) === null || _attributes$container19 === void 0 ? void 0 : (_attributes$container20 = _attributes$container19[0]) === null || _attributes$container20 === void 0 ? void 0 : _attributes$container20.backgroundPosition) || '',
        'backgroundRepeat': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container21 = attributes.containerStyles) === null || _attributes$container21 === void 0 ? void 0 : (_attributes$container22 = _attributes$container21[0]) === null || _attributes$container22 === void 0 ? void 0 : _attributes$container22.backgroundRepeat) || '',
        'backgroundSize': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container23 = attributes.containerStyles) === null || _attributes$container23 === void 0 ? void 0 : (_attributes$container24 = _attributes$container23[0]) === null || _attributes$container24 === void 0 ? void 0 : _attributes$container24.backgroundSize) || '',
        'fixed': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container25 = attributes.containerStyles) === null || _attributes$container25 === void 0 ? void 0 : (_attributes$container26 = _attributes$container25[0]) === null || _attributes$container26 === void 0 ? void 0 : _attributes$container26.fixed) || '',
        'gradientLocationOne': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container27 = attributes.containerStyles) === null || _attributes$container27 === void 0 ? void 0 : (_attributes$container28 = _attributes$container27[0]) === null || _attributes$container28 === void 0 ? void 0 : _attributes$container28.gradientLocationOne) || '',
        'gradientColorTwo': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container29 = attributes.containerStyles) === null || _attributes$container29 === void 0 ? void 0 : (_attributes$container30 = _attributes$container29[0]) === null || _attributes$container30 === void 0 ? void 0 : _attributes$container30.gradientColorTwo) || '',
        'gradientLocationTwo': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container31 = attributes.containerStyles) === null || _attributes$container31 === void 0 ? void 0 : (_attributes$container32 = _attributes$container31[0]) === null || _attributes$container32 === void 0 ? void 0 : _attributes$container32.gradientLocationTwo) || '',
        'gradientAngle': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container33 = attributes.containerStyles) === null || _attributes$container33 === void 0 ? void 0 : (_attributes$container34 = _attributes$container33[0]) === null || _attributes$container34 === void 0 ? void 0 : _attributes$container34.gradientAngle) || '',
        'gradientPosition': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container35 = attributes.containerStyles) === null || _attributes$container35 === void 0 ? void 0 : (_attributes$container36 = _attributes$container35[0]) === null || _attributes$container36 === void 0 ? void 0 : _attributes$container36.gradientPosition) || '',
        'gradientType': (attributes === null || attributes === void 0 ? void 0 : (_attributes$container37 = attributes.containerStyles) === null || _attributes$container37 === void 0 ? void 0 : (_attributes$container38 = _attributes$container37[0]) === null || _attributes$container38 === void 0 ? void 0 : _attributes$container38.gradientType) || ''
      },
      firstShadow: {
        'color': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl35 = attributes.firstStyles) === null || _attributes$firstStyl35 === void 0 ? void 0 : (_attributes$firstStyl36 = _attributes$firstStyl35[0]) === null || _attributes$firstStyl36 === void 0 ? void 0 : _attributes$firstStyl36.firstShadowColor) || '',
        'blur': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl37 = attributes.firstStyles) === null || _attributes$firstStyl37 === void 0 ? void 0 : (_attributes$firstStyl38 = _attributes$firstStyl37[0]) === null || _attributes$firstStyl38 === void 0 ? void 0 : _attributes$firstStyl38.firstShadowBlur) || '',
        'horizontal': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl39 = attributes.firstStyles) === null || _attributes$firstStyl39 === void 0 ? void 0 : (_attributes$firstStyl40 = _attributes$firstStyl39[0]) === null || _attributes$firstStyl40 === void 0 ? void 0 : _attributes$firstStyl40.firstShadowHorizontal) || '',
        'vertical': (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl41 = attributes.firstStyles) === null || _attributes$firstStyl41 === void 0 ? void 0 : (_attributes$firstStyl42 = _attributes$firstStyl41[0]) === null || _attributes$firstStyl42 === void 0 ? void 0 : _attributes$firstStyl42.firstShadowVertical) || ''
      },
      secondShadow: {
        'color': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty35 = attributes.secondStyles) === null || _attributes$secondSty35 === void 0 ? void 0 : (_attributes$secondSty36 = _attributes$secondSty35[0]) === null || _attributes$secondSty36 === void 0 ? void 0 : _attributes$secondSty36.secondShadowColor) || '',
        'blur': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty37 = attributes.secondStyles) === null || _attributes$secondSty37 === void 0 ? void 0 : (_attributes$secondSty38 = _attributes$secondSty37[0]) === null || _attributes$secondSty38 === void 0 ? void 0 : _attributes$secondSty38.secondShadowBlur) || '',
        'horizontal': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty39 = attributes.secondStyles) === null || _attributes$secondSty39 === void 0 ? void 0 : (_attributes$secondSty40 = _attributes$secondSty39[0]) === null || _attributes$secondSty40 === void 0 ? void 0 : _attributes$secondSty40.secondShadowHorizontal) || '',
        'vertical': (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty41 = attributes.secondStyles) === null || _attributes$secondSty41 === void 0 ? void 0 : (_attributes$secondSty42 = _attributes$secondSty41[0]) === null || _attributes$secondSty42 === void 0 ? void 0 : _attributes$secondSty42.secondShadowVertical) || ''
      },
      firstPadding: {
        Desktop: {
          top: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl43 = attributes.firstStyles) === null || _attributes$firstStyl43 === void 0 ? void 0 : (_attributes$firstStyl44 = _attributes$firstStyl43[0]) === null || _attributes$firstStyl44 === void 0 ? void 0 : _attributes$firstStyl44.firstPadding) || '',
          right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl45 = attributes.firstStyles) === null || _attributes$firstStyl45 === void 0 ? void 0 : (_attributes$firstStyl46 = _attributes$firstStyl45[0]) === null || _attributes$firstStyl46 === void 0 ? void 0 : _attributes$firstStyl46.firstPadding) || '',
          bottom: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl47 = attributes.firstStyles) === null || _attributes$firstStyl47 === void 0 ? void 0 : (_attributes$firstStyl48 = _attributes$firstStyl47[0]) === null || _attributes$firstStyl48 === void 0 ? void 0 : _attributes$firstStyl48.firstPadding) || '',
          left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl49 = attributes.firstStyles) === null || _attributes$firstStyl49 === void 0 ? void 0 : (_attributes$firstStyl50 = _attributes$firstStyl49[0]) === null || _attributes$firstStyl50 === void 0 ? void 0 : _attributes$firstStyl50.firstPadding) || ''
        },
        Tablet: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        Mobile: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        unit: 'px'
      },
      firstMargin: {
        Desktop: {
          top: '',
          right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl51 = attributes.firstStyles) === null || _attributes$firstStyl51 === void 0 ? void 0 : (_attributes$firstStyl52 = _attributes$firstStyl51[0]) === null || _attributes$firstStyl52 === void 0 ? void 0 : _attributes$firstStyl52.firstMarginR) || '',
          bottom: '',
          left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$firstStyl53 = attributes.firstStyles) === null || _attributes$firstStyl53 === void 0 ? void 0 : (_attributes$firstStyl54 = _attributes$firstStyl53[0]) === null || _attributes$firstStyl54 === void 0 ? void 0 : _attributes$firstStyl54.firstMarginL) || ''
        },
        Tablet: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        Mobile: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        unit: 'px'
      },
      secondPadding: {
        Desktop: {
          top: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty43 = attributes.secondStyles) === null || _attributes$secondSty43 === void 0 ? void 0 : (_attributes$secondSty44 = _attributes$secondSty43[0]) === null || _attributes$secondSty44 === void 0 ? void 0 : _attributes$secondSty44.secondPadding) || '',
          right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty45 = attributes.secondStyles) === null || _attributes$secondSty45 === void 0 ? void 0 : (_attributes$secondSty46 = _attributes$secondSty45[0]) === null || _attributes$secondSty46 === void 0 ? void 0 : _attributes$secondSty46.secondPadding) || '',
          bottom: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty47 = attributes.secondStyles) === null || _attributes$secondSty47 === void 0 ? void 0 : (_attributes$secondSty48 = _attributes$secondSty47[0]) === null || _attributes$secondSty48 === void 0 ? void 0 : _attributes$secondSty48.secondPadding) || '',
          left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty49 = attributes.secondStyles) === null || _attributes$secondSty49 === void 0 ? void 0 : (_attributes$secondSty50 = _attributes$secondSty49[0]) === null || _attributes$secondSty50 === void 0 ? void 0 : _attributes$secondSty50.secondPadding) || ''
        },
        Tablet: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        Mobile: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        unit: 'px'
      },
      secondMargin: {
        Desktop: {
          top: '',
          right: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty51 = attributes.secondStyles) === null || _attributes$secondSty51 === void 0 ? void 0 : (_attributes$secondSty52 = _attributes$secondSty51[0]) === null || _attributes$secondSty52 === void 0 ? void 0 : _attributes$secondSty52.secondMarginR) || '',
          bottom: '',
          left: (attributes === null || attributes === void 0 ? void 0 : (_attributes$secondSty53 = attributes.secondStyles) === null || _attributes$secondSty53 === void 0 ? void 0 : (_attributes$secondSty54 = _attributes$secondSty53[0]) === null || _attributes$secondSty54 === void 0 ? void 0 : _attributes$secondSty54.secondMarginL) || ''
        },
        Tablet: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        Mobile: {
          top: '',
          right: '',
          bottom: '',
          left: ''
        },
        unit: 'px'
      }
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      className
    } = props;
    const {
      block_id,
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstStyles,
      secondStyles,
      containerStyles,
      link,
      target,
      headingURL,
      hideDesktop,
      hideTablet,
      hideMobile,
      containerBorderTop,
      containerBorderRight,
      containerBorderBottom,
      containerBorderLeft,
      firstBorderTop,
      firstBorderRight,
      firstBorderBottom,
      firstBorderLeft,
      secondBorderTop,
      secondBorderRight,
      secondBorderBottom,
      secondBorderLeft,
      firstBorder,
      secondBorder,
      containerBorder,
      backgroundType
    } = props.attributes;
    const mainClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container");
    let btnGrad, btnGrad2, btnbg;

    if (undefined !== backgroundType && 'gradient' === backgroundType) {
      btnGrad = 'transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack;
      btnGrad2 = undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777';

      if ('radial' === containerStyles[0].gradientType) {
        btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
      } else if ('radial' !== containerStyles[0].gradientType) {
        btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
      }
    } else {
      btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : '';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: `premium-dheading-block-${block_id}`,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container", `premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`),
      style: {
        textAlign: contentAlign,
        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
        backgroundImage: btnbg,
        backgroundRepeat: containerStyles[0].backgroundRepeat,
        backgroundPosition: containerStyles[0].backgroundPosition,
        backgroundSize: containerStyles[0].backgroundSize,
        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
        borderStyle: containerStyles[0].containerBorderType,
        borderWidth: containerBorder ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px` : containerStyles[0].containerBorderWidth + "px",
        borderRadius: containerStyles[0].containerBorderRadius + "px",
        borderColor: containerStyles[0].containerBorderColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-dheading-block__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `premium-dheading-block__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__first premium-headingc-${firstStyles[0].firstClip} premium-headinga-${firstStyles[0].firstAnim} premium-headings-${firstStyles[0].firstStroke}`,
      style: {
        display: display,
        color: firstStyles[0].firstColor,
        backgroundColor: firstStyles[0].firstClip ? "none" : firstStyles[0].firstBackground,
        backgroundImage: firstStyles[0].firstClip ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})` : "none",
        fontFamily: firstStyles[0].firstFamily,
        letterSpacing: firstStyles[0].firstLetter + "px",
        textTransform: firstStyles[0].firstUpper ? "uppercase" : "none",
        fontStyle: firstStyles[0].firstStyle,
        fontWeight: firstStyles[0].firstWeight,
        borderStyle: firstStyles[0].firstBorderType,
        borderWidth: firstBorder ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px` : firstStyles[0].firstBorderWidth + "px",
        borderRadius: firstStyles[0].firstBorderRadius + "px",
        borderColor: firstStyles[0].firstBorderColor,
        padding: firstStyles[0].firstPadding + "px",
        marginLeft: firstStyles[0].firstMarginL + "px",
        marginRight: firstStyles[0].firstMarginR + "px",
        textShadow: `${firstStyles[0].firstShadowHorizontal}px ${firstStyles[0].firstShadowVertical}px ${firstStyles[0].firstShadowBlur}px ${firstStyles[0].firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__second premium-headingc-${secondStyles[0].secondClip} premium-headinga-${secondStyles[0].secondAnim} premium-headings-${secondStyles[0].secondStroke}`,
      style: {
        display: display,
        color: secondStyles[0].secondColor,
        backgroundColor: secondStyles[0].secondClip ? "none" : secondStyles[0].secondBackground,
        backgroundImage: secondStyles[0].secondClip ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})` : "none",
        fontFamily: secondStyles[0].secondFamily,
        letterSpacing: secondStyles[0].secondLetter + "px",
        textTransform: secondStyles[0].secondUpper ? "uppercase" : "none",
        fontStyle: secondStyles[0].secondStyle,
        fontWeight: secondStyles[0].secondWeight,
        borderStyle: secondStyles[0].secondBorderType,
        borderWidth: secondBorder ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px` : secondStyles[0].secondBorderWidth + "px",
        borderRadius: secondStyles[0].secondBorderRadius + "px",
        borderColor: secondStyles[0].secondBorderColor,
        padding: secondStyles[0].secondPadding + "px",
        marginLeft: secondStyles[0].secondMarginL + "px",
        marginRight: secondStyles[0].secondMarginR + "px",
        textShadow: `${secondStyles[0].secondShadowHorizontal}px ${secondStyles[0].secondShadowVertical}px ${secondStyles[0].secondShadowBlur}px ${secondStyles[0].secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `premium-dheading-block__link`,
      href: link && headingURL,
      target: target && "_blank",
      rel: "noopener noreferrer"
    })));
  }
}, {
  attributes: deprecated_attributes,
  migrate: attributes => {
    let newAttributes = {
      firstStyles: [{
        firstClip: attributes.firstClip,
        firstAnim: attributes.firstAnim,
        firstStroke: attributes.firstStroke,
        firstFamily: attributes.firstFamily,
        firstSizeUnit: attributes.firstSizeUnit,
        firstSize: attributes.firstSize,
        firstSizeMobile: attributes.firstSizeMobile,
        firstWeight: attributes.firstWeight,
        firstStyle: attributes.firstStyle,
        firstLetter: attributes.firstLetter,
        firstUpper: attributes.firstUpper,
        firstColor: attributes.firstColor,
        firstBackground: attributes.firstBackground,
        firstOpacity: attributes.firstOpacity,
        firstClipColor: attributes.firstClipColor,
        firstBorderType: attributes.firstBorderType,
        firstBorderWidth: attributes.firstBorderWidth,
        firstBorderColor: attributes.firstBorderColor,
        firstBorderRadius: attributes.firstBorderRadius,
        firstShadowColor: attributes.firstShadowColor,
        firstShadowBlur: attributes.firstShadowBlur,
        firstShadowHorizontal: attributes.firstShadowHorizontal,
        firstShadowVertical: attributes.firstShadowVertical,
        firstMarginL: attributes.firstMarginL,
        firstMarginR: attributes.firstMarginR,
        firstPadding: attributes.firstPadding
      }],
      secondStyles: [{
        secondClip: attributes.secondClip,
        secondAnim: attributes.secondAnim,
        secondStroke: attributes.secondStroke,
        secondFamily: attributes.secondFamily,
        secondSizeUnit: attributes.secondSizeUnit,
        secondSize: attributes.secondSize,
        secondSizeTablet: attributes.secondSizeTablet,
        secondSizeMobile: attributes.secondSizeMobile,
        secondWeight: attributes.secondWeight,
        secondStyle: attributes.secondStyle,
        secondLetter: attributes.secondLetter,
        secondUpper: attributes.secondUpper,
        secondColor: attributes.secondColor,
        secondBackground: attributes.secondBackground,
        secondOpacity: attributes.secondOpacity,
        secondClipColor: attributes.secondClipColor,
        secondBorderType: attributes.secondBorderType,
        secondBorderWidth: attributes.secondBorderWidth,
        secondBorderColor: attributes.secondBorderColor,
        secondBorderRadius: attributes.secondBorderRadius,
        secondShadowColor: attributes.secondShadowColor,
        secondShadowBlur: attributes.secondShadowBlur,
        secondShadowHorizontal: attributes.secondShadowHorizontal,
        secondShadowVertical: attributes.secondShadowVertical,
        secondMarginL: attributes.secondMarginL,
        secondMarginR: attributes.secondMarginR,
        secondPadding: attributes.secondPadding
      }],
      containerStyles: [{
        backgroundImageID: attributes.imageID,
        backgroundImageURL: attributes.imageURL,
        backgroundRepeat: attributes.backgroundRepeat,
        backgroundPosition: attributes.backgroundPosition,
        backgroundSize: attributes.backgroundSize,
        fixed: attributes.fixed,
        containerBorderType: attributes.containerBorderType,
        containerBorderWidth: attributes.containerBorderWidth,
        containerBorderColor: attributes.containerBorderColor,
        containerBorderRadius: attributes.containerBorderRadius,
        containerBack: attributes.containerBack,
        containerOpacity: attributes.containerOpacity,
        gradientLocationOne: '0',
        gradientColorTwo: '',
        gradientLocationTwo: '100',
        gradientType: 'linear',
        gradientAngle: '180',
        gradientPosition: 'center center'
      }],
      backgroundType: ''
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      className
    } = props;
    const {
      block_id,
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstColor,
      firstBackground,
      firstFamily,
      firstStyle,
      firstUpper,
      firstLetter,
      firstWeight,
      firstBorderType,
      firstBorderWidth,
      firstBorderTop,
      firstBorderRight,
      firstBorderBottom,
      firstBorderLeft,
      firstBorderRadius,
      firstBorderColor,
      firstPadding,
      firstMargin,
      firstClip,
      firstAnim,
      firstStroke,
      firstClipColor,
      firstShadowBlur,
      firstShadowColor,
      firstShadowHorizontal,
      firstShadowVertical,
      secondColor,
      secondBackground,
      secondFamily,
      secondLetter,
      secondUpper,
      secondWeight,
      secondStyle,
      secondBorderType,
      secondBorderWidth,
      secondBorderTop,
      secondBorderRight,
      secondBorderBottom,
      secondBorderLeft,
      secondBorderRadius,
      secondBorderColor,
      secondPadding,
      secondMargin,
      secondClip,
      secondStroke,
      secondAnim,
      secondClipColor,
      secondShadowBlur,
      secondShadowColor,
      secondShadowHorizontal,
      secondShadowVertical,
      link,
      target,
      headingURL,
      containerBack,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      containerBorderType,
      containerBorderWidth,
      containerBorderTop,
      containerBorderRight,
      containerBorderBottom,
      containerBorderLeft,
      containerBorderRadius,
      containerBorderColor,
      firstBorder,
      secondBorder,
      containerBorder,
      firstOpacity,
      secondOpacity,
      containerOpacity,
      hideDesktop,
      hideTablet,
      hideMobile
    } = props.attributes;
    const mainClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: `premium-dheading-block-${block_id}`,
      className: `${mainClasses} premium-dheading-${block_id} ${hideDesktop} ${hideTablet} ${hideMobile}`,
      style: {
        textAlign: contentAlign,
        backgroundColor: containerBack ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default()(containerBack, containerOpacity) : "transparent",
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        borderStyle: containerBorderType,
        borderWidth: containerBorder ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px` : containerBorderWidth + "px",
        borderRadius: containerBorderRadius + "px",
        borderColor: containerBorderColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-dheading-block__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `premium-dheading-block__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`,
      style: {
        display: display,
        color: firstColor,
        backgroundColor: firstClip ? "none" : firstBackground ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default()(firstBackground, firstOpacity) : "transparent",
        backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
        fontFamily: firstFamily,
        letterSpacing: firstLetter + "px",
        textTransform: firstUpper ? "uppercase" : "none",
        fontStyle: firstStyle,
        fontWeight: firstWeight,
        borderStyle: firstBorderType,
        borderWidth: firstBorder ? `${firstBorderTop}px ${firstBorderRight}px ${firstBorderBottom}px ${firstBorderLeft}px` : firstBorderWidth + "px",
        borderRadius: firstBorderRadius + "px",
        borderColor: firstBorderColor,
        padding: firstPadding + "px",
        margin: firstMargin + "px",
        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`,
      style: {
        display: display,
        color: secondColor,
        backgroundColor: secondClip ? "none" : secondBackground ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default()(secondBackground, secondOpacity) : "transparent",
        backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
        fontFamily: secondFamily,
        letterSpacing: secondLetter + "px",
        textTransform: secondUpper ? "uppercase" : "none",
        fontStyle: secondStyle,
        fontWeight: secondWeight,
        borderStyle: secondBorderType,
        borderWidth: secondBorder ? `${secondBorderTop}px ${secondBorderRight}px ${secondBorderBottom}px ${secondBorderLeft}px` : secondBorderWidth + "px",
        borderRadius: secondBorderRadius + "px",
        borderColor: secondBorderColor,
        padding: secondPadding + "px",
        margin: secondMargin + "px",
        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `premium-dheading-block__link`,
      href: link && headingURL,
      target: target && "_blank"
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      firstBorder: attributes.firstBorder,
      secondBorder: attributes.secondBorder,
      containerBorder: attributes.containerBorder,
      containerBorderTop: "",
      containerBorderRight: "",
      containerBorderBottom: "",
      containerBorderLeft: "",
      firstBorderTop: "",
      firstBorderRight: "",
      firstBorderBottom: "",
      firstBorderLeft: "",
      secondBorderTop: "",
      secondBorderRight: "",
      secondBorderBottom: "",
      secondBorderLeft: "",
      classMigrate: false,
      block_id: '',
      secondSizeUnit: 'px',
      secondSizeTablet: '',
      secondSizeMobile: '',
      firstSizeUnit: 'px',
      firstSizeTablet: '',
      firstSizeMobile: '',
      firstOpacity: "",
      secondOpacity: "",
      containerOpacity: "",
      hideDesktop: false,
      hideTablet: false,
      hideMobile: false
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      className
    } = props;
    const {
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstColor,
      firstBackground,
      firstSize,
      firstFamily,
      firstStyle,
      firstUpper,
      firstLetter,
      firstWeight,
      firstBorderType,
      firstBorderWidth,
      firstBorderRadius,
      firstBorderColor,
      firstPadding,
      firstMargin,
      firstClip,
      firstAnim,
      firstStroke,
      firstClipColor,
      firstShadowBlur,
      firstShadowColor,
      firstShadowHorizontal,
      firstShadowVertical,
      secondColor,
      secondBackground,
      secondSize,
      secondFamily,
      secondLetter,
      secondUpper,
      secondWeight,
      secondStyle,
      secondBorderType,
      secondBorderWidth,
      secondBorderRadius,
      secondBorderColor,
      secondPadding,
      secondMargin,
      secondClip,
      secondStroke,
      secondAnim,
      secondClipColor,
      secondShadowBlur,
      secondShadowColor,
      secondShadowHorizontal,
      secondShadowVertical,
      link,
      target,
      headingURL,
      containerBack,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      containerBorderType,
      containerBorderWidth,
      containerBorderRadius,
      containerBorderColor
    } = props.attributes;
    const mainClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${mainClasses}`,
      style: {
        textAlign: contentAlign,
        backgroundColor: containerBack,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: containerBorderType,
        borderWidth: containerBorderWidth + "px",
        borderRadius: containerBorderRadius + "px",
        borderColor: containerBorderColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-dheading-block__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `premium-dheading-block__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim} premium-headings-${firstStroke}`,
      style: {
        display: display,
        color: firstColor,
        backgroundColor: firstClip ? "none" : firstBackground,
        backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
        fontSize: firstSize + "px",
        fontFamily: firstFamily,
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
        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim} premium-headings-${secondStroke}`,
      style: {
        display: display,
        color: secondColor,
        backgroundColor: secondClip ? "none" : secondBackground,
        backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
        fontSize: secondSize + "px",
        fontFamily: secondFamily,
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
        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `premium-dheading-block__link`,
      href: link && headingURL,
      target: target && "_blank"
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      firstStroke: false,
      secondStroke: false
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      className
    } = props;
    const {
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstColor,
      firstBackground,
      firstSize,
      firstFamily,
      firstStyle,
      firstUpper,
      firstLetter,
      firstWeight,
      firstBorderType,
      firstBorderWidth,
      firstBorderRadius,
      firstBorderColor,
      firstPadding,
      firstMargin,
      firstClip,
      firstAnim,
      firstClipColor,
      firstShadowBlur,
      firstShadowColor,
      firstShadowHorizontal,
      firstShadowVertical,
      secondColor,
      secondBackground,
      secondSize,
      secondFamily,
      secondLetter,
      secondUpper,
      secondWeight,
      secondStyle,
      secondBorderType,
      secondBorderWidth,
      secondBorderRadius,
      secondBorderColor,
      secondPadding,
      secondMargin,
      secondClip,
      secondAnim,
      secondClipColor,
      secondShadowBlur,
      secondShadowColor,
      secondShadowHorizontal,
      secondShadowVertical,
      link,
      target,
      headingURL,
      containerBack,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      containerBorderType,
      containerBorderWidth,
      containerBorderRadius,
      containerBorderColor
    } = props.attributes;
    const mainClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${mainClasses}`,
      style: {
        textAlign: contentAlign,
        backgroundColor: containerBack,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: containerBorderType,
        borderWidth: containerBorderWidth + "px",
        borderRadius: containerBorderRadius + "px",
        borderColor: containerBorderColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-dheading-block__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `premium-dheading-block__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`,
      style: {
        display: display,
        color: firstColor,
        backgroundColor: firstClip ? "none" : firstBackground,
        backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
        fontSize: firstSize + "px",
        fontFamily: firstFamily,
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
        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-dheading-block__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`,
      style: {
        display: display,
        color: secondColor,
        backgroundColor: secondClip ? "none" : secondBackground,
        backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
        fontSize: secondSize + "px",
        fontFamily: secondFamily,
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
        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `premium-dheading-block__link`,
      href: link && headingURL,
      target: target && "_blank"
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      containerBorderType: "none",
      containerBorderWidth: "1",
      containerBorderRadius: "0",
      containerBorderColor: ""
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstColor,
      firstBackground,
      firstSize,
      firstFamily,
      firstStyle,
      firstUpper,
      firstLetter,
      firstWeight,
      firstBorderType,
      firstBorderWidth,
      firstBorderRadius,
      firstBorderColor,
      firstPadding,
      firstMargin,
      firstClip,
      firstAnim,
      firstClipColor,
      firstShadowBlur,
      firstShadowColor,
      firstShadowHorizontal,
      firstShadowVertical,
      secondColor,
      secondBackground,
      secondSize,
      secondFamily,
      secondLetter,
      secondUpper,
      secondWeight,
      secondStyle,
      secondBorderType,
      secondBorderWidth,
      secondBorderRadius,
      secondBorderColor,
      secondPadding,
      secondMargin,
      secondClip,
      secondAnim,
      secondClipColor,
      secondShadowBlur,
      secondShadowColor,
      secondShadowHorizontal,
      secondShadowVertical,
      link,
      target,
      headingURL,
      containerBack,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
      style: {
        textAlign: contentAlign,
        backgroundColor: containerBack,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `${className}__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`,
      style: {
        display: display,
        color: firstColor,
        backgroundColor: firstClip ? "none" : firstBackground,
        backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
        fontSize: firstSize + "px",
        fontFamily: firstFamily,
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
        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`,
      style: {
        display: display,
        color: secondColor,
        backgroundColor: secondClip ? "none" : secondBackground,
        backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
        fontSize: secondSize + "px",
        fontFamily: secondFamily,
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
        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: link && headingURL,
      target: target && "_blank"
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      firstFamily: "",
      secondFamily: ""
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstColor,
      firstBackground,
      firstSize,
      firstStyle,
      firstUpper,
      firstLetter,
      firstWeight,
      firstBorderType,
      firstBorderWidth,
      firstBorderRadius,
      firstBorderColor,
      firstPadding,
      firstMargin,
      firstClip,
      firstAnim,
      firstClipColor,
      firstShadowBlur,
      firstShadowColor,
      firstShadowHorizontal,
      firstShadowVertical,
      secondColor,
      secondBackground,
      secondSize,
      secondLetter,
      secondUpper,
      secondWeight,
      secondStyle,
      secondBorderType,
      secondBorderWidth,
      secondBorderRadius,
      secondBorderColor,
      secondPadding,
      secondMargin,
      secondClip,
      secondAnim,
      secondClipColor,
      secondShadowBlur,
      secondShadowColor,
      secondShadowHorizontal,
      secondShadowVertical,
      link,
      target,
      headingURL,
      containerBack,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
      style: {
        textAlign: contentAlign,
        backgroundColor: containerBack,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset"
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `${className}__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`,
      style: {
        display: display,
        color: firstColor,
        backgroundColor: firstClip ? "none" : firstBackground,
        backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
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
        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`,
      style: {
        display: display,
        color: secondColor,
        backgroundColor: secondClip ? "none" : secondBackground,
        backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
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
        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: link && headingURL,
      target: target && "_blank"
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      imageID: "",
      imageURL: "",
      fixed: false,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      backgroundSize: "auto"
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      contentAlign,
      firstHeading,
      secondHeading,
      display,
      firstColor,
      firstBackground,
      firstSize,
      firstStyle,
      firstUpper,
      firstLetter,
      firstWeight,
      firstBorderType,
      firstBorderWidth,
      firstBorderRadius,
      firstBorderColor,
      firstPadding,
      firstMargin,
      firstClip,
      firstAnim,
      firstClipColor,
      firstShadowBlur,
      firstShadowColor,
      firstShadowHorizontal,
      firstShadowVertical,
      secondColor,
      secondBackground,
      secondSize,
      secondLetter,
      secondUpper,
      secondWeight,
      secondStyle,
      secondBorderType,
      secondBorderWidth,
      secondBorderRadius,
      secondBorderColor,
      secondPadding,
      secondMargin,
      secondClip,
      secondAnim,
      secondClipColor,
      secondShadowBlur,
      secondShadowColor,
      secondShadowHorizontal,
      secondShadowVertical,
      link,
      target,
      headingURL,
      containerBack
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
      style: {
        textAlign: contentAlign,
        backgroundColor: containerBack
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `${className}__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`,
      style: {
        display: display,
        color: firstColor,
        backgroundColor: firstClip ? "none" : firstBackground,
        backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
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
        textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
      }
    }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`,
      style: {
        display: display,
        color: secondColor,
        backgroundColor: secondClip ? "none" : secondBackground,
        backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
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
        textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
      }
    }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: link && headingURL,
      target: target && "_blank"
    })));
  }
}, {
  attributes: attributes,
  save: props => {
    {
      const {
        contentAlign,
        firstHeading,
        secondHeading,
        display,
        firstColor,
        firstBackground,
        firstSize,
        firstStyle,
        firstUpper,
        firstLetter,
        firstWeight,
        firstBorderType,
        firstBorderWidth,
        firstBorderRadius,
        firstBorderColor,
        firstPadding,
        firstMargin,
        firstClip,
        firstAnim,
        firstClipColor,
        firstShadowBlur,
        firstShadowColor,
        firstShadowHorizontal,
        firstShadowVertical,
        secondColor,
        secondBackground,
        secondSize,
        secondLetter,
        secondUpper,
        secondWeight,
        secondStyle,
        secondBorderType,
        secondBorderWidth,
        secondBorderRadius,
        secondBorderColor,
        secondPadding,
        secondMargin,
        secondClip,
        secondAnim,
        secondClipColor,
        secondShadowBlur,
        secondShadowColor,
        secondShadowHorizontal,
        secondShadowVertical,
        link,
        target,
        headingURL,
        containerBack
      } = props.attributes;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        className: `${className}__link`,
        href: link && headingURL,
        target: target && "_blank"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${className}__container`,
        style: {
          textAlign: contentAlign,
          backgroundColor: containerBack
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
        className: `${className}__title`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: `${className}__first premium-headingc-${firstClip} premium-headinga-${firstAnim}`,
        style: {
          display: display,
          color: firstColor,
          backgroundColor: firstClip ? "none" : firstBackground,
          backgroundImage: firstClip ? `linear-gradient(to left, ${firstColor}, ${firstClipColor})` : "none",
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
          textShadow: `${firstShadowHorizontal}px ${firstShadowVertical}px ${firstShadowBlur}px ${firstShadowColor}`
        }
      }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: `${className}__second premium-headingc-${secondClip} premium-headinga-${secondAnim}`,
        style: {
          display: display,
          color: secondColor,
          backgroundColor: secondClip ? "none" : secondBackground,
          backgroundImage: secondClip ? `linear-gradient(to left, ${secondColor}, ${secondClipColor})` : "none",
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
          textShadow: `${secondShadowHorizontal}px ${secondShadowVertical}px ${secondShadowBlur}px ${secondShadowColor}`
        }
      }, secondHeading))));
    }
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecatedContent);

/***/ }),

/***/ "./src/blocks/dual-heading/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/dual-heading/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./src/blocks/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_premium_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/premium-border */ "./src/components/premium-border.js");
/* harmony import */ var _components_premium_typo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/premium-typo */ "./src/components/premium-typo.js");
/* harmony import */ var _components_premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/premium-responsive-tabs */ "./src/components/premium-responsive-tabs.js");
/* harmony import */ var _components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");
/* harmony import */ var _components_Premium_Background_Control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Premium-Background-Control */ "./src/components/Premium-Background-Control.js");
/* harmony import */ var _components_typography_fontLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/typography/fontLoader */ "./src/components/typography/fontLoader.js");
/* harmony import */ var _components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PremiumShadow */ "./src/components/PremiumShadow.js");
/* harmony import */ var _components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/premium-responsive-spacing */ "./src/components/premium-responsive-spacing.js");
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/HelperFunction */ "./src/components/HelperFunction.js");
/* harmony import */ var _components_inspectorTabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/inspectorTabs */ "./src/components/inspectorTabs.js");
/* harmony import */ var _components_inspectorTab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/inspectorTab */ "./src/components/inspectorTab.js");







const {
  __
} = wp.i18n;
const {
  withSelect
} = wp.data;






const {
  Fragment,
  Component
} = wp.element;
const {
  PanelBody,
  SelectControl,
  ToggleControl
} = wp.components;
const {
  BlockControls,
  InspectorControls,
  AlignmentToolbar,
  RichText,
  URLInput
} = wp.blockEditor;

class edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidMount() {
    this.props.setAttributes({
      blockId: "premium-dual-heading-" + (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.generateBlockId)(this.props.clientId)
    });
    this.props.setAttributes({
      classMigrate: true
    });
  }

  render() {
    var _firstStyles$, _firstStyles$2, _firstStyles$3, _firstStyles$4, _firstStyles$5, _firstStyles$6, _firstStyles$7, _firstStyles$8, _firstStyles$9, _firstStyles$10, _secondStyles$, _secondStyles$2, _secondStyles$3, _secondStyles$4, _secondStyles$5, _secondStyles$6, _secondStyles$7, _secondStyles$8, _secondStyles$9, _secondStyles$10, _firstStyles$11, _firstStyles$12, _firstStyles$13, _firstStyles$14, _firstStyles$15, _firstStyles$16, _firstStyles$17, _firstStyles$18, _firstStyles$19, _firstStyles$20, _firstStyles$21, _firstStyles$22, _secondStyles$11, _secondStyles$12, _secondStyles$13, _secondStyles$14, _secondStyles$15, _secondStyles$16, _secondStyles$17, _secondStyles$18, _secondStyles$19, _secondStyles$20, _secondStyles$21, _secondStyles$22;

    const {
      setAttributes,
      isSelected,
      className
    } = this.props;
    const {
      blockId,
      align,
      firstHeading,
      secondHeading,
      display,
      firstStyles,
      secondStyles,
      link,
      target,
      headingURL,
      hideDesktop,
      hideTablet,
      hideMobile,
      firstBorder,
      secondBorder,
      containerBorder,
      firstTypography,
      secondTypography,
      background,
      firstShadow,
      secondShadow,
      firstPadding,
      firstMargin,
      secondPadding,
      secondMargin
    } = this.props.attributes;
    const DISPLAY = [{
      value: "inline",
      label: __("Inline", "premium-blocks-for-gutenberg")
    }, {
      value: "block",
      label: __("Block", "premium-blocks-for-gutenberg")
    }];
    let loadFirstGoogleFonts;
    let loadSecondGoogleFonts;

    if ((firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.fontFamily) !== "Default") {
      const firstConfig = {
        google: {
          families: [firstTypography.fontFamily]
        }
      };
      loadFirstGoogleFonts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_typography_fontLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        config: firstConfig
      });
    }

    if ((secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.fontFamily) !== "Default") {
      const secondConfig = {
        google: {
          families: [secondTypography.fontFamily]
        }
      };
      loadSecondGoogleFonts = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_typography_fontLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
        config: secondConfig
      });
    }

    const saveSecondStyle = value => {
      const newUpdate = secondStyles.map((item, index) => {
        if (0 === index) {
          item = { ...item,
            ...value
          };
        }

        return item;
      });
      setAttributes({
        secondStyles: newUpdate
      });
    };

    const saveFirstStyle = value => {
      const newUpdate = firstStyles.map((item, index) => {
        if (0 === index) {
          item = { ...item,
            ...value
          };
        }

        return item;
      });
      setAttributes({
        firstStyles: newUpdate
      });
    };

    return [// isSelected && (
    //     <BlockControls key="controls">
    //         <AlignmentToolbar
    //             value={contentAlign}
    //             onChange={(newAlign) =>
    //                 setAttributes({ contentAlign: newAlign })
    //             }
    //         />
    //     </BlockControls>
    // ),
    isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tabs: ["layout", "style", "advance"]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTab__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: "layout"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("General", "premium-blocks-for-gutenberg"),
      className: "premium-panel-body",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Display", "premium-blocks-for-gutenberg"),
      value: display,
      options: DISPLAY,
      onChange: value => setAttributes({
        display: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Link", "premium-blocks-for-gutenberg"),
      checked: link,
      onChange: newValue => setAttributes({
        link: newValue
      })
    }), link && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Open link in new tab", "premium-blocks-for-gutenberg"),
      checked: target,
      onChange: newValue => setAttributes({
        target: newValue
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTab__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: "style"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Container", "premium-blocks-for-gutenberg"),
      className: "premium-panel-body",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Background_Control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: background,
      onChange: value => setAttributes({
        background: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Border"),
      value: containerBorder,
      onChange: value => setAttributes({
        containerBorder: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("First Heading", "premium-blocks-for-gutenberg"),
      className: "premium-panel-body",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      components: ["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"],
      value: firstTypography,
      onChange: newValue => setAttributes({
        firstTypography: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Clipped", "premium-blocks-for-gutenberg"),
      checked: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$ = firstStyles[0]) === null || _firstStyles$ === void 0 ? void 0 : _firstStyles$.firstClip,
      onChange: newValue => saveFirstStyle({
        firstClip: newValue
      })
    }), (firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$2 = firstStyles[0]) === null || _firstStyles$2 === void 0 ? void 0 : _firstStyles$2.firstClip) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Animated", "premium-blocks-for-gutenberg"),
      checked: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$3 = firstStyles[0]) === null || _firstStyles$3 === void 0 ? void 0 : _firstStyles$3.firstAnim,
      onChange: newValue => saveFirstStyle({
        firstAnim: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Stroke", "premium-blocks-for-gutenberg"),
      checked: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$4 = firstStyles[0]) === null || _firstStyles$4 === void 0 ? void 0 : _firstStyles$4.firstStroke,
      onChange: newValue => saveFirstStyle({
        firstStroke: newValue
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), !(firstStyles !== null && firstStyles !== void 0 && (_firstStyles$5 = firstStyles[0]) !== null && _firstStyles$5 !== void 0 && _firstStyles$5.firstClip) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __("Text Color", "premium-blocks-for-gutenberg"),
      colorValue: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$6 = firstStyles[0]) === null || _firstStyles$6 === void 0 ? void 0 : _firstStyles$6.firstColor,
      colorDefault: "",
      onColorChange: newValue => saveFirstStyle({
        firstColor: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __(`Background Color`, "premium-blocks-for-gutenberg"),
      colorValue: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$7 = firstStyles[0]) === null || _firstStyles$7 === void 0 ? void 0 : _firstStyles$7.firstBackground,
      onColorChange: value => saveFirstStyle({
        firstBackground: value
      }),
      colorDefault: ""
    })), (firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$8 = firstStyles[0]) === null || _firstStyles$8 === void 0 ? void 0 : _firstStyles$8.firstClip) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __("First Color", "premium-blocks-for-gutenberg"),
      colorValue: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$9 = firstStyles[0]) === null || _firstStyles$9 === void 0 ? void 0 : _firstStyles$9.firstColor,
      colorDefault: "",
      onColorChange: newValue => saveFirstStyle({
        firstColor: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __("Second Color", "premium-blocks-for-gutenberg"),
      colorValue: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$10 = firstStyles[0]) === null || _firstStyles$10 === void 0 ? void 0 : _firstStyles$10.firstClipColor,
      colorDefault: "",
      onColorChange: newValue => saveFirstStyle({
        firstClipColor: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Text Shadow", "premium-blocks-for-gutenberg"),
      boxShadow: false,
      value: firstShadow,
      onChange: value => setAttributes({
        firstShadow: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Border"),
      value: firstBorder,
      borderType: firstBorder.borderType,
      borderColor: firstBorder.borderColor,
      borderWidth: firstBorder.borderWidth,
      borderRadius: firstBorder.borderRadius,
      onChange: value => setAttributes({
        firstBorder: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: firstMargin,
      responsive: true,
      showUnits: true,
      label: __("Margin"),
      onChange: value => setAttributes({
        firstMargin: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: firstPadding,
      responsive: true,
      showUnits: true,
      label: __("Padding"),
      onChange: value => setAttributes({
        firstPadding: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __("Second Heading", "premium-blocks-for-gutenberg"),
      className: "premium-panel-body",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      components: ["responsiveSize", "weight", "family", "spacing", "style", "Upper", "line", "Decoration"],
      value: secondTypography,
      onChange: newValue => setAttributes({
        secondTypography: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Clipped", "premium-blocks-for-gutenberg"),
      checked: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$ = secondStyles[0]) === null || _secondStyles$ === void 0 ? void 0 : _secondStyles$.secondClip,
      onChange: newValue => saveSecondStyle({
        secondClip: newValue
      })
    }), (secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$2 = secondStyles[0]) === null || _secondStyles$2 === void 0 ? void 0 : _secondStyles$2.secondClip) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Animated", "premium-blocks-for-gutenberg"),
      checked: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$3 = secondStyles[0]) === null || _secondStyles$3 === void 0 ? void 0 : _secondStyles$3.secondAnim,
      onChange: newValue => saveSecondStyle({
        secondAnim: newValue
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __("Stroke", "premium-blocks-for-gutenberg"),
      checked: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$4 = secondStyles[0]) === null || _secondStyles$4 === void 0 ? void 0 : _secondStyles$4.secondStroke,
      onChange: newValue => saveSecondStyle({
        secondStroke: newValue
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), !(secondStyles !== null && secondStyles !== void 0 && (_secondStyles$5 = secondStyles[0]) !== null && _secondStyles$5 !== void 0 && _secondStyles$5.secondClip) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __("Text Color", "premium-blocks-for-gutenberg"),
      colorValue: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$6 = secondStyles[0]) === null || _secondStyles$6 === void 0 ? void 0 : _secondStyles$6.secondColor,
      colorDefault: "",
      onColorChange: newValue => saveSecondStyle({
        secondColor: newValue || "transparent"
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __(`Background Color`, "premium-blocks-for-gutenberg"),
      colorValue: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$7 = secondStyles[0]) === null || _secondStyles$7 === void 0 ? void 0 : _secondStyles$7.secondBackground,
      colorDefault: "",
      onColorChange: value => saveSecondStyle({
        secondBackground: value
      })
    })), (secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$8 = secondStyles[0]) === null || _secondStyles$8 === void 0 ? void 0 : _secondStyles$8.secondClip) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __("First Color", "premium-blocks-for-gutenberg"),
      colorValue: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$9 = secondStyles[0]) === null || _secondStyles$9 === void 0 ? void 0 : _secondStyles$9.secondColor,
      colorDefault: "",
      onColorChange: newValue => saveSecondStyle({
        secondColor: newValue || "transparent"
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: __("Second Color", "premium-blocks-for-gutenberg"),
      colorValue: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$10 = secondStyles[0]) === null || _secondStyles$10 === void 0 ? void 0 : _secondStyles$10.secondClipColor,
      colorDefault: "",
      onColorChange: newValue => saveSecondStyle({
        secondClipColor: newValue || "transparent"
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: __("Text Shadow", "premium-blocks-for-gutenberg"),
      boxShadow: false,
      value: secondShadow,
      onChange: value => setAttributes({
        secondShadow: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Border"),
      value: secondBorder,
      borderType: secondBorder.borderType,
      borderColor: secondBorder.borderColor,
      borderWidth: secondBorder.borderWidth,
      borderRadius: secondBorder.borderRadius,
      onChange: value => setAttributes({
        secondBorder: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: secondMargin,
      responsive: true,
      showUnits: true,
      label: __("Margin"),
      onChange: value => setAttributes({
        secondMargin: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: secondPadding,
      responsive: true,
      showUnits: true,
      label: __("Padding"),
      onChange: value => setAttributes({
        secondPadding: value
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTab__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: "advance"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      Desktop: hideDesktop,
      Tablet: hideTablet,
      Mobile: hideMobile,
      onChangeDesktop: value => setAttributes({
        hideDesktop: value ? " premium-desktop-hidden" : ""
      }),
      onChangeTablet: value => setAttributes({
        hideTablet: value ? " premium-tablet-hidden" : ""
      }),
      onChangeMobile: value => setAttributes({
        hideMobile: value ? " premium-mobile-hidden" : ""
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container", `${blockId}`, {
        " premium-desktop-hidden": hideDesktop,
        " premium-tablet-hidden": hideTablet,
        " premium-mobile-hidden": hideMobile
      }),
      style: {
        textAlign: align[this.props.deviceType],
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.gradientBackground)(background),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.borderCss)(containerBorder, this.props.deviceType)
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-dheading-block__wrap`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: `premium-dheading-block__title`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      className: `premium-dheading-block__first${firstStyles !== null && firstStyles !== void 0 && (_firstStyles$11 = firstStyles[0]) !== null && _firstStyles$11 !== void 0 && _firstStyles$11.firstClip ? ` premium-headingc-${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$12 = firstStyles[0]) === null || _firstStyles$12 === void 0 ? void 0 : _firstStyles$12.firstClip}` : ""}${firstStyles !== null && firstStyles !== void 0 && (_firstStyles$13 = firstStyles[0]) !== null && _firstStyles$13 !== void 0 && _firstStyles$13.firstAnim ? ` premium-headinga-${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$14 = firstStyles[0]) === null || _firstStyles$14 === void 0 ? void 0 : _firstStyles$14.firstAnim}` : ""}${firstStyles !== null && firstStyles !== void 0 && (_firstStyles$15 = firstStyles[0]) !== null && _firstStyles$15 !== void 0 && _firstStyles$15.firstStroke ? ` premium-headings-${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$16 = firstStyles[0]) === null || _firstStyles$16 === void 0 ? void 0 : _firstStyles$16.firstStroke}` : ""}`,
      value: firstHeading,
      onChange: value => setAttributes({
        firstHeading: value
      }),
      style: {
        display: display,
        color: firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$17 = firstStyles[0]) === null || _firstStyles$17 === void 0 ? void 0 : _firstStyles$17.firstColor,
        backgroundColor: firstStyles !== null && firstStyles !== void 0 && (_firstStyles$18 = firstStyles[0]) !== null && _firstStyles$18 !== void 0 && _firstStyles$18.firstClip ? "none" : firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$19 = firstStyles[0]) === null || _firstStyles$19 === void 0 ? void 0 : _firstStyles$19.firstBackground,
        backgroundImage: firstStyles !== null && firstStyles !== void 0 && (_firstStyles$20 = firstStyles[0]) !== null && _firstStyles$20 !== void 0 && _firstStyles$20.firstClip ? `linear-gradient(to left, ${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$21 = firstStyles[0]) === null || _firstStyles$21 === void 0 ? void 0 : _firstStyles$21.firstColor}, ${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$22 = firstStyles[0]) === null || _firstStyles$22 === void 0 ? void 0 : _firstStyles$22.firstClipColor})` : "none",
        textShadow: `${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.horizontal}px ${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.vertical}px ${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.blur}px ${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.color}`,
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.typographyCss)(firstTypography, this.props.deviceType),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.marginCss)(firstMargin, this.props.deviceType),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.paddingCss)(firstPadding, this.props.deviceType),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.borderCss)(firstBorder, this.props.deviceType)
      },
      tagName: "span"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      className: `premium-dheading-block__second${secondStyles !== null && secondStyles !== void 0 && (_secondStyles$11 = secondStyles[0]) !== null && _secondStyles$11 !== void 0 && _secondStyles$11.secondClip ? `${` premium-headingc-${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$12 = secondStyles[0]) === null || _secondStyles$12 === void 0 ? void 0 : _secondStyles$12.secondClip}`}` : ""}${secondStyles !== null && secondStyles !== void 0 && (_secondStyles$13 = secondStyles[0]) !== null && _secondStyles$13 !== void 0 && _secondStyles$13.secondAnim ? ` ${`premium-headinga-${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$14 = secondStyles[0]) === null || _secondStyles$14 === void 0 ? void 0 : _secondStyles$14.secondAnim} `}` : ""}${secondStyles !== null && secondStyles !== void 0 && (_secondStyles$15 = secondStyles[0]) !== null && _secondStyles$15 !== void 0 && _secondStyles$15.secondStroke ? ` premium-headings-${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$16 = secondStyles[0]) === null || _secondStyles$16 === void 0 ? void 0 : _secondStyles$16.secondStroke}` : ""}`,
      value: secondHeading,
      onChange: value => setAttributes({
        secondHeading: value
      }),
      style: {
        display: display,
        color: secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$17 = secondStyles[0]) === null || _secondStyles$17 === void 0 ? void 0 : _secondStyles$17.secondColor,
        backgroundColor: secondStyles !== null && secondStyles !== void 0 && (_secondStyles$18 = secondStyles[0]) !== null && _secondStyles$18 !== void 0 && _secondStyles$18.secondClip ? "none" : secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$19 = secondStyles[0]) === null || _secondStyles$19 === void 0 ? void 0 : _secondStyles$19.secondBackground,
        backgroundImage: secondStyles !== null && secondStyles !== void 0 && (_secondStyles$20 = secondStyles[0]) !== null && _secondStyles$20 !== void 0 && _secondStyles$20.secondClip ? `linear-gradient(to left, ${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$21 = secondStyles[0]) === null || _secondStyles$21 === void 0 ? void 0 : _secondStyles$21.secondColor}, ${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$22 = secondStyles[0]) === null || _secondStyles$22 === void 0 ? void 0 : _secondStyles$22.secondClipColor})` : "none",
        textShadow: `${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.horizontal}px ${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.vertical}px ${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.blur}px ${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.color}`,
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.typographyCss)(secondTypography, this.props.deviceType),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.marginCss)(secondMargin, this.props.deviceType),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.paddingCss)(secondPadding, this.props.deviceType),
        ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_10__.borderCss)(secondBorder, this.props.deviceType)
      },
      tagName: "span"
    }))), link && isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: headingURL,
      onChange: newUrl => setAttributes({
        headingURL: newUrl
      })
    }), loadFirstGoogleFonts, loadSecondGoogleFonts)];
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect((select, props) => {
  const {
    __experimentalGetPreviewDeviceType = null
  } = select("core/edit-post");
  let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
  return {
    deviceType: deviceType
  };
})(edit));

/***/ }),

/***/ "./src/blocks/dual-heading/index.js":
/*!******************************************!*\
  !*** ./src/blocks/dual-heading/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/js/settings */ "./assets/js/settings.js");
/* harmony import */ var _blocks_config_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../blocks-config/block-icons */ "./blocks-config/block-icons.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/dual-heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/dual-heading/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/dual-heading/deprecated.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/dual-heading/attributes.js");






const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
console.log(_assets_js_settings__WEBPACK_IMPORTED_MODULE_0__.dualHeading);
registerBlockType("premium/dheading-block", {
  title: __("Dual Heading", "premium-blocks-for-gutenberg"),
  description: __("Use Premium Dual Heading Block to create one heading with two different styles."),
  icon: _blocks_config_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].dualHeading,
  category: "premium-blocks",
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  supports: {
    inserter: _assets_js_settings__WEBPACK_IMPORTED_MODULE_0__.dualHeading
  },
  keywords: [__("title", "premium-blocks-for-gutenberg"), __("heading", "premium-blocks-for-gutenberg"), __("text", "premium-blocks-for-gutenberg")],
  example: {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/dual-heading/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/dual-heading/save.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./src/blocks/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HelperFunction */ "./src/components/HelperFunction.js");




const save = props => {
  var _firstStyles$, _firstStyles$2, _firstStyles$3, _firstStyles$4, _firstStyles$5, _firstStyles$6, _secondStyles$, _secondStyles$2, _secondStyles$3, _secondStyles$4, _secondStyles$5, _secondStyles$6;

  const {
    className
  } = props;
  const {
    blockId,
    contentAlign,
    firstHeading,
    secondHeading,
    display,
    firstStyles,
    secondStyles,
    link,
    target,
    headingURL,
    hideDesktop,
    hideTablet,
    hideMobile,
    firstBorder,
    secondBorder,
    containerBorder,
    firstTypography,
    secondTypography,
    background,
    firstShadow,
    secondShadow
  } = props.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-dheading-block__container", `${blockId}`, {
      " premium-desktop-hidden": hideDesktop,
      " premium-tablet-hidden": hideTablet,
      " premium-mobile-hidden": hideMobile
    }),
    style: {
      textAlign: contentAlign,
      borderStyle: containerBorder && containerBorder.borderType,
      borderColor: containerBorder && containerBorder.borderColor,
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.gradientBackground)(background)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-dheading-block__wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: `premium-dheading-block__title`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `premium-dheading-block__first${firstStyles !== null && firstStyles !== void 0 && (_firstStyles$ = firstStyles[0]) !== null && _firstStyles$ !== void 0 && _firstStyles$.firstClip ? ` premium-headingc-${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$2 = firstStyles[0]) === null || _firstStyles$2 === void 0 ? void 0 : _firstStyles$2.firstClip}` : ""}${firstStyles !== null && firstStyles !== void 0 && (_firstStyles$3 = firstStyles[0]) !== null && _firstStyles$3 !== void 0 && _firstStyles$3.firstAnim ? ` premium-headinga-${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$4 = firstStyles[0]) === null || _firstStyles$4 === void 0 ? void 0 : _firstStyles$4.firstAnim}` : ""}${firstStyles !== null && firstStyles !== void 0 && (_firstStyles$5 = firstStyles[0]) !== null && _firstStyles$5 !== void 0 && _firstStyles$5.firstStroke ? ` premium-headings-${firstStyles === null || firstStyles === void 0 ? void 0 : (_firstStyles$6 = firstStyles[0]) === null || _firstStyles$6 === void 0 ? void 0 : _firstStyles$6.firstStroke}` : ""}`,
    style: (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.filterJsCss)({
      display: display,
      color: firstStyles[0].firstColor,
      backgroundColor: firstStyles[0].firstClip ? "none" : firstStyles[0].firstBackground,
      backgroundImage: firstStyles[0].firstClip ? `linear-gradient(to left, ${firstStyles[0].firstColor}, ${firstStyles[0].firstClipColor})` : "none",
      fontStyle: firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.fontStyle,
      fontFamily: firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.fontFamily,
      fontWeight: firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.fontWeight,
      letterSpacing: firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.letterSpacing,
      textDecoration: firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.textDecoration,
      textTransform: firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.textTransform,
      lineHeight: `${firstTypography === null || firstTypography === void 0 ? void 0 : firstTypography.lineHeight}px`,
      borderStyle: firstBorder && firstBorder.borderType,
      borderColor: firstBorder && firstBorder.borderColor,
      textShadow: `${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.horizontal}px ${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.vertical}px ${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.blur}px ${firstShadow === null || firstShadow === void 0 ? void 0 : firstShadow.color}`
    })
  }, firstHeading), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `premium-dheading-block__second${secondStyles !== null && secondStyles !== void 0 && (_secondStyles$ = secondStyles[0]) !== null && _secondStyles$ !== void 0 && _secondStyles$.secondClip ? `${` premium-headingc-${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$2 = secondStyles[0]) === null || _secondStyles$2 === void 0 ? void 0 : _secondStyles$2.secondClip}`}` : ""}${secondStyles !== null && secondStyles !== void 0 && (_secondStyles$3 = secondStyles[0]) !== null && _secondStyles$3 !== void 0 && _secondStyles$3.secondAnim ? ` ${`premium-headinga-${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$4 = secondStyles[0]) === null || _secondStyles$4 === void 0 ? void 0 : _secondStyles$4.secondAnim} `}` : ""}${secondStyles !== null && secondStyles !== void 0 && (_secondStyles$5 = secondStyles[0]) !== null && _secondStyles$5 !== void 0 && _secondStyles$5.secondStroke ? ` premium-headings-${secondStyles === null || secondStyles === void 0 ? void 0 : (_secondStyles$6 = secondStyles[0]) === null || _secondStyles$6 === void 0 ? void 0 : _secondStyles$6.secondStroke}` : ""}`,
    style: (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.filterJsCss)({
      display: display,
      color: secondStyles[0].secondColor,
      backgroundColor: secondStyles[0].secondClip ? "none" : secondStyles[0].secondBackground,
      backgroundImage: secondStyles[0].secondClip ? `linear-gradient(to left, ${secondStyles[0].secondColor}, ${secondStyles[0].secondClipColor})` : "none",
      fontStyle: secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.fontStyle,
      fontFamily: secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.fontFamily,
      fontWeight: secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.fontWeight,
      letterSpacing: secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.letterSpacing,
      textDecoration: secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.textDecoration,
      textTransform: secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.textTransform,
      lineHeight: `${secondTypography === null || secondTypography === void 0 ? void 0 : secondTypography.lineHeight}px`,
      borderStyle: secondBorder && secondBorder.borderType,
      borderColor: secondBorder && secondBorder.borderColor,
      textShadow: `${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.horizontal}px ${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.vertical}px ${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.blur}px ${secondShadow === null || secondShadow === void 0 ? void 0 : secondShadow.color}`
    })
  }, secondHeading)), link && headingURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `premium-dheading-block__link`,
    href: link && headingURL,
    target: target && "_blank",
    rel: "noopener noreferrer"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ })

}]);
//# sourceMappingURL=src_blocks_dual-heading_index_js.js.map