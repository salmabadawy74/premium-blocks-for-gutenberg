/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/icons/renderIcon.js":
/*!************************************!*\
  !*** ./assets/icons/renderIcon.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function renderCustomIcon(svg) {
  let customSVG = '';

  switch (svg) {
    // Flex Row
    case 'flex-column-start':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-start"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M8 0c0.672 0 1.248 0.512 1.312 1.184l0.032 0.16v29.312c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184l-0.032-0.16v-29.312c0-0.736 0.608-1.344 1.344-1.344zM15.616 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.888c-0.96 0-1.728-0.768-1.728-1.728v-17.856c0-0.96 0.768-1.728 1.728-1.728h1.888zM23.616 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.888c-0.96 0-1.728-0.768-1.728-1.728v-17.856c0-0.96 0.768-1.728 1.728-1.728h1.888z"
      }));
      break;

    case 'flex-column-end':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-end"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M24 0c0.672 0 1.248 0.512 1.312 1.184l0.032 0.16v29.312c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184l-0.032-0.16v-29.312c0-0.736 0.608-1.344 1.344-1.344zM18.272 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.856c-0.96 0-1.76-0.768-1.76-1.728v-17.856c0-0.96 0.8-1.728 1.76-1.728h1.856zM10.272 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.856c-0.96 0-1.76-0.768-1.76-1.728v-17.856c0-0.96 0.8-1.728 1.76-1.728h1.856z"
      }));
      break;

    case 'flex-column-center':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M16 0c0.672 0 1.248 0.512 1.312 1.184l0.032 0.16v29.312c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184l-0.032-0.16v-29.312c0-0.736 0.608-1.344 1.344-1.344zM23.616 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.888c-0.96 0-1.728-0.768-1.728-1.728v-17.856c0-0.96 0.768-1.728 1.728-1.728h1.888zM10.272 5.344c0.96 0 1.728 0.768 1.728 1.728v17.856c0 0.96-0.768 1.728-1.728 1.728h-1.856c-0.96 0-1.76-0.768-1.76-1.728v-17.856c0-0.96 0.8-1.728 1.76-1.728h1.856z"
      }));
      break;

    case 'flex-column-strech':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "shrink"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M16 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.736-0.608 1.344-1.344 1.344s-1.344-0.608-1.344-1.344v-29.312c0-0.736 0.608-1.344 1.344-1.344zM26.368 8.672c0.256 0.032 0.48 0.16 0.704 0.384 0.16 0.224 0.256 0.48 0.256 0.8v3.488h2.816c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.856-1.856 1.856h-2.816v3.616c-0.032 0.32-0.16 0.608-0.384 0.8-0.224 0.16-0.448 0.256-0.704 0.256-0.256-0.032-0.48-0.16-0.704-0.384l-5.216-6.080-0.128-0.16c-0.16-0.224-0.224-0.48-0.192-0.8s0.128-0.576 0.32-0.768l5.344-6.208c0.192-0.192 0.416-0.288 0.704-0.256zM5.632 8.672c0.224-0.032 0.448 0.032 0.608 0.16l0.128 0.096 5.344 6.176c0.16 0.224 0.288 0.48 0.288 0.8 0.032 0.256 0 0.448-0.096 0.64l-0.064 0.16-0.128 0.16-5.248 6.080c-0.192 0.224-0.416 0.352-0.704 0.384-0.224 0-0.48-0.096-0.704-0.256-0.16-0.16-0.288-0.352-0.352-0.608l-0.032-0.192v-3.616h-2.816c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h2.816v-3.488c0-0.256 0.064-0.48 0.16-0.672l0.096-0.128c0.192-0.224 0.448-0.352 0.704-0.384z"
      }));
      break;

    case 'flex-column-space-between':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-space-between"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M1.344 0c0.672 0 1.248 0.512 1.312 1.184v29.472c0 0.736-0.576 1.344-1.312 1.344-0.704 0-1.248-0.512-1.344-1.184v-29.472c0-0.736 0.608-1.344 1.344-1.344zM30.656 0c0.704 0 1.28 0.512 1.344 1.184v29.472c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184v-29.472c0-0.736 0.576-1.344 1.312-1.344zM8.8 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-3.456v-21.312h3.456zM26.656 5.344v21.312h-3.456c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h3.456z"
      }));
      break;

    case 'flex-column-space-around':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-space-around"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M30.656 0c0.704 0 1.28 0.512 1.344 1.184v29.472c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184v-29.472c0-0.736 0.576-1.344 1.312-1.344zM1.344 0c0.672 0 1.248 0.512 1.312 1.184v29.472c0 0.736-0.576 1.344-1.312 1.344-0.704 0-1.248-0.512-1.344-1.184v-29.472c0-0.736 0.608-1.344 1.344-1.344zM20.8 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-1.6c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h1.6zM12.8 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-1.6c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h1.6z"
      }));
      break;

    case 'flex-column-space-evenly':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-space-evenly"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M30.656 0c0.704 0 1.28 0.512 1.344 1.184v29.472c0 0.736-0.608 1.344-1.344 1.344-0.672 0-1.248-0.512-1.312-1.184v-29.472c0-0.736 0.576-1.344 1.312-1.344zM1.344 0c0.672 0 1.248 0.512 1.312 1.184v29.472c0 0.736-0.576 1.344-1.312 1.344-0.704 0-1.248-0.512-1.344-1.184v-29.472c0-0.736 0.608-1.344 1.344-1.344zM22.144 5.344c1.024 0 1.856 0.832 1.856 1.856v17.6c0 1.024-0.832 1.856-1.856 1.856h-1.6c-1.024 0-1.888-0.832-1.888-1.856v-17.6c0-1.024 0.864-1.856 1.888-1.856h1.6zM11.456 5.344c1.024 0 1.888 0.832 1.888 1.856v17.6c0 1.024-0.864 1.856-1.888 1.856h-1.6c-1.024 0-1.856-0.832-1.856-1.856v-17.6c0-1.024 0.832-1.856 1.856-1.856h1.6z"
      }));
      break;
    // Flex Column

    case 'flex-row-start':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-start"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M24.928 20c0.96 0 1.728 0.768 1.728 1.728v1.856c0 0.96-0.768 1.76-1.728 1.76h-17.856c-0.96 0-1.728-0.8-1.728-1.76v-1.856c0-0.96 0.768-1.728 1.728-1.728h17.856zM24.928 12c0.96 0 1.728 0.768 1.728 1.728v1.856c0 0.96-0.768 1.76-1.728 1.76h-17.856c-0.96 0-1.728-0.8-1.728-1.76v-1.856c0-0.96 0.768-1.728 1.728-1.728h17.856zM30.656 6.656c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312l-0.16 0.032h-29.312c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312l0.16-0.032h29.312z"
      }));
      break;

    case 'flex-row-end':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-end"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M30.656 22.656c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312l-0.16 0.032h-29.312c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312l0.16-0.032h29.312zM24.928 14.656c0.96 0 1.728 0.768 1.728 1.728v1.888c0 0.96-0.768 1.728-1.728 1.728h-17.856c-0.96 0-1.728-0.768-1.728-1.728v-1.888c0-0.96 0.768-1.728 1.728-1.728h17.856zM24.928 6.656c0.96 0 1.728 0.768 1.728 1.728v1.888c0 0.96-0.768 1.728-1.728 1.728h-17.856c-0.96 0-1.728-0.768-1.728-1.728v-1.888c0-0.96 0.768-1.728 1.728-1.728h17.856z"
      }));
      break;

    case 'flex-row-center':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M24.928 20c0.96 0 1.728 0.768 1.728 1.728v1.856c0 0.96-0.768 1.76-1.728 1.76h-17.856c-0.96 0-1.728-0.8-1.728-1.76v-1.856c0-0.96 0.768-1.728 1.728-1.728h17.856zM30.656 14.656c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312l-0.16 0.032h-29.312c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312l0.16-0.032h29.312zM24.928 6.656c0.96 0 1.728 0.768 1.728 1.728v1.888c0 0.96-0.768 1.728-1.728 1.728h-17.856c-0.96 0-1.728-0.768-1.728-1.728v-1.888c0-0.96 0.768-1.728 1.728-1.728h17.856z"
      }));
      break;

    case 'flex-row-strech':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "grow"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M1.344 0c0.736 0 1.312 0.608 1.312 1.344v29.312c0 0.736-0.576 1.344-1.312 1.344s-1.344-0.608-1.344-1.344v-29.312c0-0.736 0.608-1.344 1.344-1.344zM30.656 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.736-0.608 1.344-1.344 1.344s-1.312-0.608-1.312-1.344v-29.312c0-0.736 0.576-1.344 1.312-1.344zM20.96 8.672c0.224-0.032 0.448 0.032 0.64 0.16l0.096 0.096 5.344 6.176c0.16 0.224 0.288 0.48 0.32 0.8 0 0.256-0.032 0.448-0.128 0.64l-0.064 0.16-0.128 0.16-5.248 6.080c-0.192 0.224-0.416 0.352-0.672 0.384-0.256 0-0.512-0.096-0.736-0.256-0.16-0.16-0.288-0.352-0.352-0.608l-0.032-0.192v-3.616h-8v3.616c-0.064 0.32-0.16 0.608-0.384 0.8-0.224 0.16-0.48 0.256-0.736 0.256-0.224-0.032-0.48-0.16-0.672-0.384l-5.248-6.080-0.096-0.16c-0.16-0.224-0.224-0.48-0.192-0.8s0.128-0.576 0.288-0.768l5.376-6.208c0.192-0.192 0.416-0.288 0.704-0.256 0.256 0.032 0.48 0.16 0.704 0.384 0.16 0.224 0.256 0.48 0.256 0.8v3.488h8v-3.488c0-0.256 0.064-0.48 0.16-0.672l0.096-0.128c0.224-0.224 0.448-0.352 0.704-0.384z"
      }));
      break;

    case 'flex-row-space-between':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-space-between"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M30.656 29.344c0.736 0 1.344 0.576 1.344 1.312 0 0.704-0.512 1.28-1.184 1.344h-29.472c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312h29.472zM24.8 21.344c1.024 0 1.856 0.832 1.856 1.856v3.456h-21.312v-3.456c0-1.024 0.832-1.856 1.856-1.856h17.6zM26.656 5.344v3.456c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-3.456h21.312zM30.656 0c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312h-29.472c-0.736 0-1.344-0.576-1.344-1.312 0-0.704 0.512-1.28 1.184-1.344h29.472z"
      }));
      break;

    case 'flex-row-space-around':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-space-around"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M30.656 29.344c0.736 0 1.344 0.576 1.344 1.312 0 0.704-0.512 1.28-1.184 1.344h-29.472c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312h29.472zM24.8 17.344c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h17.6zM24.8 9.344c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h17.6zM30.656 0c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312h-29.472c-0.736 0-1.344-0.576-1.344-1.312 0-0.704 0.512-1.28 1.184-1.344h29.472z"
      }));
      break;

    case 'flex-row-space-evenly':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "justify-space-evenly"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M30.656 29.344c0.736 0 1.344 0.576 1.344 1.312 0 0.704-0.512 1.28-1.184 1.344h-29.472c-0.736 0-1.344-0.608-1.344-1.344 0-0.672 0.512-1.248 1.184-1.312h29.472zM24.8 18.656c1.024 0 1.856 0.864 1.856 1.888v1.6c0 1.024-0.832 1.856-1.856 1.856h-17.6c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.888 1.856-1.888h17.6zM24.8 8c1.024 0 1.856 0.832 1.856 1.856v1.6c0 1.024-0.832 1.888-1.856 1.888h-17.6c-1.024 0-1.856-0.864-1.856-1.888v-1.6c0-1.024 0.832-1.856 1.856-1.856h17.6zM30.656 0c0.736 0 1.344 0.608 1.344 1.344 0 0.672-0.512 1.248-1.184 1.312h-29.472c-0.736 0-1.344-0.576-1.344-1.312 0-0.704 0.512-1.28 1.184-1.344h29.472z"
      }));
      break;
    // Flex Direction

    case 'flex-direction-row':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Row"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M23.616 17.472l-5.088 5.184c-0.8 0.8-0.8 2.016 0 2.816s2.016 0.8 2.816 0l8.672-8.928c0.8-0.8 0.8-2.016 0-2.816l-8.544-8.384c-0.8-0.8-2.016-0.8-2.816 0s-0.8 1.984 0 2.784l5.472 5.344-20.8-0.128c-1.056 0-1.984 0.928-1.984 1.984s0.928 2.016 1.984 2.016l20.288 0.128z"
      }));
      break;

    case 'flex-direction-column':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Column"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M13.216 23.584l-5.216-5.056c-0.8-0.8-1.984-0.8-2.784 0s-0.8 2.016 0 2.816l8.928 8.672c0.8 0.8 1.984 0.8 2.784 0l8.416-8.544c0.8-0.8 0.8-2.016 0-2.816s-2.016-0.8-2.816 0l-5.312 5.472 0.128-20.8c0-1.056-0.928-1.984-2.016-1.984-1.056 0-1.984 0.928-1.984 1.984l-0.128 20.256z"
      }));
      break;

    case 'flex-direction-row-reverse':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Row Reverse"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M8.416 17.472l5.056 5.184c0.8 0.8 0.8 2.016 0 2.816s-2.016 0.8-2.816 0l-8.64-8.928c-0.8-0.8-0.8-2.016 0-2.816l8.512-8.384c0.8-0.96 2.016-0.8 2.816 0s0.8 1.984 0 2.784l-5.472 5.344 20.8-0.128c1.056 0 1.984 0.928 1.984 1.984s-0.928 2.016-1.984 2.016l-20.256 0.128z"
      }));
      break;

    case 'flex-direction-column-reverse':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Column Reverse"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M13.216 8.384l-5.216 5.088c-0.8 0.8-1.984 0.8-2.784 0s-0.672-2.144 0.128-2.944l8.928-8.672c0.8-0.8 1.984-0.8 2.784 0l8.416 8.544c0.8 0.8 0.8 1.984 0 2.784s-2.016 0.8-2.816 0l-5.312-5.44v20.928c0 1.056-0.928 1.984-2.016 1.984-1.056 0-1.984-0.928-1.984-1.984l-0.128-20.288z"
      }));
      break;
    // Flex Wrap

    case 'flex-wrap':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "wrap"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M1.344 0c0.736 0 1.312 0.608 1.312 1.344v29.312c0 0.736-0.576 1.344-1.312 1.344s-1.344-0.608-1.344-1.344v-29.312c0-0.736 0.608-1.344 1.344-1.344zM21.728 5.344c6.656 0 10.272 3.648 10.272 9.312 0 5.568-3.488 9.184-9.888 9.344h-7.648v4.032c0 0.288-0.064 0.544-0.224 0.768l-0.096 0.096c-0.256 0.256-0.544 0.416-0.864 0.448-0.288 0.032-0.544-0.064-0.768-0.192l-0.128-0.096-6.688-6.752c-0.224-0.224-0.32-0.512-0.384-0.864-0.032-0.256 0.032-0.512 0.128-0.736l0.256-0.32 6.528-6.624c0.256-0.256 0.544-0.416 0.864-0.416s0.608 0.096 0.896 0.288c0.192 0.16 0.352 0.384 0.416 0.64l0.064 0.192v4.192h7.232c3.712 0 4.96-1.248 4.96-4 0-2.624-1.184-3.904-4.608-4h-16.704v-5.312h16.384z"
      }));
      break;

    case 'flex-no-wrap':
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "nowrap"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M1.344 0c0.736 0 1.344 0.608 1.344 1.344v29.312c0 0.704-0.512 1.28-1.184 1.344h-0.16c-0.736 0-1.344-0.608-1.344-1.344v-29.312c0-0.704 0.512-1.28 1.184-1.344h0.16zM24 8c0.288-0.032 0.544 0.032 0.768 0.192l0.128 0.096 6.72 6.752c0.224 0.224 0.352 0.512 0.384 0.864 0.032 0.256-0.032 0.48-0.128 0.704l-0.096 0.16-0.16 0.192-6.56 6.624c-0.256 0.256-0.544 0.384-0.864 0.416-0.32 0-0.64-0.096-0.896-0.288-0.224-0.192-0.352-0.416-0.448-0.672l-0.032-0.192v-4.192h-15.616c-1.024 0-1.856-0.832-1.856-1.856v-1.6c0-1.024 0.832-1.856 1.856-1.856h15.616v-4.064c0-0.288 0.064-0.544 0.224-0.736l0.096-0.128c0.256-0.224 0.544-0.384 0.864-0.416z"
      }));
      break;
  }

  return customSVG;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCustomIcon);

/***/ }),

/***/ "./assets/js/settings.js":
/*!*******************************!*\
  !*** ./assets/js/settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontAwesomeEnabled": () => (/* binding */ FontAwesomeEnabled),
/* harmony export */   "JsonUploadEnabled": () => (/* binding */ JsonUploadEnabled),
/* harmony export */   "Modal": () => (/* binding */ Modal),
/* harmony export */   "accordion": () => (/* binding */ accordion),
/* harmony export */   "banner": () => (/* binding */ banner),
/* harmony export */   "bulletList": () => (/* binding */ bulletList),
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "contentSwitcher": () => (/* binding */ contentSwitcher),
/* harmony export */   "countUp": () => (/* binding */ countUp),
/* harmony export */   "dualHeading": () => (/* binding */ dualHeading),
/* harmony export */   "fancyText": () => (/* binding */ fancyText),
/* harmony export */   "heading": () => (/* binding */ heading),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "iconBox": () => (/* binding */ iconBox),
/* harmony export */   "imageSeparator": () => (/* binding */ imageSeparator),
/* harmony export */   "lottie": () => (/* binding */ lottie),
/* harmony export */   "maps": () => (/* binding */ maps),
/* harmony export */   "person": () => (/* binding */ person),
/* harmony export */   "pricingTable": () => (/* binding */ pricingTable),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "section": () => (/* binding */ section),
/* harmony export */   "testimonials": () => (/* binding */ testimonials),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "videoBox": () => (/* binding */ videoBox)
/* harmony export */ });
/*import premiumLogo from "./logo";
wp.blocks.updateCategory("premium-blocks", { icon: premiumLogo });*/
//Blocks Keys
const {
  Modal,
  accordion,
  banner,
  heading,
  button,
  icon,
  lottie,
  maps,
  person,
  container,
  search,
  section,
  testimonials,
  trigger,
  [`bullet-list`]: bulletList,
  [`content-switcher`]: contentSwitcher,
  [`count-up`]: countUp,
  [`dual-heading`]: dualHeading,
  [`fancy-text`]: fancyText,
  [`icon-box`]: iconBox,
  [`image-separator`]: imageSeparator,
  [`pricing-table`]: pricingTable,
  [`video-box`]: videoBox
} = PremiumBlocksSettings.activeBlocks; //Plugin Config Keys

const {
  FontAwesomeEnabled
} = FontAwesomeConfig;
const {
  JsonUploadEnabled
} = JsonUploadFile;

/***/ }),

/***/ "./src/components/Animation.js":
/*!*************************************!*\
  !*** ./src/components/Animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "./src/components/RangeControl/single-range-control.js");

const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  SelectControl
} = wp.components;

const defaultData = {
  animation: '',
  name: 'fadeCenter',
  repeat: 'once',
  direction: 'center',
  duration: 1000,
  delay: 0,
  curve: 'ease-in-out'
};

class Animation extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isAnimate: false
    };
  }

  componentWillMount() {
    this.props.onChange(Object.assign({}, defaultData, this.props.value || {}));
  }

  setSettings(type, val) {
    const openAnimation = val == '' ? {
      openAnimation: 0
    } : {
      openAnimation: 1
    };
    let data = Object.assign({}, this.props.value, openAnimation, type == 'animation' ? {
      [type]: val,
      direction: this._valueChange(val, 'change')
    } : {
      [type]: val
    });
    data.name = data.animation + data.direction;
    this.props.onChange(data);
  }

  _valueChange(value, type) {
    let returnData = value == 'rotate' ? [{
      label: __('DownLeft', "premium-blocks-for-gutenberg"),
      value: 'DownLeft'
    }, {
      label: __('DownRight', "premium-blocks-for-gutenberg"),
      value: 'DownRight'
    }, {
      label: __('UpLeft', "premium-blocks-for-gutenberg"),
      value: 'UpLeft'
    }, {
      label: __('UpRight', "premium-blocks-for-gutenberg"),
      value: 'UpRight'
    }] : value == 'slide' || value == 'flip' || value == 'fold' ? [{
      label: __('Right', "premium-blocks-for-gutenberg"),
      value: 'Right'
    }, {
      label: __('Left', "premium-blocks-for-gutenberg"),
      value: 'Left'
    }, {
      label: __('Up', "premium-blocks-for-gutenberg"),
      value: 'Up'
    }, {
      label: __('Down', "premium-blocks-for-gutenberg"),
      value: 'Down'
    }] : [{
      label: __('Center', "premium-blocks-for-gutenberg"),
      value: 'center'
    }, {
      label: __('Right', "premium-blocks-for-gutenberg"),
      value: 'Right'
    }, {
      label: __('Left', "premium-blocks-for-gutenberg"),
      value: 'Left'
    }, {
      label: __('Up', "premium-blocks-for-gutenberg"),
      value: 'Up'
    }, {
      label: __('Down', "premium-blocks-for-gutenberg"),
      value: 'Down'
    }];

    if (type == 'data') {
      return returnData;
    } else {
      return returnData[0].value;
    }
  }

  doAnimate() {
    const {
      value,
      uniqueId
    } = this.props;

    if (typeof uniqueId !== 'undefined') {
      const {
        isAnimate
      } = this.state;
      const blockId = document.querySelector(`.premium-blocks-${uniqueId}`);

      if (isAnimate && value.repeat !== 'once') {
        blockId.style.animationName = '';
      } else {
        blockId.style.animationName = '';

        if (typeof this.timer !== 'undefined' && this.timer > 0) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          blockId.style.animationName = value.name;
          blockId.style.animationTimingFunction = value.curve;
          blockId.style.animationDuration = value.duration + 'ms';
          blockId.style.animationDelay = value.delay + 'ms';
          blockId.style.animationIterationCount = value.repeat === 'once' ? 1 : 'infinite';
        }, 300);
      }

      this.setState({
        isAnimate: !isAnimate
      });
    }
  }

  render() {
    const {
      value,
      label,
      uniqueId
    } = this.props;
    const isActive = value && value.openAnimation === 1 ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-fields premium-animation premium-field-alt"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: label ? label : '',
      value: value.animation || '',
      options: [{
        value: ' ',
        label: __('None', 'premium-blocks-for-gutenberg')
      }, {
        value: 'fade',
        label: __('Fade', 'premium-blocks-for-gutenberg')
      }, {
        value: 'slide',
        label: __('Slide', 'premium-blocks-for-gutenberg')
      }, {
        value: 'bounce',
        label: __('Bounce', 'premium-blocks-for-gutenberg')
      }, {
        value: 'zoom',
        label: __('Zoom', 'premium-blocks-for-gutenberg')
      }, {
        value: 'flip',
        label: __('Flip', 'premium-blocks-for-gutenberg')
      }, {
        value: 'fold',
        label: __('Fold', 'premium-blocks-for-gutenberg')
      }, {
        value: 'rotate',
        label: __('Rotate', 'premium-blocks-for-gutenberg')
      }],
      onChange: val => this.setSettings('animation', val)
    }), isActive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Direction', 'premium-blocks-for-gutenberg'),
      value: value.direction || 'center',
      options: this._valueChange(value.animation, 'data'),
      onChange: val => this.setSettings('direction', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Repeat', 'premium-blocks-for-gutenberg'),
      value: value.repeat || 'once',
      options: [{
        value: 'once',
        label: __('Once', "premium-blocks-for-gutenberg")
      }, {
        value: 'loop',
        label: __('Loop')
      }],
      onChange: val => this.setSettings('repeat', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Duration", 'premium-blocks-for-gutenberg'),
      min: 0,
      max: 2000,
      value: value.duration || 1000,
      defaultValue: 1000,
      onChange: val => this.setSettings('duration', val),
      showUnit: false
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __('Delay', 'premium-blocks-for-gutenberg'),
      min: 0,
      max: 3000,
      value: value.delay || 0,
      defaultValue: 0,
      onChange: val => this.setSettings('delay', val),
      showUnit: false
    }), value && value.animation != 'bounce' && value.animation != 'zoom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __('Curve', 'premium-blocks-for-gutenberg'),
      value: value.curve || 'ease-in-out',
      options: [{
        value: 'ease-in-out',
        label: __('Ease-in-out', 'premium-blocks-for-gutenberg')
      }, {
        value: 'ease',
        label: __('Ease', 'premium-blocks-for-gutenberg')
      }, {
        value: 'ease-in',
        label: __('Ease-in', 'premium-blocks-for-gutenberg')
      }, {
        value: 'ease-out',
        label: __('Ease-out', 'premium-blocks-for-gutenberg')
      }, {
        value: 'linear',
        label: __('Linear', 'premium-blocks-for-gutenberg')
      }],
      onChange: val => this.setSettings('curve', val)
    }), typeof uniqueId !== 'undefined' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => this.doAnimate(),
      className: "components-button is-button is-default is-primary is-large"
    }, " ", this.state.isAnimate && value.repeat === 'loop' ? "Stop" : "Animate", " ")));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animation);

/***/ }),

/***/ "./src/components/Color Control/ColorComponent.js":
/*!********************************************************!*\
  !*** ./src/components/Color Control/ColorComponent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");




const {
  __,
  sprintf
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  Button,
  Popover,
  ColorIndicator,
  ColorPicker,
  Tooltip
} = wp.components;
const {
  withSelect
} = wp.data;


class AdvancedColorControl extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isVisible: false,
      colors: [],
      currentColor: "",
      defaultColor: ""
    };
  }

  componentDidMount() {
    if ("transparent" === this.props.colorDefault) {
      this.setState({
        currentColor: undefined === this.props.colorValue || "" === this.props.colorValue || "transparent" === this.props.colorValue ? "" : this.props.colorValue
      });
      this.setState({
        defaultColor: ""
      });
    } else {
      this.setState({
        currentColor: undefined === this.props.colorValue || "" === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
      });
      this.setState({
        defaultColor: this.props.colorDefault
      });
    }
  }

  render() {
    const toggleVisible = () => {
      if ("transparent" === this.props.colorDefault) {
        this.setState({
          currentColor: undefined === this.props.colorValue || "" === this.props.colorValue || "transparent" === this.props.colorValue ? "" : this.props.colorValue
        });
      } else {
        this.setState({
          currentColor: undefined === this.props.colorValue || "" === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
        });
      }

      this.setState({
        isVisible: true
      });
    };

    const toggleClose = () => {
      if (this.state.isVisible === true) {
        this.setState({
          isVisible: false
        });
      }
    };

    const normalizeColor = color => {
      const parsedColor = (0,colord__WEBPACK_IMPORTED_MODULE_4__.colord)(color);

      if (!parsedColor.parsed) {
        return color;
      }

      if (parsedColor.rgba.a === 1) {
        return parsedColor.toHex();
      }

      return parsedColor.toRgbString();
    };

    const isNew = wp.components.GradientPicker;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-color-popover-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-advanced-color-container"
    }, this.props.label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "premium-color-label"
    }, this.props.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-color-wrapper"
    }, this.state.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      position: "bottom left",
      className: "premium-popover-color",
      onClose: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: isNew ? "premium-gutenberg-color-picker-new" : "premium-gutenberg-color-picker"
    }, !this.props.disableCustomColors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: undefined === this.props.colorValue || "" === this.props.colorValue || "transparent" === this.props.colorValue ? this.state.defaultColor : this.props.colorValue,
      onChangeComplete: color => {
        this.setState({
          currentColor: color.hex
        });

        if (color.rgb) {
          this.props.onColorChange(color.rgb.a != 1 ? "rgba(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + "," + color.rgb.a + ")" : color.hex);
        }
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-color-picker-value"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      onChange: _ref => {
        let {
          target: {
            value: color
          }
        } = _ref;
        this.props.onColorChange(normalizeColor(color));
        this.setState({
          currentColor: color
        });
      },
      value: normalizeColor(this.state.currentColor),
      type: "text"
    }))), this.props.colors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-color-picker-top`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-color-picker-skins"
    }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(this.props.colors, _ref2 => {
      let {
        color,
        slug,
        name
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: color,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("premium-color-picker-single", {
          active: this.props.colorValue === color
        }),
        style: {
          backgroundColor: color
        },
        onClick: () => {
          this.setState({
            currentColor: color
          });
          this.props.onColorChange(color);
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `premium-tooltip-top`
      }, name || sprintf(__("Color code: %s"), color)));
    })))), this.state.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: __("Select Color")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: `premium-color-picker-single ${"" === this.props.colorDefault ? "Premium-has-alpha" : "Premium-no-alpha"}`,
      onClick: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorIndicator, {
      className: "premium-advanced-color-indicate",
      colorValue: "transparent" === this.props.colorValue || undefined === this.props.colorValue || "" === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
    }))), !this.state.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: __("Select Color")
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: `premium-color-picker-single ${"" === this.props.colorDefault ? "Premium-has-alpha" : "Premium-no-alpha"}`,
      onClick: toggleVisible
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorIndicator, {
      className: "premium-advanced-color-indicate",
      colorValue: "transparent" === this.props.colorValue || undefined === this.props.colorValue || "" === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
    })))), !this.props.disableReset && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-color-btn-reset-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "premium-reset-btn",
      disabled: this.state.currentColor === this.props.colorDefault,
      onClick: () => {
        this.setState({
          currentColor: this.props.colorDefault
        });
        this.props.onColorChange(undefined);
      }
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect((select, ownProps) => {
  const settings = select("core/block-editor").getSettings();
  const colors = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(settings, ["colors"], []);
  const disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
  return {
    colors,
    disableCustomColors
  };
})(AdvancedColorControl));

/***/ }),

/***/ "./src/components/HelperFunction.js":
/*!******************************************!*\
  !*** ./src/components/HelperFunction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationAttr": () => (/* binding */ animationAttr),
/* harmony export */   "borderCss": () => (/* binding */ borderCss),
/* harmony export */   "filterJsCss": () => (/* binding */ filterJsCss),
/* harmony export */   "generateBlockId": () => (/* binding */ generateBlockId),
/* harmony export */   "generateCss": () => (/* binding */ generateCss),
/* harmony export */   "gradientBackground": () => (/* binding */ gradientBackground),
/* harmony export */   "gradientValue": () => (/* binding */ gradientValue),
/* harmony export */   "marginCss": () => (/* binding */ marginCss),
/* harmony export */   "paddingCss": () => (/* binding */ paddingCss),
/* harmony export */   "typographyCss": () => (/* binding */ typographyCss),
/* harmony export */   "videoBackground": () => (/* binding */ videoBackground)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const gradientBackground = value => {
  const {
    backgroundType,
    backgroundColor,
    backgroundRepeat,
    backgroundPosition,
    fixed,
    backgroundSize,
    gradientColorTwo,
    gradientPosition,
    gradientType,
    gradientLocationOne,
    gradientLocationTwo,
    gradientAngle,
    backgroundImageURL
  } = value;
  let btnGrad, btnGrad2, btnbg;

  if (undefined !== backgroundType && "gradient" === backgroundType) {
    btnGrad = "transparent" === backgroundColor || undefined === backgroundColor ? "rgba(255,255,255,0)" : backgroundColor;
    btnGrad2 = undefined !== gradientColorTwo && undefined !== gradientColorTwo && "" !== gradientColorTwo ? gradientColorTwo : "#777";

    if ("radial" === gradientType) {
      btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    } else if ("radial" !== gradientType) {
      btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    }
  } else {
    btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : "";
  }

  return {
    backgroundColor: backgroundColor,
    backgroundImage: gradientValue(value),
    backgroundRepeat: backgroundRepeat,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
    backgroundAttachment: fixed ? "fixed" : "unset"
  };
};
const borderCss = (value, device) => {
  var _value$borderWidth, _value$borderWidth$de, _value$borderWidth2, _value$borderWidth2$d, _value$borderWidth3, _value$borderWidth3$d, _value$borderWidth4, _value$borderWidth4$d, _value$borderRadius, _value$borderRadius$d, _value$borderRadius2, _value$borderRadius2$, _value$borderRadius3, _value$borderRadius3$, _value$borderRadius4, _value$borderRadius4$;

  return {
    borderStyle: value === null || value === void 0 ? void 0 : value.borderType,
    borderTopWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth = value.borderWidth) === null || _value$borderWidth === void 0 ? void 0 : (_value$borderWidth$de = _value$borderWidth[device]) === null || _value$borderWidth$de === void 0 ? void 0 : _value$borderWidth$de.top,
    borderRightWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth2 = value.borderWidth) === null || _value$borderWidth2 === void 0 ? void 0 : (_value$borderWidth2$d = _value$borderWidth2[device]) === null || _value$borderWidth2$d === void 0 ? void 0 : _value$borderWidth2$d.right,
    borderBottomWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth3 = value.borderWidth) === null || _value$borderWidth3 === void 0 ? void 0 : (_value$borderWidth3$d = _value$borderWidth3[device]) === null || _value$borderWidth3$d === void 0 ? void 0 : _value$borderWidth3$d.bottom,
    borderLeftWidth: value === null || value === void 0 ? void 0 : (_value$borderWidth4 = value.borderWidth) === null || _value$borderWidth4 === void 0 ? void 0 : (_value$borderWidth4$d = _value$borderWidth4[device]) === null || _value$borderWidth4$d === void 0 ? void 0 : _value$borderWidth4$d.left,
    borderColor: value === null || value === void 0 ? void 0 : value.borderColor,
    borderTopLeftRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius = value.borderRadius) === null || _value$borderRadius === void 0 ? void 0 : (_value$borderRadius$d = _value$borderRadius[device]) === null || _value$borderRadius$d === void 0 ? void 0 : _value$borderRadius$d.top) || 0}px`,
    borderTopRightRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius2 = value.borderRadius) === null || _value$borderRadius2 === void 0 ? void 0 : (_value$borderRadius2$ = _value$borderRadius2[device]) === null || _value$borderRadius2$ === void 0 ? void 0 : _value$borderRadius2$.right) || 0}px`,
    borderBottomLeftRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius3 = value.borderRadius) === null || _value$borderRadius3 === void 0 ? void 0 : (_value$borderRadius3$ = _value$borderRadius3[device]) === null || _value$borderRadius3$ === void 0 ? void 0 : _value$borderRadius3$.bottom) || 0}px`,
    borderBottomRightRadius: `${(value === null || value === void 0 ? void 0 : (_value$borderRadius4 = value.borderRadius) === null || _value$borderRadius4 === void 0 ? void 0 : (_value$borderRadius4$ = _value$borderRadius4[device]) === null || _value$borderRadius4$ === void 0 ? void 0 : _value$borderRadius4$.left) || 0}px`
  };
};
const paddingCss = (value, device) => {
  var _value$device, _value$device2, _value$device3, _value$device4, _value$device5, _value$device6, _value$device7, _value$device8;

  return {
    paddingTop: (value === null || value === void 0 ? void 0 : (_value$device = value[device]) === null || _value$device === void 0 ? void 0 : _value$device.top) && `${value === null || value === void 0 ? void 0 : (_value$device2 = value[device]) === null || _value$device2 === void 0 ? void 0 : _value$device2.top}${value === null || value === void 0 ? void 0 : value.unit}`,
    paddingRight: (value === null || value === void 0 ? void 0 : (_value$device3 = value[device]) === null || _value$device3 === void 0 ? void 0 : _value$device3.right) && `${value === null || value === void 0 ? void 0 : (_value$device4 = value[device]) === null || _value$device4 === void 0 ? void 0 : _value$device4.right}${value === null || value === void 0 ? void 0 : value.unit}`,
    paddingBottom: (value === null || value === void 0 ? void 0 : (_value$device5 = value[device]) === null || _value$device5 === void 0 ? void 0 : _value$device5.bottom) && `${value === null || value === void 0 ? void 0 : (_value$device6 = value[device]) === null || _value$device6 === void 0 ? void 0 : _value$device6.bottom}${value === null || value === void 0 ? void 0 : value.unit}`,
    paddingLeft: (value === null || value === void 0 ? void 0 : (_value$device7 = value[device]) === null || _value$device7 === void 0 ? void 0 : _value$device7.left) && `${value === null || value === void 0 ? void 0 : (_value$device8 = value[device]) === null || _value$device8 === void 0 ? void 0 : _value$device8.left}${value === null || value === void 0 ? void 0 : value.unit}`
  };
};
const marginCss = (value, device) => {
  var _value$device9, _value$device10, _value$device11, _value$device12, _value$device13, _value$device14, _value$device15, _value$device16;

  return {
    marginTop: (value === null || value === void 0 ? void 0 : (_value$device9 = value[device]) === null || _value$device9 === void 0 ? void 0 : _value$device9.top) && `${value === null || value === void 0 ? void 0 : (_value$device10 = value[device]) === null || _value$device10 === void 0 ? void 0 : _value$device10.top}${value === null || value === void 0 ? void 0 : value.unit}`,
    marginRight: (value === null || value === void 0 ? void 0 : (_value$device11 = value[device]) === null || _value$device11 === void 0 ? void 0 : _value$device11.right) && `${value === null || value === void 0 ? void 0 : (_value$device12 = value[device]) === null || _value$device12 === void 0 ? void 0 : _value$device12.right}${value === null || value === void 0 ? void 0 : value.unit}`,
    marginBottom: (value === null || value === void 0 ? void 0 : (_value$device13 = value[device]) === null || _value$device13 === void 0 ? void 0 : _value$device13.bottom) && `${value === null || value === void 0 ? void 0 : (_value$device14 = value[device]) === null || _value$device14 === void 0 ? void 0 : _value$device14.bottom}${value === null || value === void 0 ? void 0 : value.unit}`,
    marginLeft: (value === null || value === void 0 ? void 0 : (_value$device15 = value[device]) === null || _value$device15 === void 0 ? void 0 : _value$device15.left) && `${value === null || value === void 0 ? void 0 : (_value$device16 = value[device]) === null || _value$device16 === void 0 ? void 0 : _value$device16.left}${value === null || value === void 0 ? void 0 : value.unit}`
  };
};
const typographyCss = (value, device) => {
  var _value$fontSize;

  return {
    fontSize: (value === null || value === void 0 ? void 0 : value.fontSize[device]) && `${value === null || value === void 0 ? void 0 : value.fontSize[device]}${value === null || value === void 0 ? void 0 : (_value$fontSize = value.fontSize) === null || _value$fontSize === void 0 ? void 0 : _value$fontSize.unit}`,
    fontStyle: value === null || value === void 0 ? void 0 : value.fontStyle,
    fontFamily: value === null || value === void 0 ? void 0 : value.fontFamily,
    fontWeight: value === null || value === void 0 ? void 0 : value.fontWeight,
    letterSpacing: (value === null || value === void 0 ? void 0 : value.letterSpacing[device]) && `${value === null || value === void 0 ? void 0 : value.letterSpacing[device]}px`,
    textDecoration: value === null || value === void 0 ? void 0 : value.textDecoration,
    textTransform: value === null || value === void 0 ? void 0 : value.textTransform,
    lineHeight: (value === null || value === void 0 ? void 0 : value.lineHeight[device]) && `${value === null || value === void 0 ? void 0 : value.lineHeight[device]}px`
  };
};
const generateBlockId = clientId => {
  return clientId.split("-")[4];
};
const generateCss = styles => {
  let styleCss = "";

  for (const selector in styles) {
    const selectorStyles = styles[selector];
    const filteredStyles = Object.keys(selectorStyles).map(property => {
      const value = selectorStyles[property];
      const valueWithoutUnits = value ? value.toString().replaceAll(/px|em|rem|!important|%/g, "").replaceAll(/\s/g, "") : "";

      if (value && !value.toString().includes("undefined") && valueWithoutUnits) {
        return `${property}: ${value};`;
      }
    }).filter(style => !!style).join("\n");
    styleCss += `${selector}{
                    ${filteredStyles}
                }\n`;
  }

  return styleCss;
};
const filterJsCss = styles => {
  const asArray = Object.entries(styles);
  const filtered = asArray.filter(_ref => {
    let [property, value] = _ref;
    const valueWithoutUnits = value ? value.toString().replaceAll(/px|em|rem|!important|%/g, "").replaceAll(/\s/g, "") : "";
    return value && !value.toString().includes("undefined") && valueWithoutUnits;
  });
  const filteredStyles = Object.fromEntries(filtered);
  return filteredStyles;
};
const videoBackground = (backgroundType, videoSource, videoURL, bgExternalVideo) => {
  if (backgroundType == "video") {
    if (videoSource == "local") {
      if (videoURL) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-blocks-video-bg-wrap"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
          className: "premium-blocks-video-bg",
          autoPlay: true,
          muted: true,
          loop: true
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
          src: videoURL
        })));
      }
    }

    if (videoSource == "external") {
      if (bgExternalVideo) {
        let video = bgExternalVideo,
            src = "";

        if (video.match("youtube|youtu.be")) {
          let id = 0;

          if (video.match("embed") && video.split(/embed\//)[1]) {
            id = video.split(/embed\//)[1].split('"')[0];
          } else if (video.split(/v\/|v=|youtu\.be\//)[1]) {
            id = video.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
          }

          src = "//www.youtube.com/embed/" + id + "?playlist=" + id + "&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&wmode=transparent&widgetid=1";
        } else if (video.match("vimeo.com")) {
          let id = video.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0];
          src = "//player.vimeo.com/video/" + id + "?autoplay=1&loop=1&title=0&byline=0&portrait=0";
        }

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-blocks-video-bg-wrap"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
          src: src,
          frameBorder: "0",
          allowFullScreen: true
        }));
      }
    }
  }
};
const animationAttr = data => {
  if (typeof data !== "undefined" && typeof data.name !== "undefined" && data.openAnimation) {
    return {
      "data-premiumanimation": JSON.stringify(data)
    };
  } else {
    return {};
  }
};
const gradientValue = value => {
  const {
    backgroundType,
    backgroundColor,
    gradientColorTwo,
    gradientPosition,
    gradientType,
    gradientLocationOne,
    gradientLocationTwo,
    gradientAngle,
    backgroundImageURL
  } = value;
  let btnGrad, btnGrad2, btnbg;

  if (undefined !== backgroundType && "gradient" === backgroundType) {
    btnGrad = "transparent" === backgroundColor || undefined === backgroundColor ? "rgba(255,255,255,0)" : backgroundColor;
    btnGrad2 = undefined !== gradientColorTwo && undefined !== gradientColorTwo && "" !== gradientColorTwo ? gradientColorTwo : "#777";

    if ("radial" === gradientType) {
      btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    } else if ("radial" !== gradientType) {
      btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
    }
  } else {
    btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : "";
  }

  return btnbg;
};

/***/ }),

/***/ "./src/components/InsideTab.js":
/*!*************************************!*\
  !*** ./src/components/InsideTab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component,
  Fragment
} = wp.element;

class InsideTab extends Component {
  render() {
    const {
      children,
      onTabChange
    } = this.props;
    onTabChange && onTabChange();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, " ", Array.isArray(children) ? children.map(item => item) : children, " ");
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InsideTab);

/***/ }),

/***/ "./src/components/InsideTabs.js":
/*!**************************************!*\
  !*** ./src/components/InsideTabs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsideTabs)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  Tooltip
} = wp.components;
class InsideTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.tabTitle
    };
  }

  render() {
    let TEMPTAG = Fragment;
    const tabs = this.props.children,
          {
      activeTab
    } = this.state,
          {
      label,
      panelGroup
    } = this.props;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('premium-field', 'premium-field-tabs', {
      'panel-group': panelGroup
    }, {
      'premium-has-label': typeof label !== 'undefined'
    });

    if (panelGroup) {
      TEMPTAG = 'Div';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} premium-blocks__base-control`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-field-tab-header"
    }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-field-tab-menus"
    }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: __(tab.props.tabTitle)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TEMPTAG, panelGroup && {
      className: 'tab-menu-wrapper'
    }, panelGroup && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "21",
      height: "18",
      viewBox: "0 0 21 18",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      transform: "translate(-29 -4) translate(29 4)",
      fill: "none"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M1 .708v15.851",
      className: "premium-svg-stroke",
      "stroke-linecap": "square"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      className: "premium-svg-fill",
      x: "5",
      y: "5",
      width: "16",
      height: "7",
      rx: "1"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => this.setState({
        activeTab: tab.props.tabTitle
      }),
      className: 'premium-tab-menu ' + (tab.props.tabTitle === activeTab ? 'active' : '')
    }, tab.props.tabTitle)))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-field-tab-items"
    }, tabs.map(tab => tab.props.tabTitle === activeTab ? tab : '')));
  }

}

/***/ }),

/***/ "./src/components/Premium-Background-Control.js":
/*!******************************************************!*\
  !*** ./src/components/Premium-Background-Control.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumBackgroundControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _premium_media_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-media-upload */ "./src/components/premium-media-upload.js");
/* harmony import */ var _premium_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premium-background */ "./src/components/premium-background.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "./src/components/RangeControl/single-range-control.js");
/* harmony import */ var _radio_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio-control */ "./src/components/radio-control.js");


const {
  SelectControl,
  Button,
  ButtonGroup,
  Tooltip,
  TextControl
} = wp.components; // import { FontAwesomeEnabled } from "../../assets/js/settings";




const {
  __
} = wp.i18n;
const {
  Fragment,
  useState
} = wp.element;



function PremiumBackgroundControl(_ref) {
  let {
    value,
    onChange,
    backgroundVedio = false
  } = _ref;
  let defaultValues = {
    backgroundType: "",
    backgroundColor: "",
    backgroundImageID: "",
    backgroundImageURL: "",
    backgroundPosition: "",
    backgroundRepeat: "",
    backgroundSize: "",
    fixed: false,
    gradientLocationOne: "",
    gradientColorTwo: "",
    gradientLocationTwo: "",
    gradientAngle: "",
    gradientPosition: "",
    gradientType: "",
    videoSource: "local",
    bgExternalVideo: "",
    videoURL: "",
    videoID: "",
    bgVideoFallbackID: "",
    bgVideoFallbackURL: ""
  };
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const gradTypes = [{
    key: "linear",
    name: __("Linear", "premium-blocks-for-gutenberg")
  }, {
    key: "radial",
    name: __("Radial", "premium-blocks-for-gutenberg")
  }];
  const bgType = [{
    key: "solid",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Accordion",
      fill: "inherit",
      xmlns: "http://www.w3.org/2000/svg",
      width: "14.44",
      height: "14.5",
      viewBox: "0 0 21.44 21.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "classic-background-icon"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Classic_Background",
      "data-name": "Classic Background"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      class: "cls-1",
      d: "M9.26,15.78h0a3.21,3.21,0,0,1,.95,1.88v-.08A3.23,3.23,0,0,0,9.26,15.78Z",
      transform: "translate(-1.78 -1.75)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      class: "cls-1",
      d: "M22.58,2.38a2.18,2.18,0,0,0-2.34-.48,34.56,34.56,0,0,0-12,8.87L6.74,12.71a3.75,3.75,0,0,0-.42.62A4.79,4.79,0,0,0,2.07,17.6L1.8,20.05a2.88,2.88,0,0,0,.82,2.36,2.85,2.85,0,0,0,2,.84,1.72,1.72,0,0,0,.32,0L7.44,23a4.81,4.81,0,0,0,2.86-1.38,4.93,4.93,0,0,0,1.41-3,3.89,3.89,0,0,0,.52-.34l2-1.58A34.59,34.59,0,0,0,23.05,4.71,2.1,2.1,0,0,0,22.58,2.38ZM9.24,20.53a3.44,3.44,0,0,1-2,.94l-2.47.27a1.33,1.33,0,0,1-1.11-.39,1.39,1.39,0,0,1-.39-1.13l.27-2.46a3.33,3.33,0,0,1,3.24-3h.53l.33.07.2.05a3.24,3.24,0,0,1,1.39.86h0a3.23,3.23,0,0,1,.94,1.8v.2c0,.11,0,.22,0,.33A3.43,3.43,0,0,1,9.24,20.53Zm4-5-1.69,1.36a4,4,0,0,0-.2-.58,4.85,4.85,0,0,0-.63-1.07c-.13-.16-.28-.32-.43-.48a4,4,0,0,0-.49-.44l-.27-.19A3.16,3.16,0,0,0,9,13.76c-.19-.09-.38-.16-.57-.23l-.33-.1,1.36-1.72c.19-.24.4-.48.61-.73h0a4,4,0,0,1,4,3.84C13.77,15.07,13.51,15.29,13.26,15.49ZM21.67,4.14a0,0,0,0,0,0,0,33.73,33.73,0,0,1-6.31,9.4,5.47,5.47,0,0,0-4-3.91A33.16,33.16,0,0,1,20.78,3.3a.66.66,0,0,1,.73.15A.61.61,0,0,1,21.67,4.14Z",
      transform: "translate(-1.78 -1.75)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      class: "cls-1",
      d: "M6.9,14.79h0Zm3.42-.07h0c.15.16.3.32.43.48A3.8,3.8,0,0,0,10.32,14.72Zm.42.48a4.85,4.85,0,0,1,.63,1.07A4,4,0,0,0,10.74,15.2Z",
      transform: "translate(-1.78 -1.75)"
    }))),
    tooltip: __("Classic", "premium-blocks-for-gutenberg")
  }, {
    key: "gradient",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Accordion",
      fill: "inherit",
      xmlns: "http://www.w3.org/2000/svg",
      width: "14.44",
      height: "14.5",
      viewBox: "0 0 21.75 19.7"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "gradient-background-icon"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      class: "cls-1",
      d: "M19.47,8,16,4.57c-1.43-1.43-2.57-2-3.68-1.91a5.41,5.41,0,0,0-3,1.91L3.71,10.15c-2.63,2.64-2.93,3.78,0,6.72l3.46,3.46c1.34,1.34,2.35,2,3.35,2s2-.68,3.37-2l5.57-5.58a5.24,5.24,0,0,0,1.85-3.12C21.4,10.51,20.83,9.4,19.47,8ZM4.78,11.21l5.57-5.57c.92-.93,1.54-1.49,2.24-1.49S13.91,4.6,15,5.64L18.41,9.1c1.33,1.33,1.45,2,1.42,2.43a1.46,1.46,0,0,1-.19.63,34,34,0,0,0-15.48-.32Zm13.63,2.48-5.57,5.57c-2.13,2.13-2.48,2.13-4.6,0L4.78,15.8c-1-1-1.57-1.64-1.65-2.18a32.55,32.55,0,0,1,15.51-.17Z",
      transform: "translate(-1.62 -2.65)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      class: "cls-1",
      d: "M20.62,22.22A2.72,2.72,0,0,1,18.13,21a2.72,2.72,0,0,1,.24-2.74L19,17.18a1.87,1.87,0,0,1,1.58-1h0a1.9,1.9,0,0,1,1.59,1l.66,1.09A2.72,2.72,0,0,1,23.1,21,2.71,2.71,0,0,1,20.62,22.22Zm0-4.55s-.17.07-.29.28h0L19.66,19a1.32,1.32,0,0,0-.22,1.24,1.32,1.32,0,0,0,1.18.44,1.31,1.31,0,0,0,1.17-.44A1.32,1.32,0,0,0,21.57,19L20.91,18C20.79,17.75,20.67,17.67,20.61,17.67Zm-.93-.1h0Z",
      transform: "translate(-1.62 -2.65)"
    })),
    tooltip: __("Gradient", "premium-blocks-for-gutenberg")
  }];

  if (backgroundVedio) {
    bgType.push({
      key: "video",
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        id: "Accordion",
        xmlns: "http://www.w3.org/2000/svg",
        width: "14.44",
        height: "14.5",
        viewBox: "0 0 21.5 18.34"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "video-background-icon"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "cls-1",
        d: "M22.12,6.39a2.36,2.36,0,0,0-2.53.39L18,7.91c-.09-3.29-1.51-4.58-5-4.58H6.71c-3.57,0-5,1.39-5,5v8.42c0,2.4,1.3,5,5,5H13c3.44,0,4.86-1.29,5-4.59l1.61,1.13a2.86,2.86,0,0,0,1.65.6,1.89,1.89,0,0,0,.87-.2,2.34,2.34,0,0,0,1.14-2.3V8.69A2.37,2.37,0,0,0,22.12,6.39ZM16.49,16.71c0,2.75-.71,3.46-3.46,3.46H6.71a3.14,3.14,0,0,1-3.46-3.46V8.29c0-2.75.71-3.46,3.46-3.46H13c2.75,0,3.46.71,3.46,3.46Zm5.26-.4c0,.59-.17.88-.33,1a.39.39,0,0,1-.17,0,1.55,1.55,0,0,1-.8-.33L18,15.26V9.73L20.45,8c.4-.27.77-.38,1-.28s.33.48.33,1Z",
        transform: "translate(-1.75 -3.33)"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        class: "cls-1",
        d: "M12,12.25A2.25,2.25,0,1,1,14.25,10,2.25,2.25,0,0,1,12,12.25Zm0-3a.75.75,0,1,0,.75.75A.76.76,0,0,0,12,9.25Z",
        transform: "translate(-1.75 -3.33)"
      })),
      tooltip: __("Video", "premium-blocks-for-gutenberg")
    });
  }

  const onChangeBackground = (item, value) => {
    const updatedState = { ...state
    };
    updatedState[item] = value;
    setState(updatedState);
    onChange(updatedState);
  };

  const {
    backgroundType,
    backgroundColor,
    backgroundImageID,
    backgroundImageURL,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    fixed,
    bgExternalVideo,
    gradientLocationOne,
    gradientColorTwo,
    gradientLocationTwo,
    videoURL,
    videoID,
    gradientAngle,
    gradientPosition,
    gradientType,
    videoSource,
    bgVideoFallbackID,
    bgVideoFallbackURL
  } = state;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-size-settings-container  premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "premium-beside-btn-group"
  }, __("Background Type", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-background-type__wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "premium-button-size-type-options",
    "aria-label": __("Background Type", "premium-blocks-for-gutenberg")
  }, lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(bgType, _ref2 => {
    let {
      icon,
      key,
      tooltip
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: tooltip
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      key: key,
      className: "premium-btn-size-btn",
      isSmall: true,
      isPrimary: backgroundType === key,
      onClick: () => onChangeBackground("backgroundType", key)
    }, icon));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-reset-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "premium-reset-btn ",
    disabled: "" === backgroundType,
    onClick: e => {
      e.preventDefault();
      setState(defaultValues);
      onChange(defaultValues);
    }
  })))), "solid" === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-inner-sub-section premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "color",
    colorValue: backgroundColor,
    colorDefault: "",
    onChangeColor: newValue => onChangeBackground("backgroundColor", newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageID: backgroundImageID,
    imageURL: backgroundImageURL,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    fixed: fixed,
    onSelectMedia: media => {
      onChangeBackground("backgroundImageURL", media.url);
    },
    onRemoveImage: () => onChangeBackground("backgroundImageURL", ""),
    onChangeBackPos: newValue => onChangeBackground("backgroundPosition", newValue),
    onchangeBackRepeat: newValue => onChangeBackground("backgroundRepeat", newValue),
    onChangeBackSize: newValue => onChangeBackground("backgroundSize", newValue),
    onChangeFixed: check => onChangeBackground("fixed", check)
  })), "gradient" === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Premium-inner-sub-section premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: __("Gradient Color 1", "premium-blocks-for-gutenberg"),
    colorValue: backgroundColor,
    colorDefault: "",
    onColorChange: value => onChangeBackground("backgroundColor", value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Location", "premium-blocks-for-gutenberg"),
    value: gradientLocationOne,
    onChange: value => onChangeBackground("gradientLocationOne", value),
    showUnit: false,
    defaultValue: 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: __("Gradient Color 2", "premium-blocks-for-gutenberg"),
    colorValue: gradientColorTwo,
    colorDefault: "#777777",
    onColorChange: value => onChangeBackground("gradientColorTwo", value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Location", "premium-blocks-for-gutenberg"),
    value: gradientLocationTwo,
    onChange: value => onChangeBackground("gradientLocationTwo", value),
    showUnit: false,
    defaultValue: 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-size-settings-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "premium-beside-btn-group"
  }, __("Gradient Type", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "premium-button-size-type-options",
    "aria-label": __("Gradient Type", "premium-blocks-for-gutenberg")
  }, lodash_map__WEBPACK_IMPORTED_MODULE_4___default()(gradTypes, _ref3 => {
    let {
      name,
      key
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      key: key,
      className: "premium-btn-size-btn",
      isSmall: true,
      isPrimary: gradientType === key,
      onClick: () => onChangeBackground("gradientType", key)
    }, name);
  }))), "radial" !== gradientType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __("Gradient Angle", "premium-blocks-for-gutenberg"),
    value: gradientAngle,
    onChange: value => onChangeBackground("gradientAngle", value),
    showUnit: false,
    defaultValue: 0,
    min: 0,
    max: 360
  }), "radial" === gradientType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __("Gradient Position", "premium-blocks-for-gutenberg"),
    value: gradientPosition,
    options: [{
      value: "center top",
      label: __("Center Top", "premium-blocks-for-gutenberg")
    }, {
      value: "center center",
      label: __("Center Center", "premium-blocks-for-gutenberg")
    }, {
      value: "center bottom",
      label: __("Center Bottom", "premium-blocks-for-gutenberg")
    }, {
      value: "left top",
      label: __("Left Top", "premium-blocks-for-gutenberg")
    }, {
      value: "left center",
      label: __("Left Center", "premium-blocks-for-gutenberg")
    }, {
      value: "left bottom",
      label: __("Left Bottom", "premium-blocks-for-gutenberg")
    }, {
      value: "right top",
      label: __("Right Top", "premium-blocks-for-gutenberg")
    }, {
      value: "right center",
      label: __("Right Center", "premium-blocks-for-gutenberg")
    }, {
      value: "right bottom",
      label: __("Right Bottom", "premium-blocks-for-gutenberg")
    }],
    onChange: value => onChangeBackground("gradientPosition", value)
  })), "video" === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __("Video Source", "premium-blocks-for-gutenberg"),
    value: videoSource,
    options: [{
      value: "local",
      label: __("Local", "premium-blocks-for-gutenberg")
    }, {
      value: "external",
      label: __("External", "premium-blocks-for-gutenberg")
    }],
    onChange: val => onChangeBackground("videoSource", val)
  }), videoSource === "external" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __("Video URL", "premium-blocks-for-gutenberg"),
    value: bgExternalVideo || "",
    onChange: val => onChangeBackground("bgExternalVideo", val)
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __("Video", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_media_upload__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "video",
    imageID: videoID,
    imageURL: videoURL,
    onSelectMedia: media => onChangeBackground("videoURL", media.url),
    onRemoveImage: () => onChangeBackground("videoURL", "")
  }))));
}

/***/ }),

/***/ "./src/components/PremiumShadow.js":
/*!*****************************************!*\
  !*** ./src/components/PremiumShadow.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumShadow)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "./src/components/RangeControl/single-range-control.js");
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");

const {
  __
} = wp.i18n;
const {
  SelectControl,
  Dropdown,
  Button,
  ColorPicker
} = wp.components;
const {
  Fragment,
  useState
} = wp.element;


function PremiumShadow(_ref) {
  let {
    label,
    value,
    onChange,
    boxShadow = false
  } = _ref;
  let defaultValues = {
    color: "",
    blur: "",
    horizontal: "",
    vertical: "",
    position: ""
  };
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);

  const onChangeShadow = (item, value) => {
    const updatedState = { ...state
    };
    updatedState[item] = value;
    setState(updatedState);
    onChange(updatedState);
  };

  const POSITION = [{
    value: "inset",
    label: __("Inset", "premium-blocks-for-gutenberg")
  }, {
    value: "",
    label: __("Outline", "premium-blocks-for-gutenberg")
  }];
  const {
    color,
    blur,
    horizontal,
    vertical,
    position
  } = state;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-shadow-control__container premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "premium-control-title"
  }, __(label || "Box Shadow", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-shadow-control__wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colorValue: color,
    colorDefault: "",
    onColorChange: value => onChangeShadow("color", value),
    disableReset: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dropdown, {
    className: "premium-control-toggle-btn",
    contentClassName: "premium-control-toggle-content",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Horizontal"),
      value: horizontal,
      onChange: value => onChangeShadow("horizontal", value),
      showUnit: false,
      defaultValue: 0,
      min: -100,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Vertical"),
      value: vertical,
      onChange: value => onChangeShadow("vertical", value),
      showUnit: false,
      defaultValue: 0,
      min: -100,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Blur"),
      value: blur,
      onChange: value => onChangeShadow("blur", value),
      showUnit: false,
      defaultValue: 0
    }), boxShadow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Position"),
      options: POSITION,
      value: position,
      onChange: value => onChangeShadow("position", value)
    }))
  })));
}

/***/ }),

/***/ "./src/components/RangeControl/range-control.js":
/*!******************************************************!*\
  !*** ./src/components/RangeControl/range-control.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumRange)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  RangeControl
} = wp.components;
function PremiumRange(_ref) {
  let {
    onChange,
    value = '',
    step = 1,
    max = 100,
    min = 0,
    beforeIcon = '',
    help = '',
    defaultValue
  } = _ref;

  const onChangInput = event => {
    if (event.target.value === '') {
      onChange(undefined);
      return;
    }

    const newValue = Number(event.target.value);

    if (newValue === '') {
      onChange(undefined);
      return;
    }

    if (min < -0.1) {
      if (newValue > max) {
        onChange(max);
      } else if (newValue < min && newValue !== '-') {
        onChange(min);
      } else {
        onChange(newValue);
      }
    } else {
      if (newValue > max) {
        onChange(max);
      } else if (newValue < -0.1) {
        onChange(min);
      } else {
        onChange(newValue);
      }
    }
  };

  return [onChange && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'wrapper'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `input-field-wrapper active`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    className: 'premium-range-value-input',
    beforeIcon: beforeIcon,
    value: value,
    onChange: newVal => onChange(newVal),
    min: min,
    max: max,
    step: step,
    help: help,
    withInputField: false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium_range_value"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: value,
    onChange: onChangInput,
    min: min,
    max: max,
    step: step,
    type: "number",
    className: "components-text-control__input"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "premium-slider-reset",
    disabled: value == defaultValue,
    onClick: e => {
      e.preventDefault();
      onChange(defaultValue);
    }
  }))];
}

/***/ }),

/***/ "./src/components/RangeControl/responsive-range-control.js":
/*!*****************************************************************!*\
  !*** ./src/components/RangeControl/responsive-range-control.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsiveRangeControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../premium-size-units */ "./src/components/premium-size-units.js");
/* harmony import */ var _single_range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-range-control */ "./src/components/RangeControl/single-range-control.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responsive */ "./src/components/responsive.js");

const {
  useSelect,
  useDispatch
} = wp.data;
const {
  useState
} = wp.element;
const {
  __
} = wp.i18n;



function ResponsiveRangeControl(_ref) {
  let {
    label,
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    showUnit = false,
    units = ['px', 'em', 'rem'],
    defaultValue
  } = _ref;
  let defaultValues = {
    'Desktop': '',
    'Tablet': '',
    'Mobile': '',
    unit: 'px'
  };
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const [deviceType, setDeviceType] = useState('Desktop');

  let customSetPreviewDeviceType = device => {
    setDeviceType(device);
  };

  if (wp.data.select('core/edit-post')) {
    const theDevice = useSelect(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select('core/edit-post');
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
    }, []);

    if (theDevice !== deviceType) {
      setDeviceType(theDevice);
    }

    const {
      __experimentalSetPreviewDeviceType = null
    } = useDispatch('core/edit-post');

    customSetPreviewDeviceType = device => {
      __experimentalSetPreviewDeviceType(device);

      setDeviceType(device);
    };
  }

  const devices = ['Desktop', 'Tablet', 'Mobile'];

  const onChangeValue = (value, device) => {
    const updatedState = { ...state
    };
    updatedState[device] = value;
    setState(updatedState);
    onChange(updatedState);
  };

  const onChangeUnit = value => {
    const updatedState = { ...state
    };
    updatedState['unit'] = value;
    setState(updatedState);
    onChange(updatedState);
  };

  const output = {};
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: 'mobile',
    value: state['Mobile'],
    onChange: size => onChangeValue(size, 'Mobile'),
    min: min,
    max: max,
    step: state['unit'] === 'em' || state['unit'] === 'rem' ? .1 : 1,
    showUnit: false,
    defaultValue: defaultValues['Mobile']
  });
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: 'tablet',
    value: state['Tablet'],
    onChange: size => onChangeValue(size, 'Tablet'),
    min: min,
    max: max,
    step: state['unit'] === 'em' || state['unit'] === 'rem' ? .1 : 1,
    showUnit: false,
    defaultValue: defaultValues['Tablet']
  });
  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: 'desktop',
    value: state['Desktop'],
    onChange: size => onChangeValue(size, 'Desktop'),
    min: min,
    max: max,
    step: state['unit'] === 'em' || state['unit'] === 'rem' ? .1 : 1,
    showUnit: false,
    defaultValue: defaultValues['Desktop']
  });
  return [onChange && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-blocks-range-control premium-blocks__base-control`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`,
    style: {
      display: "flex",
      alignItems: 'center'
    }
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: " premium-control-title"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: newDevice => setDeviceType(newDevice)
  })), showUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_1__["default"], {
    units: units,
    activeUnit: state['unit'],
    onChangeSizeUnit: newValue => onChangeUnit(newValue)
  })), output[deviceType] ? output[deviceType] : output.Desktop)];
}

/***/ }),

/***/ "./src/components/RangeControl/single-range-control.js":
/*!*************************************************************!*\
  !*** ./src/components/RangeControl/single-range-control.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsiveSingleRangeControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../premium-size-units */ "./src/components/premium-size-units.js");
/* harmony import */ var _range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range-control */ "./src/components/RangeControl/range-control.js");

const {
  __
} = wp.i18n;


const {
  Fragment
} = wp.element;
function ResponsiveSingleRangeControl(_ref) {
  let {
    device = 'device',
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    onChangeUnit,
    showUnit = false,
    units = ['px', 'em', 'rem'],
    className = '',
    label,
    defaultValue
  } = _ref;
  return [onChange && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-blocks-range-control premium-blocks__base-control`
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, label)), showUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_1__["default"], {
    units: units,
    activeUnit: unit,
    onChangeSizeUnit: newValue => onChangeUnit(newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: undefined !== value ? value : '',
    onChange: size => onChange(size),
    min: min,
    max: max,
    step: step,
    defaultValue: defaultValue
  }))];
}

/***/ }),

/***/ "./src/components/align.js":
/*!*********************************!*\
  !*** ./src/components/align.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const icons = {};
icons.vertical_top = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(1)",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "premium-svg-fill",
  x: "4",
  y: "4",
  width: "6",
  height: "12",
  rx: "1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  class: "premium-svg-stroke",
  d: "M0 1h14",
  "stroke-width": "2",
  "stroke-linecap": "square"
})));
icons.vertical_middle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(1 1)"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "premium-svg-fill",
  x: "4",
  width: "6",
  height: "14",
  rx: "1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 7h2",
  class: "premium-svg-stroke",
  "stroke-width": "2",
  "stroke-linecap": "square"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13 8h2",
  class: "premium-svg-stroke",
  "stroke-width": "2",
  "stroke-linecap": "square"
})));
icons.vertical_bottom = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(1)",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  class: "premium-svg-fill",
  x: "4",
  width: "6",
  height: "12",
  rx: "1"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 15h14",
  class: "premium-svg-stroke",
  "stroke-width": "2",
  "stroke-linecap": "square"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/components/default-image.js":
/*!*****************************************!*\
  !*** ./src/components/default-image.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultImage)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const placeHolder = PremiumBlocksSettings.defaultAuthImg;
const {
  Component
} = wp.element;
class DefaultImage extends Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: placeHolder,
      className: this.props.className
    });
  }

}

/***/ }),

/***/ "./src/components/icons.js":
/*!*********************************!*\
  !*** ./src/components/icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Icons = {
  alignCenter: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19.5",
    height: "16.5",
    viewBox: "0 0 19.5 16.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "text-align-center"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Center_Align",
    "data-name": "Center Align"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17.24,10.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M17.24,20.75H7.76a.75.75,0,1,1,0-1.5h9.48a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }))),
  alignLeft: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19.5",
    height: "16.5",
    viewBox: "0 0 19.5 16.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "text-align-left"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Left_Align",
    "data-name": "Left Align"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M13,10.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M13,20.75H3.5a.75.75,0,0,1,0-1.5H13a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }))),
  alignRight: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19.5",
    height: "16.5",
    viewBox: "0 0 19.5 16.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "text-align-right"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Right_Align",
    "data-name": "Right Align"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,10.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,20.75H12a.75.75,0,0,1,0-1.5H21.5a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }))),
  alignJustify: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "19.5",
    height: "16.5",
    viewBox: "0 0 19.5 16.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "text-align-justify"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Justify"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,5.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,10.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,15.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.5,20.75H3.5a.75.75,0,0,1,0-1.5h18a.75.75,0,0,1,0,1.5Z",
    transform: "translate(-2.75 -4.25)"
  }))),
  arrowTop: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "13.64",
    height: "18.5",
    viewBox: "0 0 13.64 18.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "arrow-top"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M19.1,10.6a.75.75,0,0,1-1.06,0L13.25,5.81V21a.75.75,0,0,1-1.5,0V5.81L7,10.6A.75.75,0,1,1,5.9,9.54L12,3.47a.75.75,0,0,1,1.06,0L19.1,9.54A.75.75,0,0,1,19.1,10.6Z",
    transform: "translate(-5.68 -3.25)"
  }))),
  arrowBottom: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "13.64",
    height: "18.5",
    viewBox: "0 0 13.64 18.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "bottom-arrow"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M19.1,15.46,13,21.53a.75.75,0,0,1-1.06,0L5.9,15.46A.75.75,0,1,1,7,14.4l4.79,4.79V4a.75.75,0,0,1,1.5,0V19.19L18,14.4a.75.75,0,1,1,1.06,1.06Z",
    transform: "translate(-5.68 -3.25)"
  }))),
  arrowLeft: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.5",
    height: "13.64",
    viewBox: "0 0 18.5 13.64"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "left-arrow"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.75,12.5a.76.76,0,0,1-.75.75H5.81L10.6,18a.75.75,0,0,1,0,1.06.75.75,0,0,1-1.06,0L3.47,13a.75.75,0,0,1,0-1.06L9.54,5.9A.75.75,0,1,1,10.6,7L5.81,11.75H21A.76.76,0,0,1,21.75,12.5Z",
    transform: "translate(-3.25 -5.68)"
  }))),
  arrowRight: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.5",
    height: "13.64",
    viewBox: "0 0 18.5 13.64"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "left-arrow"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M21.75,12.5a.75.75,0,0,1-.22.53L15.46,19.1a.75.75,0,0,1-1.06,0,.75.75,0,0,1,0-1.06l4.79-4.79H4a.75.75,0,0,1,0-1.5H19.19L14.4,7A.75.75,0,1,1,15.46,5.9L21.53,12A.75.75,0,0,1,21.75,12.5Z",
    transform: "translate(-3.25 -5.68)"
  }))),
  triggerLeft: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "trigger-left"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Trigger_Left",
    "data-name": "Trigger Left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM3.25,15.5v-6c0-4.61,1.64-6.25,6.25-6.25h5.25v18.5H9.5C4.89,21.75,3.25,20.11,3.25,15.5Zm18.5,0c0,4.35-1.46,6.06-5.5,6.23V3.27c4,.17,5.5,1.88,5.5,6.23Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M8.5,15.81A.74.74,0,0,1,8,15.59a.75.75,0,0,1,0-1.06l2-2-2-2A.75.75,0,0,1,9,9.41L11.59,12a.75.75,0,0,1,0,1.06L9,15.59A.74.74,0,0,1,8.5,15.81Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  triggerRight: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "trigger-right"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Trigger_Right",
    "data-name": "Trigger Right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,1.75h-6c-.29,0-.56,0-.83,0a3.4,3.4,0,0,0-.45,0h0C3.7,2.16,1.75,4.52,1.75,9.5v6c0,5,2,7.34,6.46,7.69h0a3.4,3.4,0,0,0,.45,0c.27,0,.54,0,.83,0h6c5.43,0,7.75-2.32,7.75-7.75v-6C23.25,4.07,20.93,1.75,15.5,1.75ZM7.75,21.65c-3.28-.41-4.5-2.18-4.5-6.15v-6c0-4,1.22-5.74,4.5-6.15Zm14-6.15c0,4.61-1.64,6.25-6.25,6.25H9.25V3.26H15.5c4.61,0,6.25,1.64,6.25,6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M8.67,23.22a.47.47,0,0,1-.17,0,.67.67,0,0,1-.28-.06A3.4,3.4,0,0,0,8.67,23.22Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,15.81a.74.74,0,0,1-.53-.22L12.41,13a.75.75,0,0,1,0-1.06L15,9.41A.75.75,0,0,1,16,10.47l-2,2,2,2a.75.75,0,0,1,0,1.06A.74.74,0,0,1,15.5,15.81Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  triggerFull: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.5",
    height: "21.5",
    viewBox: "0 0 21.5 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "trigger-full-screen"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Trigger_Full_Screen",
    "data-name": "Trigger Full Screen"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.5,23.25h-6c-5.43,0-7.75-2.32-7.75-7.75v-6c0-5.43,2.32-7.75,7.75-7.75h6c5.43,0,7.75,2.32,7.75,7.75v6C23.25,20.93,20.93,23.25,15.5,23.25Zm-6-20c-4.61,0-6.25,1.64-6.25,6.25v6c0,4.61,1.64,6.25,6.25,6.25h6c4.61,0,6.25-1.64,6.25-6.25v-6c0-4.61-1.64-6.25-6.25-6.25Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M10.1,16.27a.74.74,0,0,1-.53-.22L7.08,13.56a1.5,1.5,0,0,1,0-2.13L9.57,8.94A.75.75,0,1,1,10.63,10L8.14,12.49,10.63,15a.75.75,0,0,1,0,1.06A.74.74,0,0,1,10.1,16.27Z",
    transform: "translate(-1.75 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M14.9,16.27a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06l2.49-2.49L14.37,10a.75.75,0,1,1,1.06-1.06l2.49,2.49a1.5,1.5,0,0,1,0,2.13l-2.49,2.49A.74.74,0,0,1,14.9,16.27Z",
    transform: "translate(-1.75 -1.75)"
  }))),
  triggerPushDown: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Accordion",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.53",
    height: "21.5",
    viewBox: "0 0 21.53 21.5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "trigger-push-down"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Trigger_Push_Down",
    "data-name": "Trigger Push Down"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M15.49,1.75h-6c-5.43,0-7.75,2.32-7.75,7.75v6c0,5.43,2.32,7.75,7.75,7.75h6c5.18,0,7.53-2.11,7.73-7,0-.13,0-.27,0-.41s0-.21,0-.32v-6C23.24,4.07,20.92,1.75,15.49,1.75Zm0,20h-6c-4.17,0-5.91-1.34-6.2-5H21.69C21.4,20.41,19.66,21.75,15.49,21.75Zm6.25-6.5H3.23V9.5c0-4.61,1.64-6.25,6.25-6.25h6c4.61,0,6.25,1.64,6.25,6.25Z",
    transform: "translate(-1.73 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M23.26,16a.59.59,0,0,1,0,.23c0-.13,0-.27,0-.41A.57.57,0,0,1,23.26,16Z",
    transform: "translate(-1.73 -1.75)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12.52,12.31a.75.75,0,0,1-.54-.22L9.42,9.53a.75.75,0,0,1,0-1.06.77.77,0,0,1,1.07,0l2,2,2-2a.77.77,0,0,1,1.07,0,.75.75,0,0,1,0,1.06l-2.56,2.56A.74.74,0,0,1,12.52,12.31Z",
    transform: "translate(-1.73 -1.75)"
  })))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedColorControl": () => (/* reexport safe */ _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Animation": () => (/* reexport safe */ _Animation__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "DefaultImage": () => (/* reexport safe */ _default_image__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "Icons": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "InsideTab": () => (/* reexport safe */ _InsideTab__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "InsideTabs": () => (/* reexport safe */ _InsideTabs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "InspectorTab": () => (/* reexport safe */ _inspectorTab__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "InspectorTabs": () => (/* reexport safe */ _inspectorTabs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "MultiButtonsControl": () => (/* reexport safe */ _responsive_radio__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "PremiumBackgroundControl": () => (/* reexport safe */ _Premium_Background_Control__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "PremiumBorder": () => (/* reexport safe */ _premium_border__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "PremiumFilters": () => (/* reexport safe */ _premium_filters__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "PremiumLowerQuote": () => (/* reexport safe */ _testimonials_lower_quote__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "PremiumMediaUpload": () => (/* reexport safe */ _premium_media_upload__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "PremiumResponsiveTabs": () => (/* reexport safe */ _premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "PremiumShadow": () => (/* reexport safe */ _PremiumShadow__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PremiumTypo": () => (/* reexport safe */ _premium_typo__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "PremiumUpperQuote": () => (/* reexport safe */ _testimonials_upper_quote__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "RadioComponent": () => (/* reexport safe */ _radio_control__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "ResponsiveRangeControl": () => (/* reexport safe */ _RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "ResponsiveSingleRangeControl": () => (/* reexport safe */ _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Shape": () => (/* reexport safe */ _premium_shape__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   "Social": () => (/* reexport safe */ _social_media__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   "SpacingComponent": () => (/* reexport safe */ _premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "WebfontLoader": () => (/* reexport safe */ _typography_fontLoader__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   "alignIcons": () => (/* reexport safe */ _align__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "iconsList": () => (/* reexport safe */ _premium_icons_list__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   "renderCustomIcon": () => (/* reexport safe */ _assets_icons_renderIcon__WEBPACK_IMPORTED_MODULE_25__["default"])
/* harmony export */ });
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");
/* harmony import */ var _InsideTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsideTabs */ "./src/components/InsideTabs.js");
/* harmony import */ var _InsideTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsideTab */ "./src/components/InsideTab.js");
/* harmony import */ var _PremiumShadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PremiumShadow */ "./src/components/PremiumShadow.js");
/* harmony import */ var _RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RangeControl/responsive-range-control */ "./src/components/RangeControl/responsive-range-control.js");
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "./src/components/RangeControl/single-range-control.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/components/icons.js");
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./align */ "./src/components/align.js");
/* harmony import */ var _inspectorTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inspectorTabs */ "./src/components/inspectorTabs.js");
/* harmony import */ var _inspectorTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inspectorTab */ "./src/components/inspectorTab.js");
/* harmony import */ var _Premium_Background_Control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Premium-Background-Control */ "./src/components/Premium-Background-Control.js");
/* harmony import */ var _premium_border__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./premium-border */ "./src/components/premium-border.js");
/* harmony import */ var _premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./premium-responsive-spacing */ "./src/components/premium-responsive-spacing.js");
/* harmony import */ var _premium_typo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./premium-typo */ "./src/components/premium-typo.js");
/* harmony import */ var _radio_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radio-control */ "./src/components/radio-control.js");
/* harmony import */ var _responsive_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./responsive-radio */ "./src/components/responsive-radio.js");
/* harmony import */ var _premium_media_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./premium-media-upload */ "./src/components/premium-media-upload.js");
/* harmony import */ var _premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./premium-responsive-tabs */ "./src/components/premium-responsive-tabs.js");
/* harmony import */ var _default_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./default-image */ "./src/components/default-image.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Animation */ "./src/components/Animation.js");
/* harmony import */ var _premium_filters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./premium-filters */ "./src/components/premium-filters.js");
/* harmony import */ var _premium_shape__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./premium-shape */ "./src/components/premium-shape.js");
/* harmony import */ var _social_media__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./social-media */ "./src/components/social-media.js");
/* harmony import */ var _typography_fontLoader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./typography/fontLoader */ "./src/components/typography/fontLoader.js");
/* harmony import */ var _premium_icons_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./premium-icons-list */ "./src/components/premium-icons-list.js");
/* harmony import */ var _assets_icons_renderIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/icons/renderIcon */ "./assets/icons/renderIcon.js");
/* harmony import */ var _testimonials_lower_quote__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./testimonials/lower-quote */ "./src/components/testimonials/lower-quote.js");
/* harmony import */ var _testimonials_upper_quote__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./testimonials/upper-quote */ "./src/components/testimonials/upper-quote.js");





























/***/ }),

/***/ "./src/components/inspectorTab.js":
/*!****************************************!*\
  !*** ./src/components/inspectorTab.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  Fragment
} = wp.element;

const InspectorTab = props => {
  const {
    children,
    isActive,
    key
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: isActive ? 'block' : 'none'
    },
    className: "premium-inspector-tab"
  }, Array.isArray(children) ? children.map(item => item) : children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectorTab);

/***/ }),

/***/ "./src/components/inspectorTabs.js":
/*!*****************************************!*\
  !*** ./src/components/inspectorTabs.js ***!
  \*****************************************/
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


const {
  __
} = wp.i18n;
const {
  Fragment,
  cloneElement,
  Children
} = wp.element;
const {
  Tooltip
} = wp.components;
const {
  useState,
  useRef,
  useEffect
} = wp.element,
      LAYOUT = 'layout',
      STYLE = 'style',
      ADVANCE = 'advance';

const InspectorTabs = props => {
  const {
    defaultTab,
    children,
    tabs
  } = props,
        [currentTab, setCurrentTab] = useState(defaultTab ? defaultTab : tabs[0]),
        tabContainer = useRef(),
        offset = useRef(undefined);
  let sidebarPanel;
  useEffect(() => {
    sidebarPanel = tabContainer.current.closest('.components-panel');
  });
  const observer = new IntersectionObserver(_ref => {
    let [e] = _ref;
    return e.target.classList.toggle('premium-is-sticky', e.intersectionRatio < 1);
  }, {
    threshold: [1]
  }); // component did mount

  useEffect(() => {
    // sticky tabs menu
    const container = document.querySelector('.premium-inspector-tabs-container');

    if (container) {
      observer.observe(container);
    } // component will unmount


    return () => {
      sidebarPanel && sidebarPanel.removeAttribute('data-premium-tab');
    };
  }, []);
  useEffect(() => {
    sidebarPanel && sidebarPanel.setAttribute('data-premium-tab', defaultTab);
  }, [defaultTab]);

  const _onTabChange = tab => {
    setCurrentTab(tab);
    sidebarPanel && sidebarPanel.setAttribute('data-premium-tab', tab);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'premium-inspector-tabs-container'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: tabContainer,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('premium-inspector-tabs', 'premium-inspector-tabs-count-' + tabs.length, currentTab)
  }, tabs.indexOf(LAYOUT) > -1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: __('Layout', 'premium-blocks-for-gutenberg')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'premium-active': currentTab === LAYOUT
    }),
    onClick: () => _onTabChange(LAYOUT)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "23.98",
    height: "23.99",
    viewBox: "0 0 23.98 23.99"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "layout-tab"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M23.84,2.9a4,4,0,0,0-1-1.74,4,4,0,0,0-1.75-1,3.85,3.85,0,0,0-2,0,31.93,31.93,0,0,0-9,4v8.48l6.29-6.3a1.19,1.19,0,0,1,.33-.22,1,1,0,0,1,.77,0,1,1,0,0,1,.55.55,1,1,0,0,1,0,.77,1.19,1.19,0,0,1-.22.33L14.41,11H21.6a30.63,30.63,0,0,0,2.28-6.07A4,4,0,0,0,23.84,2.9Z",
    transform: "translate(-0.01 0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M20.53,13a28.68,28.68,0,0,1-4,5.46,8.24,8.24,0,0,1-2.69,1.87,8.07,8.07,0,0,1-3.21.67A7.43,7.43,0,0,1,6,19.42L12.43,13h8.1Z",
    transform: "translate(-0.01 0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M5.82,19.31l.17.11L1.71,23.71A1,1,0,0,1,1,24a1,1,0,0,1-.69-.3A1,1,0,0,1,0,23a1,1,0,0,1,.28-.71L4.58,18A8,8,0,0,0,5.82,19.31Z",
    transform: "translate(-0.01 0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M4.58,18A7.72,7.72,0,0,1,5.26,7.87,25.63,25.63,0,0,1,8,5.51v9a.35.35,0,0,0,0,.06Z",
    transform: "translate(-0.01 0)"
  }))), "                                    ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, __('Layout', 'premium-blocks-for-gutenberg')))), tabs.indexOf(STYLE) > -1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: __('Style', 'premium-blocks-for-gutenberg')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'premium-active': currentTab === STYLE
    }),
    onClick: () => _onTabChange(STYLE)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "style-tab"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Style"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M2.89,6.84a.93.93,0,0,0,.46-.12,1,1,0,0,0,.37-.32,10,10,0,0,1,2.8-2.77,1,1,0,0,0,.28-.27A.82.82,0,0,0,7,3a1,1,0,0,0,0-.39,1.2,1.2,0,0,0-.15-.37A1,1,0,0,0,6.54,2a1,1,0,0,0-.36-.16,1.27,1.27,0,0,0-.39,0A1.2,1.2,0,0,0,5.42,2,11.94,11.94,0,0,0,2.06,5.28a1,1,0,0,0-.17.5A1,1,0,0,0,2,6.3a1.07,1.07,0,0,0,.37.39A1,1,0,0,0,2.89,6.84Z",
    transform: "translate(0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M2,12a10,10,0,0,1,.19-2,1,1,0,0,0,0-.39,1.2,1.2,0,0,0-.15-.37A1.07,1.07,0,0,0,1.77,9a1.14,1.14,0,0,0-.36-.15.86.86,0,0,0-.39,0A1.2,1.2,0,0,0,.65,9a1,1,0,0,0-.27.28,1.2,1.2,0,0,0-.15.37,12.14,12.14,0,0,0,0,4.73,1,1,0,0,0,.35.57,1,1,0,0,0,.63.23l.2,0a1,1,0,0,0,.64-.43A1,1,0,0,0,2.2,14,10.05,10.05,0,0,1,2,12Z",
    transform: "translate(0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M6.53,20.37a9.85,9.85,0,0,1-2.81-2.76,1.07,1.07,0,0,0-.28-.28.93.93,0,0,0-.36-.14,1,1,0,0,0-1,1.54A11.94,11.94,0,0,0,5.43,22a1,1,0,0,0,.75.15,1.06,1.06,0,0,0,.64-.43A1,1,0,0,0,7,21a1,1,0,0,0-.43-.64Z",
    transform: "translate(0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "cls-1",
    d: "M12,0A12.17,12.17,0,0,0,9.83.2a1,1,0,0,0-.62.38,1,1,0,0,0-.2.69,1,1,0,0,0,.32.65,1,1,0,0,0,.68.26h.18A10,10,0,0,1,12,2V22a10,10,0,0,1-1.81-.16,1,1,0,0,0-1.17.8,1.05,1.05,0,0,0,.17.75,1,1,0,0,0,.64.41A12.05,12.05,0,0,0,15,23.61a12.23,12.23,0,0,0,4.64-2.39A12,12,0,0,0,12,0Z",
    transform: "translate(0)"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, __('Style', 'premium-blocks-for-gutenberg')))), tabs.indexOf(ADVANCE) > -1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: __('Advanced', 'premium-blocks-for-gutenberg')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'premium-active': currentTab === ADVANCE
    }),
    onClick: () => _onTabChange(ADVANCE)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.59",
    height: "24",
    viewBox: "0 0 21.59 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "advanced-tab"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Advanced",
    class: "cls-1",
    d: "M1.61,18A3,3,0,0,0,5.7,19.1h0l.44-.26A9,9,0,0,0,9,20.49V21a3,3,0,0,0,6,0v-.51a9,9,0,0,0,2.85-1.65l.45.26a3,3,0,0,0,3-5.2l-.45-.26a9.1,9.1,0,0,0,0-3.29l.45-.25a3,3,0,0,0-3-5.2l-.45.25A9.21,9.21,0,0,0,15,3.51V3A3,3,0,0,0,9,3v.51A9,9,0,0,0,6.15,5.16L5.71,4.9a3,3,0,1,0-3,5.2l.44.26a9.1,9.1,0,0,0,0,3.29l-.44.25A3,3,0,0,0,1.61,18ZM12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8Z",
    transform: "translate(-1.2)"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, __('Advanced', 'premium-blocks-for-gutenberg')))))), Array.isArray(children) && Children.map(children, (child, index) => {
    if (!child.key) {
      throw new Error('props.key not found in <InspectorTab />, you must use `key` prop');
      return;
    }

    return cloneElement(child, {
      index,
      isActive: child.key === currentTab
    });
  }));
};

InspectorTabs.defaultProps = {
  defaultTab: null,
  tabs: ['layout', 'style', 'advance']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectorTabs);

/***/ }),

/***/ "./src/components/premium-background.js":
/*!**********************************************!*\
  !*** ./src/components/premium-background.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumBackground)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");

const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  SelectControl,
  ToggleControl,
  Tooltip,
  Dashicon
} = wp.components;
const {
  MediaUpload
} = wp.blockEditor;

function PremiumBackground(props) {
  const {
    type,
    colorValue,
    imageID,
    imageURL,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    fixed,
    onChangeColor = () => {},
    onSelectMedia = () => {},
    onRemoveImage = () => {},
    onChangeBackPos = () => {},
    onchangeBackRepeat = () => {},
    onChangeBackSize = () => {},
    onChangeFixed = () => {}
  } = props;
  const POSITION = [{
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
  const REPEAT = [{
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
  const SIZE = [{
    value: "auto",
    label: __("Auto")
  }, {
    value: "cover",
    label: __("Cover")
  }, {
    value: "contain",
    label: __("Contain")
  }];
  return type === "color" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("Background Color", ''),
    colorValue: colorValue,
    colorDefault: '',
    onColorChange: onChangeColor
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    allowedTypes: ["image"],
    onSelect: onSelectMedia,
    type: "image",
    value: imageID,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, imageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "premium-image-media"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: imageURL,
        className: "premium-image-upload"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "premium-image-actions"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
        text: __("Edit")
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "premium-image-button",
        "aria-label": __("Edit"),
        onClick: open,
        role: "button"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "dashicons dashicons-edit"
      }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
        text: __("Remove")
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "premium-image-button",
        "aria-label": __("Remove"),
        onClick: onRemoveImage,
        role: "button"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "dashicons dashicons-trash"
      }))))), !imageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: open,
        className: "premium-placeholder-image"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
        icon: "insert"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "premium-placeholder-image-insert"
      }, __("Insert Background "))));
    }
  }), imageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __("Position"),
    options: POSITION,
    value: backgroundPosition,
    onChange: onChangeBackPos
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __("Repeat"),
    options: REPEAT,
    value: backgroundRepeat,
    onChange: onchangeBackRepeat
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __("Size"),
    options: SIZE,
    value: backgroundSize,
    onChange: onChangeBackSize
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __("Fixed Background"),
    checked: fixed,
    onChange: onChangeFixed
  })));
}

/***/ }),

/***/ "./src/components/premium-border.js":
/*!******************************************!*\
  !*** ./src/components/premium-border.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");
/* harmony import */ var _premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-responsive-spacing */ "./src/components/premium-responsive-spacing.js");

const {
  __
} = wp.i18n;
const {
  Tooltip
} = wp.components;


const {
  Fragment,
  useState,
  useEffect
} = wp.element;

const PremiumBorder = props => {
  let value = props.value;
  let directions = {
    'top': '',
    'right': '',
    'bottom': '',
    'left': ''
  };
  let defaultValues = {
    'borderType': 'none',
    'borderColor': '',
    'borderWidth': {
      Desktop: directions,
      Tablet: directions,
      Mobile: directions
    },
    'borderRadius': {
      Desktop: directions,
      Tablet: directions,
      Mobile: directions
    }
  };
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [borderValue, setBorderValue] = useState(value);
  const {
    onChange
  } = props;
  const {
    borderColor,
    borderType,
    borderWidth,
    borderRadius
  } = borderValue;
  useEffect(() => {
    if (borderValue !== value) {
      setBorderValue(value);
    }
  }, [props]);

  const onChangeBorder = (item, value) => {
    const inialState = { ...borderValue
    };
    inialState[item] = value;
    onChange(inialState);
    setBorderValue(inialState);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-blocks-border__control ",
    style: {
      display: "flex"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-blocks-border__header"
  }, props.label ? props.label : __('Border', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-blocks-border-button-list "
  }, [['solid', __('Solid', "premium-blocks-for-gutenberg")], ['dotted', __('Dotted', "premium-blocks-for-gutenberg")], ['dashed', __('Dashed', "premium-blocks-for-gutenberg")], ['double', __('Double', "premium-blocks-for-gutenberg")]].map((data, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: data[1]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: (borderType == data[0] ? 'active' : '') + ' premium-border-button is-tertiary"',
      key: index,
      onClick: () => onChangeBorder("borderType", data[0])
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-blocks-border-type premium-blocks-border-type-${data[0]}`
    })));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-reset-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "premium-reset-btn ",
    disabled: "none" === borderType,
    onClick: () => onChangeBorder("borderType", 'none')
  }))), "none" != borderType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Border Width "),
    value: borderWidth,
    responsive: true,
    showUnits: false,
    onChange: value => onChangeBorder('borderWidth', { ...value
    })
  }), "none" != borderType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("Border Color", 'premium-blocks-for-gutenberg'),
    colorValue: borderColor,
    colorDefault: '',
    onColorChange: value => onChangeBorder('borderColor', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Border Radius"),
    value: borderRadius,
    responsive: true,
    showUnits: false,
    onChange: value => onChangeBorder('borderRadius', { ...value
    })
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PremiumBorder);

/***/ }),

/***/ "./src/components/premium-filters.js":
/*!*******************************************!*\
  !*** ./src/components/premium-filters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumFilters)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "./src/components/RangeControl/single-range-control.js");

const {
  __
} = wp.i18n;
const {
  Fragment,
  useState
} = wp.element;
const {
  Dropdown,
  Button
} = wp.components;

function PremiumFilters(_ref) {
  let {
    label,
    value,
    onChange
  } = _ref;
  let defaultValues = {
    'contrast': '100',
    'blur': '0',
    'bright': '100',
    'saturation': '100',
    'hue': '0'
  };
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);

  const onChangeFilter = (item, value) => {
    const updatedState = { ...state
    };
    updatedState[item] = value;
    setState(updatedState);
    onChange(updatedState);
  };

  const {
    contrast,
    blur,
    bright,
    saturation,
    hue
  } = state;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-filter__container premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __(label || "CSS Filters")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dropdown, {
    className: "premium-control-toggle-btn",
    contentClassName: "premium-control-toggle-content",
    position: "bottom right",
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "dashicons dashicons-edit"
      }));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Blur"),
      value: blur,
      onChange: value => onChangeFilter('blur', value),
      showUnit: false,
      defaultValue: 0
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Brightness"),
      min: "0",
      max: "200",
      value: bright,
      onChange: value => onChangeFilter('bright', value),
      showUnit: false,
      defaultValue: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Contrast"),
      min: "0",
      max: "200",
      value: contrast,
      onChange: value => onChangeFilter('contrast', value),
      showUnit: false,
      defaultValue: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Saturation"),
      min: "0",
      max: "200",
      value: saturation,
      onChange: value => onChangeFilter('saturation', value),
      showUnit: false,
      defaultValue: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Hue"),
      min: "0",
      max: "360",
      value: hue,
      onChange: value => onChangeFilter('hue', value),
      showUnit: false,
      defaultValue: 0
    }))
  }));
}

/***/ }),

/***/ "./src/components/premium-fonts.js":
/*!*****************************************!*\
  !*** ./src/components/premium-fonts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Google Fonts for the FontFamily component.
 */
const fonts = {};
fonts["ABeeZee"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Abel"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Abhaya Libre"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "sinhala", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Abril Fatface"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aclonica"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Acme"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Actor"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Adamina"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Advent Pro"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "greek", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Aguafina Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Akronim"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aladin"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aldrich"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alef"] = {
  "v": ["regular", "700"],
  "subset": ["hebrew", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Alegreya"] = {
  "v": ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alegreya SC"] = {
  "v": ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alegreya Sans"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alegreya Sans SC"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Alex Brush"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alfa Slab One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alice"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alike"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Alike Angular"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Allan"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Allerta"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Allerta Stencil"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Allura"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Almendra"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Almendra Display"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Almendra SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Amarante"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Amaranth"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Amatic SC"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "latin-ext", "hebrew", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Amethysta"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Amiko"] = {
  "v": ["regular", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "600", "700"],
  "i": ["normal"]
};
fonts["Amiri"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Amita"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Anaheim"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Andada"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Andika"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Angkor"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Annie Use Your Telescope"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Anonymous Pro"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Antic"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Antic Didone"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Antic Slab"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Anton"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arapey"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Arbutus"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arbutus Slab"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Architects Daughter"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Archivo"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Archivo Black"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Archivo Narrow"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Aref Ruqaa"] = {
  "v": ["regular", "700"],
  "subset": ["arabic", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Arima Madurai"] = {
  "v": ["100", "200", "300", "regular", "500", "700", "800", "900"],
  "subset": ["latin-ext", "tamil", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Arimo"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Arizonia"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Armata"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arsenal"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Artifika"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Arvo"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Arya"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Asap"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Asap Condensed"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Asar"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Asset"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Assistant"] = {
  "v": ["200", "300", "regular", "600", "700", "800"],
  "subset": ["hebrew", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Astloch"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Asul"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Athiti"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Atma"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "bengali", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Atomic Age"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Aubrey"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Audiowide"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Autour One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Average"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Average Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Averia Gruesa Libre"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Averia Libre"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Averia Sans Libre"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Averia Serif Libre"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Bad Script"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bahiana"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Bhai"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Bhaijaan"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Bhaina"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "oriya", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Chettan"] = {
  "v": ["regular"],
  "subset": ["malayalam", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Da"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "bengali", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Paaji"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gurmukhi", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Tamma"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin", "kannada"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Tammudu"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "telugu", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Baloo Thambi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Balthazar"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bangers"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Barlow"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Barlow Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Barlow Semi Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Barrio"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Basic"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Battambang"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Baumans"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bayon"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Belgrano"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bellefair"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Belleza"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["BenchNine"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Bentham"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Berkshire Swash"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bevan"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bigelow Rules"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bigshot One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bilbo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bilbo Swash Caps"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["BioRhyme"] = {
  "v": ["200", "300", "regular", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "700", "800"],
  "i": ["normal"]
};
fonts["BioRhyme Expanded"] = {
  "v": ["200", "300", "regular", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "700", "800"],
  "i": ["normal"]
};
fonts["Biryani"] = {
  "v": ["200", "300", "regular", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Bitter"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Black And White Picture"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Black Han Sans"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Black Ops One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bokor"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bonbon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Boogaloo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bowlby One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bowlby One SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Brawler"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bree Serif"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bubblegum Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bubbler One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Buda"] = {
  "v": ["300"],
  "subset": ["latin"],
  "weight": ["300"],
  "i": []
};
fonts["Buenard"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Bungee"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Hairline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Inline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Outline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Bungee Shade"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Butcherman"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Butterfly Kids"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cabin"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cabin Condensed"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Cabin Sketch"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Caesar Dressing"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cagliostro"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cairo"] = {
  "v": ["200", "300", "regular", "600", "700", "900"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["200", "300", "400", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Calligraffitti"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cambay"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Cambo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Candal"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cantarell"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Cantata One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cantora One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Capriola"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cardo"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Carme"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Carrois Gothic"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Carrois Gothic SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Carter One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Catamaran"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Caudex"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Caveat"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Caveat Brush"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cedarville Cursive"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ceviche One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Changa"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Changa One"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Chango"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chathura"] = {
  "v": ["100", "300", "regular", "700", "800"],
  "subset": ["telugu", "latin"],
  "weight": ["100", "300", "400", "700", "800"],
  "i": ["normal"]
};
fonts["Chau Philomene One"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Chela One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chelsea Market"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chenla"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cherry Cream Soda"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cherry Swash"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Chewy"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chicle"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Chivo"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Chonburi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cinzel"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Cinzel Decorative"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Clicker Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Coda"] = {
  "v": ["regular", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "800"],
  "i": ["normal"]
};
fonts["Coda Caption"] = {
  "v": ["800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["800"],
  "i": []
};
fonts["Codystar"] = {
  "v": ["300", "regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400"],
  "i": ["normal"]
};
fonts["Coiny"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Combo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Comfortaa"] = {
  "v": ["300", "regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Coming Soon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Concert One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Condiment"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Content"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Contrail One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Convergence"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cookie"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Copse"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Corben"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Cormorant"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cormorant Garamond"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cormorant Infant"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Cormorant SC"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Cormorant Unicase"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Cormorant Upright"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Courgette"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cousine"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Coustard"] = {
  "v": ["regular", "900"],
  "subset": ["latin"],
  "weight": ["400", "900"],
  "i": ["normal"]
};
fonts["Covered By Your Grace"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Crafty Girls"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Creepster"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Crete Round"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Crimson Text"] = {
  "v": ["regular", "italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Croissant One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Crushed"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cuprum"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Cute Font"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cutive"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Cutive Mono"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Damion"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dancing Script"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Dangrek"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["David Libre"] = {
  "v": ["regular", "500", "700"],
  "subset": ["latin-ext", "hebrew", "vietnamese", "latin"],
  "weight": ["400", "500", "700"],
  "i": ["normal"]
};
fonts["Dawning of a New Day"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Days One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dekko"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Delius"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Delius Swash Caps"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Delius Unicase"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Della Respira"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Denk One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Devonshire"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dhurjati"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Didact Gothic"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Diplomata"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Diplomata SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Do Hyeon"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dokdo"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Domine"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Donegal One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Doppio One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dorsa"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dosis"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Dr Sugiyama"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Duru Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Dynalight"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["EB Garamond"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Eagle Lake"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["East Sea Dokdo"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Eater"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Economica"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Eczar"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["El Messiri"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["cyrillic", "arabic", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Electrolize"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Elsie"] = {
  "v": ["regular", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "900"],
  "i": ["normal"]
};
fonts["Elsie Swash Caps"] = {
  "v": ["regular", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "900"],
  "i": ["normal"]
};
fonts["Emblema One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Emilys Candy"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Encode Sans"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Expanded"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Semi Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Encode Sans Semi Expanded"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Engagement"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Englebert"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Enriqueta"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Erica One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Esteban"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Euphoria Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ewert"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Exo"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Exo 2"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Expletus Sans"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Fanwood Text"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Farsan"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fascinate"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fascinate Inline"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Faster One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fasthand"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fauna One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Faustina"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Federant"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Federo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Felipa"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fenix"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Finger Paint"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fira Mono"] = {
  "v": ["regular", "500", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "500", "700"],
  "i": ["normal"]
};
fonts["Fira Sans"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Fira Sans Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Fira Sans Extra Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Fjalla One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fjord One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Flamenco"] = {
  "v": ["300", "regular"],
  "subset": ["latin"],
  "weight": ["300", "400"],
  "i": ["normal"]
};
fonts["Flavors"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fondamento"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Fontdiner Swanky"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Forum"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Francois One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Frank Ruhl Libre"] = {
  "v": ["300", "regular", "500", "700", "900"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Freckle Face"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fredericka the Great"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fredoka One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Freehand"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fresca"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Frijole"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fruktur"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Fugaz One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["GFS Didot"] = {
  "v": ["regular"],
  "subset": ["greek"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["GFS Neohellenic"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["greek"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Gabriela"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gaegu"] = {
  "v": ["300", "regular", "700"],
  "subset": ["korean", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Gafata"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Galada"] = {
  "v": ["regular"],
  "subset": ["bengali", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Galdeano"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Galindo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gamja Flower"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gentium Basic"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Gentium Book Basic"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Geo"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Geostar"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Geostar Fill"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Germania One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gidugu"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gilda Display"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Give You Glory"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Glass Antiqua"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Glegoo"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Gloria Hallelujah"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Goblin One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gochi Hand"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gorditas"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Gothic A1"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["korean", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Goudy Bookletter 1911"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Graduate"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Grand Hotel"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gravitas One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Great Vibes"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Griffy"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gruppo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gudea"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Gugi"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Gurajada"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Habibi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Halant"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hammersmith One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hanalei"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hanalei Fill"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Handlee"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hanuman"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Happy Monkey"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Harmattan"] = {
  "v": ["regular"],
  "subset": ["arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Headland One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Heebo"] = {
  "v": ["100", "300", "regular", "500", "700", "800", "900"],
  "subset": ["hebrew", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Henny Penny"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Herr Von Muellerhoff"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hi Melody"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Hind"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Guntur"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "telugu", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Madurai"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Siliguri"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "bengali", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Hind Vadodara"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Holtwood One SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Homemade Apple"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Homenaje"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IBM Plex Mono"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IBM Plex Sans"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IBM Plex Sans Condensed"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IBM Plex Serif"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["IM Fell DW Pica"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell DW Pica SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell Double Pica"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell Double Pica SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell English"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell English SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell French Canon"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell French Canon SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["IM Fell Great Primer"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["IM Fell Great Primer SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Iceberg"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Iceland"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Imprima"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Inconsolata"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Inder"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Indie Flower"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Inika"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Inknut Antiqua"] = {
  "v": ["300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Irish Grover"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Istok Web"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Italiana"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Italianno"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Itim"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jacques Francois"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jacques Francois Shadow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jaldi"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Jim Nightshade"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jockey One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jolly Lodger"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jomhuria"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Josefin Sans"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Josefin Slab"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["100", "300", "400", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Joti One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jua"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Judson"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Julee"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Julius Sans One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Junge"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Jura"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Just Another Hand"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Just Me Again Down Here"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kadwa"] = {
  "v": ["regular", "700"],
  "subset": ["devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Kalam"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Kameron"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Kanit"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Kantumruy"] = {
  "v": ["300", "regular", "700"],
  "subset": ["khmer"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Karla"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Karma"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Katibeh"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kaushan Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kavivanar"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kavoon"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kdam Thmor"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Keania One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kelly Slab"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kenia"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Khand"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Khmer"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Khula"] = {
  "v": ["300", "regular", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Kirang Haerang"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kite One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Knewave"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kosugi"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "japanese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kosugi Maru"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "japanese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kotta One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Koulen"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kranky"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kreon"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Kristi"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Krona One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kumar One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kumar One Outline"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Kurale"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["La Belle Aurore"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Laila"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Lakki Reddy"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lalezar"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lancelot"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lateef"] = {
  "v": ["regular"],
  "subset": ["arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lato"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "300", "400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["League Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Leckerli One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ledger"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lekton"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Lemon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lemonada"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Libre Barcode 128"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 128 Text"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39 Extended"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39 Extended Text"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Barcode 39 Text"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Libre Baskerville"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Libre Franklin"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Life Savers"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Lilita One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lily Script One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Limelight"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Linden Hill"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Lobster"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lobster Two"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Londrina Outline"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Londrina Shadow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Londrina Sketch"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Londrina Solid"] = {
  "v": ["100", "300", "regular", "900"],
  "subset": ["latin"],
  "weight": ["100", "300", "400", "900"],
  "i": ["normal"]
};
fonts["Lora"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Love Ya Like A Sister"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Loved by the King"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lovers Quarrel"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Luckiest Guy"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Lusitana"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Lustria"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["M PLUS 1p"] = {
  "v": ["100", "300", "regular", "500", "700", "800", "900"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "japanese", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["M PLUS Rounded 1c"] = {
  "v": ["100", "300", "regular", "500", "700", "800", "900"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "japanese", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Macondo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Macondo Swash Caps"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mada"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["arabic", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Magra"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Maiden Orange"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Maitree"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Mako"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mallanna"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mandali"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Manuale"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Marcellus"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Marcellus SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Marck Script"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Margarine"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Markazi Text"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "arabic", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Marko One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Marmelad"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Martel"] = {
  "v": ["200", "300", "regular", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Martel Sans"] = {
  "v": ["200", "300", "regular", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Marvel"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Mate"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Mate SC"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Maven Pro"] = {
  "v": ["regular", "500", "700", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["McLaren"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Meddon"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["MedievalSharp"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Medula One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Meera Inimai"] = {
  "v": ["regular"],
  "subset": ["tamil", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Megrim"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Meie Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Merienda"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Merienda One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Merriweather"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Merriweather Sans"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic", "800", "800italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Metal"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Metal Mania"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Metamorphous"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Metrophobic"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Michroma"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Milonga"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Miltonian"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Miltonian Tattoo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mina"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "bengali", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Miniver"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Miriam Libre"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Mirza"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Miss Fajardose"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mitr"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Modak"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Modern Antiqua"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mogra"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Molengo"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Molle"] = {
  "v": ["italic"],
  "subset": ["latin-ext", "latin"],
  "weight": [],
  "i": ["italic"]
};
fonts["Monda"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Monofett"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Monoton"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Monsieur La Doulaise"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Montaga"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Montez"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Montserrat"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Montserrat Alternates"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Montserrat Subrayada"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Moul"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Moulpali"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mountains of Christmas"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Mouse Memoirs"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mr Bedfort"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mr Dafoe"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mr De Haviland"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mrs Saint Delafield"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mrs Sheppards"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Mukta"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Mukta Mahee"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "gurmukhi", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Mukta Malar"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Mukta Vaani"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Muli"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Mystery Quest"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["NTR"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nanum Brush Script"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nanum Gothic"] = {
  "v": ["regular", "700", "800"],
  "subset": ["korean", "latin"],
  "weight": ["400", "700", "800"],
  "i": ["normal"]
};
fonts["Nanum Gothic Coding"] = {
  "v": ["regular", "700"],
  "subset": ["korean", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Nanum Myeongjo"] = {
  "v": ["regular", "700", "800"],
  "subset": ["korean", "latin"],
  "weight": ["400", "700", "800"],
  "i": ["normal"]
};
fonts["Nanum Pen Script"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Neucha"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Neuton"] = {
  "v": ["200", "300", "regular", "italic", "700", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["New Rocker"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["News Cycle"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Niconne"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nixie One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nobile"] = {
  "v": ["regular", "italic", "500", "500italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "500", "700"],
  "i": ["normal", "italic"]
};
fonts["Nokora"] = {
  "v": ["regular", "700"],
  "subset": ["khmer"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Norican"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nosifer"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nothing You Could Do"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Noticia Text"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Noto Sans"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "devanagari", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Noto Sans JP"] = {
  "v": ["100", "300", "regular", "500", "700", "900"],
  "subset": ["japanese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Noto Sans KR"] = {
  "v": ["100", "300", "regular", "500", "700", "900"],
  "subset": ["korean", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Noto Serif"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Noto Serif JP"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["japanese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Noto Serif KR"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["korean", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Nova Cut"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Flat"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Mono"] = {
  "v": ["regular"],
  "subset": ["greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Oval"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Round"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Slim"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nova Square"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Numans"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Nunito"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Nunito Sans"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Odor Mean Chey"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Offside"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Old Standard TT"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Oldenburg"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Oleo Script"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Oleo Script Swash Caps"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Open Sans"] = {
  "v": ["300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Open Sans Condensed"] = {
  "v": ["300", "300italic", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "700"],
  "i": []
};
fonts["Oranienbaum"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Orbitron"] = {
  "v": ["regular", "500", "700", "900"],
  "subset": ["latin"],
  "weight": ["400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Oregano"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Orienta"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Original Surfer"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Oswald"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Over the Rainbow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Overlock"] = {
  "v": ["regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Overlock SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Overpass"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Overpass Mono"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Ovo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Oxygen"] = {
  "v": ["300", "regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal"]
};
fonts["Oxygen Mono"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["PT Mono"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["PT Sans"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["PT Sans Caption"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["PT Sans Narrow"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["PT Serif"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["PT Serif Caption"] = {
  "v": ["regular", "italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Pacifico"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Padauk"] = {
  "v": ["regular", "700"],
  "subset": ["myanmar", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Palanquin"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Palanquin Dark"] = {
  "v": ["regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Pangolin"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Paprika"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Parisienne"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Passero One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Passion One"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Pathway Gothic One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Patrick Hand"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Patrick Hand SC"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pattaya"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Patua One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pavanam"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "tamil", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Paytone One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Peddana"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Peralta"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Permanent Marker"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Petit Formal Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Petrona"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Philosopher"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Piedra"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pinyon Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pirata One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Plaster"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Play"] = {
  "v": ["regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Playball"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Playfair Display"] = {
  "v": ["regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Playfair Display SC"] = {
  "v": ["regular", "italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Podkova"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Poiret One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poller One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poly"] = {
  "v": ["regular", "italic"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Pompiere"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pontano Sans"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poor Story"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Poppins"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Port Lligat Sans"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Port Lligat Slab"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pragati Narrow"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Prata"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Preahvihear"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Press Start 2P"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Pridi"] = {
  "v": ["200", "300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Princess Sofia"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Prociono"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Prompt"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Prosto One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Proza Libre"] = {
  "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Puritan"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Purple Purse"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Quando"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Quantico"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Quattrocento"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Quattrocento Sans"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Questrial"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Quicksand"] = {
  "v": ["300", "regular", "500", "700"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["300", "400", "500", "700"],
  "i": ["normal"]
};
fonts["Quintessential"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Qwigley"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Racing Sans One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Radley"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Rajdhani"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Rakkas"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Raleway"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Raleway Dots"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ramabhadra"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ramaraja"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rambla"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Rammetto One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ranchers"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rancho"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ranga"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Rasa"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Rationale"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ravi Prakash"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Redressed"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Reem Kufi"] = {
  "v": ["regular"],
  "subset": ["arabic", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Reenie Beanie"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Revalia"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rhodium Libre"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ribeye"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ribeye Marrow"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Righteous"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Risque"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Roboto"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Roboto Condensed"] = {
  "v": ["300", "300italic", "regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["300", "400", "700"],
  "i": ["normal", "italic"]
};
fonts["Roboto Mono"] = {
  "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "500", "700"],
  "i": ["normal", "italic"]
};
fonts["Roboto Slab"] = {
  "v": ["100", "300", "regular", "700"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["100", "300", "400", "700"],
  "i": ["normal"]
};
fonts["Rochester"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rock Salt"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rokkitt"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Romanesco"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ropa Sans"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Rosario"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Rosarivo"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Rouge Script"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rozha One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rubik"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "latin-ext", "hebrew", "latin"],
  "weight": ["300", "400", "500", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Rubik Mono One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruda"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Rufina"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Ruge Boogie"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruluko"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rum Raisin"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruslan Display"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Russo One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ruthie"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Rye"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sacramento"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sahitya"] = {
  "v": ["regular", "700"],
  "subset": ["devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sail"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Saira"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Saira Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Saira Extra Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Saira Semi Condensed"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Salsa"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sanchez"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Sancreek"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sansita"] = {
  "v": ["regular", "italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Sarala"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sarina"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sarpanch"] = {
  "v": ["regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Satisfy"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sawarabi Gothic"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "japanese", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sawarabi Mincho"] = {
  "v": ["regular"],
  "subset": ["japanese", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Scada"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Scheherazade"] = {
  "v": ["regular", "700"],
  "subset": ["arabic", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Schoolbell"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Scope One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Seaweed Script"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Secular One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sedgwick Ave"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sedgwick Ave Display"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sevillana"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Seymour One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shadows Into Light"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shadows Into Light Two"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shanti"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Share"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Share Tech"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Share Tech Mono"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shojumaru"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Short Stack"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Shrikhand"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "gujarati", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Siemreap"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sigmar One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Signika"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Signika Negative"] = {
  "v": ["300", "regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "600", "700"],
  "i": ["normal"]
};
fonts["Simonetta"] = {
  "v": ["regular", "italic", "900", "900italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "900"],
  "i": ["normal", "italic"]
};
fonts["Sintony"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sirin Stencil"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Six Caps"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Skranji"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Slabo 13px"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Slabo 27px"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Slackey"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Smokum"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Smythe"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sniglet"] = {
  "v": ["regular", "800"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "800"],
  "i": ["normal"]
};
fonts["Snippet"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Snowburst One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sofadi One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sofia"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Song Myung"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sonsie One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sorts Mill Goudy"] = {
  "v": ["regular", "italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal", "italic"]
};
fonts["Source Code Pro"] = {
  "v": ["200", "300", "regular", "500", "600", "700", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Source Sans Pro"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "600", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Source Serif Pro"] = {
  "v": ["regular", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "600", "700"],
  "i": ["normal"]
};
fonts["Space Mono"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Special Elite"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Spectral"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Spectral SC"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "500", "600", "700", "800"],
  "i": ["normal", "italic"]
};
fonts["Spicy Rice"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Spinnaker"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Spirax"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Squada One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sree Krushnadevaraya"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sriracha"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stalemate"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stalinist One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stardos Stencil"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Stint Ultra Condensed"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stint Ultra Expanded"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stoke"] = {
  "v": ["300", "regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400"],
  "i": ["normal"]
};
fonts["Strait"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Stylish"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sue Ellen Francisco"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Suez One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sumana"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Sunflower"] = {
  "v": ["300", "500", "700"],
  "subset": ["korean", "latin"],
  "weight": ["300", "500", "700"],
  "i": []
};
fonts["Sunshiney"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Supermercado One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Sura"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Suranna"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Suravaram"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Suwannaphum"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Swanky and Moo Moo"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Syncopate"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Tajawal"] = {
  "v": ["200", "300", "regular", "500", "700", "800", "900"],
  "subset": ["arabic", "latin"],
  "weight": ["200", "300", "400", "500", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Tangerine"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Taprom"] = {
  "v": ["regular"],
  "subset": ["khmer"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tauri"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Taviraj"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Teko"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Telex"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tenali Ramakrishna"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tenor Sans"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Text Me One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["The Girl Next Door"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tienne"] = {
  "v": ["regular", "700", "900"],
  "subset": ["latin"],
  "weight": ["400", "700", "900"],
  "i": ["normal"]
};
fonts["Tillana"] = {
  "v": ["regular", "500", "600", "700", "800"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "600", "700", "800"],
  "i": ["normal"]
};
fonts["Timmana"] = {
  "v": ["regular"],
  "subset": ["telugu", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tinos"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Titan One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Titillium Web"] = {
  "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["200", "300", "400", "600", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Trade Winds"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Trirong"] = {
  "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
  "subset": ["latin-ext", "thai", "vietnamese", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal", "italic"]
};
fonts["Trocchi"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Trochut"] = {
  "v": ["regular", "italic", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Trykker"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Tulpen One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ubuntu"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["300", "400", "500", "700"],
  "i": ["normal", "italic"]
};
fonts["Ubuntu Condensed"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Ubuntu Mono"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Ultra"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Uncial Antiqua"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Underdog"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Unica One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["UnifrakturCook"] = {
  "v": ["700"],
  "subset": ["latin"],
  "weight": ["700"],
  "i": []
};
fonts["UnifrakturMaguntia"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Unkempt"] = {
  "v": ["regular", "700"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
fonts["Unlock"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Unna"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["VT323"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vampiro One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Varela"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Varela Round"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "hebrew", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vast Shadow"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vesper Libre"] = {
  "v": ["regular", "500", "700", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Vibur"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Vidaloka"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Viga"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Voces"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Volkhov"] = {
  "v": ["regular", "italic", "700", "700italic"],
  "subset": ["latin"],
  "weight": ["400", "700"],
  "i": ["normal", "italic"]
};
fonts["Vollkorn"] = {
  "v": ["regular", "italic", "600", "600italic", "700", "700italic", "900", "900italic"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
  "weight": ["400", "600", "700", "900"],
  "i": ["normal", "italic"]
};
fonts["Vollkorn SC"] = {
  "v": ["regular", "600", "700", "900"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400", "600", "700", "900"],
  "i": ["normal"]
};
fonts["Voltaire"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Waiting for the Sunrise"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wallpoet"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Walter Turncoat"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Warnes"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wellfleet"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wendy One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Wire One"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Work Sans"] = {
  "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
  "subset": ["latin-ext", "latin"],
  "weight": ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  "i": ["normal"]
};
fonts["Yanone Kaffeesatz"] = {
  "v": ["200", "300", "regular", "700"],
  "subset": ["cyrillic", "latin-ext", "vietnamese", "latin"],
  "weight": ["200", "300", "400", "700"],
  "i": ["normal"]
};
fonts["Yantramanav"] = {
  "v": ["100", "300", "regular", "500", "700", "900"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["100", "300", "400", "500", "700", "900"],
  "i": ["normal"]
};
fonts["Yatra One"] = {
  "v": ["regular"],
  "subset": ["latin-ext", "devanagari", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yellowtail"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yeon Sung"] = {
  "v": ["regular"],
  "subset": ["korean", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yeseva One"] = {
  "v": ["regular"],
  "subset": ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yesteryear"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Yrsa"] = {
  "v": ["300", "regular", "500", "600", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal"]
};
fonts["Zeyada"] = {
  "v": ["regular"],
  "subset": ["latin"],
  "weight": ["400"],
  "i": ["normal"]
};
fonts["Zilla Slab"] = {
  "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
  "subset": ["latin-ext", "latin"],
  "weight": ["300", "400", "500", "600", "700"],
  "i": ["normal", "italic"]
};
fonts["Zilla Slab Highlight"] = {
  "v": ["regular", "700"],
  "subset": ["latin-ext", "latin"],
  "weight": ["400", "700"],
  "i": ["normal"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fonts);

/***/ }),

/***/ "./src/components/premium-icons-list.js":
/*!**********************************************!*\
  !*** ./src/components/premium-icons-list.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const iconsList = {
  Dashicons: ["", "dashicons dashicons-menu", "dashicons dashicons-admin-site", "dashicons dashicons-dashboard", "dashicons dashicons-admin-post", "dashicons dashicons-admin-media", "dashicons dashicons-admin-links", "dashicons dashicons-admin-page", "dashicons dashicons-admin-comments", "dashicons dashicons-admin-appearance", "dashicons dashicons-admin-plugins", "dashicons dashicons-admin-users", "dashicons dashicons-admin-tools", "dashicons dashicons-admin-settings", "dashicons dashicons-admin-network", "dashicons dashicons-admin-home", "dashicons dashicons-admin-generic", "dashicons dashicons-admin-collapse", "dashicons dashicons-filter", "dashicons dashicons-admin-customizer", "dashicons dashicons-admin-multisite", "dashicons dashicons-welcome-write-blog", "dashicons dashicons-welcome-add-page", "dashicons dashicons-welcome-view-site", "dashicons dashicons-welcome-widgets-menus", "dashicons dashicons-welcome-comments", "dashicons dashicons-welcome-learn-more", "dashicons dashicons-format-aside", "dashicons dashicons-format-image", "dashicons dashicons-format-gallery", "dashicons dashicons-format-video", "dashicons dashicons-format-status", "dashicons dashicons-format-quote", "dashicons dashicons-format-chat", "dashicons dashicons-format-audio", "dashicons dashicons-camera", "dashicons dashicons-images-alt", "dashicons dashicons-images-alt2", "dashicons dashicons-video-alt", "dashicons dashicons-video-alt2", "dashicons dashicons-video-alt3", "dashicons dashicons-media-archive", "dashicons dashicons-media-audio", "dashicons dashicons-media-code", "dashicons dashicons-media-default", "dashicons dashicons-media-document", "dashicons dashicons-media-interactive", "dashicons dashicons-media-spreadsheet", "dashicons dashicons-media-text", "dashicons dashicons-media-video", "dashicons dashicons-playlist-audio", "dashicons dashicons-playlist-video", "dashicons dashicons-controls-play", "dashicons dashicons-controls-pause", "dashicons dashicons-controls-forward", "dashicons dashicons-controls-skipforward", "dashicons dashicons-controls-back", "dashicons dashicons-controls-skipback", "dashicons dashicons-controls-repeat", "dashicons dashicons-controls-volumeon", "dashicons dashicons-controls-volumeoff", "dashicons dashicons-image-crop", "dashicons dashicons-image-rotate", "dashicons dashicons-image-rotate-left", "dashicons dashicons-image-rotate-right", "dashicons dashicons-image-flip-vertical", "dashicons dashicons-image-flip-horizontal", "dashicons dashicons-image-filter", "dashicons dashicons-undo", "dashicons dashicons-redo", "dashicons dashicons-editor-bold", "dashicons dashicons-editor-italic", "dashicons dashicons-editor-ul", "dashicons dashicons-editor-ol", "dashicons dashicons-editor-quote", "dashicons dashicons-editor-alignleft", "dashicons dashicons-editor-aligncenter", "dashicons dashicons-editor-alignright", "dashicons dashicons-editor-insertmore", "dashicons dashicons-editor-spellcheck", "dashicons dashicons-editor-expand", "dashicons dashicons-editor-contract", "dashicons dashicons-editor-kitchensink", "dashicons dashicons-editor-underline", "dashicons dashicons-editor-justify", "dashicons dashicons-editor-textcolor", "dashicons dashicons-editor-paste-word", "dashicons dashicons-editor-paste-text", "dashicons dashicons-editor-removeformatting", "dashicons dashicons-editor-video", "dashicons dashicons-editor-customchar", "dashicons dashicons-editor-outdent", "dashicons dashicons-editor-indent", "dashicons dashicons-editor-help", "dashicons dashicons-editor-strikethrough", "dashicons dashicons-editor-unlink", "dashicons dashicons-editor-rtl", "dashicons dashicons-editor-break", "dashicons dashicons-editor-code", "dashicons dashicons-editor-paragraph", "dashicons dashicons-editor-table", "dashicons dashicons-align-left", "dashicons dashicons-align-right", "dashicons dashicons-align-center", "dashicons dashicons-align-none", "dashicons dashicons-lock", "dashicons dashicons-unlock", "dashicons dashicons-calendar", "dashicons dashicons-calendar-alt", "dashicons dashicons-visibility", "dashicons dashicons-hidden", "dashicons dashicons-post-status", "dashicons dashicons-edit", "dashicons dashicons-trash", "dashicons dashicons-sticky", "dashicons dashicons-external", "dashicons dashicons-arrow-up", "dashicons dashicons-arrow-down", "dashicons dashicons-arrow-right", "dashicons dashicons-arrow-left", "dashicons dashicons-arrow-up-alt", "dashicons dashicons-arrow-down-alt", "dashicons dashicons-arrow-right-alt", "dashicons dashicons-arrow-left-alt", "dashicons dashicons-arrow-up-alt2", "dashicons dashicons-arrow-down-alt2", "dashicons dashicons-arrow-right-alt2", "dashicons dashicons-arrow-left-alt2", "dashicons dashicons-sort", "dashicons dashicons-leftright", "dashicons dashicons-randomize", "dashicons dashicons-list-view", "dashicons dashicons-exerpt-view", "dashicons dashicons-grid-view", "dashicons dashicons-move", "dashicons dashicons-share", "dashicons dashicons-share-alt", "dashicons dashicons-share-alt2", "dashicons dashicons-twitter", "dashicons dashicons-rss", "dashicons dashicons-email", "dashicons dashicons-email-alt", "dashicons dashicons-facebook", "dashicons dashicons-facebook-alt", "dashicons dashicons-googleplus", "dashicons dashicons-networking", "dashicons dashicons-hammer", "dashicons dashicons-art", "dashicons dashicons-migrate", "dashicons dashicons-performance", "dashicons dashicons-universal-access", "dashicons dashicons-universal-access-alt", "dashicons dashicons-tickets", "dashicons dashicons-nametag", "dashicons dashicons-clipboard", "dashicons dashicons-heart", "dashicons dashicons-megaphone", "dashicons dashicons-schedule", "dashicons dashicons-wordpress", "dashicons dashicons-wordpress-alt", "dashicons dashicons-pressthis", "dashicons dashicons-update", "dashicons dashicons-screenoptions", "dashicons dashicons-info", "dashicons dashicons-cart", "dashicons dashicons-feedback", "dashicons dashicons-cloud", "dashicons dashicons-translation", "dashicons dashicons-tag", "dashicons dashicons-category", "dashicons dashicons-archive", "dashicons dashicons-tagcloud", "dashicons dashicons-text", "dashicons dashicons-yes", "dashicons dashicons-no", "dashicons dashicons-no-alt", "dashicons dashicons-plus", "dashicons dashicons-plus-alt", "dashicons dashicons-minus", "dashicons dashicons-dismiss", "dashicons dashicons-marker", "dashicons dashicons-star-filled", "dashicons dashicons-star-half", "dashicons dashicons-star-empty", "dashicons dashicons-flag", "dashicons dashicons-warning", "dashicons dashicons-location", "dashicons dashicons-location-alt", "dashicons dashicons-vault", "dashicons dashicons-shield", "dashicons dashicons-shield-alt", "dashicons dashicons-sos", "dashicons dashicons-search", "dashicons dashicons-slides", "dashicons dashicons-analytics", "dashicons dashicons-chart-pie", "dashicons dashicons-chart-bar", "dashicons dashicons-chart-line", "dashicons dashicons-chart-area", "dashicons dashicons-groups", "dashicons dashicons-businessman", "dashicons dashicons-id", "dashicons dashicons-id-alt", "dashicons dashicons-products", "dashicons dashicons-awards", "dashicons dashicons-forms", "dashicons dashicons-testimonial", "dashicons dashicons-portfolio", "dashicons dashicons-book", "dashicons dashicons-book-alt", "dashicons dashicons-download", "dashicons dashicons-upload", "dashicons dashicons-backup", "dashicons dashicons-clock", "dashicons dashicons-lightbulb", "dashicons dashicons-microphone", "dashicons dashicons-desktop", "dashicons dashicons-laptop", "dashicons dashicons-tablet", "dashicons dashicons-smartphone", "dashicons dashicons-phone", "dashicons dashicons-index-card", "dashicons dashicons-carrot", "dashicons dashicons-building", "dashicons dashicons-store", "dashicons dashicons-album", "dashicons dashicons-palmtree", "dashicons dashicons-tickets-alt", "dashicons dashicons-money", "dashicons dashicons-smiley", "dashicons dashicons-thumbs-up", "dashicons dashicons-thumbs-down", "dashicons dashicons-layout", "dashicons dashicons-paperclip"],
  "Font Awesome Icons": ["fa fa-glass", "fa fa-music", "fa fa-search", "fa fa-envelope-o", "fa fa-heart", "fa fa-star", "fa fa-star-o", "fa fa-user", "fa fa-film", "fa fa-th-large", "fa fa-th", "fa fa-th-list", "fa fa-check", "fa fa-times", "fa fa-search-plus", "fa fa-search-minus", "fa fa-power-off", "fa fa-signal", "fa fa-cog", "fa fa-trash-o", "fa fa-home", "fa fa-file-o", "fa fa-clock-o", "fa fa-road", "fa fa-download", "fa fa-arrow-circle-o-down", "fa fa-arrow-circle-o-up", "fa fa-inbox", "fa fa-play-circle-o", "fa fa-repeat", "fa fa-refresh", "fa fa-list-alt", "fa fa-lock", "fa fa-flag", "fa fa-headphones", "fa fa-volume-off", "fa fa-volume-down", "fa fa-volume-up", "fa fa-qrcode", "fa fa-barcode", "fa fa-tag", "fa fa-tags", "fa fa-book", "fa fa-bookmark", "fa fa-print", "fa fa-camera", "fa fa-font", "fa fa-bold", "fa fa-italic", "fa fa-text-height", "fa fa-text-width", "fa fa-align-left", "fa fa-align-center", "fa fa-align-right", "fa fa-align-justify", "fa fa-list", "fa fa-outdent", "fa fa-indent", "fa fa-video-camera", "fa fa-picture-o", "fa fa-pencil", "fa fa-map-marker", "fa fa-adjust", "fa fa-tint", "fa fa-pencil-square-o", "fa fa-share-square-o", "fa fa-check-square-o", "fa fa-arrows", "fa fa-step-backward", "fa fa-fast-backward", "fa fa-backward", "fa fa-play", "fa fa-pause", "fa fa-stop", "fa fa-forward", "fa fa-fast-forward", "fa fa-step-forward", "fa fa-eject", "fa fa-chevron-left", "fa fa-chevron-right", "fa fa-plus-circle", "fa fa-minus-circle", "fa fa-times-circle", "fa fa-check-circle", "fa fa-question-circle", "fa fa-info-circle", "fa fa-crosshairs", "fa fa-times-circle-o", "fa fa-check-circle-o", "fa fa-ban", "fa fa-arrow-left", "fa fa-arrow-right", "fa fa-arrow-up", "fa fa-arrow-down", "fa fa-share", "fa fa-expand", "fa fa-compress", "fa fa-plus", "fa fa-minus", "fa fa-asterisk", "fa fa-exclamation-circle", "fa fa-gift", "fa fa-leaf", "fa fa-fire", "fa fa-eye", "fa fa-eye-slash", "fa fa-exclamation-triangle", "fa fa-plane", "fa fa-calendar", "fa fa-random", "fa fa-comment", "fa fa-magnet", "fa fa-chevron-up", "fa fa-chevron-down", "fa fa-retweet", "fa fa-shopping-cart", "fa fa-folder", "fa fa-folder-open", "fa fa-arrows-v", "fa fa-arrows-h", "fa fa-bar-chart", "fa fa-twitter-square", "fa fa-facebook-square", "fa fa-camera-retro", "fa fa-key", "fa fa-cogs", "fa fa-comments", "fa fa-thumbs-o-up", "fa fa-thumbs-o-down", "fa fa-star-half", "fa fa-heart-o", "fa fa-sign-out", "fa fa-linkedin-square", "fa fa-thumb-tack", "fa fa-external-link", "fa fa-sign-in", "fa fa-trophy", "fa fa-github-square", "fa fa-upload", "fa fa-lemon-o", "fa fa-phone", "fa fa-square-o", "fa fa-bookmark-o", "fa fa-phone-square", "fa fa-twitter", "fa-brands fa-facebook", "fa fa-github", "fa fa-unlock", "fa fa-credit-card", "fa fa-rss", "fa fa-hdd-o", "fa fa-bullhorn", "fa fa-bell", "fa fa-certificate", "fa fa-hand-o-right", "fa fa-hand-o-left", "fa fa-hand-o-up", "fa fa-hand-o-down", "fa fa-arrow-circle-left", "fa fa-arrow-circle-right", "fa fa-arrow-circle-up", "fa fa-arrow-circle-down", "fa fa-globe", "fa fa-wrench", "fa fa-tasks", "fa fa-filter", "fa fa-briefcase", "fa fa-arrows-alt", "fa fa-users", "fa fa-link", "fa fa-cloud", "fa fa-flask", "fa fa-scissors", "fa fa-files-o", "fa fa-paperclip", "fa fa-floppy-o", "fa fa-square", "fa fa-bars", "fa fa-list-ul", "fa fa-list-ol", "fa fa-strikethrough", "fa fa-underline", "fa fa-table", "fa fa-magic", "fa fa-truck", "fa fa-pinterest", "fa fa-pinterest-square", "fa fa-google-plus-square", "fa fa-google-plus", "fa fa-money", "fa fa-caret-down", "fa fa-caret-up", "fa fa-caret-left", "fa fa-caret-right", "fa fa-columns", "fa fa-sort", "fa fa-sort-desc", "fa fa-sort-asc", "fa fa-envelope", "fa fa-linkedin", "fa fa-undo", "fa fa-gavel", "fa fa-tachometer", "fa fa-comment-o", "fa fa-comments-o", "fa fa-bolt", "fa fa-sitemap", "fa fa-umbrella", "fa fa-clipboard", "fa fa-lightbulb-o", "fa fa-exchange", "fa fa-cloud-download", "fa fa-cloud-upload", "fa fa-user-md", "fa fa-stethoscope", "fa fa-suitcase", "fa fa-bell-o", "fa fa-coffee", "fa fa-cutlery", "fa fa-file-text-o", "fa fa-building-o", "fa fa-hospital-o", "fa fa-ambulance", "fa fa-medkit", "fa fa-fighter-jet", "fa fa-beer", "fa fa-h-square", "fa fa-plus-square", "fa fa-angle-double-left", "fa fa-angle-double-right", "fa fa-angle-double-up", "fa fa-angle-double-down", "fa fa-angle-left", "fa fa-angle-right", "fa fa-angle-up", "fa fa-angle-down", "fa fa-desktop", "fa fa-laptop", "fa fa-tablet", "fa fa-mobile", "fa fa-circle-o", "fa fa-quote-left", "fa fa-quote-right", "fa fa-spinner", "fa fa-circle", "fa fa-reply", "fa fa-github-alt", "fa fa-folder-o", "fa fa-folder-open-o", "fa fa-smile-o", "fa fa-frown-o", "fa fa-meh-o", "fa fa-gamepad", "fa fa-keyboard-o", "fa fa-flag-o", "fa fa-flag-checkered", "fa fa-terminal", "fa fa-code", "fa fa-reply-all", "fa fa-star-half-o", "fa fa-location-arrow", "fa fa-crop", "fa fa-code-fork", "fa fa-chain-broken", "fa fa-question", "fa fa-info", "fa fa-exclamation", "fa fa-superscript", "fa fa-subscript", "fa fa-eraser", "fa fa-puzzle-piece", "fa fa-microphone", "fa fa-microphone-slash", "fa fa-shield", "fa fa-calendar-o", "fa fa-fire-extinguisher", "fa fa-rocket", "fa fa-maxcdn", "fa fa-chevron-circle-left", "fa fa-chevron-circle-right", "fa fa-chevron-circle-up", "fa fa-chevron-circle-down", "fa fa-html5", "fa fa-css3", "fa fa-anchor", "fa fa-unlock-alt", "fa fa-bullseye", "fa fa-ellipsis-h", "fa fa-ellipsis-v", "fa fa-rss-square", "fa fa-play-circle", "fa fa-ticket", "fa fa-minus-square", "fa fa-minus-square-o", "fa fa-level-up", "fa fa-level-down", "fa fa-check-square", "fa fa-pencil-square", "fa fa-external-link-square", "fa fa-share-square", "fa fa-compass", "fa fa-caret-square-o-down", "fa fa-caret-square-o-up", "fa fa-caret-square-o-right", "fa fa-eur", "fa fa-gbp", "fa fa-usd", "fa fa-inr", "fa fa-jpy", "fa fa-rub", "fa fa-krw", "fa fa-btc", "fa fa-file", "fa fa-file-text", "fa fa-sort-alpha-asc", "fa fa-sort-alpha-desc", "fa fa-sort-amount-asc", "fa fa-sort-amount-desc", "fa fa-sort-numeric-asc", "fa fa-sort-numeric-desc", "fa fa-thumbs-up", "fa fa-thumbs-down", "fa fa-youtube-square", "fa fa-youtube", "fa fa-xing", "fa fa-xing-square", "fa fa-youtube-play", "fa fa-dropbox", "fa fa-stack-overflow", "fa fa-instagram", "fa fa-flickr", "fa fa-adn", "fa fa-bitbucket", "fa fa-bitbucket-square", "fa fa-tumblr", "fa fa-tumblr-square", "fa fa-long-arrow-down", "fa fa-long-arrow-up", "fa fa-long-arrow-left", "fa fa-long-arrow-right", "fa fa-apple", "fa fa-windows", "fa fa-android", "fa fa-linux", "fa fa-dribbble", "fa fa-skype", "fa fa-foursquare", "fa fa-trello", "fa fa-female", "fa fa-male", "fa fa-gratipay", "fa fa-sun-o", "fa fa-moon-o", "fa fa-archive", "fa fa-bug", "fa fa-vk", "fa fa-weibo", "fa fa-renren", "fa fa-pagelines", "fa fa-stack-exchange", "fa fa-arrow-circle-o-right", "fa fa-arrow-circle-o-left", "fa fa-caret-square-o-left", "fa fa-dot-circle-o", "fa fa-wheelchair", "fa fa-vimeo-square", "fa fa-try", "fa fa-plus-square-o", "fa fa-space-shuttle", "fa fa-slack", "fa fa-envelope-square", "fa fa-wordpress", "fa fa-openid", "fa fa-university", "fa fa-graduation-cap", "fa fa-yahoo", "fa fa-google", "fa fa-reddit", "fa fa-reddit-square", "fa fa-stumbleupon-circle", "fa fa-stumbleupon", "fa fa-delicious", "fa fa-digg", "fa fa-pied-piper-pp", "fa fa-pied-piper-alt", "fa fa-drupal", "fa fa-joomla", "fa fa-language", "fa fa-fax", "fa fa-building", "fa fa-child", "fa fa-paw", "fa fa-spoon", "fa fa-cube", "fa fa-cubes", "fa fa-behance", "fa fa-behance-square", "fa fa-steam", "fa fa-steam-square", "fa fa-recycle", "fa fa-car", "fa fa-taxi", "fa fa-tree", "fa fa-spotify", "fa fa-deviantart", "fa fa-soundcloud", "fa fa-database", "fa fa-file-pdf-o", "fa fa-file-word-o", "fa fa-file-excel-o", "fa fa-file-powerpoint-o", "fa fa-file-image-o", "fa fa-file-archive-o", "fa fa-file-audio-o", "fa fa-file-video-o", "fa fa-file-code-o", "fa fa-vine", "fa fa-codepen", "fa fa-jsfiddle", "fa fa-life-ring", "fa fa-circle-o-notch", "fa fa-rebel", "fa fa-empire", "fa fa-git-square", "fa fa-git", "fa fa-hacker-news", "fa fa-tencent-weibo", "fa fa-qq", "fa fa-weixin", "fa fa-paper-plane", "fa fa-paper-plane-o", "fa fa-history", "fa fa-circle-thin", "fa fa-header", "fa fa-paragraph", "fa fa-sliders", "fa fa-share-alt", "fa fa-share-alt-square", "fa fa-bomb", "fa fa-futbol-o", "fa fa-tty", "fa fa-binoculars", "fa fa-plug", "fa fa-slideshare", "fa fa-twitch", "fa fa-yelp", "fa fa-newspaper-o", "fa fa-wifi", "fa fa-calculator", "fa fa-paypal", "fa fa-google-wallet", "fa fa-cc-visa", "fa fa-cc-mastercard", "fa fa-cc-discover", "fa fa-cc-amex", "fa fa-cc-paypal", "fa fa-cc-stripe", "fa fa-bell-slash", "fa fa-bell-slash-o", "fa fa-trash", "fa fa-copyright", "fa fa-at", "fa fa-eyedropper", "fa fa-paint-brush", "fa fa-birthday-cake", "fa fa-area-chart", "fa fa-pie-chart", "fa fa-line-chart", "fa fa-lastfm", "fa fa-lastfm-square", "fa fa-toggle-off", "fa fa-toggle-on", "fa fa-bicycle", "fa fa-bus", "fa fa-ioxhost", "fa fa-angellist", "fa fa-cc", "fa fa-ils", "fa fa-meanpath", "fa fa-buysellads", "fa fa-connectdevelop", "fa fa-dashcube", "fa fa-forumbee", "fa fa-leanpub", "fa fa-sellsy", "fa fa-shirtsinbulk", "fa fa-simplybuilt", "fa fa-skyatlas", "fa fa-cart-plus", "fa fa-cart-arrow-down", "fa fa-diamond", "fa fa-ship", "fa fa-user-secret", "fa fa-motorcycle", "fa fa-street-view", "fa fa-heartbeat", "fa fa-venus", "fa fa-mars", "fa fa-mercury", "fa fa-transgender", "fa fa-transgender-alt", "fa fa-venus-double", "fa fa-mars-double", "fa fa-venus-mars", "fa fa-mars-stroke", "fa fa-mars-stroke-v", "fa fa-mars-stroke-h", "fa fa-neuter", "fa fa-genderless", "fa fa-facebook-official", "fa fa-pinterest-p", "fa fa-whatsapp", "fa fa-server", "fa fa-user-plus", "fa fa-user-times", "fa fa-bed", "fa fa-viacoin", "fa fa-train", "fa fa-subway", "fa fa-medium", "fa fa-y-combinator", "fa fa-optin-monster", "fa fa-opencart", "fa fa-expeditedssl", "fa fa-battery-full", "fa fa-battery-three-quarters", "fa fa-battery-half", "fa fa-battery-quarter", "fa fa-battery-empty", "fa fa-mouse-pointer", "fa fa-i-cursor", "fa fa-object-group", "fa fa-object-ungroup", "fa fa-sticky-note", "fa fa-sticky-note-o", "fa fa-cc-jcb", "fa fa-cc-diners-club", "fa fa-clone", "fa fa-balance-scale", "fa fa-hourglass-o", "fa fa-hourglass-start", "fa fa-hourglass-half", "fa fa-hourglass-end", "fa fa-hourglass", "fa fa-hand-rock-o", "fa fa-hand-paper-o", "fa fa-hand-scissors-o", "fa fa-hand-lizard-o", "fa fa-hand-spock-o", "fa fa-hand-pointer-o", "fa fa-hand-peace-o", "fa fa-trademark", "fa fa-registered", "fa fa-creative-commons", "fa fa-gg", "fa fa-gg-circle", "fa fa-tripadvisor", "fa fa-odnoklassniki", "fa fa-odnoklassniki-square", "fa fa-get-pocket", "fa fa-wikipedia-w", "fa fa-safari", "fa fa-chrome", "fa fa-firefox", "fa fa-opera", "fa fa-internet-explorer", "fa fa-television", "fa fa-contao", "fa fa-500px", "fa fa-amazon", "fa fa-calendar-plus-o", "fa fa-calendar-minus-o", "fa fa-calendar-times-o", "fa fa-calendar-check-o", "fa fa-industry", "fa fa-map-pin", "fa fa-map-signs", "fa fa-map-o", "fa fa-map", "fa fa-commenting", "fa fa-commenting-o", "fa fa-houzz", "fa fa-vimeo", "fa fa-black-tie", "fa fa-fonticons", "fa fa-reddit-alien", "fa fa-edge", "fa fa-credit-card-alt", "fa fa-codiepie", "fa fa-modx", "fa fa-fort-awesome", "fa fa-usb", "fa fa-product-hunt", "fa fa-mixcloud", "fa fa-scribd", "fa fa-pause-circle", "fa fa-pause-circle-o", "fa fa-stop-circle", "fa fa-stop-circle-o", "fa fa-shopping-bag", "fa fa-shopping-basket", "fa fa-hashtag", "fa fa-bluetooth", "fa fa-bluetooth-b", "fa fa-percent", "fa fa-gitlab", "fa fa-wpbeginner", "fa fa-wpforms", "fa fa-envira", "fa fa-universal-access", "fa fa-wheelchair-alt", "fa fa-question-circle-o", "fa fa-blind", "fa fa-audio-description", "fa fa-volume-control-phone", "fa fa-braille", "fa fa-assistive-listening-systems", "fa fa-american-sign-language-interpreting", "fa fa-deaf", "fa fa-glide", "fa fa-glide-g", "fa fa-sign-language", "fa fa-low-vision", "fa fa-viadeo", "fa fa-viadeo-square", "fa fa-snapchat", "fa fa-snapchat-ghost", "fa fa-snapchat-square", "fa fa-pied-piper", "fa fa-first-order", "fa fa-yoast", "fa fa-themeisle", "fa fa-google-plus-official", "fa fa-font-awesome"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconsList);

/***/ }),

/***/ "./src/components/premium-media-upload.js":
/*!************************************************!*\
  !*** ./src/components/premium-media-upload.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumMediaUpload)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-image */ "./src/components/default-image.js");


const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  Tooltip,
  Dashicon
} = wp.components;
const {
  MediaUpload
} = wp.blockEditor;
function PremiumMediaUpload(props) {
  const {
    type,
    imageID,
    imageURL,
    onSelectMedia = () => {},
    onRemoveImage = () => {}
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    allowedTypes: [`${type}`],
    onSelect: onSelectMedia,
    type: type,
    value: imageID,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, imageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "premium-image-media"
      }, type === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: imageURL,
        className: "premium-image-upload"
      }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
        src: imageURL,
        className: "premium-image-upload"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "premium-image-actions"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
        text: __("Edit")
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "premium-image-button",
        "aria-label": __("Edit"),
        onClick: open,
        role: "button"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "dashicons dashicons-edit"
      }), "                                    ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
        text: __("Remove")
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "premium-image-button",
        "aria-label": __("Remove"),
        onClick: onRemoveImage,
        role: "button"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        class: "dashicons dashicons-trash"
      }), "                                    ")))), !imageURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        onClick: open,
        className: "premium-placeholder-image"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `premium-blocks-control-media__tools`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `premium-blocks-control-media__tool`
      }, " ", __('Choose Image', 'premium-blocks-for-gutenberg')))));
    }
  });
}

/***/ }),

/***/ "./src/components/premium-responsive-spacing.js":
/*!******************************************************!*\
  !*** ./src/components/premium-responsive-spacing.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-size-units */ "./src/components/premium-size-units.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive */ "./src/components/responsive.js");

const {
  __
} = wp.i18n;
const {
  useState,
  useEffect,
  Fragment
} = wp.element;
const {
  useSelect,
  useDispatch
} = wp.data;



const SpacingComponent = props => {
  let {
    value,
    responsive,
    showUnits,
    label
  } = props;
  const [device, setDevice] = useState("Desktop");
  let defaultValue = {
    value: {
      top: "",
      right: "",
      bottom: "",
      left: ""
    },
    unit: 'px'
  };
  let ResDefaultParam = {
    Desktop: defaultValue.value,
    Tablet: defaultValue.value,
    Mobile: defaultValue.value,
    unit: defaultValue.unit
  };
  let defaultValues = responsive ? ResDefaultParam : defaultValue.value;
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const [link, setLink] = useState(false);
  useEffect(() => {
    if (state !== value) {
      setState(value);
    }
  }, [props]);

  const onSpacingChange = (v, choiceID) => {
    let updateState = { ...state
    };
    let deviceUpdateState = responsive ? { ...updateState[device]
    } : { ...updateState
    };

    if (link) {
      deviceUpdateState['top'] = v;
      deviceUpdateState['right'] = v;
      deviceUpdateState['bottom'] = v;
      deviceUpdateState['left'] = v;
    } else {
      deviceUpdateState[choiceID] = v;
    }

    responsive ? updateState[device] = deviceUpdateState : updateState = deviceUpdateState;
    props.onChange(updateState);
    setState(updateState);
  };

  const onLinkClickHandler = () => {
    let linkValue = responsive ? state[device]['top'] : state['top'];
    let updateState = { ...state
    };
    let deviceUpdateState = responsive ? { ...updateState[device]
    } : { ...updateState
    };
    const choices = ['top', 'right', 'bottom', "left"];

    for (let choice in choices) {
      deviceUpdateState[choices[choice]] = linkValue;
    }

    responsive ? updateState[device] = deviceUpdateState : updateState = deviceUpdateState;
    props.onChange(updateState);
    setState(updateState);
  };

  const renderInputHtml = function (device) {
    let active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let htmlChoices;
    htmlChoices = ['top', 'right', 'bottom', 'left'].map(side => {
      let inputValue = responsive ? state[device][side] : state[side];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: side,
        className: `premium-spacing-input-item`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
        type: "number",
        className: `premium-spacing-input`,
        value: inputValue,
        onChange: _ref => {
          let {
            target: {
              value
            }
          } = _ref;
          return onSpacingChange(Number(value), side);
        },
        "data-id": side,
        disabled: inputValue === "disabled" ? true : false
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: `premium-spacing-title`
      }, {
        top: __('Top', 'premium-blocks-for-gutenberg'),
        bottom: __('Bottom', 'premium-blocks-for-gutenberg'),
        left: __('Left', 'premium-blocks-for-gutenberg'),
        right: __('Right', 'premium-blocks-for-gutenberg')
      }[side]));
    });
    let linkHtml = '';

    if (link) {
      linkHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: `premium-spacing-input-item`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "linked-btn is-button dashicons dashicons-admin-links connected ",
        onClick: () => {
          setLink(false);
        }
      }));
    } else {
      linkHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: `premium-spacing-input-item`
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "linked-btn is-button dashicons dashicons-editor-unlink disconnected",
        onClick: () => {
          onLinkClickHandler();
          setLink(true);
        }
      }));
    }

    ;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: `premium-spacing-wrapper ${device} ${active}`
    }, htmlChoices, linkHtml);
  };

  let inputHtml = null;
  inputHtml = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, renderInputHtml(device, "active"));

  const onUnitChange = unitValue => {
    let updateState = { ...state
    };
    updateState[`unit`] = unitValue;
    props.onChange(updateState);
    setState(updateState);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-spacing-responsive premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`,
    style: {
      display: "flex",
      alignItems: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, "  ", label), responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: newValue => setDevice(newValue)
  })), showUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeUnit: state[`unit`],
    onChangeSizeUnit: unitKey => onUnitChange(unitKey)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-spacing-responsive-outer-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `input-wrapper premium-spacing-responsive-wrapper`
  }, inputHtml), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-reset-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "premium-reset-btn ",
    disabled: JSON.stringify(state) === JSON.stringify(defaultValues),
    onClick: e => {
      e.preventDefault();
      props.onChange(defaultValues);
      setState(defaultValues);
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingComponent);

/***/ }),

/***/ "./src/components/premium-responsive-tabs.js":
/*!***************************************************!*\
  !*** ./src/components/premium-responsive-tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  PanelBody,
  ToggleControl
} = wp.components;

function PremiumResponsiveTabs(props) {
  const {
    onChangeDesktop = () => {},
    onChangeTablet = () => {},
    onChangeMobile = () => {},
    Desktop,
    Tablet,
    Mobile
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __("Responsive"),
    className: "premium-panel-body",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Hide in Desktop', "premium-blocks-for-gutenberg"),
    checked: Desktop,
    onChange: onChangeDesktop
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Hide in Tablet', "premium-blocks-for-gutenberg"),
    checked: Tablet,
    onChange: onChangeTablet
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Hide in Mobile', "premium-blocks-for-gutenberg"),
    checked: Mobile,
    onChange: onChangeMobile
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PremiumResponsiveTabs);

/***/ }),

/***/ "./src/components/premium-shape.js":
/*!*****************************************!*\
  !*** ./src/components/premium-shape.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeControl/responsive-range-control */ "./src/components/RangeControl/responsive-range-control.js");
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");




const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  Tooltip,
  Dropdown,
  CheckboxControl,
  ToggleControl
} = wp.components;

class Shape extends Component {
  constructor(props) {
    super(props);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderShapeOptions", () => {
      const {
        value
      } = this.props;
      let shapes = ['clouds-flat', 'clouds-opacity', 'paper-torn', 'pointy-wave', 'rocky-mountain', 'single-wave', 'slope-opacity', 'slope', 'waves3-opacity', 'drip', 'turning-slope', 'hill-wave', 'hill', 'line-wave', 'swirl', 'wavy-opacity', 'zigzag-shark'];

      if (value.style) {
        shapes = shapes.filter(item => item.toLowerCase().search(value.style.toLowerCase()) == -1);
        shapes = [value.style, ...shapes];
      }

      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", {
        className: "premium-shape-picker-options"
      }, shapes.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
        className: `premium-shape-picker-option`,
        onClick: () => this.setSettings('style', item),
        dangerouslySetInnerHTML: {
          __html: PremiumBlocksSettings.shapes[item]
        },
        style: value.style == item ? {
          fill: value.color
        } : {}
      })));
    });

    this.state = {
      showShapeOptions: false
    };
  }

  setSettings(type, val) {
    const {
      value,
      onChange,
      shapeType
    } = this.props;
    const styleVal = type == 'style' && val == '' ? {
      openShape: 0
    } : {
      openShape: 1
    };
    onChange(Object.assign({}, value, styleVal, {
      shapeType
    }, {
      [type]: val
    }));
  }

  render() {
    const {
      value
    } = this.props;
    const {
      showShapeOptions
    } = this.state;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "premium-field-shape premium-field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "premium-field-child"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "premium-field premium-shape-picker-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Dropdown, {
      className: `premium-field-child premium-shape-picker ${value.style ? 'has-value' : ''}`,
      contentClassName: "premium-shape-picker-content",
      position: "bottom center",
      renderToggle: _ref => {
        let {
          isOpen,
          onToggle
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "shape-divider-options"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
          isPrimary: true,
          onClick: onToggle,
          "aria-expanded": isOpen
        }, value.style ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "premium-field-shape-value",
          dangerouslySetInnerHTML: {
            __html: PremiumBlocksSettings.shapes[value.style]
          }
        }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "premium-field-shape-placeholder"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, "Select Shape"))), value.style && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "premium-btn-reset-wrap"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
          className: "premium-reset-btn ",
          onClick: () => this.setSettings('style', '')
        })));
      },
      renderContent: () => this.renderShapeOptions()
    })), value.openShape == 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: __('Color', 'premium-blocks-for-gutenberg'),
      colorValue: value && value.color,
      onColorChange: val => this.setSettings('color', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      min: 100,
      max: 1000,
      step: 1,
      showUnit: true,
      value: value.width,
      tabletValue: value.widthTablet,
      onChangeTablet: val => this.setSettings('widthTablet', val),
      mobileValue: value.widthMobile,
      onChangeMobile: value => this.setSettings('widthMobile', val),
      showUnit: true,
      label: __('Shape Width', 'premium-blocks-for-gutenberg'),
      units: ['px', 'em', '%'],
      onChange: val => this.setSettings('width', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      min: 0,
      max: 500,
      step: 1,
      showUnit: true,
      value: value.height,
      tabletValue: value.heightTablet,
      onChangeTablet: val => this.setSettings('heightTablet', val),
      mobileValue: value.heightMobile,
      onChangeMobile: value => this.setSettings('heightMobile', val),
      units: ['px', 'em', '%'],
      label: __('Shape Height', 'premium-blocks-for-gutenberg'),
      onChange: val => this.setSettings('height', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Flip Divider', 'premium-blocks-for-gutenberg'),
      checked: value.flipShapeDivider,
      onChange: newValue => this.setSettings('flipShapeDivider', newValue)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Invert', 'premium-blocks-for-gutenberg'),
      checked: value.invertShapeDivider,
      onChange: newValue => this.setSettings('invertShapeDivider', newValue)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Bring to front', 'premium-blocks-for-gutenberg'),
      checked: value.front,
      onChange: val => this.setSettings('front', val)
    }))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);

/***/ }),

/***/ "./src/components/premium-size-units.js":
/*!**********************************************!*\
  !*** ./src/components/premium-size-units.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumSizeUnits)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function PremiumSizeUnits(props) {
  const {
    activeUnit,
    units,
    onChangeSizeUnit = unit => {}
  } = props;
  let sizeUnits = ["px", "em", "%"];

  if (undefined !== units) {
    sizeUnits = units;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-slider-units"
  }, sizeUnits.map((unit, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "single-unit " + (unit === activeUnit && "active"),
    onClick: () => onChangeSizeUnit(unit)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `unit-text`
  }, " ", unit))));
}

/***/ }),

/***/ "./src/components/premium-typo.js":
/*!****************************************!*\
  !*** ./src/components/premium-typo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumTypo)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-fonts */ "./src/components/premium-fonts.js");
/* harmony import */ var _RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeControl/responsive-range-control */ "./src/components/RangeControl/responsive-range-control.js");
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "./src/components/RangeControl/single-range-control.js");
/* harmony import */ var _typography_fontList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/fontList */ "./src/components/typography/fontList.js");





const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  SelectControl,
  Popover
} = wp.components;

function fuzzysearch(needle, haystack) {
  var hlen = haystack.length;
  var nlen = needle.length;

  if (nlen > hlen) {
    return false;
  }

  if (nlen === hlen) {
    return needle === haystack;
  }

  outer: for (var i = 0, j = 0; i < nlen; i++) {
    var nch = needle.charCodeAt(i);

    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }

    return false;
  }

  return true;
}

class PremiumTypo extends Component {
  constructor() {
    super(...arguments);
    let defaultValues = {
      fontWeight: "",
      fontStyle: "",
      textTransform: "",
      letterSpacing: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      },
      fontFamily: "Default",
      lineHeight: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      },
      textDecoration: "",
      fontSize: {
        Desktop: "",
        Tablet: "",
        Mobile: "",
        unit: "px"
      }
    };
    this.state = {
      sizeUnit: "px",
      isVisible: false,
      currentView: "",
      search: "",
      showUnit: this.props.showUnit || false,
      device: "Desktop",
      value: this.props.value,
      defaultValue: defaultValues
    };
  }

  componentDidUpdate(prevProps) {
    let previewDevice = wp.data && wp.data.select && wp.data.select("core/edit-post") && wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType ? wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType() : "Desktop";

    if (this.state.device !== previewDevice) {
      this.setState({
        device: previewDevice
      });
    }
  }

  render() {
    const {
      onChange
    } = this.props;
    const {
      value,
      sizeUnit,
      isVisible,
      currentView,
      search,
      device
    } = this.state;
    const STYLE = [{
      value: "normal",
      label: __("Normal", "premium-blocks-for-gutenberg")
    }, {
      value: "italic",
      label: __("Italic", "premium-blocks-for-gutenberg")
    }, {
      value: "oblique",
      label: __("Oblique", "premium-blocks-for-gutenberg")
    }];
    const fonts = [{
      value: "Default",
      label: __("Default", "premium-blocks-for-gutenberg"),
      weight: [__("Default", "premium-blocks-for-gutenberg"), "100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Arial",
      label: "Arial",
      weight: [__("Default", "premium-blocks-for-gutenberg"), "100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Helvetica",
      label: "Helvetica",
      weight: [__("Default", "premium-blocks-for-gutenberg"), "100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Times New Roman",
      label: "Times New Roman",
      weight: [__("Default", "premium-blocks-for-gutenberg"), "100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Georgia",
      label: "Georgia",
      weight: [__("Default", "premium-blocks-for-gutenberg"), "100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }];
    let fontWeight = "";
    Object.keys(_premium_fonts__WEBPACK_IMPORTED_MODULE_1__["default"]).map((k, v) => {
      fonts.push({
        value: k,
        label: k,
        weight: _premium_fonts__WEBPACK_IMPORTED_MODULE_1__["default"][k].weight,
        google: true
      });

      if (k === value["fontFamily"]) {
        fontWeight = _premium_fonts__WEBPACK_IMPORTED_MODULE_1__["default"][k].weight;
      }
    });

    if (fontWeight === "") {
      fontWeight = fonts[0].weight;
    }

    const toggleVisible = v => {
      this.setState({
        isVisible: true,
        currentView: v
      });
    };

    const toggleClose = () => {
      if (this.state.isVisible === true) {
        this.setState({
          isVisible: false,
          currentView: ""
        });
      }
    };

    const renderVariations = fonts.map((item, index) => {
      if (item.value == value["fontFamily"]) {
        return (item.weight || []).map((weights, i) => {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
            key: i,
            className: `${weights == value["fontWeight"] ? "active" : ""}`,
            onClick: () => changeTypography("fontWeight", weights)
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            className: "premium-variation-name"
          }, weights));
        });
      }
    });

    const changeTypography = (item, v) => {
      let initialState = { ...value
      };
      initialState[item] = v;
      this.setState({
        value: initialState
      });
      onChange(initialState);
    };

    const linearFonts = fonts.filter(family => fuzzysearch(search.toLowerCase(), family["value"].toLowerCase()));
    const fontSize = value["fontSize"][device];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-control-toggle premium-typography premium-blocks__base-control"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: " premium-control-title"
    }, __("Typography", "premium-blocks-for-gutenberg"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typohraphy-value"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-title-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium-font",
      onClick: () => {
        toggleVisible("fonts");
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, value["fontFamily"]), isVisible && currentView == "fonts" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      className: "premium-typography-option premium-font-family__modal",
      onClose: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-option-modal "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        top: "0px",
        right: "0px",
        left: `0px`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-typography-top premium-switch-panel premium-static"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "premium-font"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      value: search,
      autoFocus: true,
      onKeyUp: e => {
        if (e.keyCode == 13) {
          if (linearFonts.length > 0) {
            changeTypography("fontFamily", linearFonts[0]);
            this.setState({
              search: ""
            });
          }
        }
      },
      onClick: e => e.stopPropagation(),
      onChange: _ref => {
        let {
          target: {
            value
          }
        } = _ref;
        return this.setState({
          search: value
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "8",
      height: "8",
      viewBox: "0 0 15 15"
    }, currentView === "search" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8.9,7.5l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7.5,6.1L2.9,1.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4.6-4.6l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.9,7.5z"
    }), currentView !== "search" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M14.6,14.6c-0.6,0.6-1.4,0.6-2,0l-2.5-2.5c-1,0.7-2.2,1-3.5,1C2.9,13.1,0,10.2,0,6.6S2.9,0,6.6,0c3.6,0,6.6,2.9,6.6,6.6c0,1.3-0.4,2.5-1,3.5l2.5,2.5C15.1,13.1,15.1,14,14.6,14.6z M6.6,1.9C4,1.9,1.9,4,1.9,6.6s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C11.3,4,9.2,1.9,6.6,1.9z"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography_fontList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      linearFontsList: linearFonts,
      value: value["fontFamily"],
      onPickFamily: value => {
        changeTypography("fontFamily", value);
      }
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium-size",
      onClick: () => {
        toggleVisible("options");
      }
    }, fontSize, sizeUnit, isVisible && currentView == "options" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      className: "premium-typography-option",
      onClose: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: " "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-typography-options",
      style: {
        width: `100%`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Font Size", "premium-blocks-for-gutenberg"),
      value: value["fontSize"],
      onChange: value => changeTypography("fontSize", value),
      showUnit: true,
      units: ["px", "em"]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Line Height (PX)", "premium-blocks-for-gutenberg"),
      value: value["lineHeight"],
      onChange: value => changeTypography("lineHeight", value),
      showUnit: false,
      min: 0,
      max: 200
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Letter Spacing (PX)", "premium-blocks-for-gutenberg"),
      value: value["letterSpacing"],
      onChange: value => changeTypography("letterSpacing", value),
      showUnit: false,
      step: 0.1,
      min: -5,
      max: 15
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Style", "premium-blocks-for-gutenberg"),
      options: STYLE,
      value: value["fontStyle"],
      onChange: value => {
        changeTypography("fontStyle", value);
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "premium-typography-variant"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-text-transform"
    }, ["capitalize", "uppercase", "none"].map(variant => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: variant,
      onClick: () => {
        changeTypography("textTransform", variant);
      },
      className: `${value["textTransform"] == variant ? "active" : ""}${variant === "none" ? " dashicons dashicons-remove" : ""}`,
      "data-variant": variant
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "premium-tooltip-top"
    }, variant)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-text-decoration"
    }, ["line-through", "underline", "none"].map(variant => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: variant,
      onClick: () => {
        changeTypography("textDecoration", variant);
      },
      className: `${value["textDecoration"] == variant ? "active" : ""}${variant === "none" ? " dashicons dashicons-remove" : ""}`,
      "data-variant": variant
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "premium-tooltip-top"
    }, variant)))))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium-weight",
      onClick: () => {
        toggleVisible("variations");
      }
    }, value["fontWeight"], isVisible && currentView == "variations" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      className: "premium-typography-option",
      onClose: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-option-modal "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-typography-variations"
    }, renderVariations)))))))));
  }

}

/***/ }),

/***/ "./src/components/radio-control.js":
/*!*****************************************!*\
  !*** ./src/components/radio-control.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  useState,
  Fragment
} = wp.element;
const {
  __
} = wp.i18n;
const {
  ButtonGroup,
  Button
} = wp.components;

const RadioComponent = _ref => {
  let {
    value,
    onChange,
    label,
    choices,
    showIcons = false
  } = _ref;

  const HandleChange = newVal => {
    setState(newVal);
    onChange(newVal);
  };

  let defaultVal = '';
  value = value ? value : defaultVal;
  const [state, setState] = useState(value);

  const renderButtons = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, choices.map(choice => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        isTertiary: true,
        className: choice.value === value ? 'active-radio' : '',
        onClick: () => {
          HandleChange(choice.value);
        }
      }, showIcons ? choice.icon : choice.label);
    }));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-blocks__base-control`
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "premium-radio-container-control"
  }, renderButtons()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (React.memo(RadioComponent));

/***/ }),

/***/ "./src/components/responsive-radio.js":
/*!********************************************!*\
  !*** ./src/components/responsive-radio.js ***!
  \********************************************/
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
/* harmony import */ var _radio_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-control */ "./src/components/radio-control.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsive */ "./src/components/responsive.js");


const {
  useState
} = wp.element;



const ResponsiveRadio = _ref => {
  let {
    choices,
    label,
    showIcons,
    onChange,
    value
  } = _ref;
  let defaultValue = {
    'Desktop': '',
    'Tablet': '',
    'Mobile': ''
  };
  const [state, setState] = useState(value ? { ...defaultValue,
    ...value
  } : defaultValue);
  const [device, setDevice] = useState("Desktop");
  const output = {};

  const handleChange = (val, dev) => {
    const updatedState = { ...state
    };
    updatedState[dev] = val;
    setState(updatedState);
    onChange(updatedState);
  };

  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radio_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    choices: choices,
    showIcons: showIcons,
    label: false,
    onChange: newValue => handleChange(newValue, 'Desktop'),
    value: state['Desktop']
  });
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radio_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    choices: choices,
    showIcons: showIcons,
    label: false,
    onChange: newValue => handleChange(newValue, 'Tablet'),
    value: state['Tablet']
  });
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radio_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    choices: choices,
    showIcons: showIcons,
    label: false,
    onChange: newValue => handleChange(newValue, 'Mobile'),
    value: state['Mobile']
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-blocks-responsive-radio components-base-control premium-blocks__base-control `
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "premium-control-title"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive__WEBPACK_IMPORTED_MODULE_3__["default"], {
    deviceType: device,
    onChange: newDevice => setDevice(newDevice)
  })), output[device] ? output[device] : output.Desktop);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(ResponsiveRadio));

/***/ }),

/***/ "./src/components/responsive.js":
/*!**************************************!*\
  !*** ./src/components/responsive.js ***!
  \**************************************/
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


const {
  useSelect,
  useDispatch
} = wp.data;

function Responsive(props) {
  let previewDevice = wp.customize ? wp.customize.previewedDevice.get() : wp.data && wp.data.select && wp.data.select('core/edit-post') && wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType ? wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType() : 'Desktop';

  let customSetPreviewDeviceType = device => {
    props.onChange(device);
  };

  if (wp.data.select('core/edit-post')) {
    const theDevice = useSelect(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select('core/edit-post');
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
    }, []);

    if (theDevice !== props.deviceType) {
      props.onChange(theDevice);
    }

    const {
      __experimentalSetPreviewDeviceType = null
    } = useDispatch('core/edit-post');

    customSetPreviewDeviceType = device => {
      __experimentalSetPreviewDeviceType(device);

      props.onChange(device);
    };
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-blocks-device"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `premium-blocks-device-desktop ${previewDevice === "Desktop" ? "active" : ''}`,
    onClick: () => customSetPreviewDeviceType("Desktop")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "fa-desktop",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "desktop",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h468c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-42 152c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h98.7l18.6-55.8c1.6-4.9 6.2-8.2 11.4-8.2h78.7c5.2 0 9.8 3.3 11.4 8.2l18.6 55.8H456c13.3 0 24 10.7 24 24z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `premium-blocks-device-tablet ${previewDevice === "Tablet" ? "active" : ''}`,
    onClick: () => customSetPreviewDeviceType("Tablet")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "fa-tablet-alt",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "tablet-alt",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: `premium-blocks-device-mobile ${previewDevice === "Mobile" ? "active" : ''}`,
    onClick: () => customSetPreviewDeviceType("Mobile")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "fa-mobile-alt",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "mobile-alt",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsive);

/***/ }),

/***/ "./src/components/social-media.js":
/*!****************************************!*\
  !*** ./src/components/social-media.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Social = {
  facebook: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    "enable-background": "new 0 0 56.693 56.693",
    height: "56.693px",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"
  })),
  twitter: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    "enable-background": "new 0 0 56.693 56.693",
    height: "56.693px",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"
  })),
  youtube: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "100%",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z"
  })),
  instagram: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 56.7 56.7",
    "enable-background": "new 0 0 56.7 56.7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "41.5",
    cy: "16.4",
    r: "2.9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
  }))),
  linkedin: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    baseProfile: "tiny",
    height: "24px",
    id: "Layer_1",
    version: "1.2",
    viewBox: "0 0 24 24",
    width: "24px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
    cx: "6.5",
    cy: "6.5",
    rx: "1.55",
    ry: "1.5"
  }))),
  github: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "512px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "512px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "st0",
    d: "M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"
  }))),
  flickr: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "14.811",
    cy: "28.347",
    r: "10.789"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "41.882",
    cy: "28.347",
    r: "10.789"
  }))),
  googlePlus: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.6934px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.6934 56.6934",
    width: "56.6934px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098   c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992   c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445   c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805   c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999   C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0   c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836   c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0   c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836   C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z"
  }))),
  pinterest: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z"
  })),
  reddit: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "512px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "512px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M480.5,251c0-27.7-22.2-50.2-49.5-50.2c-13,0-24.7,5-33.6,13.3c-32.4-22.8-76.1-37.8-124.9-40.6l21.9-73.2l67.1,13.5  c2.3,22.7,21.2,40.4,44.3,40.4c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c24.6,0,44.5-20.2,44.5-45.1S430.7,64,406.1,64  c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-17.2,0-32,9.8-39.5,24.3l-89.7-18l-30.8,103l-2.5,0.1c-50.3,2.2-95.5,17.4-128.7,40.7  c-8.8-8.3-20.6-13.3-33.6-13.3c-27.3,0-49.5,22.5-49.5,50.2c0,19.6,11,36.5,27.1,44.8c-0.8,4.9-1.2,9.8-1.2,14.8  C57.5,386.4,146.4,448,256,448s198.5-61.6,198.5-137.5c0-5-0.4-9.9-1.1-14.8C469.5,287.4,480.5,270.5,480.5,251z M65.8,271.1  c-6.6-4.5-10.9-12.1-10.9-20.8c0-13.8,11.1-25.1,24.7-25.1c5.6,0,10.8,1.9,15,5.1C81.1,242.2,71.1,256,65.8,271.1z M389.3,109.1  c0-9.2,7.4-16.8,16.5-16.8s16.5,7.5,16.5,16.8c0,9.2-7.4,16.8-16.5,16.8S389.3,118.4,389.3,109.1z M158.5,288.4  c0-17.6,14.2-31.8,31.8-31.8s31.8,14.2,31.8,31.8c0,17.6-14.2,31.8-31.8,31.8S158.5,306,158.5,288.4z M256,400  c-47.6-0.2-76-28.5-77.2-29.7l12.6-12.4c0.2,0.2,23.7,24.2,64.6,24.4c40.3-0.2,64.2-24.2,64.5-24.4l12.6,12.4  C331.9,371.5,303.6,399.8,256,400z M322.3,320.2c-17.6,0-31.8-14.2-31.8-31.8c0-17.6,14.2-31.8,31.8-31.8s31.8,14.2,31.8,31.8  C354.1,306,339.8,320.2,322.3,320.2z M446.4,271.5c-5.4-15.3-15.6-29.4-29.3-41.4c4.2-3.3,9.5-5.2,15.2-5.2  c13.9,0,25.1,11.4,25.1,25.5C457.5,259.2,453.1,266.9,446.4,271.5z"
  })),
  skype: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    "data-name": "Layer 1",
    viewBox: "0 0 128 128",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "skype-1",
    d: "M41.75,22.5a19.19,19.19,0,0,1,10.08,2.85L54,26.71l2.54-.54a39,39,0,0,1,46.14,46.72l-.52,2.33,1.11,2.11a19,19,0,0,1,2.19,8.92A19.25,19.25,0,0,1,77,103.15L74.94,102l-2.34.48A39,39,0,0,1,26.44,56.84l.49-2.55-1.4-2.19A19.24,19.24,0,0,1,41.75,22.5m0-6.5A25.74,25.74,0,0,0,20.06,55.61a45.51,45.51,0,0,0,53.86,53.25,25.75,25.75,0,0,0,35.14-34.54,45.49,45.49,0,0,0-53.83-54.5A25.62,25.62,0,0,0,41.75,16Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "skype-1",
    d: "M41.4,51.58c0-11.52,11.52-15.7,22.27-15.7,16.66,0,20.44,9.84,21.32,12.66.53,1.68-1,6.51-5.6,6s-5.23-7-14.19-9.52c-2.75-.76-11.61.35-11.61,5.52,0,4.6,15,6.86,22.37,9.71,7.72,3,11.23,7.14,11.23,14.18,0,14.28-15.42,17.7-21.8,17.7-20.18,0-24.56-14-24.56-16.37a5.1,5.1,0,0,1,5.23-5.43c6.95,0,4.28,12.28,17.61,12.28,10.47,0,11.52-4.85,11.52-7.23,0-6.85-18.27-9.23-18.27-9.23S41.4,63.71,41.4,51.58Z"
  })),
  stack_overflow: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "-1163 1657.697 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    height: "4.1104",
    transform: "matrix(-0.8613 -0.508 0.508 -0.8613 -2964.1831 2556.6357)",
    width: "19.2465",
    x: "-1142.8167",
    y: "1680.7778"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    height: "4.1105",
    transform: "matrix(-0.9657 -0.2596 0.2596 -0.9657 -2672.0498 3027.386)",
    width: "19.2462",
    x: "-1145.7363",
    y: "1688.085"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    height: "4.1098",
    transform: "matrix(-0.9958 -0.0918 0.0918 -0.9958 -2425.5647 3282.8535)",
    width: "19.246",
    x: "-1146.9451",
    y: "1695.1263"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    height: "4.111",
    width: "19.2473",
    x: "-1147.2625",
    y: "1701.293"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M-1121.4579,1710.9474c0,0,0,0.9601-0.0323,0.9601v0.0156h-30.7953c0,0-0.9598,0-0.9598-0.0156h-0.0326v-20.03h3.2877  v16.8049h25.2446v-16.8049h3.2877V1710.9474z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    height: "4.111",
    transform: "matrix(0.5634 0.8262 -0.8262 0.5634 892.9033 1662.7915)",
    width: "19.247",
    x: "-1136.5389",
    y: "1674.2235"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    height: "4.1108",
    transform: "matrix(0.171 0.9853 -0.9853 0.171 720.9987 2489.031)",
    width: "19.2461",
    x: "-1128.3032",
    y: "1670.9347"
  })),
  whatsapp: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "st0",
    d: "M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "st0",
    d: "M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
  }))),
  vimeo: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "100%",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M511.751,137.03c-2.279,49.837 -37.085,118.065 -104.422,204.686c-69.61,90.446 -128.51,135.69 -176.676,135.69c-29.852,0 -55.11,-27.532 -75.739,-82.635c-13.775,-50.511 -27.537,-101.015 -41.324,-151.525c-15.321,-55.074 -31.746,-82.641 -49.329,-82.641c-3.832,0 -17.234,8.059 -40.184,24.107l-24.077,-31.021c25.264,-22.194 50.185,-44.387 74.705,-66.623c33.707,-29.107 59.025,-44.423 75.881,-45.97c39.836,-3.831 64.361,23.405 73.566,81.697c9.949,62.897 16.839,102.018 20.7,117.322c11.501,52.193 24.142,78.259 37.935,78.259c10.704,0 26.81,-16.927 48.284,-50.793c21.426,-33.843 32.91,-59.591 34.463,-77.298c3.064,-29.208 -8.426,-43.844 -34.463,-43.844c-12.263,0 -24.904,2.816 -37.905,8.39c25.17,-82.405 73.247,-122.429 144.198,-120.144c52.612,1.541 77.427,35.655 74.387,102.343Z"
  })),
  tumblr: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "100%",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "100%",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M315.422,512.003c-76.99,0 -134.379,-39.613 -134.379,-134.388l0,-151.782l-69.985,0l0,-82.185c77.022,-19.996 109.219,-86.26 112.946,-143.646l79.946,0l0,130.314l93.281,0l0,95.517l-93.281,0l0,132.165c0,39.616 19.987,53.308 51.83,53.308l45.179,0l0,100.697l-85.537,0Z"
  })),
  dribbble: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    id: "dribbble",
    version: "1.1",
    viewBox: "0 0 186.9844 186.9864",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M157.7304,25.6756l-3.6444-3.4528l-0.1244,0.2104C137.0292,7.9872,115.7824,0,93.4904,0  c-12.122,0-23.9412,2.3579-35.1948,6.9508l-0.0532-0.0544l-2.5256,1.1172C28.1836,20.2012,8.096,44.996,1.9804,74.336L1.332,77.4472  l0.0776,0.036C0.4912,82.7888,0,88.1579,0,93.496c0,27.5476,11.9876,53.2764,32.954,71.1188l-0.036,0.0824l2.4084,1.918  c16.736,13.3264,36.8476,20.3712,58.164,20.3712c11.252,0,22.418-2.0765,33.1876-6.174l2.578-0.9804v-0.116  c31.1589-12.4941,52.4488-40.312,56.7504-73.9932l0.224,0.078l0.3988-5.1776c0.166-2.166,0.3552-4.6213,0.3552-7.1272  C186.9844,67.6408,176.596,43.5548,157.7304,25.6756z M178.9844,93.496c0,0.4768-0.0076,0.9512-0.0215,1.424  c-11.2265-3.3712-22.8357-5.0764-34.5897-5.0764c-10.1452,0-20.2476,1.2856-30.0832,3.8256l-0.0204-0.058l-0.022,0.0064  c-2.0308-5.4696-4.2287-10.8028-6.5624-15.928l0.0356-0.0157l-0.0304-0.064c19.6568-9.6347,36.1248-24.2531,48.0304-42.6275  C170.76,50.912,178.9844,71.5059,178.9844,93.496z M149.7376,29.3412c-11.1692,17.7332-26.8187,31.8016-45.6072,41.0136  C93.72,49.4772,80.3476,30.2936,64.29,13.2004C73.6816,9.7628,83.4752,8,93.4904,8C114.29,8,134.1032,15.6044,149.7376,29.3412z   M56.4456,16.4884C72.8284,33.492,86.418,52.7032,96.9044,73.6796c-13.422,5.4572-27.59,8.2188-42.174,8.2188  c-15.3416,0-30.1972-3.0468-44.2028-9.0605C16.6309,48.2752,33.5236,27.5352,56.4456,16.4884z M8,93.496  c0-4.2181,0.3284-8.4616,0.9568-12.6704c14.544,6.0043,29.912,9.0728,45.7736,9.0728c15.76,0,31.0572-3.0504,45.55-8.9976  c2.2188,4.862,4.3016,9.9028,6.242,15.0944c-30.6715,10.146-55.824,32.0652-70.0955,61.0728C18.3016,140.8228,8,117.932,8,93.496z   M42.7756,162.252c13.2033-27.9784,37.1524-49.1444,66.4688-58.7756c7.668,22.84,11.6972,46.6252,11.994,70.8008  c-9.0488,3.1252-18.3712,4.7092-27.748,4.7092C75.0392,178.9864,57.5724,173.2108,42.7756,162.252z M129.1284,171.1379  c-0.592-23.8191-4.692-47.2451-12.218-69.7927c20.1908-5.0828,41.5184-4.4488,61.3365,1.8104  C174.8872,133.5884,156.4804,159.0116,129.1284,171.1379z"
  })),
  quora: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Quora"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    class: "quora-1",
    d: "M26.29,29.21a12.58,12.58,0,0,0,5.82-10.69C32.11,9.53,26.69,6,20,6A12.26,12.26,0,0,0,7.89,18.52C7.89,25.44,11.48,31,20,31a11.71,11.71,0,0,0,2.79-.33h0a6.71,6.71,0,0,0,3.41,3,5.61,5.61,0,0,0,3.61-.08l-.39-2.24A3.26,3.26,0,0,1,26.29,29.21ZM13.7,18.54c0-6.37,2.82-9.33,6.3-9.33s6.3,2.19,6.3,9.33c0,2.93-.45,5.54-1.74,7.25-2.06-3.22-6.28-2.06-6.28-2.06l.26,2.06a3.41,3.41,0,0,1,3.09,1.91,6.9,6.9,0,0,1-1.63.18C14.64,27.88,13.7,23.7,13.7,18.54Z"
  }))),
  foursquare: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M4 2C4 1.44772 4.44772 1 5 1H18C18.2785 1 18.5445 1.11618 18.7337 1.32055C18.923 1.52492 19.0184 1.79897 18.9971 2.0767L18.5799 7.5H11V9.5H18.426L17.9971 15.0767C17.957 15.5977 17.5225 16 17 16H11.4599L5.75926 22.6508C5.48692 22.9685 5.04554 23.0831 4.65305 22.9379C4.26057 22.7927 4 22.4185 4 22V2Z"
  })),
  wordpress: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "32px",
    id: "Layer_1",
    version: "1.0",
    viewBox: "0 0 32 32",
    width: "32px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16,0C7.178,0,0,7.178,0,16s7.178,16.001,16,16.001S32,24.822,32,16S24.822,0,16,0z M1.615,16  c0-2.086,0.447-4.065,1.246-5.854l6.861,18.8C4.924,26.615,1.615,21.694,1.615,16z M16,30.386c-1.412,0-2.775-0.206-4.063-0.585  l4.316-12.542l4.422,12.114c0.029,0.07,0.064,0.136,0.103,0.197C19.282,30.098,17.676,30.386,16,30.386z M17.982,9.255  c0.866-0.045,1.646-0.136,1.646-0.136c0.775-0.092,0.684-1.231-0.092-1.186c0,0-2.329,0.183-3.834,0.183  c-1.414,0-3.789-0.183-3.789-0.183c-0.775-0.046-0.866,1.139-0.091,1.186c0,0,0.734,0.091,1.509,0.136l2.241,6.142l-3.148,9.441  L7.187,9.255C8.054,9.21,8.833,9.119,8.833,9.119c0.773-0.092,0.684-1.231-0.092-1.186c0,0-2.33,0.183-3.835,0.183  c-0.27,0-0.588-0.006-0.926-0.018C6.554,4.193,10.975,1.615,16,1.615c3.745,0,7.155,1.431,9.715,3.777  c-0.062-0.005-0.123-0.013-0.187-0.013c-1.413,0-2.416,1.231-2.416,2.554c0,1.186,0.684,2.188,1.413,3.374  c0.547,0.957,1.187,2.188,1.187,3.968c0,1.23-0.474,2.659-1.095,4.65l-1.436,4.793L17.982,9.255z M28.623,9.099  c1.123,2.05,1.762,4.4,1.762,6.901c0,5.308-2.876,9.94-7.152,12.435l4.394-12.704c0.82-2.052,1.094-3.693,1.094-5.151  C28.72,10.049,28.686,9.558,28.623,9.099z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null)),
  stumbleupon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "-1163 1657.697 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M-1132.0631,1682.2316l3.3447,1.5577l4.9854-1.4877v-3.4603c-0.1763-5.8875-4.9893-10.6108-10.9205-10.6108  c-5.9102,0-10.7103,4.6886-10.9208,10.5469v15.8059c0,1.4304-1.1599,2.5907-2.5906,2.5907s-2.5907-1.1603-2.5907-2.5907v-6.6987  h-8.3746c0,0,0,6.7097,0,6.788c0,6.0439,4.8992,10.9429,10.943,10.9429c5.9907,0,10.8463-4.8153,10.9308-10.7853l0.0122-15.6118  c0-1.4309,1.1599-2.5905,2.5907-2.5905c1.4305,0,2.5905,1.1595,2.5905,2.5905V1682.2316z M-1118.5516,1687.8845v7.0112  c0,1.4308-1.1599,2.5908-2.5907,2.5908c-1.4307,0-2.5907-1.16-2.5907-2.5908v-6.8772l-4.9854,1.488l-3.3447-1.558v6.8215  c0.0525,5.9979,4.9323,10.8452,10.9432,10.8452c6.0436,0,10.9431-4.8989,10.9431-10.9429c0-0.0782,0-6.788,0-6.788H-1118.5516z",
    id: "icon_2_"
  })),
  yahoo: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "512px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 512 512",
    width: "512px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M384.6,68.4c-11.3,0-22.5-0.8-32.6-4.4l-96,160L160,64c-10.1,3.6-20.7,4.4-32,4.4c-11.1,0-22.1-0.9-32-4.4l128,212.7V448  c10-3.5,20.8-4.4,32-4.4s22,0.9,32,4.4V277L416,64C406.1,67.4,395.7,68.4,384.6,68.4z"
  })),
  soundcloud: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "premium-social-media-icon",
    height: "56.693px",
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    width: "56.693px",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6.079,36.215c0.104,0,0.188-0.082,0.205-0.199l0.551-4.33l-0.551-4.428c-0.017-0.117-0.102-0.197-0.206-0.197  s-0.19,0.084-0.205,0.197c0,0.002-0.485,4.428-0.485,4.428l0.485,4.33C5.888,36.131,5.975,36.215,6.079,36.215z M4.453,34.377  c0,0,0,0,0,0.002l0,0V34.377z M4.256,34.57c0.1,0,0.181-0.08,0.197-0.191l0.427-2.693l-0.427-2.738  c-0.015-0.113-0.097-0.193-0.197-0.193c-0.103,0-0.184,0.082-0.198,0.195l-0.36,2.736l0.36,2.691  C4.072,34.49,4.154,34.57,4.256,34.57z M8.263,26.434c-0.016-0.141-0.12-0.242-0.248-0.242c-0.13,0-0.234,0.102-0.247,0.242  c0,0.002-0.46,5.254-0.46,5.254l0.46,5.061c0.013,0.141,0.117,0.242,0.247,0.242c0.128,0,0.232-0.102,0.247-0.24l0.523-5.062  L8.263,26.434z M9.969,37.191c0.15,0,0.274-0.121,0.288-0.283l0,0l0.494-5.221l-0.494-5.396c-0.014-0.164-0.138-0.285-0.288-0.285  c-0.153,0-0.278,0.121-0.29,0.285l-0.436,5.396l0.436,5.221C9.691,37.07,9.815,37.191,9.969,37.191z M11.937,37.277  c0.176,0,0.318-0.139,0.331-0.326v0.002l0.466-5.266l-0.466-5.008c-0.012-0.186-0.155-0.326-0.331-0.326  c-0.178,0-0.321,0.143-0.332,0.328l-0.41,5.006l0.41,5.264C11.616,37.139,11.758,37.277,11.937,37.277z M14.73,31.689l-0.437-8.145  c-0.011-0.207-0.175-0.369-0.373-0.369c-0.199,0-0.362,0.162-0.373,0.369l-0.385,8.145l0.385,5.266  c0.011,0.205,0.174,0.367,0.373,0.367c0.198,0,0.362-0.162,0.373-0.369v0.002L14.73,31.689z M15.92,37.332  c0.222,0,0.405-0.182,0.416-0.412v0.004l0.407-5.232l-0.407-10.008c-0.011-0.232-0.193-0.412-0.416-0.412  c-0.223,0-0.405,0.18-0.415,0.412l-0.36,10.008l0.36,5.23C15.515,37.15,15.698,37.332,15.92,37.332z M17.937,20.395  c-0.249,0-0.449,0.199-0.458,0.455l-0.336,10.842l0.336,5.178c0.008,0.252,0.209,0.451,0.458,0.451c0.246,0,0.447-0.199,0.457-0.453  l0,0.004l0.379-5.18L18.394,20.85C18.384,20.594,18.183,20.395,17.937,20.395z M19.968,37.332c0.272,0,0.491-0.219,0.5-0.496  l0,0.002l0.35-5.145l-0.35-11.209c-0.009-0.279-0.228-0.496-0.5-0.496c-0.271,0-0.491,0.217-0.5,0.496l-0.311,11.207l0.311,5.146  C19.477,37.113,19.697,37.332,19.968,37.332z M22.017,37.326c0.295,0,0.533-0.238,0.541-0.539v0.004l0.32-5.098l-0.32-10.924  c-0.008-0.301-0.246-0.537-0.541-0.537c-0.297,0-0.535,0.236-0.542,0.537l-0.286,10.924l0.286,5.096  C21.481,37.088,21.72,37.326,22.017,37.326z M24.956,31.693l-0.292-10.525c-0.008-0.324-0.265-0.58-0.584-0.58  c-0.321,0-0.577,0.256-0.584,0.582l-0.261,10.523l0.262,5.066c0.006,0.32,0.262,0.576,0.583,0.576c0.319,0,0.576-0.256,0.584-0.582  v0.006L24.956,31.693z M26.159,37.346c0.339,0,0.619-0.279,0.626-0.623v0.004l0.263-5.031l-0.263-12.523  c-0.007-0.344-0.287-0.623-0.626-0.623c-0.34,0-0.619,0.279-0.625,0.623l-0.236,12.52c0,0.01,0.236,5.033,0.236,5.033  C25.54,37.066,25.819,37.346,26.159,37.346z M28.229,17.372c-0.363,0-0.662,0.3-0.668,0.667l-0.273,13.657l0.273,4.959  c0.006,0.361,0.305,0.66,0.668,0.66s0.662-0.299,0.668-0.664v0.004l0.297-4.959l-0.297-13.658  C28.892,17.671,28.593,17.372,28.229,17.372z M30.124,37.35c0.016,0.002,16.699,0.01,16.807,0.01c3.35,0,6.064-2.715,6.064-6.064  s-2.715-6.062-6.064-6.062c-0.83,0-1.623,0.168-2.344,0.469c-0.484-5.465-5.064-9.75-10.654-9.75c-1.369,0-2.702,0.27-3.879,0.726  c-0.459,0.177-0.58,0.358-0.584,0.713v19.244C29.474,37.004,29.762,37.312,30.124,37.35z"
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);

/***/ }),

/***/ "./src/components/testimonials/lower-quote.js":
/*!****************************************************!*\
  !*** ./src/components/testimonials/lower-quote.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumUpperQuote)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component
} = wp.element;
class PremiumUpperQuote extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size || this.props.color !== nextProps.color || this.props.opacity !== nextProps.opacity;
  }

  render() {
    const {
      size,
      color,
      opacity
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      style: {
        width: size + "em",
        opacity: opacity / 100
      },
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "quote-right",
      class: "svg-inline--fa fa-quote-right fa-w-16",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: `${color}`,
      d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
    }));
  }

}

/***/ }),

/***/ "./src/components/testimonials/upper-quote.js":
/*!****************************************************!*\
  !*** ./src/components/testimonials/upper-quote.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumLowerQuote)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component
} = wp.element;
class PremiumLowerQuote extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size || this.props.color !== nextProps.color || this.props.opacity !== nextProps.opacity;
  }

  render() {
    const {
      size,
      color,
      opacity
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      style: {
        width: size + "em",
        opacity: opacity / 100
      },
      "aria-hidden": "true",
      "data-prefix": "fas",
      "data-icon": "quote-left",
      class: "svg-inline--fa fa-quote-left fa-w-16",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: `${color}`,
      d: "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
    }));
  }

}

/***/ }),

/***/ "./src/components/typography/fontList.js":
/*!***********************************************!*\
  !*** ./src/components/typography/fontList.js ***!
  \***********************************************/
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
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);

const {
  useEffect,
  useRef,
  useState
} = wp.element;


const {
  __
} = wp.i18n;
let loadedFonts = [];

const loadGoogleFonts = font_families => {
  if (font_families.length === 0) return;
  loadedFonts = [...loadedFonts, ...font_families.map(_ref => {
    let {
      family
    } = _ref;
    return family;
  })];

  if (font_families.length > 0) {
    webfontloader__WEBPACK_IMPORTED_MODULE_2___default().load({ ...(font_families.length > 0 ? {
        google: {
          families: font_families
        }
      } : {}),
      classes: false,
      text: 'abcdefghijklmnopqrstuvwxyz'
    });
  }
};

const SingleFont = _ref2 => {
  let {
    family,
    onPickFamily,
    value
  } = _ref2;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => onPickFamily(family.value),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('premium-typography-single-font', {
      active: family.value === value
    }),
    key: family[0]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "premium-font-name"
  }, family.label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: {
      fontFamily: family.value
    },
    className: "premium-font-preview"
  }, "Simply dummy text"));
};

const FontsList = _ref3 => {
  let {
    value,
    onPickFamily,
    linearFontsList
  } = _ref3;
  const listRef = useRef(null);
  const [scrollTimer, setScrollTimer] = useState(null);
  useEffect(() => {
    if (value.family && listRef.current) {
      listRef.current.querySelector('.active').scrollIntoView();
    }
  }, []);
  let systemFonts = linearFontsList.filter(family => family.google === false);
  let googleFonts = linearFontsList.filter(family => family.google === true);

  const onScroll = () => {
    scrollTimer && clearTimeout(scrollTimer);
    setScrollTimer(setTimeout(() => {
      if (!listRef.current) {
        return;
      }

      let overscanStartIndex = Math.ceil(listRef.current.scrollTop / 85);
      const perPage = 25;
      const startingPage = Math.ceil((overscanStartIndex + 1) / perPage);
      const pageItems = [...Array(perPage)].map((_, i) => (startingPage - 1) * perPage + i).map(index => googleFonts[index].value).filter(s => !!s);
      loadGoogleFonts(pageItems);
    }, 10));
  };

  useEffect(() => {
    onScroll();
  }, [linearFontsList]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ref: listRef,
    className: "premium-typography-fonts",
    onScroll: onScroll,
    style: {
      width: `100%`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, systemFonts.map(family => SingleFont({
    family,
    onPickFamily,
    value
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-fonts-source`
  }, __('Google  Fonts', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, googleFonts.map(family => SingleFont({
    family,
    onPickFamily,
    value
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontsList);

/***/ }),

/***/ "./src/components/typography/fontLoader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontLoader.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_0__);
if (googlefonts === undefined) {
  var googlefonts = [];
}

const {
  Component
} = wp.element;

const statuses = {
  inactive: "inactive",
  active: "active",
  loading: "loading"
};

const noop = () => {};

class WebfontLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: undefined,
      mounted: false
    };

    this.handleLoading = () => {
      this.setState({
        status: statuses.loading
      });
    };

    this.addFont = font => {
      if (!googlefonts.includes(font)) {
        googlefonts.push(font);
      }
    };

    this.handleActive = () => {
      this.setState({
        status: statuses.active
      });
    };

    this.handleInactive = () => {
      this.setState({
        status: statuses.inactive
      });
    };

    this.loadFonts = () => {
      if (this.state.mounted) {
        if (!googlefonts.includes(this.props.config.google.families[0])) {
          webfontloader__WEBPACK_IMPORTED_MODULE_0___default().load({ ...this.props.config,
            loading: this.handleLoading,
            active: this.handleActive,
            inactive: this.handleInactive,
            context: frames["editor-canvas"]
          });
          this.addFont(this.props.config.google.families[0]);
        }
      }
    };
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
    this.loadFonts();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      onStatus,
      config
    } = this.props;

    if (prevState.status !== this.state.status) {
      onStatus(this.state.status);
    }

    if (prevProps.config !== config) {
      this.loadFonts();
    }
  }

  componentWillUnmount() {
    this.setState({
      mounted: false
    });
  }

  render() {
    const {
      children
    } = this.props;
    return children || null;
  }

}

WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebfontLoader);

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

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colord": () => (/* binding */ j),
/* harmony export */   "colord": () => (/* binding */ w),
/* harmony export */   "extend": () => (/* binding */ k),
/* harmony export */   "getFormat": () => (/* binding */ I),
/* harmony export */   "random": () => (/* binding */ E)
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/pbg.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* reexport module object */ _components_index__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "helpers": () => (/* reexport module object */ _components_HelperFunction__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "settings": () => (/* reexport module object */ _assets_js_settings__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index */ "./src/components/index.js");
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HelperFunction */ "./src/components/HelperFunction.js");
/* harmony import */ var _assets_js_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/js/settings */ "./assets/js/settings.js");






})();

window.pbg = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=pbg.js.map