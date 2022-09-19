/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/bezier-easing/src/index.js":
/*!*****************************************************!*\
  !*** ../../node_modules/bezier-easing/src/index.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


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

/***/ "../../node_modules/react-spring/renderprops.js":
/*!******************************************************!*\
  !*** ../../node_modules/react-spring/renderprops.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"));
var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js"));
var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(__webpack_require__(/*! react-dom */ "react-dom"));

let bugfixes = undefined;
let applyAnimatedValues = undefined;
let colorNames = [];
let requestFrame = cb => typeof window !== 'undefined' && window.requestAnimationFrame(cb);
let cancelFrame = cb => typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
let interpolation = undefined;
let now = () => Date.now();
let defaultElement = undefined;
let createAnimatedStyle = undefined;
const injectApplyAnimatedValues = (fn, transform) => applyAnimatedValues = {
  fn,
  transform
};
const injectColorNames = names => colorNames = names;
const injectBugfixes = fn => bugfixes = fn;
const injectInterpolation = cls => interpolation = cls;
const injectFrame = (raf, caf) => {
  var _ref = [raf, caf];
  requestFrame = _ref[0];
  cancelFrame = _ref[1];
  return _ref;
};
const injectNow = nowFn => now = nowFn;
const injectDefaultElement = el => defaultElement = el;
const injectCreateAnimatedStyle = factory => createAnimatedStyle = factory;

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

class Animated {
  attach() {}

  detach() {}

  getValue() {}

  getAnimatedValue() {
    return this.getValue();
  }

  addChild(child) {}

  removeChild(child) {}

  getChildren() {
    return [];
  }

}

const getValues = object => Object.keys(object).map(k => object[k]);

class AnimatedWithChildren extends Animated {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.children = [];

    this.getChildren = () => this.children;

    this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _this;
    };
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArrayWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.getAnimatedValue = () => this.getValue();

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObjectWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.getAnimatedValue = () => this.getValue(true);

    this.attach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

}

class AnimatedStyle extends AnimatedObjectWithChildren {
  constructor(style) {
    super();
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

class Interpolation {
  // Default config = config, args
  // Short config   = range, output, extrapolate
  static create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output,
      extrapolate: extra || 'extend'
    });
    let outputRange = config.output;
    let inputRange = config.range || [0, 1];

    let easing = config.easing || (t => t);

    let extrapolateLeft = 'extend';
    let map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    let extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return input => {
      let range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  }

}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba)); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return Interpolation.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
}

class AnimatedInterpolation extends AnimatedArrayWithChildren {
  constructor(parents, _config, _arg) {
    super();

    this.getValue = () => this.calc(...this.payload.map(value => value.getValue()));

    this.updateConfig = (config, arg) => this.calc = Interpolation.create(config, arg);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    this.calc = Interpolation.create(_config, _arg);
  }

}
const interpolate$1 = (parents, config, arg) => parents && new AnimatedInterpolation(parents, config, arg);

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(child => findAnimatedStyles(child, styles));
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


class AnimatedValue extends AnimatedWithChildren {
  constructor(_value) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.getValue = () => this.value;

    this.updateStyles = () => findAnimatedStyles(this, this.animatedStyles);

    this.updateValue = value => this.flush(this.value = value);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.value = _value;
    this.animatedStyles = new Set();
    this.done = false;
    this.startPosition = _value;
    this.lastPosition = _value;
    this.lastVelocity = undefined;
    this.lastTime = undefined;
    this.controller = undefined;
  }

  flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  }

}

class AnimatedArray extends AnimatedArrayWithChildren {
  constructor(array) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach((v, i) => _this.payload[i].setValue(v, flush));
      } else _this.payload.forEach((v, i) => _this.payload[i].setValue(value, flush));
    };

    this.getValue = () => this.payload.map(v => v.getValue());

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = array.map(n => new AnimatedValue(n));
  }

}

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  let i;

  for (i in a) if (!(i in b)) return false;

  for (i in b) if (a[i] !== b[i]) return false;

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj(...args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(k => object[k]);
}
function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        native = props.native,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        impl = props.impl,
        inject = props.inject,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        autoStart = props.autoStart,
        ref = props.ref,
        forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  const forward = getForwardProps(props);
  const rest = Object.keys(props).reduce((a, k) => forward[k] !== void 0 ? a : _extends({}, a, {
    [k]: props[k]
  }), {});
  return _extends({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value)
  });
}
function convertValues(props) {
  const from = props.from,
        to = props.to,
        native = props.native;
  const allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

const check = value => value === 'auto';

const overwrite = (width, height) => (acc, _ref) => {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: value === 'auto' ? ~name.indexOf('height') ? height : width : value
  });
};

function fixAuto(props, callback) {
  const from = props.from,
        to = props.to,
        children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  let element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  const elementStyles = element.props.style; // Return v.dom with injected ref

  return React__default.createElement(element.type, _extends({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: _extends({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: _ref2 => {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        let node = ReactDOM.findDOMNode(_ref2);
        let width, height;
        let cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          const paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          const paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          const borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          const borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        const convert = overwrite(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, style => style);

let active = false;
const controllers = new Set();

const frameLoop = () => {
  let time = now();

  for (let controller of controllers) {
    let isDone = true;
    let noChange = true;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

const addController = controller => {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

const removeController = controller => {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

class Controller {
  constructor(props, config) {
    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = () => this.props.native ? this.interpolations : this.animatedProps;

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  update(props) {
    this.props = _extends({}, this.props, props);

    let _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reset merged props when necessary

    let extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref3, i) => {
      let name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      let entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = typeof value === 'number';
      const isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = !isNumber && !isString && Array.isArray(value);
      let fromValue = from[name] !== undefined ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        this.hasChanged = true;
        let parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          const prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        const animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(value => value.prepare(this));
        return _extends({}, acc, {
          [name]: _extends({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            changes: value,
            fromValues: toArray(parent.getValue()),
            toValues: toArray(target ? toValue.getPayload() : toValue),
            immediate: callProp(immediate, name),
            delay: withDefault(toConfig.delay, delay || 0),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start(...start);
    const onEnd = start[0],
          onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  }

  start(onEnd, onUpdate) {
    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(res => this.resolve = res);
  }

  stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(a => a.changes = undefined);
    this.debouncedOnEnd({
      finished
    });
  }

  destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  }

  debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    const onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  }

}

class AnimatedProps extends AnimatedObjectWithChildren {
  constructor(props, callback) {
    super();
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.payload = props;
    this.update = callback;
    this.attach();
  }

}

function createAnimatedComponent(Component) {
  class AnimatedComponent extends React__default.Component {
    constructor(props) {
      super();

      this.callback = () => {
        if (this.node) {
          const didUpdate = applyAnimatedValues.fn(this.node, this.propsAnimated.getAnimatedValue(), this);
          if (didUpdate === false) this.forceUpdate();
        }
      };

      this.attachProps(props);
    }

    componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    }

    setNativeProps(props) {
      const didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.


    attachProps(_ref) {
      let forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);

      const oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    }

    shouldComponentUpdate(props) {
      const style = props.style,
            nextProps = _objectWithoutPropertiesLoose(props, ["style"]);

      const _this$props = this.props,
            currentStyle = _this$props.style,
            currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    }

    render() {
      const _this$propsAnimated$g = this.propsAnimated.getValue(),
            scrollTop = _this$propsAnimated$g.scrollTop,
            scrollLeft = _this$propsAnimated$g.scrollLeft,
            animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React__default.createElement(Component, _extends({}, animatedProps, {
        ref: node => this.node = handleRef(node, this.props.forwardRef)
      }));
    }

  }

  return React__default.forwardRef((props, ref) => React__default.createElement(AnimatedComponent, _extends({}, props, {
    forwardRef: ref
  })));
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

class Spring extends React__default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    this.controller = new Controller(null, null);
    this.didUpdate = false;
    this.didInject = false;
    this.finished = true;

    this.start = () => {
      this.finished = false;
      let wasMounted = this.mounted;
      this.controller.start(props => this.finish(_extends({}, props, {
        wasMounted
      })), this.update);
    };

    this.stop = () => this.controller.stop(true);

    this.update = () => this.mounted && this.setState({
      internal: true
    });

    this.finish = (_ref) => {
      let finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      this.finished = true;

      if (this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (this.props.onRest && (wasMounted || !noChange)) this.props.onRest(this.controller.merged); // Restore end-state

        if (this.mounted && this.didInject) {
          this.afterInject = convertValues(this.props);
          this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (this.mounted && (this.didInject || this.props.after)) this.setState({
          internal: true
        });
        this.didInject = false;
      }
    };
  }

  componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  }

  componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  }

  static getDerivedStateFromProps(props, _ref2) {
    let internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    const from = props.from,
          to = props.to,
          reset = props.reset,
          force = props.force;
    const propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged,
      lastProps: props,
      internal: false
    };
  }

  render() {
    const children = this.props.children;
    const propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      const frame = this.props.inject(this.props, injectProps => {
        // The inject frame has rendered, now let's update animations...
        this.injectProps = injectProps;
        this.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    let values = _extends({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = _extends({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  }

  componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  }

}
Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

class Trail extends React__default.PureComponent {
  constructor() {
    super(...arguments);
    this.first = true;
    this.instances = new Set();

    this.hook = (instance, index, length, reverse) => {
      // Add instance to set
      this.instances.add(instance); // Return undefined on the first index and from then on the previous instance

      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(this.instances)[reverse ? index + 1 : index - 1];
    };
  }

  render() {
    const _this$props = this.props,
          items = _this$props.items,
          _children = _this$props.children,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? {} : _this$props$from,
          initial = _this$props.initial,
          reverse = _this$props.reverse,
          keys = _this$props.keys,
          delay = _this$props.delay,
          onRest = _this$props.onRest,
          props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    const array = toArray(items);
    return toArray(array).map((item, i) => React__default.createElement(Spring, _extends({
      onRest: i === 0 ? onRest : null,
      key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
      from: this.first && initial !== void 0 ? initial || {} : from
    }, props, {
      delay: i === 0 && delay || undefined,
      attach: instance => this.hook(instance, i, array.length, reverse),
      children: props => {
        const child = _children(item, i);

        return child ? child(props) : null;
      }
    })));
  }

  componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  }

}
Trail.defaultProps = {
  keys: item => item
};

const DEFAULT = '__default';

class KeyframesImpl extends React__default.PureComponent {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.guid = 0;
    this.state = {
      props: {},
      resolve: () => null,
      last: true,
      index: 0
    };

    this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(resolve => {
        _this.mounted && _this.setState(state => ({
          props,
          resolve,
          last,
          index
        }), () => _this.running = false);
      });
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(previous) {
    var _this2 = this;

    const _this$props = this.props,
          states = _this$props.states,
          f = _this$props.filter,
          state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        const localId = ++this.guid;
        const slots = states[state];

        if (slots) {
          if (Array.isArray(slots)) {
            let q = Promise.resolve();

            for (let i = 0; i < slots.length; i++) {
              let index = i;
              let slot = slots[index];
              let last = index === slots.length - 1;
              q = q.then(() => localId === this.guid && this.next(f(slot), last, index));
            }
          } else if (typeof slots === 'function') {
            let index = 0;
            slots( // next
            function (props, last) {
              if (last === void 0) {
                last = false;
              }

              return localId === _this2.guid && _this2.next(f(props), last, index++);
            }, // cancel
            () => requestFrame(() => this.instance && this.instance.stop()), // ownprops
            this.props);
          } else {
            this.next(f(states[state]));
          }
        }
      }
    }
  }

  render() {
    const _this$state = this.state,
          props = _this$state.props,
          resolve = _this$state.resolve,
          last = _this$state.last,
          index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    let _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return React__default.createElement(Component, _extends({
      ref: _ref => this.instance = handleRef(_ref, forwardRef),
      config: config
    }, rest, props, {
      onRest: args => {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  }

}

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
const Keyframes = React__default.forwardRef((props, ref) => React__default.createElement(KeyframesImpl, _extends({}, props, {
  forwardRef: ref
})));

Keyframes.create = primitive => function (states, filter) {
  if (filter === void 0) {
    filter = states => states;
  }

  if (typeof states === 'function' || Array.isArray(states)) states = {
    [DEFAULT]: states
  };
  return props => React__default.createElement(KeyframesImpl, _extends({
    primitive: primitive,
    states: states,
    filter: filter
  }, props));
};

Keyframes.Spring = states => Keyframes.create(Spring)(states, interpolateTo);

Keyframes.Trail = states => Keyframes.create(Trail)(states, interpolateTo);

let guid = 0;

let get = props => {
  let items = props.items,
      keys = props.keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return _extends({
    items,
    keys: keys.map(key => String(key))
  }, rest);
};

class Transition extends React__default.PureComponent {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  constructor(prevProps) {
    super(prevProps);

    this.destroyItem = (item, key, state) => values => {
      const _this$props = this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

      if (this.mounted) {
        onDestroyed && onDestroyed(item);
        this.setState((_ref) => {
          let deleted = _ref.deleted;
          return {
            deleted: deleted.filter(t => t.key !== key)
          };
        });
        onRest && onRest(item, state, values);
      }
    };

    this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps
    };
  }

  static getDerivedStateFromProps(props, _ref2) {
    let first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);

    let _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    let _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    let current = _extends({}, state.current);

    let deleted = [...state.deleted]; // Compare next keys with current keys

    let currentKeys = Object.keys(current);
    let currentSet = new Set(currentKeys);
    let nextSet = new Set(keys);
    let added = keys.filter(item => !currentSet.has(item));
    let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
    let updated = keys.filter(item => currentSet.has(item));
    let delay = 0;
    added.forEach(key => {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'enter';
      current[key] = {
        state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(key => {
      const keyIndex = _keys.indexOf(key);

      const item = _items[keyIndex];
      const state = 'leave';
      deleted.push(_extends({}, current[key], {
        state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(key => {
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'update';
      current[key] = _extends({}, current[key], {
        item,
        state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    let out = keys.map(key => current[key]);
    deleted.forEach((_ref3) => {
      let left = _ref3.left,
          right = _ref3.right,
          transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);

      let pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(t => t.originalKey === right); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === left); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === right); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [...out.slice(0, pos), transition, ...out.slice(pos)];
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current,
      deleted,
      prevProps: props
    };
  }

  render() {
    const _this$props2 = this.props,
          initial = _this$props2.initial,
          _this$props2$from = _this$props2.from,
          _this$props2$enter = _this$props2.enter,
          _this$props2$leave = _this$props2.leave,
          _this$props2$update = _this$props2.update,
          onDestroyed = _this$props2.onDestroyed,
          keys = _this$props2.keys,
          items = _this$props2.items,
          onFrame = _this$props2.onFrame,
          onRest = _this$props2.onRest,
          onStart = _this$props2.onStart,
          trail = _this$props2.trail,
          config = _this$props2.config,
          _children = _this$props2.children,
          unique = _this$props2.unique,
          reset = _this$props2.reset,
          extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map((_ref4, i) => {
      let state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return React__default.createElement(Keyframes, _extends({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: {
          [state]: to
        },
        key: key,
        onRest: destroyed ? this.destroyItem(item, key, state) : onRest && (values => onRest(item, state, values)),
        onStart: onStart && (() => onStart(item, state)),
        onFrame: onFrame && (values => onFrame(item, state, values)),
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: props => {
          const child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  }

}
Transition.defaultProps = {
  keys: item => item,
  unique: false,
  reset: false
};

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
const extendedAnimated = domElements.reduce((acc, element) => {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);

exports.Spring = Spring;
exports.Keyframes = Keyframes;
exports.Transition = Transition;
exports.Trail = Trail;
exports.Controller = Controller;
exports.config = config;
exports.animated = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;


/***/ }),

/***/ "../../node_modules/webfontloader/webfontloader.js":
/*!*********************************************************!*\
  !*** ../../node_modules/webfontloader/webfontloader.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animated": function() { return /* binding */ Animated; },
/* harmony export */   "AnimatedArray": function() { return /* binding */ AnimatedArray; },
/* harmony export */   "AnimatedObject": function() { return /* binding */ AnimatedObject; },
/* harmony export */   "AnimatedString": function() { return /* binding */ AnimatedString; },
/* harmony export */   "AnimatedValue": function() { return /* binding */ AnimatedValue; },
/* harmony export */   "createHost": function() { return /* binding */ createHost; },
/* harmony export */   "getAnimated": function() { return /* binding */ getAnimated; },
/* harmony export */   "getAnimatedType": function() { return /* binding */ getAnimatedType; },
/* harmony export */   "getPayload": function() { return /* binding */ getPayload; },
/* harmony export */   "isAnimated": function() { return /* binding */ isAnimated; },
/* harmony export */   "setAnimated": function() { return /* binding */ setAnimated; }
/* harmony export */ });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const $node = Symbol.for('Animated:node');
const isAnimated = value => !!value && value[$node] === value;
const getAnimated = owner => owner && owner[$node];
const setAnimated = (owner, node) => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.defineHidden)(owner, $node, node);
const getPayload = owner => owner && owner[$node] && owner[$node].getPayload();
class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }

  getPayload() {
    return this.payload || [];
  }

}

class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }

  static create(value) {
    return new AnimatedValue(value);
  }

  getPayload() {
    return [this];
  }

  getValue() {
    return this._value;
  }

  setValue(value, step) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(value)) {
      this.lastPosition = value;

      if (step) {
        value = Math.round(value / step) * step;

        if (this.done) {
          this.lastPosition = value;
        }
      }
    }

    if (this._value === value) {
      return false;
    }

    this._value = value;
    return true;
  }

  reset() {
    const {
      done
    } = this;
    this.done = false;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done) this.lastVelocity = null;
      this.v0 = null;
    }
  }

}

class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)({
      output: [value, value]
    });
  }

  static create(value) {
    return new AnimatedString(value);
  }

  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }

  setValue(value) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(value)) {
      if (value == this._string) {
        return false;
      }

      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }

    return true;
  }

  reset(goal) {
    if (goal) {
      this._toString = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)({
        output: [this.getValue(), goal]
      });
    }

    this._value = 0;
    super.reset();
  }

}

const TreeContext = {
  dependencies: null
};

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }

  getValue(animated) {
    const values = {};
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        values[key] = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }

  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }

  reset() {
    if (this.payload) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(this.payload, node => node.reset());
    }
  }

  _makePayload(source) {
    if (source) {
      const payload = new Set();
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }

  _addToPayload(source) {
    if (TreeContext.dependencies && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
      TreeContext.dependencies.add(source);
    }

    const payload = getPayload(source);

    if (payload) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(payload, node => this.add(node));
    }
  }

}

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  static create(source) {
    return new AnimatedArray(source);
  }

  getValue() {
    return this.source.map(node => node.getValue());
  }

  setValue(source) {
    const payload = this.getPayload();

    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }

    super.setValue(source.map(makeAnimated));
    return true;
  }

}

function makeAnimated(value) {
  const nodeType = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(value) ? AnimatedArray : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? AnimatedString : AnimatedValue;
}

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

const withAnimated = (Component, host) => {
  const hasInstance = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const ref = hasInstance && (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();

    const callback = () => {
      const instance = instanceRef.current;

      if (hasInstance && !instance) {
        return;
      }

      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

      if (didUpdate === false) {
        forceUpdate();
      }
    };

    const observer = new PropsObserver(callback, deps);
    const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
      observerRef.current = observer;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(dep, observer));
      return () => {
        if (observerRef.current) {
          (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(observerRef.current.deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(dep, observerRef.current));
          _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.cancel(observerRef.current.update);
        }
      };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(callback, []);
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
      const observer = observerRef.current;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(observer.deps, dep => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(dep, observer));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, _extends({}, usedProps, {
      ref: ref
    }));
  });
};

class PropsObserver {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }

  eventObserved(event) {
    if (event.type == 'change') {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.write(this.update);
    }
  }

}

function getAnimatedState(props, host) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style) props = _extends({}, props, {
    style: host.createAnimatedStyle(props.style)
  });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}

function updateRef(ref, value) {
  if (ref) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}

const cacheKey = Symbol.for('AnimatedComponent');
const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = style => new AnimatedObject(style),
  getComponentProps: _getComponentProps = props => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };

  const animated = Component => {
    const displayName = getDisplayName(Component) || 'Anonymous';

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }

    Component.displayName = `Animated(${displayName})`;
    return Component;
  };

  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(components, (Component, key) => {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(components)) {
      key = getDisplayName(Component);
    }

    animated[key] = animated(Component);
  });
  return {
    animated
  };
};

const getDisplayName = arg => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(arg) ? arg : arg && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(arg.displayName) ? arg.displayName : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(arg) && arg.name || null;




/***/ }),

/***/ "./node_modules/@react-spring/core/dist/react-spring-core.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-spring/core/dist/react-spring-core.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BailSignal": function() { return /* binding */ BailSignal; },
/* harmony export */   "Controller": function() { return /* binding */ Controller; },
/* harmony export */   "FrameValue": function() { return /* binding */ FrameValue; },
/* harmony export */   "Globals": function() { return /* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals; },
/* harmony export */   "Interpolation": function() { return /* binding */ Interpolation; },
/* harmony export */   "Spring": function() { return /* binding */ Spring; },
/* harmony export */   "SpringContext": function() { return /* binding */ SpringContext; },
/* harmony export */   "SpringRef": function() { return /* binding */ SpringRef; },
/* harmony export */   "SpringValue": function() { return /* binding */ SpringValue; },
/* harmony export */   "Trail": function() { return /* binding */ Trail; },
/* harmony export */   "Transition": function() { return /* binding */ Transition; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "createInterpolator": function() { return /* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator; },
/* harmony export */   "easings": function() { return /* binding */ easings; },
/* harmony export */   "inferTo": function() { return /* binding */ inferTo; },
/* harmony export */   "interpolate": function() { return /* binding */ interpolate; },
/* harmony export */   "to": function() { return /* binding */ to; },
/* harmony export */   "update": function() { return /* binding */ update; },
/* harmony export */   "useChain": function() { return /* binding */ useChain; },
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect; },
/* harmony export */   "useReducedMotion": function() { return /* reexport safe */ _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useReducedMotion; },
/* harmony export */   "useSpring": function() { return /* binding */ useSpring; },
/* harmony export */   "useSpringRef": function() { return /* binding */ useSpringRef; },
/* harmony export */   "useSprings": function() { return /* binding */ useSprings; },
/* harmony export */   "useTrail": function() { return /* binding */ useTrail; },
/* harmony export */   "useTransition": function() { return /* binding */ useTransition; }
/* harmony export */ });
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/types/animated */ "./node_modules/@react-spring/types/animated.js");
/* harmony import */ var _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__) if(["default","Globals","createInterpolator","useIsomorphicLayoutEffect","useReducedMotion","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","easings","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_types_animated__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-spring/types/interpolation */ "./node_modules/@react-spring/types/interpolation.js");
/* harmony import */ var _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__) if(["default","Globals","createInterpolator","useIsomorphicLayoutEffect","useReducedMotion","BailSignal","Controller","FrameValue","Interpolation","Spring","SpringContext","SpringRef","SpringValue","Trail","Transition","config","easings","inferTo","interpolate","to","update","useChain","useSpring","useSpringRef","useSprings","useTrail","useTransition"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_types_interpolation__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);








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

function callProp(value, ...args) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(value) ? value(...args) : value;
}
const matchProp = (value, key) => value === true || !!(key && value && (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(value) ? value(key) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(value).includes(key)));
const resolveProp = (prop, key) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(prop) ? key && prop[key] : prop;
const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : undefined;

const noopTransform = value => value;

const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;

  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }

  const defaults = {};

  for (const key of keys) {
    const value = transform(props[key], key);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
      defaults[key] = value;
    }
  }

  return defaults;
};
const DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  const forward = {};
  let count = 0;
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  const to = getForwardProps(props);

  if (to) {
    const out = {
      to
    };
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(props, (val, key) => key in to || (out[key] = val));
    return out;
  }

  return _extends({}, props);
}
function computeGoal(value) {
  value = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(value);
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(value) ? value.map(computeGoal) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(value) ? _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props) return true;

  return false;
}
function isAsyncTo(to) {
  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to) && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

function useChain(refs, timeSteps, timeFrame = 1000) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
    if (timeSteps) {
      let prevDelay = 0;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(refs, (ref, i) => {
        const controllers = ref.current;

        if (controllers.length) {
          let delay = timeFrame * timeSteps[i];
          if (isNaN(delay)) delay = prevDelay;else prevDelay = delay;
          (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(controllers, ctrl => {
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrl.queue, props => {
              const memoizedDelayProp = props.delay;

              props.delay = key => delay + callProp(memoizedDelayProp || 0, key);
            });
          });
          ref.start();
        }
      });
    } else {
      let p = Promise.resolve();
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(refs, ref => {
        const controllers = ref.current;

        if (controllers.length) {
          const queues = controllers.map(ctrl => {
            const q = ctrl.queue;
            ctrl.queue = [];
            return q;
          });
          p = p.then(() => {
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(controllers, (ctrl, i) => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queues[i] || [], update => ctrl.queue.push(update)));
            return Promise.all(ref.start());
          });
        }
      });
    }
  });
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;

const bounceOut = x => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

const easings = {
  linear: x => x,
  easeInQuad: x => x * x,
  easeOutQuad: x => 1 - (1 - x) * (1 - x),
  easeInOutQuad: x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: x => x * x * x,
  easeOutCubic: x => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: x => x * x * x * x,
  easeOutQuart: x => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: x => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: x => x * x * x * x * x,
  easeOutQuint: x => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: x => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: x => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: x => Math.sin(x * Math.PI / 2),
  easeInOutSine: x => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: x => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: x => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: x => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: x => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: x => c3 * x * x * x - c1 * x * x,
  easeOutBack: x => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: x => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: x => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: x => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: x => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
};

const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});

class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }

}
function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (const key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  let {
    mass,
    frequency,
    damping
  } = config;

  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.decay)) {
    config.duration = undefined;
  } else {
    const isTensionConfig = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.tension) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.friction);

    if (isTensionConfig || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.frequency) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.damping) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

const emptyArray = [];
class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }

}

function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;

    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      let pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.now();
    }

    function onResume() {
      if (delay > 0 && !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
        state.delayed = true;
        timeout = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }

      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some(result => result.cancelled) ? getCancelledResult(target.get()) : results.every(result => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(result => result.finished));
const getNoopResult = value => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
const getCancelledResult = value => ({
  value,
  cancelled: true,
  finished: false
});

function runAsync(to, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to;
    const defaultProps = getDefaultProps(props, (value, key) => key === 'onRest' ? undefined : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));

    const bailIfEnded = bailSignal => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };

    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }

        bailIfEnded(bailSignal);
        const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props.parentId = callId;
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(defaultProps, (value, key) => {
          if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props[key])) {
            props[key] = value;
          }
        });
        const result = await target.start(props);
        bailIfEnded(bailSignal);

        if (state.paused) {
          await new Promise(resume => {
            state.resumeQueue.add(resume);
          });
        }

        return result;
      })();
    };

    let result;

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }

    try {
      let animating;

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to)) {
        animating = (async queue => {
          for (const props of queue) {
            await animate(props);
          }
        })(to);
      } else {
        animating = Promise.resolve(to(animate, target.stop.bind(target)));
      }

      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : undefined;
        state.promise = parentId ? prevPromise : undefined;
      }
    }

    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(onRest)) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }

    return result;
  })();
}
function stopAsync(state, cancelId) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(state.timeouts, t => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}
class BailSignal extends Error {
  constructor() {
    super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    this.result = void 0;
  }

}
class SkipAniamtionSignal extends Error {
  constructor() {
    super('SkipAnimationSignal');
    this.result = void 0;
  }

}

const isFrameValue = value => value instanceof FrameValue;
let nextId$1 = 1;
class FrameValue extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;

      this._onPriorityChange(priority);
    }
  }

  get() {
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    return node && node.getValue();
  }

  to(...args) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.to(this, args);
  }

  interpolate(...args) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateInterpolate)();
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.to(this, args);
  }

  toJSON() {
    return this.get();
  }

  observerAdded(count) {
    if (count == 1) this._attach();
  }

  observerRemoved(count) {
    if (count == 0) this._detach();
  }

  _attach() {}

  _detach() {}

  _onChange(value, idle = false) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
      type: 'change',
      parent: this,
      value,
      idle
    });
  }

  _onPriorityChange(priority) {
    if (!this.idle) {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.sort(this);
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
      type: 'priority',
      parent: this,
      priority
    });
  }

}

const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;
const hasAnimated = target => (target[$P] & HAS_ANIMATED) > 0;
const isAnimating = target => (target[$P] & IS_ANIMATING) > 0;
const isPaused = target => (target[$P] & IS_PAUSED) > 0;
const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(arg1) || !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(arg2)) {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.default)) {
        props.default = true;
      }

      this.start(props);
    }
  }

  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }

  get goal() {
    return (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(this.animation.to);
  }

  get velocity() {
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    return node instanceof _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map(node => node.lastVelocity || 0);
  }

  get hasAnimated() {
    return hasAnimated(this);
  }

  get isAnimating() {
    return isAnimating(this);
  }

  get isPaused() {
    return isPaused(this);
  }

  get isDelayed() {
    return this._state.delayed;
  }

  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config,
      toValues
    } = anim;
    const payload = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(anim.to);

    if (!payload && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(anim.to)) {
      toValues = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to));
    }

    anim.values.forEach((node, i) => {
      if (node.done) return;
      const to = node.constructor == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to;

      if (!finished) {
        position = node.lastPosition;

        if (config.tension <= 0) {
          node.done = true;
          return;
        }

        let elapsed = node.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node.v0 != null ? node.v0 : node.v0 = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(config.velocity) ? config.velocity[i] : config.velocity;
        let velocity;
        const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));

        if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(config.duration)) {
          let p = 1;

          if (config.duration > 0) {
            if (this._memoizedDuration !== config.duration) {
              this._memoizedDuration = config.duration;

              if (node.durationProgress > 0) {
                node.elapsedTime = config.duration * node.durationProgress;
                elapsed = node.elapsedTime += dt;
              }
            }

            p = (config.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node.durationProgress = p;
          }

          position = from + config.easing(p) * (to - from);
          velocity = (position - node.lastPosition) / dt;
          finished = p == 1;
        } else if (config.decay) {
          const decay = config.decay === true ? 0.998 : config.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node.lastPosition - position) <= precision;
          velocity = v0 * e;
        } else {
          velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
          const restVelocity = config.restVelocity || precision / 10;
          const bounceFactor = config.clamp ? 0 : config.bounce;
          const canBounce = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(bounceFactor);
          const isGrowing = from == to ? node.v0 > 0 : from < to;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);

          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;

            if (!isMoving) {
              finished = Math.abs(to - position) <= precision;

              if (finished) {
                break;
              }
            }

            if (canBounce) {
              isBouncing = position == to || position > to == isGrowing;

              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to;
              }
            }

            const springForce = -config.tension * 0.000001 * (position - to);
            const dampingForce = -config.friction * 0.001 * velocity;
            const acceleration = (springForce + dampingForce) / config.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }

        node.lastVelocity = velocity;

        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }

      if (payload && !payload[i].done) {
        finished = false;
      }

      if (finished) {
        node.done = true;
      } else {
        idle = false;
      }

      if (node.setValue(position, config.round)) {
        changed = true;
      }
    });
    const node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
    const currVal = node.getValue();

    if (idle) {
      const finalVal = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to);

      if ((currVal !== finalVal || changed) && !config.decay) {
        node.setValue(finalVal);

        this._onChange(finalVal);
      } else if (changed && config.decay) {
        this._onChange(currVal);
      }

      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }

  set(value) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
      this._stop();

      this._focus(value);

      this._set(value);
    });
    return this;
  }

  pause() {
    this._update({
      pause: true
    });
  }

  resume() {
    this._update({
      pause: false
    });
  }

  finish() {
    if (isAnimating(this)) {
      const {
        to,
        config
      } = this.animation;
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
        this._onStart();

        if (!config.decay) {
          this._set(to, false);
        }

        this._stop();
      });
    }

    return this;
  }

  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }

  start(to, arg2) {
    let queue;

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to)) {
      queue = [_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? to : _extends({}, arg2, {
        to
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }

    return Promise.all(queue.map(props => {
      const up = this._update(props);

      return up;
    })).then(results => getCombinedResult(this, results));
  }

  stop(cancel) {
    const {
      to
    } = this.animation;

    this._focus(this.get());

    stopAsync(this._state, cancel && this._lastCallId);
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => this._stop(to, cancel));
    return this;
  }

  reset() {
    this._update({
      reset: true
    });
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._start();
    } else if (event.type == 'priority') {
      this.priority = event.priority + 1;
    }
  }

  _prepareNode(props) {
    const key = this.key || '';
    let {
      to,
      from
    } = props;
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? to[key] : to;

    if (to == null || isAsyncTo(to)) {
      to = undefined;
    }

    from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(from) ? from[key] : from;

    if (from == null) {
      from = undefined;
    }

    const range = {
      to,
      from
    };

    if (!hasAnimated(this)) {
      if (props.reverse) [to, from] = [from, to];
      from = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(from);

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(from)) {
        this._set(from);
      } else if (!(0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this)) {
        this._set(to);
      }
    }

    return range;
  }

  _update(_ref, isLoop) {
    let props = _extends({}, _ref);

    const {
      key,
      defaultProps
    } = this;
    if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, 'onProps');
    sendEvent(this, 'onProps', props, this);

    const range = this._prepareNode(props);

    if (Object.isFrozen(this)) {
      throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
    }

    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(state.pauseQueue);
            sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);

            if (isAnimating(this)) {
              this._resume();
            }

            (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(state.resumeQueue);
            sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then(result => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);

        if (nextProps) {
          return this._update(nextProps, true);
        }
      }

      return result;
    });
  }

  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }

    const hasToProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(range.to);
    const hasFromProp = !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(range.from);

    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }

    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to = prevTo,
      from = prevFrom
    } = range;

    if (hasFromProp && !hasToProp && (!props.default || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to))) {
      to = from;
    }

    if (props.reverse) [to, from] = [from, to];
    const hasFromChanged = !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(from, prevFrom);

    if (hasFromChanged) {
      anim.from = from;
    }

    from = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(from);
    const hasToChanged = !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(to, prevTo);

    if (hasToChanged) {
      this._focus(to);
    }

    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config
    } = anim;
    const {
      decay,
      velocity
    } = config;

    if (hasToProp || hasFromProp) {
      config.velocity = 0;
    }

    if (props.config && !hasAsyncTo) {
      mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }

    let node = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);

    if (!node || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(to)) {
      return resolve(getFinishedResult(this, true));
    }

    const reset = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.reset) ? hasFromProp && !props.default : !_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to);
    const isAnimatable = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(goal) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(goal) || (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isAnimatedString)(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

    if (hasToChanged) {
      const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(to);

      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }

    const goalType = node.constructor;
    let started = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to);
    let finished = false;

    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

      if (hasToChanged || hasValueChanged) {
        finished = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(computeGoal(value), goal);
        started = !finished;
      }

      if (!(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(anim.immediate, immediate) && !immediate || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config.decay, decay) || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(config.velocity, velocity)) {
        started = true;
      }
    }

    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }

    if (!hasAsyncTo) {
      if (started || (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to) ? null : goalType == _react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.AnimatedString ? [1] : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(goal);
      }

      if (anim.immediate != immediate) {
        anim.immediate = immediate;

        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }

      if (started) {
        const {
          onRest
        } = anim;
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ACTIVE_EVENTS, type => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(this._pendingCalls, result);

        this._pendingCalls.add(resolve);

        if (anim.changed) _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
          anim.changed = !reset;
          onRest == null ? void 0 : onRest(result, this);

          if (reset) {
            callProp(defaultProps.onRest, result);
          } else {
            anim.onStart == null ? void 0 : anim.onStart(result, this);
          }
        });
      }
    }

    if (reset) {
      this._set(value);
    }

    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }

  _focus(value) {
    const anim = this.animation;

    if (value !== anim.to) {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidObservers)(this)) {
        this._detach();
      }

      anim.to = value;

      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidObservers)(this)) {
        this._attach();
      }
    }
  }

  _attach() {
    let priority = 0;
    const {
      to
    } = this.animation;

    if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to)) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(to, this);

      if (isFrameValue(to)) {
        priority = to.priority + 1;
      }
    }

    this.priority = priority;
  }

  _detach() {
    const {
      to
    } = this.animation;

    if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(to)) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(to, this);
    }
  }

  _set(arg, idle = true) {
    const value = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(arg);

    if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
      const oldNode = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);

      if (!oldNode || !(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, oldNode.getValue())) {
        const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(value);

        if (!oldNode || oldNode.constructor != nodeType) {
          (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.setAnimated)(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }

        if (oldNode) {
          _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }

    return (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this);
  }

  _onStart() {
    const anim = this.animation;

    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }

  _onChange(value, idle) {
    if (!idle) {
      this._onStart();

      callProp(this.animation.onChange, value, this);
    }

    callProp(this.defaultProps.onChange, value, this);

    super._onChange(value, idle);
  }

  _start() {
    const anim = this.animation;
    (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this).reset((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(anim.to));

    if (!anim.immediate) {
      anim.fromValues = anim.values.map(node => node.lastPosition);
    }

    if (!isAnimating(this)) {
      setActiveBit(this, true);

      if (!isPaused(this)) {
        this._resume();
      }
    }
  }

  _resume() {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
      this.finish();
    } else {
      _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.start(this);
    }
  }

  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(anim.values, node => {
        node.done = true;
      });

      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = undefined;
      }

      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(this, {
        type: 'idle',
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(this._pendingCalls, result);

      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, 'onRest', result, this);
      }
    }
  }

}

function checkFinished(target, to) {
  const goal = computeGoal(to);
  const value = computeGoal(target.get());
  return (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, goal);
}

function createLoopUpdate(props, loop = props.loop, to = props.to) {
  let loopRet = callProp(loop);

  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop,
      default: false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to)) findDefined(to, keys);
  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update = createUpdate(props);

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(update.default)) {
    update.default = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(values, (value, key) => value != null && keys.add(key));
}

const ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}

const BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
let nextId = 1;
class Controller {
  constructor(props, flush) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }

  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every(spring => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }

  set(values) {
    for (const key in values) {
      const value = values[key];

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }

  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }

    return this;
  }

  start(props) {
    let {
      queue
    } = this;

    if (props) {
      queue = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(props).map(createUpdate);
    } else {
      this.queue = [];
    }

    if (this._flush) {
      return this._flush(this, queue);
    }

    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }

  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }

    if (keys) {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each(spring => spring.stop(!!arg));
    }

    return this;
  }

  pause(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].pause());
    }

    return this;
  }

  resume(keys) {
    if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys), key => springs[key].resume());
    }

    return this;
  }

  each(iterator) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(this.springs, iterator);
  }

  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;

    if (active && !this._started || changed && !this._started) {
      this._started = true;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onStart, ([onStart, result]) => {
        result.value = this.get();
        onStart(result, this, this._item);
      });
    }

    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;

    if (changed && onChange.size) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onChange, ([onChange, result]) => {
        result.value = values;
        onChange(result, this, this._item);
      });
    }

    if (idle) {
      this._started = false;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flush)(onRest, ([onRest, result]) => {
        result.value = values;
        onRest(result, this, this._item);
      });
    }
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._changed.add(event.parent);

      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else return;

    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.onFrame(this._onFrame);
  }

}
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(props => flushUpdate(ctrl, props))).then(results => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to,
    from,
    loop,
    onRest,
    onResolve
  } = props;
  const defaults = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(props.default) && props.default;

  if (loop) {
    props.loop = false;
  }

  if (to === false) props.to = null;
  if (from === false) props.from = null;
  const asyncTo = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(to) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(to) ? to : undefined;

  if (asyncTo) {
    props.to = undefined;
    props.onRest = undefined;

    if (defaults) {
      defaults.onRest = undefined;
    }
  } else {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(BATCHED_EVENTS, key => {
      const handler = props[key];

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(handler)) {
        const queue = ctrl['_events'][key];

        props[key] = ({
          finished,
          cancelled
        }) => {
          const result = queue.get(handler);

          if (result) {
            if (!finished) result.finished = false;
            if (cancelled) result.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };

        if (defaults) {
          defaults[key] = props[key];
        }
      }
    });
  }

  const state = ctrl['_state'];

  if (props.pause === !state.paused) {
    state.paused = props.pause;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.flushCalls)(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }

  const promises = (keys || Object.keys(ctrl.springs)).map(key => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
      props,
      state,
      actions: {
        pause: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.noop,
        resume: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.noop,

        start(props, resolve) {
          if (cancel) {
            stopAsync(state, ctrl['_lastAsyncId']);
            resolve(getCancelledResult(ctrl));
          } else {
            props.onRest = onRest;
            resolve(runAsync(asyncTo, props, state, ctrl));
          }
        }

      }
    }));
  }

  if (state.paused) {
    await new Promise(resume => {
      state.resumeQueue.add(resume);
    });
  }

  const result = getCombinedResult(ctrl, await Promise.all(promises));

  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to);

    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }

  if (onResolve) {
    _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }

  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);

  if (props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(props), props => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props.keys)) {
        props = createUpdate(props);
      }

      if (!_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, key => {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.eachProp)(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;

  if (observer) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(props.keys, key => {
      const spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queue, props => {
    prepareSprings(ctrl.springs, props, key => {
      return createSpring(key, ctrl);
    });
  });
}

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

const _excluded$3 = ["children"];
const SpringContext = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  const inherited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ctx);
  const pause = props.pause || !!inherited.pause,
        immediate = props.immediate || !!inherited.immediate;
  props = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useMemoOne)(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Provider, {
    value: props
  }, children);
};
const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, react__WEBPACK_IMPORTED_MODULE_1__.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

const SpringRef = () => {
  const current = [];

  const SpringRef = function SpringRef(props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateDirectCall)();
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = _getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef.delete = function (ctrl) {
    const i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.pause(...arguments));
    return this;
  };

  SpringRef.resume = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.resume(...arguments));
    return this;
  };

  SpringRef.set = function (values) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.set(values));
  };

  SpringRef.start = function (props) {
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => {
      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = this._getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, ctrl => ctrl.stop(...arguments));
    return this;
  };

  SpringRef.update = function (props) {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };

  const _getProps = function _getProps(arg, ctrl, index) {
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

function useSprings(length, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props) && props;
  if (propsFn && !deps) deps = [];
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();
  const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    ctrls: [],
    queue: [],

    flush(ctrl, updates) {
      const springs = getSprings(ctrl, updates);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(key => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(resolve => {
        setSprings(ctrl, springs);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates));
        });
        forceUpdate();
      });
    }

  }), []);
  const ctrls = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(length) || 0;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrls.current.slice(length, prevLength), ctrl => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update = propsFn ? propsFn(i, ctrl) : props[i];

      if (update) {
        updates[i] = declareUpdate(update);
      }
    }
  }

  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpringContext);
  const prevContext = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(context);
  const hasContext = context !== prevContext && hasProps(context);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;

    if (queue.length) {
      state.queue = [];
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(queue, cb => cb());
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          default: context
        });
      }

      const update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => () => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(state.ctrls, ctrl => ctrl.stop(true));
  });
  const values = springs.map(x => _extends({}, x));
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  const isFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

const initSpringRef = () => SpringRef();

const useSpringRef = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initSpringRef)[0];

function useTrail(length, propsArg, deps) {
  var _passedRef;

  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) && propsArg;
  if (propsFn && !deps) deps = [];
  let reverse = true;
  let passedRef = undefined;
  const result = useSprings(length, (i, ctrl) => {
    const props = propsFn ? propsFn(i, ctrl) : propsArg;
    passedRef = props.ref;
    reverse = reverse && props.reverse;
    return props;
  }, deps || [{}]);
  const ref = (_passedRef = passedRef) != null ? _passedRef : result[1];
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ref.current, (ctrl, i) => {
      const parent = ref.current[i + (reverse ? 1 : -1)];

      if (parent) {
        ctrl.start({
          to: parent.springs
        });
      } else {
        ctrl.start();
      }
    });
  }, deps);

  if (propsFn || arguments.length == 3) {
    ref['_getProps'] = (propsArg, ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;

      if (props) {
        const parent = ref.current[i + (props.reverse ? 1 : -1)];
        if (parent) props.to = parent.springs;
        return props;
      }
    };

    return result;
  }

  ref['start'] = propsArg => {
    const results = [];
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(ref.current, (ctrl, i) => {
      const props = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(propsArg) ? propsArg(i, ctrl) : propsArg;
      const parent = ref.current[i + (reverse ? 1 : -1)];

      if (parent) {
        results.push(ctrl.start(_extends({}, props, {
          to: parent.springs
        })));
      } else {
        results.push(ctrl.start(_extends({}, props)));
      }
    });
    return results;
  };

  return result[0];
}

let TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

function useTransition(data, props, deps) {
  const propsFn = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(data);
  const transitions = [];
  const usedTransitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
    usedTransitions.current = transitions;
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useOnce)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, t => {
      ref == null ? void 0 : ref.add(t.ctrl);
      t.ctrl.ref = ref;
    });
    return () => {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(usedTransitions.current, t => {
        if (t.expired) {
          clearTimeout(t.expirationId);
        }

        detachRefs(t.ctrl, ref);
        t.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(prevTransitions, (t, i) => {
    if (t.expired) {
      clearTimeout(t.expirationId);
      expired.push(t);
    } else {
      i = reused[i] = keys.indexOf(t.key);
      if (~i) transitions[i] = t;
    }
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });

  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];

      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }

  if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }

  let delay = -trail;
  const forceUpdate = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useForceUpdate)();
  const defaultProps = getDefaultProps(props);
  const changes = new Map();
  const exitingTransitions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());
  const forceChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);

    if (prevPhase == TransitionPhase.MOUNT) {
      to = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;

      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to = p.update) {
          phase = TransitionPhase.UPDATE;
        } else return;
      } else if (!isLeave) {
        to = p.enter;
        phase = TransitionPhase.ENTER;
      } else return;
    }

    to = callProp(to, t.item, i);
    to = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.obj(to) ? inferTo(to) : {
      to
    };

    if (!to.config) {
      const config = propsConfig || defaultProps.config;
      to.config = callProp(config, t.item, i, phase);
    }

    delay += trail;

    const payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to);

    if (phase == TransitionPhase.ENTER && _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;

      const from = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }

    const {
      onResolve
    } = payload;

    payload.onResolve = result => {
      callProp(onResolve, result);
      const transitions = usedTransitions.current;
      const t = transitions.find(t => t.key === key);
      if (!t) return;

      if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
        return;
      }

      if (t.ctrl.idle) {
        const idle = transitions.every(t => t.ctrl.idle);

        if (t.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t.item);

          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t.expired = true;

            if (!idle && expiryMs > 0) {
              if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }

        if (idle && transitions.some(t => t.expired)) {
          exitingTransitions.current.delete(t);

          if (exitBeforeEnter) {
            forceChange.current = true;
          }

          forceUpdate();
        }
      }
    };

    const springs = getSprings(t.ctrl, payload);

    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpringContext);
  const prevContext = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.usePrev)(context);
  const hasContext = context !== prevContext && hasProps(context);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
    if (hasContext) {
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(transitions, t => {
        t.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex(state => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.useIsomorphicLayoutEffect)(() => {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }

      if (payload) {
        replaceRef(ctrl, payload.ref);

        if ((ctrl.ref || ref) && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);

          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);

  const renderTransitions = render => react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends({}, springs), t.item, t, i);
    return elem && elem.type ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(elem.type, _extends({}, elem.props, {
      key: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.str(t.key) || _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.num(t.key) ? t.key : t.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));

  return ref ? [renderTransitions, ref] : renderTransitions;
}
let nextKey = 1;

function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = new Set();
    return items.map(item => {
      const t = prevTransitions && prevTransitions.find(t => t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t));

      if (t) {
        reused.add(t);
        return t.key;
      }

      return nextKey++;
    });
  }

  return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.und(keys) ? items : _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(keys) ? items.map(keys) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(keys);
}

const _excluded$2 = ["children"];
function Spring(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return children(useSpring(props));
}

const _excluded$1 = ["items", "children"];
function Trail(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  const trails = useTrail(items.length, props);
  return items.map((item, index) => {
    const result = children(item, index);
    return _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.fun(result) ? result(trails[index]) : result;
  });
}

const _excluded = ["items", "children"];
function Transition(_ref) {
  let {
    items,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return useTransition(items, props)(children);
}

class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createInterpolator)(...args);

    const value = this._get();

    const nodeType = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimatedType)(value);
    (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.setAnimated)(this, nodeType.create(value));
  }

  advance(_dt) {
    const value = this._get();

    const oldValue = this.get();

    if (!(0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.isEqual)(value, oldValue)) {
      (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getAnimated)(this).setValue(value);

      this._onChange(value, this.idle);
    }

    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }

  _get() {
    const inputs = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.is.arr(this.source) ? this.source.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue) : (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.getFluidValue)(this.source));
    return this.calc(...inputs);
  }

  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(this), node => {
        node.done = false;
      });

      if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.skipAnimation) {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.start(this);
      }
    }
  }

  _attach() {
    let priority = 1;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source), source => {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.addFluidObserver)(source, this);
      }

      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }

        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;

    this._start();
  }

  _detach() {
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source), source => {
      if ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.hasFluidValue)(source)) {
        (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.removeFluidObserver)(source, this);
      }
    });

    this._active.clear();

    becomeIdle(this);
  }

  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);

        this._start();
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else if (event.type == 'priority') {
      this.priority = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.toArray)(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }

}

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.each)((0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_2__.getPayload)(self), node => {
      node.done = true;
    });
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.callFluidObservers)(self, {
      type: 'idle',
      parent: self
    });
  }
}

const to = (source, ...args) => new Interpolation(source, args);
const interpolate = (source, ...args) => ((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.deprecateInterpolate)(), new Interpolation(source, args));

_react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.Globals.assign({
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
const update = _react_spring_shared__WEBPACK_IMPORTED_MODULE_0__.frameLoop.advance;




/***/ }),

/***/ "./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__raf": function() { return /* binding */ __raf; },
/* harmony export */   "raf": function() { return /* binding */ raf; }
/* harmony export */ });
let updateQueue = makeQueue();
const raf = fn => schedule(fn, updateQueue);
let writeQueue = makeQueue();

raf.write = fn => schedule(fn, writeQueue);

let onStartQueue = makeQueue();

raf.onStart = fn => schedule(fn, onStartQueue);

let onFrameQueue = makeQueue();

raf.onFrame = fn => schedule(fn, onFrameQueue);

let onFinishQueue = makeQueue();

raf.onFinish = fn => schedule(fn, onFinishQueue);

let timeouts = [];

raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;

  let cancel = () => {
    let i = timeouts.findIndex(t => t.cancel == cancel);
    if (~i) timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };

  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};

let findTimeout = time => ~(~timeouts.findIndex(t => t.time > time) || ~timeouts.length);

raf.cancel = fn => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};

raf.sync = fn => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};

raf.throttle = fn => {
  let lastArgs;

  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }

  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }

  throttled.handler = fn;

  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };

  return throttled;
};

let nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};

raf.use = impl => nativeRaf = impl;

raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now;

raf.batchedUpdates = fn => fn();

raf.catch = console.error;
raf.frameLoop = 'always';

raf.advance = () => {
  if (raf.frameLoop !== 'demand') {
    console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand');
  } else {
    update();
  }
};

let ts = -1;
let pendingCount = 0;
let sync = false;

function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}

function start() {
  if (ts < 0) {
    ts = 0;

    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop);
    }
  }
}

function stop() {
  ts = -1;
}

function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}

function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);

  if (count) {
    eachSafely(timeouts.splice(0, count), t => t.handler());
    pendingCount -= count;
  }

  if (!pendingCount) {
    stop();
    return;
  }

  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}

function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },

    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },

    flush(arg) {
      if (current.size) {
        next = new Set();
        pendingCount -= current.size;
        eachSafely(current, fn => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }

  };
}

function eachSafely(values, each) {
  values.forEach(value => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

const __raf = {
  count() {
    return pendingCount;
  },

  isRunning() {
    return ts >= 0;
  },

  clear() {
    ts = -1;
    timeouts = [];
    onStartQueue = makeQueue();
    updateQueue = makeQueue();
    onFrameQueue = makeQueue();
    writeQueue = makeQueue();
    onFinishQueue = makeQueue();
    pendingCount = 0;
  }

};




/***/ }),

/***/ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluidValue": function() { return /* binding */ FluidValue; },
/* harmony export */   "Globals": function() { return /* binding */ globals; },
/* harmony export */   "addFluidObserver": function() { return /* binding */ addFluidObserver; },
/* harmony export */   "callFluidObserver": function() { return /* binding */ callFluidObserver; },
/* harmony export */   "callFluidObservers": function() { return /* binding */ callFluidObservers; },
/* harmony export */   "colorToRgba": function() { return /* binding */ colorToRgba; },
/* harmony export */   "colors": function() { return /* binding */ colors; },
/* harmony export */   "createInterpolator": function() { return /* binding */ createInterpolator; },
/* harmony export */   "createStringInterpolator": function() { return /* binding */ createStringInterpolator; },
/* harmony export */   "defineHidden": function() { return /* binding */ defineHidden; },
/* harmony export */   "deprecateDirectCall": function() { return /* binding */ deprecateDirectCall; },
/* harmony export */   "deprecateInterpolate": function() { return /* binding */ deprecateInterpolate; },
/* harmony export */   "each": function() { return /* binding */ each; },
/* harmony export */   "eachProp": function() { return /* binding */ eachProp; },
/* harmony export */   "flush": function() { return /* binding */ flush; },
/* harmony export */   "flushCalls": function() { return /* binding */ flushCalls; },
/* harmony export */   "frameLoop": function() { return /* binding */ frameLoop; },
/* harmony export */   "getFluidObservers": function() { return /* binding */ getFluidObservers; },
/* harmony export */   "getFluidValue": function() { return /* binding */ getFluidValue; },
/* harmony export */   "hasFluidValue": function() { return /* binding */ hasFluidValue; },
/* harmony export */   "hex3": function() { return /* binding */ hex3; },
/* harmony export */   "hex4": function() { return /* binding */ hex4; },
/* harmony export */   "hex6": function() { return /* binding */ hex6; },
/* harmony export */   "hex8": function() { return /* binding */ hex8; },
/* harmony export */   "hsl": function() { return /* binding */ hsl; },
/* harmony export */   "hsla": function() { return /* binding */ hsla; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "isAnimatedString": function() { return /* binding */ isAnimatedString; },
/* harmony export */   "isEqual": function() { return /* binding */ isEqual; },
/* harmony export */   "isSSR": function() { return /* binding */ isSSR; },
/* harmony export */   "noop": function() { return /* binding */ noop; },
/* harmony export */   "raf": function() { return /* reexport safe */ _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf; },
/* harmony export */   "removeFluidObserver": function() { return /* binding */ removeFluidObserver; },
/* harmony export */   "rgb": function() { return /* binding */ rgb; },
/* harmony export */   "rgba": function() { return /* binding */ rgba; },
/* harmony export */   "setFluidGetter": function() { return /* binding */ setFluidGetter; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "useForceUpdate": function() { return /* binding */ useForceUpdate; },
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; },
/* harmony export */   "useMemoOne": function() { return /* binding */ useMemoOne; },
/* harmony export */   "useOnce": function() { return /* binding */ useOnce; },
/* harmony export */   "usePrev": function() { return /* binding */ usePrev; },
/* harmony export */   "useReducedMotion": function() { return /* binding */ useReducedMotion; }
/* harmony export */ });
/* harmony import */ var _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/rafz */ "./node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function noop() {}
const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});
const is = {
  arr: Array.isArray,
  obj: a => !!a && a.constructor.name === 'Object',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}
const each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }

    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}
const toArray = a => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
const flushCalls = (queue, ...args) => flush(queue, fn => fn(...args));
const isSSR = () => typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop;
const assign = globals => {
  if (globals.to) to = globals.to;
  if (globals.now) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.now = globals.now;
  if (globals.colors !== undefined) colors$1 = globals.colors;
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
  if (globals.requestAnimationFrame) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance) willAdvance = globals.willAdvance;
  if (globals.frameLoop) _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.frameLoop = globals.frameLoop;
};

var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get createStringInterpolator () { return createStringInterpolator$1; },
  get to () { return to; },
  get colors () { return colors$1; },
  get skipAnimation () { return skipAnimation; },
  get willAdvance () { return willAdvance; },
  assign: assign
});

const startQueue = new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },

  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      (0,_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf)(advance);
    }
  },

  advance,

  sort(animation) {
    if (priority) {
      _react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);

      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },

  clear() {
    currentFrame = [];
    startQueue.clear();
  }

};

function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  (0,_react_spring_rafz__WEBPACK_IMPORTED_MODULE_0__.raf)(advance);
}

function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation);
}

function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, other => other.priority > animation.priority), 0, animation);
}

function advance(dt) {
  const nextFrame = prevFrame;

  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;

    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);

      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }

  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}

function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  }

  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

  if (colors$1 && colors$1[color] !== undefined) {
    return colors$1[color];
  }

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
  }

  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }

  if (is.arr(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
};

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

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

const $get = Symbol.for('FluidValue.get');
const $observers = Symbol.for('FluidValue.observers');

const hasFluidValue = arg => Boolean(arg && arg[$get]);

const getFluidValue = arg => arg && arg[$get] ? arg[$get]() : arg;

const getFluidObservers = target => target[$observers] || null;

function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}

function callFluidObservers(target, event) {
  let observers = target[$observers];

  if (observers) {
    observers.forEach(observer => {
      callFluidObserver(observer, event);
    });
  }
}

class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;

    if (!get && !(get = this.get)) {
      throw Error('Unknown getter');
    }

    setFluidGetter(this, get);
  }

}

const setFluidGetter = (target, get) => setHidden(target, $get, get);

function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];

    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }

    if (!observers.has(observer)) {
      observers.add(observer);

      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }

  return observer;
}

function removeFluidObserver(target, observer) {
  let observers = target[$observers];

  if (observers && observers.has(observer)) {
    const count = observers.size - 1;

    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }

    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}

const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i');
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

const variableToRgba = input => {
  const [token, fallback] = parseCSSVariable(input);

  if (!token || isSSR()) {
    return input;
  }

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);

  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith('--')) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);

    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }

  return input;
};

const parseCSSVariable = current => {
  const match = cssVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

let namedColorRegex;

const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;

const createStringInterpolator = config => {
  if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join('|')})(?!\\w)`, 'g') : /^\b$/;
  const output = config.output.map(value => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map(value => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map(values => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }

    return values[i];
  }));
  const interpolators = outputRanges.map(output => createInterpolator(_extends({}, config, {
    output
  })));
  return input => {
    var _output$find;

    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find(value => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ''));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ''}`).replace(rgbaRegex, rgbaRound);
  };
};

const prefix = 'react-spring: ';

const once = fn => {
  const func = fn;
  let called = false;

  if (typeof func != 'function') {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }

  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};

const warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

function isAnimatedString(value) {
  return is.str(value) && (value[0] == '#' || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}

const useIsomorphicLayoutEffect = isSSR() ? react__WEBPACK_IMPORTED_MODULE_1__.useEffect : react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;

const useIsMounted = () => {
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

function useForceUpdate() {
  const update = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update(Math.random());
    }
  };
}

function useMemoOne(getResult, inputs) {
  const [initial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => ({
    inputs,
    result: getResult()
  }));
  const committed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;

  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    committed.current = cache;

    if (prevCache == initial) {
      initial.inputs = initial.result = undefined;
    }
  }, [cache]);
  return cache.result;
}

function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }

  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }

  return true;
}

const useOnce = effect => (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(effect, emptyDeps);
const emptyDeps = [];

function usePrev(value) {
  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion)');

    const handleMediaChange = e => {
      setReducedMotion(e.matches);
      assign({
        skipAnimation: e.matches
      });
    };

    handleMediaChange(mql);
    mql.addEventListener('change', handleMediaChange);
    return () => {
      mql.removeEventListener('change', handleMediaChange);
    };
  }, []);
  return reducedMotion;
};




/***/ }),

/***/ "./node_modules/@react-spring/types/animated.js":
/*!******************************************************!*\
  !*** ./node_modules/@react-spring/types/animated.js ***!
  \******************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/@react-spring/types/interpolation.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-spring/types/interpolation.js ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react-spring/web/dist/react-spring-web.esm.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ animated; },
/* harmony export */   "animated": function() { return /* binding */ animated; }
/* harmony export */ });
/* harmony import */ var _react_spring_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-spring/core */ "./node_modules/@react-spring/core/dist/react-spring-core.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _react_spring_core__WEBPACK_IMPORTED_MODULE_0__) if(["default","a","animated"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _react_spring_core__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/shared */ "./node_modules/@react-spring/shared/dist/react-spring-shared.esm.js");
/* harmony import */ var _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/animated */ "./node_modules/@react-spring/animated/dist/react-spring-animated.esm.js");






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

const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
const isCustomPropRE = /^--/;

function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
  return ('' + value).trim();
}

const attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

  const _ref = props,
        {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref,
        attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(name => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase())));

  if (children !== void 0) {
    instance.textContent = children;
  }

  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);

      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }

  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });

  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }

  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;

const addUnit = (value, unit) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.num(value) && value !== 0 ? value + unit : value;

const isValueIdentity = (value, id) => _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.arr(value) ? value.every(v => isValueIdentity(v, id)) : _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.num(value) ? value === id : parseFloat(value) === id;

class AnimatedStyle extends _react_spring_animated__WEBPACK_IMPORTED_MODULE_3__.AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref,
        style = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    const inputs = [];
    const transforms = [];

    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push(xyz => [`translate3d(${xyz.map(v => addUnit(v, 'px')).join(',')})`, isValueIdentity(xyz, 0)]);
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.eachProp)(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || '']);
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.und(value)) return;
        const unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
        inputs.push((0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.toArray)(value));
        transforms.push(key === 'rotate3d' ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : input => [`${key}(${input.map(v => addUnit(v, unit)).join(',')})`, isValueIdentity(input, key.startsWith('scale') ? 1 : 0)]);
      }
    });

    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }

    super(style);
  }

}

class FluidTransform extends _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }

  get() {
    return this._value || (this._value = this._get());
  }

  _get() {
    let transform = '';
    let identity = true;
    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, (input, i) => {
      const arg1 = (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.getFluidValue)(input[0]);
      const [t, id] = this.transforms[i](_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.is.arr(arg1) ? arg1 : input.map(_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.getFluidValue));
      transform += ' ' + t;
      identity = identity && id;
    });
    return identity ? 'none' : transform;
  }

  observerAdded(count) {
    if (count == 1) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, input => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(input, value => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.hasFluidValue)(value) && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.addFluidObserver)(value, this)));
  }

  observerRemoved(count) {
    if (count == 0) (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(this.inputs, input => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.each)(input, value => (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.hasFluidValue)(value) && (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.removeFluidObserver)(value, this)));
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null;
    }

    (0,_react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.callFluidObservers)(this, event);
  }

}

const primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

const _excluded = ["scrollTop", "scrollLeft"];
_react_spring_core__WEBPACK_IMPORTED_MODULE_0__.Globals.assign({
  batchedUpdates: react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates,
  createStringInterpolator: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.createStringInterpolator,
  colors: _react_spring_shared__WEBPACK_IMPORTED_MODULE_2__.colors
});
const host = (0,_react_spring_animated__WEBPACK_IMPORTED_MODULE_3__.createHost)(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: _ref => {
    let props = _objectWithoutPropertiesLoose(_ref, _excluded);

    return props;
  }
});
const animated = host.animated;




/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/icon/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/color.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/color.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const color = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (color);
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/create.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const create = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 11.2h-3.2V8h-1.6v3.2H8v1.6h3.2V16h1.6v-3.2H16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (create);
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/typography.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/typography.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (typography);
//# sourceMappingURL=typography.js.map

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

/***/ "../components/premium-fonts.js":
/*!**************************************!*\
  !*** ../components/premium-fonts.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (fonts);

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

/***/ "../components/premium-typo.js":
/*!*************************************!*\
  !*** ../components/premium-typo.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumTypo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-fonts */ "../components/premium-fonts.js");
/* harmony import */ var _RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeControl/responsive-range-control */ "../components/RangeControl/responsive-range-control.js");
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "../components/RangeControl/single-range-control.js");
/* harmony import */ var _typography_fontList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/fontList */ "../components/typography/fontList.js");





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
      onChange,
      title
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
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Arial",
      label: "Arial",
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Helvetica",
      label: "Helvetica",
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Times New Roman",
      label: "Times New Roman",
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      google: false
    }, {
      value: "Georgia",
      label: "Georgia",
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    }, title && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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

/***/ "../components/typography/fontList.js":
/*!********************************************!*\
  !*** ../components/typography/fontList.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "../../node_modules/webfontloader/webfontloader.js");
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

/* harmony default export */ __webpack_exports__["default"] = (FontsList);

/***/ }),

/***/ "../components/typography/fontLoader.js":
/*!**********************************************!*\
  !*** ../components/typography/fontLoader.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webfontloader */ "../../node_modules/webfontloader/webfontloader.js");
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
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ }),

/***/ "./src/components/color-palettes/AddPaletteContainer.js":
/*!**************************************************************!*\
  !*** ./src/components/color-palettes/AddPaletteContainer.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddPaletteContainer; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const {
  __
} = wp.i18n;
function AddPaletteContainer(_ref) {
  let {
    value,
    handleCloseModal,
    wrapperProps = {},
    handleAddPalette
  } = _ref;
  const [data, setPaletteData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    name: "",
    type: "light"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_react_spring_web__WEBPACK_IMPORTED_MODULE_3__.animated.div, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "premium-option-modal  premium-add-palettes-modal"
  }, wrapperProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-add-palette-container`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: `button-close-modal`,
    onClick: e => {
      e.preventDefault();
      handleCloseModal();
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-palette-info`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-palette-name`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: `premium-palette-type-label`
  }, __("palette name", "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: "text",
    className: `premium-add-palette-title`,
    placeholder: __("name your palette", "kemet"),
    onChange: e => setPaletteData({ ...data,
      name: e.target.value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-Palette-type-container`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: `premium-palette-type-label`
  }, __("palette type", "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-Palette-type-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: "radio",
    checked: data.type === "light" ? true : false,
    name: "type",
    onChange: () => setPaletteData({ ...data,
      type: "light"
    })
  }), __('Light', "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: "radio",
    checked: data.type === "dark" ? true : false,
    name: "type",
    onChange: () => setPaletteData({ ...data,
      type: "dark"
    })
  }), __('Dark', "kemet")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: " premium-save-palette",
    disabled: data.name === "",
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      handleAddPalette(data);
    }
  }, __('Save Palette', "kemet")))));
}

/***/ }),

/***/ "./src/components/color-palettes/ColorPalettesModal.js":
/*!*************************************************************!*\
  !*** ./src/components/color-palettes/ColorPalettesModal.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PalettePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PalettePreview */ "./src/components/color-palettes/PalettePreview.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


const {
  __,
  sprintf
} = wp.i18n;






const ColorPalettesModal = _ref => {
  let {
    value,
    onChange,
    titles,
    wrapperProps = {},
    handleDeletePalette
  } = _ref;
  const [typeOfPalette, setTypeOfPalette] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("light");
  const pbgPaletteColors = value.filter(pallet => pallet.skin === typeOfPalette && pallet.type === "system");
  const customPaletteColors = value.filter(pallet => {
    return pallet.skin === typeOfPalette && pallet.type === "custom";
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "premium-option-modal premium-palettes-modal"
  }, wrapperProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-type-control`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      active: typeOfPalette === "light"
    }),
    onClick: () => {
      setTypeOfPalette("light");
    }
  }, "Light"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      active: typeOfPalette === "dark"
    }),
    onClick: () => {
      setTypeOfPalette("dark");
    }
  }, " Dark")), customPaletteColors.length > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium_label_type__palette`
  }, __(`my palettes`)), customPaletteColors.map((palette, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_PalettePreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentPalette: palette,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(`premium-custom-palette__container`, {
      'premium-active': value.current_palette === palette.id
    }),
    renderBefore: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, palette.name ? palette.name : sprintf(__('Palette #%s', 'kemet'), index + 1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: `premium-delete-palette`,
      onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        handleDeletePalette(palette.id);
      }
    })),
    onClick: () => {
      const {
        id,
        ...colors
      } = palette;
      onChange({ ...value,
        current_palette: id,
        ...colors
      });
    },
    skipModal: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium_label_type__palette`
  }, __(`Default palettes`, "kemet")), pbgPaletteColors.map((palette, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_PalettePreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: palette.colors.map(color => {
      return {
        name: titles[index],
        slug: color.id,
        color: color.color,
        default: true,
        skipModal: true
      };
    }),
    className: palette.active ? 'premium-active' : '',
    renderBefore: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, palette.name ? palette.name : sprintf(__('Palette #%s', 'kemet'), index + 1)),
    onClick: () => {
      const {
        id,
        ...colors
      } = palette;
      onChange({ ...value,
        current_palette: id,
        ...colors
      });
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPalettesModal);

/***/ }),

/***/ "./src/components/color-palettes/PalettePreview.js":
/*!*********************************************************!*\
  !*** ./src/components/color-palettes/PalettePreview.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color */ "./src/components/color.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/create.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");

const {
  __
} = wp.i18n;






const PalettePreview = _ref => {
  let {
    renderBefore = () => null,
    pallet,
    onChange,
    onClick,
    className,
    addNewColor,
    handleClickReset,
    onRemove,
    onChangeName
  } = _ref;

  const handleChangeColor = (color, optionId) => {
    let newColor;

    if (typeof color === "string") {
      newColor = color;
    } else if (undefined !== color.rgb && undefined !== color.rgb.a && 1 !== color.rgb.a) {
      newColor = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
    } else {
      newColor = color.hex;
    }

    onChange(newColor, optionId);
  };

  const addColor = () => {
    const lastColorIndex = pallet.custom_colors.length;
    const colorId = `custom-color${lastColorIndex + 1}`;
    const colorTitle = `${__('Custom Color ')}${lastColorIndex + 1}`;
    addNewColor({
      name: colorTitle,
      color: '',
      slug: colorId
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].rebuild();
  }, [pallet]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("premium-single-palette", className),
    onClick: e => {
      if (e.target.closest(".premium-global-color-picker-modal") || e.target.classList.contains("premium-global-color-picker-modal")) {
        return;
      }

      onClick();
    }
  }, renderBefore(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-color-palette-container`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    place: "top",
    effect: "solid"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-pallet-colors"
  }, pallet.colors.map(picker => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color__WEBPACK_IMPORTED_MODULE_2__["default"], {
    picker: picker,
    onChangeComplete: (color, id) => handleChangeColor(color, picker[`slug`]),
    className: "premium-color-palette-modal",
    skipModal: picker.skipModal,
    resetPalette: true,
    onColorReset: color => handleClickReset(picker[`slug`]),
    isDefault: picker.default,
    onRemove: () => onRemove(picker[`slug`]),
    onChangeName: v => onChangeName(v, picker[`slug`])
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('Custom Color')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-custom-colors"
  }, pallet.custom_colors.map(picker => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color__WEBPACK_IMPORTED_MODULE_2__["default"], {
    picker: picker,
    onChangeComplete: (color, id) => handleChangeColor(color, picker[`slug`]),
    className: "premium-color-palette-modal",
    skipModal: picker.skipModal,
    resetPalette: true,
    onColorReset: color => handleClickReset(picker[`slug`]),
    isDefault: picker.default,
    onRemove: () => onRemove(picker[`slug`]),
    onChangeName: v => onChangeName(v, picker[`slug`])
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-add-new-color",
    onClick: () => addColor(),
    "data-tip": __('Add Color')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PalettePreview);

/***/ }),

/***/ "./src/components/color-pallet.js":
/*!****************************************!*\
  !*** ./src/components/color-pallet.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _color_palettes_PalettePreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-palettes/PalettePreview */ "./src/components/color-palettes/PalettePreview.js");
/* harmony import */ var _color_palettes_AddPaletteContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-palettes/AddPaletteContainer */ "./src/components/color-palettes/AddPaletteContainer.js");
/* harmony import */ var _color_palettes_ColorPalettesModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-palettes/ColorPalettesModal */ "./src/components/color-palettes/ColorPalettesModal.js");
/* harmony import */ var _common_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/popover-component */ "./src/components/common/popover-component.js");
/* harmony import */ var _common_outside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/outside-component */ "./src/components/common/outside-component.js");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bezier-easing */ "../../node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);









const {
  __,
  sprintf
} = wp.i18n;



const ColorPalettes = _ref => {
  var _activePallet, _activePallet2;

  let {
    value,
    onChange,
    label
  } = _ref;
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  const colorPalettesWrapper = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [{
    isOpen,
    isTransitioning
  }, setModalState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    isOpen: false,
    isTransitioning: false
  });
  const [currentView, setCurrentView] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [openModal, setOpenModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [delPalette, setDelPalette] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    styles,
    popoverProps
  } = (0,_common_popover_component__WEBPACK_IMPORTED_MODULE_4__["default"])({
    ref: currentView === "add" ? buttonRef : colorPalettesWrapper,
    defaultHeight: 430,
    shouldCalculate: isTransitioning || isOpen
  });
  const titles = [__(`Buttons background color \n& Links hover color`, "kemet"), __("Headings & Links color", "kemet"), __("Body text & Meta color", "kemet"), __("Borders color", "kemet"), __("Body background, a tint for Input fields,\nPage titles, Widgets background", "kemet"), __("Footer text color", "kemet"), __("Footer background color", "kemet")];
  let activePallet = state.find(pallet => pallet.active);
  const activePalleColors = (_activePallet = activePallet) === null || _activePallet === void 0 ? void 0 : _activePallet.colors.map((color, index) => {
    return {
      name: titles[index],
      slug: color.slug,
      color: color.color,
      default: true
    };
  });
  activePallet = { ...activePallet,
    colors: activePalleColors
  };
  const activePalleCustomColors = activePallet.custom_colors.length ? (_activePallet2 = activePallet) === null || _activePallet2 === void 0 ? void 0 : _activePallet2.custom_colors : [];

  const onChangePallet = newPallet => {
    newPallet = { ...newPallet,
      colors: clearColors(newPallet.colors)
    };
    const newPallets = [...state].map(pallet => pallet.id === newPallet.id ? newPallet : pallet);
    setState(newPallets);
    onChange(newPallets);
  };

  const handleChangePalette = active => {// let currentPalette = active.palettes.find(
    //     ({ id }) => id === active.current_palette
    // );
    // let { id, skin, type, name, ...colors } = { ...currentPalette };
    // Object.values(colors).map((item, index) => {
    //     document.documentElement.style.setProperty(
    //         `--paletteColor${index + 1}`,
    //         item
    //     );
    //     return item;
    // });
    // setState(active);
    // onChange({ ...active, flag: !value.flag });
  };

  const handleAddNewColor = colorData => {
    let newCustomColors = [...activePalleCustomColors];
    newCustomColors.push(colorData);
    let newColorPallet = { ...activePallet,
      custom_colors: newCustomColors
    };
    onChangePallet(newColorPallet);
  };

  const handleChangeComplete = (color, index) => {
    let newPalletColors = index.includes('custom') ? [...activePalleCustomColors] : [...activePalleColors];
    newPalletColors = newPalletColors.map(colorObj => colorObj.slug === index ? { ...colorObj,
      color: color
    } : colorObj);
    const changedColors = index.includes('custom') ? 'custom_colors' : 'colors';
    const newColorPallet = { ...activePallet,
      [changedColors]: newPalletColors
    };
    onChangePallet(newColorPallet);
  };

  const clearColors = colors => {
    return colors.map((color, index) => {
      return {
        slug: color.slug,
        color: color.color
      };
    });
  };

  const handleAddPalette = data => {// let { current_palette, palettes, ...colors } = { ...state };
    // let newPalette = {
    //     id: palettes.length + 1,
    //     ...colors,
    //     type: "custom",
    //     skin: data.type,
    //     name: data.name,
    // };
    // palettes.unshift(newPalette);
    // onChange({
    //     ...value,
    //     flag: !value.flag,
    // });
    // setModalState(() => ({
    //     isOpen: null,
    //     isTransitioning: false,
    // }))
  };

  const handleDeletePalette = id => {// setOpenModal(true)
    // const deletePalette = value.palettes.filter((palette) => {
    //     return palette.id === id;
    // });
    // setDelPalette({ ...deletePalette })
  };

  const ConfirmDelete = () => {// let newPalette = value.palettes.filter((palette) => {
    //     return palette.id !== delPalette[0].id;
    // });
    // setState({ ...value, palettes: newPalette });
    // onChange({ ...value, palettes: newPalette });
    // setOpenModal(false)
  };

  const handleResetColor = id => {// let updateState = {
    //     ...state,
    // };
    // let currentPalette = updateState.palettes.find(
    //     ({ id }) => id === updateState.current_palette
    // );
    // let resetColor = currentPalette[id];
    // handleChangeComplete(resetColor, id);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, label), label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: 'https://kemet.io/docs/global-colors/',
    target: "_blank"
  }, " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_outside_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: !isOpen,
    useCapture: false,
    className: "premium-palettes-outside",
    additionalRefs: [popoverProps.ref],
    onOutsideClick: e => {
      if (e.target.closest(".premium-global-color-picker-modal") || e.target.classList.contains("premium-global-color-picker-modal") || e.target.closest(".premium-option-modal")) {
        return;
      }

      setModalState(() => ({
        isOpen: null,
        isTransitioning: null
      }));
      setCurrentView(" ");
    },
    wrapperProps: {
      ref: colorPalettesWrapper
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-palettes-preview`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palettes_PalettePreview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: () => {
      setModalState(() => ({
        isOpen: null,
        isTransitioning: null
      }));
    },
    pallet: activePallet,
    onChange: (v, id) => handleChangeComplete(v, id),
    handleClickReset: val => {
      handleResetColor(val);
    },
    addNewColor: handleAddNewColor
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-palette-toggle-modal`,
    onClick: e => {
      e.preventDefault();
      setModalState(() => ({
        isOpen: !isOpen,
        isTransitioning: null
      }));
      setCurrentView("modal");
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, __(`Select Another Palette`, "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(`premium-button-open-palette`, {
      active: currentView === "modal"
    })
  }))), isOpen && currentView === "modal" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_palettes_ColorPalettesModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    wrapperProps: {
      style: { ...styles
      }
    },
    onChange: val => {
      setModalState(() => ({
        isOpen: false,
        isTransitioning: null
      }));
      handleChangePalette(val);
      setCurrentView("");
    },
    value: state,
    option: state,
    handleDeletePalette: id => handleDeletePalette(id),
    titles: titles
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPalettes);

/***/ }),

/***/ "./src/components/color-picker/picker-modal.js":
/*!*****************************************************!*\
  !*** ./src/components/color-picker/picker-modal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const {
  __
} = wp.i18n;

const PickerModal = _ref => {
  let {
    el,
    picker,
    onChange,
    style,
    wrapperProps = {},
    inline_modal,
    appendToBody,
    className,
    resetPalette,
    onColorReset,
    onChangeName
  } = _ref;
  const getValueForPicker = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if ((picker.color || "").indexOf("var") > -1) {
      return {
        key: "var" + picker.color,
        color: getComputedStyle(document.documentElement).getPropertyValue(picker.color.replace(/var\(/, "").replace(/\)/, "")).trim().replace(/\s/g, "")
      };
    }

    return {
      key: "color",
      color: picker.color
    };
  }, [picker]);
  const [refresh, setRefresh] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onChange;
  }, [picker]);

  const handleColorReset = () => {
    if (refresh === true) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }

    onColorReset();
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tabIndex: "0",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(`premium-global-color-picker-modal`, {
      "premium-option-modal": !inline_modal && appendToBody
    }, className),
    style: { ...(style ? style : {})
    }
  }, wrapperProps), refresh && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: getValueForPicker.color,
    onChangeComplete: color => onChange(color)
  }), picker.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "premium-color-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, __('Name'), ":"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: 'text',
    value: picker.name,
    onChange: e => onChangeName(e.target.value)
  })), resetPalette && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-reset-palette__Wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    onClick: () => {
      handleColorReset();
    },
    className: " premium-btn-reset__color is-secondary is-small"
  }, __("Reset", "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: `premium-reset__description`
  }, __(`This will reset the current color to the default one.`, "kemet")))), !refresh && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: getValueForPicker.color,
    onChangeComplete: color => onChange(color)
  }), picker.name && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "premium-color-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", null, __('Name'), ":"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: 'text',
    value: picker.name,
    onChange: e => onChangeName(e.target.value)
  })), resetPalette && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `premium-reset-palette__Wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    onClick: () => {
      handleColorReset();
    },
    className: " premium-btn-reset__color is-secondary is-small"
  }, __("Reset", "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: `premium-reset__description`
  }, __(`This will reset the current color to the default one.`, "kemet"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PickerModal);

/***/ }),

/***/ "./src/components/color-picker/single-picker.js":
/*!******************************************************!*\
  !*** ./src/components/color-picker/single-picker.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _picker_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picker-modal */ "./src/components/color-picker/picker-modal.js");
/* harmony import */ var react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring/renderprops */ "../../node_modules/react-spring/renderprops.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bezier-easing */ "../../node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/popover-component */ "./src/components/common/popover-component.js");







const {
  __
} = wp.i18n;

const SinglePicker = _ref => {
  let {
    onChange,
    picker,
    onPickingChange,
    stopTransitioning,
    innerRef,
    containerRef,
    modalRef,
    isTransitioning,
    isPicking,
    className,
    skipModal,
    resetPalette,
    onColorReset,
    onChangeName
  } = _ref;
  const el = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const appendToBody = true;
  const {
    refreshPopover,
    styles,
    popoverProps
  } = (0,_common_popover_component__WEBPACK_IMPORTED_MODULE_4__["default"])({
    contentRef: modalRef,
    ref: containerRef || {},
    defaultHeight: 379,
    shouldCalculate: appendToBody
  });
  let modal = null;

  if (!skipModal && (isTransitioning === picker.slug || (isPicking || '').split(':')[0] === picker.slug)) {
    modal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_spring_renderprops__WEBPACK_IMPORTED_MODULE_5__.Transition, {
      items: isPicking,
      onRest: () => stopTransitioning(),
      config: {
        duration: 100,
        easing: bezier_easing__WEBPACK_IMPORTED_MODULE_2___default()(0.25, 0.1, 0.25, 1.0)
      },
      from: (isPicking || '').indexOf(':') === -1 ? {
        transform: 'scale3d(0.95, 0.95, 1)',
        opacity: 0
      } : {
        opacity: 1
      },
      enter: (isPicking || '').indexOf(':') === -1 ? {
        transform: 'scale3d(1, 1, 1)',
        opacity: 1
      } : {
        opacity: 1
      },
      leave: (isPicking || '').indexOf(':') === -1 ? {
        transform: 'scale3d(0.95, 0.95, 1)',
        opacity: 0
      } : {
        opacity: 1
      }
    }, isPicking => (isPicking || '').split(':')[0] === picker.slug && (props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_picker_modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: { ...props,
        ...(appendToBody ? styles : {})
      },
      onChange: color => onChange(color),
      picker: picker,
      el: el,
      wrapperProps: appendToBody ? popoverProps : {
        ref: modalRef
      },
      appendToBody: appendToBody,
      className: className,
      resetPalette: resetPalette,
      onColorReset: color => onColorReset(color),
      onChangeName: name => onChangeName(name)
    }))), appendToBody ? document.body : el.current.closest('section').parentNode);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: instance => {
      el.current = instance;

      if (innerRef) {
        innerRef.current = instance;
      }
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('premium-global-color-picker-single', {})
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    tabIndex: "0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    tabIndex: "0",
    onClick: e => {
      e.stopPropagation();
      refreshPopover();
      let futureIsPicking = isPicking ? isPicking.split(':')[0] === picker.slug ? null : `${picker.slug}:${isPicking.split(':')[0]}` : picker.slug;
      onPickingChange(futureIsPicking);
    },
    style: {
      background: `${picker.color} none repeat scroll 0% 0%`
    },
    "data-tip": picker.name
  })), modal);
};

/* harmony default export */ __webpack_exports__["default"] = (SinglePicker);

/***/ }),

/***/ "./src/components/color.js":
/*!*********************************!*\
  !*** ./src/components/color.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _color_picker_single_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-picker/single-picker */ "./src/components/color-picker/single-picker.js");
/* harmony import */ var _common_outside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/outside-component */ "./src/components/common/outside-component.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");






const ColorComponent = _ref => {
  let {
    picker,
    onChangeComplete,
    className,
    skipModal,
    resetPalette,
    onColorReset,
    isDefault,
    onRemove,
    onChangeName
  } = _ref;
  const [{
    isPicking,
    isTransitioning
  }, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    isPicking: null,
    isTransitioning: null
  });
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const modalRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_common_outside_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    useCapture: false,
    display: "inline-block",
    disabled: !isPicking,
    wrapperProps: {
      ref: containerRef
    },
    className: `premium-color-Wrapper`,
    additionalRefs: [modalRef],
    onOutsideClick: () => {
      setState(_ref2 => {
        let {
          isPicking
        } = _ref2;
        return {
          isPicking: null,
          isTransitioning: isPicking
        };
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color_picker_single_picker__WEBPACK_IMPORTED_MODULE_1__["default"], {
    containerRef: containerRef,
    picker: picker,
    key: picker.slug,
    isPicking: isPicking,
    modalRef: modalRef,
    isTransitioning: isTransitioning,
    onPickingChange: isPicking => setState({
      isTransitioning: picker.slug,
      isPicking
    }),
    stopTransitioning: () => setState(state => ({ ...state,
      isTransitioning: false
    })),
    onChange: color => onChangeComplete(color),
    className: className,
    skipModal: skipModal,
    resetPalette: resetPalette,
    onColorReset: color => onColorReset(color),
    onChangeName: name => onChangeName(name)
  }), !isDefault && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "premium-remove-color",
    onClick: () => onRemove(picker.slug)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorComponent);

/***/ }),

/***/ "./src/components/common/outside-component.js":
/*!****************************************************!*\
  !*** ./src/components/common/outside-component.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OutsideComponent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE_BLOCK: 'inline-block'
};
const defaultProps = {
  disabled: false,
  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

const updateRef = (ref, instance) => {
  if (typeof ref === 'function') {
    ref(instance);
  } else {
    ref.current = instance;
  }
};

class OutsideComponent extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super(...arguments);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "childNode", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createRef)());

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "checkIsInside", event => {
      const result = [this.childNode, ...(this.props.additionalRefs || [])].reduce((isInside, currentRef) => {
        if (isInside) {
          return isInside;
        }

        if (!currentRef || !currentRef.current) {
          return isInside;
        }

        return currentRef.current.contains(event.target);
      }, false);
      return result;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onMouseDown", e => {
      const {
        useCapture
      } = this.props;

      if (!this.checkIsInside(e)) {
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        document.addEventListener('mouseup', this.onMouseUp, useCapture);

        this.removeMouseUp = () => {
          document.removeEventListener('mouseup', this.onMouseUp, useCapture);
        };
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onMouseUp", e => {
      const {
        onOutsideClick
      } = this.props;

      if (this.removeMouseUp) {
        this.removeMouseUp();
        this.removeMouseUp = null;
      }

      if (!this.checkIsInside(e)) {
        onOutsideClick(e);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "setChildNodeRef", ref => {
      if (this.props.wrapperProps && this.props.wrapperProps.ref) {
        updateRef(this.props.wrapperProps.ref, ref);
      }

      updateRef(this.childNode, ref);
    });
  }

  componentDidMount() {
    const {
      disabled,
      useCapture
    } = this.props;
    if (!disabled) this.addMouseDownEventListener(useCapture);
  }

  UNSAFE_componentWillReceiveProps(_ref) {
    let {
      disabled,
      useCapture
    } = _ref;
    const {
      disabled: prevDisabled
    } = this.props;

    if (prevDisabled !== disabled) {
      if (disabled) {
        this.removeEventListeners();
      } else {
        this.addMouseDownEventListener(useCapture);
      }
    }
  }

  componentWillUnmount() {
    this.removeEventListeners();
  } // Use mousedown/mouseup to enforce that clicks remain outside the root's
  // descendant tree, even when dragged. This should also get triggered on
  // touch devices.


  addMouseDownEventListener(useCapture) {
    document.addEventListener('mousedown', this.onMouseDown, useCapture);

    this.removeMouseDown = () => {
      document.removeEventListener('mousedown', this.onMouseDown, useCapture);
    };
  }

  removeEventListeners() {
    if (this.removeMouseDown) this.removeMouseDown();
    if (this.removeMouseUp) this.removeMouseUp();
  }

  render() {
    const {
      children,
      display,
      className,
      wrapperProps
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)
    }, wrapperProps || {}, {
      ref: this.setChildNodeRef
    }), children);
  }

}
OutsideComponent.defaultProps = defaultProps;

/***/ }),

/***/ "./src/components/common/popover-component.js":
/*!****************************************************!*\
  !*** ./src/components/common/popover-component.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nullifyTransforms": function() { return /* binding */ nullifyTransforms; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function nullifyTransforms(el) {
  const parseTransform = el => window.getComputedStyle(el).transform.split(/\(|,|\)/).slice(1, -1).map(v => parseFloat(v)); // 1


  let {
    top,
    left,
    width,
    height
  } = el.getBoundingClientRect();
  let transformArr = parseTransform(el);

  if (transformArr.length == 6) {
    // 2D matrix
    const t = transformArr; // 2

    let det = t[0] * t[3] - t[1] * t[2]; // 3

    return {
      width: width / t[0],
      height: height / t[3],
      left: (left * t[3] - top * t[2] + t[2] * t[5] - t[4] * t[3]) / det,
      top: (-left * t[1] + top * t[0] + t[4] * t[1] - t[0] * t[5]) / det
    };
  } else {
    // This case is not handled because it's very rarely needed anyway.
    // We just return the tranformed metrics, as they are, for consistency.
    return {
      top,
      left,
      width,
      height
    };
  }
}

const usePopoverMaker = function () {
  let {
    contentRef: contentRefProp,
    shouldCalculate = true,
    ref,
    defaultHeight = 0
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const contentRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [s, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const refresh = () => {
    if (!shouldCalculate) {
      return;
    }

    setState(Math.random());
  };

  const refreshOnScroll = e => {
    let modalRef = contentRefProp || contentRef;

    if (modalRef && modalRef.current && !modalRef.current.contains(e.target)) {
      refresh();
    }
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      refresh();
    }, 500);
    window.addEventListener('resize', refresh);
    window.addEventListener('scroll', refreshOnScroll, true);
    let observer;

    if (ref.current) {
      observer = new window.ResizeObserver(refresh);
      observer.observe(ref.current, {
        attributes: true
      });

      if (ref.current.closest('.premium-tabs-scroll')) {
        observer.observe(ref.current.closest('.premium-tabs-scroll'), {
          attributes: true
        });
      }

      if (ref.current.closest('.customize-pane-child')) {
        observer.observe(ref.current.closest('.customize-pane-child'), {
          attributes: true
        });
      }
    }

    if (contentRefProp ? contentRefProp.current : contentRef.current) {
      if (!observer) {
        observer = new window.ResizeObserver(refresh);
      }

      observer.observe(contentRefProp ? contentRefProp.current : contentRef.current, {
        attributes: true
      });
    }

    return () => {
      window.removeEventListener('resize', refresh);
      window.removeEventListener('scroll', refreshOnScroll, true);

      if (observer) {
        observer.disconnect();
      }
    };
  }, [shouldCalculate, contentRef.current, contentRefProp, ref.current]);
  let {
    right,
    yOffset,
    position,
    otherStyles,
    modalWidth
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let right = 0;
    let yOffset = 0;
    let position = 'bottom';
    let otherStyles = {};
    let selector = document.querySelector(".components-panel");
    let modalWidth;

    if (selector) {
      modalWidth = selector.clientWidth;
    }

    if (!shouldCalculate) {
      return {
        yOffset,
        right,
        position
      };
    }

    if (ref.current) {
      let rect = ref.current.getBoundingClientRect();
      let el = ref.current.closest('.premium-select-input') ? ref.current.closest('.premium-select-input') : ref.current;
      let maybeWidthFlag = getComputedStyle(el, ':before').content;
      yOffset = rect.top + rect.height;
      right = window.innerWidth - rect.right - 6;

      if (document.body.classList.contains('rtl')) {
        right = rect.left;
      }

      if (maybeWidthFlag.indexOf('ref-width') > -1) {
        let width = rect.width;

        if (maybeWidthFlag.indexOf('left') > -1 && el.previousElementSibling) {
          if (document.body.classList.contains('rtl')) {
            width = el.previousElementSibling.getBoundingClientRect().right - rect.left;
          } else {
            width = rect.right - el.previousElementSibling.getBoundingClientRect().left;
          }
        }

        if (maybeWidthFlag.indexOf('right') > -1) {
          let nextRect = el.parentNode // el.nextElementSibling || el.parentNode
          .getBoundingClientRect();

          if (document.body.classList.contains('rtl')) {
            right = nextRect.left;
            width = rect.right - nextRect.left;
          } else {
            right = window.innerWidth - nextRect.right;
            width = nextRect.right - rect.left;
          }
        }

        otherStyles['--x-selepremium-dropdown-width'] = `${width}px`;
      }

      let popoverRect = contentRefProp && contentRefProp.current || contentRef.current ? nullifyTransforms(contentRefProp ? contentRefProp.current : contentRef.current) : {
        height: defaultHeight
      };

      if (yOffset + popoverRect.height > window.innerHeight && rect.top - 15 > popoverRect.height) {
        position = 'top';
        yOffset = window.innerHeight - rect.bottom + rect.height;
      }

      if (yOffset + popoverRect.height > window.innerHeight && position === 'bottom') {
        position = 'top';
        yOffset = 0;
      }
    }

    return {
      yOffset,
      right,
      position,
      otherStyles,
      modalWidth
    };
  }, [s, shouldCalculate, ref, ref.current, contentRefProp, contentRef.current, defaultHeight]);
  return {
    refreshPopover: refresh,
    styles: {
      '--modal-y-offset': `${yOffset}px`,
      '--modal-x-offset': `${right}px`,
      '--modalWidth': `${modalWidth > 240 ? modalWidth : 245}px`,
      ...otherStyles
    },
    position,
    popoverProps: {
      ref: contentRefProp || contentRef,
      ...(position ? {
        'data-position': position
      } : {})
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (usePopoverMaker);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-left.js");


/**
 * WordPress dependencies
 */




function ScreenHeader(_ref) {
  let {
    title,
    description
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalVStack, {
    spacing: 0
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalView, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
    marginBottom: 0,
    paddingX: 4,
    paddingY: 3
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHStack, {
    spacing: 2
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNavigatorBackButton, {
    style: // TODO: This style override is also used in ToolsPanelHeader.
    // It should be supported out-of-the-box by Button.
    {
      minWidth: 24,
      padding: 0
    },
    icon: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    isSmall: true,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navigate to the previous view')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalHeading, {
    level: 5
  }, title))))), description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "premium-group-header-description"
  }, description));
}

/* harmony default export */ __webpack_exports__["default"] = (ScreenHeader);

/***/ }),

/***/ "./src/components/navigation-buttons.js":
/*!**********************************************!*\
  !*** ./src/components/navigation-buttons.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationBackButtonAsItem": function() { return /* binding */ NavigationBackButtonAsItem; },
/* harmony export */   "NavigationButtonAsItem": function() { return /* binding */ NavigationButtonAsItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



/**
 * WordPress dependencies
 */

/**
 * External dependencies
 */



function GenericNavigationButton(_ref) {
  let {
    icon,
    children,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalItem, props, icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: icon,
    size: 24,
    className: 'premium-group-item-icon'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, children)), !icon && children);
}

function NavigationButtonAsItem(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: GenericNavigationButton
  }, props));
}

function NavigationBackButtonAsItem(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNavigatorBackButton, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: GenericNavigationButton
  }, props));
}



/***/ }),

/***/ "./src/helpers/defaults.js":
/*!*********************************!*\
  !*** ./src/helpers/defaults.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const defaults = {
  typography: {
    heading1: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 48,
        "Tablet": 48,
        "Mobile": 48,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 27,
        "Tablet": 27,
        "Mobile": 27,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    heading2: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 42,
        "Tablet": 42,
        "Mobile": 42,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 25,
        "Tablet": 25,
        "Mobile": 25,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    heading3: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "none",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 30,
        "Tablet": 30,
        "Mobile": 30,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 23,
        "Tablet": 23,
        "Mobile": 23,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    heading4: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 20,
        "Tablet": 20,
        "Mobile": 20,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 20,
        "Tablet": 20,
        "Mobile": 20,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    heading5: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 17,
        "Tablet": 17,
        "Mobile": 17,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 17,
        "Tablet": 17,
        "Mobile": 17,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    heading6: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 15,
        "Tablet": 15,
        "Mobile": 15,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 15,
        "Tablet": 15,
        "Mobile": 15,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    button: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 15,
        "Tablet": 15,
        "Mobile": 15,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 15,
        "Tablet": 15,
        "Mobile": 15,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    },
    paragraph: {
      "fontWeight": "400",
      "fontStyle": "",
      "textTransform": "",
      "fontFamily": "Default",
      "textDecoration": "",
      "fontSize": {
        "Desktop": 15,
        "Tablet": 15,
        "Mobile": 15,
        "unit": "px"
      },
      "lineHeight": {
        "Desktop": 15,
        "Tablet": 15,
        "Mobile": 15,
        "unit": "px"
      },
      "letterSpacing": {
        "Desktop": 0,
        "Tablet": 0,
        "Mobile": 0,
        "unit": "px"
      }
    }
  },
  colors: [{
    slug: 'color1',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Buttons background color \n& Links hover color`),
    color: '#0085ba',
    default: true,
    type: 'pbg'
  }, {
    slug: 'color2',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Headings & Links color"),
    color: '#333333',
    default: true,
    type: 'pbg'
  }, {
    slug: 'color3',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Body text & Meta color"),
    color: '#444140',
    default: true,
    type: 'pbg'
  }, {
    slug: 'color4',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Borders color"),
    color: '#eaeaea',
    default: true,
    type: 'pbg'
  }, {
    slug: 'color5',
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Body background, a tint for Input fields"),
    color: '#ffffff',
    default: true,
    type: 'pbg'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (defaults);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/settings-store */ "./src/store/settings-store.js");





const {
  __
} = wp.i18n;



const PluginSidebarTest = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
  target: "premium-sidebar"
}, __('Premium Blocks For Gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
  name: "premium-sidebar",
  title: __('Premium Blocks For Gutenberg')
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_store_settings_store__WEBPACK_IMPORTED_MODULE_5__.SettingsProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ui__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('plugin-premium-blocks', {
  render: PluginSidebarTest
});

/***/ }),

/***/ "./src/screens/ColorsScreen.js":
/*!*************************************!*\
  !*** ./src/screens/ColorsScreen.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/settings-store */ "./src/store/settings-store.js");
/* harmony import */ var _helpers_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaults */ "./src/helpers/defaults.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_color_palettes_PalettePreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/color-palettes/PalettePreview */ "./src/components/color-palettes/PalettePreview.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_color_pallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/color-pallet */ "./src/components/color-pallet.js");











const ColorsScreen = props => {
  const {
    colors: defaultColors
  } = _helpers_defaults__WEBPACK_IMPORTED_MODULE_4__["default"];
  const {
    globalColors: defaultGlobalColors,
    setGlobalColors,
    colorPallet,
    setColorPallet,
    colorPallets,
    setColorPallets
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_settings_store__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const globalColors = defaultGlobalColors.length ? defaultGlobalColors : defaultColors;

  const _colors = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select('core/block-editor').getSettings().colors) || [];

  const themeCustomColors = colorPallets.length ? colorPallets.find(pallet => pallet.id === 'theme') : [];

  const themeColors = _colors.map(color => {
    return {
      name: color.name,
      color: color.color,
      slug: color.slug,
      skipModal: true,
      default: true,
      type: 'theme'
    };
  });

  const handleRemove = id => {
    let newValue = [...globalColors];
    newValue = newValue.filter(color => color.slug !== id);
    setGlobalColors(newValue);
  };

  const handleToggleChange = () => {
    setColorPallet(colorPallet === 'theme' ? 'pbg' : 'theme');
  };

  const handleChange = (value, id) => {
    let newValue = [...globalColors].map(color => color.slug === id ? { ...color,
      color: value
    } : color);
    setGlobalColors(newValue);
  };

  const handleAddThemeNewColor = colorData => {
    let newThemePallet = [...themeCustomColors];
    newThemePallet.custom_colors.push(colorData);
    const newPallets = [...state].map(pallet => pallet.id === 'theme' ? newThemePallet : pallet);
    setColorPallets(newPallets);
  };

  const handleChangeName = (name, id) => {
    let newValue = [...globalColors].map(color => color.slug === id ? { ...color,
      name: name
    } : color);
    setGlobalColors(newValue);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage palettes and the default color of different global elements on the site.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-global-colors-type"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Theme')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.ToggleControl, {
    checked: colorPallet !== 'theme',
    onChange: handleToggleChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Premium Block'))), colorPallet === 'theme' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-palettes-preview`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_color_palettes_PalettePreview__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => {},
    pallet: {
      colors: themeColors,
      custom_colors: themeCustomColors.custom_colors
    },
    onChange: (v, id) => handleChange(v, id),
    skipModal: false,
    handleClickReset: val => console.log(val),
    addNewColor: handleAddNewColor,
    onRemove: handleRemove,
    onChangeName: (v, id) => handleChangeName(v, id)
  })), colorPallet === 'pbg' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_color_pallet__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: colorPallets,
    onChange: setColorPallets
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorsScreen);

/***/ }),

/***/ "./src/screens/ContainerSettingsScreen.js":
/*!************************************************!*\
  !*** ./src/screens/ContainerSettingsScreen.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");




const ContainerSettingsScreen = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container Settings'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage container default width and devices breakpoints.')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContainerSettingsScreen);

/***/ }),

/***/ "./src/screens/RootScreen.js":
/*!***********************************!*\
  !*** ./src/screens/RootScreen.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/color.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _components_navigation_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation-buttons */ "./src/components/navigation-buttons.js");






const RootScreen = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, {
    size: "small"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalItemGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_navigation_buttons__WEBPACK_IMPORTED_MODULE_3__.NavigationButtonAsItem, {
    path: "/colors",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Colors'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Colors')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_navigation_buttons__WEBPACK_IMPORTED_MODULE_3__.NavigationButtonAsItem, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    path: '/typography',
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography styles')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Typography')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_navigation_buttons__WEBPACK_IMPORTED_MODULE_3__.NavigationButtonAsItem, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    path: '/container-settings',
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Settings')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Settings')))));
};

/* harmony default export */ __webpack_exports__["default"] = (RootScreen);

/***/ }),

/***/ "./src/screens/TypographyScreen.js":
/*!*****************************************!*\
  !*** ./src/screens/TypographyScreen.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_premium_typo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/premium-typo */ "../components/premium-typo.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _helpers_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaults */ "./src/helpers/defaults.js");
/* harmony import */ var _store_settings_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/settings-store */ "./src/store/settings-store.js");
/* harmony import */ var _components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/HelperFunction */ "../components/HelperFunction.js");
/* harmony import */ var _components_typography_fontLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/typography/fontLoader */ "../components/typography/fontLoader.js");










const TypographyScreen = props => {
  const {
    globalTypography,
    setGlobalTypography
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_store_settings_store__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    typography: defaultValues
  } = _helpers_defaults__WEBPACK_IMPORTED_MODULE_4__["default"];

  const getElementValue = element => {
    var _typographySettings, _typographySettings2;

    const value = (_typographySettings = typographySettings) !== null && _typographySettings !== void 0 && _typographySettings[element] ? (_typographySettings2 = typographySettings) === null || _typographySettings2 === void 0 ? void 0 : _typographySettings2[element] : defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues[element];
    return value;
  };

  const changeHandler = (element, value) => {
    const updatedTypography = { ...settings.typography
    };
    updatedTypography[element] = value; // setSettings('typography', updatedTypography);
  };

  const LoadElementGoogleFont = props => {
    const {
      typography
    } = props;

    if ((typography === null || typography === void 0 ? void 0 : typography.fontFamily) === 'Default') {
      return '';
    }

    const config = {
      google: {
        families: [typography.fontFamily]
      }
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_typography_fontLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: config
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography'),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage the typography settings for different elements.')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => {
      setTypographySettings({
        heading1: {
          "fontWeight": "400",
          "fontStyle": "",
          "textTransform": "",
          "fontFamily": "Default",
          "textDecoration": "",
          "fontSize": {
            "Desktop": 48,
            "Tablet": 48,
            "Mobile": 48,
            "unit": "px"
          },
          "lineHeight": {
            "Desktop": 27,
            "Tablet": 27,
            "Mobile": 27,
            "unit": "px"
          },
          "letterSpacing": {
            "Desktop": 0,
            "Tablet": 0,
            "Mobile": 0,
            "unit": "px"
          }
        }
      });
    }
  }, "Test"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-typography-screen"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('heading1'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 1')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('heading1'),
    title: false,
    onChange: newValue => changeHandler('heading1', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('heading2'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 2')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('heading2'),
    title: false,
    onChange: newValue => changeHandler('heading2', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('heading3'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 3')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('heading3'),
    title: false,
    onChange: newValue => changeHandler('heading3', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('heading4'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 4')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('heading4'),
    title: false,
    onChange: newValue => changeHandler('heading4', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('heading5'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 5')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('heading5'),
    title: false,
    onChange: newValue => changeHandler('heading5', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h6", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('heading6'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 6')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('heading6'),
    title: false,
    onChange: newValue => changeHandler('heading6', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('button'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buttons')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('button'),
    title: false,
    onChange: newValue => changeHandler('button', newValue)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-element-typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: { ...(0,_components_HelperFunction__WEBPACK_IMPORTED_MODULE_6__.typographyCss)(getElementValue('paragraph'), 'Desktop')
    },
    className: "premium-element-typography-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraphs')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: getElementValue('paragraph'),
    title: false,
    onChange: newValue => changeHandler('paragraph', newValue)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('heading1')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('heading2')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('heading3')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('heading4')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('heading5')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('heading6')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('button')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(LoadElementGoogleFont, {
    typography: getElementValue('paragraph')
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographyScreen);

/***/ }),

/***/ "./src/store/settings-store.js":
/*!*************************************!*\
  !*** ./src/store/settings-store.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsProvider": function() { return /* binding */ SettingsProvider; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


const SettingsContext = React.createContext({
  globalTypography: {},
  globalColors: {},
  colorPallet: '',
  setGlobalTypography: () => {},
  setGlobalColors: () => {},
  setColorPallet: () => {},
  colorPallets: [],
  setColorPallets: []
});
const SettingsProvider = props => {
  const [globalTypography, setGlobalTypography] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('root', 'site', 'pbg_global_typography');
  const [globalColors, setGlobalColors] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('root', 'site', 'pbg_global_colors');
  const [colorPallet, setColorPallet] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('root', 'site', 'pbg_global_color_pallet');
  const [colorPallets, setColorPallets] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('root', 'site', 'pbg_global_color_pallets');
  const settingsContext = {
    globalTypography,
    setGlobalTypography,
    globalColors,
    setGlobalColors,
    colorPallet,
    setColorPallet,
    colorPallets,
    setColorPallets
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SettingsContext.Provider, {
    value: settingsContext
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsContext);

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _screens_ColorsScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/ColorsScreen */ "./src/screens/ColorsScreen.js");
/* harmony import */ var _screens_ContainerSettingsScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/ContainerSettingsScreen */ "./src/screens/ContainerSettingsScreen.js");
/* harmony import */ var _screens_RootScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/RootScreen */ "./src/screens/RootScreen.js");
/* harmony import */ var _screens_TypographyScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/TypographyScreen */ "./src/screens/TypographyScreen.js");








const GlobalStylesUI = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNavigatorProvider, {
    className: "premium-global-styles-sidebar__navigator-provider",
    initialPath: "/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNavigatorScreen, {
    path: "/"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_screens_RootScreen__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNavigatorScreen, {
    path: "/colors"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_screens_ColorsScreen__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNavigatorScreen, {
    path: "/typography"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_screens_TypographyScreen__WEBPACK_IMPORTED_MODULE_6__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNavigatorScreen, {
    path: "/container-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_screens_ContainerSettingsScreen__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalStylesUI);

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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
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
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

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

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

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

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
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

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-tooltip/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tooltip/dist/index.es.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/v4.js");




function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _extends() {
  _extends = Object.assign || function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var CONSTANT = {
  GLOBAL: {
    HIDE: '__react_tooltip_hide_event',
    REBUILD: '__react_tooltip_rebuild_event',
    SHOW: '__react_tooltip_show_event'
  }
};

/**
 * Static methods for react-tooltip
 */

var dispatchGlobalEvent = function dispatchGlobalEvent(eventName, opts) {
  // Compatible with IE
  // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
  // @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
  var event;

  if (typeof window.CustomEvent === 'function') {
    event = new window.CustomEvent(eventName, {
      detail: opts
    });
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, false, true, opts);
  }

  window.dispatchEvent(event);
};

function staticMethods (target) {
  /**
   * Hide all tooltip
   * @trigger ReactTooltip.hide()
   */
  target.hide = function (target) {
    dispatchGlobalEvent(CONSTANT.GLOBAL.HIDE, {
      target: target
    });
  };
  /**
   * Rebuild all tooltip
   * @trigger ReactTooltip.rebuild()
   */


  target.rebuild = function () {
    dispatchGlobalEvent(CONSTANT.GLOBAL.REBUILD);
  };
  /**
   * Show specific tooltip
   * @trigger ReactTooltip.show()
   */


  target.show = function (target) {
    dispatchGlobalEvent(CONSTANT.GLOBAL.SHOW, {
      target: target
    });
  };

  target.prototype.globalRebuild = function () {
    if (this.mount) {
      this.unbindListener();
      this.bindListener();
    }
  };

  target.prototype.globalShow = function (event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false; // Create a fake event, specific show will limit the type to `solid`
      // only `float` type cares e.clientX e.clientY

      this.showTooltip({
        currentTarget: hasTarget && event.detail.target
      }, true);
    }
  };

  target.prototype.globalHide = function (event) {
    if (this.mount) {
      var hasTarget = event && event.detail && event.detail.target && true || false;
      this.hideTooltip({
        currentTarget: hasTarget && event.detail.target
      }, hasTarget);
    }
  };
}

/**
 * Events that should be bound to the window
 */
function windowListener (target) {
  target.prototype.bindWindowEvents = function (resizeHide) {
    // ReactTooltip.hide
    window.removeEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide);
    window.addEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide, false); // ReactTooltip.rebuild

    window.removeEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild);
    window.addEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild, false); // ReactTooltip.show

    window.removeEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow);
    window.addEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow, false); // Resize

    if (resizeHide) {
      window.removeEventListener('resize', this.onWindowResize);
      window.addEventListener('resize', this.onWindowResize, false);
    }
  };

  target.prototype.unbindWindowEvents = function () {
    window.removeEventListener(CONSTANT.GLOBAL.HIDE, this.globalHide);
    window.removeEventListener(CONSTANT.GLOBAL.REBUILD, this.globalRebuild);
    window.removeEventListener(CONSTANT.GLOBAL.SHOW, this.globalShow);
    window.removeEventListener('resize', this.onWindowResize);
  };
  /**
   * invoked by resize event of window
   */


  target.prototype.onWindowResize = function () {
    if (!this.mount) return;
    this.hideTooltip();
  };
}

/**
 * Custom events to control showing and hiding of tooltip
 *
 * @attributes
 * - `event` {String}
 * - `eventOff` {String}
 */
var checkStatus = function checkStatus(dataEventOff, e) {
  var show = this.state.show;
  var id = this.props.id;
  var isCapture = this.isCapture(e.currentTarget);
  var currentItem = e.currentTarget.getAttribute('currentItem');
  if (!isCapture) e.stopPropagation();

  if (show && currentItem === 'true') {
    if (!dataEventOff) this.hideTooltip(e);
  } else {
    e.currentTarget.setAttribute('currentItem', 'true');
    setUntargetItems(e.currentTarget, this.getTargetArray(id));
    this.showTooltip(e);
  }
};

var setUntargetItems = function setUntargetItems(currentTarget, targetArray) {
  for (var i = 0; i < targetArray.length; i++) {
    if (currentTarget !== targetArray[i]) {
      targetArray[i].setAttribute('currentItem', 'false');
    } else {
      targetArray[i].setAttribute('currentItem', 'true');
    }
  }
};

var customListeners = {
  id: '9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf',
  set: function set(target, event, listener) {
    if (this.id in target) {
      var map = target[this.id];
      map[event] = listener;
    } else {
      // this is workaround for WeakMap, which is not supported in older browsers, such as IE
      Object.defineProperty(target, this.id, {
        configurable: true,
        value: _defineProperty({}, event, listener)
      });
    }
  },
  get: function get(target, event) {
    var map = target[this.id];

    if (map !== undefined) {
      return map[event];
    }
  }
};
function customEvent (target) {
  target.prototype.isCustomEvent = function (ele) {
    var event = this.state.event;
    return event || !!ele.getAttribute('data-event');
  };
  /* Bind listener for custom event */


  target.prototype.customBindListener = function (ele) {
    var _this = this;

    var _this$state = this.state,
        event = _this$state.event,
        eventOff = _this$state.eventOff;
    var dataEvent = ele.getAttribute('data-event') || event;
    var dataEventOff = ele.getAttribute('data-event-off') || eventOff;
    dataEvent.split(' ').forEach(function (event) {
      ele.removeEventListener(event, customListeners.get(ele, event));
      var customListener = checkStatus.bind(_this, dataEventOff);
      customListeners.set(ele, event, customListener);
      ele.addEventListener(event, customListener, false);
    });

    if (dataEventOff) {
      dataEventOff.split(' ').forEach(function (event) {
        ele.removeEventListener(event, _this.hideTooltip);
        ele.addEventListener(event, _this.hideTooltip, false);
      });
    }
  };
  /* Unbind listener for custom event */


  target.prototype.customUnbindListener = function (ele) {
    var _this$state2 = this.state,
        event = _this$state2.event,
        eventOff = _this$state2.eventOff;
    var dataEvent = event || ele.getAttribute('data-event');
    var dataEventOff = eventOff || ele.getAttribute('data-event-off');
    ele.removeEventListener(dataEvent, customListeners.get(ele, event));
    if (dataEventOff) ele.removeEventListener(dataEventOff, this.hideTooltip);
  };
}

/**
 * Util method to judge if it should follow capture model
 */
function isCapture (target) {
  target.prototype.isCapture = function (currentTarget) {
    return currentTarget && currentTarget.getAttribute('data-iscapture') === 'true' || this.props.isCapture || false;
  };
}

/**
 * Util method to get effect
 */
function getEffect (target) {
  target.prototype.getEffect = function (currentTarget) {
    var dataEffect = currentTarget.getAttribute('data-effect');
    return dataEffect || this.props.effect || 'float';
  };
}

/**
 * Util method to get effect
 */

var makeProxy = function makeProxy(e) {
  var proxy = {};

  for (var key in e) {
    if (typeof e[key] === 'function') {
      proxy[key] = e[key].bind(e);
    } else {
      proxy[key] = e[key];
    }
  }

  return proxy;
};

var bodyListener = function bodyListener(callback, options, e) {
  var _options$respectEffec = options.respectEffect,
      respectEffect = _options$respectEffec === void 0 ? false : _options$respectEffec,
      _options$customEvent = options.customEvent,
      customEvent = _options$customEvent === void 0 ? false : _options$customEvent;
  var id = this.props.id;
  var tip = e.target.getAttribute('data-tip') || null;
  var forId = e.target.getAttribute('data-for') || null;
  var target = e.target;

  if (this.isCustomEvent(target) && !customEvent) {
    return;
  }

  var isTargetBelongsToTooltip = id == null && forId == null || forId === id;

  if (tip != null && (!respectEffect || this.getEffect(target) === 'float') && isTargetBelongsToTooltip) {
    var proxy = makeProxy(e);
    proxy.currentTarget = target;
    callback(proxy);
  }
};

var findCustomEvents = function findCustomEvents(targetArray, dataAttribute) {
  var events = {};
  targetArray.forEach(function (target) {
    var event = target.getAttribute(dataAttribute);
    if (event) event.split(' ').forEach(function (event) {
      return events[event] = true;
    });
  });
  return events;
};

var getBody = function getBody() {
  return document.getElementsByTagName('body')[0];
};

function bodyMode (target) {
  target.prototype.isBodyMode = function () {
    return !!this.props.bodyMode;
  };

  target.prototype.bindBodyListener = function (targetArray) {
    var _this = this;

    var _this$state = this.state,
        event = _this$state.event,
        eventOff = _this$state.eventOff,
        possibleCustomEvents = _this$state.possibleCustomEvents,
        possibleCustomEventsOff = _this$state.possibleCustomEventsOff;
    var body = getBody();
    var customEvents = findCustomEvents(targetArray, 'data-event');
    var customEventsOff = findCustomEvents(targetArray, 'data-event-off');
    if (event != null) customEvents[event] = true;
    if (eventOff != null) customEventsOff[eventOff] = true;
    possibleCustomEvents.split(' ').forEach(function (event) {
      return customEvents[event] = true;
    });
    possibleCustomEventsOff.split(' ').forEach(function (event) {
      return customEventsOff[event] = true;
    });
    this.unbindBodyListener(body);
    var listeners = this.bodyModeListeners = {};

    if (event == null) {
      listeners.mouseover = bodyListener.bind(this, this.showTooltip, {});
      listeners.mousemove = bodyListener.bind(this, this.updateTooltip, {
        respectEffect: true
      });
      listeners.mouseout = bodyListener.bind(this, this.hideTooltip, {});
    }

    for (var _event in customEvents) {
      listeners[_event] = bodyListener.bind(this, function (e) {
        var targetEventOff = e.currentTarget.getAttribute('data-event-off') || eventOff;
        checkStatus.call(_this, targetEventOff, e);
      }, {
        customEvent: true
      });
    }

    for (var _event2 in customEventsOff) {
      listeners[_event2] = bodyListener.bind(this, this.hideTooltip, {
        customEvent: true
      });
    }

    for (var _event3 in listeners) {
      body.addEventListener(_event3, listeners[_event3]);
    }
  };

  target.prototype.unbindBodyListener = function (body) {
    body = body || getBody();
    var listeners = this.bodyModeListeners;

    for (var event in listeners) {
      body.removeEventListener(event, listeners[event]);
    }
  };
}

/**
 * Tracking target removing from DOM.
 * It's necessary to hide tooltip when it's target disappears.
 * Otherwise, the tooltip would be shown forever until another target
 * is triggered.
 *
 * If MutationObserver is not available, this feature just doesn't work.
 */
// https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
var getMutationObserverClass = function getMutationObserverClass() {
  return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
};

function trackRemoval (target) {
  target.prototype.bindRemovalTracker = function () {
    var _this = this;

    var MutationObserver = getMutationObserverClass();
    if (MutationObserver == null) return;
    var observer = new MutationObserver(function (mutations) {
      for (var m1 = 0; m1 < mutations.length; m1++) {
        var mutation = mutations[m1];

        for (var m2 = 0; m2 < mutation.removedNodes.length; m2++) {
          var element = mutation.removedNodes[m2];

          if (element === _this.state.currentTarget) {
            _this.hideTooltip();

            return;
          }
        }
      }
    });
    observer.observe(window.document, {
      childList: true,
      subtree: true
    });
    this.removalTracker = observer;
  };

  target.prototype.unbindRemovalTracker = function () {
    if (this.removalTracker) {
      this.removalTracker.disconnect();
      this.removalTracker = null;
    }
  };
}

/**
 * Calculate the position of tooltip
 *
 * @params
 * - `e` {Event} the event of current mouse
 * - `target` {Element} the currentTarget of the event
 * - `node` {DOM} the react-tooltip object
 * - `place` {String} top / right / bottom / left
 * - `effect` {String} float / solid
 * - `offset` {Object} the offset to default position
 *
 * @return {Object}
 * - `isNewState` {Bool} required
 * - `newState` {Object}
 * - `position` {Object} {left: {Number}, top: {Number}}
 */
function getPosition (e, target, node, place, desiredPlace, effect, offset) {
  var _getDimensions = getDimensions(node),
      tipWidth = _getDimensions.width,
      tipHeight = _getDimensions.height;

  var _getDimensions2 = getDimensions(target),
      targetWidth = _getDimensions2.width,
      targetHeight = _getDimensions2.height;

  var _getCurrentOffset = getCurrentOffset(e, target, effect),
      mouseX = _getCurrentOffset.mouseX,
      mouseY = _getCurrentOffset.mouseY;

  var defaultOffset = getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight);

  var _calculateOffset = calculateOffset(offset),
      extraOffsetX = _calculateOffset.extraOffsetX,
      extraOffsetY = _calculateOffset.extraOffsetY;

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var _getParent = getParent(node),
      parentTop = _getParent.parentTop,
      parentLeft = _getParent.parentLeft; // Get the edge offset of the tooltip


  var getTipOffsetLeft = function getTipOffsetLeft(place) {
    var offsetX = defaultOffset[place].l;
    return mouseX + offsetX + extraOffsetX;
  };

  var getTipOffsetRight = function getTipOffsetRight(place) {
    var offsetX = defaultOffset[place].r;
    return mouseX + offsetX + extraOffsetX;
  };

  var getTipOffsetTop = function getTipOffsetTop(place) {
    var offsetY = defaultOffset[place].t;
    return mouseY + offsetY + extraOffsetY;
  };

  var getTipOffsetBottom = function getTipOffsetBottom(place) {
    var offsetY = defaultOffset[place].b;
    return mouseY + offsetY + extraOffsetY;
  }; //
  // Functions to test whether the tooltip's sides are inside
  // the client window for a given orientation p
  //
  //  _____________
  // |             | <-- Right side
  // | p = 'left'  |\
  // |             |/  |\
  // |_____________|   |_\  <-- Mouse
  //      / \           |
  //       |
  //       |
  //  Bottom side
  //


  var outsideLeft = function outsideLeft(p) {
    return getTipOffsetLeft(p) < 0;
  };

  var outsideRight = function outsideRight(p) {
    return getTipOffsetRight(p) > windowWidth;
  };

  var outsideTop = function outsideTop(p) {
    return getTipOffsetTop(p) < 0;
  };

  var outsideBottom = function outsideBottom(p) {
    return getTipOffsetBottom(p) > windowHeight;
  }; // Check whether the tooltip with orientation p is completely inside the client window


  var outside = function outside(p) {
    return outsideLeft(p) || outsideRight(p) || outsideTop(p) || outsideBottom(p);
  };

  var inside = function inside(p) {
    return !outside(p);
  };

  var placesList = ['top', 'bottom', 'left', 'right'];
  var insideList = [];

  for (var i = 0; i < 4; i++) {
    var p = placesList[i];

    if (inside(p)) {
      insideList.push(p);
    }
  }

  var isNewState = false;
  var newPlace;
  var shouldUpdatePlace = desiredPlace !== place;

  if (inside(desiredPlace) && shouldUpdatePlace) {
    isNewState = true;
    newPlace = desiredPlace;
  } else if (insideList.length > 0 && outside(desiredPlace) && outside(place)) {
    isNewState = true;
    newPlace = insideList[0];
  }

  if (isNewState) {
    return {
      isNewState: true,
      newState: {
        place: newPlace
      }
    };
  }

  return {
    isNewState: false,
    position: {
      left: parseInt(getTipOffsetLeft(place) - parentLeft, 10),
      top: parseInt(getTipOffsetTop(place) - parentTop, 10)
    }
  };
}

var getDimensions = function getDimensions(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
      height = _node$getBoundingClie.height,
      width = _node$getBoundingClie.width;

  return {
    height: parseInt(height, 10),
    width: parseInt(width, 10)
  };
}; // Get current mouse offset


var getCurrentOffset = function getCurrentOffset(e, currentTarget, effect) {
  var boundingClientRect = currentTarget.getBoundingClientRect();
  var targetTop = boundingClientRect.top;
  var targetLeft = boundingClientRect.left;

  var _getDimensions3 = getDimensions(currentTarget),
      targetWidth = _getDimensions3.width,
      targetHeight = _getDimensions3.height;

  if (effect === 'float') {
    return {
      mouseX: e.clientX,
      mouseY: e.clientY
    };
  }

  return {
    mouseX: targetLeft + targetWidth / 2,
    mouseY: targetTop + targetHeight / 2
  };
}; // List all possibility of tooltip final offset
// This is useful in judging if it is necessary for tooltip to switch position when out of window


var getDefaultPosition = function getDefaultPosition(effect, targetWidth, targetHeight, tipWidth, tipHeight) {
  var top;
  var right;
  var bottom;
  var left;
  var disToMouse = 3;
  var triangleHeight = 2;
  var cursorHeight = 12; // Optimize for float bottom only, cause the cursor will hide the tooltip

  if (effect === 'float') {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(tipHeight + disToMouse + triangleHeight),
      b: -disToMouse
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: disToMouse + cursorHeight,
      b: tipHeight + disToMouse + triangleHeight + cursorHeight
    };
    left = {
      l: -(tipWidth + disToMouse + triangleHeight),
      r: -disToMouse,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: disToMouse,
      r: tipWidth + disToMouse + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  } else if (effect === 'solid') {
    top = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: -(targetHeight / 2 + tipHeight + triangleHeight),
      b: -(targetHeight / 2)
    };
    bottom = {
      l: -(tipWidth / 2),
      r: tipWidth / 2,
      t: targetHeight / 2,
      b: targetHeight / 2 + tipHeight + triangleHeight
    };
    left = {
      l: -(tipWidth + targetWidth / 2 + triangleHeight),
      r: -(targetWidth / 2),
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
    right = {
      l: targetWidth / 2,
      r: tipWidth + targetWidth / 2 + triangleHeight,
      t: -(tipHeight / 2),
      b: tipHeight / 2
    };
  }

  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right
  };
}; // Consider additional offset into position calculation


var calculateOffset = function calculateOffset(offset) {
  var extraOffsetX = 0;
  var extraOffsetY = 0;

  if (Object.prototype.toString.apply(offset) === '[object String]') {
    offset = JSON.parse(offset.toString().replace(/'/g, '"'));
  }

  for (var key in offset) {
    if (key === 'top') {
      extraOffsetY -= parseInt(offset[key], 10);
    } else if (key === 'bottom') {
      extraOffsetY += parseInt(offset[key], 10);
    } else if (key === 'left') {
      extraOffsetX -= parseInt(offset[key], 10);
    } else if (key === 'right') {
      extraOffsetX += parseInt(offset[key], 10);
    }
  }

  return {
    extraOffsetX: extraOffsetX,
    extraOffsetY: extraOffsetY
  };
}; // Get the offset of the parent elements


var getParent = function getParent(currentTarget) {
  var currentParent = currentTarget;

  while (currentParent) {
    var computedStyle = window.getComputedStyle(currentParent); // transform and will-change: transform change the containing block
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block

    if (computedStyle.getPropertyValue('transform') !== 'none' || computedStyle.getPropertyValue('will-change') === 'transform') break;
    currentParent = currentParent.parentElement;
  }

  var parentTop = currentParent && currentParent.getBoundingClientRect().top || 0;
  var parentLeft = currentParent && currentParent.getBoundingClientRect().left || 0;
  return {
    parentTop: parentTop,
    parentLeft: parentLeft
  };
};

/**
 * To get the tooltip content
 * it may comes from data-tip or this.props.children
 * it should support multiline
 *
 * @params
 * - `tip` {String} value of data-tip
 * - `children` {ReactElement} this.props.children
 * - `multiline` {Any} could be Bool(true/false) or String('true'/'false')
 *
 * @return
 * - String or react component
 */
function getTipContent (tip, children, getContent, multiline) {
  if (children) return children;
  if (getContent !== undefined && getContent !== null) return getContent; // getContent can be 0, '', etc.

  if (getContent === null) return null; // Tip not exist and children is null or undefined

  var regexp = /<br\s*\/?>/;

  if (!multiline || multiline === 'false' || !regexp.test(tip)) {
    // No trim(), so that user can keep their input
    return tip;
  } // Multiline tooltip content


  return tip.split(regexp).map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: i,
      className: "multi-line"
    }, d);
  });
}

/**
 * Support aria- and role in ReactTooltip
 *
 * @params props {Object}
 * @return {Object}
 */
function parseAria(props) {
  var ariaObj = {};
  Object.keys(props).filter(function (prop) {
    // aria-xxx and role is acceptable
    return /(^aria-\w+$|^role$)/.test(prop);
  }).forEach(function (prop) {
    ariaObj[prop] = props[prop];
  });
  return ariaObj;
}

/**
 * Convert nodelist to array
 * @see https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/core/createArrayFromMixed.js#L24
 * NodeLists are functions in Safari
 */
function nodeListToArray (nodeList) {
  var length = nodeList.length;

  if (nodeList.hasOwnProperty) {
    return Array.prototype.slice.call(nodeList);
  }

  return new Array(length).fill().map(function (index) {
    return nodeList[index];
  });
}

function generateUUID() {
  return 't' + (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

var baseCss = ".__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}";

/**
 * Default pop-up style values (text color, background color).
 */
var defaultColors = {
  dark: {
    text: '#fff',
    background: '#222',
    border: 'transparent',
    arrow: '#222'
  },
  success: {
    text: '#fff',
    background: '#8DC572',
    border: 'transparent',
    arrow: '#8DC572'
  },
  warning: {
    text: '#fff',
    background: '#F0AD4E',
    border: 'transparent',
    arrow: '#F0AD4E'
  },
  error: {
    text: '#fff',
    background: '#BE6464',
    border: 'transparent',
    arrow: '#BE6464'
  },
  info: {
    text: '#fff',
    background: '#337AB7',
    border: 'transparent',
    arrow: '#337AB7'
  },
  light: {
    text: '#222',
    background: '#fff',
    border: 'transparent',
    arrow: '#fff'
  }
};
function getDefaultPopupColors(type) {
  return defaultColors[type] ? _objectSpread2({}, defaultColors[type]) : undefined;
}

/**
 * Generates the specific tooltip style for use on render.
 */

function generateTooltipStyle(uuid, customColors, type, hasBorder) {
  return generateStyle(uuid, getPopupColors(customColors, type, hasBorder));
}
/**
 * Generates the tooltip style rules based on the element-specified "data-type" property.
 */

function generateStyle(uuid, colors) {
  var textColor = colors.text;
  var backgroundColor = colors.background;
  var borderColor = colors.border;
  var arrowColor = colors.arrow;
  return "\n  \t.".concat(uuid, " {\n\t    color: ").concat(textColor, ";\n\t    background: ").concat(backgroundColor, ";\n\t    border: 1px solid ").concat(borderColor, ";\n  \t}\n\n  \t.").concat(uuid, ".place-top {\n        margin-top: -10px;\n    }\n    .").concat(uuid, ".place-top::before {\n        border-top: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(arrowColor, ";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(uuid, ".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(uuid, ".place-bottom::before {\n        border-bottom: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(arrowColor, ";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(uuid, ".place-left {\n        margin-left: -10px;\n    }\n    .").concat(uuid, ".place-left::before {\n        border-left: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(arrowColor, ";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(uuid, ".place-right {\n        margin-left: 10px;\n    }\n    .").concat(uuid, ".place-right::before {\n        border-right: 8px solid ").concat(borderColor, ";\n    }\n    .").concat(uuid, ".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(arrowColor, ";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ");
}

function getPopupColors(customColors, type, hasBorder) {
  var textColor = customColors.text;
  var backgroundColor = customColors.background;
  var borderColor = customColors.border;
  var arrowColor = customColors.arrow ? customColors.arrow : customColors.background;
  var colors = getDefaultPopupColors(type);

  if (textColor) {
    colors.text = textColor;
  }

  if (backgroundColor) {
    colors.background = backgroundColor;
  }

  if (hasBorder) {
    if (borderColor) {
      colors.border = borderColor;
    } else {
      colors.border = type === 'light' ? 'black' : 'white';
    }
  }

  if (arrowColor) {
    colors.arrow = arrowColor;
  }

  return colors;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.12.1',
  mode:  'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap || sharedStore.state) {
  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    if (wmhas.call(store$1, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (has(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys$1(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

/* eslint-disable es/no-symbol -- required for testing */



// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
});

/* eslint-disable es/no-symbol -- required for testing */


var useSymbolAsUid = nativeSymbol
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (nativeSymbol && has(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod$1(7)
};

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $find = arrayIteration.find;


var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
_export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

var _class, _class2, _temp;

var ReactTooltip = staticMethods(_class = windowListener(_class = customEvent(_class = isCapture(_class = getEffect(_class = bodyMode(_class = trackRemoval(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactTooltip, _React$Component);

  _createClass(ReactTooltip, null, [{
    key: "propTypes",
    get: function get() {
      return {
        uuid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
        place: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        effect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
        multiline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        border: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        textColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        borderColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        arrowColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        insecure: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        "class": (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        html: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        delayHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        delayUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        delayShow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
        event: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        eventOff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        isCapture: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        globalEventOff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        getContent: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
        afterShow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
        afterHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
        overridePosition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
        disable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        scrollHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        resizeHide: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        wrapper: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        bodyMode: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
        possibleCustomEvents: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        possibleCustomEventsOff: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
        clickable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
      };
    }
  }]);

  function ReactTooltip(props) {
    var _this;

    _classCallCheck(this, ReactTooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactTooltip).call(this, props));
    _this.state = {
      uuid: props.uuid || generateUUID(),
      place: props.place || 'top',
      // Direction of tooltip
      desiredPlace: props.place || 'top',
      type: 'dark',
      // Color theme of tooltip
      effect: 'float',
      // float or fixed
      show: false,
      border: false,
      customColors: {},
      offset: {},
      extraClass: '',
      html: false,
      delayHide: 0,
      delayShow: 0,
      event: props.event || null,
      eventOff: props.eventOff || null,
      currentEvent: null,
      // Current mouse event
      currentTarget: null,
      // Current target of mouse event
      ariaProps: parseAria(props),
      // aria- and role attributes
      isEmptyTip: false,
      disable: false,
      possibleCustomEvents: props.possibleCustomEvents || '',
      possibleCustomEventsOff: props.possibleCustomEventsOff || '',
      originTooltip: null,
      isMultiline: false
    };

    _this.bind(['showTooltip', 'updateTooltip', 'hideTooltip', 'hideTooltipOnScroll', 'getTooltipContent', 'globalRebuild', 'globalShow', 'globalHide', 'onWindowResize', 'mouseOnToolTip']);

    _this.mount = true;
    _this.delayShowLoop = null;
    _this.delayHideLoop = null;
    _this.delayReshow = null;
    _this.intervalUpdateContent = null;
    return _this;
  }
  /**
   * For unify the bind and unbind listener
   */


  _createClass(ReactTooltip, [{
    key: "bind",
    value: function bind(methodArray) {
      var _this2 = this;

      methodArray.forEach(function (method) {
        _this2[method] = _this2[method].bind(_this2);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          insecure = _this$props.insecure,
          resizeHide = _this$props.resizeHide;
      this.bindListener(); // Bind listener for tooltip

      this.bindWindowEvents(resizeHide); // Bind global event for static method

      this.injectStyles(); // Inject styles for each DOM root having tooltip.
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mount = false;
      this.clearTimer();
      this.unbindListener();
      this.removeScrollListener(this.state.currentTarget);
      this.unbindWindowEvents();
    }
    /* Look for the closest DOM root having tooltip and inject styles. */

  }, {
    key: "injectStyles",
    value: function injectStyles() {
      var tooltipRef = this.tooltipRef;

      if (!tooltipRef) {
        return;
      }

      var parentNode = tooltipRef.parentNode;

      while (parentNode.parentNode) {
        parentNode = parentNode.parentNode;
      }

      var domRoot;

      switch (parentNode.constructor.name) {
        case 'Document':
        case 'HTMLDocument':
        case undefined:
          domRoot = parentNode.head;
          break;

        case 'ShadowRoot':
        default:
          domRoot = parentNode;
          break;
      } // Prevent styles duplication.


      if (!domRoot.querySelector('style[data-react-tooltip]')) {
        var style = document.createElement('style');
        style.textContent = baseCss;
        style.setAttribute('data-react-tooltip', 'true');
        domRoot.appendChild(style);
      }
    }
    /**
     * Return if the mouse is on the tooltip.
     * @returns {boolean} true - mouse is on the tooltip
     */

  }, {
    key: "mouseOnToolTip",
    value: function mouseOnToolTip() {
      var show = this.state.show;

      if (show && this.tooltipRef) {
        /* old IE or Firefox work around */
        if (!this.tooltipRef.matches) {
          /* old IE work around */
          if (this.tooltipRef.msMatchesSelector) {
            this.tooltipRef.matches = this.tooltipRef.msMatchesSelector;
          } else {
            /* old Firefox work around */
            this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector;
          }
        }

        return this.tooltipRef.matches(':hover');
      }

      return false;
    }
    /**
     * Pick out corresponded target elements
     */

  }, {
    key: "getTargetArray",
    value: function getTargetArray(id) {
      var targetArray = [];
      var selector;

      if (!id) {
        selector = '[data-tip]:not([data-for])';
      } else {
        var escaped = id.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        selector = "[data-tip][data-for=\"".concat(escaped, "\"]");
      } // Scan document for shadow DOM elements


      nodeListToArray(document.getElementsByTagName('*')).filter(function (element) {
        return element.shadowRoot;
      }).forEach(function (element) {
        targetArray = targetArray.concat(nodeListToArray(element.shadowRoot.querySelectorAll(selector)));
      });
      return targetArray.concat(nodeListToArray(document.querySelectorAll(selector)));
    }
    /**
     * Bind listener to the target elements
     * These listeners used to trigger showing or hiding the tooltip
     */

  }, {
    key: "bindListener",
    value: function bindListener() {
      var _this3 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          globalEventOff = _this$props2.globalEventOff,
          isCapture = _this$props2.isCapture;
      var targetArray = this.getTargetArray(id);
      targetArray.forEach(function (target) {
        if (target.getAttribute('currentItem') === null) {
          target.setAttribute('currentItem', 'false');
        }

        _this3.unbindBasicListener(target);

        if (_this3.isCustomEvent(target)) {
          _this3.customUnbindListener(target);
        }
      });

      if (this.isBodyMode()) {
        this.bindBodyListener(targetArray);
      } else {
        targetArray.forEach(function (target) {
          var isCaptureMode = _this3.isCapture(target);

          var effect = _this3.getEffect(target);

          if (_this3.isCustomEvent(target)) {
            _this3.customBindListener(target);

            return;
          }

          target.addEventListener('mouseenter', _this3.showTooltip, isCaptureMode);
          target.addEventListener('focus', _this3.showTooltip, isCaptureMode);

          if (effect === 'float') {
            target.addEventListener('mousemove', _this3.updateTooltip, isCaptureMode);
          }

          target.addEventListener('mouseleave', _this3.hideTooltip, isCaptureMode);
          target.addEventListener('blur', _this3.hideTooltip, isCaptureMode);
        });
      } // Global event to hide tooltip


      if (globalEventOff) {
        window.removeEventListener(globalEventOff, this.hideTooltip);
        window.addEventListener(globalEventOff, this.hideTooltip, isCapture);
      } // Track removal of targetArray elements from DOM


      this.bindRemovalTracker();
    }
    /**
     * Unbind listeners on target elements
     */

  }, {
    key: "unbindListener",
    value: function unbindListener() {
      var _this4 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          globalEventOff = _this$props3.globalEventOff;

      if (this.isBodyMode()) {
        this.unbindBodyListener();
      } else {
        var targetArray = this.getTargetArray(id);
        targetArray.forEach(function (target) {
          _this4.unbindBasicListener(target);

          if (_this4.isCustomEvent(target)) _this4.customUnbindListener(target);
        });
      }

      if (globalEventOff) window.removeEventListener(globalEventOff, this.hideTooltip);
      this.unbindRemovalTracker();
    }
    /**
     * Invoke this before bind listener and unmount the component
     * it is necessary to invoke this even when binding custom event
     * so that the tooltip can switch between custom and default listener
     */

  }, {
    key: "unbindBasicListener",
    value: function unbindBasicListener(target) {
      var isCaptureMode = this.isCapture(target);
      target.removeEventListener('mouseenter', this.showTooltip, isCaptureMode);
      target.removeEventListener('mousemove', this.updateTooltip, isCaptureMode);
      target.removeEventListener('mouseleave', this.hideTooltip, isCaptureMode);
    }
  }, {
    key: "getTooltipContent",
    value: function getTooltipContent() {
      var _this$props4 = this.props,
          getContent = _this$props4.getContent,
          children = _this$props4.children; // Generate tooltip content

      var content;

      if (getContent) {
        if (Array.isArray(getContent)) {
          content = getContent[0] && getContent[0](this.state.originTooltip);
        } else {
          content = getContent(this.state.originTooltip);
        }
      }

      return getTipContent(this.state.originTooltip, children, content, this.state.isMultiline);
    }
  }, {
    key: "isEmptyTip",
    value: function isEmptyTip(placeholder) {
      return typeof placeholder === 'string' && placeholder === '' || placeholder === null;
    }
    /**
     * When mouse enter, show the tooltip
     */

  }, {
    key: "showTooltip",
    value: function showTooltip(e, isGlobalCall) {
      if (!this.tooltipRef) {
        return;
      }

      if (isGlobalCall) {
        // Don't trigger other elements belongs to other ReactTooltip
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function (ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement) return;
      } // Get the tooltip content
      // calculate in this phrase so that tip width height can be detected


      var _this$props5 = this.props,
          multiline = _this$props5.multiline,
          getContent = _this$props5.getContent;
      var originTooltip = e.currentTarget.getAttribute('data-tip');
      var isMultiline = e.currentTarget.getAttribute('data-multiline') || multiline || false; // If it is focus event or called by ReactTooltip.show, switch to `solid` effect

      var switchToSolid = e instanceof window.FocusEvent || isGlobalCall; // if it needs to skip adding hide listener to scroll

      var scrollHide = true;

      if (e.currentTarget.getAttribute('data-scroll-hide')) {
        scrollHide = e.currentTarget.getAttribute('data-scroll-hide') === 'true';
      } else if (this.props.scrollHide != null) {
        scrollHide = this.props.scrollHide;
      } // adding aria-describedby to target to make tooltips read by screen readers


      if (e && e.currentTarget && e.currentTarget.setAttribute) {
        e.currentTarget.setAttribute('aria-describedby', this.state.uuid);
      } // Make sure the correct place is set


      var desiredPlace = e.currentTarget.getAttribute('data-place') || this.props.place || 'top';
      var effect = switchToSolid && 'solid' || this.getEffect(e.currentTarget);
      var offset = e.currentTarget.getAttribute('data-offset') || this.props.offset || {};
      var result = getPosition(e, e.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);

      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, e, e.currentTarget, this.tooltipRef, desiredPlace, desiredPlace, effect, offset);
      }

      var place = result.isNewState ? result.newState.place : desiredPlace; // To prevent previously created timers from triggering

      this.clearTimer();
      var target = e.currentTarget;
      var reshowDelay = this.state.show ? target.getAttribute('data-delay-update') || this.props.delayUpdate : 0;
      var self = this;

      var updateState = function updateState() {
        self.setState({
          originTooltip: originTooltip,
          isMultiline: isMultiline,
          desiredPlace: desiredPlace,
          place: place,
          type: target.getAttribute('data-type') || self.props.type || 'dark',
          customColors: {
            text: target.getAttribute('data-text-color') || self.props.textColor || null,
            background: target.getAttribute('data-background-color') || self.props.backgroundColor || null,
            border: target.getAttribute('data-border-color') || self.props.borderColor || null,
            arrow: target.getAttribute('data-arrow-color') || self.props.arrowColor || null
          },
          effect: effect,
          offset: offset,
          html: (target.getAttribute('data-html') ? target.getAttribute('data-html') === 'true' : self.props.html) || false,
          delayShow: target.getAttribute('data-delay-show') || self.props.delayShow || 0,
          delayHide: target.getAttribute('data-delay-hide') || self.props.delayHide || 0,
          delayUpdate: target.getAttribute('data-delay-update') || self.props.delayUpdate || 0,
          border: (target.getAttribute('data-border') ? target.getAttribute('data-border') === 'true' : self.props.border) || false,
          extraClass: target.getAttribute('data-class') || self.props["class"] || self.props.className || '',
          disable: (target.getAttribute('data-tip-disable') ? target.getAttribute('data-tip-disable') === 'true' : self.props.disable) || false,
          currentTarget: target
        }, function () {
          if (scrollHide) {
            self.addScrollListener(self.state.currentTarget);
          }

          self.updateTooltip(e);

          if (getContent && Array.isArray(getContent)) {
            self.intervalUpdateContent = setInterval(function () {
              if (self.mount) {
                var _getContent = self.props.getContent;
                var placeholder = getTipContent(originTooltip, '', _getContent[0](), isMultiline);
                var isEmptyTip = self.isEmptyTip(placeholder);
                self.setState({
                  isEmptyTip: isEmptyTip
                });
                self.updatePosition();
              }
            }, getContent[1]);
          }
        });
      }; // If there is no delay call immediately, don't allow events to get in first.


      if (reshowDelay) {
        this.delayReshow = setTimeout(updateState, reshowDelay);
      } else {
        updateState();
      }
    }
    /**
     * When mouse hover, update tool tip
     */

  }, {
    key: "updateTooltip",
    value: function updateTooltip(e) {
      var _this5 = this;

      var _this$state = this.state,
          delayShow = _this$state.delayShow,
          disable = _this$state.disable;
      var afterShow = this.props.afterShow;
      var placeholder = this.getTooltipContent();
      var eventTarget = e.currentTarget || e.target; // Check if the mouse is actually over the tooltip, if so don't hide the tooltip

      if (this.mouseOnToolTip()) {
        return;
      } // if the tooltip is empty, disable the tooltip


      if (this.isEmptyTip(placeholder) || disable) {
        return;
      }

      var delayTime = !this.state.show ? parseInt(delayShow, 10) : 0;

      var updateState = function updateState() {
        if (Array.isArray(placeholder) && placeholder.length > 0 || placeholder) {
          var isInvisible = !_this5.state.show;

          _this5.setState({
            currentEvent: e,
            currentTarget: eventTarget,
            show: true
          }, function () {
            _this5.updatePosition();

            if (isInvisible && afterShow) {
              afterShow(e);
            }
          });
        }
      };

      clearTimeout(this.delayShowLoop);

      if (delayTime) {
        this.delayShowLoop = setTimeout(updateState, delayTime);
      } else {
        updateState();
      }
    }
    /*
     * If we're mousing over the tooltip remove it when we leave.
     */

  }, {
    key: "listenForTooltipExit",
    value: function listenForTooltipExit() {
      var show = this.state.show;

      if (show && this.tooltipRef) {
        this.tooltipRef.addEventListener('mouseleave', this.hideTooltip);
      }
    }
  }, {
    key: "removeListenerForTooltipExit",
    value: function removeListenerForTooltipExit() {
      var show = this.state.show;

      if (show && this.tooltipRef) {
        this.tooltipRef.removeEventListener('mouseleave', this.hideTooltip);
      }
    }
    /**
     * When mouse leave, hide tooltip
     */

  }, {
    key: "hideTooltip",
    value: function hideTooltip(e, hasTarget) {
      var _this6 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isScroll: false
      };
      var disable = this.state.disable;
      var isScroll = options.isScroll;
      var delayHide = isScroll ? 0 : this.state.delayHide;
      var afterHide = this.props.afterHide;
      var placeholder = this.getTooltipContent();
      if (!this.mount) return;
      if (this.isEmptyTip(placeholder) || disable) return; // if the tooltip is empty, disable the tooltip

      if (hasTarget) {
        // Don't trigger other elements belongs to other ReactTooltip
        var targetArray = this.getTargetArray(this.props.id);
        var isMyElement = targetArray.some(function (ele) {
          return ele === e.currentTarget;
        });
        if (!isMyElement || !this.state.show) return;
      } // clean up aria-describedby when hiding tooltip


      if (e && e.currentTarget && e.currentTarget.removeAttribute) {
        e.currentTarget.removeAttribute('aria-describedby');
      }

      var resetState = function resetState() {
        var isVisible = _this6.state.show; // Check if the mouse is actually over the tooltip, if so don't hide the tooltip

        if (_this6.mouseOnToolTip()) {
          _this6.listenForTooltipExit();

          return;
        }

        _this6.removeListenerForTooltipExit();

        _this6.setState({
          show: false
        }, function () {
          _this6.removeScrollListener(_this6.state.currentTarget);

          if (isVisible && afterHide) {
            afterHide(e);
          }
        });
      };

      this.clearTimer();

      if (delayHide) {
        this.delayHideLoop = setTimeout(resetState, parseInt(delayHide, 10));
      } else {
        resetState();
      }
    }
    /**
     * When scroll, hide tooltip
     */

  }, {
    key: "hideTooltipOnScroll",
    value: function hideTooltipOnScroll(event, hasTarget) {
      this.hideTooltip(event, hasTarget, {
        isScroll: true
      });
    }
    /**
     * Add scroll event listener when tooltip show
     * automatically hide the tooltip when scrolling
     */

  }, {
    key: "addScrollListener",
    value: function addScrollListener(currentTarget) {
      var isCaptureMode = this.isCapture(currentTarget);
      window.addEventListener('scroll', this.hideTooltipOnScroll, isCaptureMode);
    }
  }, {
    key: "removeScrollListener",
    value: function removeScrollListener(currentTarget) {
      var isCaptureMode = this.isCapture(currentTarget);
      window.removeEventListener('scroll', this.hideTooltipOnScroll, isCaptureMode);
    } // Calculation the position

  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var _this7 = this;

      var _this$state2 = this.state,
          currentEvent = _this$state2.currentEvent,
          currentTarget = _this$state2.currentTarget,
          place = _this$state2.place,
          desiredPlace = _this$state2.desiredPlace,
          effect = _this$state2.effect,
          offset = _this$state2.offset;
      var node = this.tooltipRef;
      var result = getPosition(currentEvent, currentTarget, node, place, desiredPlace, effect, offset);

      if (result.position && this.props.overridePosition) {
        result.position = this.props.overridePosition(result.position, currentEvent, currentTarget, node, place, desiredPlace, effect, offset);
      }

      if (result.isNewState) {
        // Switch to reverse placement
        return this.setState(result.newState, function () {
          _this7.updatePosition();
        });
      } // Set tooltip position


      node.style.left = result.position.left + 'px';
      node.style.top = result.position.top + 'px';
    }
    /**
     * CLear all kinds of timeout of interval
     */

  }, {
    key: "clearTimer",
    value: function clearTimer() {
      clearTimeout(this.delayShowLoop);
      clearTimeout(this.delayHideLoop);
      clearTimeout(this.delayReshow);
      clearInterval(this.intervalUpdateContent);
    }
  }, {
    key: "hasCustomColors",
    value: function hasCustomColors() {
      var _this8 = this;

      return Boolean(Object.keys(this.state.customColors).find(function (color) {
        return color !== 'border' && _this8.state.customColors[color];
      }) || this.state.border && this.state.customColors['border']);
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$state3 = this.state,
          extraClass = _this$state3.extraClass,
          html = _this$state3.html,
          ariaProps = _this$state3.ariaProps,
          disable = _this$state3.disable,
          uuid = _this$state3.uuid;
      var content = this.getTooltipContent();
      var isEmptyTip = this.isEmptyTip(content);
      var style = generateTooltipStyle(this.state.uuid, this.state.customColors, this.state.type, this.state.border);
      var tooltipClass = '__react_component_tooltip' + " ".concat(this.state.uuid) + (this.state.show && !disable && !isEmptyTip ? ' show' : '') + (this.state.border ? ' border' : '') + " place-".concat(this.state.place) + // top, bottom, left, right
      " type-".concat(this.hasCustomColors() ? 'custom' : this.state.type) + ( // dark, success, warning, error, info, light, custom
      this.props.delayUpdate ? ' allow_hover' : '') + (this.props.clickable ? ' allow_click' : '');
      var Wrapper = this.props.wrapper;

      if (ReactTooltip.supportedWrappers.indexOf(Wrapper) < 0) {
        Wrapper = ReactTooltip.defaultProps.wrapper;
      }

      var wrapperClassName = [tooltipClass, extraClass].filter(Boolean).join(' ');

      if (html) {
        var htmlContent = "".concat(content, "\n<style aria-hidden=\"true\">").concat(style, "</style>");
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, _extends({
          className: "".concat(wrapperClassName),
          id: this.props.id || uuid,
          ref: function ref(_ref) {
            return _this9.tooltipRef = _ref;
          }
        }, ariaProps, {
          "data-id": "tooltip",
          dangerouslySetInnerHTML: {
            __html: htmlContent
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, _extends({
          className: "".concat(wrapperClassName),
          id: this.props.id || uuid
        }, ariaProps, {
          ref: function ref(_ref2) {
            return _this9.tooltipRef = _ref2;
          },
          "data-id": "tooltip"
        }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
          dangerouslySetInnerHTML: {
            __html: style
          },
          "aria-hidden": "true"
        }), content);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var ariaProps = prevState.ariaProps;
      var newAriaProps = parseAria(nextProps);
      var isChanged = Object.keys(newAriaProps).some(function (props) {
        return newAriaProps[props] !== ariaProps[props];
      });

      if (!isChanged) {
        return null;
      }

      return _objectSpread2({}, prevState, {
        ariaProps: newAriaProps
      });
    }
  }]);

  return ReactTooltip;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component)), _defineProperty(_class2, "defaultProps", {
  insecure: true,
  resizeHide: true,
  wrapper: 'div',
  clickable: false
}), _defineProperty(_class2, "supportedWrappers", ['div', 'span']), _defineProperty(_class2, "displayName", 'ReactTooltip'), _temp)) || _class) || _class) || _class) || _class) || _class) || _class) || _class;

/* harmony default export */ __webpack_exports__["default"] = (ReactTooltip);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ __webpack_exports__["default"] = (bytesToUuid);

/***/ }),

/***/ "./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/rng.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/rng.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/v4.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/v4.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ "./node_modules/react-tooltip/node_modules/uuid/dist/esm-browser/bytesToUuid.js");



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || (0,_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

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

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
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

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkglobal_settings"] = self["webpackChunkglobal_settings"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map