/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/AdvancedSwitcher.js":
/*!****************************************!*\
  !*** ./src/common/AdvancedSwitcher.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    className: "pb-swticher-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-icons */ "./src/common/block-icons.js");


 //import { Dashicon, ToggleControl } from '@wordpress/components';
//const { Dashicon, ToggleControl } = wp.components;

const {
  PanelBody,
  Dashicon,
  ToggleControl
} = wp.components;
const {
  __
} = wp.i18n;

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

const SingleOption = props => {
  const [value, setValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.value);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleChange = async () => {
    setIsLoading(true);
    let newValue = !value;
    const body = new FormData();
    body.append('action', 'pb-panel-update-option');
    body.append('nonce', PremiumBlocksPanelData.nonce);
    body.append('option', props.id);
    body.append('value', newValue);

    try {
      const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
        method: 'POST',
        body
      });

      if (response.status === 200) {
        const {
          success,
          data
        } = await response.json();

        if (success && data.values) {
          setValue(newValue);
          props.onChange(data.values);
        }
      }
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  let checked = value === true ? true : false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: props.id,
    className: "pb-option-element"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-icon pb-control-icon"
  }, _block_icons__WEBPACK_IMPORTED_MODULE_1__["default"][props.id]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title pb-control-title"
  }, props.params.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "live-preview customize-control-live-preview"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `https://premiumblocks.io/gutenberg-blocks/${props.id}`,
    target: "_blank",
    rel: "noreferrer"
  }, __('live Preview', 'premium-blocks-for-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "guidelines customize-control-guidelines"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `https://premiumblocks.io/docs/${props.id}`,
    target: "_blank",
    rel: "noreferrer"
  }, __('Guidelines', 'premium-blocks-for-gutenberg'), " ")), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    className: "pb-loading",
    icon: "update"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "option-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    checked: checked,
    onChange: () => {
      handleChange();
    }
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleOption);

/***/ }),

/***/ "./src/common/block-icons.js":
/*!***********************************!*\
  !*** ./src/common/block-icons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const PBG_Block_Icons = {
  team: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
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
    width: "19.5",
    height: "21.5",
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
    width: "21.5",
    height: "21.34",
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
    width: "21.5",
    height: "17.5",
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
    width: "21.5",
    height: "21.5",
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
    width: "21.5",
    height: "12.5",
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
    width: "19.5",
    height: "11.5",
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
  countup: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "21.5",
    viewBox: "0 0 19 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-counter"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Counter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,23.25a9.5,9.5,0,1,1,9.5-9.5A9.51,9.51,0,0,1,12.5,23.25Zm0-17.5a8,8,0,1,0,8,8A8,8,0,0,0,12.5,5.75Z",
    transform: "translate(-3 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,14.25a.76.76,0,0,1-.75-.75v-5a.75.75,0,0,1,1.5,0v5A.76.76,0,0,1,12.5,14.25Z",
    transform: "translate(-3 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,3.25h-6a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-3 -1.75)"
  }))),
  heading: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-heading"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM21.75,15.5c0,4.61-1.64,6.25-6.25,6.25h-6c-4.61,0-6.25-1.64-6.25-6.25v-6c0-4.61,1.64-6.25,6.25-6.25h6c4.61,0,6.25,1.64,6.25,6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M18.17,9.72a.73.73,0,0,1-1,.34A10.19,10.19,0,0,0,13.25,9V16.8a.75.75,0,0,1-1.5,0V9a10.29,10.29,0,0,0-3.92,1.07.76.76,0,0,1-.33.08.74.74,0,0,1-.67-.42.73.73,0,0,1,.34-1,12,12,0,0,1,10.66,0A.73.73,0,0,1,18.17,9.72Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  dualHeading: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.48",
    height: "21.5",
    viewBox: "0 0 15.48 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "dual-heading"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Dual_Heading",
    "data-name": "Dual Heading"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M19.3,14l-2.2-1.75a2.54,2.54,0,0,0-1.55-.54H13.24V10.24h4.47a2.5,2.5,0,0,0,2.5-2.5V4.24a2.5,2.5,0,0,0-2.5-2.49H9.45a2.59,2.59,0,0,0-1.56.54L5.7,4A2.5,2.5,0,0,0,5.7,8L7.89,9.69a2.45,2.45,0,0,0,1.56.55h2.29v1.51H7.29a2.5,2.5,0,0,0-2.5,2.49v3.5a2.5,2.5,0,0,0,2.5,2.5h4.45v1.51H9.49a.75.75,0,0,0,0,1.5h6a.75.75,0,0,0,0-1.5H13.24V20.24h2.31a2.5,2.5,0,0,0,1.56-.54L19.3,18a2.5,2.5,0,0,0,0-3.91ZM9.45,8.74a1,1,0,0,1-.62-.22L6.64,6.77a1,1,0,0,1,0-1.55L8.82,3.47a1.07,1.07,0,0,1,.63-.22h8.26a1,1,0,0,1,1,1v3.5a1,1,0,0,1-1,1Zm8.91,8-2.19,1.76a1,1,0,0,1-.62.21H7.29a1,1,0,0,1-1-1v-3.5a1,1,0,0,1,1-1h8.26a1,1,0,0,1,.62.22l2.19,1.75a1,1,0,0,1,0,1.55Z",
    transform: "translate(-4.76 -1.75)"
  }))),
  fancyText: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19.37",
    height: "20.37",
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
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.75",
    height: "21.5",
    viewBox: "0 0 18.75 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-google-maps"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Maps"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,14.68a3.87,3.87,0,1,1,3.87-3.87A3.88,3.88,0,0,1,12.5,14.68Zm0-6.24a2.37,2.37,0,1,0,2.37,2.37A2.37,2.37,0,0,0,12.5,8.44Z",
    transform: "translate(-3.12 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,23.25a6,6,0,0,1-4.13-1.67c-2.95-2.84-6.2-7.36-5-12.76h0A9.11,9.11,0,0,1,12.5,1.75h0a9.11,9.11,0,0,1,9.11,7.08c1.22,5.4-2,9.92-5,12.75A5.93,5.93,0,0,1,12.5,23.25ZM4.85,9.16C3.78,13.87,6.74,17.93,9.41,20.5a4.44,4.44,0,0,0,6.17,0c2.67-2.57,5.64-6.62,4.57-11.33A7.56,7.56,0,0,0,12.5,3.25h0A7.56,7.56,0,0,0,4.85,9.16Z",
    transform: "translate(-3.12 -1.75)"
  }))),
  pricingTable: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-pricing-table"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Pricing_Table",
    "data-name": "Pricing Table"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM21.75,15.5c0,4.61-1.64,6.25-6.25,6.25h-6c-4.61,0-6.25-1.64-6.25-6.25v-6c0-4.61,1.64-6.25,6.25-6.25h6c4.61,0,6.25,1.64,6.25,6.25Z",
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
    width: "21.48",
    height: "21.54",
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
    width: "21.5",
    height: "21.5",
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
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.51",
    height: "21.5",
    viewBox: "0 0 21.51 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-banner"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Banner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M9.49,11.25A2.75,2.75,0,1,1,12.24,8.5,2.75,2.75,0,0,1,9.49,11.25Zm0-4A1.25,1.25,0,1,0,10.74,8.5,1.25,1.25,0,0,0,9.49,7.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M22.5,9.75a.75.75,0,0,0-.75.75v2.26l-.39-.33a3,3,0,0,0-3.8,0L13.4,16a1.49,1.49,0,0,1-1.84,0l-.33-.3a3,3,0,0,0-3.55-.19L3.55,18.29a10.78,10.78,0,0,1-.3-2.79v-6c0-4.61,1.63-6.25,6.25-6.25h4a.75.75,0,0,0,0-1.5h-4c-5.44,0-7.75,2.32-7.75,7.75v6a10.64,10.64,0,0,0,.69,4.16.81.81,0,0,0,.1.21c1.06,2.33,3.31,3.38,7,3.38h6c5.43,0,7.75-2.32,7.75-7.75v-5A.76.76,0,0,0,22.5,9.75Zm-.75,5.75c0,4.61-1.64,6.25-6.25,6.25h-6c-2.77,0-4.46-.59-5.36-2.05l4.37-2.94a1.52,1.52,0,0,1,1.73.08l.34.3a3,3,0,0,0,3.8,0l4.16-3.57a1.47,1.47,0,0,1,1.84,0l1.37,1.18Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M22.45,2.57a2.4,2.4,0,0,0-1.68-.82,2.34,2.34,0,0,0-1.66.81L18.69,3a.91.91,0,0,0-.17.17l-3,3a1.91,1.91,0,0,0-.52,1l-.2,1.4a1.46,1.46,0,0,0,.39,1.23,1.4,1.4,0,0,0,1,.41l.22,0,1.4-.2a2.05,2.05,0,0,0,1-.51L22.45,5.9A2.13,2.13,0,0,0,22.45,2.57ZM17.76,8.46a.5.5,0,0,1-.19.1l-1.31.18.19-1.32a.46.46,0,0,1,.09-.17L18.89,4.9a3.91,3.91,0,0,0,1.22,1.21Zm3.63-3.62L21.21,5A2.52,2.52,0,0,1,20,3.8l.18-.18a1,1,0,0,1,.6-.37,1.1,1.1,0,0,1,.62.38C21.91,4.15,21.85,4.38,21.39,4.84Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  bulletList: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19.5",
    height: "18.5",
    viewBox: "0 0 19.5 18.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-bullet-list"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Bullet_List",
    "data-name": "Bullet List"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,20.75h-10a.75.75,0,0,1,0-1.5h10a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -3.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,13.75h-10a.75.75,0,0,1,0-1.5h10a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -3.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,6.75h-10a.75.75,0,0,1,0-1.5h10a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -3.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M4.5,7.75A.74.74,0,0,1,4,7.53l-1-1A.75.75,0,1,1,4,5.47l.47.47L7,3.47A.75.75,0,1,1,8,4.53l-3,3A.74.74,0,0,1,4.5,7.75Z",
    transform: "translate(-2.75 -3.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M4.5,14.75A.74.74,0,0,1,4,14.53l-1-1A.75.75,0,1,1,4,12.47l.47.47L7,10.47A.75.75,0,1,1,8,11.53l-3,3A.74.74,0,0,1,4.5,14.75Z",
    transform: "translate(-2.75 -3.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M4.5,21.75A.74.74,0,0,1,4,21.53l-1-1A.75.75,0,0,1,4,19.47l.47.47L7,17.47A.75.75,0,1,1,8,18.53l-3,3A.74.74,0,0,1,4.5,21.75Z",
    transform: "translate(-2.75 -3.25)"
  }))),
  testimonials: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.56",
    viewBox: "0 0 21.5 21.56"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.cls-1{fill:#1a1a1a;}`)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-testimonials"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Testimonials"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.5,23.28a2.27,2.27,0,0,1-1.8-1l-1.5-2a.54.54,0,0,0-.2-.1H8.5c-4.17,0-6.75-1.13-6.75-6.75v-5c0-4.42,2.33-6.75,6.75-6.75h8c4.42,0,6.75,2.33,6.75,6.75v5c0,4.42-2.33,6.75-6.75,6.75H16a.26.26,0,0,0-.2.1l-1.5,2A2.27,2.27,0,0,1,12.5,23.28ZM8.5,3.22c-3.58,0-5.25,1.67-5.25,5.25v5c0,4.52,1.55,5.25,5.25,5.25H9a1.87,1.87,0,0,1,1.41.71l1.49,2a.69.69,0,0,0,1.2,0l1.5-2a1.77,1.77,0,0,1,1.4-.7h.5c3.58,0,5.25-1.67,5.25-5.25v-5c0-3.58-1.67-5.25-5.25-5.25Z",
    transform: "translate(-1.75 -1.72)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17.5,9.22H7.5a.75.75,0,0,1,0-1.5h10a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.72)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M13.5,14.22h-6a.75.75,0,1,1,0-1.5h6a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.72)"
  }))),
  section: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
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
    width: "21.5",
    height: "21.5",
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
    width: "21.5",
    height: "21.5",
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
    width: "21.5",
    height: "21.5",
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
  megaMenu: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-mega-menu-block"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Mega_Menu",
    "data-name": "Mega Menu"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M20.27,11.75h-4c-2,0-3-1-3-3v-4c0-2,1-3,3-3h4c2,0,3,1,3,3v4C23.25,10.78,22.28,11.75,20.27,11.75Zm-4-8.5c-1.18,0-1.48.3-1.48,1.48v4c0,1.18.3,1.48,1.48,1.48h4c1.18,0,1.48-.3,1.48-1.48v-4c0-1.18-.3-1.48-1.48-1.48Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M8.81,11.74H4.73c-2,0-3-.89-3-2.73V4.48c0-1.84,1-2.73,3-2.73h4c2,0,3,.89,3,2.73V9a2.64,2.64,0,0,1-.69,2A3,3,0,0,1,8.81,11.74ZM4.73,3.25c-1.33,0-1.48.39-1.48,1.23V9c0,.86.14,1.23,1.48,1.23h4A1.87,1.87,0,0,0,10,10,1.33,1.33,0,0,0,10.25,9V4.48c0-.84-.15-1.23-1.48-1.23Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M8.77,23.25h-4c-2,0-3-1-3-3v-4c0-2,1-3,3-3h4c2,0,3,1,3,3v4C11.75,22.28,10.78,23.25,8.77,23.25Zm-4-8.5c-1.18,0-1.48.3-1.48,1.48v4c0,1.18.3,1.48,1.48,1.48h4c1.18,0,1.48-.3,1.48-1.48v-4c0-1.18-.3-1.48-1.48-1.48Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,16.75h-6a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,20.75h-6a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  row: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Premium_Blocks",
    "data-name": "Premium Blocks",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.5",
    height: "21.5",
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
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "premium-search"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12,22.25A10.25,10.25,0,1,1,22.25,12,10.26,10.26,0,0,1,12,22.25Zm0-19A8.75,8.75,0,1,0,20.75,12,8.77,8.77,0,0,0,12,3.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M22.5,23.25A.74.74,0,0,1,22,23l-2-2A.75.75,0,0,1,21,20l2,2A.75.75,0,0,1,23,23,.74.74,0,0,1,22.5,23.25Z",
    transform: "translate(-1.75 -1.75)"
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PBG_Block_Icons);

/***/ }),

/***/ "./src/common/logo.js":
/*!****************************!*\
  !*** ./src/common/logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_blocks_for_gutenberg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-blocks-for-gutenberg.png */ "./src/common/premium-blocks-for-gutenberg.png");



const Logo = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _premium_blocks_for_gutenberg_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Premium Blocks ",
    width: "231",
    height: "57"
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./src/common/push-history.js":
/*!************************************!*\
  !*** ./src/common/push-history.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/filter-component.js":
/*!*********************************!*\
  !*** ./src/filter-component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


const FilterComponent = () => {
  const tabs = [{
    name: 'All',
    slug: 'all'
  }, {
    name: 'New',
    slug: 'new'
  }, {
    name: 'Creative',
    slug: 'creative'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-blocks-filter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "justify-between items-center space-y-4 sm:flex sm:flex-col lg:space-y-0 lg:flex-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "flex -ml-4 flex-wrap justify-center lg:justify-start",
    "aria-label": "Tabs"
  }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    key: tab.name,
    className: 'neww'
  }, tab.name)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterComponent);

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, __('Plugin Documentation', "premium-blocks-for-gutenberg")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/options-component.js":
/*!**********************************!*\
  !*** ./src/options-component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_SingleOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/SingleOption */ "./src/common/SingleOption.js");



const SingleOptionComponent = _ref => {
  let {
    value,
    optionId,
    option,
    onChange
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_SingleOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: optionId,
    value: value,
    params: option,
    onChange: onChange
  });
};

const RenderOptions = _ref2 => {
  let {
    options,
    values,
    onChange
  } = _ref2;
  return Object.keys(options).map(optionId => {
    let value = values[optionId];
    let option = options[optionId];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SingleOptionComponent, {
      value: value,
      optionId: optionId,
      option: option,
      onChange: newVal => {
        onChange(newVal, optionId);
      },
      key: optionId
    });
  });
};

const OptionsComponent = _ref3 => {
  let {
    options,
    onChange,
    values
  } = _ref3;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderOptions, {
    options: options,
    onChange: onChange,
    values: values
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsComponent);

/***/ }),

/***/ "./src/store/panel-store.js":
/*!**********************************!*\
  !*** ./src/store/panel-store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options-component */ "./src/options-component.js");
/* harmony import */ var _filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-component */ "./src/filter-component.js");





const {
  __
} = wp.i18n;
const {
  Dashicon
} = wp.components;

const OptionsTab = props => {
  const options = props.options;
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.values);

  const handleChange = newValues => {
    setValues(newValues);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-options options-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_filter_component__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: options,
    values: values,
    onChange: (newVal, optionId) => {
      handleChange(newVal, optionId);
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionsTab);

/***/ }),

/***/ "./src/tabs/setting.js":
/*!*****************************!*\
  !*** ./src/tabs/setting.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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





const {
  Dashicon
} = wp.components;



const Setting = () => {
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(PremiumBlocksPanelData.apiData);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);

  const onChangeData = async (key, value) => {
    const updatedData = { ...data
    };
    updatedData[key] = value;
    setData(updatedData);
    await saveEntityRecord('root', 'site', {
      'pbg_maps_settings': updatedData
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "pb-section-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    icon: "edit"
  })), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Setting', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-api-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-advanced-input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Google Maps API Key:', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: data === null || data === void 0 ? void 0 : data['premium-map-key'],
    onChange: e => onChangeData('premium-map-key', e.target.value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('API Key', 'premium-blocks-for-gutenberg')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-setting-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Maps API JS File', 'premium-blocks-for-gutenberg'),
    onChange: checked => onChangeData('premium-map-api', checked),
    checked: data === null || data === void 0 ? void 0 : data['premium-map-api']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Font Awesome Icons', 'premium-blocks-for-gutenberg'),
    onChange: checked => onChangeData('premium-fa-css', checked),
    checked: data === null || data === void 0 ? void 0 : data['premium-fa-css']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_AdvancedSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allow JSON Uploads', 'premium-blocks-for-gutenberg'),
    onChange: checked => onChangeData('premium-upload-json', checked),
    checked: data === null || data === void 0 ? void 0 : data['premium-upload-json']
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);

/***/ }),

/***/ "./src/tabs/system.js":
/*!****************************!*\
  !*** ./src/tabs/system.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "pb-section-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    icon: "edit"
  })), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Useful Information', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "system-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "widefat",
    cellspacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colspan: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WordPress Environment', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Home URL', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.home_url)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP Version', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.version)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP Multisite', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.multisite ? '&#10004;' : '&ndash;'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP Memory Limit', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mark", null, system_info.memory_limit_size, " ", system_info.memory_limit < 67108864 && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('We recommend setting wp memory at least 64MB.', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme Version', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.theme_version)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP Path', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.wp_path)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WP Debug Mode', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.debug ? '&#10004;' : '&ndash;'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Language', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.lang)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "widefat",
    cellspacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colspan: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Server Environment', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Server Info', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.server)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PHP Version', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.php_version ? system_info.php_version : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Couldn't determine PHP version because phpversion() doesn't exist.", "premium-blocks-for-gutenberg"))), system_info.ini_get && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PHP Memory Limit', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.memory_limit)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PHP Post Max Size', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.post_max_size)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PHP Time Limit', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("mark", null, system_info.max_execution_time, " ", system_info.memory_limit < 60 && 0 != system_info.memory_limit && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('We recommend setting max execution time at least 60.', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('PHP Max Input Vars', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.max_input_vars)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SUHOSIN Installed', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    dangerouslySetInnerHTML: {
      __html: system_info.suhosin ? '&#10004;' : '&ndash;'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('MySQL Version', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, system_info.mysql_version))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "widefat",
    cellspacing: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    colspan: "2"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Active Plugins', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Object.keys(system_info.active_plugins).length > 0 && Object.keys(system_info.active_plugins).map(plugin => {
    const pluginData = system_info.active_plugins[plugin];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, pluginData.PluginURI ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: pluginData.PluginURI,
      target: "_blank",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visit plugin homepage', "premium-blocks-for-gutenberg")
    }, pluginData.name) : pluginData.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      dangerouslySetInnerHTML: {
        __html: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('by', "premium-blocks-for-gutenberg") + ' - ' + pluginData.author + ' - ' + pluginData.version
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




const {
  __
} = wp.i18n;
const {
  Dashicon
} = wp.components;
 // import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

const Support = () => {
  //const Alert = withReactContent(Swal)
  const [email, setEmail] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const submitHandler = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true); // if (!checkEmail(email)) {
    //     Alert.fire({
    //         icon: 'error',
    //         title: __('Invalid Email Address...', "premium-blocks-for-gutenberg"),
    //         text: __('Please enter a valid email address!', "premium-blocks-for-gutenberg"),
    //     })
    //     setIsLoading(false);
    //     return;
    // }

    const body = new FormData();
    body.append('action', 'pb-mail-subscribe');
    body.append('nonce', PremiumBlocksPanelData.nonce);
    body.append('email', email);

    try {
      const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
        method: 'POST',
        body
      });

      if (response.status === 200) {
        const {
          success,
          data: {
            status
          }
        } = await response.json(); // if (success && status) {
        //     Alert.fire({
        //         icon: 'success',
        //         title: __('Success', "premium-blocks-for-gutenberg"),
        //         text: __('Thanks for your subscribe!', "premium-blocks-for-gutenberg"),
        //         timer: 3000
        //     })
        //     setEmail('');
        // } else {
        //     Alert.fire({
        //         icon: 'error',
        //         title: __('Invalid Email Address...', "premium-blocks-for-gutenberg"),
        //         text: __('Please enter a valid email address!', "premium-blocks-for-gutenberg"),
        //     })
        // }
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

  const loadingClass = isLoading ? ' loading' : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "pb-section-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    icon: "sos"
  })), __('Have a Question?', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalGrid, {
    columns: 3,
    gap: 8,
    className: "pb-support"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M205.5,308.5l3.1,13.9h94.6l3.1-13.9c2.1-9.4,6.6-18.3,13.6-24.9c18.4-17.4,29.1-41.8,29.1-67.5c0-51.3-41.7-92.8-93-92.9\r c-51.3,0-93,41.6-93,92.9c0,25.7,10.7,50,29,67.5C198.9,290.3,203.4,299.1,205.5,308.5z M213,342.4l6.3,28.3\r c2.4,10.6,11.8,18.2,22.7,18.2h27.8c10.9,0,20.3-7.6,22.7-18.2l6.3-28.3H213z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('Knowledge Base', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Pb Theme documentation library will guide you to build your next Pb website easily without any need to touch a single line of code.', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "pb-button primary",
    target: "_blank",
    href: "https://premiumblocks.io/docs/"
  }, __('Documentation', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "st0",
    d: "M252.8,123.7c-64.4,0-102.9,36-102.9,96.3v23.4c-8.3,6.2-13.3,15.8-13.3,26.4c0,15.6,10.9,28.8,25.5,32.3\r c13.2,52.5,47.7,87.2,87.4,87.2c5.5,0,10-4.5,10-10s-4.5-10-10-10c-31.2,0-59.8-32.3-69.5-78.4c-1-4.6-5-7.9-9.7-7.9\r c-0.2,0-0.5,0-0.8,0c-7.1-0.2-12.9-6.1-12.9-13.3c0-5.1,2.9-9.6,7.6-11.8c3.5-1.7,5.7-5.2,5.7-9V231c25.6-6.7,41.6-20.4,50.2-29.9\r c10.9,6.6,32.4,15.5,69.3,15.5c14.3,0,26.6-1.3,36.5-2.9c1.6,4.7,3.3,11.5,3.3,19.5v66.4c0,16.6-13.3,29.9-29.9,29.9h-12.2\r c-3.8-8.1-12-13.3-21-13.3c-12.8,0-23.2,10.4-23.2,23.2c0,12.8,10.4,23.2,23.2,23.2c9,0,17.1-5.2,21-13.3h12.2\r c26.3,0,47.9-20.6,49.6-46.5h0.2c14.7,0,26.6-11.9,26.6-26.6v-13.3c0-14.7-11.9-26.6-26.6-26.6V233c0-9.7-1.9-18.3-3.9-24.5\r c3.9-2.2,7-5.5,8.8-9.6c2.4-5.4,2.3-11.5-0.2-16.8C336,145.1,299.2,123.7,252.8,123.7z M216.3,256.5c-7.3,0-13.3,5.9-13.3,13.3\r s5.9,13.3,13.3,13.3c7.3,0,13.3-5.9,13.3-13.3S223.7,256.5,216.3,256.5z M282.7,256.5c-7.3,0-13.3,6-13.2,13.3\r c0,7.1,5.6,12.9,12.7,13.2c0.2,0,0.4,0,0.6,0c7.3,0,13.3-5.9,13.3-13.3S290.1,256.5,282.7,256.5z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M252.6,123.2c-64.4,0-102.9,36-102.9,96.3v23.4c-8.3,6.2-13.3,15.8-13.3,26.4c0,15.6,10.9,28.8,25.5,32.3\r c13.2,52.5,47.7,87.2,87.4,87.2c5.5,0,10-4.5,10-10s-4.5-10-10-10c-31.2,0-59.8-32.3-69.5-78.4c-1-4.6-5-7.9-9.7-7.9\r c-0.2,0-0.5,0-0.8,0c-7.1-0.2-12.9-6.1-12.9-13.3c0-5.1,2.9-9.6,7.6-11.8c3.5-1.7,5.7-5.2,5.7-9v-17.9c25.6-6.7,41.6-20.4,50.2-29.9\r c10.9,6.6,32.4,15.5,69.3,15.5c14.3,0,26.6-1.3,36.5-2.9c1.6,4.7,3.3,11.5,3.3,19.5v66.4c0,16.6-13.3,29.9-29.9,29.9h-12.2\r c-3.8-8.1-12-13.3-21-13.3c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2c9,0,17.1-5.2,21-13.3h12.2c26.3,0,47.9-20.6,49.6-46.5\r h0.2c14.7,0,26.6-11.9,26.6-26.6v-13.3c0-14.7-11.9-26.6-26.6-26.6v-3.3c0-9.7-1.9-18.3-3.9-24.5c3.9-2.2,7-5.5,8.8-9.6\r c2.4-5.4,2.3-11.5-0.2-16.8C335.8,144.6,299,123.2,252.6,123.2z M216.1,256c-7.3,0-13.3,5.9-13.3,13.3s5.9,13.3,13.3,13.3\r c7.3,0,13.3-5.9,13.3-13.3S223.5,256,216.1,256z M282.5,256c-7.3,0-13.3,6-13.2,13.3c0,7.1,5.6,12.9,12.7,13.2c0.2,0,0.4,0,0.6,0\r c7.3,0,13.3-5.9,13.3-13.3S289.9,256,282.5,256z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('Need Help?', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Have a question? Pb support team is here to help you by answering your questions and handling your issues within 24-48 hours.', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "pb-button primary",
    target: "_blank",
    href: "https://my.leap13.com/contact-support/"
  }, __('Submit a Ticket', "premium-blocks-for-gutenberg")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: 40,
    height: 40,
    viewBox: "0 0 512 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "svgexport-28_2_",
    d: "M163.1,222.8c-18.3,0-33.2,14.9-33.2,33.2s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2\r S181.4,222.8,163.1,222.8z M256,222.8c-22,0-39.8,17.8-39.8,39.8s17.8,39.8,39.8,39.8s39.8-17.8,39.8-39.8S278,222.8,256,222.8z\r M206.1,311.7c-3-1.7-6.4-2.6-9.8-2.6h-66.4c-11,0-19.9,8.9-19.9,19.9v4c0,20.1,23.3,35.9,53.1,35.9c7.9,0,15.7-1.1,23.2-3.5\r c-2.2-5.2-3.3-10.8-3.3-16.4v-3.3C183,330.7,192.1,317.2,206.1,311.7z M348.9,222.8c-18.3,0-33.2,14.9-33.2,33.2\r s14.9,33.2,33.2,33.2s33.2-14.9,33.2-33.2S367.3,222.8,348.9,222.8z M382.1,309h-66.4c-3.4,0-6.8,0.9-9.8,2.6\r c13.9,5.5,23.1,18.9,23.1,33.9v3.3c0,5.6-1.1,11.2-3.3,16.4c7.5,2.4,15.4,3.6,23.2,3.5c29.8,0,53.1-15.7,53.1-35.9v-4\r C402,318,393.1,309,382.1,309z M305.8,222.8c-2.6,0-5.2-1-7-2.9l-17-17h-22.4c-12.8,0-23.2-10.4-23.2-23.2v-33.2\r c0-12.8,10.4-23.2,23.2-23.2h92.9c12.8,0,23.2,10.4,23.2,23.2v33.2c0,12.8-10.4,23.2-23.2,23.2h-22.4l-17,17\r C311,221.8,308.4,222.8,305.8,222.8z M256,388.8c-33.5,0-59.8-17.5-59.8-39.8v-3.3c0-12.8,10.4-23.2,23.2-23.2h73\r c12.8,0,23.2,10.4,23.2,23.2v3.3C315.8,371.2,289.5,388.8,256,388.8z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('Follow us', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Come and join our Facebook group! Share your thoughts, opinions, suggestions, and help others. You will always be more than welcome!', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "pb-button primary",
    target: "_blank",
    href: "https://www.facebook.com/groups/468885553919377"
  }, __('Facebook Group', "premium-blocks-for-gutenberg"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalGrid, {
    columns: 1,
    style: {
      marginTop: '30px'
    },
    className: "pb-support"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    icon: "email"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, __('Subscribe to Our Newsletter', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Enter your email address and be the first to know the latest features, offers, and updates.', "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-card-action pb-subscribe"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "subscribe-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: email,
    onChange: e => setEmail(e.target.value),
    readOnly: isLoading
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `pb-button primary${loadingClass}`,
    onClick: submitHandler,
    disabled: isLoading
  }, __('Submit', "premium-blocks-for-gutenberg")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Support);

/***/ }),

/***/ "./src/scss/pb-panel.scss":
/*!********************************!*\
  !*** ./src/scss/pb-panel.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/common/premium-blocks-for-gutenberg.png":
/*!*****************************************************!*\
  !*** ./src/common/premium-blocks-for-gutenberg.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/premium-blocks-for-gutenberg.77b910af.png";

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/welcome */ "./src/tabs/welcome.js");
/* harmony import */ var _tabs_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/system */ "./src/tabs/system.js");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _common_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/Card */ "./src/common/Card.js");
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Container */ "./src/common/Container.js");
/* harmony import */ var _store_panel_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/panel-store */ "./src/store/panel-store.js");
/* harmony import */ var _common_push_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/push-history */ "./src/common/push-history.js");
/* harmony import */ var _scss_pb_panel_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scss/pb-panel.scss */ "./src/scss/pb-panel.scss");
/* harmony import */ var _tabs_options__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/options */ "./src/tabs/options.js");
/* harmony import */ var _tabs_setting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/setting */ "./src/tabs/setting.js");












const {
  __
} = wp.i18n;
const {
  TabPanel,
  Panel,
  PanelBody
} = wp.components;

const RendeTabs = () => {
  let {
    tabs
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_panel_store__WEBPACK_IMPORTED_MODULE_6__["default"]);

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
    name: 'welcome',
    title: __('Welcome', "premium-blocks-for-gutenberg"),
    className: 'welcome',
    priority: 5,
    data: {
      Component: _tabs_welcome__WEBPACK_IMPORTED_MODULE_1__["default"],
      props: {}
    }
  }, {
    name: 'blocks',
    title: __('Premium Blocks', "premium-blocks-for-gutenberg"),
    className: 'pblocks',
    priority: 5,
    data: {
      Component: _tabs_options__WEBPACK_IMPORTED_MODULE_9__["default"],
      props: {
        options: PremiumBlocksPanelData.options,
        values: PremiumBlocksPanelData.values
      }
    }
  }, {
    name: 'system',
    title: __('System Info', "premium-blocks-for-gutenberg"),
    className: 'system',
    priority: 30,
    data: {
      Component: _tabs_system__WEBPACK_IMPORTED_MODULE_2__["default"],
      props: {}
    }
  }, {
    name: 'settings',
    title: __('Settings', "premium-blocks-for-gutenberg"),
    className: 'system',
    priority: 30,
    data: {
      Component: _tabs_setting__WEBPACK_IMPORTED_MODULE_10__["default"],
      props: {}
    }
  }];
  let names = new Set(tabs.map(d => d.name));
  let mergedTabs = [...tabs, ...defaultTabs.filter(d => !names.has(d.name))];
  tabs = mergedTabs;

  const onSelectHandler = tabName => {
    (0,_common_push_history__WEBPACK_IMPORTED_MODULE_7__["default"])(tabName);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanel, {
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

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('pb-dashboard')) {
    let sidebar = document.getElementById("adminmenuwrap"),
        sidebarHeight = sidebar.offsetHeight + 'px';
    document.getElementById("wpbody").style.minHeight = sidebarHeight;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_store_panel_store__WEBPACK_IMPORTED_MODULE_6__.PanelProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RendeTabs, {
      options: PremiumBlocksPanelData.options
    })), document.getElementById('pb-dashboard'));
  }
});
window.PbgAdminComponents = {
  Card: _common_Card__WEBPACK_IMPORTED_MODULE_4__["default"],
  Container: _common_Container__WEBPACK_IMPORTED_MODULE_5__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=index.js.map