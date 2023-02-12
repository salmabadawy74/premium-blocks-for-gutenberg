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
  let customSVG = "";
  switch (svg) {
    // Flex Row
    case "flex-column-start":
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
    case "flex-column-end":
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
    case "flex-column-center":
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
    case "flex-column-strech":
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
    case "flex-column-space-between":
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
    case "flex-column-space-around":
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
    case "flex-column-space-evenly":
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
    case "flex-row-start":
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
    case "flex-row-end":
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
    case "flex-row-center":
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
    case "flex-row-strech":
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
    case "flex-row-space-between":
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
    case "flex-row-space-around":
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
    case "flex-row-space-evenly":
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
    case "flex-direction-row":
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
    case "flex-direction-column":
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
    case "flex-direction-row-reverse":
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
    case "flex-direction-column-reverse":
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
    case "flex-wrap":
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
    case "flex-no-wrap":
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
    case "button-fill":
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "325",
        height: "245",
        viewBox: "0 0 325 245",
        fill: "none"
      }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z",
        fill: "white"
      }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
        x: "58",
        y: "101",
        width: "209.786",
        height: "70",
        fill: "#B6B6B6"
      }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M134.2 146H125.775V129.325H133.975C135.458 129.325 136.617 129.733 137.45 130.55C138.3 131.35 138.725 132.358 138.725 133.575C138.725 134.575 138.442 135.425 137.875 136.125C137.325 136.808 136.642 137.233 135.825 137.4C136.725 137.533 137.483 138 138.1 138.8C138.733 139.583 139.05 140.483 139.05 141.5C139.05 142.833 138.617 143.917 137.75 144.75C136.9 145.583 135.717 146 134.2 146ZM133.375 136.225C134.108 136.225 134.683 136.025 135.1 135.625C135.517 135.225 135.725 134.708 135.725 134.075C135.725 133.425 135.517 132.9 135.1 132.5C134.683 132.1 134.108 131.9 133.375 131.9H128.7V136.225H133.375ZM133.5 143.425C134.3 143.425 134.925 143.225 135.375 142.825C135.825 142.408 136.05 141.833 136.05 141.1C136.05 140.45 135.825 139.908 135.375 139.475C134.925 139.025 134.3 138.8 133.5 138.8H128.7V143.425H133.5ZM152.686 146H150.061V144.4C148.928 145.667 147.503 146.3 145.786 146.3C143.203 146.3 141.911 145.025 141.911 142.475V133.925H144.536V141.525C144.536 142.408 144.744 143.042 145.161 143.425C145.578 143.792 146.178 143.975 146.961 143.975C147.594 143.975 148.186 143.825 148.736 143.525C149.286 143.225 149.728 142.85 150.061 142.4V133.925H152.686V146ZM159.721 146.3C158.704 146.3 157.929 146.033 157.396 145.5C156.879 144.967 156.621 144.2 156.621 143.2V136.225H154.621V133.925H156.621V130.625H159.246V133.925H161.696V136.225H159.246V142.55C159.246 142.983 159.346 143.333 159.546 143.6C159.746 143.85 160.029 143.975 160.396 143.975C160.929 143.975 161.321 143.833 161.571 143.55L162.196 145.525C161.646 146.042 160.821 146.3 159.721 146.3ZM167.704 146.3C166.687 146.3 165.912 146.033 165.379 145.5C164.862 144.967 164.604 144.2 164.604 143.2V136.225H162.604V133.925H164.604V130.625H167.229V133.925H169.679V136.225H167.229V142.55C167.229 142.983 167.329 143.333 167.529 143.6C167.729 143.85 168.012 143.975 168.379 143.975C168.912 143.975 169.304 143.833 169.554 143.55L170.179 145.525C169.629 146.042 168.804 146.3 167.704 146.3ZM177.512 146.3C175.646 146.3 174.146 145.692 173.012 144.475C171.879 143.242 171.312 141.733 171.312 139.95C171.312 138.167 171.879 136.667 173.012 135.45C174.146 134.233 175.646 133.625 177.512 133.625C179.396 133.625 180.904 134.233 182.037 135.45C183.171 136.667 183.737 138.167 183.737 139.95C183.737 141.75 183.171 143.258 182.037 144.475C180.904 145.692 179.396 146.3 177.512 146.3ZM177.512 143.975C178.596 143.975 179.446 143.592 180.062 142.825C180.696 142.042 181.012 141.083 181.012 139.95C181.012 138.833 180.696 137.892 180.062 137.125C179.446 136.342 178.596 135.95 177.512 135.95C176.446 135.95 175.596 136.342 174.962 137.125C174.346 137.892 174.037 138.833 174.037 139.95C174.037 141.083 174.346 142.042 174.962 142.825C175.596 143.592 176.446 143.975 177.512 143.975ZM197.168 146H194.543V138.45C194.543 136.783 193.735 135.95 192.118 135.95C191.485 135.95 190.893 136.108 190.343 136.425C189.793 136.742 189.352 137.125 189.018 137.575V146H186.393V133.925H189.018V135.575C189.468 135.042 190.068 134.583 190.818 134.2C191.568 133.817 192.385 133.625 193.268 133.625C194.552 133.625 195.518 133.958 196.168 134.625C196.835 135.292 197.168 136.25 197.168 137.5V146Z",
        fill: "white"
      }), " ");
      break;
    case "button-outline":
      customSVG = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "325",
        height: "245",
        viewBox: "0 0 325 245",
        fill: "none"
      }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z",
        fill: "white"
      }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
        x: "59",
        y: "102",
        width: "207.786",
        height: "68",
        rx: "34",
        stroke: "#959595",
        "stroke-width": "2",
        fill: "none"
      }), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M134.2 143H125.775V126.325H133.975C135.458 126.325 136.617 126.733 137.45 127.55C138.3 128.35 138.725 129.358 138.725 130.575C138.725 131.575 138.442 132.425 137.875 133.125C137.325 133.808 136.642 134.233 135.825 134.4C136.725 134.533 137.483 135 138.1 135.8C138.733 136.583 139.05 137.483 139.05 138.5C139.05 139.833 138.617 140.917 137.75 141.75C136.9 142.583 135.717 143 134.2 143ZM133.375 133.225C134.108 133.225 134.683 133.025 135.1 132.625C135.517 132.225 135.725 131.708 135.725 131.075C135.725 130.425 135.517 129.9 135.1 129.5C134.683 129.1 134.108 128.9 133.375 128.9H128.7V133.225H133.375ZM133.5 140.425C134.3 140.425 134.925 140.225 135.375 139.825C135.825 139.408 136.05 138.833 136.05 138.1C136.05 137.45 135.825 136.908 135.375 136.475C134.925 136.025 134.3 135.8 133.5 135.8H128.7V140.425H133.5ZM152.686 143H150.061V141.4C148.928 142.667 147.503 143.3 145.786 143.3C143.203 143.3 141.911 142.025 141.911 139.475V130.925H144.536V138.525C144.536 139.408 144.744 140.042 145.161 140.425C145.578 140.792 146.178 140.975 146.961 140.975C147.594 140.975 148.186 140.825 148.736 140.525C149.286 140.225 149.728 139.85 150.061 139.4V130.925H152.686V143ZM159.721 143.3C158.704 143.3 157.929 143.033 157.396 142.5C156.879 141.967 156.621 141.2 156.621 140.2V133.225H154.621V130.925H156.621V127.625H159.246V130.925H161.696V133.225H159.246V139.55C159.246 139.983 159.346 140.333 159.546 140.6C159.746 140.85 160.029 140.975 160.396 140.975C160.929 140.975 161.321 140.833 161.571 140.55L162.196 142.525C161.646 143.042 160.821 143.3 159.721 143.3ZM167.704 143.3C166.687 143.3 165.912 143.033 165.379 142.5C164.862 141.967 164.604 141.2 164.604 140.2V133.225H162.604V130.925H164.604V127.625H167.229V130.925H169.679V133.225H167.229V139.55C167.229 139.983 167.329 140.333 167.529 140.6C167.729 140.85 168.012 140.975 168.379 140.975C168.912 140.975 169.304 140.833 169.554 140.55L170.179 142.525C169.629 143.042 168.804 143.3 167.704 143.3ZM177.512 143.3C175.646 143.3 174.146 142.692 173.012 141.475C171.879 140.242 171.312 138.733 171.312 136.95C171.312 135.167 171.879 133.667 173.012 132.45C174.146 131.233 175.646 130.625 177.512 130.625C179.396 130.625 180.904 131.233 182.037 132.45C183.171 133.667 183.737 135.167 183.737 136.95C183.737 138.75 183.171 140.258 182.037 141.475C180.904 142.692 179.396 143.3 177.512 143.3ZM177.512 140.975C178.596 140.975 179.446 140.592 180.062 139.825C180.696 139.042 181.012 138.083 181.012 136.95C181.012 135.833 180.696 134.892 180.062 134.125C179.446 133.342 178.596 132.95 177.512 132.95C176.446 132.95 175.596 133.342 174.962 134.125C174.346 134.892 174.037 135.833 174.037 136.95C174.037 138.083 174.346 139.042 174.962 139.825C175.596 140.592 176.446 140.975 177.512 140.975ZM197.168 143H194.543V135.45C194.543 133.783 193.735 132.95 192.118 132.95C191.485 132.95 190.893 133.108 190.343 133.425C189.793 133.742 189.352 134.125 189.018 134.575V143H186.393V130.925H189.018V132.575C189.468 132.042 190.068 131.583 190.818 131.2C191.568 130.817 192.385 130.625 193.268 130.625C194.552 130.625 195.518 130.958 196.168 131.625C196.835 132.292 197.168 133.25 197.168 134.5V143Z",
        fill: "#959595"
      }), " ");
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
/* harmony export */   "section": () => (/* binding */ section),
/* harmony export */   "testimonials": () => (/* binding */ testimonials),
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
  section,
  testimonials,
  [`bullet-list`]: bulletList,
  [`content-switcher`]: contentSwitcher,
  [`count-up`]: countUp,
  [`dual-heading`]: dualHeading,
  [`fancy-text`]: fancyText,
  [`icon-box`]: iconBox,
  [`image-separator`]: imageSeparator,
  [`pricing-table`]: pricingTable,
  [`video-box`]: videoBox
} = PremiumBlocksSettings.activeBlocks;

//Plugin Config Keys
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
    backgroundColor: backgroundType === "transparent" ? "transparent" : backgroundColor,
    backgroundImage: gradientValue(value),
    backgroundRepeat: backgroundRepeat,
    backgroundPosition: backgroundPosition,
    backgroundSize: backgroundSize,
    backgroundAttachment: fixed ? "fixed" : "unset"
  };
};
const borderCss = (value, device) => {
  return {
    borderStyle: value?.borderType,
    borderTopWidth: value?.borderWidth?.[device]?.top,
    borderRightWidth: value?.borderWidth?.[device]?.right,
    borderBottomWidth: value?.borderWidth?.[device]?.bottom,
    borderLeftWidth: value?.borderWidth?.[device]?.left,
    borderColor: value?.borderColor,
    borderTopLeftRadius: `${value?.borderRadius?.[device]?.top}px`,
    borderTopRightRadius: `${value?.borderRadius?.[device]?.right}px`,
    borderBottomLeftRadius: `${value?.borderRadius?.[device]?.bottom}px`,
    borderBottomRightRadius: `${value?.borderRadius?.[device]?.left}px`
  };
};
const paddingCss = (value, device) => {
  return {
    paddingTop: value?.[device]?.top && `${value?.[device]?.top}${value?.unit}`,
    paddingRight: value?.[device]?.right && `${value?.[device]?.right}${value?.unit}`,
    paddingBottom: value?.[device]?.bottom && `${value?.[device]?.bottom}${value?.unit}`,
    paddingLeft: value?.[device]?.left && `${value?.[device]?.left}${value?.unit}`
  };
};
const marginCss = (value, device) => {
  return {
    marginTop: value?.[device]?.top && `${value?.[device]?.top}${value?.unit}`,
    marginRight: value?.[device]?.right && `${value?.[device]?.right}${value?.unit}`,
    marginBottom: value?.[device]?.bottom && `${value?.[device]?.bottom}${value?.unit}`,
    marginLeft: value?.[device]?.left && `${value?.[device]?.left}${value?.unit}`
  };
};
const typographyCss = (value, device) => {
  return {
    fontSize: value?.fontSize[device] && `${value?.fontSize[device]}${value?.fontSize?.unit}`,
    fontStyle: value?.fontStyle,
    fontFamily: value?.fontFamily,
    fontWeight: value?.fontWeight,
    letterSpacing: value?.letterSpacing[device] && `${value?.letterSpacing[device]}px`,
    textDecoration: value?.textDecoration,
    textTransform: value?.textTransform,
    lineHeight: value?.lineHeight[device] && `${value?.lineHeight[device]}px`
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


const {
  SelectControl,
  Button,
  ButtonGroup,
  Tooltip,
  TextControl
} = wp.components;

// import { FontAwesomeEnabled } from "../../assets/js/settings";



const {
  __
} = wp.i18n;
const {
  Fragment,
  useState,
  useEffect
} = wp.element;


function PremiumBackgroundControl(_ref) {
  let {
    value,
    onChange,
    backgroundVedio = false,
    backgroundPresets = "",
    label
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
  value = value ? {
    ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const onChangeBackground = (item, value) => {
    const updatedState = {
      ...state
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
  useEffect(() => {
    if (backgroundPresets === "transparent") {
      onChangeBackground("backgroundType", "transparent");
    }
  }, [backgroundPresets]);
  const gradTypes = [{
    key: "linear",
    name: __("Linear", "premium-blocks-for-gutenberg")
  }, {
    key: "radial",
    name: __("Radial", "premium-blocks-for-gutenberg")
  }];
  const bgType = [{
    key: "transparent",
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Premium_Blocks",
      "data-name": "Premium Blocks",
      xmlns: "http://www.w3.org/2000/svg",
      width: "14.5",
      height: "14.5",
      viewBox: "0 0 21.5 21.5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "transparent-color"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Transparent_Color",
      "data-name": "Transparent Color"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      class: "cls-1",
      d: "M12.5,1.75A10.75,10.75,0,1,0,23.25,12.5,10.76,10.76,0,0,0,12.5,1.75Zm0,1.5a9.22,9.22,0,0,1,6,2.2l-13,13A9.25,9.25,0,0,1,12.5,3.25Zm0,18.5a9.25,9.25,0,0,1-6-2.2l13-13a9.24,9.24,0,0,1-7,15.23Z",
      transform: "translate(-1.75 -1.75)"
    }))),
    tooltip: __("Transparent", "premium-blocks-for-gutenberg")
  }, {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-size-settings-container  premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "premium-beside-btn-group"
  }, label ? label : __("Background Type", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-background-type__wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "premium-button-size-type-options",
    "aria-label": __("Type", "premium-blocks-for-gutenberg")
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
  value = value ? {
    ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const onChangeShadow = (item, value) => {
    const updatedState = {
      ...state
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

/***/ "./src/components/Presets.js":
/*!***********************************!*\
  !*** ./src/components/Presets.js ***!
  \***********************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

const {
  SelectControl
} = wp.components;
const {
  __
} = wp.i18n;
const {
  useState
} = wp.element;


const PBGPresets = props => {
  const {
    setAttributes,
    presets,
    presetInputType,
    label,
    className
  } = props;
  const [selectedPresetState, setPreset] = useState("");
  const updatePresets = selectedPreset => {
    setPreset(selectedPreset);
    if (presets) {
      presets.map(preset => {
        if (preset.value) {
          if ("default" !== selectedPreset && "default" === preset.value && preset.attributes) {
            preset.attributes.map(presetItem => {
              setAttributes({
                [presetItem.label]: presetItem.value
              });
              return presetItem;
            });
          }
          if (preset.value && preset.value === selectedPreset && preset.attributes) {
            presets[1]?.attributes?.map(presetItem => {
              setAttributes({
                [presetItem.label]: presets[0]?.defaultAttributes[presetItem.label]?.default
              });
              return presetItem;
            });
            preset.attributes.map(presetItem => {
              setAttributes({
                [presetItem.label]: presetItem.value
              });
              return presetItem;
            });
          }
        }
        return preset;
      });
    }
  };
  const presetRadioImageOptions = presets.map(preset => {
    if (!preset.value) {
      return "";
    }
    const key = preset.value;
    const checked = selectedPresetState === key ? true : false;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-presets__wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      key: key,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("premium-presets-radio-input", {
        checked: selectedPresetState === key
      }),
      type: "radio",
      value: key,
      checked: checked,
      onChange: () => updatePresets(key),
      onClick: () => updatePresets(key),
      style: {
        display: "none"
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: key,
      className: "premium-presets-radio-input-label",
      dangerouslySetInnerHTML: {
        // eslint-disable-line
        __html: preset.icon
      },
      style: {
        position: "relative",
        display: "inline-block"
      },
      onClick: () => updatePresets(key)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium_label__wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium_presets__label"
    }, preset.label)));
  });
  const presetDropdown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    className: "premium-presets-dropdown",
    onChange: updatePresets,
    options: presets,
    label: label
  });
  const presetRadioImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-presets-radio-image-wrap",
    style: {
      display: "grid",
      gridColumnGap: "16px",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridRowGap: "14px"
    }
  }, presetRadioImageOptions));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, "premium-presets-main-wrap", "components-base-control")
  }, "dropdown" === presetInputType && presetDropdown, "radioImage" === presetInputType && presetRadioImage);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(PBGPresets));

/***/ }),

/***/ "./src/components/RangeControl/advanced-range-control.js":
/*!***************************************************************!*\
  !*** ./src/components/RangeControl/advanced-range-control.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdvancedRangeControl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.css */ "./src/components/RangeControl/slider.css");





const {
  createSliderWithTooltip
} = rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"];
const Range = createSliderWithTooltip(rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"].Range);
const {
  Handle
} = rc_slider__WEBPACK_IMPORTED_MODULE_3__["default"];
const handle = props => {
  const {
    value,
    dragging,
    index,
    ...restProps
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(rc_slider__WEBPACK_IMPORTED_MODULE_3__.SliderTooltip, {
    prefixCls: "rc-slider-tooltip",
    overlay: `${value} %`,
    visible: dragging,
    placement: "top",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Handle, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value
  }, restProps)));
};
function AdvancedRangeControl(_ref) {
  let {
    label,
    labels = [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("From", 'premium-blocks-for-gutenberg'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("To", 'premium-blocks-for-gutenberg')],
    onChange,
    step = 1,
    max = 100,
    min = 0,
    value,
    unit = 'px'
  } = _ref;
  const format = {
    to: function (value) {
      return Number(value);
    },
    from: function (value) {
      return Number(value);
    }
  };
  const tooltipsFormat = {
    to: function (value) {
      return `${value}${unit}`;
    },
    from: function (value) {
      return `${value}${unit}`;
    }
  };
  const changeHandler = newValue => {
    onChange({
      ...value,
      from: newValue[0],
      to: newValue[1]
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-blocks-advanced-range-control premium-blocks__base-control`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("header", null, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "premium-slider-title-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "premium-control-title"
  }, label)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-slider-labels-wrap`,
    style: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'space-between',
      color: "#c2cbd2",
      margin: "5px 0"
    }
  }, labels.length > 0 && labels.map(label => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "premium-control-title"
    }, label);
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "scales"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "scale"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Range, {
    value: [value.from, value.to],
    onChange: changeHandler,
    min: min,
    max: max,
    step: step,
    handle: handle,
    tipFormatter: val => `${val}${value.unit}`
  }));
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
    value = "",
    step = 1,
    max = 100,
    min = 0,
    beforeIcon = "",
    help = "",
    defaultValue
  } = _ref;
  const onChangInput = event => {
    if (event.target.value === "") {
      onChange(undefined);
      return;
    }
    const newValue = Number(event.target.value);
    if (newValue === "") {
      onChange(undefined);
      return;
    }
    if (min < -0.1) {
      if (newValue > max) {
        onChange(max);
      } else if (newValue < min && newValue !== "-") {
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
    className: "wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `input-field-wrapper active`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    className: "premium-range-value-input",
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
    unit = "",
    showUnit = false,
    units = ["px", "em", "rem"],
    defaultValue
  } = _ref;
  let defaultValues = {
    Desktop: "",
    Tablet: "",
    Mobile: "",
    unit: "px"
  };
  value = value ? {
    ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const [deviceType, setDeviceType] = useState("Desktop");
  let customSetPreviewDeviceType = device => {
    setDeviceType(device);
  };
  if (wp.data.select("core/edit-post")) {
    const theDevice = useSelect(select => {
      const {
        __experimentalGetPreviewDeviceType = null
      } = select("core/edit-post");
      return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : "Desktop";
    }, []);
    if (theDevice !== deviceType) {
      setDeviceType(theDevice);
    }
    const {
      __experimentalSetPreviewDeviceType = null
    } = useDispatch("core/edit-post");
    customSetPreviewDeviceType = device => {
      __experimentalSetPreviewDeviceType(device);
      setDeviceType(device);
    };
  }
  const devices = ["Desktop", "Tablet", "Mobile"];
  const onChangeValue = (value, device) => {
    const updatedState = {
      ...state
    };
    updatedState[device] = value;
    setState(updatedState);
    onChange(updatedState);
  };
  const onChangeUnit = value => {
    const updatedState = {
      ...state
    };
    updatedState["unit"] = value;
    setState(updatedState);
    onChange(updatedState);
  };
  const output = {};
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: "mobile",
    value: state["Mobile"],
    onChange: size => onChangeValue(size, "Mobile"),
    min: min,
    max: state["unit"] === "%" || state["unit"] === "vw" ? 100 : max,
    step: state["unit"] === "em" || state["unit"] === "rem" ? 0.1 : 1,
    showUnit: false,
    defaultValue: defaultValues["Mobile"]
  });
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: "tablet",
    value: state["Tablet"],
    onChange: size => onChangeValue(size, "Tablet"),
    min: min,
    max: state["unit"] === "%" || state["unit"] === "vw" ? 100 : max,
    step: state["unit"] === "em" || state["unit"] === "rem" ? 0.1 : 1,
    showUnit: false,
    defaultValue: defaultValues["Tablet"]
  });
  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: "desktop",
    value: state["Desktop"],
    onChange: size => onChangeValue(size, "Desktop"),
    min: min,
    max: state["unit"] === "%" || state["unit"] === "vw" ? 100 : max,
    step: state["unit"] === "em" || state["unit"] === "rem" ? 0.1 : 1,
    showUnit: false,
    defaultValue: defaultValues["Desktop"]
  });
  return [onChange && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-blocks-range-control premium-blocks__base-control`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`,
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: " premium-control-title"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: newDevice => setDeviceType(newDevice)
  })), showUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_1__["default"], {
    units: units,
    activeUnit: state["unit"],
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
    device = "device",
    onChange,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = "",
    onChangeUnit,
    showUnit = false,
    units = ["px", "em", "rem"],
    className = "",
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
    value: undefined !== value ? value : "",
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
/* harmony export */   "AdvancedRangeControl": () => (/* reexport safe */ _RangeControl_advanced_range_control__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   "Animation": () => (/* reexport safe */ _Animation__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "DefaultImage": () => (/* reexport safe */ _default_image__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "Icons": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "InsideTab": () => (/* reexport safe */ _InsideTab__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "InsideTabs": () => (/* reexport safe */ _InsideTabs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "InspectorTab": () => (/* reexport safe */ _inspectorTab__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "InspectorTabs": () => (/* reexport safe */ _inspectorTabs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "MultiButtonsControl": () => (/* reexport safe */ _responsive_radio__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "PBGPresets": () => (/* reexport safe */ _Presets__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   "PremiumBackgroundControl": () => (/* reexport safe */ _Premium_Background_Control__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "PremiumBorder": () => (/* reexport safe */ _premium_border__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "PremiumFilters": () => (/* reexport safe */ _premium_filters__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   "PremiumLowerQuote": () => (/* reexport safe */ _testimonials_lower_quote__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   "PremiumMediaUpload": () => (/* reexport safe */ _premium_media_upload__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   "PremiumResponsiveTabs": () => (/* reexport safe */ _premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "PremiumShadow": () => (/* reexport safe */ _PremiumShadow__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PremiumTypo": () => (/* reexport safe */ _premium_typo__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "PremiumUploadSVG": () => (/* reexport safe */ _premium_upload_svg__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   "PremiumUpperQuote": () => (/* reexport safe */ _testimonials_upper_quote__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   "PremiumVariation": () => (/* reexport safe */ _premium_variation__WEBPACK_IMPORTED_MODULE_30__["default"]),
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
/* harmony import */ var _Presets__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Presets */ "./src/components/Presets.js");
/* harmony import */ var _premium_upload_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./premium-upload-svg */ "./src/components/premium-upload-svg.js");
/* harmony import */ var _premium_variation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./premium-variation */ "./src/components/premium-variation.js");
/* harmony import */ var _RangeControl_advanced_range_control__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./RangeControl/advanced-range-control */ "./src/components/RangeControl/advanced-range-control.js");

































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
  });

  // component did mount
  useEffect(() => {
    // sticky tabs menu
    const container = document.querySelector('.premium-inspector-tabs-container');
    if (container) {
      observer.observe(container);
    }

    // component will unmount
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
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "premium-placeholder",
        role: "button",
        tabindex: "0"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 512 376",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 0v376h512V0H0zm480 344H32V32h448v312z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
        cx: "409.1",
        cy: "102.9",
        r: "40.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"
      }))))));
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
  value = value ? {
    ...defaultValues,
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
    const inialState = {
      ...borderValue
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
    disabled: "none" === borderType || "" === borderType,
    onClick: () => onChangeBorder("borderType", 'none')
  }))), ("none" != borderType || "" !== borderType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Border Width "),
    value: borderWidth,
    responsive: true,
    showUnits: false,
    onChange: value => onChangeBorder('borderWidth', {
      ...value
    })
  }), ("none" != borderType || "" !== borderType) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("Border Color", 'premium-blocks-for-gutenberg'),
    colorValue: borderColor,
    colorDefault: '',
    onColorChange: value => onChangeBorder('borderColor', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Border Radius"),
    value: borderRadius,
    responsive: true,
    showUnits: false,
    onChange: value => onChangeBorder('borderRadius', {
      ...value
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
  value = value ? {
    ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const onChangeFilter = (item, value) => {
    const updatedState = {
      ...state
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
const fonts = {
  ABeeZee: {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Abel: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Abhaya Libre": {
    v: ["regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "sinhala", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Abril Fatface": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Aclonica: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Acme: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Actor: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Adamina: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Advent Pro": {
    v: ["100", "200", "300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "greek", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Aguafina Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Akronim: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Aladin: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Aldrich: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Alef: {
    v: ["regular", "700"],
    subset: ["hebrew", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Alegreya: {
    v: ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Alegreya SC": {
    v: ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Alegreya Sans": {
    v: ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Alegreya Sans SC": {
    v: ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Alex Brush": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Alfa Slab One": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Alice: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Alike: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Alike Angular": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Allan: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Allerta: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Allerta Stencil": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Allura: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Almendra: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Almendra Display": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Almendra SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Amarante: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Amaranth: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Amatic SC": {
    v: ["regular", "700"],
    subset: ["cyrillic", "latin-ext", "hebrew", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Amethysta: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Amiko: {
    v: ["regular", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "600", "700"],
    i: ["normal"]
  },
  Amiri: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Amita: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Anaheim: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Andada: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Andika: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Angkor: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Annie Use Your Telescope": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Anonymous Pro": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "latin-ext", "greek", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Antic: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Antic Didone": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Antic Slab": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Anton: {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Arapey: {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Arbutus: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Arbutus Slab": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Architects Daughter": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Archivo: {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Archivo Black": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Archivo Narrow": {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Aref Ruqaa": {
    v: ["regular", "700"],
    subset: ["arabic", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Arima Madurai": {
    v: ["100", "200", "300", "regular", "500", "700", "800", "900"],
    subset: ["latin-ext", "tamil", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "700", "800", "900"],
    i: ["normal"]
  },
  Arimo: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Arizonia: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Armata: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Arsenal: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Artifika: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Arvo: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Arya: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Asap: {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Asap Condensed": {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  Asar: {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Asset: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Assistant: {
    v: ["200", "300", "regular", "600", "700", "800"],
    subset: ["hebrew", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800"],
    i: ["normal"]
  },
  Astloch: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Asul: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Athiti: {
    v: ["200", "300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Atma: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "bengali", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Atomic Age": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Aubrey: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Audiowide: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Autour One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Average: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Average Sans": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Averia Gruesa Libre": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Averia Libre": {
    v: ["300", "300italic", "regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal", "italic"]
  },
  "Averia Sans Libre": {
    v: ["300", "300italic", "regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal", "italic"]
  },
  "Averia Serif Libre": {
    v: ["300", "300italic", "regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal", "italic"]
  },
  "Bad Script": {
    v: ["regular"],
    subset: ["cyrillic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bahiana: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Baloo: {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Bhai": {
    v: ["regular"],
    subset: ["latin-ext", "gujarati", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Bhaijaan": {
    v: ["regular"],
    subset: ["latin-ext", "arabic", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Bhaina": {
    v: ["regular"],
    subset: ["latin-ext", "oriya", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Chettan": {
    v: ["regular"],
    subset: ["malayalam", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Da": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "bengali", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Paaji": {
    v: ["regular"],
    subset: ["latin-ext", "gurmukhi", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Tamma": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin", "kannada"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Tammudu": {
    v: ["regular"],
    subset: ["latin-ext", "telugu", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Baloo Thambi": {
    v: ["regular"],
    subset: ["latin-ext", "tamil", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Balthazar: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bangers: {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Barlow: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Barlow Condensed": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Barlow Semi Condensed": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  Barrio: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Basic: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Battambang: {
    v: ["regular", "700"],
    subset: ["khmer"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Baumans: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bayon: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Belgrano: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bellefair: {
    v: ["regular"],
    subset: ["latin-ext", "hebrew", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Belleza: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  BenchNine: {
    v: ["300", "regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  Bentham: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Berkshire Swash": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bevan: {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bigelow Rules": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bigshot One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bilbo: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bilbo Swash Caps": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  BioRhyme: {
    v: ["200", "300", "regular", "700", "800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "200", "300", "400", "700", "800"],
    i: ["normal"]
  },
  "BioRhyme Expanded": {
    v: ["200", "300", "regular", "700", "800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "200", "300", "400", "700", "800"],
    i: ["normal"]
  },
  Biryani: {
    v: ["200", "300", "regular", "600", "700", "800", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Bitter: {
    v: ["regular", "italic", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Black And White Picture": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Black Han Sans": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Black Ops One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bokor: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Bonbon: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Boogaloo: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bowlby One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bowlby One SC": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Brawler: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bree Serif": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bubblegum Sans": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bubbler One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Buda: {
    v: ["300"],
    subset: ["latin"],
    weight: ["Default", "300"],
    i: []
  },
  Buenard: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Bungee: {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bungee Hairline": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bungee Inline": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bungee Outline": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Bungee Shade": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Butcherman: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Butterfly Kids": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cabin: {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Cabin Condensed": {
    v: ["regular", "500", "600", "700"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Cabin Sketch": {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Caesar Dressing": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cagliostro: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cairo: {
    v: ["200", "300", "regular", "600", "700", "900"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "900"],
    i: ["normal"]
  },
  Calligraffitti: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cambay: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Cambo: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Candal: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cantarell: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Cantata One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Cantora One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Capriola: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cardo: {
    v: ["regular", "italic", "700"],
    subset: ["greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Carme: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Carrois Gothic": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Carrois Gothic SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Carter One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Catamaran: {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "tamil", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Caudex: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Caveat: {
    v: ["regular", "700"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Caveat Brush": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Cedarville Cursive": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Ceviche One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Changa: {
    v: ["200", "300", "regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Changa One": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Chango: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Chathura: {
    v: ["100", "300", "regular", "700", "800"],
    subset: ["telugu", "latin"],
    weight: ["Default", "100", "300", "400", "700", "800"],
    i: ["normal"]
  },
  "Chau Philomene One": {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Chela One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Chelsea Market": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Chenla: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Cherry Cream Soda": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Cherry Swash": {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Chewy: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Chicle: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Chivo: {
    v: ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "700", "900"],
    i: ["normal", "italic"]
  },
  Chonburi: {
    v: ["regular"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cinzel: {
    v: ["regular", "700", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal"]
  },
  "Cinzel Decorative": {
    v: ["regular", "700", "900"],
    subset: ["latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal"]
  },
  "Clicker Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Coda: {
    v: ["regular", "800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "800"],
    i: ["normal"]
  },
  "Coda Caption": {
    v: ["800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "800"],
    i: []
  },
  Codystar: {
    v: ["300", "regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400"],
    i: ["normal"]
  },
  Coiny: {
    v: ["regular"],
    subset: ["latin-ext", "tamil", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Combo: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Comfortaa: {
    v: ["300", "regular", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  "Coming Soon": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Concert One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Condiment: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Content: {
    v: ["regular", "700"],
    subset: ["khmer"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Contrail One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Convergence: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cookie: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Copse: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Corben: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Cormorant: {
    v: ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Cormorant Garamond": {
    v: ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Cormorant Infant": {
    v: ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Cormorant SC": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Cormorant Unicase": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Cormorant Upright": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Courgette: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cousine: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Coustard: {
    v: ["regular", "900"],
    subset: ["latin"],
    weight: ["Default", "400", "900"],
    i: ["normal"]
  },
  "Covered By Your Grace": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Crafty Girls": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Creepster: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Crete Round": {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Crimson Text": {
    v: ["regular", "italic", "600", "600italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "600", "700"],
    i: ["normal", "italic"]
  },
  "Croissant One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Crushed: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cuprum: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Cute Font": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Cutive: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Cutive Mono": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Damion: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Dancing Script": {
    v: ["regular", "700"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Dangrek: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "David Libre": {
    v: ["regular", "500", "700"],
    subset: ["latin-ext", "hebrew", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "700"],
    i: ["normal"]
  },
  "Dawning of a New Day": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Days One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Dekko: {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Delius: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Delius Swash Caps": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Delius Unicase": {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Della Respira": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Denk One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Devonshire: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Dhurjati: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Didact Gothic": {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Diplomata: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Diplomata SC": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Do Hyeon": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Dokdo: {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Domine: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Donegal One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Doppio One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Dorsa: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Dosis: {
    v: ["200", "300", "regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Dr Sugiyama": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Duru Sans": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Dynalight: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "EB Garamond": {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800"],
    i: ["normal", "italic"]
  },
  "Eagle Lake": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "East Sea Dokdo": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Eater: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Economica: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Eczar: {
    v: ["regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "El Messiri": {
    v: ["regular", "500", "600", "700"],
    subset: ["cyrillic", "arabic", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Electrolize: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Elsie: {
    v: ["regular", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "900"],
    i: ["normal"]
  },
  "Elsie Swash Caps": {
    v: ["regular", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "900"],
    i: ["normal"]
  },
  "Emblema One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Emilys Candy": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Encode Sans": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Encode Sans Condensed": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Encode Sans Expanded": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Encode Sans Semi Condensed": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Encode Sans Semi Expanded": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Engagement: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Englebert: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Enriqueta: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Erica One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Esteban: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Euphoria Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ewert: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Exo: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Exo 2": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Expletus Sans": {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Fanwood Text": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Farsan: {
    v: ["regular"],
    subset: ["latin-ext", "gujarati", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Fascinate: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fascinate Inline": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Faster One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Fasthand: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fauna One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Faustina: {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  Federant: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Federo: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Felipa: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Fenix: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Finger Paint": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fira Mono": {
    v: ["regular", "500", "700"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400", "500", "700"],
    i: ["normal"]
  },
  "Fira Sans": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Fira Sans Condensed": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Fira Sans Extra Condensed": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Fjalla One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fjord One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Flamenco: {
    v: ["300", "regular"],
    subset: ["latin"],
    weight: ["Default", "300", "400"],
    i: ["normal"]
  },
  Flavors: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Fondamento: {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Fontdiner Swanky": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Forum: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Francois One": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Frank Ruhl Libre": {
    v: ["300", "regular", "500", "700", "900"],
    subset: ["latin-ext", "hebrew", "latin"],
    weight: ["Default", "300", "400", "500", "700", "900"],
    i: ["normal"]
  },
  "Freckle Face": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fredericka the Great": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fredoka One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Freehand: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Fresca: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Frijole: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Fruktur: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Fugaz One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "GFS Didot": {
    v: ["regular"],
    subset: ["greek"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "GFS Neohellenic": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["greek"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Gabriela: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Gaegu: {
    v: ["300", "regular", "700"],
    subset: ["korean", "latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  Gafata: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Galada: {
    v: ["regular"],
    subset: ["bengali", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Galdeano: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Galindo: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Gamja Flower": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Gentium Basic": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Gentium Book Basic": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Geo: {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Geostar: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Geostar Fill": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Germania One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Gidugu: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Gilda Display": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Give You Glory": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Glass Antiqua": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Glegoo: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Gloria Hallelujah": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Goblin One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Gochi Hand": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Gorditas: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Gothic A1": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["korean", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Goudy Bookletter 1911": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Graduate: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Grand Hotel": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Gravitas One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Great Vibes": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Griffy: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Gruppo: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Gudea: {
    v: ["regular", "italic", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Gugi: {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Gurajada: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Habibi: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Halant: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Hammersmith One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Hanalei: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Hanalei Fill": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Handlee: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Hanuman: {
    v: ["regular", "700"],
    subset: ["khmer"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Happy Monkey": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Harmattan: {
    v: ["regular"],
    subset: ["arabic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Headland One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Heebo: {
    v: ["100", "300", "regular", "500", "700", "800", "900"],
    subset: ["hebrew", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "800", "900"],
    i: ["normal"]
  },
  "Henny Penny": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Herr Von Muellerhoff": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Hi Melody": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Hind: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Hind Guntur": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "telugu", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Hind Madurai": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "tamil", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Hind Siliguri": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "bengali", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Hind Vadodara": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Holtwood One SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Homemade Apple": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Homenaje: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "IBM Plex Mono": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "IBM Plex Sans": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "IBM Plex Sans Condensed": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "IBM Plex Serif": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "IM Fell DW Pica": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "IM Fell DW Pica SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "IM Fell Double Pica": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "IM Fell Double Pica SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "IM Fell English": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "IM Fell English SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "IM Fell French Canon": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "IM Fell French Canon SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "IM Fell Great Primer": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "IM Fell Great Primer SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Iceberg: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Iceland: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Imprima: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Inconsolata: {
    v: ["regular", "700"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Inder: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Indie Flower": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Inika: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Inknut Antiqua": {
    v: ["300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Irish Grover": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Istok Web": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Italiana: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Italianno: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Itim: {
    v: ["regular"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Jacques Francois": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Jacques Francois Shadow": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Jaldi: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Jim Nightshade": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Jockey One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Jolly Lodger": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Jomhuria: {
    v: ["regular"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Josefin Sans": {
    v: ["100", "100italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "300", "400", "600", "700"],
    i: ["normal", "italic"]
  },
  "Josefin Slab": {
    v: ["100", "100italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "100", "300", "400", "600", "700"],
    i: ["normal", "italic"]
  },
  "Joti One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Jua: {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Judson: {
    v: ["regular", "italic", "700"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Julee: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Julius Sans One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Junge: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Jura: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Just Another Hand": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Just Me Again Down Here": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kadwa: {
    v: ["regular", "700"],
    subset: ["devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Kalam: {
    v: ["300", "regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  Kameron: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Kanit: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  Kantumruy: {
    v: ["300", "regular", "700"],
    subset: ["khmer"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  Karla: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Karma: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Katibeh: {
    v: ["regular"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kaushan Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kavivanar: {
    v: ["regular"],
    subset: ["latin-ext", "tamil", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kavoon: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kdam Thmor": {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Keania One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kelly Slab": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kenia: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Khand: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Khmer: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Khula: {
    v: ["300", "regular", "600", "700", "800"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "600", "700", "800"],
    i: ["normal"]
  },
  "Kirang Haerang": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kite One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Knewave: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kosugi: {
    v: ["regular"],
    subset: ["cyrillic", "japanese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kosugi Maru": {
    v: ["regular"],
    subset: ["cyrillic", "japanese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kotta One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Koulen: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kranky: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kreon: {
    v: ["300", "regular", "700"],
    subset: ["latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  Kristi: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Krona One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kumar One": {
    v: ["regular"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Kumar One Outline": {
    v: ["regular"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Kurale: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "La Belle Aurore": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Laila: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Lakki Reddy": {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lalezar: {
    v: ["regular"],
    subset: ["latin-ext", "arabic", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lancelot: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lateef: {
    v: ["regular"],
    subset: ["arabic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lato: {
    v: ["100", "100italic", "300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "300", "400", "700", "900"],
    i: ["normal", "italic"]
  },
  "League Script": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Leckerli One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ledger: {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lekton: {
    v: ["regular", "italic", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Lemon: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lemonada: {
    v: ["300", "regular", "600", "700"],
    subset: ["latin-ext", "arabic", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "600", "700"],
    i: ["normal"]
  },
  "Libre Barcode 128": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Libre Barcode 128 Text": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Libre Barcode 39": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Libre Barcode 39 Extended": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Libre Barcode 39 Extended Text": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Libre Barcode 39 Text": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Libre Baskerville": {
    v: ["regular", "italic", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Libre Franklin": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Life Savers": {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Lilita One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Lily Script One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Limelight: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Linden Hill": {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Lobster: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Lobster Two": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Londrina Outline": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Londrina Shadow": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Londrina Sketch": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Londrina Solid": {
    v: ["100", "300", "regular", "900"],
    subset: ["latin"],
    weight: ["Default", "100", "300", "400", "900"],
    i: ["normal"]
  },
  Lora: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Love Ya Like A Sister": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Loved by the King": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Lovers Quarrel": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Luckiest Guy": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Lusitana: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Lustria: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "M PLUS 1p": {
    v: ["100", "300", "regular", "500", "700", "800", "900"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "japanese", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "800", "900"],
    i: ["normal"]
  },
  "M PLUS Rounded 1c": {
    v: ["100", "300", "regular", "500", "700", "800", "900"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "japanese", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "800", "900"],
    i: ["normal"]
  },
  Macondo: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Macondo Swash Caps": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mada: {
    v: ["200", "300", "regular", "500", "600", "700", "900"],
    subset: ["arabic", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "900"],
    i: ["normal"]
  },
  Magra: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Maiden Orange": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Maitree: {
    v: ["200", "300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Mako: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mallanna: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mandali: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Manuale: {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  Marcellus: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Marcellus SC": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Marck Script": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Margarine: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Markazi Text": {
    v: ["regular", "500", "600", "700"],
    subset: ["latin-ext", "arabic", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Marko One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Marmelad: {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Martel: {
    v: ["200", "300", "regular", "600", "700", "800", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Martel Sans": {
    v: ["200", "300", "regular", "600", "700", "800", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Marvel: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Mate: {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Mate SC": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Maven Pro": {
    v: ["regular", "500", "700", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "700", "900"],
    i: ["normal"]
  },
  McLaren: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Meddon: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  MedievalSharp: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Medula One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Meera Inimai": {
    v: ["regular"],
    subset: ["tamil", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Megrim: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Meie Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Merienda: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Merienda One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Merriweather: {
    v: ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "700", "900"],
    i: ["normal", "italic"]
  },
  "Merriweather Sans": {
    v: ["300", "300italic", "regular", "italic", "700", "700italic", "800", "800italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "700", "800"],
    i: ["normal", "italic"]
  },
  Metal: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Metal Mania": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Metamorphous: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Metrophobic: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Michroma: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Milonga: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Miltonian: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Miltonian Tattoo": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mina: {
    v: ["regular", "700"],
    subset: ["latin-ext", "bengali", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Miniver: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Miriam Libre": {
    v: ["regular", "700"],
    subset: ["latin-ext", "hebrew", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Mirza: {
    v: ["regular", "500", "600", "700"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Miss Fajardose": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mitr: {
    v: ["200", "300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Modak: {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Modern Antiqua": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mogra: {
    v: ["regular"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Molengo: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Molle: {
    v: ["italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default"],
    i: ["italic"]
  },
  Monda: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Monofett: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Monoton: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Monsieur La Doulaise": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Montaga: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Montez: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Montserrat: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Montserrat Alternates": {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Montserrat Subrayada": {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Moul: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Moulpali: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Mountains of Christmas": {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Mouse Memoirs": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Mr Bedfort": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Mr Dafoe": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Mr De Haviland": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Mrs Saint Delafield": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Mrs Sheppards": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Mukta: {
    v: ["200", "300", "regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Mukta Mahee": {
    v: ["200", "300", "regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "gurmukhi", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Mukta Malar": {
    v: ["200", "300", "regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "tamil", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Mukta Vaani": {
    v: ["200", "300", "regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  Muli: {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Mystery Quest": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  NTR: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nanum Brush Script": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nanum Gothic": {
    v: ["regular", "700", "800"],
    subset: ["korean", "latin"],
    weight: ["Default", "400", "700", "800"],
    i: ["normal"]
  },
  "Nanum Gothic Coding": {
    v: ["regular", "700"],
    subset: ["korean", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Nanum Myeongjo": {
    v: ["regular", "700", "800"],
    subset: ["korean", "latin"],
    weight: ["Default", "400", "700", "800"],
    i: ["normal"]
  },
  "Nanum Pen Script": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Neucha: {
    v: ["regular"],
    subset: ["cyrillic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Neuton: {
    v: ["200", "300", "regular", "italic", "700", "800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "200", "300", "400", "700", "800"],
    i: ["normal", "italic"]
  },
  "New Rocker": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "News Cycle": {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Niconne: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nixie One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Nobile: {
    v: ["regular", "italic", "500", "500italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "500", "700"],
    i: ["normal", "italic"]
  },
  Nokora: {
    v: ["regular", "700"],
    subset: ["khmer"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Norican: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Nosifer: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nothing You Could Do": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Noticia Text": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Noto Sans": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "devanagari", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Noto Sans JP": {
    v: ["100", "300", "regular", "500", "700", "900"],
    subset: ["japanese", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "900"],
    i: ["normal"]
  },
  "Noto Sans KR": {
    v: ["100", "300", "regular", "500", "700", "900"],
    subset: ["korean", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "900"],
    i: ["normal"]
  },
  "Noto Serif": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Noto Serif JP": {
    v: ["200", "300", "regular", "500", "600", "700", "900"],
    subset: ["japanese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "900"],
    i: ["normal"]
  },
  "Noto Serif KR": {
    v: ["200", "300", "regular", "500", "600", "700", "900"],
    subset: ["korean", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "900"],
    i: ["normal"]
  },
  "Nova Cut": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Flat": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Mono": {
    v: ["regular"],
    subset: ["greek", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Oval": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Round": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Script": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Slim": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Nova Square": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Numans: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Nunito: {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Nunito Sans": {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Odor Mean Chey": {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Offside: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Old Standard TT": {
    v: ["regular", "italic", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Oldenburg: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Oleo Script": {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Oleo Script Swash Caps": {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Open Sans": {
    v: ["300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "600", "700", "800"],
    i: ["normal", "italic"]
  },
  "Open Sans Condensed": {
    v: ["300", "300italic", "700"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "300", "700"],
    i: []
  },
  Oranienbaum: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Orbitron: {
    v: ["regular", "500", "700", "900"],
    subset: ["latin"],
    weight: ["Default", "400", "500", "700", "900"],
    i: ["normal"]
  },
  Oregano: {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Orienta: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Original Surfer": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Oswald: {
    v: ["200", "300", "regular", "500", "600", "700"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Over the Rainbow": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Overlock: {
    v: ["regular", "italic", "700", "700italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal", "italic"]
  },
  "Overlock SC": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Overpass: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Overpass Mono": {
    v: ["300", "regular", "600", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "600", "700"],
    i: ["normal"]
  },
  Ovo: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Oxygen: {
    v: ["300", "regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "700"],
    i: ["normal"]
  },
  "Oxygen Mono": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "PT Mono": {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "PT Sans": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "PT Sans Caption": {
    v: ["regular", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "PT Sans Narrow": {
    v: ["regular", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "PT Serif": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "PT Serif Caption": {
    v: ["regular", "italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Pacifico: {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Padauk: {
    v: ["regular", "700"],
    subset: ["myanmar", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Palanquin: {
    v: ["100", "200", "300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Palanquin Dark": {
    v: ["regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Pangolin: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Paprika: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Parisienne: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Passero One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Passion One": {
    v: ["regular", "700", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal"]
  },
  "Pathway Gothic One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Patrick Hand": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Patrick Hand SC": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Pattaya: {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Patua One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Pavanam: {
    v: ["regular"],
    subset: ["latin-ext", "tamil", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Paytone One": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Peddana: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Peralta: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Permanent Marker": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Petit Formal Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Petrona: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Philosopher: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Piedra: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Pinyon Script": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Pirata One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Plaster: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Play: {
    v: ["regular", "700"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Playball: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Playfair Display": {
    v: ["regular", "italic", "700", "700italic", "900", "900italic"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal", "italic"]
  },
  "Playfair Display SC": {
    v: ["regular", "italic", "700", "700italic", "900", "900italic"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal", "italic"]
  },
  Podkova: {
    v: ["regular", "500", "600", "700", "800"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  "Poiret One": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Poller One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Poly: {
    v: ["regular", "italic"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Pompiere: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Pontano Sans": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Poor Story": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Poppins: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Port Lligat Sans": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Port Lligat Slab": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Pragati Narrow": {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Prata: {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Preahvihear: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Press Start 2P": {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Pridi: {
    v: ["200", "300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  "Princess Sofia": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Prociono: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Prompt: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Prosto One": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Proza Libre": {
    v: ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800"],
    i: ["normal", "italic"]
  },
  Puritan: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Purple Purse": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Quando: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Quantico: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Quattrocento: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Quattrocento Sans": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Questrial: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Quicksand: {
    v: ["300", "regular", "500", "700"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "300", "400", "500", "700"],
    i: ["normal"]
  },
  Quintessential: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Qwigley: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Racing Sans One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Radley: {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Plus Jakarta Sans": {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Rajdhani: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Rakkas: {
    v: ["regular"],
    subset: ["latin-ext", "arabic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Raleway: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  "Raleway Dots": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ramabhadra: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ramaraja: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Rambla: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Rammetto One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ranchers: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Rancho: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ranga: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Rasa: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Rationale: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Ravi Prakash": {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Redressed: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Reem Kufi": {
    v: ["regular"],
    subset: ["arabic", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Reenie Beanie": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Revalia: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Rhodium Libre": {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ribeye: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Ribeye Marrow": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Righteous: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Risque: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Rochester: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Rock Salt": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Rokkitt: {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Romanesco: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Ropa Sans": {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Rosario: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Rosarivo: {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Rouge Script": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Rozha One": {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Rubik: {
    v: ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "900", "900italic"],
    subset: ["cyrillic", "latin-ext", "hebrew", "latin"],
    weight: ["Default", "300", "400", "500", "700", "900"],
    i: ["normal", "italic"]
  },
  "Rubik Mono One": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ruda: {
    v: ["regular", "700", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal"]
  },
  Rufina: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Ruge Boogie": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ruluko: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Rum Raisin": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Ruslan Display": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Russo One": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ruthie: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Rye: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sacramento: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sahitya: {
    v: ["regular", "700"],
    subset: ["devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Sail: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Saira: {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Saira Condensed": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Saira Extra Condensed": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Saira Semi Condensed": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Salsa: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sanchez: {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Sancreek: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sansita: {
    v: ["regular", "italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  Sarala: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Sarina: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sarpanch: {
    v: ["regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  Satisfy: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sawarabi Gothic": {
    v: ["regular"],
    subset: ["cyrillic", "japanese", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sawarabi Mincho": {
    v: ["regular"],
    subset: ["japanese", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Scada: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Scheherazade: {
    v: ["regular", "700"],
    subset: ["arabic", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Schoolbell: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Scope One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Seaweed Script": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Secular One": {
    v: ["regular"],
    subset: ["latin-ext", "hebrew", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sedgwick Ave": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sedgwick Ave Display": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sevillana: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Seymour One": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Shadows Into Light": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Shadows Into Light Two": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Shanti: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Share: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Share Tech": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Share Tech Mono": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Shojumaru: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Short Stack": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Shrikhand: {
    v: ["regular"],
    subset: ["latin-ext", "gujarati", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Siemreap: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sigmar One": {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Signika: {
    v: ["300", "regular", "600", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "600", "700"],
    i: ["normal"]
  },
  "Signika Negative": {
    v: ["300", "regular", "600", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "600", "700"],
    i: ["normal"]
  },
  Simonetta: {
    v: ["regular", "italic", "900", "900italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "900"],
    i: ["normal", "italic"]
  },
  Sintony: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Sirin Stencil": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Six Caps": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Skranji: {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Slabo 13px": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Slabo 27px": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Slackey: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Smokum: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Smythe: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sniglet: {
    v: ["regular", "800"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "800"],
    i: ["normal"]
  },
  Snippet: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Snowburst One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sofadi One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sofia: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Song Myung": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sonsie One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sorts Mill Goudy": {
    v: ["regular", "italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "Source Code Pro": {
    v: ["200", "300", "regular", "500", "600", "700", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "900"],
    i: ["normal"]
  },
  "Source Sans Pro": {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "900"],
    i: ["normal", "italic"]
  },
  "Source Serif Pro": {
    v: ["regular", "600", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "600", "700"],
    i: ["normal"]
  },
  "Space Mono": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Special Elite": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Spectral: {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal", "italic"]
  },
  "Spectral SC": {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal", "italic"]
  },
  "Spicy Rice": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Spinnaker: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Spirax: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Squada One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sree Krushnadevaraya": {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sriracha: {
    v: ["regular"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Stalemate: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Stalinist One": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Stardos Stencil": {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  "Stint Ultra Condensed": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Stint Ultra Expanded": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Stoke: {
    v: ["300", "regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400"],
    i: ["normal"]
  },
  Strait: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Stylish: {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Sue Ellen Francisco": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Suez One": {
    v: ["regular"],
    subset: ["latin-ext", "hebrew", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sumana: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Sunflower: {
    v: ["300", "500", "700"],
    subset: ["korean", "latin"],
    weight: ["Default", "300", "500", "700"],
    i: []
  },
  Sunshiney: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Supermercado One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Sura: {
    v: ["regular", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Suranna: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Suravaram: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Suwannaphum: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Swanky and Moo Moo": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Syncopate: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Tajawal: {
    v: ["200", "300", "regular", "500", "700", "800", "900"],
    subset: ["arabic", "latin"],
    weight: ["Default", "200", "300", "400", "500", "700", "800", "900"],
    i: ["normal"]
  },
  Tangerine: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Taprom: {
    v: ["regular"],
    subset: ["khmer"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Tauri: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Taviraj: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  Teko: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Telex: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Tenali Ramakrishna": {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Tenor Sans": {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Text Me One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "The Girl Next Door": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Tienne: {
    v: ["regular", "700", "900"],
    subset: ["latin"],
    weight: ["Default", "400", "700", "900"],
    i: ["normal"]
  },
  Tillana: {
    v: ["regular", "500", "600", "700", "800"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "500", "600", "700", "800"],
    i: ["normal"]
  },
  Timmana: {
    v: ["regular"],
    subset: ["telugu", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Tinos: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "hebrew", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  "Titan One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Titillium Web": {
    v: ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "200", "300", "400", "600", "700", "900"],
    i: ["normal", "italic"]
  },
  "Trade Winds": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Trirong: {
    v: ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"],
    subset: ["latin-ext", "thai", "vietnamese", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  },
  Trocchi: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Trochut: {
    v: ["regular", "italic", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Trykker: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Tulpen One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Ubuntu: {
    v: ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "300", "400", "500", "700"],
    i: ["normal", "italic"]
  },
  "Ubuntu Condensed": {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Ubuntu Mono": {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["cyrillic", "cyrillic-ext", "greek-ext", "latin-ext", "greek", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Ultra: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Uncial Antiqua": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Underdog: {
    v: ["regular"],
    subset: ["cyrillic", "latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Unica One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  UnifrakturCook: {
    v: ["700"],
    subset: ["latin"],
    weight: ["Default", "700"],
    i: []
  },
  UnifrakturMaguntia: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Unkempt: {
    v: ["regular", "700"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Unlock: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Unna: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  VT323: {
    v: ["regular"],
    subset: ["latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Vampiro One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Varela: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Varela Round": {
    v: ["regular"],
    subset: ["latin-ext", "hebrew", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Vast Shadow": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Vesper Libre": {
    v: ["regular", "500", "700", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400", "500", "700", "900"],
    i: ["normal"]
  },
  Vibur: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Vidaloka: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Viga: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Voces: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Volkhov: {
    v: ["regular", "italic", "700", "700italic"],
    subset: ["latin"],
    weight: ["Default", "400", "700"],
    i: ["normal", "italic"]
  },
  Vollkorn: {
    v: ["regular", "italic", "600", "600italic", "700", "700italic", "900", "900italic"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "greek", "vietnamese", "latin"],
    weight: ["Default", "400", "600", "700", "900"],
    i: ["normal", "italic"]
  },
  "Vollkorn SC": {
    v: ["regular", "600", "700", "900"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400", "600", "700", "900"],
    i: ["normal"]
  },
  Voltaire: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Waiting for the Sunrise": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Wallpoet: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Walter Turncoat": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Warnes: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Wellfleet: {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Wendy One": {
    v: ["regular"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Wire One": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Work Sans": {
    v: ["100", "200", "300", "regular", "500", "600", "700", "800", "900"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal"]
  },
  "Yanone Kaffeesatz": {
    v: ["200", "300", "regular", "700"],
    subset: ["cyrillic", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "200", "300", "400", "700"],
    i: ["normal"]
  },
  Yantramanav: {
    v: ["100", "300", "regular", "500", "700", "900"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "100", "300", "400", "500", "700", "900"],
    i: ["normal"]
  },
  "Yatra One": {
    v: ["regular"],
    subset: ["latin-ext", "devanagari", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Yellowtail: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Yeon Sung": {
    v: ["regular"],
    subset: ["korean", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Yeseva One": {
    v: ["regular"],
    subset: ["cyrillic", "cyrillic-ext", "latin-ext", "vietnamese", "latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Yesteryear: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  Yrsa: {
    v: ["300", "regular", "500", "600", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal"]
  },
  Zeyada: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal"]
  },
  "Zilla Slab": {
    v: ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "300", "400", "500", "600", "700"],
    i: ["normal", "italic"]
  },
  "Zilla Slab Highlight": {
    v: ["regular", "700"],
    subset: ["latin-ext", "latin"],
    weight: ["Default", "400", "700"],
    i: ["normal"]
  },
  Sora: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800"],
    i: ["normal", "bold"]
  },
  "DM Sans": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400", "500", "700"],
    i: ["normal", "bold", "italic"]
  },
  "DM Serif Display": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  "DM Serif Text": {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "400"],
    i: ["normal", "italic"]
  },
  Inter: {
    v: ["regular"],
    subset: ["latin"],
    weight: ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    i: ["normal", "italic"]
  }
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
    title,
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
      }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "premium-placeholder",
        role: "button",
        tabindex: "0"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        viewBox: "0 0 512 376",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M0 0v376h512V0H0zm480 344H32V32h448v312z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
        cx: "409.1",
        cy: "102.9",
        r: "40.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"
      })))))));
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
  value = value ? {
    ...defaultValues,
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
    let updateState = {
      ...state
    };
    let deviceUpdateState = responsive ? {
      ...updateState[device]
    } : {
      ...updateState
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
    let updateState = {
      ...state
    };
    let deviceUpdateState = responsive ? {
      ...updateState[device]
    } : {
      ...updateState
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
    let updateState = {
      ...state
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeControl/responsive-range-control */ "./src/components/RangeControl/responsive-range-control.js");
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "./src/components/Color Control/ColorComponent.js");



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
  renderShapeOptions = () => {
    const {
      value
    } = this.props;
    let shapes = ['clouds-flat', 'clouds-opacity', 'paper-torn', 'pointy-wave', 'rocky-mountain', 'single-wave', 'slope-opacity', 'slope', 'waves3-opacity', 'drip', 'turning-slope', 'hill-wave', 'hill', 'line-wave', 'swirl', 'wavy-opacity', 'zigzag-shark'];
    if (value.style) {
      shapes = shapes.filter(item => item.toLowerCase().search(value.style.toLowerCase()) == -1);
      shapes = [value.style, ...shapes];
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-shape-picker-options"
    }, shapes.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-shape-picker-option`,
      onClick: () => this.setSettings('style', item),
      dangerouslySetInnerHTML: {
        __html: PremiumBlocksSettings.shapes[item]
      },
      style: value.style == item ? {
        fill: value.color
      } : {}
    })));
  };
  render() {
    const {
      value
    } = this.props;
    const {
      showShapeOptions
    } = this.state;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-field-shape premium-field"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-field-child"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-field premium-shape-picker-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dropdown, {
      className: `premium-field-child premium-shape-picker ${value.style ? 'has-value' : ''}`,
      contentClassName: "premium-shape-picker-content",
      position: "bottom center",
      renderToggle: _ref => {
        let {
          isOpen,
          onToggle
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "shape-divider-options"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          isPrimary: true,
          onClick: onToggle,
          "aria-expanded": isOpen
        }, value.style ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-field-shape-value",
          dangerouslySetInnerHTML: {
            __html: PremiumBlocksSettings.shapes[value.style]
          }
        }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-field-shape-placeholder"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Select Shape"))), value.style && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "premium-btn-reset-wrap"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "premium-reset-btn ",
          onClick: () => this.setSettings('style', '')
        })));
      },
      renderContent: () => this.renderShapeOptions()
    })), value.openShape == 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __('Color', 'premium-blocks-for-gutenberg'),
      colorValue: value && value.color,
      onColorChange: val => this.setSettings('color', val)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Flip Divider', 'premium-blocks-for-gutenberg'),
      checked: value.flipShapeDivider,
      onChange: newValue => this.setSettings('flipShapeDivider', newValue)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Invert', 'premium-blocks-for-gutenberg'),
      checked: value.invertShapeDivider,
      onChange: newValue => this.setSettings('invertShapeDivider', newValue)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
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
      let initialState = {
        ...value
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

/***/ "./src/components/premium-upload-svg.js":
/*!**********************************************!*\
  !*** ./src/components/premium-upload-svg.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PremiumUploadSVG)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  useEffect,
  Fragment,
  useState
} = wp.element;
const {
  Tooltip,
  Dashicon
} = wp.components;
function PremiumUploadSVG(props) {
  const {
    svgUrl,
    onRemoveSVG = () => {},
    uploadSvg = () => {}
  } = props;
  const [state, setstate] = useState(null);
  useEffect(() => {
    if (svgUrl) {
      const data = addSVGAttributes(svgUrl);
      setstate(data);
    }
  }, [svgUrl]);
  const createElementFromHTMLString = htmlString => {
    const parentElement = document.getElementById('premium-icon-svg');
    var new_str = htmlString.replace(/''/g, '');
    parentElement.innerHTML = new_str;
    return parentElement;
  };
  const addSVGAttributes = function (svgHTML) {
    let attributesToAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let attributesToRemove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    const svgNode = createElementFromHTMLString(svgHTML);
    if (!svgNode) {
      return '';
    }
    Object.keys(attributesToAdd).forEach(key => {
      svgNode.setAttribute(key, attributesToAdd[key]);
    });
    attributesToRemove.forEach(key => {
      svgNode.removeAttribute(key);
    });
    return svgNode.outerHTML;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, svgUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-image-media"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "premium-icon-svg",
    dangerouslySetInnerHTML: {
      __html: svgUrl
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-image-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: __("Edit")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "premium-image-button",
    "aria-label": __("Edit"),
    onClick: uploadSvg,
    role: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-edit"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
    text: __("Remove")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "premium-image-button",
    "aria-label": __("Remove"),
    onClick: onRemoveSVG,
    role: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-trash"
  }))))), !svgUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: uploadSvg,
    isSmall: true,
    isPrimary: true,
    className: "premium-placeholder-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "premium-placeholder",
    role: "button",
    tabindex: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 512 376",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0v376h512V0H0zm480 344H32V32h448v312z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "409.1",
    cy: "102.9",
    r: "40.9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"
  })))));
}

/***/ }),

/***/ "./src/components/premium-variation.js":
/*!*********************************************!*\
  !*** ./src/components/premium-variation.js ***!
  \*********************************************/
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

/**
 * External dependencies
 */

const {
  __
} = wp.i18n;
const {
  Placeholder,
  Button
} = wp.components;

// Create our own variation picker
const PremiumVariation = props => {
  const {
    icon,
    label = __('Choose variation'),
    // Dev note: no text domain here since this will use WP's translation.
    instructions = __('Select a variation to start with.'),
    // Dev note: no text domain here since this will use WP's translation.
    variations,
    onSelect,
    allowSkip,
    value = {
      name: ''
    }
  } = props;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-block-variation-picker', {
    'has-many-variations': variations.length > 4
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-variation-picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Placeholder, {
    icon: icon,
    label: label,
    instructions: instructions,
    className: classes
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "block-editor-block-variation-picker__variations",
    role: "list",
    "aria-label": __('Block variations') // Dev note: no text domain here since this will use WP's translation.
  }, variations.map(variation => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: variation.name
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    key: variation.name,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("premium-variation-picker-radio-input", {
      checked: value.name === variation.name
    }),
    type: "radio",
    value: variation.name,
    checked: value.name === variation.name ? true : false,
    onChange: () => onSelect(variation),
    onClick: () => onSelect(variation),
    style: {
      display: "none"
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: "secondary",
    icon: variation.pickerIcon || variation.icon,
    iconSize: 48,
    isSecondary: true,
    onClick: () => onSelect(variation),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-editor-block-variation-picker__variation', {
      'is-premium': variation.isPremium
    }),
    label: variation.description || variation.pickerTitle || variation.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-editor-block-variation-picker__variation-label",
    role: "presentation"
  }, variation.pickerTitle || variation.title)))), allowSkip && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-block-variation-picker__skip"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
    variant: "link",
    onClick: () => onSelect()
  }, __('Skip') /* Dev note: no text domain here since this will use WP's translation. */))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PremiumVariation);

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
  const [state, setState] = useState(value ? {
    ...defaultValue,
    ...value
  } : defaultValue);
  const [device, setDevice] = useState("Desktop");
  const output = {};
  const handleChange = (val, dev) => {
    const updatedState = {
      ...state
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
    d: "M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7\r c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "41.5",
    cy: "16.4",
    r: "2.9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9\r h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3\r s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6\r c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
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
    webfontloader__WEBPACK_IMPORTED_MODULE_2___default().load({
      ...(font_families.length > 0 ? {
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
          webfontloader__WEBPACK_IMPORTED_MODULE_0___default().load({
            ...this.props.config,
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
	var nativeCodeString = '[native code]';

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
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
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

/***/ "./node_modules/dom-align/dist-web/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/dist-web/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alignElement": () => (/* binding */ alignElement),
/* harmony export */   "alignPoint": () => (/* binding */ alignPoint),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
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

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};
function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}
function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}
function css(el, name, v) {
  var value = v;
  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = Math.floor(box.left);
  y = Math.floor(box.top);

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w) {
  return getScroll(w);
}
function getScrollTop(w) {
  return getScroll(w, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';
function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== 'left') {
    presetH = 999;
  }
  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}
var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };
  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}
each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */
var getParent = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }
  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = getParent$1(element);
  // 修复元素位于 document.documentElement 下导致崩溃问题
  parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  }

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;
  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }
  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }
  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}
function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}
function convertOffset(str, offsetLen) {
  var n;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}
function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  // 当前节点可以被放置的显示区域
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = getRegion(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = utils.merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;

      // 重置对应部分的翻转逻辑
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }
      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points: points
  }), pointInView);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alignElement);

//# sourceMappingURL=index.js.map


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

/***/ "./src/components/RangeControl/slider.css":
/*!************************************************!*\
  !*** ./src/components/RangeControl/slider.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/dist-web/index.js");
/* harmony import */ var rc_util_es_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/isEqual */ "./node_modules/rc-util/es/isEqual.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Dom/isVisible */ "./node_modules/rc-util/es/Dom/isVisible.js");
/* harmony import */ var rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/hooks/useLayoutEffect */ "./node_modules/rc-util/es/hooks/useLayoutEffect.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useBuffer */ "./node_modules/rc-align/es/hooks/useBuffer.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");



/**
 * Removed props:
 *  - childrenProps
 */










function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_7___default().useRef({});
  /** Popup node ref */

  var nodeRef = react__WEBPACK_IMPORTED_MODULE_7___default().useRef();
  var childNode = react__WEBPACK_IMPORTED_MODULE_7___default().Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react__WEBPACK_IMPORTED_MODULE_7___default().useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = (0,_hooks_useBuffer__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestAlign = _forceAlignPropsRef$c.align,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;
    var source = nodeRef.current;

    if (!latestDisabled && latestTarget && source) {
      var _result;

      var _element = getElement(latestTarget);

      var _point = getPoint(latestTarget);

      cacheRef.current.element = _element;
      cacheRef.current.point = _point;
      cacheRef.current.align = latestAlign; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (_element && (0,rc_util_es_Dom_isVisible__WEBPACK_IMPORTED_MODULE_4__["default"])(_element)) {
        _result = (0,dom_align__WEBPACK_IMPORTED_MODULE_10__.alignElement)(source, _element, latestAlign);
      } else if (_point) {
        _result = (0,dom_align__WEBPACK_IMPORTED_MODULE_10__.alignPoint)(source, _point, latestAlign);
      }

      (0,_util__WEBPACK_IMPORTED_MODULE_9__.restoreFocus)(activeElement, source);

      if (latestOnAlign && _result) {
        latestOnAlign(source, _result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Handle props change


  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default().useState(),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      element = _React$useState2[0],
      setElement = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default().useState(),
      _React$useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      point = _React$useState4[0],
      setPoint = _React$useState4[1];

  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    setElement(getElement(target));
    setPoint(getPoint(target));
  });
  react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(function () {
    if (cacheRef.current.element !== element || !(0,_util__WEBPACK_IMPORTED_MODULE_9__.isSamePoint)(cacheRef.current.point, point) || !(0,rc_util_es_isEqual__WEBPACK_IMPORTED_MODULE_2__["default"])(cacheRef.current.align, align)) {
      _forceAlign();
    }
  }); // Watch popup element resize

  react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(function () {
    var cancelFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__.monitorResize)(nodeRef.current, _forceAlign);
    return cancelFn;
  }, [nodeRef.current]); // Watch target element resize

  react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(function () {
    var cancelFn = (0,_util__WEBPACK_IMPORTED_MODULE_9__.monitorResize)(element, _forceAlign);
    return cancelFn;
  }, [element]); // Listen for disabled change

  react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(function () {
    if (monitorWindowResize) {
      var cancelFn = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_3__["default"])(window, 'resize', _forceAlign);
      return cancelFn.remove;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(function () {
    return function () {
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react__WEBPACK_IMPORTED_MODULE_7___default().useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().isValidElement(childNode)) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().cloneElement(childNode, {
      ref: (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__.composeRef)(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RcAlign = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().forwardRef(Align);
RcAlign.displayName = 'Align';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RcAlign);

/***/ }),

/***/ "./node_modules/rc-align/es/hooks/useBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-align/es/hooks/useBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (callback, buffer) {
  var calledRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(false);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    cancelTrigger();

    if (!calledRef.current || force === true) {
      if (callback(force) === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./node_modules/rc-align/es/Align.js");
// export this package's api

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSamePoint": () => (/* binding */ isSamePoint),
/* harmony export */   "monitorResize": () => (/* binding */ monitorResize),
/* harmony export */   "restoreFocus": () => (/* binding */ restoreFocus)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && (0,rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_2__["default"])(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"](onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotion.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotion.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "genCSSMotion": () => (/* binding */ genCSSMotion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useStatus */ "./node_modules/rc-motion/es/hooks/useStatus.js");
/* harmony import */ var _DomWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DomWrapper */ "./node_modules/rc-motion/es/DomWrapper.js");
/* harmony import */ var _hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hooks/useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");





/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */











/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;

  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();

    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_5__["default"])(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = (0,_hooks_useStatus__WEBPACK_IMPORTED_MODULE_10__["default"])(supportMotion, visible, getDomElement, props),
        _useStatus2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var setNodeRef = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function (node) {
      nodeRef.current = node;
      (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__.fillRef)(ref, node);
    }, [ref]); // ===================== Render =====================

    var motionChildren;

    var mergedProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_9__.STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__.STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if ((0,_hooks_useStepQueue__WEBPACK_IMPORTED_MODULE_12__.isActive)(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === _interface__WEBPACK_IMPORTED_MODULE_9__.STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, mergedProps), {}, {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((0,_util_motion__WEBPACK_IMPORTED_MODULE_8__.getTransitionName)(motionName, status), (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, (0,_util_motion__WEBPACK_IMPORTED_MODULE_8__.getTransitionName)(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    } // Auto inject ref if child node not have `ref` props


    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.isValidElement(motionChildren) && (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_6__.supportRef)(motionChildren)) {
      var _ref = motionChildren,
          originNodeRef = _ref.ref;

      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_DomWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genCSSMotion(_util_motion__WEBPACK_IMPORTED_MODULE_8__.supportTransition));

/***/ }),

/***/ "./node_modules/rc-motion/es/CSSMotionList.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-motion/es/CSSMotionList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "genCSSMotionList": () => (/* binding */ genCSSMotionList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-motion/es/util/motion.js");
/* harmony import */ var _util_diff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util/diff */ "./node_modules/rc-motion/es/util/diff.js");









var _excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
    _excluded2 = ["status"];

/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];

/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CSSMotion__WEBPACK_IMPORTED_MODULE_10__["default"];

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(CSSMotionList, _React$Component);

    var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(CSSMotionList);

    function CSSMotionList() {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CSSMotionList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
        keyEntities: []
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeKey", function (removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function (entity) {
          if (entity.key !== removeKey) return entity;
          return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entity), {}, {
            status: _util_diff__WEBPACK_IMPORTED_MODULE_12__.STATUS_REMOVED
          });
        });

        _this.setState({
          keyEntities: nextKeyEntities
        });

        return nextKeyEntities.filter(function (_ref) {
          var status = _ref.status;
          return status !== _util_diff__WEBPACK_IMPORTED_MODULE_12__.STATUS_REMOVED;
        }).length;
      });

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            onAllRemoved = _this$props.onAllRemoved,
            restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, _excluded);

        var Component = component || react__WEBPACK_IMPORTED_MODULE_9__.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded2);

          var visible = status === _util_diff__WEBPACK_IMPORTED_MODULE_12__.STATUS_ADD || status === _util_diff__WEBPACK_IMPORTED_MODULE_12__.STATUS_KEEP;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(CSSMotion, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);

                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = (0,_util_diff__WEBPACK_IMPORTED_MODULE_12__.parseKeys)(keys);
        var mixedKeyEntities = (0,_util_diff__WEBPACK_IMPORTED_MODULE_12__.diffKeys)(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === _util_diff__WEBPACK_IMPORTED_MODULE_12__.STATUS_REMOVED && entity.status === _util_diff__WEBPACK_IMPORTED_MODULE_12__.STATUS_REMOVE) {
              return false;
            }

            return true;
          })
        };
      } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.

    }]);

    return CSSMotionList;
  }(react__WEBPACK_IMPORTED_MODULE_9__.Component);

  (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(CSSMotionList, "defaultProps", {
    component: 'div'
  });

  return CSSMotionList;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genCSSMotionList(_util_motion__WEBPACK_IMPORTED_MODULE_11__.supportTransition));

/***/ }),

/***/ "./node_modules/rc-motion/es/DomWrapper.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-motion/es/DomWrapper.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DomWrapper, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(DomWrapper);

  function DomWrapper() {
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomWrapper);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js":
/*!***************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/motion */ "./node_modules/rc-motion/es/util/motion.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (callback) {
  var cacheElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Cache callback

  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__.transitionEndName, onInternalMotionEnd);
      element.removeEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__.animationEndName, onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__.transitionEndName, onInternalMotionEnd);
      element.addEventListener(_util_motion__WEBPACK_IMPORTED_MODULE_1__.animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useNextFrame.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useNextFrame.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var nextFrameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  function cancelNextFrame() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStatus.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStatus.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useStatus)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/hooks/useState */ "./node_modules/rc-util/es/hooks/useState.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useStepQueue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useStepQueue */ "./node_modules/rc-motion/es/hooks/useStepQueue.js");
/* harmony import */ var _useDomMotionEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useDomMotionEvents */ "./node_modules/rc-motion/es/hooks/useDomMotionEvents.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_4__["default"])(_interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_NONE),
      _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_4__["default"])(null),
      _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
  var deadlineRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // =========================== Dom Node ===========================

  function getDomElement() {
    return getElement();
  } // ========================== Motion End ==========================


  var activeRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var currentActive = activeRef.current;
    var canEnd;

    if (status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (status !== _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_NONE && currentActive && canEnd !== false) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_NONE, true);
      setStyle(null, true);
    }
  }

  var _useDomMotionEvents = (0,_useDomMotionEvents__WEBPACK_IMPORTED_MODULE_7__["default"])(onInternalMotionEnd),
      _useDomMotionEvents2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_APPEAR:
        return _ref2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_PREPARE, onAppearPrepare), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_START, onAppearStart), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_ACTIVE, onAppearActive), _ref2;

      case _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_ENTER:
        return _ref3 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_PREPARE, onEnterPrepare), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_START, onEnterStart), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_ACTIVE, onEnterActive), _ref3;

      case _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_LEAVE:
        return _ref4 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_PREPARE, onLeavePrepare), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_START, onLeaveStart), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_ACTIVE, onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = (0,_useStepQueue__WEBPACK_IMPORTED_MODULE_6__["default"])(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_PREPARE) {
      var onPrepare = eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_5__.STEP_PREPARE];

      if (!onPrepare) {
        return _useStepQueue__WEBPACK_IMPORTED_MODULE_6__.SkipStep;
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_ACTIVE) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return _useStepQueue__WEBPACK_IMPORTED_MODULE_6__.DoStep;
  }),
      _useStepQueue2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = (0,_useStepQueue__WEBPACK_IMPORTED_MODULE_6__.isActive)(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_APPEAR;
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_ENTER;
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_LEAVE;
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if ( // Cancel appear
    status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_APPEAR && !motionAppear || // Cancel enter
    status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_ENTER && !motionEnter || // Cancel leave
    status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_LEAVE && !motionLeave) {
      setStatus(_interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []); // Trigger `onVisibleChanged`

  var firstMountChangeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }

    if (asyncVisible !== undefined && status === _interface__WEBPACK_IMPORTED_MODULE_5__.STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }

      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[_interface__WEBPACK_IMPORTED_MODULE_5__.STEP_PREPARE] && step === _interface__WEBPACK_IMPORTED_MODULE_5__.STEP_START) {
    mergedStyle = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

/***/ }),

/***/ "./node_modules/rc-motion/es/hooks/useStepQueue.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-motion/es/hooks/useStepQueue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoStep": () => (/* binding */ DoStep),
/* harmony export */   "SkipStep": () => (/* binding */ SkipStep),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isActive": () => (/* binding */ isActive)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/hooks/useState */ "./node_modules/rc-util/es/hooks/useState.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface */ "./node_modules/rc-motion/es/interface.js");
/* harmony import */ var _useNextFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useNextFrame */ "./node_modules/rc-motion/es/hooks/useNextFrame.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js");






var STEP_QUEUE = [_interface__WEBPACK_IMPORTED_MODULE_3__.STEP_PREPARE, _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_START, _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_ACTIVE, _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_ACTIVE || step === _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_ACTIVATED;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (status, callback) {
  var _useState = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_2__["default"])(_interface__WEBPACK_IMPORTED_MODULE_3__.STEP_NONE),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  var _useNextFrame = (0,_useNextFrame__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      _useNextFrame2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(_interface__WEBPACK_IMPORTED_MODULE_3__.STEP_PREPARE, true);
  }

  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    if (step !== _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_NONE && step !== _interface__WEBPACK_IMPORTED_MODULE_3__.STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

/***/ }),

/***/ "./node_modules/rc-motion/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-motion/es/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSMotionList": () => (/* reexport safe */ _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-motion/es/CSSMotion.js");
/* harmony import */ var _CSSMotionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSMotionList */ "./node_modules/rc-motion/es/CSSMotionList.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CSSMotion__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-motion/es/interface.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/interface.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS_APPEAR": () => (/* binding */ STATUS_APPEAR),
/* harmony export */   "STATUS_ENTER": () => (/* binding */ STATUS_ENTER),
/* harmony export */   "STATUS_LEAVE": () => (/* binding */ STATUS_LEAVE),
/* harmony export */   "STATUS_NONE": () => (/* binding */ STATUS_NONE),
/* harmony export */   "STEP_ACTIVATED": () => (/* binding */ STEP_ACTIVATED),
/* harmony export */   "STEP_ACTIVE": () => (/* binding */ STEP_ACTIVE),
/* harmony export */   "STEP_NONE": () => (/* binding */ STEP_NONE),
/* harmony export */   "STEP_PREPARE": () => (/* binding */ STEP_PREPARE),
/* harmony export */   "STEP_START": () => (/* binding */ STEP_START)
/* harmony export */ });
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

/***/ }),

/***/ "./node_modules/rc-motion/es/util/diff.js":
/*!************************************************!*\
  !*** ./node_modules/rc-motion/es/util/diff.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS_ADD": () => (/* binding */ STATUS_ADD),
/* harmony export */   "STATUS_KEEP": () => (/* binding */ STATUS_KEEP),
/* harmony export */   "STATUS_REMOVE": () => (/* binding */ STATUS_REMOVE),
/* harmony export */   "STATUS_REMOVED": () => (/* binding */ STATUS_REMOVED),
/* harmony export */   "diffKeys": () => (/* binding */ diffKeys),
/* harmony export */   "parseKeys": () => (/* binding */ parseKeys),
/* harmony export */   "wrapKeyToObject": () => (/* binding */ wrapKeyToObject)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

/***/ }),

/***/ "./node_modules/rc-motion/es/util/motion.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-motion/es/util/motion.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationEndName": () => (/* binding */ animationEndName),
/* harmony export */   "getTransitionName": () => (/* binding */ getTransitionName),
/* harmony export */   "getVendorPrefixedEventName": () => (/* binding */ getVendorPrefixedEventName),
/* harmony export */   "getVendorPrefixes": () => (/* binding */ getVendorPrefixes),
/* harmony export */   "supportTransition": () => (/* binding */ supportTransition),
/* harmony export */   "transitionEndName": () => (/* binding */ transitionEndName)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])(), typeof window !== 'undefined' ? window : {});
var style = {};

if ((0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

/***/ }),

/***/ "./node_modules/rc-slider/es/Handle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Handle.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");











var Handle = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Handle, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Handle);

  function Handle() {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Handle);

    _this = _super.apply(this, arguments);
    _this.state = {
      clickFocused: false
    };

    _this.setHandleRef = function (node) {
      _this.handle = node;
    };

    _this.handleMouseUp = function () {
      if (document.activeElement === _this.handle) {
        _this.setClickFocus(true);
      }
    };

    _this.handleMouseDown = function (e) {
      // avoid selecting text during drag
      // https://github.com/ant-design/ant-design/issues/25010
      e.preventDefault(); // fix https://github.com/ant-design/ant-design/issues/15324

      _this.focus();
    };

    _this.handleBlur = function () {
      _this.setClickFocus(false);
    };

    _this.handleKeyDown = function () {
      _this.setClickFocus(false);
    };

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Handle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // mouseup won't trigger if mouse moved out of handle,
      // so we listen on document here.
      this.onMouseUpListener = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__["default"])(document, 'mouseup', this.handleMouseUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.onMouseUpListener) {
        this.onMouseUpListener.remove();
      }
    }
  }, {
    key: "setClickFocus",
    value: function setClickFocus(focused) {
      this.setState({
        clickFocused: focused
      });
    }
  }, {
    key: "clickFocus",
    value: function clickFocus() {
      this.setClickFocus(true);
      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.handle.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.handle.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _ref, _ref2;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          vertical = _this$props.vertical,
          reverse = _this$props.reverse,
          offset = _this$props.offset,
          style = _this$props.style,
          disabled = _this$props.disabled,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          ariaLabelledBy = _this$props.ariaLabelledBy,
          ariaValueTextFormatter = _this$props.ariaValueTextFormatter,
          restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]);

      var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(this.props.className, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-handle-click-focused"), this.state.clickFocused));
      var positionStyle = vertical ? (_ref = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "transform", reverse ? null : "translateY(+50%)"), _ref) : (_ref2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "transform", "translateX(".concat(reverse ? '+' : '-', "50%)")), _ref2);

      var elStyle = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), positionStyle);

      var mergedTabIndex = tabIndex || 0;

      if (disabled || tabIndex === null) {
        mergedTabIndex = null;
      }

      var ariaValueText;

      if (ariaValueTextFormatter) {
        ariaValueText = ariaValueTextFormatter(value);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", Object.assign({
        ref: this.setHandleRef,
        tabIndex: mergedTabIndex
      }, restProps, {
        className: className,
        style: elStyle,
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        // aria attribute
        role: "slider",
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-disabled": !!disabled,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText
      }));
    }
  }]);

  return Handle;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));



/***/ }),

/***/ "./node_modules/rc-slider/es/Range.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/Range.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");













var _trimAlignValue = function trimAlignValue(_ref) {
  var value = _ref.value,
      handle = _ref.handle,
      bounds = _ref.bounds,
      props = _ref.props;
  var allowCross = props.allowCross,
      pushable = props.pushable;
  var thershold = Number(pushable);
  var valInRange = _utils__WEBPACK_IMPORTED_MODULE_11__.ensureValueInRange(value, props);
  var valNotConflict = valInRange;

  if (!allowCross && handle != null && bounds !== undefined) {
    if (handle > 0 && valInRange <= bounds[handle - 1] + thershold) {
      valNotConflict = bounds[handle - 1] + thershold;
    }

    if (handle < bounds.length - 1 && valInRange >= bounds[handle + 1] - thershold) {
      valNotConflict = bounds[handle + 1] - thershold;
    }
  }

  return _utils__WEBPACK_IMPORTED_MODULE_11__.ensureValuePrecision(valNotConflict, props);
};

var Range = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Range, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Range);

  function Range(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Range);

    _this = _super.call(this, props);

    _this.onEnd = function (force) {
      var handle = _this.state.handle;

      _this.removeDocumentEvents();

      if (handle !== null || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        handle: null
      });
    };

    var count = props.count,
        min = props.min,
        max = props.max;
    var initialValue = Array.apply(void 0, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(count + 1))).map(function () {
      return min;
    });
    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;
    var bounds = value.map(function (v, i) {
      return _trimAlignValue({
        value: v,
        handle: i,
        props: props
      });
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;
    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Range, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      if (min === prevProps.min && max === prevProps.max) {
        return;
      }

      var currentValue = value || prevState.bounds;

      if (currentValue.some(function (v) {
        return _utils__WEBPACK_IMPORTED_MODULE_11__.isValueOutOfRange(v, _this2.props);
      })) {
        var newValues = currentValue.map(function (v) {
          return _utils__WEBPACK_IMPORTED_MODULE_11__.ensureValueInRange(v, _this2.props);
        });
        onChange(newValues);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);

      if (isNotControlled) {
        this.setState(state);
      } else {
        var controlledState = {};
        ['handle', 'recent'].forEach(function (item) {
          if (state[item] !== undefined) {
            controlledState[item] = state[item];
          }
        });

        if (Object.keys(controlledState).length) {
          this.setState(controlledState);
        }
      }

      var data = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state), state);

      var changedValue = data.bounds;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      var props = this.props,
          state = this.state;
      var bounds = this.getValue();
      props.onBeforeChange(bounds);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      var closestBound = this.getClosestBound(value);
      this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);
      this.setState({
        handle: this.prevMovedHandleIndex,
        recent: this.prevMovedHandleIndex
      });
      var prevValue = bounds[this.prevMovedHandleIndex];
      if (value === prevValue) return;

      var nextBounds = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      nextBounds[this.prevMovedHandleIndex] = value;
      this.onChange({
        bounds: nextBounds
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_11__.pauseEvent(e);
      var state = this.state;
      var value = this.calcValueByPos(position);
      var oldValue = state.bounds[state.handle];
      if (value === oldValue) return;
      this.moveTo(value);
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_11__.getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_11__.pauseEvent(e);
        var state = this.state,
            props = this.props;
        var bounds = state.bounds,
            handle = state.handle;
        var oldValue = bounds[handle === null ? state.recent : handle];
        var mutatedValue = valueMutator(oldValue, props);

        var value = _trimAlignValue({
          value: mutatedValue,
          handle: handle,
          bounds: state.bounds,
          props: props
        });

        if (value === oldValue) return;
        var isFromKeyboardEvent = true;
        this.moveTo(value, isFromKeyboardEvent);
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.bounds;
    }
  }, {
    key: "getClosestBound",
    value: function getClosestBound(value) {
      var bounds = this.state.bounds;
      var closestBound = 0;

      for (var i = 1; i < bounds.length - 1; i += 1) {
        if (value >= bounds[i]) {
          closestBound = i;
        }
      }

      if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
        closestBound += 1;
      }

      return closestBound;
    }
  }, {
    key: "getBoundNeedMoving",
    value: function getBoundNeedMoving(value, closestBound) {
      var _this$state = this.state,
          bounds = _this$state.bounds,
          recent = _this$state.recent;
      var boundNeedMoving = closestBound;
      var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

      if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
        boundNeedMoving = recent;
      }

      if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
        boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
      }

      return boundNeedMoving;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      return this.state.bounds[0];
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      var bounds = this.state.bounds;
      return bounds[bounds.length - 1];
    }
    /**
     * Returns an array of possible slider points, taking into account both
     * `marks` and `step`. The result is cached.
     */

  }, {
    key: "getPoints",
    value: function getPoints() {
      var _this$props3 = this.props,
          marks = _this$props3.marks,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
      var cache = this.internalPointsCache;

      if (!cache || cache.marks !== marks || cache.step !== step) {
        var pointsObject = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, marks);

        if (step !== null) {
          for (var point = min; point <= max; point += step) {
            pointsObject[point] = point;
          }
        }

        var points = Object.keys(pointsObject).map(parseFloat);
        points.sort(function (a, b) {
          return a - b;
        });
        this.internalPointsCache = {
          marks: marks,
          step: step,
          points: points
        };
      }

      return this.internalPointsCache.points;
    }
  }, {
    key: "moveTo",
    value: function moveTo(value, isFromKeyboardEvent) {
      var _this3 = this;

      var state = this.state,
          props = this.props;

      var nextBounds = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.bounds);

      var handle = state.handle === null ? state.recent : state.handle;
      nextBounds[handle] = value;
      var nextHandle = handle;

      if (props.pushable !== false) {
        this.pushSurroundingHandles(nextBounds, nextHandle);
      } else if (props.allowCross) {
        nextBounds.sort(function (a, b) {
          return a - b;
        });
        nextHandle = nextBounds.indexOf(value);
      }

      this.onChange({
        recent: nextHandle,
        handle: nextHandle,
        bounds: nextBounds
      });

      if (isFromKeyboardEvent) {
        // known problem: because setState is async,
        // so trigger focus will invoke handler's onEnd and another handler's onStart too early,
        // cause onBeforeChange and onAfterChange receive wrong value.
        // here use setState callback to hack，but not elegant
        this.props.onAfterChange(nextBounds);
        this.setState({}, function () {
          _this3.handlesRefs[nextHandle].focus();
        });
        this.onEnd();
      }
    }
  }, {
    key: "pushSurroundingHandles",
    value: function pushSurroundingHandles(bounds, handle) {
      var value = bounds[handle];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var direction = 0;

      if (bounds[handle + 1] - value < threshold) {
        direction = +1; // push to right
      }

      if (value - bounds[handle - 1] < threshold) {
        direction = -1; // push to left
      }

      if (direction === 0) {
        return;
      }

      var nextHandle = handle + direction;
      var diffToNext = direction * (bounds[nextHandle] - value);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // revert to original value if pushing is impossible
        // eslint-disable-next-line no-param-reassign
        bounds[handle] = bounds[nextHandle] - direction * threshold;
      }
    }
  }, {
    key: "pushHandle",
    value: function pushHandle(bounds, handle, direction, amount) {
      var originalValue = bounds[handle];
      var currentValue = bounds[handle];

      while (direction * (currentValue - originalValue) < amount) {
        if (!this.pushHandleOnePoint(bounds, handle, direction)) {
          // can't push handle enough to create the needed `amount` gap, so we
          // revert its position to the original value
          // eslint-disable-next-line no-param-reassign
          bounds[handle] = originalValue;
          return false;
        }

        currentValue = bounds[handle];
      } // the handle was pushed enough to create the needed `amount` gap


      return true;
    }
  }, {
    key: "pushHandleOnePoint",
    value: function pushHandleOnePoint(bounds, handle, direction) {
      var points = this.getPoints();
      var pointIndex = points.indexOf(bounds[handle]);
      var nextPointIndex = pointIndex + direction;

      if (nextPointIndex >= points.length || nextPointIndex < 0) {
        // reached the minimum or maximum available point, can't push anymore
        return false;
      }

      var nextHandle = handle + direction;
      var nextValue = points[nextPointIndex];
      var pushable = this.props.pushable;
      var threshold = Number(pushable);
      var diffToNext = direction * (bounds[nextHandle] - nextValue);

      if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
        // couldn't push next handle, so we won't push this one either
        return false;
      } // push the handle
      // eslint-disable-next-line no-param-reassign


      bounds[handle] = nextValue;
      return true;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(value) {
      var _this$state2 = this.state,
          handle = _this$state2.handle,
          bounds = _this$state2.bounds;
      return _trimAlignValue({
        value: value,
        handle: handle,
        bounds: bounds,
        props: this.props
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          handle = _this$state3.handle,
          bounds = _this$state3.bounds;
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          vertical = _this$props4.vertical,
          included = _this$props4.included,
          disabled = _this$props4.disabled,
          min = _this$props4.min,
          max = _this$props4.max,
          reverse = _this$props4.reverse,
          handleGenerator = _this$props4.handle,
          trackStyle = _this$props4.trackStyle,
          handleStyle = _this$props4.handleStyle,
          tabIndex = _this$props4.tabIndex,
          ariaLabelGroupForHandles = _this$props4.ariaLabelGroupForHandles,
          ariaLabelledByGroupForHandles = _this$props4.ariaLabelledByGroupForHandles,
          ariaValueTextFormatterGroupForHandles = _this$props4.ariaValueTextFormatterGroupForHandles;
      var offsets = bounds.map(function (v) {
        return _this4.calcOffset(v);
      });
      var handleClassName = "".concat(prefixCls, "-handle");
      var handles = bounds.map(function (v, i) {
        var _classNames;

        var mergedTabIndex = tabIndex[i] || 0;

        if (disabled || tabIndex[i] === null) {
          mergedTabIndex = null;
        }

        var dragging = handle === i;
        return handleGenerator({
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, handleClassName, true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-").concat(i + 1), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(handleClassName, "-dragging"), dragging), _classNames)),
          prefixCls: prefixCls,
          vertical: vertical,
          dragging: dragging,
          offset: offsets[i],
          value: v,
          index: i,
          tabIndex: mergedTabIndex,
          min: min,
          max: max,
          reverse: reverse,
          disabled: disabled,
          style: handleStyle[i],
          ref: function ref(h) {
            return _this4.saveHandle(i, h);
          },
          ariaLabel: ariaLabelGroupForHandles[i],
          ariaLabelledBy: ariaLabelledByGroupForHandles[i],
          ariaValueTextFormatter: ariaValueTextFormatterGroupForHandles[i]
        });
      });
      var tracks = bounds.slice(0, -1).map(function (_, index) {
        var _classNames2;

        var i = index + 1;
        var trackClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track"), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-track-").concat(i), true), _classNames2));
        return react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_common_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
          className: trackClassName,
          vertical: vertical,
          reverse: reverse,
          included: included,
          offset: offsets[i - 1],
          length: offsets[i] - offsets[i - 1],
          style: trackStyle[index],
          key: i
        });
      });
      return {
        tracks: tracks,
        handles: handles
      };
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!('value' in props || 'min' in props || 'max' in props)) {
        return null;
      }

      var value = props.value || state.bounds;
      var nextBounds = value.map(function (v, i) {
        return _trimAlignValue({
          value: v,
          handle: i,
          bounds: state.bounds,
          props: props
        });
      });

      if (state.bounds.length === nextBounds.length) {
        if (nextBounds.every(function (v, i) {
          return v === state.bounds[i];
        })) {
          return null;
        }
      } else {
        nextBounds = value.map(function (v, i) {
          return _trimAlignValue({
            value: v,
            handle: i,
            props: props
          });
        });
      }

      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        bounds: nextBounds
      });
    }
  }]);

  return Range;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));
/* eslint-enable */


Range.displayName = 'Range';
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false,
  tabIndex: [],
  ariaLabelGroupForHandles: [],
  ariaLabelledByGroupForHandles: [],
  ariaValueTextFormatterGroupForHandles: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_createSlider__WEBPACK_IMPORTED_MODULE_10__["default"])(Range));

/***/ }),

/***/ "./node_modules/rc-slider/es/Slider.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-slider/es/Slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _common_Track__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/Track */ "./node_modules/rc-slider/es/common/Track.js");
/* harmony import */ var _common_createSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/createSlider */ "./node_modules/rc-slider/es/common/createSlider.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-slider/es/utils.js");











var Slider = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Slider, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(Slider);

  /* eslint-enable */
  function Slider(props) {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Slider);

    _this = _super.call(this, props);

    _this.onEnd = function (force) {
      var dragging = _this.state.dragging;

      _this.removeDocumentEvents();

      if (dragging || force) {
        _this.props.onAfterChange(_this.getValue());
      }

      _this.setState({
        dragging: false
      });
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;
    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecated, please use trackStyle instead.');
    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecated, please use railStyle instead.');
    return _this;
  }
  /**
   * [Legacy] Used for inherit other component.
   * It's a bad code style which should be refactor.
   */

  /* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */


  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Slider, [{
    key: "calcValueByPos",
    value: function calcValueByPos(value) {
      return 0;
    }
  }, {
    key: "calcOffset",
    value: function calcOffset(value) {
      return 0;
    }
  }, {
    key: "saveHandle",
    value: function saveHandle(index, h) {}
  }, {
    key: "removeDocumentEvents",
    value: function removeDocumentEvents() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          onChange = _this$props.onChange;

      if (!('min' in this.props || 'max' in this.props)) {
        return;
      }

      var theValue = value !== undefined ? value : prevState.value;
      var nextValue = this.trimAlignValue(theValue, this.props);

      if (nextValue === prevState.value) {
        return;
      } // eslint-disable-next-line


      this.setState({
        value: nextValue
      });

      if (!(min === prevProps.min && max === prevProps.max) && _utils__WEBPACK_IMPORTED_MODULE_9__.isValueOutOfRange(theValue, this.props)) {
        onChange(nextValue);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(state) {
      var props = this.props;
      var isNotControlled = !('value' in props);
      var nextState = state.value > this.props.max ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state), {}, {
        value: this.props.max
      }) : state;

      if (isNotControlled) {
        this.setState(nextState);
      }

      var changedValue = nextState.value;
      props.onChange(changedValue);
    }
  }, {
    key: "onStart",
    value: function onStart(position) {
      this.setState({
        dragging: true
      });
      var props = this.props;
      var prevValue = this.getValue();
      props.onBeforeChange(prevValue);
      var value = this.calcValueByPos(position);
      this.startValue = value;
      this.startPosition = position;
      if (value === prevValue) return;
      this.prevMovedHandleIndex = 0;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onMove",
    value: function onMove(e, position) {
      _utils__WEBPACK_IMPORTED_MODULE_9__.pauseEvent(e);
      var oldValue = this.state.value;
      var value = this.calcValueByPos(position);
      if (value === oldValue) return;
      this.onChange({
        value: value
      });
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard(e) {
      var _this$props2 = this.props,
          reverse = _this$props2.reverse,
          vertical = _this$props2.vertical;
      var valueMutator = _utils__WEBPACK_IMPORTED_MODULE_9__.getKeyboardValueMutator(e, vertical, reverse);

      if (valueMutator) {
        _utils__WEBPACK_IMPORTED_MODULE_9__.pauseEvent(e);
        var state = this.state;
        var oldValue = state.value;
        var mutatedValue = valueMutator(oldValue, this.props);
        var value = this.trimAlignValue(mutatedValue);
        if (value === oldValue) return;
        this.onChange({
          value: value
        });
        this.props.onAfterChange(value);
        this.onEnd();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: "getLowerBound",
    value: function getLowerBound() {
      var minPoint = this.props.startPoint || this.props.min;
      return this.state.value > minPoint ? minPoint : this.state.value;
    }
  }, {
    key: "getUpperBound",
    value: function getUpperBound() {
      if (this.state.value < this.props.startPoint) {
        return this.props.startPoint;
      }

      return this.state.value;
    }
  }, {
    key: "trimAlignValue",
    value: function trimAlignValue(v) {
      var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (v === null) {
        return null;
      }

      var mergedProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props), nextProps);

      var val = _utils__WEBPACK_IMPORTED_MODULE_9__.ensureValueInRange(v, mergedProps);
      return _utils__WEBPACK_IMPORTED_MODULE_9__.ensureValuePrecision(val, mergedProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          vertical = _this$props3.vertical,
          included = _this$props3.included,
          disabled = _this$props3.disabled,
          minimumTrackStyle = _this$props3.minimumTrackStyle,
          trackStyle = _this$props3.trackStyle,
          handleStyle = _this$props3.handleStyle,
          tabIndex = _this$props3.tabIndex,
          ariaLabelForHandle = _this$props3.ariaLabelForHandle,
          ariaLabelledByForHandle = _this$props3.ariaLabelledByForHandle,
          ariaValueTextFormatterForHandle = _this$props3.ariaValueTextFormatterForHandle,
          min = _this$props3.min,
          max = _this$props3.max,
          startPoint = _this$props3.startPoint,
          reverse = _this$props3.reverse,
          handleGenerator = _this$props3.handle;
      var _this$state = this.state,
          value = _this$state.value,
          dragging = _this$state.dragging;
      var offset = this.calcOffset(value);
      var handle = handleGenerator({
        className: "".concat(prefixCls, "-handle"),
        prefixCls: prefixCls,
        vertical: vertical,
        offset: offset,
        value: value,
        dragging: dragging,
        disabled: disabled,
        min: min,
        max: max,
        reverse: reverse,
        index: 0,
        tabIndex: tabIndex,
        ariaLabel: ariaLabelForHandle,
        ariaLabelledBy: ariaLabelledByForHandle,
        ariaValueTextFormatter: ariaValueTextFormatterForHandle,
        style: handleStyle[0] || handleStyle,
        ref: function ref(h) {
          return _this2.saveHandle(0, h);
        }
      });
      var trackOffset = startPoint !== undefined ? this.calcOffset(startPoint) : 0;
      var mergedTrackStyle = trackStyle[0] || trackStyle;
      var track = react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_common_Track__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "".concat(prefixCls, "-track"),
        vertical: vertical,
        included: included,
        offset: trackOffset,
        reverse: reverse,
        length: offset - trackOffset,
        style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, minimumTrackStyle), mergedTrackStyle)
      });
      return {
        tracks: track,
        handles: handle
      };
    }
  }]);

  return Slider;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_common_createSlider__WEBPACK_IMPORTED_MODULE_8__["default"])(Slider));

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Marks.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Marks.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min,
      onClickLabel = _ref.onClickLabel;
  var marksKeys = Object.keys(marks);
  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(markPoint) === 'object' && !react__WEBPACK_IMPORTED_MODULE_3___default().isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;

    if (!markLabel && markLabel !== 0) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text"), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(className, "-text-active"), isActive), _classNames));

    var bottomStyle = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginBottom: '-50%'
    }, reverse ? 'top' : 'bottom', "".concat((point - min) / range * 100, "%"));

    var leftStyle = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      transform: "translateX(".concat(reverse ? "50%" : "-50%", ")"),
      msTransform: "translateX(".concat(reverse ? "50%" : "-50%", ")")
    }, reverse ? 'right' : 'left', "".concat((point - min) / range * 100, "%"));

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), markPoint.style) : style;
    return react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      className: markClassName,
      style: markStyle,
      key: point,
      onMouseDown: function onMouseDown(e) {
        return onClickLabel(e, point);
      },
      onTouchStart: function onTouchStart(e) {
        return onClickLabel(e, point);
      }
    }, markLabel);
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: className
  }, elements);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marks);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/SliderTooltip.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/SliderTooltip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");




var SliderTooltip = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var visible = props.visible,
      overlay = props.overlay;
  var innerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var tooltipRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__.composeRef)(ref, innerRef);
  var rafRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  function cancelKeepAlign() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_3__["default"].cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      var _innerRef$current;

      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 ? void 0 : _innerRef$current.forcePopupAlign();
    });
  }

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (visible) {
      keepAlign();
    } else {
      cancelKeepAlign();
    }

    return cancelKeepAlign;
  }, [visible, overlay]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    ref: tooltipRef
  }, props));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderTooltip);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Steps.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Steps.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");






var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat).sort(function (a, b) {
    return a - b;
  });

  if (dots && step) {
    for (var i = min; i <= max; i += step) {
      if (points.indexOf(i) === -1) {
        points.push(i);
      }
    }
  }

  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;
  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = "".concat(Math.abs(point - min) / range * 100, "%");
    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'top' : 'bottom', offset)) : (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, dotStyle), {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reverse ? 'right' : 'left', offset));

    if (isActived) {
      style = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style), activeDotStyle);
    }

    var pointClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot"), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-active"), isActived), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-dot-reverse"), reverse), _classNames));
    return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      className: pointClassName,
      style: style,
      key: point
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, elements);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steps);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/Track.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-slider/es/common/Track.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Track = function Track(props) {
  var _ref, _ref2;

  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      style = props.style;
  var length = props.length,
      offset = props.offset,
      reverse = props.reverse;

  if (length < 0) {
    reverse = !reverse;
    length = Math.abs(length);
    offset = 100 - offset;
  }

  var positonStyle = vertical ? (_ref = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'top' : 'bottom', "".concat(offset, "%")), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, reverse ? 'bottom' : 'top', 'auto'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "height", "".concat(length, "%")), _ref) : (_ref2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'right' : 'left', "".concat(offset, "%")), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, reverse ? 'left' : 'right', 'auto'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "width", "".concat(length, "%")), _ref2);

  var elStyle = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), positonStyle);

  return included ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: className,
    style: elStyle
  }) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Track);

/***/ }),

/***/ "./node_modules/rc-slider/es/common/createSlider.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-slider/es/common/createSlider.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSlider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-slider/es/common/Steps.js");
/* harmony import */ var _Marks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Marks */ "./node_modules/rc-slider/es/common/Marks.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils */ "./node_modules/rc-slider/es/utils.js");

















/* eslint-disable @typescript-eslint/no-explicit-any */

function noop() {}

function createSlider(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ComponentEnhancer, _Component);

    var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentEnhancer);

    function ComponentEnhancer(props) {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ComponentEnhancer);

      _this = _super.call(this, props);

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_16__.getMousePosition(isVertical, e);

        if (!_utils__WEBPACK_IMPORTED_MODULE_16__.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_16__.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }

        _this.removeDocumentEvents();

        _this.onStart(position);

        _this.addDocumentMouseEvents();
      };

      _this.onTouchStart = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_16__.isNotTouchEvent(e)) return;
        var isVertical = _this.props.vertical;
        var position = _utils__WEBPACK_IMPORTED_MODULE_16__.getTouchPosition(isVertical, e);

        if (!_utils__WEBPACK_IMPORTED_MODULE_16__.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_16__.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }

        _this.onStart(position);

        _this.addDocumentTouchEvents();

        _utils__WEBPACK_IMPORTED_MODULE_16__.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (_utils__WEBPACK_IMPORTED_MODULE_16__.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = _utils__WEBPACK_IMPORTED_MODULE_16__.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;

          _this.onStart(handlePosition);

          _utils__WEBPACK_IMPORTED_MODULE_16__.pauseEvent(e);

          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd();

        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        if (_this.handlesRefs[_this.prevMovedHandleIndex]) {
          _this.handlesRefs[_this.prevMovedHandleIndex].clickFocus();
        }
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_16__.getMousePosition(_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (_utils__WEBPACK_IMPORTED_MODULE_16__.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();

          return;
        }

        var position = _utils__WEBPACK_IMPORTED_MODULE_16__.getTouchPosition(_this.props.vertical, e);

        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && _utils__WEBPACK_IMPORTED_MODULE_16__.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onClickMarkLabel = function (e, value) {
        e.stopPropagation();

        _this.onChange({
          value: value
        }); // eslint-disable-next-line react/no-unused-state


        _this.setState({
          value: value
        }, function () {
          return _this.onEnd(true);
        });
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      var step = props.step,
          max = props.max,
          min = props.min;
      var isPointDiffEven = isFinite(max - min) ? (max - min) % step === 0 : true; // eslint-disable-line

      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_12__["default"])(step && Math.floor(step) === step ? isPointDiffEven : true, "Slider[max] - Slider[min] (".concat(max - min, ") should be a multiple of Slider[step] (").concat(step, ")"));
      _this.handlesRefs = {};
      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ComponentEnhancer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Snapshot testing cannot handle refs, so be sure to null-check this.
        this.document = this.sliderRef && this.sliderRef.ownerDocument;
        var _this$props2 = this.props,
            autoFocus = _this$props2.autoFocus,
            disabled = _this$props2.disabled;

        if (autoFocus && !disabled) {
          this.focus();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if ((0,_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this)) (0,_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentEnhancer.prototype), "componentWillUnmount", this).call(this);
        this.removeDocumentEvents();
      }
    }, {
      key: "getSliderStart",
      value: function getSliderStart() {
        var slider = this.sliderRef;
        var _this$props3 = this.props,
            vertical = _this$props3.vertical,
            reverse = _this$props3.reverse;
        var rect = slider.getBoundingClientRect();

        if (vertical) {
          return reverse ? rect.bottom : rect.top;
        }

        return window.pageXOffset + (reverse ? rect.right : rect.left);
      }
    }, {
      key: "getSliderLength",
      value: function getSliderLength() {
        var slider = this.sliderRef;

        if (!slider) {
          return 0;
        }

        var coords = slider.getBoundingClientRect();
        return this.props.vertical ? coords.height : coords.width;
      }
    }, {
      key: "addDocumentTouchEvents",
      value: function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        this.onTouchMoveListener = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(this.document, 'touchmove', this.onTouchMove);
        this.onTouchUpListener = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(this.document, 'touchend', this.onEnd);
      }
    }, {
      key: "addDocumentMouseEvents",
      value: function addDocumentMouseEvents() {
        this.onMouseMoveListener = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(this.document, 'mousemove', this.onMouseMove);
        this.onMouseUpListener = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_10__["default"])(this.document, 'mouseup', this.onEnd);
      }
    }, {
      key: "removeDocumentEvents",
      value: function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        this.onTouchMoveListener && this.onTouchMoveListener.remove();
        this.onTouchUpListener && this.onTouchUpListener.remove();
        this.onMouseMoveListener && this.onMouseMoveListener.remove();
        this.onMouseUpListener && this.onMouseUpListener.remove();
        /* eslint-enable no-unused-expressions */
      }
    }, {
      key: "focus",
      value: function focus() {
        var _this$handlesRefs$;

        if (this.props.disabled) {
          return;
        }

        (_this$handlesRefs$ = this.handlesRefs[0]) === null || _this$handlesRefs$ === void 0 ? void 0 : _this$handlesRefs$.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        var _this2 = this;

        if (this.props.disabled) {
          return;
        }

        Object.keys(this.handlesRefs).forEach(function (key) {
          var _this2$handlesRefs$ke, _this2$handlesRefs$ke2;

          (_this2$handlesRefs$ke = _this2.handlesRefs[key]) === null || _this2$handlesRefs$ke === void 0 ? void 0 : (_this2$handlesRefs$ke2 = _this2$handlesRefs$ke.blur) === null || _this2$handlesRefs$ke2 === void 0 ? void 0 : _this2$handlesRefs$ke2.call(_this2$handlesRefs$ke);
        });
      }
    }, {
      key: "calcValue",
      value: function calcValue(offset) {
        var _this$props4 = this.props,
            vertical = _this$props4.vertical,
            min = _this$props4.min,
            max = _this$props4.max;
        var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
        var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
      }
    }, {
      key: "calcValueByPos",
      value: function calcValueByPos(position) {
        var sign = this.props.reverse ? -1 : +1;
        var pixelOffset = sign * (position - this.getSliderStart());
        var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
        return nextValue;
      }
    }, {
      key: "calcOffset",
      value: function calcOffset(value) {
        var _this$props5 = this.props,
            min = _this$props5.min,
            max = _this$props5.max;
        var ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
      }
    }, {
      key: "saveHandle",
      value: function saveHandle(index, handle) {
        this.handlesRefs[index] = handle;
      }
    }, {
      key: "render",
      value: function render() {
        var _classNames;

        var _this$props6 = this.props,
            prefixCls = _this$props6.prefixCls,
            className = _this$props6.className,
            marks = _this$props6.marks,
            dots = _this$props6.dots,
            step = _this$props6.step,
            included = _this$props6.included,
            disabled = _this$props6.disabled,
            vertical = _this$props6.vertical,
            reverse = _this$props6.reverse,
            min = _this$props6.min,
            max = _this$props6.max,
            children = _this$props6.children,
            maximumTrackStyle = _this$props6.maximumTrackStyle,
            style = _this$props6.style,
            railStyle = _this$props6.railStyle,
            dotStyle = _this$props6.dotStyle,
            activeDotStyle = _this$props6.activeDotStyle;

        var _get$call = (0,_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentEnhancer.prototype), "render", this).call(this),
            tracks = _get$call.tracks,
            handles = _get$call.handles;

        var sliderClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-with-marks"), Object.keys(marks).length), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(prefixCls, "-vertical"), vertical), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, className, className), _classNames));
        return react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        }, react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
          className: "".concat(prefixCls, "-rail"),
          style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, maximumTrackStyle), railStyle)
        }), tracks, react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_Steps__WEBPACK_IMPORTED_MODULE_13__["default"], {
          prefixCls: prefixCls,
          vertical: vertical,
          reverse: reverse,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }), handles, react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_Marks__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: "".concat(prefixCls, "-mark"),
          onClickLabel: disabled ? noop : this.onClickMarkLabel,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          reverse: reverse
        }), children);
      }
    }]);

    return ComponentEnhancer;
  }(Component), _a.displayName = "ComponentEnhancer(".concat(Component.displayName, ")"), _a.defaultProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Component.defaultProps), {}, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(props) {
      var index = props.index,
          restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["index"]);

      delete restProps.dragging;

      if (restProps.value === null) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_Handle__WEBPACK_IMPORTED_MODULE_15__["default"], Object.assign({}, restProps, {
        key: index
      }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    reverse: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/createSliderWithTooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-slider/es/createSliderWithTooltip.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSliderWithTooltip)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");










function createSliderWithTooltip(Component) {
  var _a; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  return _a = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ComponentWrapper, _React$Component);

    var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentWrapper);

    function ComponentWrapper() {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ComponentWrapper);

      _this = _super.apply(this, arguments);
      _this.state = {
        visibles: {}
      };

      _this.handleTooltipVisibleChange = function (index, visible) {
        _this.setState(function (prevState) {
          return {
            visibles: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, prevState.visibles), {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, index, visible))
          };
        });
      };

      _this.handleWithTooltip = function (_ref) {
        var value = _ref.value,
            dragging = _ref.dragging,
            index = _ref.index,
            disabled = _ref.disabled,
            restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["value", "dragging", "index", "disabled"]);

        var _this$props = _this.props,
            tipFormatter = _this$props.tipFormatter,
            tipProps = _this$props.tipProps,
            handleStyle = _this$props.handleStyle,
            getTooltipContainer = _this$props.getTooltipContainer;

        var _tipProps$prefixCls = tipProps.prefixCls,
            prefixCls = _tipProps$prefixCls === void 0 ? 'rc-slider-tooltip' : _tipProps$prefixCls,
            _tipProps$overlay = tipProps.overlay,
            overlay = _tipProps$overlay === void 0 ? tipFormatter(value) : _tipProps$overlay,
            _tipProps$placement = tipProps.placement,
            placement = _tipProps$placement === void 0 ? 'top' : _tipProps$placement,
            _tipProps$visible = tipProps.visible,
            visible = _tipProps$visible === void 0 ? false : _tipProps$visible,
            restTooltipProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(tipProps, ["prefixCls", "overlay", "placement", "visible"]);

        var handleStyleWithIndex;

        if (Array.isArray(handleStyle)) {
          handleStyleWithIndex = handleStyle[index] || handleStyle[0];
        } else {
          handleStyleWithIndex = handleStyle;
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_common_SliderTooltip__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, restTooltipProps, {
          getTooltipContainer: getTooltipContainer,
          prefixCls: prefixCls,
          overlay: overlay,
          placement: placement,
          visible: !disabled && (_this.state.visibles[index] || dragging) || visible,
          key: index
        }), react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Handle__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, restProps, {
          style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, handleStyleWithIndex),
          value: value,
          onMouseEnter: function onMouseEnter() {
            return _this.handleTooltipVisibleChange(index, true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this.handleTooltipVisibleChange(index, false);
          }
        })));
      };

      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ComponentWrapper, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_7___default().createElement(Component, Object.assign({}, this.props, {
          handle: this.handleWithTooltip
        }));
      }
    }]);

    return ComponentWrapper;
  }((react__WEBPACK_IMPORTED_MODULE_7___default().Component)), _a.defaultProps = {
    tipFormatter: function tipFormatter(value) {
      return value;
    },
    handleStyle: [{}],
    tipProps: {},
    getTooltipContainer: function getTooltipContainer(node) {
      return node.parentNode;
    }
  }, _a;
}

/***/ }),

/***/ "./node_modules/rc-slider/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Handle": () => (/* reexport safe */ _Handle__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Range": () => (/* reexport safe */ _Range__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SliderTooltip": () => (/* reexport safe */ _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "createSliderWithTooltip": () => (/* reexport safe */ _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/rc-slider/es/Slider.js");
/* harmony import */ var _Range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Range */ "./node_modules/rc-slider/es/Range.js");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Handle */ "./node_modules/rc-slider/es/Handle.js");
/* harmony import */ var _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSliderWithTooltip */ "./node_modules/rc-slider/es/createSliderWithTooltip.js");
/* harmony import */ var _common_SliderTooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/SliderTooltip */ "./node_modules/rc-slider/es/common/SliderTooltip.js");





var InternalSlider = _Slider__WEBPACK_IMPORTED_MODULE_0__["default"];
InternalSlider.Range = _Range__WEBPACK_IMPORTED_MODULE_1__["default"];
InternalSlider.Handle = _Handle__WEBPACK_IMPORTED_MODULE_2__["default"];
InternalSlider.createSliderWithTooltip = _createSliderWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InternalSlider);


/***/ }),

/***/ "./node_modules/rc-slider/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-slider/es/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateNextValue": () => (/* binding */ calculateNextValue),
/* harmony export */   "ensureValueInRange": () => (/* binding */ ensureValueInRange),
/* harmony export */   "ensureValuePrecision": () => (/* binding */ ensureValuePrecision),
/* harmony export */   "getClosestPoint": () => (/* binding */ getClosestPoint),
/* harmony export */   "getHandleCenterPosition": () => (/* binding */ getHandleCenterPosition),
/* harmony export */   "getKeyboardValueMutator": () => (/* binding */ getKeyboardValueMutator),
/* harmony export */   "getMousePosition": () => (/* binding */ getMousePosition),
/* harmony export */   "getPrecision": () => (/* binding */ getPrecision),
/* harmony export */   "getTouchPosition": () => (/* binding */ getTouchPosition),
/* harmony export */   "isEventFromHandle": () => (/* binding */ isEventFromHandle),
/* harmony export */   "isNotTouchEvent": () => (/* binding */ isNotTouchEvent),
/* harmony export */   "isValueOutOfRange": () => (/* binding */ isValueOutOfRange),
/* harmony export */   "pauseEvent": () => (/* binding */ pauseEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");



function isEventFromHandle(e, handles) {
  try {
    return Object.keys(handles).some(function (key) {
      return e.target === (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode)(handles[key]);
    });
  } catch (error) {
    return false;
  }
}
function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;
  return value < min || value > max;
}
function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}
function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min,
      max = _ref2.max;
  var points = Object.keys(marks).map(parseFloat);

  if (step !== null) {
    var baseNum = Math.pow(10, getPrecision(step));
    var maxSteps = Math.floor((max * baseNum - min * baseNum) / (step * baseNum));
    var steps = Math.min((val - min) / step, maxSteps);
    var closestStep = Math.round(steps) * step + min;
    points.push(closestStep);
  }

  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(diffs)))];
}
function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;

  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }

  return precision;
}
function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}
function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}
function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : window.pageXOffset + coords.left + coords.width * 0.5;
}
function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }

  if (val >= max) {
    return max;
  }

  return val;
}
function ensureValuePrecision(val, props) {
  var step = props.step;
  var closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line

  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}
function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function calculateNextValue(func, value, props) {
  var operations = {
    increase: function increase(a, b) {
      return a + b;
    },
    decrease: function decrease(a, b) {
      return a - b;
    }
  };
  var indexToGet = operations[func](Object.keys(props.marks).indexOf(JSON.stringify(value)), 1);
  var keyToGet = Object.keys(props.marks)[indexToGet];

  if (props.step) {
    return operations[func](value, props.step);
  }

  if (!!Object.keys(props.marks).length && !!props.marks[keyToGet]) {
    return props.marks[keyToGet];
  }

  return value;
}
function getKeyboardValueMutator(e, vertical, reverse) {
  var increase = 'increase';
  var decrease = 'decrease';
  var method = increase;

  switch (e.keyCode) {
    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].UP:
      method = vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT:
      method = !vertical && reverse ? decrease : increase;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN:
      method = vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT:
      method = !vertical && reverse ? increase : decrease;
      break;

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].END:
      return function (value, props) {
        return props.max;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].HOME:
      return function (value, props) {
        return props.min;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };

    case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }

  return function (value, props) {
    return calculateNextValue(method, value, props);
  };
}

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Popup.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Popup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


function Popup(props) {
  var showArrow = props.showArrow,
    arrowContent = props.arrowContent,
    children = props.children,
    prefixCls = props.prefixCls,
    id = props.id,
    overlayInnerStyle = props.overlayInnerStyle,
    className = props.className,
    style = props.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-content"), className),
    style: style
  }, showArrow !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(prefixCls, "-arrow"),
    key: "arrow"
  }, arrowContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof children === 'function' ? children() : children));
}

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-tooltip/es/Popup.js");




var _excluded = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];





var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    _props$mouseEnterDela = props.mouseEnterDelay,
    mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
    _props$mouseLeaveDela = props.mouseLeaveDelay,
    mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
    overlayStyle = props.overlayStyle,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    afterVisibleChange = props.afterVisibleChange,
    transitionName = props.transitionName,
    animation = props.animation,
    motion = props.motion,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$align = props.align,
    align = _props$align === void 0 ? {} : _props$align,
    _props$destroyTooltip = props.destroyTooltipOnHide,
    destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
    defaultVisible = props.defaultVisible,
    getTooltipContainer = props.getTooltipContainer,
    overlayInnerStyle = props.overlayInnerStyle,
    arrowContent = props.arrowContent,
    overlay = props.overlay,
    id = props.id,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, _excluded);
  var domRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, function () {
    return domRef.current;
  });
  var extraProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, restProps);
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }
  var getPopupElement = function getPopupElement() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Popup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showArrow: showArrow,
      arrowContent: arrowContent,
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlayInnerStyle: overlayInnerStyle
    }, overlay);
  };
  var destroyTooltip = false;
  var autoDestroy = false;
  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_6__.placements,
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(Tooltip));

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* reexport safe */ _Popup__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/rc-tooltip/es/Tooltip.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-tooltip/es/Popup.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tooltip/es/placements.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "placements": () => (/* binding */ placements)
/* harmony export */ });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placements);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/Mask.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/Mask.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mask)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");






function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
      motionAppear: true
    }, (0,_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_5__.getMotion)({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rc_motion__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-mask"), className)
    });
  });
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/MobilePopupInner.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var MobilePopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender,
      onClick = props.onClick;
  var elementRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_2__.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(rc_motion__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onClick: onClick,
      style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobilePopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/PopupInner.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/PopupInner.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/hooks/useLayoutEffect */ "./node_modules/rc-util/es/hooks/useLayoutEffect.js");
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _useVisibleStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useVisibleStatus */ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/legacyUtil */ "./node_modules/rc-trigger/es/utils/legacyUtil.js");
/* harmony import */ var _useStretchStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useStretchStyle */ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js");












var PopupInner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      forceRender = props.forceRender,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart,
      onClick = props.onClick;
  var alignRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = (0,_useStretchStyle__WEBPACK_IMPORTED_MODULE_10__["default"])(stretch),
      _useStretchStyle2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = (0,_useVisibleStatus__WEBPACK_IMPORTED_MODULE_8__["default"])(visible, doMeasure),
      _useVisibleStatus2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================

  /**
   * `alignedClassName` may modify `source` size,
   * which means one time align may not move to the correct position at once.
   *
   * We will reset `alignTimes` for each status switch to `alignPre`
   * and let `rc-align` to align for multiple times to ensure get final stable place.
   * Currently we mark `alignTimes < 2` repeat align, it will increase if user report for align issue.
   * 
   * Update:
   * In React 18. `rc-align` effect of align may faster than ref called trigger `forceAlign`.
   * We adjust this to `alignTimes < 2`.
   * We need refactor `rc-align` to support mark of `forceAlign` call if this still happen.
   */


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      alignTimes = _useState4[0],
      setAlignTimes = _useState4[1];

  var prepareResolveRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    if (status === 'alignPre') {
      setAlignTimes(0);
    }
  }, [status]); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);

    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    } // We will retry multi times to make sure that the element has been align in the right position.


    setAlignTimes(function (val) {
      return val + 1;
    });

    if (status === 'align') {
      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // Delay to go to next status


  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    if (status === 'align') {
      // Repeat until not more align needed
      if (alignTimes < 3) {
        forceAlign();
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }
    }
  }, [alignTimes]); // ======================== Motion ========================

  var motion = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (0,_utils_legacyUtil__WEBPACK_IMPORTED_MODULE_9__.getMotion)(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, stretchStyle), {}, {
    zIndex: zIndex,
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    // Cannot interact with disappearing elements
    // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
    pointerEvents: !visible && status !== 'stable' ? 'none' : undefined
  }, style); // Align status


  var alignDisabled = true;

  if (align !== null && align !== void 0 && align.points && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react__WEBPACK_IMPORTED_MODULE_3__.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(rc_motion__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender: forceRender
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(rc_align__WEBPACK_IMPORTED_MODULE_4__["default"], {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      onClick: onClick,
      style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Mask */ "./node_modules/rc-trigger/es/Popup/Mask.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/Popup/PopupInner.js");
/* harmony import */ var _MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MobilePopupInner */ "./node_modules/rc-trigger/es/Popup/MobilePopupInner.js");




var _excluded = ["visible", "mobile"];






var Popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(visible),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile((0,rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_MobilePopupInner__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_PopupInner__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Mask__WEBPACK_IMPORTED_MODULE_6__["default"], cloneProps), popupNode);
});
Popup.displayName = 'Popup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useStretchStyle.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useStretchStyle.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (stretch) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    width: 0,
    height: 0
  }),
      _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    var tgtWidth = element.offsetWidth,
        tgtHeight = element.offsetHeight;

    var _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        height = _element$getBoundingC.height; // Rect is more accurate than offset, use if near


    if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
      tgtWidth = width;
      tgtHeight = height;
    }

    setTargetSize({
      width: tgtWidth,
      height: tgtHeight
    });
  } // Merge stretch style


  var style = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup/useVisibleStatus.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup/useVisibleStatus.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/hooks/useState */ "./node_modules/rc-util/es/hooks/useState.js");






/**
 * Popup should follow the steps for each component work correctly:
 * measure - check for the current stretch size
 * align - let component align the position
 * aligned - re-align again in case additional className changed the size
 * afterAlign - choice next step is trigger motion or finished
 * beforeMotion - should reset motion to invisible so that CSSMotion can do normal motion
 * motion - play the motion
 * stable - everything is done
 */

var StatusQueue = ['measure', 'alignPre', 'align', null, 'motion'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (visible, doMeasure) {
  var _useState = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_5__["default"])(null),
      _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  function setStatus(nextStatus) {
    setInternalStatus(nextStatus, true);
  }

  function cancelRaf() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"].cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';

          default:
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;

      default:
    }

    if (status) {
      rafRef.current = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        var index, nextStatus;
        return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return function () {
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});

/***/ }),

/***/ "./node_modules/rc-trigger/es/context.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-trigger/es/context.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TriggerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TriggerContext);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "generateTrigger": () => (/* binding */ generateTrigger)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_alignUtil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/alignUtil */ "./node_modules/rc-trigger/es/utils/alignUtil.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./context */ "./node_modules/rc-trigger/es/context.js");





















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

/**
 * Internal usage. Do not use in your code since this will be removed.
 */
function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Trigger, _React$Component);

    var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Trigger);

    // ensure `getContainer` will be called only once
    function Trigger(props) {
      var _this;

      (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Trigger);

      _this = _super.call(this, props);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "popupRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef());

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "triggerRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createRef());

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "portalContainer", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "attachId", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clickOutsideHandler", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "touchOutsideHandler", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "contextMenuOutsideHandler1", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "contextMenuOutsideHandler2", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mouseDownTimeout", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "focusTime", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "preClickTime", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "preTouchTime", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "delayTimer", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hasPopupMouseDown", void 0);

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMouseEnter", function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMouseMove", function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMouseLeave", function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPopupMouseEnter", function () {
        _this.clearDelayTimer();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPopupMouseLeave", function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && (0,rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_11__["default"])((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFocus", function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMouseDown", function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onTouchStart", function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onBlur", function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onContextMenu", function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onContextMenuClose", function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClick", function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPopupMouseDown", function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDocumentClick", function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if ( // mousedown on the target should also close popup when action is contextMenu.
        // https://github.com/ant-design/ant-design/issues/29853
        (!(0,rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_11__["default"])(root, target) || _this.isContextMenuOnly()) && !(0,rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_11__["default"])(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRootDomNode", function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom__WEBPACK_IMPORTED_MODULE_9___default().findDOMNode((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getPopupClassNameFromAlign", function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push((0,_utils_alignUtil__WEBPACK_IMPORTED_MODULE_17__.getAlignPopupClassName)(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getComponent", function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile,
            forceRender = _this$props2.forceRender,
            onPopupClick = _this$props2.onPopupClick;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_Popup__WEBPACK_IMPORTED_MODULE_18__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile,
          forceRender: forceRender,
          onClick: onPopupClick
        }), typeof popup === 'function' ? popup() : popup);
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "attachParent", function (popupContainer) {
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_10__["default"].cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
            _this.attachParent(popupContainer);
          });
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getContainer", function () {
        if (!_this.portalContainer) {
          // In React.StrictMode component will call render multiple time in first mount.
          // When you want to refactor with FC, useRef will also init multiple time and
          // point to different useRef instance which will create multiple element
          // (This multiple render will not trigger effect so you can not clean up this
          // in effect). But this is safe with class component since it always point to same class instance.
          var getDocument = _this.props.getDocument;
          var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
          // https://github.com/react-component/trigger/issues/41

          popupContainer.style.position = 'absolute';
          popupContainer.style.top = '0';
          popupContainer.style.left = '0';
          popupContainer.style.width = '100%';
          _this.portalContainer = popupContainer;
        }

        _this.attachParent(_this.portalContainer);

        return _this.portalContainer;
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setPoint", function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handlePortalUpdate", function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      });

      (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "triggerContextValue", {
        onPopupMouseDown: _this.onPopupMouseDown
      });

      var _popupVisible;

      if ('popupVisible' in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_14__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_14__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_14__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = (0,rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_14__["default"])(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        rc_util_es_raf__WEBPACK_IMPORTED_MODULE_10__["default"].cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return (0,_utils_alignUtil__WEBPACK_IMPORTED_MODULE_17__.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
    }, {
      key: "setPopupVisible",
      value:
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */
      function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function isContextMenuOnly() {
        var action = this.props.action;
        return action === 'contextMenu' || action.length === 1 && action[0] === 'contextMenu';
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react__WEBPACK_IMPORTED_MODULE_8__.Children.only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_16___default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newChildProps);

        if ((0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_13__.supportRef)(child)) {
          cloneProps.ref = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_13__.composeRef)(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.cloneElement(child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(_context__WEBPACK_IMPORTED_MODULE_19__["default"].Provider, {
          value: this.triggerContextValue
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react__WEBPACK_IMPORTED_MODULE_8__.Component);

  (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Trigger, "contextType", _context__WEBPACK_IMPORTED_MODULE_19__["default"]);

  (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Trigger, "defaultProps", {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  });

  return Trigger;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTrigger(rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_15__["default"]));

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/alignUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/alignUtil.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlignFromPlacement": () => (/* binding */ getAlignFromPlacement),
/* harmony export */   "getAlignPopupClassName": () => (/* binding */ getAlignPopupClassName)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils/legacyUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-trigger/es/utils/legacyUtil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMotion": () => (/* binding */ getMotion)
/* harmony export */ });
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEventListenerWrap)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = (react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates) ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default().unstable_batchedUpdates(cb, e);
  } : cb;
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }
  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback, option);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/canUseDom.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/canUseDom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ canUseDom)
/* harmony export */ });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/contains.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/findDOMNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/findDOMNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findDOMNode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }
  if (node instanceof (react__WEBPACK_IMPORTED_MODULE_0___default().Component)) {
    return react_dom__WEBPACK_IMPORTED_MODULE_1___default().findDOMNode(node);
  }
  return null;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/isVisible.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/isVisible.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof HTMLElement && element.offsetParent) {
    return true;
  }
  if (element instanceof SVGGraphicsElement && element.getBBox) {
    var _element$getBBox = element.getBBox(),
      width = _element$getBBox.width,
      height = _element$getBBox.height;
    if (width || height) {
      return true;
    }
  }
  if (element instanceof HTMLElement && element.getBoundingClientRect) {
    var _element$getBoundingC = element.getBoundingClientRect(),
      _width = _element$getBoundingC.width,
      _height = _element$getBoundingC.height;
    if (_width || _height) {
      return true;
    }
  }
  return false;
});

/***/ }),

/***/ "./node_modules/rc-util/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/KeyCode.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyCode);

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



var Portal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var didUpdate = props.didUpdate,
    getContainer = props.getContainer,
    children = props.children;
  var parentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  // Ref return nothing, only for wrapper check exist
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {};
  });

  // Create container in client side with sync to avoid useEffect not get ref
  var initRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  if (!initRef.current && (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
    containerRef.current = getContainer();
    parentRef.current = containerRef.current.parentNode;
    initRef.current = true;
  }

  // [Legacy] Used by `rc-trigger`
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Restore container to original place
    // React 18 StrictMode will unmount first and mount back for effect test:
    // https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
    if (containerRef.current.parentNode === null && parentRef.current !== null) {
      parentRef.current.appendChild(containerRef.current);
    }
    return function () {
      var _containerRef$current, _containerRef$current2;
      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(children, containerRef.current) : null;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useLayoutEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useLayoutEffect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useLayoutUpdateEffect": () => (/* binding */ useLayoutUpdateEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useLayoutEffect =  true && (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__["default"])() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayoutEffect);
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  var firstMountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  useLayoutEffect(function () {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps);

  // We tell react that first mount has passed
  useLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMemo.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useMemo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMemo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useState.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useState.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSafeState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultValue),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

/***/ }),

/***/ "./node_modules/rc-util/es/isEqual.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/isEqual.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/rc-util/es/warning.js");



/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
  var refSet = new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var circular = refSet.has(a);
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(!circular, 'Warning: There may be circular references');
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(a) === 'object' && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(b) === 'object') {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    // other
    return false;
  }
  return deepEqual(obj1, obj2);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEqual);

/***/ }),

/***/ "./node_modules/rc-util/es/isMobile.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/isMobile.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
});

/***/ }),

/***/ "./node_modules/rc-util/es/raf.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/raf.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapperRaf);

/***/ }),

/***/ "./node_modules/rc-util/es/ref.js":
/*!****************************************!*\
  !*** ./node_modules/rc-util/es/ref.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeRef": () => (/* binding */ composeRef),
/* harmony export */   "fillRef": () => (/* binding */ fillRef),
/* harmony export */   "supportRef": () => (/* binding */ supportRef),
/* harmony export */   "useComposeRef": () => (/* binding */ useComposeRef)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-is */ "./node_modules/rc-util/node_modules/react-is/index.js");
/* harmony import */ var _hooks_useMemo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useMemo */ "./node_modules/rc-util/es/hooks/useMemo.js");

/* eslint-disable no-param-reassign */



function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return (0,_hooks_useMemo__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length === next.length && prev.every(function (ref, i) {
      return ref === next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0,react_is__WEBPACK_IMPORTED_MODULE_1__.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-util/es/warning.js":
/*!********************************************!*\
  !*** ./node_modules/rc-util/es/warning.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "call": () => (/* binding */ call),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "note": () => (/* binding */ note),
/* harmony export */   "noteOnce": () => (/* binding */ noteOnce),
/* harmony export */   "resetWarned": () => (/* binding */ resetWarned),
/* harmony export */   "warning": () => (/* binding */ warning),
/* harmony export */   "warningOnce": () => (/* binding */ warningOnce)
/* harmony export */ });
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function note(valid, message) {
  // Support uglify
  if ( true && !valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js":
/*!********************************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/rc-util/node_modules/react-is/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-util/node_modules/react-is/index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/rc-util/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


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

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

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
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _regeneratorRuntime)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }
  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
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