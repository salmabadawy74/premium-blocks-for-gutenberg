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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-option-element-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-icon pb-control-icon"
  }, _block_icons__WEBPACK_IMPORTED_MODULE_1__["default"][props.id])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-block-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "customize-control-title pb-control-title"
  }, props.params.label, __(" Gutenberg Block", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-block-links"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  }, __('Guidelines', 'premium-blocks-for-gutenberg'), " ")))), isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
    className: "pb-loading",
    icon: "update"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "option-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    checked: checked,
    onChange: () => {
      handleChange();
    }
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
  team: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  countup: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
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
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
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
  row: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Container */ "./src/common/Container.js");
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options-component */ "./src/options-component.js");





const {
  __
} = wp.i18n;
const {
  Dashicon
} = wp.components;

const OptionsTab = props => {
  const [values, setValues] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.values);

  const handleChange = newValues => {
    setValues(newValues);
  };

  const tabs = [{
    name: 'All',
    slug: 'all'
  }, {
    name: 'Core',
    slug: 'core'
  }, {
    name: 'Creative',
    slug: 'creative'
  }, {
    name: 'Content',
    slug: 'content'
  }, {
    name: 'Post',
    slug: 'post'
  }, {
    name: 'Social',
    slug: 'social'
  }, {
    name: 'Form',
    slug: 'form'
  }, {
    name: 'SEO',
    slug: 'seo'
  }];
  const [activeFilter, setFilter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  let options = Object.keys(props.options).filter(key => props.options[key].category.includes(activeFilter)).reduce((obj, key) => {
    return Object.assign(obj, {
      [key]: props.options[key]
    });
  }, {});
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_Container__WEBPACK_IMPORTED_MODULE_2__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " justify-between items-center space-y-4 sm:flex sm:flex-col lg:space-y-0 lg:flex-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "flex -ml-4 flex-wrap justify-center lg:justify-start",
    "aria-label": "Tabs"
  }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: tab.name,
    className: ``,
    onClick: () => setFilter(tab.slug)
  }, tab.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-options options-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_options_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rollback to Previous Version', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Experiencing an issue with Premium Blocks version ${system_info.theme_version} ? Roll back to a previous version to help troubleshoot the issue.`, 'premium-blocks-for-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(' Warning: Please backup your database before making the rollback.', 'premium-blocks-for-gutenberg')
  }))), openPopup && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    openPopup: openPopup,
    setopenPopup: setopenPopup,
    previousVersionSelect: previousVersionSelect,
    header: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Rollback to Previous Version', 'premium-blocks-for-gutenberg'),
    message: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Are you sure you want to reinstall version ${previousVersionSelect}?`, 'premium-blocks-for-gutenberg')
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
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");




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

  const submitHandler = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    if (!checkEmail(email)) {
      sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default().fire({
        icon: "error",
        title: __("Invalid Email Address...", "premium-blocks-for-gutenberg"),
        text: __("Please enter a valid email address!", "premium-blocks-for-gutenberg")
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
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default().fire({
            icon: "success",
            title: __("Success", "premium-blocks-for-gutenberg"),
            text: __("Thanks for your subscribe!", "premium-blocks-for-gutenberg"),
            timer: 3000
          });
          console.log(status, success, "success");
          setEmail("");
        } else {
          console.log(status, success, "error");
          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default().fire({
            icon: "error",
            title: __("Invalid Email Address...", "premium-blocks-for-gutenberg"),
            text: __("Please enter a valid email address!", "premium-blocks-for-gutenberg")
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

/***/ "./node_modules/sweetalert2/src/sweetalert2.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./node_modules/sweetalert2/dist/sweetalert2.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.4.30
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   *
   * @param {Array} arr
   * @returns {Array}
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Standardize console warnings
   *
   * @param {string | Array} message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardize console errors
   *
   * @param {string} message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   *
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  /**
   * @param {any} arg
   * @returns {boolean}
   */

  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  /**
   * @param {any} arg
   * @returns {Promise}
   */

  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  /**
   * @param {any} arg
   * @returns {boolean}
   */

  const isPromise = arg => arg && Promise.resolve(arg) === arg;
  /**
   * @param {Array} arr
   * @returns {any}
   */

  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };
  /**
   * @param {string} param
   */

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };
  /**
   * @param {string} param
   */


  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };
  /**
   * @param {string} param
   */


  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };

  const swalPrefix = 'swal2-';
  /**
   * @param {string[]} items
   * @returns {object}
   */

  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'no-war']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */

  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };
  /**
   * @returns {HTMLElement | null}
   */


  const getPopup = () => elementByClass(swalClasses.popup);
  /**
   * @returns {HTMLElement | null}
   */

  const getIcon = () => elementByClass(swalClasses.icon);
  /**
   * @returns {HTMLElement | null}
   */

  const getTitle = () => elementByClass(swalClasses.title);
  /**
   * @returns {HTMLElement | null}
   */

  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  /**
   * @returns {HTMLElement | null}
   */

  const getImage = () => elementByClass(swalClasses.image);
  /**
   * @returns {HTMLElement | null}
   */

  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  /**
   * @returns {HTMLElement | null}
   */

  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  /**
   * @returns {HTMLElement | null}
   */

  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  /**
   * @returns {HTMLElement | null}
   */

  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  /**
   * @returns {HTMLElement | null}
   */

  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  /**
   * @returns {HTMLElement | null}
   */

  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  /**
   * @returns {HTMLElement | null}
   */

  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  /**
   * @returns {HTMLElement | null}
   */

  const getActions = () => elementByClass(swalClasses.actions);
  /**
   * @returns {HTMLElement | null}
   */

  const getFooter = () => elementByClass(swalClasses.footer);
  /**
   * @returns {HTMLElement | null}
   */

  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  /**
   * @returns {HTMLElement | null}
   */

  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */

  const getFocusableElements = () => {
    const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  /**
   * @returns {boolean}
   */

  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */

  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */

  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      Array.from(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      Array.from(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */

  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */

  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */

  const getInput = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */

  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */

  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */

  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */

  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */

  const hide = elem => {
    elem.style.display = 'none';
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */

  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */

  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  /**
   * @returns {boolean}
   */

  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  /**
   * @returns {boolean}
   */

  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */

  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */

    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
  /**
   * @param {SweetAlertOptions} params
   */


  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */


  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */

  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>
  /** @type {InputClass[]} */

  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };
  /**
   * @param {HTMLInputElement} input
   */


  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof inputValue, "\""));
    }
  };
  /** @type Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input> */


  const renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  const errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const setContent = (icon, params) => {
    let oldContent = icon.innerHTML;
    let newContent;

    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }

    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  /**
   * @param {string} content
   * @returns {string}
   */


  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */

  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        result[paramName] = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */


    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));

    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },

    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  /**
   * @param {SweetAlertOptions} params
   */


  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */

  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;
    /**
     * @param {TouchEvent} e
     */

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };
    /**
     * @param {TouchEvent} e
     */


    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };
  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };
  /**
   * @param {AnimationEvent} event
   */

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */


  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };
  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */


  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };
  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */


  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   * @returns {HTMLElement | null}
   */

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  /**
   * @param {GlobalState} globalState
   */

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {function} dismissWith
   */

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } // TAB
    else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } // ESC
    else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleEnter = (instance, e, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };
  /**
   * @param {string} key
   */


  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert2} instance
   */

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert2} instance
   */


  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */


  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    update: update,
    _destroy: _destroy
  });

  /**
   * @param {SweetAlert2} instance
   */

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  /**
   * @param {SweetAlert2} instance
   */

  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */

  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */

  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {string} inputValue
   * @param {'confirm' | 'deny'} type
   */


  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */


  const rejectWith = (instance, error$$1) => {
    // @ts-ignore
    instance.rejectPromise(error$$1);
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = currentInstance._main(currentInstance.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */


  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // This anti-war message will only be shown to Russian users visiting Russian sites


  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    if (Math.random() < 0.1) {
      const noWar = document.createElement('div');
      noWar.className = 'leave-russia-now-and-apply-your-skills-to-the-world';
      const video = getRandomElement([{
        text: "\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,\n        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:",
        id: '4CfDhaRkw7I'
      }, {
        text: 'Эмпатия - главное <strong>человеческое</strong> чувство. Способность сопереживать. <strong>Способность поставить себя на место другого.</strong>',
        id: 's-GLAIY4DXA'
      }]);
      setInnerHtml(noWar, "\n      <div>\n        \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u0432\u043E\u0439\u043D\u0443, \u043E\u043D\u0430 \u043F\u0440\u0438\u0434\u0435\u0442 \u0432 \u0434\u043E\u043C <strong>\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441</strong> \u0438 \u0435\u0451 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0431\u0443\u0434\u0443\u0442 <strong>\u0443\u0436\u0430\u0441\u0430\u044E\u0449\u0438\u043C\u0438</strong>.\n      </div>\n      <div>\n        \u041F\u0443\u0442\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u0437\u0430 20 \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u043B\u0435\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0434\u043E\u043B\u0431\u0438\u043B \u043D\u0430\u043C, \u0447\u0442\u043E \u043C\u044B \u0431\u0435\u0441\u0441\u0438\u043B\u044C\u043D\u044B \u0438 \u043E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C. <strong>\u042D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A!</strong>\n      </div>\n      <div>\n        ".concat(video.text, "\n      </div>\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/").concat(video.id, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <div>\n        \u041D\u0435\u0442 \u0432\u043E\u0439\u043D\u0435!\n      </div>\n      "));
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&times;';

      closeButton.onclick = () => noWar.remove();

      noWar.appendChild(closeButton);
      window.addEventListener('load', () => {
        setTimeout(() => {
          document.body.appendChild(noWar);
        }, 1000);
      });
    }
  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.4.30';

  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
      Component: _tabs_options__WEBPACK_IMPORTED_MODULE_11__["default"],
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
      Component: _tabs_setting__WEBPACK_IMPORTED_MODULE_3__["default"],
      props: {}
    }
  }, {
    name: 'versionControl',
    title: __('version Control', "premium-blocks-for-gutenberg"),
    className: 'system',
    priority: 30,
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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_layout_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanel, {
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
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_store_panel_store__WEBPACK_IMPORTED_MODULE_8__.PanelProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RendeTabs, {
      options: PremiumBlocksPanelData.options
    })), document.getElementById('pb-dashboard'));
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