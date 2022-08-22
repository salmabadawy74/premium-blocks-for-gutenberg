/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "../../node_modules/react-transition-group/index.js")):0}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/classnames/index.js ***!
  \**********************************************/
/***/ (function(module, exports) {

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

/***/ "../../node_modules/dom-helpers/class/addClass.js":
/*!********************************************************!*\
  !*** ../../node_modules/dom-helpers/class/addClass.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "../../node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/dom-helpers/class/hasClass.js":
/*!********************************************************!*\
  !*** ../../node_modules/dom-helpers/class/hasClass.js ***!
  \********************************************************/
/***/ (function(module, exports) {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/dom-helpers/class/removeClass.js":
/*!***********************************************************!*\
  !*** ../../node_modules/dom-helpers/class/removeClass.js ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "../../node_modules/hex-to-rgba/build/index.js":
/*!*****************************************************!*\
  !*** ../../node_modules/hex-to-rgba/build/index.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


var removeHash = function removeHash(hex) {
  return hex.charAt(0) === '#' ? hex.slice(1) : hex;
};

var parseHex = function parseHex(nakedHex) {
  var isShort = nakedHex.length === 3 || nakedHex.length === 4;
  var twoDigitHexR = isShort ? "".concat(nakedHex.slice(0, 1)).concat(nakedHex.slice(0, 1)) : nakedHex.slice(0, 2);
  var twoDigitHexG = isShort ? "".concat(nakedHex.slice(1, 2)).concat(nakedHex.slice(1, 2)) : nakedHex.slice(2, 4);
  var twoDigitHexB = isShort ? "".concat(nakedHex.slice(2, 3)).concat(nakedHex.slice(2, 3)) : nakedHex.slice(4, 6);
  var twoDigitHexA = (isShort ? "".concat(nakedHex.slice(3, 4)).concat(nakedHex.slice(3, 4)) : nakedHex.slice(6, 8)) || 'ff'; // const numericA = +((parseInt(a, 16) / 255).toFixed(2));

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA
  };
};

var hexToDecimal = function hexToDecimal(hex) {
  return parseInt(hex, 16);
};

var hexesToDecimals = function hexesToDecimals(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b,
      a = _ref.a;
  return {
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
    a: +(hexToDecimal(a) / 255).toFixed(2)
  };
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}; // eslint-disable-line no-restricted-globals, max-len


var formatRgb = function formatRgb(decimalObject, parameterA) {
  var r = decimalObject.r,
      g = decimalObject.g,
      b = decimalObject.b,
      parsedA = decimalObject.a;
  var a = isNumeric(parameterA) ? parameterA : parsedA;
  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
};
/**
 * Turns an old-fashioned css hex color value into a rgb color value.
 *
 * If you specify an alpha value, you'll get a rgba() value instead.
 *
 * @param The hex value to convert. ('123456'. '#123456', ''123', '#123')
 * @param An alpha value to apply. (optional) ('0.5', '0.25')
 * @return An rgb or rgba value. ('rgb(11, 22, 33)'. 'rgba(11, 22, 33, 0.5)')
 */


var hexToRgba = function hexToRgba(hex, a) {
  var hashlessHex = removeHash(hex);
  var hexObject = parseHex(hashlessHex);
  var decimalObject = hexesToDecimals(hexObject);
  return formatRgb(decimalObject, a);
};

module.exports = hexToRgba;

/***/ }),

/***/ "../../node_modules/lodash/_DataView.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_DataView.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../../node_modules/lodash/_Hash.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_Hash.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../../node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../../node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../../node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../../node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../../node_modules/lodash/_hashSet.js");

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

/***/ "../../node_modules/lodash/_ListCache.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_ListCache.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../../node_modules/lodash/_listCacheSet.js");

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

/***/ "../../node_modules/lodash/_Map.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Map.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../../node_modules/lodash/_MapCache.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_MapCache.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../../node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../../node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../../node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../../node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../../node_modules/lodash/_mapCacheSet.js");

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

/***/ "../../node_modules/lodash/_Promise.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_Promise.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../../node_modules/lodash/_Set.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Set.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../../node_modules/lodash/_SetCache.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_SetCache.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../../node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "../../node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "../../node_modules/lodash/_setCacheHas.js");

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

/***/ "../../node_modules/lodash/_Stack.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/_Stack.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../../node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../../node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../../node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../../node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../../node_modules/lodash/_stackSet.js");

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

/***/ "../../node_modules/lodash/_Symbol.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_Symbol.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_Uint8Array.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_Uint8Array.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "../../node_modules/lodash/_WeakMap.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_WeakMap.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../../node_modules/lodash/_arrayFilter.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_arrayFilter.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_arrayLikeKeys.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_arrayLikeKeys.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js");

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

/***/ "../../node_modules/lodash/_arrayMap.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_arrayMap.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_arrayPush.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_arrayPush.js ***!
  \***********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_arraySome.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_arraySome.js ***!
  \***********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_assocIndexOf.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_assocIndexOf.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../../node_modules/lodash/eq.js");

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

/***/ "../../node_modules/lodash/_baseEach.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseEach.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "../../node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "../../node_modules/lodash/_createBaseEach.js");

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

/***/ "../../node_modules/lodash/_baseFor.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_baseFor.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "../../node_modules/lodash/_createBaseFor.js");

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

/***/ "../../node_modules/lodash/_baseForOwn.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseForOwn.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "../../node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "../../node_modules/lodash/keys.js");

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

/***/ "../../node_modules/lodash/_baseGet.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_baseGet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "../../node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../node_modules/lodash/_toKey.js");

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

/***/ "../../node_modules/lodash/_baseGetAllKeys.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_baseGetAllKeys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../../node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js");

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

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseGetTag.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

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

/***/ "../../node_modules/lodash/_baseHasIn.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseHasIn.js ***!
  \***********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_baseIsArguments.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseIsArguments.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

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

/***/ "../../node_modules/lodash/_baseIsEqual.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_baseIsEqual.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "../../node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

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

/***/ "../../node_modules/lodash/_baseIsEqualDeep.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseIsEqualDeep.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../../node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../../node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "../../node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "../../node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js");

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

/***/ "../../node_modules/lodash/_baseIsMatch.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_baseIsMatch.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../../node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../../node_modules/lodash/_baseIsEqual.js");

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

/***/ "../../node_modules/lodash/_baseIsNative.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseIsNative.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

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

/***/ "../../node_modules/lodash/_baseIsTypedArray.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_baseIsTypedArray.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

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

/***/ "../../node_modules/lodash/_baseIteratee.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseIteratee.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "../../node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "../../node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../../node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "../../node_modules/lodash/property.js");

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

/***/ "../../node_modules/lodash/_baseKeys.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseKeys.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../../node_modules/lodash/_nativeKeys.js");

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

/***/ "../../node_modules/lodash/_baseMap.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_baseMap.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "../../node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js");

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

/***/ "../../node_modules/lodash/_baseMatches.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_baseMatches.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "../../node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "../../node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "../../node_modules/lodash/_matchesStrictComparable.js");

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

/***/ "../../node_modules/lodash/_baseMatchesProperty.js":
/*!*********************************************************!*\
  !*** ../../node_modules/lodash/_baseMatchesProperty.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../../node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "../../node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "../../node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "../../node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "../../node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../node_modules/lodash/_toKey.js");

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

/***/ "../../node_modules/lodash/_baseProperty.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseProperty.js ***!
  \**************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_basePropertyDeep.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_basePropertyDeep.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../node_modules/lodash/_baseGet.js");

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

/***/ "../../node_modules/lodash/_baseTimes.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseTimes.js ***!
  \***********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_baseToString.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseToString.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/lodash/isSymbol.js");

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

/***/ "../../node_modules/lodash/_baseUnary.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseUnary.js ***!
  \***********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_cacheHas.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_cacheHas.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_castPath.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_castPath.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "../../node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "../../node_modules/lodash/toString.js");

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

/***/ "../../node_modules/lodash/_coreJsData.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_coreJsData.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../../node_modules/lodash/_createBaseEach.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_createBaseEach.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js");

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

/***/ "../../node_modules/lodash/_createBaseFor.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_createBaseFor.js ***!
  \***************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_equalArrays.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_equalArrays.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../../node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "../../node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../../node_modules/lodash/_cacheHas.js");

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

/***/ "../../node_modules/lodash/_equalByTag.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_equalByTag.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../../node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "../../node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../../node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../../node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../../node_modules/lodash/_setToArray.js");

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

/***/ "../../node_modules/lodash/_equalObjects.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_equalObjects.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../../node_modules/lodash/_getAllKeys.js");

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

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_freeGlobal.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../../node_modules/lodash/_getAllKeys.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_getAllKeys.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../../node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../../node_modules/lodash/keys.js");

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

/***/ "../../node_modules/lodash/_getMapData.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_getMapData.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../../node_modules/lodash/_isKeyable.js");

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

/***/ "../../node_modules/lodash/_getMatchData.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_getMatchData.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "../../node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "../../node_modules/lodash/keys.js");

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

/***/ "../../node_modules/lodash/_getNative.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getNative.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../node_modules/lodash/_getValue.js");

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

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getRawTag.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

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

/***/ "../../node_modules/lodash/_getSymbols.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_getSymbols.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../../node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../../node_modules/lodash/stubArray.js");

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

/***/ "../../node_modules/lodash/_getTag.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_getTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "../../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

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

/***/ "../../node_modules/lodash/_getValue.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_getValue.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_hasPath.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hasPath.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "../../node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../node_modules/lodash/_toKey.js");

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

/***/ "../../node_modules/lodash/_hashClear.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_hashClear.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

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

/***/ "../../node_modules/lodash/_hashDelete.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_hashDelete.js ***!
  \************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_hashGet.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hashGet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

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

/***/ "../../node_modules/lodash/_hashHas.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hashHas.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

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

/***/ "../../node_modules/lodash/_hashSet.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hashSet.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

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

/***/ "../../node_modules/lodash/_isIndex.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_isIndex.js ***!
  \*********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_isKey.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/_isKey.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/lodash/isSymbol.js");

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

/***/ "../../node_modules/lodash/_isKeyable.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_isKeyable.js ***!
  \***********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_isMasked.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_isMasked.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../node_modules/lodash/_coreJsData.js");

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

/***/ "../../node_modules/lodash/_isPrototype.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_isPrototype.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_isStrictComparable.js":
/*!********************************************************!*\
  !*** ../../node_modules/lodash/_isStrictComparable.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

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

/***/ "../../node_modules/lodash/_listCacheClear.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_listCacheClear.js ***!
  \****************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_listCacheDelete.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_listCacheDelete.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

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

/***/ "../../node_modules/lodash/_listCacheGet.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_listCacheGet.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

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

/***/ "../../node_modules/lodash/_listCacheHas.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_listCacheHas.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

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

/***/ "../../node_modules/lodash/_listCacheSet.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_listCacheSet.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

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

/***/ "../../node_modules/lodash/_mapCacheClear.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheClear.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "../../node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js");

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

/***/ "../../node_modules/lodash/_mapCacheDelete.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheDelete.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

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

/***/ "../../node_modules/lodash/_mapCacheGet.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheGet.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

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

/***/ "../../node_modules/lodash/_mapCacheHas.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheHas.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

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

/***/ "../../node_modules/lodash/_mapCacheSet.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheSet.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

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

/***/ "../../node_modules/lodash/_mapToArray.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_mapToArray.js ***!
  \************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_matchesStrictComparable.js":
/*!*************************************************************!*\
  !*** ../../node_modules/lodash/_matchesStrictComparable.js ***!
  \*************************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_memoizeCapped.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_memoizeCapped.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "../../node_modules/lodash/memoize.js");

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

/***/ "../../node_modules/lodash/_nativeCreate.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_nativeCreate.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "../../node_modules/lodash/_nativeKeys.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_nativeKeys.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_nodeUtil.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_nodeUtil.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

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

/***/ "../../node_modules/lodash/_objectToString.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_objectToString.js ***!
  \****************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_overArg.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_overArg.js ***!
  \*********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_root.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_root.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/_setCacheAdd.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_setCacheAdd.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_setCacheHas.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_setCacheHas.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_setToArray.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_setToArray.js ***!
  \************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_stackClear.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_stackClear.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js");

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

/***/ "../../node_modules/lodash/_stackDelete.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_stackDelete.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_stackGet.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_stackGet.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_stackHas.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_stackHas.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/_stackSet.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_stackSet.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../../node_modules/lodash/_MapCache.js");

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

/***/ "../../node_modules/lodash/_stringToPath.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_stringToPath.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "../../node_modules/lodash/_memoizeCapped.js");

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

/***/ "../../node_modules/lodash/_toKey.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/_toKey.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "../../node_modules/lodash/isSymbol.js");

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

/***/ "../../node_modules/lodash/_toSource.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_toSource.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/eq.js":
/*!***************************************!*\
  !*** ../../node_modules/lodash/eq.js ***!
  \***************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/get.js":
/*!****************************************!*\
  !*** ../../node_modules/lodash/get.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../../node_modules/lodash/_baseGet.js");

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

/***/ "../../node_modules/lodash/hasIn.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/hasIn.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "../../node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "../../node_modules/lodash/_hasPath.js");

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

/***/ "../../node_modules/lodash/identity.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/identity.js ***!
  \*********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/isArguments.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArguments.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

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

/***/ "../../node_modules/lodash/isArray.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/isArray.js ***!
  \********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/isArrayLike.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArrayLike.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js");

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

/***/ "../../node_modules/lodash/isBuffer.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isBuffer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../node_modules/lodash/stubFalse.js");

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

/***/ "../../node_modules/lodash/isFunction.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/isFunction.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

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

/***/ "../../node_modules/lodash/isLength.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isLength.js ***!
  \*********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/isObject.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isObject.js ***!
  \*********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isObjectLike.js ***!
  \*************************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/isSymbol.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isSymbol.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

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

/***/ "../../node_modules/lodash/isTypedArray.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isTypedArray.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../node_modules/lodash/_nodeUtil.js");

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

/***/ "../../node_modules/lodash/keys.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/keys.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js");

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

/***/ "../../node_modules/lodash/map.js":
/*!****************************************!*\
  !*** ../../node_modules/lodash/map.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../../node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "../../node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js");

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

/***/ "../../node_modules/lodash/memoize.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/memoize.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../../node_modules/lodash/_MapCache.js");

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

/***/ "../../node_modules/lodash/property.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/property.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "../../node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "../../node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../../node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../../node_modules/lodash/_toKey.js");

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

/***/ "../../node_modules/lodash/stubArray.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/stubArray.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/stubFalse.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/stubFalse.js ***!
  \**********************************************/
/***/ (function(module) {

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

/***/ "../../node_modules/lodash/toString.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/toString.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "../../node_modules/lodash/_baseToString.js");

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

/***/ "../../node_modules/object-assign/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/object-assign/index.js ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!*******************************************************!*\
  !*** ../../node_modules/prop-types/checkPropTypes.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "../../node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!****************************************************************!*\
  !*** ../../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "../../node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/prop-types/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/prop-types/lib/has.js":
/*!************************************************!*\
  !*** ../../node_modules/prop-types/lib/has.js ***!
  \************************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-is/cjs/react-is.development.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports) {

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

/***/ "../../node_modules/react-is/index.js":
/*!********************************************!*\
  !*** ../../node_modules/react-is/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": function() { return /* binding */ polyfill; }
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "../../node_modules/react-transition-group/CSSTransition.js":
/*!******************************************************************!*\
  !*** ../../node_modules/react-transition-group/CSSTransition.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "../../node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "../../node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "../../node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "../../node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : 0;
var _default = CSSTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/react-transition-group/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/react-transition-group/ReplaceTransition.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "../../node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
var _default = ReplaceTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/react-transition-group/Transition.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-transition-group/Transition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "../../node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : 0;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports["default"] = _default;

/***/ }),

/***/ "../../node_modules/react-transition-group/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ../../node_modules/react-transition-group/TransitionGroup.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "../../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "../../node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : 0;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "../../node_modules/react-transition-group/index.js":
/*!**********************************************************!*\
  !*** ../../node_modules/react-transition-group/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "../../node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "../../node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "../../node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "../../node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "../../node_modules/react-transition-group/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/react-transition-group/utils/ChildMapping.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "react");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "../../node_modules/react-transition-group/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ../../node_modules/react-transition-group/utils/PropTypes.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : 0;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : 0;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "../../assets/js/settings.js":
/*!***********************************!*\
  !*** ../../assets/js/settings.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontAwesomeEnabled": function() { return /* binding */ FontAwesomeEnabled; },
/* harmony export */   "JsonUploadEnabled": function() { return /* binding */ JsonUploadEnabled; },
/* harmony export */   "accordion": function() { return /* binding */ accordion; },
/* harmony export */   "banner": function() { return /* binding */ banner; },
/* harmony export */   "bulletList": function() { return /* binding */ bulletList; },
/* harmony export */   "button": function() { return /* binding */ button; },
/* harmony export */   "container": function() { return /* binding */ container; },
/* harmony export */   "countUp": function() { return /* binding */ countUp; },
/* harmony export */   "dualHeading": function() { return /* binding */ dualHeading; },
/* harmony export */   "fancyText": function() { return /* binding */ fancyText; },
/* harmony export */   "heading": function() { return /* binding */ heading; },
/* harmony export */   "icon": function() { return /* binding */ icon; },
/* harmony export */   "iconBox": function() { return /* binding */ iconBox; },
/* harmony export */   "imageSeparator": function() { return /* binding */ imageSeparator; },
/* harmony export */   "lottie": function() { return /* binding */ lottie; },
/* harmony export */   "maps": function() { return /* binding */ maps; },
/* harmony export */   "modal": function() { return /* binding */ modal; },
/* harmony export */   "person": function() { return /* binding */ person; },
/* harmony export */   "pricingTable": function() { return /* binding */ pricingTable; },
/* harmony export */   "testimonial": function() { return /* binding */ testimonial; },
/* harmony export */   "videoBox": function() { return /* binding */ videoBox; }
/* harmony export */ });
/*import premiumLogo from "./logo";
wp.blocks.updateCategory("premium-blocks", { icon: premiumLogo });*/
//Blocks Keys
const {
  banner,
  dualHeading,
  pricingTable,
  maps,
  testimonial,
  countUp,
  icon,
  button,
  container,
  accordion,
  iconBox,
  videoBox,
  fancyText,
  lottie,
  modal,
  bulletList,
  person,
  heading,
  imageSeparator // contentSwitcher

} = PremiumBlocksSettings.activeBlocks; //Plugin Config Keys

const {
  FontAwesomeEnabled
} = FontAwesomeConfig;
const {
  JsonUploadEnabled
} = JsonUploadFile;

/***/ }),

/***/ "../../blocks-config/block-icons.js":
/*!******************************************!*\
  !*** ../../blocks-config/block-icons.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (PBG_Block_Icons);

/***/ }),

/***/ "./icon/deprecated.js":
/*!****************************!*\
  !*** ./icon/deprecated.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hex-to-rgba */ "../../node_modules/hex-to-rgba/build/index.js");
/* harmony import */ var hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hex_to_rgba__WEBPACK_IMPORTED_MODULE_2__);

const className = "premium-icon";

const {
  __
} = wp.i18n;

const attributes = {
  iconBorder: {
    type: "boolean",
    default: false
  },
  wrapBorder: {
    type: "boolean",
    default: false
  },
  iconType: {
    type: "string",
    default: "dash"
  },
  selectedIcon: {
    type: "string",
    default: "dashicons dashicons-admin-site"
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
    type: "number"
  },
  iconSizeUnit: {
    type: "string",
    default: "px"
  },
  iconColor: {
    type: "string",
    default: "#6ec1e4"
  },
  iconBack: {
    type: "string"
  },
  iconOpacity: {
    type: "number",
    default: "1"
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
  paddingU: {
    type: "string",
    default: "px"
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
  iconBorderTop: {
    type: "number",
    default: 1
  },
  iconBorderRight: {
    type: "number",
    default: 1
  },
  iconBorderBottom: {
    type: "number",
    default: 1
  },
  iconBorderLeft: {
    type: "number",
    default: 1
  },
  borderRadius: {
    type: "number",
    default: 100
  },
  borderColor: {
    type: "string"
  },
  backgroundColor: {
    type: "string"
  },
  backgroundOpacity: {
    type: "number",
    default: "1"
  },
  background: {
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
  wrapBorderType: {
    type: "string",
    default: "none"
  },
  wrapBorderWidth: {
    type: "number",
    default: "1"
  },
  wrapBorderTop: {
    type: "number",
    default: 1
  },
  wrapBorderRight: {
    type: "number",
    default: 1
  },
  wrapBorderBottom: {
    type: "number",
    default: 1
  },
  wrapBorderLeft: {
    type: "number",
    default: 1
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
  wrapShadowColor: {
    type: "string"
  },
  wrapShadowBlur: {
    type: "number",
    default: "0"
  },
  wrapShadowHorizontal: {
    type: "number",
    default: "0"
  },
  wrapShadowVertical: {
    type: "number",
    default: "0"
  },
  wrapShadowPosition: {
    type: "string",
    default: ""
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
  iconStyles: {
    type: "array",
    default: [{
      iconSizeUnit: 'px',
      iconSize: '',
      iconColor: '',
      iconBack: '',
      iconOpacity: '1',
      borderType: 'none',
      borderWidth: '1',
      iconBorderTop: '1',
      iconBorderRight: '1',
      iconBorderBottom: '1',
      iconBorderLeft: '1',
      borderColor: '',
      borderRadius: '100',
      shadowColor: '',
      shadowBlur: '',
      shadowHorizontal: '',
      shadowVertical: ''
    }]
  },
  containerStyles: {
    type: "array",
    default: [{
      containerBack: '',
      backgroundOpacity: 1,
      backgroundImageID: '',
      backgroundImageURL: '',
      backgroundRepeat: 'no-reapet',
      backgroundPosition: 'top center',
      backgroundSize: 'auto',
      fixed: false,
      wrapBorderType: 'none',
      wrapBorderWidth: '1',
      wrapBorderTop: '1',
      wrapBorderRight: '1',
      wrapBorderBottom: '1',
      wrapBorderLeft: '1',
      wrapBorderColor: '',
      wrapBorderRadius: '',
      wrapShadowColor: '',
      wrapShadowBlur: '0',
      wrapShadowHorizontal: '0',
      wrapShadowVertical: '0',
      wrapShadowPosition: '',
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
  },
  paddingTTablet: {
    type: "number"
  },
  paddingRTablet: {
    type: "number"
  },
  paddingBTablet: {
    type: "number"
  },
  paddingLTablet: {
    type: "number"
  },
  paddingTMobile: {
    type: "number"
  },
  paddingRMobile: {
    type: "number"
  },
  paddingBMobile: {
    type: "number"
  },
  paddingLMobile: {
    type: "number"
  },
  wrapPaddingTTablet: {
    type: "number"
  },
  wrapPaddingRTablet: {
    type: "number"
  },
  wrapPaddingBTablet: {
    type: "number"
  },
  wrapPaddingLTablet: {
    type: "number"
  },
  wrapPaddingTMobile: {
    type: "number"
  },
  wrapPaddingRMobile: {
    type: "number"
  },
  wrapPaddingBMobile: {
    type: "number"
  },
  wrapPaddingLMobile: {
    type: "number"
  },
  marginTTablet: {
    type: "number"
  },
  marginRTablet: {
    type: "number"
  },
  marginBTablet: {
    type: "number"
  },
  marginLTablet: {
    type: "number"
  },
  marginTMobile: {
    type: "number"
  },
  marginRMobile: {
    type: "number"
  },
  marginBMobile: {
    type: "number"
  },
  marginLMobile: {
    type: "number"
  },
  wrapMarginTTablet: {
    type: "number"
  },
  wrapMarginRTablet: {
    type: "number"
  },
  wrapMarginBTablet: {
    type: "number"
  },
  wrapMarginLTablet: {
    type: "number"
  },
  wrapMarginTMobile: {
    type: "number"
  },
  wrapMarginRMobile: {
    type: "number"
  },
  wrapMarginBMobile: {
    type: "number"
  },
  wrapMarginLMobile: {
    type: "number"
  }
};
const deprecated_attributes = Object.assign(attributes, new_attributes);
const deprecatedContent = [{
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      blockId: '',
      classMigrate: '',
      iconAlign: {
        "Desktop": attributes.align,
        "Tablet": attributes.align,
        "Mobile": attributes.align
      },
      iconSize: {
        unit: attributes.iconStyles[0].iconSizeUnit,
        "Desktop": attributes.iconStyles[0].iconSize
      },
      iconMargin: {
        "Desktop": {
          top: attributes.marginT,
          right: attributes.marginR,
          bottom: attributes.marginB,
          left: attributes.marginL
        },
        "Tablet": {
          top: attributes.marginTTablet,
          right: attributes.marginRTablet,
          bottom: attributes.marginBTablet,
          left: attributes.marginLTablet
        },
        "Mobile": {
          top: attributes.marginTMobile,
          right: attributes.marginRMobile,
          bottom: attributes.marginBMobile,
          left: attributes.marginLMobile
        },
        unit: "px"
      },
      iconPadding: {
        "Desktop": {
          top: attributes.paddingT,
          right: attributes.paddingR,
          bottom: attributes.paddingB,
          left: attributes.paddingL
        },
        "Tablet": {
          top: attributes.paddingTTablet,
          right: attributes.paddingRTablet,
          bottom: attributes.paddingBTablet,
          left: attributes.paddingLTablet
        },
        "Mobile": {
          top: attributes.paddingTMobile,
          right: attributes.paddingRMobile,
          bottom: attributes.paddingBMobile,
          left: attributes.paddingLMobile
        },
        unit: attributes.paddingU
      },
      wrapMargin: {
        "Desktop": {
          top: attributes.wrapMarginT,
          right: attributes.wrapMarginR,
          bottom: attributes.wrapMarginB,
          left: attributes.wrapMarginL
        },
        "Tablet": {
          top: attributes.wrapMarginTTablet,
          right: attributes.wrapMarginRTablet,
          bottom: attributes.wrapMarginBTablet,
          left: attributes.wrapMarginLTablet
        },
        "Mobile": {
          top: attributes.wrapMarginTMobile,
          right: attributes.wrapMarginRMobile,
          bottom: attributes.wrapMarginBMobile,
          left: attributes.wrapMarginLMobile
        },
        unit: 'px'
      },
      wrapPadding: {
        "Desktop": {
          top: attributes.wrapPaddingT,
          right: attributes.wrapPaddingR,
          bottom: attributes.wrapPaddingB,
          left: attributes.wrapPaddingL
        },
        "Tablet": {
          top: attributes.wrapPaddingTTablet,
          right: attributes.wrapPaddingRTablet,
          bottom: attributes.wrapPaddingBTablet,
          left: attributes.wrapPaddingLTablet
        },
        "Mobile": {
          top: attributes.wrapPaddingTMobile,
          right: attributes.wrapPaddingRMobile,
          bottom: attributes.wrapPaddingBMobile,
          left: attributes.wrapPaddingLMobile
        },
        unit: 'px'
      },
      iconBorder: {
        borderColor: attributes.iconStyles[0].borderColor,
        borderType: attributes.iconStyles[0].borderType,
        borderRadius: {
          "Desktop": {
            top: attributes.iconStyles[0].borderRadius,
            right: attributes.iconStyles[0].borderRadius,
            bottom: attributes.iconStyles[0].borderRadius,
            left: attributes.iconStyles[0].borderRadius
          },
          "Tablet": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          },
          "Mobile": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          }
        },
        borderWidth: {
          "Desktop": {
            top: attributes.iconBorderTop,
            right: attributes.iconBorderRight,
            bottom: attributes.iconBorderBottom,
            left: attributes.iconBorderLeft
          },
          "Tablet": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          },
          "Mobile": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          }
        }
      },
      containerBorder: {
        borderColor: attributes.containerStyles[0].wrapBorderColor,
        borderType: attributes.containerStyles[0].wrapBorderType,
        borderRadius: {
          "Desktop": {
            top: attributes.containerStyles[0].wrapBorderRadius,
            right: attributes.containerStyles[0].wrapBorderRadius,
            bottom: attributes.containerStyles[0].wrapBorderRadius,
            left: attributes.containerStyles[0].wrapBorderRadius
          },
          "Tablet": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          },
          "Mobile": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          }
        },
        borderWidth: {
          "Desktop": {
            top: attributes.wrapBorderTop,
            right: attributes.wrapBorderRight,
            bottom: attributes.wrapBorderBottom,
            left: attributes.wrapBorderLeft
          },
          "Tablet": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          },
          "Mobile": {
            top: "",
            right: "",
            bottom: "",
            left: ""
          }
        }
      },
      containerBackground: {
        'backgroundType': attributes.backgroundType,
        'backgroundColor': attributes.containerStyles[0].containerBack,
        'backgroundImageID': attributes.containerStyles[0].backgroundImageID,
        'backgroundImageURL': attributes.containerStyles[0].backgroundImageURL,
        'backgroundPosition': attributes.containerStyles[0].backgroundPosition,
        'backgroundRepeat': attributes.containerStyles[0].backgroundRepeat,
        'backgroundSize': attributes.containerStyles[0].backgroundSize,
        'fixed': attributes.containerStyles[0].fixed,
        'gradientLocationOne': attributes.containerStyles[0].gradientLocationOne,
        'gradientColorTwo': attributes.containerStyles[0].gradientColorTwo,
        'gradientLocationTwo': attributes.containerStyles[0].gradientLocationTwo,
        'gradientAngle': attributes.containerStyles[0].gradientAngle,
        'gradientPosition': attributes.containerStyles[0].gradientPosition,
        'gradientType': attributes.containerStyles[0].gradientType
      },
      containerShadow: {
        'color': attributes.containerStyles[0].wrapShadowColor,
        'blur': attributes.containerStyles[0].wrapShadowBlur,
        'horizontal': attributes.containerStyles[0].wrapShadowHorizontal,
        'vertical': attributes.containerStyles[0].wrapShadowVertical,
        'position': attributes.containerStyles[0].wrapShadowPosition
      },
      iconShadow: {
        'color': attributes.iconStyles[0].shadowColor,
        'blur': attributes.iconStyles[0].shadowBlur,
        'horizontal': attributes.iconStyles[0].shadowHorizontal,
        'vertical': attributes.iconStyles[0].shadowVertical
      }
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      iconBorder,
      wrapBorder,
      selectedIcon,
      align,
      hoverEffect,
      iconStyles,
      containerStyles,
      borderWidth,
      iconBorderTop,
      iconBorderRight,
      iconBorderBottom,
      iconBorderLeft,
      wrapBorderWidth,
      wrapBorderTop,
      wrapBorderRight,
      wrapBorderBottom,
      wrapBorderLeft,
      urlCheck,
      link,
      target,
      hideDesktop,
      hideTablet,
      hideMobile,
      backgroundType
    } = props.attributes;
    const mainClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className);
    let btnGrad, btnGrad2, btnbg;

    if ('gradient' === backgroundType) {
      btnGrad = 'transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack;
      btnGrad2 = undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777';

      if ('radial' === containerStyles[0].gradientType) {
        btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
      } else if ('radial' !== containerStyles[0].gradientType) {
        btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
      }
    } else {
      btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : '';
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${mainClasses}__container ${hideDesktop} ${hideTablet} ${hideMobile}`,
      style: {
        textAlign: align,
        backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
        backgroundImage: btnbg,
        backgroundRepeat: containerStyles[0].backgroundRepeat,
        backgroundPosition: containerStyles[0].backgroundPosition,
        backgroundSize: containerStyles[0].backgroundSize,
        backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
        borderStyle: containerStyles[0].wrapBorderType,
        borderWidth: wrapBorder ? `${wrapBorderTop}px ${wrapBorderRight}px ${wrapBorderBottom}px ${wrapBorderLeft}px` : wrapBorderWidth + "px",
        borderRadius: containerStyles[0].wrapBorderRadius + "px",
        borderColor: containerStyles[0].wrapBorderColor,
        boxShadow: `${containerStyles[0].wrapShadowHorizontal || 0}px ${containerStyles[0].wrapShadowVertical || 0}px ${containerStyles[0].wrapShadowBlur || 0}px ${containerStyles[0].wrapShadowColor} ${containerStyles[0].wrapShadowPosition}`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `premium-icon__link`,
      href: urlCheck && link,
      rel: "noopener noreferrer",
      target: target ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `premium-icon ${selectedIcon} premium-icon__${hoverEffect}`,
      style: {
        color: iconStyles[0].iconColor || "#6ec1e4",
        backgroundColor: iconStyles[0].iconBack,
        fontSize: (iconStyles[0].iconSize || 50) + iconStyles[0].iconSizeUnit,
        borderStyle: iconStyles[0].borderType,
        borderWidth: iconBorder ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px` : borderWidth + "px",
        borderRadius: iconStyles[0].borderRadius || 100 + "px",
        borderColor: iconStyles[0].borderColor,
        textShadow: `${iconStyles[0].shadowHorizontal || 0}px ${iconStyles[0].shadowVertical || 0}px ${iconStyles[0].shadowBlur || 0}px ${iconStyles[0].shadowColor}`
      }
    })));
  }
}, {
  attributes: deprecated_attributes,
  migrate: attributes => {
    let newAttributes = {
      iconStyles: [{
        iconSizeUnit: attributes.iconSizeUnit,
        iconSize: attributes.iconSize,
        iconColor: attributes.iconColor,
        iconBack: attributes.iconBack,
        iconOpacity: attributes.iconOpacity,
        borderType: attributes.borderType,
        borderWidth: attributes.borderWidth,
        iconBorderTop: attributes.iconBorderTop,
        iconBorderRight: attributes.iconBorderRight,
        iconBorderBottom: attributes.iconBorderBottom,
        iconBorderLeft: attributes.iconBorderLeft,
        borderColor: attributes.borderColor,
        borderRadius: attributes.borderRadius,
        shadowColor: attributes.shadowColor,
        shadowBlur: attributes.shadowBlur,
        shadowHorizontal: attributes.shadowHorizontal,
        shadowVertical: attributes.shadowVertical
      }],
      containerStyles: [{
        containerBack: attributes.backgroundColor,
        backgroundOpacity: attributes.backgroundOpacity,
        backgroundImageID: attributes.imageID,
        backgroundImageURL: attributes.imageURL,
        backgroundRepeat: attributes.backgroundRepeat,
        backgroundPosition: attributes.backgroundPosition,
        backgroundSize: attributes.backgroundSize,
        fixed: attributes.fixed,
        wrapBorderType: attributes.wrapBorderType,
        wrapBorderWidth: attributes.wrapBorderWidth,
        wrapBorderTop: attributes.wrapBorderTop,
        wrapBorderRight: attributes.wrapBorderRight,
        wrapBorderBottom: attributes.wrapBorderBottom,
        wrapBorderLeft: attributes.wrapBorderLeft,
        wrapBorderColor: attributes.wrapBorderColor,
        wrapBorderRadius: attributes.wrapBorderRadius,
        wrapShadowColor: attributes.wrapShadowColor,
        wrapShadowBlur: attributes.wrapShadowBlur,
        wrapShadowHorizontal: attributes.wrapShadowHorizontal,
        wrapShadowVertical: attributes.wrapShadowVertical,
        wrapShadowPosition: attributes.wrapShadowPosition,
        gradientLocationOne: '0',
        gradientColorTwo: '',
        gradientLocationTwo: '100',
        gradientType: 'linear',
        gradientAngle: '180',
        gradientPosition: 'center center'
      }],
      backgroundType: 'solid',
      paddingTTablet: '',
      paddingRTablet: '',
      paddingBTablet: '',
      paddingLTablet: '',
      paddingTMobile: '',
      paddingRMobile: '',
      paddingBMobile: '',
      paddingLMobile: '',
      wrapPaddingTTablet: '',
      wrapPaddingRTablet: '',
      wrapPaddingBTablet: '',
      wrapPaddingLTablet: '',
      wrapPaddingTMobile: '',
      wrapPaddingRMobile: '',
      wrapPaddingBMobile: '',
      wrapPaddingLMobile: '',
      marginTTablet: '',
      marginRTablet: '',
      marginBTablet: '',
      marginLTablet: '',
      marginTMobile: '',
      marginRMobile: '',
      marginBMobile: '',
      marginLMobile: '',
      wrapMarginTTablet: '',
      wrapMarginRTablet: '',
      wrapMarginBTablet: '',
      wrapMarginLTablet: '',
      wrapMarginTMobile: '',
      wrapMarginRMobile: '',
      wrapMarginBMobile: '',
      wrapMarginLMobile: ''
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      wrapBorder,
      iconBorder,
      selectedIcon,
      align,
      hoverEffect,
      iconSize,
      iconSizeUnit,
      iconColor,
      iconBack,
      shadowBlur,
      shadowColor,
      shadowHorizontal,
      shadowVertical,
      paddingT,
      paddingR,
      paddingB,
      paddingL,
      paddingU,
      marginT,
      marginR,
      marginB,
      marginL,
      borderType,
      borderWidth,
      iconBorderTop,
      iconBorderRight,
      iconBorderBottom,
      iconBorderLeft,
      borderRadius,
      borderColor,
      backgroundColor,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      wrapBorderType,
      wrapBorderWidth,
      wrapBorderTop,
      wrapBorderRight,
      wrapBorderBottom,
      wrapBorderLeft,
      wrapBorderRadius,
      wrapBorderColor,
      wrapShadowBlur,
      wrapShadowColor,
      wrapShadowHorizontal,
      wrapShadowVertical,
      wrapShadowPosition,
      wrapPaddingT,
      wrapPaddingR,
      wrapPaddingB,
      wrapPaddingL,
      wrapMarginT,
      wrapMarginR,
      wrapMarginB,
      wrapMarginL,
      urlCheck,
      link,
      target,
      iconOpacity,
      backgroundOpacity,
      hideDesktop,
      hideTablet,
      hideMobile
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container ${hideDesktop} ${hideTablet} ${hideMobile}`,
      style: {
        textAlign: align,
        backgroundColor: backgroundColor ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default()(backgroundColor, backgroundOpacity) : "transparent",
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        borderStyle: wrapBorderType,
        borderWidth: wrapBorder ? `${wrapBorderTop}px ${wrapBorderRight}px ${wrapBorderBottom}px ${wrapBorderLeft}px` : wrapBorderWidth + "px",
        borderRadius: wrapBorderRadius + "px",
        borderColor: wrapBorderColor,
        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0}px ${wrapShadowBlur || 0}px ${wrapShadowColor} ${wrapShadowPosition}`,
        paddingTop: wrapPaddingT,
        paddingRight: wrapPaddingR,
        paddingBottom: wrapPaddingB,
        paddingLeft: wrapPaddingL,
        marginTop: wrapMarginT,
        marginRight: wrapMarginR,
        marginBottom: wrapMarginB,
        marginLeft: wrapMarginL
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `premium-icon__link`,
      href: urlCheck && link,
      rel: "noopener noreferrer",
      target: target ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `premium-icon ${selectedIcon} premium-icon__${hoverEffect}`,
      style: {
        color: iconColor || "#6ec1e4",
        backgroundColor: iconBack ? hex_to_rgba__WEBPACK_IMPORTED_MODULE_2___default()(iconBack, iconOpacity) : "transparent",
        fontSize: (iconSize || 50) + iconSizeUnit,
        paddingTop: paddingT + paddingU,
        paddingRight: paddingR + paddingU,
        paddingBottom: paddingB + paddingU,
        paddingLeft: paddingL + paddingU,
        marginTop: marginT,
        marginRight: marginR,
        marginBottom: marginB,
        marginLeft: marginL,
        borderStyle: borderType,
        borderWidth: iconBorder ? `${iconBorderTop}px ${iconBorderRight}px ${iconBorderBottom}px ${iconBorderLeft}px` : borderWidth + "px",
        borderRadius: borderRadius || 100 + "px",
        borderColor: borderColor,
        textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0}px ${shadowBlur || 0}px ${shadowColor}`
      }
    })));
  }
}, {
  attributes: attributes,
  save: props => {
    const {
      selectedIcon,
      align,
      hoverEffect,
      iconSize,
      iconSizeUnit,
      iconColor,
      iconBack,
      shadowBlur,
      shadowColor,
      shadowHorizontal,
      shadowVertical,
      paddingT,
      paddingR,
      paddingB,
      paddingL,
      marginT,
      marginR,
      marginB,
      marginL,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      backgroundColor,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      wrapBorderType,
      wrapBorderWidth,
      wrapBorderRadius,
      wrapBorderColor,
      wrapShadowBlur,
      wrapShadowColor,
      wrapShadowHorizontal,
      wrapShadowVertical,
      wrapShadowPosition,
      wrapPaddingT,
      wrapPaddingR,
      wrapPaddingB,
      wrapPaddingL,
      wrapMarginT,
      wrapMarginR,
      wrapMarginB,
      wrapMarginL,
      urlCheck,
      link,
      target
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
      style: {
        textAlign: align,
        backgroundColor: backgroundColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: wrapBorderType,
        borderWidth: wrapBorderWidth + "px",
        borderRadius: wrapBorderRadius + "px",
        borderColor: wrapBorderColor,
        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0}px ${wrapShadowBlur || 0}px ${wrapShadowColor} ${wrapShadowPosition}`,
        paddingTop: wrapPaddingT,
        paddingRight: wrapPaddingR,
        paddingBottom: wrapPaddingB,
        paddingLeft: wrapPaddingL,
        marginTop: wrapMarginT,
        marginRight: wrapMarginR,
        marginBottom: wrapMarginB,
        marginLeft: wrapMarginL
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: urlCheck && link,
      rel: "noopener noreferrer",
      target: target ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${className} ${selectedIcon} ${className}__${hoverEffect}`,
      style: {
        color: iconColor || "#6ec1e4",
        backgroundColor: iconBack,
        fontSize: (iconSize || 50) + iconSizeUnit,
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
        borderRadius: borderRadius || 100 + "px",
        borderColor: borderColor,
        textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0}px ${shadowBlur || 0}px ${shadowColor}`
      }
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      iconSizeUnit: "px"
    };
    return Object.assign(attributes, newAttributes);
  },
  save: props => {
    const {
      selectedIcon,
      align,
      hoverEffect,
      iconSize,
      iconColor,
      iconBack,
      shadowBlur,
      shadowColor,
      shadowHorizontal,
      shadowVertical,
      paddingT,
      paddingR,
      paddingB,
      paddingL,
      marginT,
      marginR,
      marginB,
      marginL,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      backgroundColor,
      imageURL,
      fixed,
      backgroundRepeat,
      backgroundPosition,
      backgroundSize,
      wrapBorderType,
      wrapBorderWidth,
      wrapBorderRadius,
      wrapBorderColor,
      wrapShadowBlur,
      wrapShadowColor,
      wrapShadowHorizontal,
      wrapShadowVertical,
      wrapShadowPosition,
      wrapPaddingT,
      wrapPaddingR,
      wrapPaddingB,
      wrapPaddingL,
      wrapMarginT,
      wrapMarginR,
      wrapMarginB,
      wrapMarginL,
      urlCheck,
      link,
      target
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
      style: {
        textAlign: align,
        backgroundColor: backgroundColor,
        backgroundImage: `url('${imageURL}')`,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
        border: wrapBorderType,
        borderWidth: wrapBorderWidth + "px",
        borderRadius: wrapBorderRadius + "px",
        borderColor: wrapBorderColor,
        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0}px ${wrapShadowBlur || 0}px ${wrapShadowColor} ${wrapShadowPosition}`,
        paddingTop: wrapPaddingT,
        paddingRight: wrapPaddingR,
        paddingBottom: wrapPaddingB,
        paddingLeft: wrapPaddingL,
        marginTop: wrapMarginT,
        marginRight: wrapMarginR,
        marginBottom: wrapMarginB,
        marginLeft: wrapMarginL
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: urlCheck && link,
      rel: "noopener noreferrer",
      target: target ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${className} ${selectedIcon} ${className}__${hoverEffect}`,
      style: {
        color: iconColor || "#6ec1e4",
        backgroundColor: iconBack,
        fontSize: iconSize || 50,
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
        borderRadius: borderRadius || 100 + "px",
        borderColor: borderColor,
        textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0}px ${shadowBlur || 0}px ${shadowColor}`
      }
    })));
  }
}, {
  attributes: attributes,
  migrate: attributes => {
    let newAttributes = {
      backgroundColor: attributes.background,
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
      selectedIcon,
      align,
      hoverEffect,
      iconSize,
      iconColor,
      iconBack,
      shadowBlur,
      shadowColor,
      shadowHorizontal,
      shadowVertical,
      paddingT,
      paddingR,
      paddingB,
      paddingL,
      marginT,
      marginR,
      marginB,
      marginL,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      background,
      wrapBorderType,
      wrapBorderWidth,
      wrapBorderRadius,
      wrapBorderColor,
      wrapShadowBlur,
      wrapShadowColor,
      wrapShadowHorizontal,
      wrapShadowVertical,
      wrapShadowPosition,
      wrapPaddingT,
      wrapPaddingR,
      wrapPaddingB,
      wrapPaddingL,
      wrapMarginT,
      wrapMarginR,
      wrapMarginB,
      wrapMarginL,
      urlCheck,
      link,
      target
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
      style: {
        textAlign: align,
        backgroundColor: background,
        border: wrapBorderType,
        borderWidth: wrapBorderWidth + "px",
        borderRadius: wrapBorderRadius + "px",
        borderColor: wrapBorderColor,
        boxShadow: `${wrapShadowHorizontal || 0}px ${wrapShadowVertical || 0}px ${wrapShadowBlur || 0}px ${wrapShadowColor} ${wrapShadowPosition}`,
        paddingTop: wrapPaddingT,
        paddingRight: wrapPaddingR,
        paddingBottom: wrapPaddingB,
        paddingLeft: wrapPaddingL,
        marginTop: wrapMarginT,
        marginRight: wrapMarginR,
        marginBottom: wrapMarginB,
        marginLeft: wrapMarginL
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: urlCheck && link,
      target: target ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${className} ${selectedIcon} ${className}__${hoverEffect}`,
      style: {
        color: iconColor || "#6ec1e4",
        backgroundColor: iconBack,
        fontSize: iconSize || 50,
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
        borderRadius: borderRadius || 100 + "px",
        borderColor: borderColor,
        textShadow: `${shadowHorizontal || 0}px ${shadowVertical || 0}px ${shadowBlur || 0}px ${shadowColor}`
      }
    })));
  }
}, {
  attributes: attributes,
  save: props => {
    const {
      selectedIcon,
      align,
      hoverEffect,
      iconSize,
      iconColor,
      iconBack,
      shadowBlur,
      shadowColor,
      shadowHorizontal,
      shadowVertical,
      paddingT,
      paddingR,
      paddingB,
      paddingL,
      marginT,
      marginR,
      marginB,
      marginL,
      borderType,
      borderWidth,
      borderRadius,
      borderColor,
      background,
      wrapBorderType,
      wrapBorderWidth,
      wrapBorderRadius,
      wrapBorderColor,
      wrapPaddingT,
      wrapPaddingR,
      wrapPaddingB,
      wrapPaddingL,
      wrapMarginT,
      wrapMarginR,
      wrapMarginB,
      wrapMarginL,
      urlCheck,
      link,
      target
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}__container`,
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
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `${className}__link`,
      href: urlCheck && link,
      target: target ? "_blank" : "_self"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `${className} ${selectedIcon} ${className}__${hoverEffect}`,
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
        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
      }
    })));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecatedContent);

/***/ }),

/***/ "./icon/edit.js":
/*!**********************!*\
  !*** ./icon/edit.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/settings */ "../../assets/js/settings.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "../../node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_premium_icons_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/premium-icons-list */ "../components/premium-icons-list.js");
/* harmony import */ var _components_premium_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/premium-border */ "../components/premium-border.js");
/* harmony import */ var _components_Premium_Background_Control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Premium-Background-Control */ "../components/Premium-Background-Control.js");
/* harmony import */ var _components_premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/premium-responsive-tabs */ "../components/premium-responsive-tabs.js");
/* harmony import */ var _components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/RangeControl/responsive-range-control */ "../components/RangeControl/responsive-range-control.js");
/* harmony import */ var _components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");
/* harmony import */ var _components_PremiumShadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/PremiumShadow */ "../components/PremiumShadow.js");
/* harmony import */ var _components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/premium-responsive-spacing */ "../components/premium-responsive-spacing.js");
/* harmony import */ var _components_inspectorTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/inspectorTabs */ "../components/inspectorTabs.js");
/* harmony import */ var _components_inspectorTab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/inspectorTab */ "../components/inspectorTab.js");
/* harmony import */ var _components_InsideTabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/InsideTabs */ "../components/InsideTabs.js");
/* harmony import */ var _components_InsideTab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/InsideTab */ "../components/InsideTab.js");
/* harmony import */ var _components_responsive_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/responsive-radio */ "../components/responsive-radio.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/icons */ "../components/icons.js");
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/HelperFunction */ "../components/HelperFunction.js");



















const {
  __
} = wp.i18n;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  TextControl
} = wp.components;
const {
  useEffect,
  Fragment
} = wp.element;
const {
  InspectorControls,
  useBlockProps
} = wp.blockEditor;
const {
  withSelect
} = wp.data;

function Edit(props) {
  const {
    setAttributes,
    className
  } = props;
  useEffect(() => {
    setAttributes({
      blockId: "premium-icon-" + (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.generateBlockId)(props.clientId)
    });
    setAttributes({
      classMigrate: true
    });
  }, []);
  const {
    blockId,
    iconType,
    selectedIcon,
    iconAlign,
    hoverEffect,
    iconStyles,
    urlCheck,
    link,
    target,
    hideDesktop,
    hideTablet,
    hideMobile,
    iconSize,
    iconPadding,
    iconMargin,
    wrapPadding,
    wrapMargin,
    containerBorder,
    iconBorder,
    containerBackground,
    containerShadow,
    iconShadow
  } = props.attributes;
  const EFFECTS = [{
    value: "none",
    label: __("None", "premium-blocks-for-gutenberg")
  }, {
    value: "pulse",
    label: __("Pulse", "premium-blocks-for-gutenberg")
  }, {
    value: "rotate",
    label: __("Rotate", "premium-blocks-for-gutenberg")
  }, {
    value: "drotate",
    label: __("3D Rotate", "premium-blocks-for-gutenberg")
  }, {
    value: "buzz",
    label: __("Buzz", "premium-blocks-for-gutenberg")
  }, {
    value: "drop",
    label: __("Drop Shadow", "premium-blocks-for-gutenberg")
  }, {
    value: "wobble",
    label: __("Wobble", "premium-blocks-for-gutenberg")
  }];

  const saveIconStyle = value => {
    const newUpdate = iconStyles.map((item, index) => {
      if (0 === index) {
        item = { ...item,
          ...value
        };
      }

      return item;
    });
    setAttributes({
      iconStyles: newUpdate
    });
  };

  const loadStyles = () => {
    const styles = {};
    styles[` .${blockId} .premium-icon-container i:hover`] = {
      'color': `${iconStyles[0].iconHoverColor} !important`,
      'background-color': `${iconStyles[0].iconHoverBack} !important`
    };
    return (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.generateCss)(styles);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, {
    key: "inspector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
    tabs: ["layout", "style", "advance"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: "layout"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __("Icon", "premium-blocks-for-gutenberg"),
    className: "premium-panel-body",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "premium-editor-paragraph"
  }, __("Select Icon", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_3___default()), {
    icons: _components_premium_icons_list__WEBPACK_IMPORTED_MODULE_4__["default"],
    onChange: newIcon => setAttributes({
      selectedIcon: newIcon
    }),
    value: selectedIcon,
    isMulti: false // appendTo="body"
    ,
    noSelectedPlaceholder: __("Select Icon", "premium-blocks-for-gutenberg")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __("Link", "premium-blocks-for-gutenberg"),
    checked: urlCheck,
    onChange: newValue => setAttributes({
      urlCheck: newValue
    })
  }), urlCheck && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __("URL", "premium-blocks-for-gutenberg"),
    value: link,
    onChange: newLink => setAttributes({
      link: newLink
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __("Open link in new tab", "premium-blocks-for-gutenberg"),
    checked: target,
    onChange: newValue => setAttributes({
      target: newValue
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_responsive_radio__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: __("Alignment", "premium-blocks-for-gutenberg"),
    choices: [{
      value: "left",
      label: __("Left", "premium-blocks-for-gutenberg"),
      icon: _components_icons__WEBPACK_IMPORTED_MODULE_17__["default"].alignLeft
    }, {
      value: "center",
      label: __("Center", "premium-blocks-for-gutenberg"),
      icon: _components_icons__WEBPACK_IMPORTED_MODULE_17__["default"].alignCenter
    }, {
      value: "right",
      label: __("Right", "premium-blocks-for-gutenberg"),
      icon: _components_icons__WEBPACK_IMPORTED_MODULE_17__["default"].alignRight
    }],
    value: iconAlign,
    onChange: newValue => setAttributes({
      iconAlign: newValue
    }),
    showIcons: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: "style"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __("Icon Style", "premium-blocks-for-gutenberg"),
    className: "premium-panel-body",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: __("Size", "premium-blocks-for-gutenberg"),
    value: iconSize,
    onChange: value => setAttributes({
      iconSize: value
    }),
    min: 0,
    max: 300,
    step: 1,
    showUnit: true,
    units: ["px", "em", "rem"],
    defaultValue: 50
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InsideTabs__WEBPACK_IMPORTED_MODULE_14__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InsideTab__WEBPACK_IMPORTED_MODULE_15__["default"], {
    tabTitle: __("Normal", "premium-blocks-for-gutenberg")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Color", "premium-blocks-for-gutenberg"),
    colorValue: iconStyles[0].iconColor,
    colorDefault: "",
    onColorChange: value => saveIconStyle({
      iconColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Background Color", "premium-blocks-for-gutenberg"),
    colorValue: iconStyles[0].iconBack,
    colorDefault: "",
    onColorChange: value => saveIconStyle({
      iconBack: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_InsideTab__WEBPACK_IMPORTED_MODULE_15__["default"], {
    tabTitle: __("Hover", "premium-blocks-for-gutenberg")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Hover Color", "premium-blocks-for-gutenberg"),
    colorValue: iconStyles[0].iconHoverColor,
    colorDefault: "",
    onColorChange: value => saveIconStyle({
      iconHoverColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: __("Hover Background Color", "premium-blocks-for-gutenberg"),
    colorValue: iconStyles[0].iconHoverBack,
    colorDefault: "",
    onColorChange: value => saveIconStyle({
      iconHoverBack: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __("Hover Effect", "premium-blocks-for-gutenberg"),
    options: EFFECTS,
    value: hoverEffect,
    onChange: newEffect => setAttributes({
      hoverEffect: newEffect
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: __("Text Shadow", "premium-blocks-for-gutenberg"),
    value: iconShadow,
    onChange: value => setAttributes({
      iconShadow: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: __("Border", "premium-blocks-for-gutenberg"),
    value: iconBorder,
    onChange: value => setAttributes({
      iconBorder: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: __("Margin", "premium-blocks-for-gutenberg"),
    value: iconMargin,
    onChange: value => setAttributes({
      iconMargin: value
    }),
    showUnits: true,
    responsive: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: __("Padding", "premium-blocks-for-gutenberg"),
    value: iconPadding,
    onChange: value => setAttributes({
      iconPadding: value
    }),
    showUnits: true,
    responsive: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __("Container Style", "premium-blocks-for-gutenberg"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Background_Control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: containerBackground,
    onChange: value => setAttributes({
      containerBackground: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: containerShadow,
    onChange: value => setAttributes({
      containerShadow: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: __("Border", "premium-blocks-for-gutenberg"),
    value: containerBorder,
    onChange: value => setAttributes({
      containerBorder: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: __("Margin", "premium-blocks-for-gutenberg"),
    value: wrapMargin,
    onChange: value => setAttributes({
      wrapMargin: value
    }),
    showUnits: true,
    responsive: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: __("Padding", "premium-blocks-for-gutenberg"),
    value: wrapPadding,
    onChange: value => setAttributes({
      wrapPadding: value
    }),
    showUnits: true,
    responsive: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspectorTab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    key: "advance"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_responsive_tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: loadStyles()
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", useBlockProps({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `premium-icon ${blockId} premium-icon__container`, {
      " premium-desktop-hidden": hideDesktop,
      " premium-tablet-hidden": hideTablet,
      " premium-mobile-hidden": hideMobile
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-icon-container`,
    style: {
      textAlign: iconAlign[props.deviceType],
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.gradientBackground)(containerBackground),
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.borderCss)(containerBorder, props.deviceType),
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.paddingCss)(wrapPadding, props.deviceType),
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.marginCss)(wrapMargin, props.deviceType),
      boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`
    }
  }, iconType === "fa" && 1 != _assets_js_settings__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeEnabled && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `premium-icon__alert`
  }, __("Please Enable Font Awesome Icons from Plugin settings", "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-icon__${hoverEffect}`
  }, (iconType === "dash" || 1 == _assets_js_settings__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeEnabled) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `premium-icon ${selectedIcon}`,
    style: {
      color: iconStyles[0].iconColor,
      backgroundColor: iconStyles[0].iconBack,
      fontSize: (iconSize[props.deviceType] || 50) + iconSize.unit,
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.borderCss)(iconBorder, props.deviceType),
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.paddingCss)(iconPadding, props.deviceType),
      ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_18__.marginCss)(iconMargin, props.deviceType),
      textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (withSelect(select => {
  const {
    __experimentalGetPreviewDeviceType = null
  } = select("core/edit-post");
  let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
  return {
    deviceType: deviceType
  };
})(Edit));

/***/ }),

/***/ "./icon/save.js":
/*!**********************!*\
  !*** ./icon/save.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HelperFunction */ "../components/HelperFunction.js");




const save = props => {
  const {
    className
  } = props;
  const {
    blockId,
    iconBorder,
    selectedIcon,
    hoverEffect,
    iconStyles,
    urlCheck,
    link,
    target,
    hideDesktop,
    hideTablet,
    hideMobile,
    containerBorder,
    containerBackground,
    containerShadow,
    iconShadow
  } = props.attributes;

  const loadStyles = () => {
    const styles = {};
    styles[` .${blockId} .premium-icon-container i:hover`] = {
      'color': `${iconStyles[0].iconHoverColor} !important`,
      'background-color': `${iconStyles[0].iconHoverBack} !important`
    };
    return (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.generateCss)(styles);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "premium-icon", `${blockId} premium-icon__container`, {
      ' premium-desktop-hidden': hideDesktop,
      ' premium-tablet-hidden': hideTablet,
      ' premium-mobile-hidden': hideMobile
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: loadStyles()
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-icon-container`,
    style: (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.filterJsCss)({ ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.gradientBackground)(containerBackground),
      borderStyle: containerBorder.borderType,
      borderColor: containerBorder.borderColor,
      boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `premium-icon__link`,
    href: urlCheck && link,
    rel: "noopener noreferrer",
    target: target ? "_blank" : "_self"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-icon-hover premium-icon__${hoverEffect}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: `premium-icon ${selectedIcon}`,
    style: (0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_2__.filterJsCss)({
      color: iconStyles[0].iconColor,
      backgroundColor: iconStyles[0].iconBack,
      borderStyle: iconBorder.borderType,
      borderColor: iconBorder.borderColor,
      textShadow: `${iconShadow.horizontal}px ${iconShadow.vertical}px ${iconShadow.blur}px ${iconShadow.color}`
    })
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "../components/Color Control/ColorComponent.js":
/*!*****************************************************!*\
  !*** ../components/Color Control/ColorComponent.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "../../node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/map */ "../../node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! colord */ "../../node_modules/colord/index.mjs");




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

/* harmony default export */ __webpack_exports__["default"] = (withSelect((select, ownProps) => {
  const settings = select("core/block-editor").getSettings();
  const colors = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(settings, ["colors"], []);
  const disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
  return {
    colors,
    disableCustomColors
  };
})(AdvancedColorControl));

/***/ }),

/***/ "../components/HelperFunction.js":
/*!***************************************!*\
  !*** ../components/HelperFunction.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationAttr": function() { return /* binding */ animationAttr; },
/* harmony export */   "borderCss": function() { return /* binding */ borderCss; },
/* harmony export */   "filterJsCss": function() { return /* binding */ filterJsCss; },
/* harmony export */   "generateBlockId": function() { return /* binding */ generateBlockId; },
/* harmony export */   "generateCss": function() { return /* binding */ generateCss; },
/* harmony export */   "gradientBackground": function() { return /* binding */ gradientBackground; },
/* harmony export */   "gradientValue": function() { return /* binding */ gradientValue; },
/* harmony export */   "marginCss": function() { return /* binding */ marginCss; },
/* harmony export */   "paddingCss": function() { return /* binding */ paddingCss; },
/* harmony export */   "typographyCss": function() { return /* binding */ typographyCss; },
/* harmony export */   "videoBackground": function() { return /* binding */ videoBackground; }
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

/***/ "../components/InsideTab.js":
/*!**********************************!*\
  !*** ../components/InsideTab.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (InsideTab);

/***/ }),

/***/ "../components/InsideTabs.js":
/*!***********************************!*\
  !*** ../components/InsideTabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InsideTabs; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
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

/***/ "../components/Premium-Background-Control.js":
/*!***************************************************!*\
  !*** ../components/Premium-Background-Control.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumBackgroundControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _premium_media_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-media-upload */ "../components/premium-media-upload.js");
/* harmony import */ var _premium_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./premium-background */ "../components/premium-background.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/map */ "../../node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "../components/RangeControl/single-range-control.js");
/* harmony import */ var _radio_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio-control */ "../components/radio-control.js");


const {
  SelectControl,
  Button,
  ButtonGroup,
  Tooltip
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
    'backgroundType': '',
    'backgroundColor': '',
    'backgroundImageID': '',
    'backgroundImageURL': '',
    'backgroundPosition': '',
    'backgroundRepeat': '',
    'backgroundSize': '',
    'fixed': false,
    'gradientLocationOne': "",
    'gradientColorTwo': '',
    'gradientLocationTwo': '',
    'gradientAngle': '',
    'gradientPosition': '',
    'gradientType': '',
    'videoSource': 'local',
    'bgExternalVideo': '',
    'videoURL': '',
    'videoID': '',
    'bgVideoFallbackID': '',
    'bgVideoFallbackURL': ''
  };
  value = value ? { ...defaultValues,
    ...value
  } : defaultValues;
  const [state, setState] = useState(value);
  const gradTypes = [{
    key: 'linear',
    name: __('Linear', "premium-blocks-for-gutenberg")
  }, {
    key: 'radial',
    name: __('Radial', "premium-blocks-for-gutenberg")
  }];
  const bgType = [{
    key: 'solid',
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
    tooltip: __('Classic', 'premium-blocks-for-gutenberg')
  }, {
    key: 'gradient',
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
    tooltip: __('Gradient', 'premium-blocks-for-gutenberg')
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
      tooltip: __('Video', 'premium-blocks-for-gutenberg')
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
  }, __('Background Type', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-background-type__wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "premium-button-size-type-options",
    "aria-label": __('Background Type', 'premium-blocks-for-gutenberg')
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
      onClick: () => onChangeBackground('backgroundType', key)
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
  })))), 'solid' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-inner-sub-section premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "color",
    colorValue: backgroundColor,
    colorDefault: '',
    onChangeColor: newValue => onChangeBackground('backgroundColor', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageID: backgroundImageID,
    imageURL: backgroundImageURL,
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    fixed: fixed,
    onSelectMedia: media => {
      onChangeBackground('backgroundImageURL', media.url);
    },
    onRemoveImage: () => onChangeBackground('backgroundImageURL', ''),
    onChangeBackPos: newValue => onChangeBackground('backgroundPosition', newValue),
    onchangeBackRepeat: newValue => onChangeBackground('backgroundRepeat', newValue),
    onChangeBackSize: newValue => onChangeBackground('backgroundSize', newValue),
    onChangeFixed: check => onChangeBackground('fixed', check)
  })), 'gradient' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "Premium-inner-sub-section premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: __('Gradient Color 1', 'premium-blocks-for-gutenberg'),
    colorValue: backgroundColor,
    colorDefault: '',
    onColorChange: value => onChangeBackground('backgroundColor', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __('Location', 'premium-blocks-for-gutenberg'),
    value: gradientLocationOne,
    onChange: value => onChangeBackground('gradientLocationOne', value),
    showUnit: false,
    defaultValue: 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: __('Gradient Color 2', 'premium-blocks-for-gutenberg'),
    colorValue: gradientColorTwo,
    colorDefault: '#777777',
    onColorChange: value => onChangeBackground('gradientColorTwo', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __('Location', 'premium-blocks-for-gutenberg'),
    value: gradientLocationTwo,
    onChange: value => onChangeBackground('gradientLocationTwo', value),
    showUnit: false,
    defaultValue: 0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-btn-size-settings-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "premium-beside-btn-group"
  }, __('Gradient Type', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
    className: "premium-button-size-type-options",
    "aria-label": __('Gradient Type', 'premium-blocks-for-gutenberg')
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
      onClick: () => onChangeBackground('gradientType', key)
    }, name);
  }))), 'radial' !== gradientType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: __('Gradient Angle', 'premium-blocks-for-gutenberg'),
    value: gradientAngle,
    onChange: value => onChangeBackground('gradientAngle', value),
    showUnit: false,
    defaultValue: 0,
    min: 0,
    max: 360
  }), 'radial' === gradientType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Gradient Position', 'premium-blocks-for-gutenberg'),
    value: gradientPosition,
    options: [{
      value: 'center top',
      label: __('Center Top', 'premium-blocks-for-gutenberg')
    }, {
      value: 'center center',
      label: __('Center Center', 'premium-blocks-for-gutenberg')
    }, {
      value: 'center bottom',
      label: __('Center Bottom', 'premium-blocks-for-gutenberg')
    }, {
      value: 'left top',
      label: __('Left Top', 'premium-blocks-for-gutenberg')
    }, {
      value: 'left center',
      label: __('Left Center', 'premium-blocks-for-gutenberg')
    }, {
      value: 'left bottom',
      label: __('Left Bottom', 'premium-blocks-for-gutenberg')
    }, {
      value: 'right top',
      label: __('Right Top', 'premium-blocks-for-gutenberg')
    }, {
      value: 'right center',
      label: __('Right Center', 'premium-blocks-for-gutenberg')
    }, {
      value: 'right bottom',
      label: __('Right Bottom', 'premium-blocks-for-gutenberg')
    }],
    onChange: value => onChangeBackground('gradientPosition', value)
  })), 'video' === backgroundType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Video Source', 'premium-blocks-for-gutenberg'),
    value: videoSource,
    options: [{
      value: 'local',
      label: __('Local', 'premium-blocks-for-gutenberg')
    }, {
      value: 'external',
      label: __('External', 'premium-blocks-for-gutenberg')
    }],
    onChange: val => onChangeBackground('videoSource', val)
  }), videoSource === 'external' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Video URL', "premium-blocks-for-gutenberg"),
    value: bgExternalVideo || "",
    onChange: val => onChangeBackground('bgExternalVideo', val)
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Video', "premium-blocks-for-gutenberg")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_media_upload__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "video",
    imageID: videoID,
    imageURL: videoURL,
    onSelectMedia: media => onChangeBackground('videoURL', media.url),
    onRemoveImage: () => onChangeBackground('videoURL', "")
  }))));
}

/***/ }),

/***/ "../components/PremiumShadow.js":
/*!**************************************!*\
  !*** ../components/PremiumShadow.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumShadow; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "../components/RangeControl/single-range-control.js");
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");

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
    'color': '',
    'blur': '',
    'horizontal': '',
    'vertical': '',
    'position': ''
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
    label: __("Inset", 'premium-blocks-for-gutenberg')
  }, {
    value: "",
    label: __("Outline", 'premium-blocks-for-gutenberg')
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
  }, __(label || "Box Shadow")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-shadow-control__wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colorValue: color,
    colorDefault: '',
    onColorChange: value => onChangeShadow('color', value),
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
      onChange: value => onChangeShadow('horizontal', value),
      showUnit: false,
      defaultValue: 0,
      min: -100,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Vertical"),
      value: vertical,
      onChange: value => onChangeShadow('vertical', value),
      showUnit: false,
      defaultValue: 0,
      min: -100,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Blur"),
      value: blur,
      onChange: value => onChangeShadow('blur', value),
      showUnit: false,
      defaultValue: 0
    }), boxShadow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Position"),
      options: POSITION,
      value: position,
      onChange: value => onChangeShadow('position', value)
    }))
  })));
}

/***/ }),

/***/ "../components/RangeControl/range-control.js":
/*!***************************************************!*\
  !*** ../components/RangeControl/range-control.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumRange; }
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

/***/ "../components/RangeControl/responsive-range-control.js":
/*!**************************************************************!*\
  !*** ../components/RangeControl/responsive-range-control.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResponsiveRangeControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../premium-size-units */ "../components/premium-size-units.js");
/* harmony import */ var _single_range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-range-control */ "../components/RangeControl/single-range-control.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responsive */ "../components/responsive.js");

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

/***/ "../components/RangeControl/single-range-control.js":
/*!**********************************************************!*\
  !*** ../components/RangeControl/single-range-control.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ResponsiveSingleRangeControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../premium-size-units */ "../components/premium-size-units.js");
/* harmony import */ var _range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range-control */ "../components/RangeControl/range-control.js");

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

/***/ "../components/default-image.js":
/*!**************************************!*\
  !*** ../components/default-image.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DefaultImage; }
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

/***/ "../components/icons.js":
/*!******************************!*\
  !*** ../components/icons.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "../components/inspectorTab.js":
/*!*************************************!*\
  !*** ../components/inspectorTab.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (InspectorTab);

/***/ }),

/***/ "../components/inspectorTabs.js":
/*!**************************************!*\
  !*** ../components/inspectorTabs.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
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
/* harmony default export */ __webpack_exports__["default"] = (InspectorTabs);

/***/ }),

/***/ "../components/premium-background.js":
/*!*******************************************!*\
  !*** ../components/premium-background.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumBackground; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");

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
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, __("Insert Background "))));
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

/***/ "../components/premium-border.js":
/*!***************************************!*\
  !*** ../components/premium-border.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");
/* harmony import */ var _premium_responsive_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-responsive-spacing */ "../components/premium-responsive-spacing.js");

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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, props.label ? props.label : __('Border', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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

/* harmony default export */ __webpack_exports__["default"] = (PremiumBorder);

/***/ }),

/***/ "../components/premium-icons-list.js":
/*!*******************************************!*\
  !*** ../components/premium-icons-list.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const iconsList = {
  Dashicons: ["", "dashicons dashicons-menu", "dashicons dashicons-admin-site", "dashicons dashicons-dashboard", "dashicons dashicons-admin-post", "dashicons dashicons-admin-media", "dashicons dashicons-admin-links", "dashicons dashicons-admin-page", "dashicons dashicons-admin-comments", "dashicons dashicons-admin-appearance", "dashicons dashicons-admin-plugins", "dashicons dashicons-admin-users", "dashicons dashicons-admin-tools", "dashicons dashicons-admin-settings", "dashicons dashicons-admin-network", "dashicons dashicons-admin-home", "dashicons dashicons-admin-generic", "dashicons dashicons-admin-collapse", "dashicons dashicons-filter", "dashicons dashicons-admin-customizer", "dashicons dashicons-admin-multisite", "dashicons dashicons-welcome-write-blog", "dashicons dashicons-welcome-add-page", "dashicons dashicons-welcome-view-site", "dashicons dashicons-welcome-widgets-menus", "dashicons dashicons-welcome-comments", "dashicons dashicons-welcome-learn-more", "dashicons dashicons-format-aside", "dashicons dashicons-format-image", "dashicons dashicons-format-gallery", "dashicons dashicons-format-video", "dashicons dashicons-format-status", "dashicons dashicons-format-quote", "dashicons dashicons-format-chat", "dashicons dashicons-format-audio", "dashicons dashicons-camera", "dashicons dashicons-images-alt", "dashicons dashicons-images-alt2", "dashicons dashicons-video-alt", "dashicons dashicons-video-alt2", "dashicons dashicons-video-alt3", "dashicons dashicons-media-archive", "dashicons dashicons-media-audio", "dashicons dashicons-media-code", "dashicons dashicons-media-default", "dashicons dashicons-media-document", "dashicons dashicons-media-interactive", "dashicons dashicons-media-spreadsheet", "dashicons dashicons-media-text", "dashicons dashicons-media-video", "dashicons dashicons-playlist-audio", "dashicons dashicons-playlist-video", "dashicons dashicons-controls-play", "dashicons dashicons-controls-pause", "dashicons dashicons-controls-forward", "dashicons dashicons-controls-skipforward", "dashicons dashicons-controls-back", "dashicons dashicons-controls-skipback", "dashicons dashicons-controls-repeat", "dashicons dashicons-controls-volumeon", "dashicons dashicons-controls-volumeoff", "dashicons dashicons-image-crop", "dashicons dashicons-image-rotate", "dashicons dashicons-image-rotate-left", "dashicons dashicons-image-rotate-right", "dashicons dashicons-image-flip-vertical", "dashicons dashicons-image-flip-horizontal", "dashicons dashicons-image-filter", "dashicons dashicons-undo", "dashicons dashicons-redo", "dashicons dashicons-editor-bold", "dashicons dashicons-editor-italic", "dashicons dashicons-editor-ul", "dashicons dashicons-editor-ol", "dashicons dashicons-editor-quote", "dashicons dashicons-editor-alignleft", "dashicons dashicons-editor-aligncenter", "dashicons dashicons-editor-alignright", "dashicons dashicons-editor-insertmore", "dashicons dashicons-editor-spellcheck", "dashicons dashicons-editor-expand", "dashicons dashicons-editor-contract", "dashicons dashicons-editor-kitchensink", "dashicons dashicons-editor-underline", "dashicons dashicons-editor-justify", "dashicons dashicons-editor-textcolor", "dashicons dashicons-editor-paste-word", "dashicons dashicons-editor-paste-text", "dashicons dashicons-editor-removeformatting", "dashicons dashicons-editor-video", "dashicons dashicons-editor-customchar", "dashicons dashicons-editor-outdent", "dashicons dashicons-editor-indent", "dashicons dashicons-editor-help", "dashicons dashicons-editor-strikethrough", "dashicons dashicons-editor-unlink", "dashicons dashicons-editor-rtl", "dashicons dashicons-editor-break", "dashicons dashicons-editor-code", "dashicons dashicons-editor-paragraph", "dashicons dashicons-editor-table", "dashicons dashicons-align-left", "dashicons dashicons-align-right", "dashicons dashicons-align-center", "dashicons dashicons-align-none", "dashicons dashicons-lock", "dashicons dashicons-unlock", "dashicons dashicons-calendar", "dashicons dashicons-calendar-alt", "dashicons dashicons-visibility", "dashicons dashicons-hidden", "dashicons dashicons-post-status", "dashicons dashicons-edit", "dashicons dashicons-trash", "dashicons dashicons-sticky", "dashicons dashicons-external", "dashicons dashicons-arrow-up", "dashicons dashicons-arrow-down", "dashicons dashicons-arrow-right", "dashicons dashicons-arrow-left", "dashicons dashicons-arrow-up-alt", "dashicons dashicons-arrow-down-alt", "dashicons dashicons-arrow-right-alt", "dashicons dashicons-arrow-left-alt", "dashicons dashicons-arrow-up-alt2", "dashicons dashicons-arrow-down-alt2", "dashicons dashicons-arrow-right-alt2", "dashicons dashicons-arrow-left-alt2", "dashicons dashicons-sort", "dashicons dashicons-leftright", "dashicons dashicons-randomize", "dashicons dashicons-list-view", "dashicons dashicons-exerpt-view", "dashicons dashicons-grid-view", "dashicons dashicons-move", "dashicons dashicons-share", "dashicons dashicons-share-alt", "dashicons dashicons-share-alt2", "dashicons dashicons-twitter", "dashicons dashicons-rss", "dashicons dashicons-email", "dashicons dashicons-email-alt", "dashicons dashicons-facebook", "dashicons dashicons-facebook-alt", "dashicons dashicons-googleplus", "dashicons dashicons-networking", "dashicons dashicons-hammer", "dashicons dashicons-art", "dashicons dashicons-migrate", "dashicons dashicons-performance", "dashicons dashicons-universal-access", "dashicons dashicons-universal-access-alt", "dashicons dashicons-tickets", "dashicons dashicons-nametag", "dashicons dashicons-clipboard", "dashicons dashicons-heart", "dashicons dashicons-megaphone", "dashicons dashicons-schedule", "dashicons dashicons-wordpress", "dashicons dashicons-wordpress-alt", "dashicons dashicons-pressthis", "dashicons dashicons-update", "dashicons dashicons-screenoptions", "dashicons dashicons-info", "dashicons dashicons-cart", "dashicons dashicons-feedback", "dashicons dashicons-cloud", "dashicons dashicons-translation", "dashicons dashicons-tag", "dashicons dashicons-category", "dashicons dashicons-archive", "dashicons dashicons-tagcloud", "dashicons dashicons-text", "dashicons dashicons-yes", "dashicons dashicons-no", "dashicons dashicons-no-alt", "dashicons dashicons-plus", "dashicons dashicons-plus-alt", "dashicons dashicons-minus", "dashicons dashicons-dismiss", "dashicons dashicons-marker", "dashicons dashicons-star-filled", "dashicons dashicons-star-half", "dashicons dashicons-star-empty", "dashicons dashicons-flag", "dashicons dashicons-warning", "dashicons dashicons-location", "dashicons dashicons-location-alt", "dashicons dashicons-vault", "dashicons dashicons-shield", "dashicons dashicons-shield-alt", "dashicons dashicons-sos", "dashicons dashicons-search", "dashicons dashicons-slides", "dashicons dashicons-analytics", "dashicons dashicons-chart-pie", "dashicons dashicons-chart-bar", "dashicons dashicons-chart-line", "dashicons dashicons-chart-area", "dashicons dashicons-groups", "dashicons dashicons-businessman", "dashicons dashicons-id", "dashicons dashicons-id-alt", "dashicons dashicons-products", "dashicons dashicons-awards", "dashicons dashicons-forms", "dashicons dashicons-testimonial", "dashicons dashicons-portfolio", "dashicons dashicons-book", "dashicons dashicons-book-alt", "dashicons dashicons-download", "dashicons dashicons-upload", "dashicons dashicons-backup", "dashicons dashicons-clock", "dashicons dashicons-lightbulb", "dashicons dashicons-microphone", "dashicons dashicons-desktop", "dashicons dashicons-laptop", "dashicons dashicons-tablet", "dashicons dashicons-smartphone", "dashicons dashicons-phone", "dashicons dashicons-index-card", "dashicons dashicons-carrot", "dashicons dashicons-building", "dashicons dashicons-store", "dashicons dashicons-album", "dashicons dashicons-palmtree", "dashicons dashicons-tickets-alt", "dashicons dashicons-money", "dashicons dashicons-smiley", "dashicons dashicons-thumbs-up", "dashicons dashicons-thumbs-down", "dashicons dashicons-layout", "dashicons dashicons-paperclip"],
  "Font Awesome Icons": ["fa fa-glass", "fa fa-music", "fa fa-search", "fa fa-envelope-o", "fa fa-heart", "fa fa-star", "fa fa-star-o", "fa fa-user", "fa fa-film", "fa fa-th-large", "fa fa-th", "fa fa-th-list", "fa fa-check", "fa fa-times", "fa fa-search-plus", "fa fa-search-minus", "fa fa-power-off", "fa fa-signal", "fa fa-cog", "fa fa-trash-o", "fa fa-home", "fa fa-file-o", "fa fa-clock-o", "fa fa-road", "fa fa-download", "fa fa-arrow-circle-o-down", "fa fa-arrow-circle-o-up", "fa fa-inbox", "fa fa-play-circle-o", "fa fa-repeat", "fa fa-refresh", "fa fa-list-alt", "fa fa-lock", "fa fa-flag", "fa fa-headphones", "fa fa-volume-off", "fa fa-volume-down", "fa fa-volume-up", "fa fa-qrcode", "fa fa-barcode", "fa fa-tag", "fa fa-tags", "fa fa-book", "fa fa-bookmark", "fa fa-print", "fa fa-camera", "fa fa-font", "fa fa-bold", "fa fa-italic", "fa fa-text-height", "fa fa-text-width", "fa fa-align-left", "fa fa-align-center", "fa fa-align-right", "fa fa-align-justify", "fa fa-list", "fa fa-outdent", "fa fa-indent", "fa fa-video-camera", "fa fa-picture-o", "fa fa-pencil", "fa fa-map-marker", "fa fa-adjust", "fa fa-tint", "fa fa-pencil-square-o", "fa fa-share-square-o", "fa fa-check-square-o", "fa fa-arrows", "fa fa-step-backward", "fa fa-fast-backward", "fa fa-backward", "fa fa-play", "fa fa-pause", "fa fa-stop", "fa fa-forward", "fa fa-fast-forward", "fa fa-step-forward", "fa fa-eject", "fa fa-chevron-left", "fa fa-chevron-right", "fa fa-plus-circle", "fa fa-minus-circle", "fa fa-times-circle", "fa fa-check-circle", "fa fa-question-circle", "fa fa-info-circle", "fa fa-crosshairs", "fa fa-times-circle-o", "fa fa-check-circle-o", "fa fa-ban", "fa fa-arrow-left", "fa fa-arrow-right", "fa fa-arrow-up", "fa fa-arrow-down", "fa fa-share", "fa fa-expand", "fa fa-compress", "fa fa-plus", "fa fa-minus", "fa fa-asterisk", "fa fa-exclamation-circle", "fa fa-gift", "fa fa-leaf", "fa fa-fire", "fa fa-eye", "fa fa-eye-slash", "fa fa-exclamation-triangle", "fa fa-plane", "fa fa-calendar", "fa fa-random", "fa fa-comment", "fa fa-magnet", "fa fa-chevron-up", "fa fa-chevron-down", "fa fa-retweet", "fa fa-shopping-cart", "fa fa-folder", "fa fa-folder-open", "fa fa-arrows-v", "fa fa-arrows-h", "fa fa-bar-chart", "fa fa-twitter-square", "fa fa-facebook-square", "fa fa-camera-retro", "fa fa-key", "fa fa-cogs", "fa fa-comments", "fa fa-thumbs-o-up", "fa fa-thumbs-o-down", "fa fa-star-half", "fa fa-heart-o", "fa fa-sign-out", "fa fa-linkedin-square", "fa fa-thumb-tack", "fa fa-external-link", "fa fa-sign-in", "fa fa-trophy", "fa fa-github-square", "fa fa-upload", "fa fa-lemon-o", "fa fa-phone", "fa fa-square-o", "fa fa-bookmark-o", "fa fa-phone-square", "fa fa-twitter", "fa-brands fa-facebook", "fa fa-github", "fa fa-unlock", "fa fa-credit-card", "fa fa-rss", "fa fa-hdd-o", "fa fa-bullhorn", "fa fa-bell", "fa fa-certificate", "fa fa-hand-o-right", "fa fa-hand-o-left", "fa fa-hand-o-up", "fa fa-hand-o-down", "fa fa-arrow-circle-left", "fa fa-arrow-circle-right", "fa fa-arrow-circle-up", "fa fa-arrow-circle-down", "fa fa-globe", "fa fa-wrench", "fa fa-tasks", "fa fa-filter", "fa fa-briefcase", "fa fa-arrows-alt", "fa fa-users", "fa fa-link", "fa fa-cloud", "fa fa-flask", "fa fa-scissors", "fa fa-files-o", "fa fa-paperclip", "fa fa-floppy-o", "fa fa-square", "fa fa-bars", "fa fa-list-ul", "fa fa-list-ol", "fa fa-strikethrough", "fa fa-underline", "fa fa-table", "fa fa-magic", "fa fa-truck", "fa fa-pinterest", "fa fa-pinterest-square", "fa fa-google-plus-square", "fa fa-google-plus", "fa fa-money", "fa fa-caret-down", "fa fa-caret-up", "fa fa-caret-left", "fa fa-caret-right", "fa fa-columns", "fa fa-sort", "fa fa-sort-desc", "fa fa-sort-asc", "fa fa-envelope", "fa fa-linkedin", "fa fa-undo", "fa fa-gavel", "fa fa-tachometer", "fa fa-comment-o", "fa fa-comments-o", "fa fa-bolt", "fa fa-sitemap", "fa fa-umbrella", "fa fa-clipboard", "fa fa-lightbulb-o", "fa fa-exchange", "fa fa-cloud-download", "fa fa-cloud-upload", "fa fa-user-md", "fa fa-stethoscope", "fa fa-suitcase", "fa fa-bell-o", "fa fa-coffee", "fa fa-cutlery", "fa fa-file-text-o", "fa fa-building-o", "fa fa-hospital-o", "fa fa-ambulance", "fa fa-medkit", "fa fa-fighter-jet", "fa fa-beer", "fa fa-h-square", "fa fa-plus-square", "fa fa-angle-double-left", "fa fa-angle-double-right", "fa fa-angle-double-up", "fa fa-angle-double-down", "fa fa-angle-left", "fa fa-angle-right", "fa fa-angle-up", "fa fa-angle-down", "fa fa-desktop", "fa fa-laptop", "fa fa-tablet", "fa fa-mobile", "fa fa-circle-o", "fa fa-quote-left", "fa fa-quote-right", "fa fa-spinner", "fa fa-circle", "fa fa-reply", "fa fa-github-alt", "fa fa-folder-o", "fa fa-folder-open-o", "fa fa-smile-o", "fa fa-frown-o", "fa fa-meh-o", "fa fa-gamepad", "fa fa-keyboard-o", "fa fa-flag-o", "fa fa-flag-checkered", "fa fa-terminal", "fa fa-code", "fa fa-reply-all", "fa fa-star-half-o", "fa fa-location-arrow", "fa fa-crop", "fa fa-code-fork", "fa fa-chain-broken", "fa fa-question", "fa fa-info", "fa fa-exclamation", "fa fa-superscript", "fa fa-subscript", "fa fa-eraser", "fa fa-puzzle-piece", "fa fa-microphone", "fa fa-microphone-slash", "fa fa-shield", "fa fa-calendar-o", "fa fa-fire-extinguisher", "fa fa-rocket", "fa fa-maxcdn", "fa fa-chevron-circle-left", "fa fa-chevron-circle-right", "fa fa-chevron-circle-up", "fa fa-chevron-circle-down", "fa fa-html5", "fa fa-css3", "fa fa-anchor", "fa fa-unlock-alt", "fa fa-bullseye", "fa fa-ellipsis-h", "fa fa-ellipsis-v", "fa fa-rss-square", "fa fa-play-circle", "fa fa-ticket", "fa fa-minus-square", "fa fa-minus-square-o", "fa fa-level-up", "fa fa-level-down", "fa fa-check-square", "fa fa-pencil-square", "fa fa-external-link-square", "fa fa-share-square", "fa fa-compass", "fa fa-caret-square-o-down", "fa fa-caret-square-o-up", "fa fa-caret-square-o-right", "fa fa-eur", "fa fa-gbp", "fa fa-usd", "fa fa-inr", "fa fa-jpy", "fa fa-rub", "fa fa-krw", "fa fa-btc", "fa fa-file", "fa fa-file-text", "fa fa-sort-alpha-asc", "fa fa-sort-alpha-desc", "fa fa-sort-amount-asc", "fa fa-sort-amount-desc", "fa fa-sort-numeric-asc", "fa fa-sort-numeric-desc", "fa fa-thumbs-up", "fa fa-thumbs-down", "fa fa-youtube-square", "fa fa-youtube", "fa fa-xing", "fa fa-xing-square", "fa fa-youtube-play", "fa fa-dropbox", "fa fa-stack-overflow", "fa fa-instagram", "fa fa-flickr", "fa fa-adn", "fa fa-bitbucket", "fa fa-bitbucket-square", "fa fa-tumblr", "fa fa-tumblr-square", "fa fa-long-arrow-down", "fa fa-long-arrow-up", "fa fa-long-arrow-left", "fa fa-long-arrow-right", "fa fa-apple", "fa fa-windows", "fa fa-android", "fa fa-linux", "fa fa-dribbble", "fa fa-skype", "fa fa-foursquare", "fa fa-trello", "fa fa-female", "fa fa-male", "fa fa-gratipay", "fa fa-sun-o", "fa fa-moon-o", "fa fa-archive", "fa fa-bug", "fa fa-vk", "fa fa-weibo", "fa fa-renren", "fa fa-pagelines", "fa fa-stack-exchange", "fa fa-arrow-circle-o-right", "fa fa-arrow-circle-o-left", "fa fa-caret-square-o-left", "fa fa-dot-circle-o", "fa fa-wheelchair", "fa fa-vimeo-square", "fa fa-try", "fa fa-plus-square-o", "fa fa-space-shuttle", "fa fa-slack", "fa fa-envelope-square", "fa fa-wordpress", "fa fa-openid", "fa fa-university", "fa fa-graduation-cap", "fa fa-yahoo", "fa fa-google", "fa fa-reddit", "fa fa-reddit-square", "fa fa-stumbleupon-circle", "fa fa-stumbleupon", "fa fa-delicious", "fa fa-digg", "fa fa-pied-piper-pp", "fa fa-pied-piper-alt", "fa fa-drupal", "fa fa-joomla", "fa fa-language", "fa fa-fax", "fa fa-building", "fa fa-child", "fa fa-paw", "fa fa-spoon", "fa fa-cube", "fa fa-cubes", "fa fa-behance", "fa fa-behance-square", "fa fa-steam", "fa fa-steam-square", "fa fa-recycle", "fa fa-car", "fa fa-taxi", "fa fa-tree", "fa fa-spotify", "fa fa-deviantart", "fa fa-soundcloud", "fa fa-database", "fa fa-file-pdf-o", "fa fa-file-word-o", "fa fa-file-excel-o", "fa fa-file-powerpoint-o", "fa fa-file-image-o", "fa fa-file-archive-o", "fa fa-file-audio-o", "fa fa-file-video-o", "fa fa-file-code-o", "fa fa-vine", "fa fa-codepen", "fa fa-jsfiddle", "fa fa-life-ring", "fa fa-circle-o-notch", "fa fa-rebel", "fa fa-empire", "fa fa-git-square", "fa fa-git", "fa fa-hacker-news", "fa fa-tencent-weibo", "fa fa-qq", "fa fa-weixin", "fa fa-paper-plane", "fa fa-paper-plane-o", "fa fa-history", "fa fa-circle-thin", "fa fa-header", "fa fa-paragraph", "fa fa-sliders", "fa fa-share-alt", "fa fa-share-alt-square", "fa fa-bomb", "fa fa-futbol-o", "fa fa-tty", "fa fa-binoculars", "fa fa-plug", "fa fa-slideshare", "fa fa-twitch", "fa fa-yelp", "fa fa-newspaper-o", "fa fa-wifi", "fa fa-calculator", "fa fa-paypal", "fa fa-google-wallet", "fa fa-cc-visa", "fa fa-cc-mastercard", "fa fa-cc-discover", "fa fa-cc-amex", "fa fa-cc-paypal", "fa fa-cc-stripe", "fa fa-bell-slash", "fa fa-bell-slash-o", "fa fa-trash", "fa fa-copyright", "fa fa-at", "fa fa-eyedropper", "fa fa-paint-brush", "fa fa-birthday-cake", "fa fa-area-chart", "fa fa-pie-chart", "fa fa-line-chart", "fa fa-lastfm", "fa fa-lastfm-square", "fa fa-toggle-off", "fa fa-toggle-on", "fa fa-bicycle", "fa fa-bus", "fa fa-ioxhost", "fa fa-angellist", "fa fa-cc", "fa fa-ils", "fa fa-meanpath", "fa fa-buysellads", "fa fa-connectdevelop", "fa fa-dashcube", "fa fa-forumbee", "fa fa-leanpub", "fa fa-sellsy", "fa fa-shirtsinbulk", "fa fa-simplybuilt", "fa fa-skyatlas", "fa fa-cart-plus", "fa fa-cart-arrow-down", "fa fa-diamond", "fa fa-ship", "fa fa-user-secret", "fa fa-motorcycle", "fa fa-street-view", "fa fa-heartbeat", "fa fa-venus", "fa fa-mars", "fa fa-mercury", "fa fa-transgender", "fa fa-transgender-alt", "fa fa-venus-double", "fa fa-mars-double", "fa fa-venus-mars", "fa fa-mars-stroke", "fa fa-mars-stroke-v", "fa fa-mars-stroke-h", "fa fa-neuter", "fa fa-genderless", "fa fa-facebook-official", "fa fa-pinterest-p", "fa fa-whatsapp", "fa fa-server", "fa fa-user-plus", "fa fa-user-times", "fa fa-bed", "fa fa-viacoin", "fa fa-train", "fa fa-subway", "fa fa-medium", "fa fa-y-combinator", "fa fa-optin-monster", "fa fa-opencart", "fa fa-expeditedssl", "fa fa-battery-full", "fa fa-battery-three-quarters", "fa fa-battery-half", "fa fa-battery-quarter", "fa fa-battery-empty", "fa fa-mouse-pointer", "fa fa-i-cursor", "fa fa-object-group", "fa fa-object-ungroup", "fa fa-sticky-note", "fa fa-sticky-note-o", "fa fa-cc-jcb", "fa fa-cc-diners-club", "fa fa-clone", "fa fa-balance-scale", "fa fa-hourglass-o", "fa fa-hourglass-start", "fa fa-hourglass-half", "fa fa-hourglass-end", "fa fa-hourglass", "fa fa-hand-rock-o", "fa fa-hand-paper-o", "fa fa-hand-scissors-o", "fa fa-hand-lizard-o", "fa fa-hand-spock-o", "fa fa-hand-pointer-o", "fa fa-hand-peace-o", "fa fa-trademark", "fa fa-registered", "fa fa-creative-commons", "fa fa-gg", "fa fa-gg-circle", "fa fa-tripadvisor", "fa fa-odnoklassniki", "fa fa-odnoklassniki-square", "fa fa-get-pocket", "fa fa-wikipedia-w", "fa fa-safari", "fa fa-chrome", "fa fa-firefox", "fa fa-opera", "fa fa-internet-explorer", "fa fa-television", "fa fa-contao", "fa fa-500px", "fa fa-amazon", "fa fa-calendar-plus-o", "fa fa-calendar-minus-o", "fa fa-calendar-times-o", "fa fa-calendar-check-o", "fa fa-industry", "fa fa-map-pin", "fa fa-map-signs", "fa fa-map-o", "fa fa-map", "fa fa-commenting", "fa fa-commenting-o", "fa fa-houzz", "fa fa-vimeo", "fa fa-black-tie", "fa fa-fonticons", "fa fa-reddit-alien", "fa fa-edge", "fa fa-credit-card-alt", "fa fa-codiepie", "fa fa-modx", "fa fa-fort-awesome", "fa fa-usb", "fa fa-product-hunt", "fa fa-mixcloud", "fa fa-scribd", "fa fa-pause-circle", "fa fa-pause-circle-o", "fa fa-stop-circle", "fa fa-stop-circle-o", "fa fa-shopping-bag", "fa fa-shopping-basket", "fa fa-hashtag", "fa fa-bluetooth", "fa fa-bluetooth-b", "fa fa-percent", "fa fa-gitlab", "fa fa-wpbeginner", "fa fa-wpforms", "fa fa-envira", "fa fa-universal-access", "fa fa-wheelchair-alt", "fa fa-question-circle-o", "fa fa-blind", "fa fa-audio-description", "fa fa-volume-control-phone", "fa fa-braille", "fa fa-assistive-listening-systems", "fa fa-american-sign-language-interpreting", "fa fa-deaf", "fa fa-glide", "fa fa-glide-g", "fa fa-sign-language", "fa fa-low-vision", "fa fa-viadeo", "fa fa-viadeo-square", "fa fa-snapchat", "fa fa-snapchat-ghost", "fa fa-snapchat-square", "fa fa-pied-piper", "fa fa-first-order", "fa fa-yoast", "fa fa-themeisle", "fa fa-google-plus-official", "fa fa-font-awesome"]
};
/* harmony default export */ __webpack_exports__["default"] = (iconsList);

/***/ }),

/***/ "../components/premium-media-upload.js":
/*!*********************************************!*\
  !*** ../components/premium-media-upload.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumMediaUpload; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-image */ "../components/default-image.js");


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

/***/ "../components/premium-responsive-spacing.js":
/*!***************************************************!*\
  !*** ../components/premium-responsive-spacing.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-size-units */ "../components/premium-size-units.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive */ "../components/responsive.js");

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

/* harmony default export */ __webpack_exports__["default"] = (SpacingComponent);

/***/ }),

/***/ "../components/premium-responsive-tabs.js":
/*!************************************************!*\
  !*** ../components/premium-responsive-tabs.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (PremiumResponsiveTabs);

/***/ }),

/***/ "../components/premium-size-units.js":
/*!*******************************************!*\
  !*** ../components/premium-size-units.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumSizeUnits; }
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

/***/ "../components/radio-control.js":
/*!**************************************!*\
  !*** ../components/radio-control.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (React.memo(RadioComponent));

/***/ }),

/***/ "../components/responsive-radio.js":
/*!*****************************************!*\
  !*** ../components/responsive-radio.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio-control */ "../components/radio-control.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsive */ "../components/responsive.js");


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

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default().memo(ResponsiveRadio));

/***/ }),

/***/ "../components/responsive.js":
/*!***********************************!*\
  !*** ../components/responsive.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Responsive);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "../../node_modules/colord/index.mjs":
/*!*******************************************!*\
  !*** ../../node_modules/colord/index.mjs ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Colord": function() { return /* binding */ j; },
/* harmony export */   "colord": function() { return /* binding */ w; },
/* harmony export */   "extend": function() { return /* binding */ k; },
/* harmony export */   "getFormat": function() { return /* binding */ I; },
/* harmony export */   "random": function() { return /* binding */ E; }
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "./icon/block.json":
/*!*************************!*\
  !*** ./icon/block.json ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"version":"0.1.0","name":"premium/icon","title":"Icon","icon":"icon","category":"premium-blocks","description":"Decorate your Gutenberg website using Premium Icon Block.","keywords":["Icon","Font Awesome"],"supports":{"anchor":true,"html":false},"editorScript":"file:./build/block.js","script":"pbg-blocks-js","editorStyle":"file:./build/index.css","style":"file:./build/style-block.css","attributes":{"blockId":{"type":"string"},"classMigrate":{"type":"boolean","default":false},"wrapBorder":{"type":"boolean","default":false},"iconType":{"type":"string","default":"dash"},"selectedIcon":{"type":"string","default":"dashicons dashicons-admin-site"},"iconAlign":{"type":"object","default":{"Desktop":"center","Tablet":"center","Mobile":"center"}},"hoverEffect":{"type":"string","default":"none"},"iconStyles":{"type":"array","default":[{"iconColor":"","iconBack":"","iconHoverColor":"","iconHoverBack":"","iconOpacity":"1"}]},"urlCheck":{"type":"boolean"},"link":{"type":"string"},"target":{"type":"boolean"},"hideDesktop":{"type":"boolean","default":""},"hideTablet":{"type":"boolean","default":""},"hideMobile":{"type":"boolean","default":""},"iconSize":{"type":"object","default":{"Desktop":"50","Tablet":"50","Mobile":"50","unit":"px"}},"iconMargin":{"type":"object","default":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""},"unit":"px"}},"iconPadding":{"type":"object","default":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""},"unit":"px"}},"wrapMargin":{"type":"object","default":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""},"unit":"px"}},"wrapPadding":{"type":"object","default":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""},"unit":"px"}},"iconBorder":{"type":"object","default":{"borderColor":"","borderType":"none","borderRadius":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""}},"borderWidth":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""}}}},"containerBorder":{"type":"object","default":{"borderColor":"","borderType":"none","borderRadius":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""}},"borderWidth":{"Desktop":{"top":"","right":"","bottom":"","left":""},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""}}}},"containerBackground":{"type":"object","default":{"backgroundType":"","backgroundColor":"","backgroundImageID":"","backgroundImageURL":"","backgroundPosition":"","backgroundRepeat":"","backgroundSize":"","fixed":false,"gradientLocationOne":"0","gradientColorTwo":"","gradientLocationTwo":"100","gradientAngle":"180","gradientPosition":"center center","gradientType":"linear"}},"containerShadow":{"type":"object","default":{"color":"undefined","blur":"10","horizontal":"0","vertical":"0","position":""}},"iconShadow":{"type":"object","default":{"color":"undefined","blur":"10","horizontal":"0","vertical":"0"}}}}');

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./icon/index.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_config_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../blocks-config/block-icons */ "../../blocks-config/block-icons.js");
/* harmony import */ var _assets_js_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/settings */ "../../assets/js/settings.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./icon/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./icon/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./icon/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./icon/deprecated.js");




/**
 * Internal dependencies
 */





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('premium/icon', { ..._block_json__WEBPACK_IMPORTED_MODULE_4__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "premium-blocks-for-gutenberg"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Decorate your Gutenberg website using Premium Icon Block.', 'premium-block-for-gutenberg'),
  category: "premium-blocks",
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", 'premium-blocks-for-gutenberg'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Awesome", 'premium-blocks-for-gutenberg')],
  supports: {
    inserter: _assets_js_settings__WEBPACK_IMPORTED_MODULE_3__.icon
  },

  /**
   * @see ./edit.js
   */
  icon: _blocks_config_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map