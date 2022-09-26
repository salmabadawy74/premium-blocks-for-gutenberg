/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/AdvancedSwitcher.js":
/*!****************************************!*\
  !*** ./src/common/AdvancedSwitcher.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const AdvancedSwitcher = props => {
  const {
    label,
    description,
    onChange,
    checked = true
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-advanced-switcher"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "pb-swticher-label"
  }, label), description, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-switcher"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: checked,
    onChange: onChange
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedSwitcher);

/***/ }),

/***/ "./src/common/Card.js":
/*!****************************!*\
  !*** ./src/common/Card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Card = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: props.id,
    className: "pb-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-body"
  }, props.children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/common/Container.js":
/*!*********************************!*\
  !*** ./src/common/Container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Container = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-container"
  }, props.children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/common/SingleOption.js":
/*!************************************!*\
  !*** ./src/common/SingleOption.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-icons */ "./src/common/block-icons.js");
/* harmony import */ var _AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdvancedSwitcher */ "./src/common/AdvancedSwitcher.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);






const {
  Dashicon
} = wp.components;
const {
  __
} = wp.i18n;

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(" ");
}

const SingleOption = props => {
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);

  const handleChange = () => {
    let newValue = !value;
    props.onChange(newValue, props.optionId);
    setValue(newValue);
  };

  let checked = value === true ? true : false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: props.optionId,
    className: "pb-option-element"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-option-element-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-icon pb-control-icon"
  }, _block_icons__WEBPACK_IMPORTED_MODULE_1__["default"][props.params.icon])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-block-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "customize-control-title pb-control-title"
  }, props.params.label, __(" Gutenberg Block", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-block-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "live-preview customize-control-live-preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `https://premiumblocks.io/gutenberg-blocks/${props.optionId}`,
    target: "_blank",
    rel: "noreferrer"
  }, __("Live Preview", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "guidelines customize-control-guidelines"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `https://premiumblocks.io/docs/${props.optionId}`,
    target: "_blank",
    rel: "noreferrer"
  }, __("Guidelines", "premium-blocks-for-gutenberg"), " ")))), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    className: "pb-loading",
    icon: "update"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "option-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: () => {
      handleChange();
    },
    checked: checked
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleOption);

/***/ }),

/***/ "./src/common/block-icons.js":
/*!***********************************!*\
  !*** ./src/common/block-icons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const PBG_Block_Icons = {
  person: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-team-members-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Team_Members",
    "data-name": "Team Members"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.62,14h-.27a4,4,0,1,1,.3,0ZM12.5,7.48a2.53,2.53,0,0,0-.14,5h.29a2.53,2.53,0,0,0-.15-5Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M23.25,12.5a10.75,10.75,0,1,0-18,7.87s0,0,0,.06l.31.27a10,10,0,0,0,2.15,1.42l.33.16a6.5,6.5,0,0,0,.61.25l.34.13.32.1.45.13a10.61,10.61,0,0,0,5.48,0l.45-.13.32-.1.34-.13a6.5,6.5,0,0,0,.61-.25l.33-.16a10,10,0,0,0,2.15-1.42l.31-.27s0,0,0-.06A10.7,10.7,0,0,0,23.25,12.5Zm-20,0a9.25,9.25,0,1,1,16.32,6,5,5,0,0,0-1.68-1.79,10.52,10.52,0,0,0-10.78,0,5,5,0,0,0-1.68,1.79A9.29,9.29,0,0,1,3.25,12.5Zm14.53,7.59c-.21.14-.42.28-.64.4a1.38,1.38,0,0,1-.24.14l-.51.26c-.23.11-.47.21-.71.3a8.84,8.84,0,0,1-1.77.45c-.2,0-.4.06-.6.07a8.22,8.22,0,0,1-1.62,0c-.2,0-.4,0-.6-.07a8.84,8.84,0,0,1-1.77-.45c-.24-.09-.48-.19-.71-.3l-.51-.26a1.38,1.38,0,0,1-.24-.14c-.22-.12-.43-.26-.64-.4a7.73,7.73,0,0,1-.64-.49,3.23,3.23,0,0,1,1.36-1.68,9,9,0,0,1,9.11,0,3.25,3.25,0,0,1,1.37,1.68A7.73,7.73,0,0,1,17.78,20.09Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  icon_box: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-icon-box-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Icon_Box",
    "data-name": "Icon Box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M16.5,23.25h-8c-3.65,0-5.75-2.1-5.75-5.75V7.5c0-3.65,2.1-5.75,5.75-5.75h8c3.65,0,5.75,2.1,5.75,5.75v10C22.25,21.15,20.15,23.25,16.5,23.25Zm-8-20c-2.86,0-4.25,1.39-4.25,4.25v10c0,2.86,1.39,4.25,4.25,4.25h8c2.86,0,4.25-1.39,4.25-4.25V7.5c0-2.86-1.39-4.25-4.25-4.25Z",
    transform: "translate(-2.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M19,9.75H17A2.75,2.75,0,0,1,14.25,7V5a.75.75,0,0,1,1.5,0V7A1.25,1.25,0,0,0,17,8.25h2a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,14.25h-4a.75.75,0,0,1,0-1.5h4a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M16.5,18.25h-8a.75.75,0,0,1,0-1.5h8a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -1.75)"
  }))),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.34"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-icon-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.16,23.17a4.12,4.12,0,0,1-2.06-.67l-3-1.77a1.47,1.47,0,0,0-1.23,0l-3,1.77c-1.77,1.05-2.81.63-3.28.29s-1.18-1.21-.71-3.21l.71-3.07A1.49,1.49,0,0,0,5.3,15.4L2.82,12.92a2.71,2.71,0,0,1-1-2.82A2.71,2.71,0,0,1,4.27,8.37l3.19-.53a1.43,1.43,0,0,0,.86-.64l1.77-3.52c.8-1.61,1.85-1.85,2.41-1.85h0c.55,0,1.6.24,2.4,1.85L16.66,7.2a1.41,1.41,0,0,0,.87.64l3.19.53a2.76,2.76,0,0,1,2.44,1.74,2.74,2.74,0,0,1-1,2.82L19.7,15.4a1.46,1.46,0,0,0-.32,1.12l.71,3.06c.46,2-.25,2.88-.71,3.22A2.07,2.07,0,0,1,18.16,23.17ZM12.5,19.09a2.74,2.74,0,0,1,1.37.35l3,1.77c.88.52,1.43.52,1.63.37s.36-.67.14-1.66l-.71-3.07a2.92,2.92,0,0,1,.72-2.51l2.48-2.48c.48-.48.71-1,.61-1.3s-.58-.59-1.26-.71l-3.18-.53a2.94,2.94,0,0,1-2-1.46L13.56,4.35h0c-.32-.64-.72-1-1.06-1h0c-.35,0-.75.38-1.07,1L9.67,7.87a2.92,2.92,0,0,1-2,1.45l-3.19.53c-.67.12-1.14.38-1.25.71s.12.82.61,1.3l2.48,2.48a2.92,2.92,0,0,1,.72,2.51l-.71,3.07c-.23,1-.07,1.51.14,1.66s.75.15,1.62-.37l3-1.77A2.74,2.74,0,0,1,12.5,19.09Z",
    transform: "translate(-1.75 -1.83)"
  }))),
  content_switcher: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 17.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-content-switcher-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Content_Switcher",
    "data-name": "Content Switcher"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M14.5,21.25h-4a8.75,8.75,0,0,1,0-17.5h4a8.75,8.75,0,0,1,0,17.5Zm-4-16a7.25,7.25,0,0,0,0,14.5h4a7.25,7.25,0,0,0,0-14.5Z",
    transform: "translate(-1.75 -3.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M14.5,17.25a4.75,4.75,0,1,1,4.75-4.75A4.75,4.75,0,0,1,14.5,17.25Zm0-8a3.25,3.25,0,1,0,3.25,3.25A3.26,3.26,0,0,0,14.5,9.25Z",
    transform: "translate(-1.75 -3.75)"
  }))),
  accordion: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-accordion-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Accordion"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM21.75,15.5c0,4.61-1.64,6.25-6.25,6.25h-6c-4.61,0-6.25-1.64-6.25-6.25V13.25h18.5Zm0-3.75H3.25V9.5c0-4.61,1.64-6.25,6.25-6.25h6c4.61,0,6.25,1.64,6.25,6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.5,8.5h-12a.75.75,0,0,1,0-1.5h12a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.5,18.25h-12a.75.75,0,0,1,0-1.5h12a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  button: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 12.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-button-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17,18.75H15.49a.75.75,0,0,1,0-1.5H17a4.75,4.75,0,0,0,0-9.5H15.49a.75.75,0,0,1,0-1.5H17a6.25,6.25,0,0,1,0,12.5Z",
    transform: "translate(-1.75 -6.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M9.5,18.75H8A6.25,6.25,0,0,1,8,6.25H9.5a.75.75,0,0,1,0,1.5H8a4.75,4.75,0,0,0,0,9.5H9.5a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -6.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M16.5,13.25h-8a.75.75,0,0,1,0-1.5h8a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -6.25)"
  }))),
  trigger: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19.5 11.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-trigger-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Trigger"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,8.25H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -6.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,13.25H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -6.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,18.25H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -6.75)"
  }))),
  count_up: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-counter-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Counter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,23.25A10.75,10.75,0,1,1,23.25,12.5,10.76,10.76,0,0,1,12.5,23.25Zm0-20a9.25,9.25,0,1,0,9.25,9.25A9.26,9.26,0,0,0,12.5,3.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M16.21,16.43a.67.67,0,0,1-.38-.11l-3.1-1.85a2.94,2.94,0,0,1-1.35-2.36V8a.75.75,0,0,1,1.5,0v4.1a1.46,1.46,0,0,0,.61,1.07L16.59,15a.73.73,0,0,1,.26,1A.74.74,0,0,1,16.21,16.43Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  heading: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20.16 18.94"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-heading-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M22.58,5.85V7.67a.75.75,0,1,1-1.5,0V5.85a1.32,1.32,0,0,0-1.32-1.32H13.24a.13.13,0,0,1,0,.06V20.47h3.19a.75.75,0,0,1,0,1.5H8.56a.75.75,0,0,1,0-1.5h3.19V4.59a.13.13,0,0,1,0-.06H5.24A1.32,1.32,0,0,0,3.92,5.85V7.67a.75.75,0,0,1-1.5,0V5.85A2.82,2.82,0,0,1,5.24,3H19.76A2.82,2.82,0,0,1,22.58,5.85Z",
    transform: "translate(-2.42 -3.03)"
  }))),
  dualHeading: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.52 20.36"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-dual-heading-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Dual_Heading",
    "data-name": "Dual Heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M19.86,4.92V6.43a.75.75,0,0,1-1.5,0V4.92a1.1,1.1,0,0,0-1.1-1.1H11.55v14h2a.75.75,0,1,1,0,1.5H8a.75.75,0,0,1,0-1.5h2.07v-14H4.34a1.1,1.1,0,0,0-1.1,1.1V6.43a.75.75,0,0,1-1.5,0V4.92a2.61,2.61,0,0,1,2.6-2.6H17.26A2.61,2.61,0,0,1,19.86,4.92Z",
    transform: "translate(-1.74 -2.32)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M23.26,12.16V13a.75.75,0,0,1-1.5,0v-.8a.58.58,0,0,0-.57-.57H17.33v9.59h1.39a.75.75,0,0,1,0,1.5H14.44a.75.75,0,1,1,0-1.5h1.39V11.59H14.18a.75.75,0,0,1,0-1.5h7A2.07,2.07,0,0,1,23.26,12.16Z",
    transform: "translate(-1.74 -2.32)"
  }))),
  fancyText: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19.37 20.37"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-fancy-text-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Fancy_Text",
    "data-name": "Fancy Text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M20.59,4.91a2.87,2.87,0,0,0-4.06,0L15,6.4,3.53,17.91A2.87,2.87,0,0,0,7.59,22L19.1,10.46,20.59,9a2.87,2.87,0,0,0,0-4.06Zm-14.06,16a1.4,1.4,0,0,1-1.94,0,1.38,1.38,0,0,1,0-1.94l11-11,1.94,1.94Zm13-13-1,1L16.63,6.93l1-1a1.38,1.38,0,0,1,1.94,0,1.35,1.35,0,0,1,.4,1A1.37,1.37,0,0,1,19.53,7.91Z",
    transform: "translate(-2.69 -2.44)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M10.56,6.44l-.14,0L9.06,6l-1.36.4a.49.49,0,0,1-.49-.13.5.5,0,0,1-.13-.49l.4-1.36-.4-1.36a.49.49,0,0,1,.13-.49.49.49,0,0,1,.49-.13l1.36.4,1.36-.4a.5.5,0,0,1,.62.62l-.4,1.36L11,5.8a.5.5,0,0,1-.13.49A.47.47,0,0,1,10.56,6.44ZM9.06,5,9.2,5l.62.18-.18-.62a.45.45,0,0,1,0-.28l.18-.62-.62.18a.45.45,0,0,1-.28,0L8.3,3.68l.18.62a.45.45,0,0,1,0,.28L8.3,5.2,8.92,5Z",
    transform: "translate(-2.69 -2.44)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M6.56,12.44l-.14,0L5.06,12l-1.36.4a.5.5,0,0,1-.62-.62l.4-1.36-.4-1.36a.49.49,0,0,1,.13-.49.5.5,0,0,1,.49-.13l1.36.4,1.36-.4a.49.49,0,0,1,.49.13A.49.49,0,0,1,7,9.08l-.4,1.36L7,11.8a.5.5,0,0,1-.13.49A.47.47,0,0,1,6.56,12.44ZM5.06,11l.14,0,.62.18-.18-.62a.45.45,0,0,1,0-.28l.18-.62-.62.18a.45.45,0,0,1-.28,0L4.3,9.68l.18.62a.45.45,0,0,1,0,.28l-.18.62L4.92,11Z",
    transform: "translate(-2.69 -2.44)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.56,17.44l-.14,0L20.06,17l-1.36.4a.5.5,0,0,1-.62-.62l.4-1.36-.4-1.36a.51.51,0,0,1,.13-.5.52.52,0,0,1,.49-.12l1.36.4,1.36-.4a.54.54,0,0,1,.5.12.53.53,0,0,1,.12.5l-.4,1.36L22,16.8a.52.52,0,0,1-.12.49A.51.51,0,0,1,21.56,17.44ZM19.3,14.68l.18.62a.45.45,0,0,1,0,.28l-.18.62.62-.18a.45.45,0,0,1,.28,0l.62.18-.18-.62a.45.45,0,0,1,0-.28l.18-.62-.62.18a.45.45,0,0,1-.28,0Z",
    transform: "translate(-2.69 -2.44)"
  }))),
  maps: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.21 18.84"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-google-maps-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Google_Maps",
    "data-name": "Google Maps"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.85,4.4A2.86,2.86,0,0,0,19,4.59L16.64,5.93a1.47,1.47,0,0,1-1.18,0L10.21,3.34a3,3,0,0,0-2.6.07L3.28,5.89A3,3,0,0,0,1.9,8.27V18a2.84,2.84,0,0,0,1.25,2.59A2.86,2.86,0,0,0,6,20.4l2.35-1.34a1.47,1.47,0,0,1,1.18,0l5.25,2.63a3,3,0,0,0,2.6-.08l4.33-2.48a3,3,0,0,0,1.39-2.39V7A2.84,2.84,0,0,0,21.85,4.4ZM7.61,17.75,5.26,19.09a1.39,1.39,0,0,1-1.36.2A1.44,1.44,0,0,1,3.4,18V8.27A1.47,1.47,0,0,1,4,7.2L8.17,4.83v12.7A2.11,2.11,0,0,0,7.61,17.75Zm7.72,2.5-5.11-2.56a2.11,2.11,0,0,0-.55-.19V4.75L14.79,7.3a2.3,2.3,0,0,0,.54.19Zm6.28-3.54A1.5,1.5,0,0,1,21,17.8l-4.14,2.37V7.46a2.11,2.11,0,0,0,.56-.22L19.74,5.9a1.39,1.39,0,0,1,1.36-.2A1.43,1.43,0,0,1,21.61,7Z",
    transform: "translate(-1.9 -3.08)"
  }))),
  pricingTable: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-pricing-table-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Pricing_Table",
    "data-name": "Pricing Table"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,1.75A10.75,10.75,0,1,0,23.25,12.5,10.76,10.76,0,0,0,12.5,1.75Zm0,20a9.25,9.25,0,1,1,9.25-9.25A9.26,9.26,0,0,1,12.5,21.75Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M14.77,12.49,13.25,12V8.59h.37a1.53,1.53,0,0,1,1.47,1.58.75.75,0,0,0,1.5,0,3,3,0,0,0-3-3.08h-.37V6.5a.75.75,0,0,0-1.5,0v.59h-.64A2.74,2.74,0,0,0,8.42,9.87a2.47,2.47,0,0,0,1.83,2.64l1.5.52v3.38h-.36a1.53,1.53,0,0,1-1.47-1.58.75.75,0,0,0-1.5,0,3,3,0,0,0,3,3.08h.36v.59a.75.75,0,0,0,1.5,0v-.59h.65a2.74,2.74,0,0,0,2.69-2.78A2.47,2.47,0,0,0,14.77,12.49Zm-3-1.05-1-.35c-.56-.19-.82-.38-.82-1.22a1.24,1.24,0,0,1,1.19-1.28h.64Zm2.15,5h-.65V13.55l1,.36c.56.19.82.38.82,1.22A1.23,1.23,0,0,1,13.9,16.41Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  testimonials: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.48 21.54"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-testimonials-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Testimonials"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17.7,1.73H11.3c-3.82,0-5.08,2.12-5.42,4.13-2,.33-4.12,1.59-4.12,5.41v4c0,4.62,2.12,5.54,5.54,5.54h.37l.07,0,1.2,1.6a1.87,1.87,0,0,0,3.12,0l1.24-1.62h.4c3.84,0,5.09-2.14,5.41-4.12,2-.33,4.13-1.6,4.13-5.42v-4C23.24,3.65,21.32,1.73,17.7,1.73Zm-4,17.58h-.4a1.57,1.57,0,0,0-1.24.62l-1.2,1.61a.4.4,0,0,1-.72,0l-1.2-1.6a1.68,1.68,0,0,0-1.24-.62H7.3c-3,0-4-.61-4-4v-4c0-2.5,1-3.77,3.29-4h.09a4.68,4.68,0,0,1,.66,0h6.4c2.79,0,4,1.25,4,4v4a3.85,3.85,0,0,1,0,.48,1.49,1.49,0,0,1,0,.21C17.51,18.25,16.24,19.31,13.7,19.31Zm8-8c0,2.2-.8,3.45-2.5,3.87V11.27c0-3.62-1.92-5.54-5.54-5.54H7.43C7.86,4,9.1,3.23,11.3,3.23h6.4c2.79,0,4,1.25,4,4Z",
    transform: "translate(-1.76 -1.73)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M14,14.73a1,1,0,0,1,0-2h0a1,1,0,1,1,0,2Z",
    transform: "translate(-1.76 -1.73)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M10.51,14.73a1,1,0,0,1,0-2h0a1,1,0,1,1,0,2Z",
    transform: "translate(-1.76 -1.73)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M7,14.73a1,1,0,0,1,0-2H7a1,1,0,1,1,0,2Z",
    transform: "translate(-1.76 -1.73)"
  }))),
  video_box: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-video-box-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Video_Box",
    "data-name": "Video Box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM16.73,3.3c2.78.22,4.22,1.26,4.76,3.56H16.73Zm-1.5,0V6.86H9.77V3.25Zm-7,0V6.86H3.51C4.05,4.56,5.49,3.52,8.27,3.3ZM21.75,15.5c0,4.61-1.64,6.25-6.25,6.25h-6c-4.61,0-6.25-1.64-6.25-6.25v-6c0-.4,0-.78,0-1.14H21.71c0,.36,0,.74,0,1.14Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M11.59,18.63a2,2,0,0,1-1-.26A2.45,2.45,0,0,1,9.5,16.15v-2.4a2.45,2.45,0,0,1,1.09-2.22,2.47,2.47,0,0,1,2.46.17l2.07,1.2a2.44,2.44,0,0,1,1.38,2A2.45,2.45,0,0,1,15.13,17L13,18.2A2.94,2.94,0,0,1,11.59,18.63Zm0-5.86a.51.51,0,0,0-.25.06,1.06,1.06,0,0,0-.34.92v2.4a1.06,1.06,0,0,0,.34.92,1,1,0,0,0,.95-.17l2.09-1.2c.38-.22.62-.51.62-.75s-.24-.53-.63-.75L12.29,13A1.44,1.44,0,0,0,11.59,12.77Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  banner: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-banner-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Banner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM21.75,15.5c0,4.61-1.64,6.25-6.25,6.25h-6c-2.76,0-4.46-.59-5.36-2.05l4.38-2.94a1.5,1.5,0,0,1,1.72.08l.34.3a3,3,0,0,0,3.8,0l4.16-3.57a1.47,1.47,0,0,1,1.84,0l1.37,1.18Zm0-2.74-.39-.33a3,3,0,0,0-3.8,0L13.4,16a1.47,1.47,0,0,1-1.83,0l-.34-.3a3,3,0,0,0-3.55-.19L3.55,18.29a10.78,10.78,0,0,1-.3-2.79v-6c0-4.61,1.64-6.25,6.25-6.25h6c4.61,0,6.25,1.64,6.25,6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M9.5,11.25A2.75,2.75,0,1,1,12.25,8.5,2.75,2.75,0,0,1,9.5,11.25Zm0-4A1.25,1.25,0,1,0,10.75,8.5,1.25,1.25,0,0,0,9.5,7.25Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  bulletList: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-bullet-list-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Bullet_List",
    "data-name": "Bullet List"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.12,10.13H12.87a.75.75,0,0,1,0-1.5h5.25a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M7.63,10.88a.74.74,0,0,1-.53-.22l-.75-.75A.75.75,0,1,1,7.41,8.85l.22.22L9.35,7.35a.75.75,0,0,1,1.06,1.06L8.16,10.66A.74.74,0,0,1,7.63,10.88Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.12,17.13H12.87a.75.75,0,1,1,0-1.5h5.25a.75.75,0,1,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M7.63,17.88a.74.74,0,0,1-.53-.22l-.75-.75a.75.75,0,1,1,1.06-1.06l.22.22,1.72-1.72a.75.75,0,0,1,1.06,1.06L8.16,17.66A.74.74,0,0,1,7.63,17.88Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,23.25h-6c-5.43,0-7.75-2.32-7.75-7.75v-6c0-5.43,2.32-7.75,7.75-7.75h6c5.43,0,7.75,2.32,7.75,7.75v6C23.25,20.93,20.93,23.25,15.5,23.25Zm-6-20c-4.61,0-6.25,1.64-6.25,6.25v6c0,4.61,1.64,6.25,6.25,6.25h6c4.61,0,6.25-1.64,6.25-6.25v-6c0-4.61-1.64-6.25-6.25-6.25Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  section: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-section-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M2.5,10.25a.76.76,0,0,1-.75-.75V7A5.25,5.25,0,0,1,7,1.75H9.5a.75.75,0,0,1,0,1.5H7A3.75,3.75,0,0,0,3.25,7V9.5A.76.76,0,0,1,2.5,10.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M22.5,10.25a.76.76,0,0,1-.75-.75V7A3.75,3.75,0,0,0,18,3.25H15.5a.75.75,0,0,1,0-1.5H18A5.26,5.26,0,0,1,23.25,7V9.5A.76.76,0,0,1,22.5,10.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18,23.25H16.5a.75.75,0,0,1,0-1.5H18A3.75,3.75,0,0,0,21.75,18V16.5a.75.75,0,0,1,1.5,0V18A5.26,5.26,0,0,1,18,23.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M9.5,23.25H7A5.26,5.26,0,0,1,1.75,18V15.5a.75.75,0,0,1,1.5,0V18A3.75,3.75,0,0,0,7,21.75H9.5a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  lottie: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-lottie-animation-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Lottie_Animations",
    "data-name": "Lottie Animations"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM21.75,15.5c0,4.61-1.64,6.25-6.25,6.25h-6c-4.61,0-6.25-1.64-6.25-6.25v-6c0-4.61,1.64-6.25,6.25-6.25h6c4.61,0,6.25,1.64,6.25,6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M16.51,8.25c-2.66,0-3.64,1.89-4.43,3.41l-.51,1c-.84,1.61-1.47,2.59-3.08,2.59a.79.79,0,0,0-.54.22.77.77,0,0,0,0,1.08H8a.75.75,0,0,0,.53.22c2.66,0,3.64-1.89,4.43-3.41l.51-1c.84-1.61,1.47-2.59,3.08-2.59A.75.75,0,0,0,17,9.55.74.74,0,0,0,17.27,9a.76.76,0,0,0-.76-.76Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  modal: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-modal-box-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Modal_Box",
    "data-name": "Modal Box"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.8,6.74a.75.75,0,0,1,0,1.06.75.75,0,0,1-1.06,0L19.5,6.56,18.26,7.8a.75.75,0,0,1-1.06,0,.75.75,0,0,1,0-1.06L18.44,5.5,17.2,4.26A.75.75,0,0,1,18.26,3.2L19.5,4.44,20.74,3.2A.75.75,0,0,1,21.8,4.26L20.56,5.5Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M7.5,14.75A.76.76,0,0,1,6.75,14V11a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,7.5,14.75Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,14.75a.76.76,0,0,1-.75-.75V11a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,12.5,14.75Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17.5,14.75a.76.76,0,0,1-.75-.75V11a.75.75,0,0,1,1.5,0v3A.76.76,0,0,1,17.5,14.75Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,23.25h-6c-5.43,0-7.75-2.32-7.75-7.75v-6c0-5.43,2.32-7.75,7.75-7.75h4a.75.75,0,0,1,0,1.5h-4c-4.61,0-6.25,1.64-6.25,6.25v6c0,4.61,1.64,6.25,6.25,6.25h6c4.61,0,6.25-1.64,6.25-6.25v-4a.75.75,0,0,1,1.5,0v4C23.25,20.93,20.93,23.25,15.5,23.25Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  breadcrumbs: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-breadcrumbs-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Breadcrumbs"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,23.25h-6c-5.43,0-7.75-2.32-7.75-7.75v-6c0-5.43,2.32-7.75,7.75-7.75h6c5.43,0,7.75,2.32,7.75,7.75v6C23.25,20.93,20.93,23.25,15.5,23.25Zm-6-20c-4.61,0-6.25,1.64-6.25,6.25v6c0,4.61,1.64,6.25,6.25,6.25h6c4.61,0,6.25-1.64,6.25-6.25v-6c0-4.61-1.64-6.25-6.25-6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M13.49,16.78a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06l3-3-3-3A.75.75,0,1,1,14,8.44L17.54,12a.75.75,0,0,1,0,1.06L14,16.56A.74.74,0,0,1,13.49,16.78Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M8.49,16.78A.74.74,0,0,1,8,16.56.75.75,0,0,1,8,15.5l3-3-3-3A.75.75,0,1,1,9,8.44L12.54,12a.75.75,0,0,1,0,1.06L9,16.56A.74.74,0,0,1,8.49,16.78Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  container: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-row-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17,20.25H8a12.08,12.08,0,0,1-1.77-.1c-3.32-.36-4-2.35-4-5.65v-4c0-3.3.66-5.29,4-5.66A13.21,13.21,0,0,1,8,4.75h9a12.17,12.17,0,0,1,1.77.1c3.32.36,4,2.35,4,5.65v4c0,3.3-.66,5.29-4,5.66A13.11,13.11,0,0,1,17,20.25Zm-9-14a12.26,12.26,0,0,0-1.55.08c-2,.23-2.7.86-2.7,4.17v4c0,3.31.67,3.94,2.67,4.17A13,13,0,0,0,8,18.75h9a12.15,12.15,0,0,0,1.55-.08c2-.23,2.7-.86,2.7-4.17v-4c0-3.31-.67-3.94-2.67-4.16A11.22,11.22,0,0,0,17,6.25Z",
    transform: "translate(-2.25 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M20,3.25H5a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.25 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M20,23.25H5a.75.75,0,0,1,0-1.5H20a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.25 -1.75)"
  }))),
  search: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21.5 21.5",
    width: "21.5",
    height: "21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-search-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Search"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12,22.25A10.25,10.25,0,1,1,22.25,12,10.26,10.26,0,0,1,12,22.25Zm0-19A8.75,8.75,0,1,0,20.75,12,8.77,8.77,0,0,0,12,3.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M22.5,23.25A.74.74,0,0,1,22,23l-2-2A.75.75,0,0,1,21,20l2,2A.75.75,0,0,1,23,23,.74.74,0,0,1,22.5,23.25Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  image_separator: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.49",
    height: "21.5",
    viewBox: "0 0 21.49 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-image-separator-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Image_Separator",
    "data-name": "Image Separator"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.87,23.25H6.11a4.37,4.37,0,0,1-3.89-6.32l1.72-3.44a3.23,3.23,0,0,1,2.49-1.93,3.21,3.21,0,0,1,2.81,1.36l.22.29a1.76,1.76,0,0,0,1.45.78,1.74,1.74,0,0,0,1.3-1L14.1,9.57c.78-1.41,1.83-2.16,3-2.09s2.08.9,2.71,2.38l3.13,7.31h0a4.36,4.36,0,0,1-4,6.08ZM6.7,13H6.58a1.8,1.8,0,0,0-1.3,1.11L3.56,17.6a2.86,2.86,0,0,0,2.55,4.15H18.87a2.87,2.87,0,0,0,2.64-4l-3.13-7.3C18,9.55,17.47,9,17,9s-1.09.47-1.56,1.32L13.52,13.7A3.19,3.19,0,0,1,11,15.48a3.24,3.24,0,0,1-2.75-1.34l-.23-.29A1.84,1.84,0,0,0,6.7,13Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M7.49,9.25A3.75,3.75,0,1,1,11.24,5.5,3.76,3.76,0,0,1,7.49,9.25Zm0-6A2.25,2.25,0,1,0,9.74,5.5,2.25,2.25,0,0,0,7.49,3.25Z",
    transform: "translate(-1.75 -1.75)"
  })))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PBG_Block_Icons);

/***/ }),

/***/ "./src/common/logo.js":
/*!****************************!*\
  !*** ./src/common/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Logo = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "231",
    height: "57",
    viewBox: "0 0 227.01 55.38"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-blocks-logo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.74,44.18,34,32.82,2.08,24.21v-.88l58.34-6.1c-1.69,2.31-3.75,3.29-5.46,4.64-2.46,1.95-5.13,3.64-7.52,5.67-2,1.68-3.85,2.11-6.24.55,1.53-2.17,4.18-3.07,6.51-5.7L22.06,24.94l-.1.73,20.42,5.56-33.56,25C8,55.53,8.54,55,8.74,54.56c3.11-7.1,6.27-14.17,9.34-21.28.59-1.36,1.19-2.05,2.84-1.63s2.2,1.08,1.36,2.81c-1.48,3-2.74,6.19-4.09,9.28Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M52.93,50.36Q44,45.93,35.11,41.51c-.5-.25-1.32-.71-.66-1.24,1.11-.89,1.95-2.75,3.89-1.84s4,2,6.25,3.19c.08-2.12-1-3.62-1.75-5.07-1.22-2.23.19-3.12,1.67-3.88,2-1,1.71,1.11,2.07,1.88,2.36,5.05,4.57,10.18,6.83,15.28Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M24.81,18.06,32.08.81l6.33,15.08c.26.64.21,1.28-.56,1.31-1.27.06-2.78,1-3.72-.61-.68-1.16-1.17-2.43-2-4.12C30.36,15.42,29.88,19.73,24.81,18.06Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M73.57,13.92a7.15,7.15,0,0,1,2.25.31,4.22,4.22,0,0,1,1.54.85,3.25,3.25,0,0,1,.9,1.28,4.46,4.46,0,0,1,.29,1.6,4.63,4.63,0,0,1-.3,1.7A3.4,3.4,0,0,1,77.34,21a4.28,4.28,0,0,1-1.55.86,7,7,0,0,1-2.22.31h-1.5V26.3H69.2V13.92Zm0,6.07a2.08,2.08,0,0,0,1.61-.53,2.14,2.14,0,0,0,.5-1.5,2.34,2.34,0,0,0-.13-.77,1.73,1.73,0,0,0-.39-.6,1.69,1.69,0,0,0-.65-.39,3,3,0,0,0-.94-.13h-1.5V20Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M90.82,26.3h-2.6a1.1,1.1,0,0,1-1-.54l-2.06-3.6a1.32,1.32,0,0,0-.32-.34,1,1,0,0,0-.51-.1h-.74V26.3H80.69V13.92h4a8.41,8.41,0,0,1,2.29.27,4.41,4.41,0,0,1,1.55.77,2.9,2.9,0,0,1,.87,1.17,3.83,3.83,0,0,1,.27,1.46,3.88,3.88,0,0,1-.16,1.14,3.78,3.78,0,0,1-.48,1,3.93,3.93,0,0,1-.77.81,4.4,4.4,0,0,1-1.07.59,2.26,2.26,0,0,1,.53.36,2.45,2.45,0,0,1,.44.51Zm-6.1-6.56a3,3,0,0,0,1-.15,2,2,0,0,0,.68-.41,1.65,1.65,0,0,0,.38-.62,2.33,2.33,0,0,0,.12-.76,1.57,1.57,0,0,0-.54-1.27,2.43,2.43,0,0,0-1.64-.46H83.56v3.67Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M95.44,16.13V19h3.89v2.12H95.44v2.95h5.08V26.3h-8V13.92h8v2.21Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M116.89,13.92V26.3h-2.53V19.18c0-.17,0-.35,0-.54s0-.39,0-.58l-3.29,6.36a1.06,1.06,0,0,1-.41.45,1.18,1.18,0,0,1-.59.16h-.4a1.18,1.18,0,0,1-.59-.16,1.06,1.06,0,0,1-.41-.45L105.44,18c0,.2,0,.4,0,.6a5.06,5.06,0,0,1,0,.54V26.3H103V13.92h2.52a.92.92,0,0,1,.25.06.49.49,0,0,1,.2.13.84.84,0,0,1,.17.25l3.19,6.28.33.67q.15.35.3.72l.3-.74c.11-.23.22-.46.34-.68l3.18-6.25a.84.84,0,0,1,.17-.25.49.49,0,0,1,.2-.13.92.92,0,0,1,.25-.06h2.52Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M122.86,26.3H120V13.92h2.89Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M131.1,24a2.64,2.64,0,0,0,1-.19,2.13,2.13,0,0,0,.77-.55,2.59,2.59,0,0,0,.47-.87,3.52,3.52,0,0,0,.17-1.17V13.92h2.87v7.33a5.63,5.63,0,0,1-.37,2.09A4.53,4.53,0,0,1,135,25a4.7,4.7,0,0,1-1.68,1.07,6.51,6.51,0,0,1-4.44,0A4.7,4.7,0,0,1,127.2,25a4.53,4.53,0,0,1-1-1.64,5.63,5.63,0,0,1-.37-2.09V13.92h2.88v7.32a3.81,3.81,0,0,0,.16,1.17,2.49,2.49,0,0,0,.48.88,2.13,2.13,0,0,0,.77.55A2.59,2.59,0,0,0,131.1,24Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M153.27,13.92V26.3h-2.53V19.18c0-.17,0-.35,0-.54a5.67,5.67,0,0,1,.05-.58l-3.29,6.36a1.06,1.06,0,0,1-.41.45,1.19,1.19,0,0,1-.6.16h-.39a1.18,1.18,0,0,1-.59-.16,1.06,1.06,0,0,1-.41-.45L141.82,18c0,.2,0,.4,0,.6a5.06,5.06,0,0,1,0,.54V26.3h-2.53V13.92h2.52a1,1,0,0,1,.25.06.49.49,0,0,1,.2.13.84.84,0,0,1,.17.25l3.19,6.28.33.67q.15.35.3.72l.3-.74c.11-.23.22-.46.34-.68l3.18-6.25a.84.84,0,0,1,.17-.25.49.49,0,0,1,.2-.13.92.92,0,0,1,.25-.06h2.52Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M165.51,13.92a8.71,8.71,0,0,1,2.19.23,4.18,4.18,0,0,1,1.47.68,2.53,2.53,0,0,1,.82,1.05,3.41,3.41,0,0,1,.26,1.39,2.72,2.72,0,0,1-.12.8,2.24,2.24,0,0,1-.37.72,3.22,3.22,0,0,1-.65.62,4.3,4.3,0,0,1-1,.48,3.51,3.51,0,0,1,1.81,1,2.51,2.51,0,0,1,.58,1.72,3.38,3.38,0,0,1-1.2,2.66,4.33,4.33,0,0,1-1.46.79,6.36,6.36,0,0,1-2,.28h-5V13.92Zm-1.68,2.15v3.06h1.49a5.44,5.44,0,0,0,.86-.07,1.91,1.91,0,0,0,.65-.24,1,1,0,0,0,.41-.47,1.74,1.74,0,0,0,.14-.74,2.22,2.22,0,0,0-.11-.74,1,1,0,0,0-.34-.47,1.41,1.41,0,0,0-.58-.26,4.19,4.19,0,0,0-.84-.07Zm2,8.06a2.68,2.68,0,0,0,.93-.14,1.5,1.5,0,0,0,.57-.38,1.28,1.28,0,0,0,.28-.51,2.38,2.38,0,0,0,.07-.59,1.91,1.91,0,0,0-.09-.61,1,1,0,0,0-.3-.46,1.5,1.5,0,0,0-.58-.29,3.19,3.19,0,0,0-.9-.1h-2v3.08Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M180.48,24V26.3H173V13.92h2.87V24Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M194.47,20.1a6.62,6.62,0,0,1-.46,2.5,6.08,6.08,0,0,1-1.31,2,5.94,5.94,0,0,1-2,1.34,7.3,7.3,0,0,1-5.26,0,5.92,5.92,0,0,1-3.35-3.35,7,7,0,0,1,0-5,6,6,0,0,1,1.31-2,6.24,6.24,0,0,1,2-1.34,7,7,0,0,1,2.63-.48,6.74,6.74,0,0,1,2.63.49A6,6,0,0,1,194,17.61,6.6,6.6,0,0,1,194.47,20.1Zm-2.94,0a5.3,5.3,0,0,0-.24-1.65,3.61,3.61,0,0,0-.68-1.24,3.13,3.13,0,0,0-1.1-.79,3.78,3.78,0,0,0-1.47-.27,3.83,3.83,0,0,0-1.48.27,3.13,3.13,0,0,0-1.1.79,3.61,3.61,0,0,0-.68,1.24,5.3,5.3,0,0,0-.24,1.65,5.39,5.39,0,0,0,.24,1.67,3.61,3.61,0,0,0,.68,1.24,3,3,0,0,0,1.1.78,3.83,3.83,0,0,0,1.48.27,3.78,3.78,0,0,0,1.47-.27,3,3,0,0,0,1.1-.78,3.61,3.61,0,0,0,.68-1.24A5.39,5.39,0,0,0,191.53,20.1Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M205.19,23.1a.64.64,0,0,1,.2,0,.52.52,0,0,1,.2.14l1.14,1.19a4.69,4.69,0,0,1-1.88,1.48,6.58,6.58,0,0,1-2.66.5,6.38,6.38,0,0,1-2.53-.48,5.61,5.61,0,0,1-1.9-1.33,5.92,5.92,0,0,1-1.19-2,7.32,7.32,0,0,1-.42-2.52,7,7,0,0,1,.45-2.54,5.9,5.9,0,0,1,1.27-2,5.77,5.77,0,0,1,2-1.31,6.51,6.51,0,0,1,2.5-.47,6.89,6.89,0,0,1,1.32.12,7.72,7.72,0,0,1,1.15.34,5.1,5.1,0,0,1,1,.53,4.77,4.77,0,0,1,.8.66l-1,1.3a1.14,1.14,0,0,1-.22.22A.58.58,0,0,1,205,17a.68.68,0,0,1-.29-.06,3.09,3.09,0,0,1-.29-.17l-.34-.21a1.91,1.91,0,0,0-.43-.21,3.5,3.5,0,0,0-.59-.17,3.58,3.58,0,0,0-.78-.07,3.29,3.29,0,0,0-1.31.26,3.06,3.06,0,0,0-1,.77,3.63,3.63,0,0,0-.66,1.25,5.39,5.39,0,0,0-.24,1.67,5.23,5.23,0,0,0,.26,1.7,3.84,3.84,0,0,0,.71,1.24,3,3,0,0,0,1,.77,3.05,3.05,0,0,0,1.28.26,5.23,5.23,0,0,0,.71,0,2.77,2.77,0,0,0,.6-.12,2.32,2.32,0,0,0,.53-.24,3.89,3.89,0,0,0,.5-.38,1.64,1.64,0,0,1,.22-.14A.53.53,0,0,1,205.19,23.1Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M211.54,18.93H212a1,1,0,0,0,.92-.4l2.78-4a1.36,1.36,0,0,1,.53-.45,1.85,1.85,0,0,1,.71-.12h2.5l-3.67,5a2.43,2.43,0,0,1-.84.75,2.13,2.13,0,0,1,.59.33,2.66,2.66,0,0,1,.49.55l3.74,5.75h-2.57a2.58,2.58,0,0,1-.42,0,1.17,1.17,0,0,1-.3-.11.89.89,0,0,1-.22-.16,2.31,2.31,0,0,1-.18-.23l-2.81-4.31a.86.86,0,0,0-.38-.33,1.6,1.6,0,0,0-.63-.1h-.7V26.3h-2.87V13.92h2.87Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M228.2,16.43a1.22,1.22,0,0,1-.27.31.57.57,0,0,1-.36.1.9.9,0,0,1-.42-.12l-.51-.28a5.76,5.76,0,0,0-.65-.28,2.68,2.68,0,0,0-.83-.12,1.82,1.82,0,0,0-1.21.35,1.15,1.15,0,0,0-.39.93.9.9,0,0,0,.23.62,2.16,2.16,0,0,0,.63.42,6.79,6.79,0,0,0,.88.33l1,.33a8.18,8.18,0,0,1,1,.43,3.22,3.22,0,0,1,.88.63,2.66,2.66,0,0,1,.62.93,3.28,3.28,0,0,1,.24,1.32,4.51,4.51,0,0,1-.29,1.61,3.72,3.72,0,0,1-.87,1.3,4,4,0,0,1-1.39.88,5.25,5.25,0,0,1-1.88.32,6,6,0,0,1-1.18-.12,6.46,6.46,0,0,1-1.16-.34,6.1,6.1,0,0,1-1.06-.51,4.13,4.13,0,0,1-.85-.67l.85-1.34a.67.67,0,0,1,.26-.24.65.65,0,0,1,.36-.1,1,1,0,0,1,.52.16l.58.36a4.9,4.9,0,0,0,.76.36,2.72,2.72,0,0,0,1,.16,1.93,1.93,0,0,0,1.22-.35,1.33,1.33,0,0,0,.43-1.09,1,1,0,0,0-.24-.7,2,2,0,0,0-.62-.45,6,6,0,0,0-.88-.32l-1-.3a7.92,7.92,0,0,1-1-.41,3.2,3.2,0,0,1-.88-.64,3.1,3.1,0,0,1-.62-1,3.91,3.91,0,0,1-.24-1.46A3.48,3.48,0,0,1,222,14.92a4,4,0,0,1,1.33-.83,4.87,4.87,0,0,1,1.81-.31,6.74,6.74,0,0,1,1.11.09,6.34,6.34,0,0,1,1,.26,5.85,5.85,0,0,1,.91.42,3.82,3.82,0,0,1,.75.55Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M70.64,34.18v3.5h4.12v1.11H70.64V43.1H69.28v-10h6.18v1.11Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M87.5,38.09a5.77,5.77,0,0,1-.36,2.07,4.78,4.78,0,0,1-1,1.62,4.47,4.47,0,0,1-1.56,1,5.56,5.56,0,0,1-4,0,4.47,4.47,0,0,1-1.56-1,4.78,4.78,0,0,1-1-1.62A6.13,6.13,0,0,1,78,36a4.78,4.78,0,0,1,1-1.62,4.36,4.36,0,0,1,1.56-1.06,5.56,5.56,0,0,1,4,0,4.36,4.36,0,0,1,1.56,1.06,4.78,4.78,0,0,1,1,1.62A5.77,5.77,0,0,1,87.5,38.09Zm-1.4,0a5,5,0,0,0-.25-1.66,3.66,3.66,0,0,0-.71-1.24A3.06,3.06,0,0,0,84,34.41a4,4,0,0,0-2.94,0,3.14,3.14,0,0,0-1.12.78,3.52,3.52,0,0,0-.72,1.24A5,5,0,0,0,79,38.09a5,5,0,0,0,.25,1.65A3.52,3.52,0,0,0,80,41a3.14,3.14,0,0,0,1.12.78,4.14,4.14,0,0,0,2.94,0A3.06,3.06,0,0,0,85.14,41a3.66,3.66,0,0,0,.71-1.24A5,5,0,0,0,86.1,38.09Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M98,43.1H96.76a.57.57,0,0,1-.54-.29l-2.61-3.58a.8.8,0,0,0-.25-.24.91.91,0,0,0-.42-.07h-1V43.1H90.56v-10h2.83a6.11,6.11,0,0,1,1.64.19,3.17,3.17,0,0,1,1.15.56,2.23,2.23,0,0,1,.67.88,3,3,0,0,1,.21,1.15,2.94,2.94,0,0,1-.16,1,2.76,2.76,0,0,1-.49.83,2.7,2.7,0,0,1-.78.63,3.88,3.88,0,0,1-1,.39,1.23,1.23,0,0,1,.45.43Zm-4.64-5.17a3.26,3.26,0,0,0,1-.15,2.11,2.11,0,0,0,.76-.4,1.9,1.9,0,0,0,.46-.63,2.07,2.07,0,0,0,.15-.8,1.57,1.57,0,0,0-.59-1.35,2.8,2.8,0,0,0-1.76-.46H91.91v3.79Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M113.3,38.28v3.85a5.72,5.72,0,0,1-1.62.81,6.19,6.19,0,0,1-1.88.27,6,6,0,0,1-2.18-.37A4.8,4.8,0,0,1,106,41.79a4.61,4.61,0,0,1-1.06-1.62,5.62,5.62,0,0,1-.37-2.08,5.8,5.8,0,0,1,.36-2.09,4.66,4.66,0,0,1,1-1.62,4.72,4.72,0,0,1,1.62-1.05,5.73,5.73,0,0,1,2.13-.37,6.36,6.36,0,0,1,1.1.09,4.56,4.56,0,0,1,.95.25,4,4,0,0,1,.8.4,5.08,5.08,0,0,1,.7.52l-.39.62a.44.44,0,0,1-.23.18.4.4,0,0,1-.32-.07l-.39-.23a2.38,2.38,0,0,0-.53-.27,4.52,4.52,0,0,0-.73-.23,4.88,4.88,0,0,0-1-.09,4.18,4.18,0,0,0-1.54.28,3.36,3.36,0,0,0-1.17.79,3.46,3.46,0,0,0-.74,1.25,5.36,5.36,0,0,0,0,3.33,3.61,3.61,0,0,0,.77,1.27,3.39,3.39,0,0,0,1.22.79,4.47,4.47,0,0,0,1.6.27A4.63,4.63,0,0,0,111,42a5.4,5.4,0,0,0,1.06-.44V39.31h-1.56a.28.28,0,0,1-.21-.07.24.24,0,0,1-.08-.19v-.77Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M120.37,42a2.82,2.82,0,0,0,1.11-.21,2.25,2.25,0,0,0,.83-.59,2.5,2.5,0,0,0,.52-.9,3.51,3.51,0,0,0,.18-1.15v-6.1h1.35v6.1a4.69,4.69,0,0,1-.28,1.61,3.73,3.73,0,0,1-.79,1.28,3.51,3.51,0,0,1-1.26.85,4.2,4.2,0,0,1-1.66.31,4.25,4.25,0,0,1-1.67-.31,3.69,3.69,0,0,1-1.26-.85,3.73,3.73,0,0,1-.79-1.28,4.47,4.47,0,0,1-.28-1.61v-6.1h1.35v6.09a3.47,3.47,0,0,0,.18,1.15,2.47,2.47,0,0,0,.52.91,2.28,2.28,0,0,0,.83.59A2.83,2.83,0,0,0,120.37,42Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M134.7,34.21h-3.25V43.1H130.1V34.21h-3.26V33.07h7.86Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M143.49,42V43.1H137.3v-10h6.18v1.11h-4.82v3.33h3.9v1.06h-3.9V42Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M154.63,33.07v10H154a.76.76,0,0,1-.27-.05.9.9,0,0,1-.21-.19l-5.8-7.56c0,.11,0,.23,0,.34V43.1H146.5v-10h.86l.11,0a.3.3,0,0,1,.1.07.55.55,0,0,1,.1.11l5.81,7.55,0-.35c0-.11,0-.22,0-.32V33.07Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M161.51,33.07a6.11,6.11,0,0,1,1.59.18,3,3,0,0,1,1.1.52,2,2,0,0,1,.64.82,3,3,0,0,1,.2,1.1,2.16,2.16,0,0,1-.12.71,2,2,0,0,1-.34.63,2.53,2.53,0,0,1-.59.53,3,3,0,0,1-.83.38,3,3,0,0,1,1.67.79,2.08,2.08,0,0,1,.55,1.51,2.94,2.94,0,0,1-.23,1.17,2.53,2.53,0,0,1-.69.9,3.08,3.08,0,0,1-1.11.58,4.87,4.87,0,0,1-1.49.21h-3.55v-10Zm-1.85,1.07v3.42h1.8a3.63,3.63,0,0,0,1-.12,2,2,0,0,0,.7-.35,1.34,1.34,0,0,0,.41-.54,1.82,1.82,0,0,0,.14-.7,1.53,1.53,0,0,0-.54-1.3,2.7,2.7,0,0,0-1.65-.41ZM161.83,42a3.24,3.24,0,0,0,1-.13,1.7,1.7,0,0,0,.69-.38,1.41,1.41,0,0,0,.4-.57,2.11,2.11,0,0,0,.13-.73,1.5,1.5,0,0,0-.56-1.23,2.59,2.59,0,0,0-1.66-.45h-2.17V42Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M174.67,42V43.1h-6.19v-10h6.19v1.11h-4.83v3.33h3.91v1.06h-3.91V42Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M185.1,43.1h-1.2a.59.59,0,0,1-.55-.29l-2.6-3.58a.83.83,0,0,0-.26-.24.91.91,0,0,0-.42-.07h-1V43.1h-1.35v-10h2.83a6.14,6.14,0,0,1,1.65.19,3.2,3.2,0,0,1,1.14.56,2.14,2.14,0,0,1,.67.88,2.81,2.81,0,0,1,.22,1.15,2.94,2.94,0,0,1-.17,1,2.4,2.4,0,0,1-.49.83,2.8,2.8,0,0,1-.77.63,4,4,0,0,1-1,.39,1.41,1.41,0,0,1,.45.43Zm-4.63-5.17a3.3,3.3,0,0,0,1-.15,2.07,2.07,0,0,0,.75-.4,1.66,1.66,0,0,0,.46-.63,1.91,1.91,0,0,0,.16-.8,1.6,1.6,0,0,0-.59-1.35,2.82,2.82,0,0,0-1.77-.46H179v3.79Z",
    transform: "translate(-2.07 -0.81)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-2",
    d: "M195.63,38.28v3.85a5.67,5.67,0,0,1-1.61.81,6.23,6.23,0,0,1-1.88.27,6.06,6.06,0,0,1-2.19-.37,4.8,4.8,0,0,1-1.66-1.05,4.61,4.61,0,0,1-1.06-1.62,5.62,5.62,0,0,1-.37-2.08,5.8,5.8,0,0,1,.36-2.09,4.54,4.54,0,0,1,1-1.62,4.59,4.59,0,0,1,1.61-1.05A5.81,5.81,0,0,1,192,33a6.4,6.4,0,0,1,1.11.09,4.46,4.46,0,0,1,.94.25,4.36,4.36,0,0,1,.81.4,5.67,5.67,0,0,1,.69.52l-.39.62a.41.41,0,0,1-.23.18.4.4,0,0,1-.32-.07l-.38-.23a2.62,2.62,0,0,0-.53-.27,4.66,4.66,0,0,0-.74-.23,4.81,4.81,0,0,0-1-.09,4.09,4.09,0,0,0-1.53.28,3.19,3.19,0,0,0-1.17.79,3.48,3.48,0,0,0-.75,1.25,5.56,5.56,0,0,0,0,3.33,3.49,3.49,0,0,0,.78,1.27,3.26,3.26,0,0,0,1.21.79,4.51,4.51,0,0,0,1.6.27,4.63,4.63,0,0,0,1.24-.15,5.48,5.48,0,0,0,1.07-.44V39.31h-1.57a.3.3,0,0,1-.21-.07.27.27,0,0,1-.08-.19v-.77Z",
    transform: "translate(-2.07 -0.81)"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./src/common/popup.js":
/*!*****************************!*\
  !*** ./src/common/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Popup = props => {
  const {
    openPopup,
    setopenPopup,
    previousVersionSelect
  } = props;
  const {
    system_info
  } = PremiumBlocksPanelData;
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(openPopup);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setOpen(openPopup);
  }, [openPopup]);

  const onCancelClick = () => {
    setopenPopup(!openPopup);
  };

  const onOkClick = () => {
    const rollbackUrl = system_info.rollback_url_new.replace('VERSION', previousVersionSelect);
    setopenPopup(false);
    window.location.href = rollbackUrl;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-popup"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-popup-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-popup-header"
  }, props.header), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-popup-message"
  }, props.message), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-popup-confirm-buttons-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "pb-popup-buttons pb-popup-confirm-cancel",
    onClick: onCancelClick
  }, "Cancel"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "pb-popup-buttons pb-popup-confirm-ok",
    onClick: onOkClick
  }, "Continue"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/common/push-history.js":
/*!************************************!*\
  !*** ./src/common/push-history.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pushHistory = tab => {
  if (tab) {
    const url = new URL(window.location);
    url.searchParams.set('tab', tab);
    window.history.pushState({}, '', url);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pushHistory);

/***/ }),

/***/ "./src/common/warning.js":
/*!*******************************!*\
  !*** ./src/common/warning.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const Warning = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "pb-section-info-warning"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-info-outline"
  }), props.title);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Warning);

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/logo */ "./src/common/logo.js");


const {
  __
} = wp.i18n;

const Header = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-panel-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_logo__WEBPACK_IMPORTED_MODULE_1__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://premiumblocks.io/docs/",
    className: "docs pb-button secondary",
    target: "_blank"
  }, __('Knowledge Base    ', "premium-blocks-for-gutenberg")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/layout/Notices.js":
/*!*******************************!*\
  !*** ./src/layout/Notices.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies.
 */





const Notices = () => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
  const snackbarNotices = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(notices, {
    type: "snackbar"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notices);

/***/ }),

/***/ "./src/options-component.js":
/*!**********************************!*\
  !*** ./src/options-component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_SingleOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/SingleOption */ "./src/common/SingleOption.js");



const OptionsComponent = _ref => {
  let {
    options,
    onChange,
    values,
    setValues
  } = _ref;
  return Object.keys(options).map(optionId => {
    let value = values[optionId];
    let option = options[optionId];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_SingleOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: value,
      optionId: optionId,
      params: option,
      onChange: newVal => {
        onChange(newVal, optionId);
      } // setValues={setValues}
      ,
      key: optionId
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsComponent);

/***/ }),

/***/ "./src/store/panel-store.js":
/*!**********************************!*\
  !*** ./src/store/panel-store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelProvider": () => (/* binding */ PanelProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const PanelContext = React.createContext({
  tabs: []
});
const PanelProvider = props => {
  const tabs = [];
  const event = new CustomEvent('pb:dashboard:customtabs', {
    detail: tabs
  });
  document.dispatchEvent(event);
  const pluginsContext = {
    tabs
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelContext.Provider, {
    value: pluginsContext
  }, props.children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelContext);

/***/ }),

/***/ "./src/tabs/options.js":
/*!*****************************!*\
  !*** ./src/tabs/options.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options-component */ "./src/options-component.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);





const {
  __
} = wp.i18n;



const OptionsTab = props => {
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(PremiumBlocksPanelData.values);
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);

  const handleChange = async (newValues, id) => {
    let newItems = { ...values
    };
    newItems[id] = newValues;
    const body = new FormData();
    body.append("action", "pb-panel-update-option");
    body.append("nonce", PremiumBlocksPanelData.nonce);
    body.append("option", id);
    body.append("value", newValues);

    try {
      const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
        method: "POST",
        body
      });

      if (response.status === 200) {
        const {
          success,
          data
        } = await response.json();

        if (success && data.values) {
          setValues(newItems);
          createNotice("success", "Settings saved ", {
            isDismissible: true,
            type: "snackbar"
          });
        }
      }
    } catch (e) {
      console.log(e);
      createNotice("error", __("An unknown error occurred.", ""), {
        isDismissible: true,
        type: "snackbar"
      });
    }
  };

  const tabs = [{
    name: "All",
    slug: "all"
  }, {
    name: "Content",
    slug: "content"
  }, {
    name: "Creative",
    slug: "creative"
  }, {
    name: "Section",
    slug: "section"
  }, {
    name: "Marketing",
    slug: "marketing"
  }, {
    name: "Theme",
    slug: "theme"
  }];
  const [activeFilter, setFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  let options = Object.keys(props.options).filter(key => props.options[key].category.includes(activeFilter)).reduce((obj, key) => {
    return Object.assign(obj, {
      [key]: props.options[key]
    });
  }, {});
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-options-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "pb-filter-tabs",
    "aria-label": "Tabs"
  }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab.name,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("pb-filter-tab", {
      active: activeFilter === tab.slug
    }),
    onClick: () => setFilter(tab.slug)
  }, tab.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-options options-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: options,
    values: values,
    onChange: (newVal, optionId) => {
      handleChange(newVal, optionId);
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsTab);

/***/ }),

/***/ "./src/tabs/rollback.js":
/*!******************************!*\
  !*** ./src/tabs/rollback.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _common_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/warning */ "./src/common/warning.js");
/* harmony import */ var _common_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/popup */ "./src/common/popup.js");







const RollBack = () => {
  const {
    system_info
  } = PremiumBlocksPanelData;
  const previousVersions = system_info.pb_previous_versions;
  const [previousVersionSelect, setPreviousVersion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(previousVersions[0].value);
  const [openPopup, setopenPopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const rollbackButtonClickHandler = () => {
    setopenPopup(true);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-section-info-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-section-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Rollback to Previous Version", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Experiencing an issue with Premium Blocks version ${system_info.theme_version} ? Roll back to a previous version to help troubleshoot the issue.`, "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-section-info-cta"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "location",
    name: "location",
    className: "pb-select",
    onBlur: e => {
      setPreviousVersion(e.target.value);
    }
  }, (previousVersions || []).map(version => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: version.value,
      value: version.value
    }, version.label);
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "pb-button secondary primary",
    onClick: rollbackButtonClickHandler
  }, "Rollback"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_warning__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(" Warning: Please backup your database before making the rollback.", "premium-blocks-for-gutenberg")
  }))), openPopup && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    openPopup: openPopup,
    setopenPopup: setopenPopup,
    previousVersionSelect: previousVersionSelect,
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Rollback to Previous Version", "premium-blocks-for-gutenberg"),
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Are you sure you want to reinstall version ${previousVersionSelect}?`, "premium-blocks-for-gutenberg")
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RollBack);

/***/ }),

/***/ "./src/tabs/setting.js":
/*!*****************************!*\
  !*** ./src/tabs/setting.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/AdvancedSwitcher */ "./src/common/AdvancedSwitcher.js");
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);





const {
  Dashicon
} = wp.components;




const Setting = () => {
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(PremiumBlocksPanelData.apiData);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    createNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  console.log(data, PremiumBlocksPanelData.apiData);

  const onChangeData = async (key, value) => {
    const updatedData = { ...data
    };
    updatedData[key] = value;
    setData(updatedData);
    await saveEntityRecord("root", "site", {
      pbg_maps_settings: updatedData
    });
    createNotice("success", "Settings saved ", {
      isDismissible: true,
      type: "snackbar"
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-api-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-advanced-input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Google Maps API Key:", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Premium Maps Block requires Google API key to be entered below. If you don’t have one,", "premium-blocks-for-gutenberg"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://developers.google.com/maps/documentation/javascript/get-api-key",
    target: "_blank",
    rel: "noreferrer"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Click Here", "premium-blocks-for-gutenberg")), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("to get your key.", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: data === null || data === void 0 ? void 0 : data["premium-map-key"],
    onChange: e => onChangeData("premium-map-key", e.target.value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("API Key", "premium-blocks-for-gutenberg")
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-setting-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Maps API JS File", "premium-blocks-for-gutenberg"),
    onChange: checked => onChangeData("premium-map-api", checked),
    checked: (data === null || data === void 0 ? void 0 : data["premium-map-api"]) || false,
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("This will Enable the API JS file if it's not included by another theme or plugin.", "premium-blocks-for-gutenberg")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Font Awesome Icons", "premium-blocks-for-gutenberg"),
    onChange: checked => onChangeData("premium-fa-css", checked),
    checked: (data === null || data === void 0 ? void 0 : data["premium-fa-css"]) || false,
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("This will load Font Awesome Icons to be used within Premium Blocks.", "premium-blocks-for-gutenberg")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Allow JSON Uploads", "premium-blocks-for-gutenberg"),
    onChange: checked => onChangeData("premium-upload-json", checked),
    checked: (data === null || data === void 0 ? void 0 : data["premium-upload-json"]) || false,
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("This option will be used to upload JSON files in lottie animation block.", "premium-blocks-for-gutenberg")
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);

/***/ }),

/***/ "./src/tabs/system.js":
/*!****************************!*\
  !*** ./src/tabs/system.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");




const {
  Dashicon
} = wp.components;

const System = () => {
  const {
    system_info
  } = PremiumBlocksPanelData;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "system-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "widefat",
    cellspacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colspan: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WordPress Environment", "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Home URL", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.home_url)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WP Version", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.version)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WP Multisite", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.multisite ? "&#10004;" : "&ndash;"
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WP Memory Limit", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mark", null, system_info.memory_limit_size, " ", system_info.memory_limit < 67108864 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("We recommend setting wp memory at least 64MB.", "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Theme Version", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.theme_version)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WP Path", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.wp_path)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("WP Debug Mode", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.debug ? "&#10004;" : "&ndash;"
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Language", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.lang)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "widefat",
    cellspacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colspan: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Server Environment", "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Server Info", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.server)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PHP Version", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.php_version ? system_info.php_version : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Couldn't determine PHP version because phpversion() doesn't exist.", "premium-blocks-for-gutenberg"))), system_info.ini_get && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PHP Memory Limit", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.memory_limit)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PHP Post Max Size", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.post_max_size)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PHP Time Limit", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mark", null, system_info.max_execution_time, " ", system_info.memory_limit < 60 && 0 != system_info.memory_limit && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("We recommend setting max execution time at least 60.", "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("PHP Max Input Vars", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.max_input_vars)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("SUHOSIN Installed", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.suhosin ? "&#10004;" : "&ndash;"
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("MySQL Version", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.mysql_version))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "widefat",
    cellspacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colspan: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Active Plugins", "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Object.keys(system_info.active_plugins).length > 0 && Object.keys(system_info.active_plugins).map(plugin => {
    const pluginData = system_info.active_plugins[plugin];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, pluginData.PluginURI ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: pluginData.PluginURI,
      target: "_blank",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Visit plugin homepage", "premium-blocks-for-gutenberg")
    }, pluginData.name) : pluginData.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      dangerouslySetInnerHTML: {
        __html: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("by", "premium-blocks-for-gutenberg") + " - " + pluginData.author + " - " + pluginData.version
      }
    }));
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (System);

/***/ }),

/***/ "./src/tabs/welcome.js":
/*!*****************************!*\
  !*** ./src/tabs/welcome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Card */ "./src/common/Card.js");
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);






const {
  __
} = wp.i18n;
const {
  Dashicon
} = wp.components;
const iconArrow = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  id: "Layer_1",
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "19.5",
  height: "19.5",
  viewBox: "0 0 19.5 19.5"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-1",
  d: "M3.35,9A7.51,7.51,0,0,1,9,3.35a13.37,13.37,0,0,1,6.1,0A7.51,7.51,0,0,1,20.65,9a13.37,13.37,0,0,1,0,6.1,7.51,7.51,0,0,1-5.6,5.6,13.37,13.37,0,0,1-6.1,0,7.51,7.51,0,0,1-5.6-5.6A13.37,13.37,0,0,1,3.35,9Z",
  transform: "translate(-2.25 -2.25)"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "cls-2",
  d: "M11,9.5,13.5,12,11,14.5",
  transform: "translate(-2.25 -2.25)"
}));


const Support = () => {
  const [email, setEmail] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    createNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);

  const submitHandler = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    if (!checkEmail(email)) {
      createErrorNotice(__("Invalid Email Address...", "premium-blocks-for-gutenberg"), {
        isDismissible: true,
        type: "snackbar"
      });
      setIsLoading(false);
      return;
    }

    const body = new FormData();
    body.append("action", "pb-mail-subscribe");
    body.append("nonce", PremiumBlocksPanelData.nonce);
    body.append("email", email);

    try {
      const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
        method: "POST",
        body
      });

      if (response.status === 200) {
        const {
          success,
          data: {
            status
          }
        } = await response.json();

        if (success && status) {
          createNotice(__("success", "premium-blocks-for-gutenberg"), __("Thanks for your subscribe!", "premium-blocks-for-gutenberg"), {
            isDismissible: true,
            type: "snackbar"
          });
          setEmail("");
        } else {
          createErrorNotice(__("Invalid Email Address...", "premium-blocks-for-gutenberg"), {
            isDismissible: true,
            type: "snackbar"
          });
        }
      }
    } catch (e) {
      alert(e);
    }

    setIsLoading(false);
  };

  const checkEmail = emailAddress => {
    var pattern = new RegExp(/^((“[\w-+\s]+“)|([\w-+]+(?:\.[\w-+]+)*)|(“[\w-+\s]+“)([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  };

  const loadingClass = isLoading ? " loading" : "";
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalGrid, {
    columns: 2,
    gap: 8,
    className: "pb-support"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-support"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Iconly/Curved/3 User"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "3 User"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 1",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.9724 20.3683C8.73343 20.3683 5.96643 19.8783 5.96643 17.9163C5.96643 15.9543 8.71543 14.2463 11.9724 14.2463C15.2114 14.2463 17.9784 15.9383 17.9784 17.8993C17.9784 19.8603 15.2294 20.3683 11.9724 20.3683Z",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 3",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.9725 11.4488C14.0985 11.4488 15.8225 9.72576 15.8225 7.59976C15.8225 5.47376 14.0985 3.74976 11.9725 3.74976C9.84645 3.74976 8.12245 5.47376 8.12245 7.59976C8.11645 9.71776 9.82645 11.4418 11.9455 11.4488H11.9725Z",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 5",
    d: "M18.3622 10.3915C19.5992 10.0605 20.5112 8.93254 20.5112 7.58954C20.5112 6.18854 19.5182 5.01854 18.1962 4.74854",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 7",
    d: "M18.9431 13.5444C20.6971 13.5444 22.1951 14.7334 22.1951 15.7954C22.1951 16.4204 21.6781 17.1014 20.8941 17.2854",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 9",
    d: "M5.58372 10.3915C4.34572 10.0605 3.43372 8.93254 3.43372 7.58954C3.43372 6.18854 4.42772 5.01854 5.74872 4.74854",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 11",
    d: "M5.00176 13.5444C3.24776 13.5444 1.74976 14.7334 1.74976 15.7954C1.74976 16.4204 2.26676 17.1014 3.05176 17.2854",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __("Join The Community", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("Join our Facebook group and be part of the community. Collaborate, interact, and suggest! You and your thoughts are more than welcome.", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    href: "https://www.facebook.com/groups/2339461846127319"
  }, iconArrow))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Iconly/Curved/Paper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Paper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 3",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M20.1598 8.3L14.4898 2.9C13.7598 2.8 12.9398 2.75 12.0398 2.75C5.74978 2.75 3.64978 5.07 3.64978 12C3.64978 18.94 5.74978 21.25 12.0398 21.25C18.3398 21.25 20.4398 18.94 20.4398 12C20.4398 10.58 20.3498 9.35 20.1598 8.3Z",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 5",
    d: "M13.9342 2.83276V5.49376C13.9342 7.35176 15.4402 8.85676 17.2982 8.85676H20.2492",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 1",
    d: "M14.3053 15.45H8.90527",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 2",
    d: "M12.2604 11.4387H8.90442",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __("Learn How to Use Premium Blocks", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("Take a step forward to Premium Blocks for Gutenberg. Get started now by visiting the plugin’s knowledge base. ", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    href: "https://premiumblocks.io/docs/"
  }, iconArrow))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Iconly/Curved/Ticket Star"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Ticket Star"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 1",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21.4399 13.9939C18.7789 13.9939 18.7789 9.87952 21.4399 9.87952C21.4399 5.11236 21.4399 3.41089 12.0449 3.41089C2.6499 3.41089 2.6499 5.11236 2.6499 9.87952C5.3109 9.87952 5.3109 13.9939 2.6499 13.9939C2.6499 18.762 2.6499 20.4635 12.0449 20.4635C21.4399 20.4635 21.4399 18.762 21.4399 13.9939Z",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 3",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M12.0449 9.17114C11.3619 9.17114 11.2969 10.2606 10.8909 10.6462C10.4839 11.0308 9.22087 10.5912 9.04487 11.2743C8.86987 11.9583 10.0069 12.1904 10.1479 12.7768C10.2879 13.3632 9.59387 14.1875 10.1869 14.5986C10.7809 15.0079 11.4199 14.0804 12.0449 14.0804C12.6699 14.0804 13.3089 15.0079 13.9029 14.5986C14.4969 14.1875 13.8019 13.3632 13.9419 12.7768C14.0829 12.1904 15.2199 11.9583 15.0449 11.2743C14.8689 10.5912 13.6059 11.0308 13.1989 10.6462C12.7929 10.2606 12.7279 9.17114 12.0449 9.17114Z",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __("Need Help? Open a Support Ticket", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("Premium Blocks support team is always here to help, open a support ticket with your inquiry and you will get an answer shortly!", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    href: "https://my.leap13.com/contact-support"
  }, iconArrow)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-Subscribe"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "right-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Iconly/Curved/Work"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Work"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 4",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.75024 13.3507C2.75024 7.19871 5.05324 5.14771 11.9612 5.14771C18.8702 5.14771 21.1722 7.19871 21.1722 13.3507C21.1722 19.5027 18.8702 21.5537 11.9612 21.5537C5.05324 21.5537 2.75024 19.5027 2.75024 13.3507Z",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 6",
    d: "M15.2239 5.3692V4.7392C15.2239 3.4752 14.3009 2.4502 13.1639 2.4502H10.7589C9.62185 2.4502 8.69885 3.4752 8.69885 4.7392V5.3692",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 1",
    d: "M11.9612 16.5167V13.8887",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Stroke 2",
    d: "M21.0895 11.4775L21.0605 11.4985C18.6385 12.9905 15.4405 13.8915 11.9565 13.8915C8.47252 13.8915 5.28352 12.9905 2.86252 11.4985L2.83252 11.4775",
    stroke: "#4426c7",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __("Subscribe to Premium Blocks Newsletter", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("Sign up to Premium Blocks newsletter and be the first to receive the latest updates, features, and news right under your footsteps!", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action pb-subscribe"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subscribe-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: email,
    onChange: e => setEmail(e.target.value),
    readOnly: isLoading,
    placeholder: "your email address"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `pb-button secondary primary${loadingClass}`,
    onClick: submitHandler,
    disabled: isLoading
  }, __("Submit", "premium-blocks-for-gutenberg"))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Support);

/***/ }),

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

/***/ "./src/scss/pb-panel.scss":
/*!********************************!*\
  !*** ./src/scss/pb-panel.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

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

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["notices"];

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/welcome */ "./src/tabs/welcome.js");
/* harmony import */ var _tabs_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/system */ "./src/tabs/system.js");
/* harmony import */ var _tabs_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/setting */ "./src/tabs/setting.js");
/* harmony import */ var _tabs_rollback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/rollback */ "./src/tabs/rollback.js");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/Card */ "./src/common/Card.js");
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Container */ "./src/common/Container.js");
/* harmony import */ var _store_panel_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/panel-store */ "./src/store/panel-store.js");
/* harmony import */ var _common_push_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/push-history */ "./src/common/push-history.js");
/* harmony import */ var _scss_pb_panel_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scss/pb-panel.scss */ "./src/scss/pb-panel.scss");
/* harmony import */ var _tabs_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/options */ "./src/tabs/options.js");
/* harmony import */ var _layout_Notices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/Notices */ "./src/layout/Notices.js");














const {
  __
} = wp.i18n;
const {
  TabPanel,
  Panel,
  PanelBody
} = wp.components;
const {
  useEffect,
  useState
} = wp.element;

const RendeTabs = () => {
  const [values, setValues] = useState(PremiumBlocksPanelData.values);
  let newItems = { ...values
  };
  let {
    tabs
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_panel_store__WEBPACK_IMPORTED_MODULE_8__["default"]);

  const compare = (a, b) => {
    if (a.priority < b.priority) {
      return -1;
    }

    if (a.priority > b.priority) {
      return 1;
    }

    return 0;
  };

  let defaultTabs = [{
    name: "welcome",
    title: __("Welcome", "premium-blocks-for-gutenberg"),
    className: "welcome",
    priority: 5,
    data: {
      Component: _tabs_welcome__WEBPACK_IMPORTED_MODULE_1__["default"],
      props: {}
    }
  }, {
    name: "blocks",
    title: __("Premium Blocks", "premium-blocks-for-gutenberg"),
    className: "pblocks",
    priority: 10,
    data: {
      Component: _tabs_options__WEBPACK_IMPORTED_MODULE_11__["default"],
      props: {
        options: PremiumBlocksPanelData.options,
        values: PremiumBlocksPanelData.values // setValues: setValues(newItems)

      }
    }
  }, {
    name: "system",
    title: __("System Info", "premium-blocks-for-gutenberg"),
    className: "system",
    priority: 30,
    data: {
      Component: _tabs_system__WEBPACK_IMPORTED_MODULE_2__["default"],
      props: {}
    }
  }, {
    name: "settings",
    title: __("Settings", "premium-blocks-for-gutenberg"),
    className: "system",
    priority: 15,
    data: {
      Component: _tabs_setting__WEBPACK_IMPORTED_MODULE_3__["default"],
      props: {}
    }
  }, {
    name: "versionControl",
    title: __("version Control", "premium-blocks-for-gutenberg"),
    className: "system",
    priority: 20,
    data: {
      Component: _tabs_rollback__WEBPACK_IMPORTED_MODULE_4__["default"],
      props: {}
    }
  }];
  let names = new Set(tabs.map(d => d.name));
  let mergedTabs = [...tabs, ...defaultTabs.filter(d => !names.has(d.name))];
  tabs = mergedTabs;

  const onSelectHandler = tabName => {
    (0,_common_push_history__WEBPACK_IMPORTED_MODULE_9__["default"])(tabName);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, undefined !== wp.notices.store && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_Notices__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanel, {
    className: "pb-dashboard-tab-panel",
    activeClass: "active-tab",
    initialTabName: PremiumBlocksPanelData.kemet_redirect,
    onSelect: onSelectHandler,
    tabs: tabs.sort(compare)
  }, tab => {
    const {
      Component,
      props
    } = tab.data;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Panel, {
      className: `tab-section ${tab.name}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      opened: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, props)));
  }));
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("pb-dashboard")) {
    let sidebar = document.getElementById("adminmenuwrap"),
        sidebarHeight = sidebar.offsetHeight + "px";
    document.getElementById("wpbody").style.minHeight = sidebarHeight;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_store_panel_store__WEBPACK_IMPORTED_MODULE_8__.PanelProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RendeTabs, {
      options: PremiumBlocksPanelData.options
    })), document.getElementById("pb-dashboard"));
  }
});
window.PbgAdminComponents = {
  Card: _common_Card__WEBPACK_IMPORTED_MODULE_6__["default"],
  Container: _common_Container__WEBPACK_IMPORTED_MODULE_7__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map