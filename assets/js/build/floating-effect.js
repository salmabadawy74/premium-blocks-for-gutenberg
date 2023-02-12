/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
      (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anime);


/***/ }),

/***/ "./src/global-features/helpers/defaults.js":
/*!*************************************************!*\
  !*** ./src/global-features/helpers/defaults.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "floatingEffectDefaults": () => (/* binding */ floatingEffectDefaults)
/* harmony export */ });
const floatingEffectDefaults = {
  enable: false,
  type: 'motion',
  translate: {
    enable: false,
    x: {
      from: -5,
      to: 5,
      unit: 'px'
    },
    y: {
      from: -5,
      to: 5,
      unit: 'px'
    },
    duration: 1000,
    delay: '',
    flag: false
  },
  rotate: {
    enable: false,
    x: {
      from: 0,
      to: 45,
      unit: 'deg'
    },
    y: {
      from: 0,
      to: 45,
      unit: 'deg'
    },
    z: {
      from: 0,
      to: 45,
      unit: 'deg'
    },
    duration: 1000,
    delay: ''
  },
  scale: {
    enable: false,
    x: {
      from: 1,
      to: 1.2,
      unit: 'px'
    },
    y: {
      from: 1,
      to: 1.2,
      unit: 'px'
    },
    duration: 1000,
    delay: ''
  },
  skew: {
    enable: false,
    x: {
      from: 0,
      to: 20,
      unit: 'deg'
    },
    y: {
      from: 0,
      to: 20,
      unit: 'deg'
    },
    duration: 1000,
    delay: ''
  },
  opacity: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  background: {
    enable: false,
    value: {
      from: '',
      to: ''
    },
    duration: 1000,
    delay: ''
  },
  blur: {
    enable: false,
    value: {
      from: 0,
      to: 1,
      unit: 'px'
    },
    duration: 1000,
    delay: ''
  },
  contrast: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  grayscale: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  hue: {
    enable: false,
    value: {
      from: 0,
      to: 90,
      unit: 'deg'
    },
    duration: 1000,
    delay: ''
  },
  brightness: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  saturation: {
    enable: false,
    value: {
      from: 0,
      to: 50,
      unit: '%'
    },
    duration: 1000,
    delay: ''
  },
  direction: 'alternate',
  loop: 'infinite',
  customNumber: 3,
  easing: 'linear',
  disableOnSafari: false,
  steps: 5,
  customSelector: ''
};

/***/ }),

/***/ "./src/global-features/helpers/helpers.js":
/*!************************************************!*\
  !*** ./src/global-features/helpers/helpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkSafariBrowser": () => (/* binding */ checkSafariBrowser),
/* harmony export */   "checkSelector": () => (/* binding */ checkSelector),
/* harmony export */   "getAnimationObj": () => (/* binding */ getAnimationObj)
/* harmony export */ });
const getAnimationObj = floatingEffect => {
  const {
    type,
    translate,
    rotate,
    scale,
    skew,
    opacity,
    background,
    blur,
    contrast,
    grayscale,
    hue,
    brightness,
    saturation
  } = floatingEffect;
  const animeObj = {};
  const filters = [];
  if (translate.enable) {
    animeObj.translateX = {
      value: [translate?.x?.from || 0, translate?.x?.to || 0],
      delay: translate.delay || 0,
      duration: translate.duration || 1000
    };
    animeObj.translateY = {
      value: [translate?.y?.from || 0, translate?.y?.to || 0],
      delay: translate.delay || 0,
      duration: translate.duration || 1000
    };
  }
  if (rotate.enable) {
    animeObj.rotateX = {
      value: [rotate?.x?.from || 0, rotate?.x?.to || 0],
      delay: rotate.delay || 0,
      duration: rotate.duration || 1000
    };
    animeObj.rotateY = {
      value: [rotate?.y?.from || 0, rotate?.y?.to || 0],
      delay: rotate.delay || 0,
      duration: rotate.duration || 1000
    };
    animeObj.rotateZ = {
      value: [rotate?.z?.from || 0, rotate?.z?.to || 0],
      delay: rotate.delay || 0,
      duration: rotate.duration || 1000
    };
  }
  if (scale.enable) {
    animeObj.scaleX = {
      value: [scale?.x?.from || 0, scale?.x?.to || 0],
      delay: scale.delay || 0,
      duration: scale.duration || 1000
    };
    animeObj.scaleY = {
      value: [scale?.y?.from || 0, scale?.y?.to || 0],
      delay: scale.delay || 0,
      duration: scale.duration || 1000
    };
  }
  if (skew.enable) {
    animeObj.skewX = {
      value: [skew?.x?.from || 0, skew?.x?.to || 0],
      delay: skew.delay || 0,
      duration: skew.duration || 1000
    };
    animeObj.skewY = {
      value: [skew?.y?.from || 0, skew?.y?.to || 0],
      delay: skew.delay || 0,
      duration: skew.duration || 1000
    };
  }
  if (opacity.enable) {
    animeObj.opacity = {
      value: [opacity?.value?.from || 0, opacity?.value?.to || 0],
      duration: opacity.duration || 1000,
      delay: opacity.delay || 0
    };
  }
  if (background.enable) {
    animeObj.backgroundColor = {
      value: [background?.value?.from || 0, background?.value?.to || 0],
      duration: background.duration || 1000,
      delay: background?.delay || 0
    };
  }
  if (blur.enable) {
    filters.push({
      value: [`blur(${blur?.value?.from}${blur?.value?.unit})` || 0, `blur(${blur?.value?.to}${blur?.value?.unit})` || 0],
      duration: blur.duration || 1000,
      delay: blur.delay || 0
    });
  }
  if (contrast.enable) {
    filters.push({
      value: [`contrast(${contrast?.value?.from}${contrast?.value?.unit})` || 0, `contrast(${contrast?.value?.to}${contrast?.value?.unit})` || 0],
      duration: contrast.duration || 1000,
      delay: contrast.delay || 0
    });
  }
  if (grayscale.enable) {
    filters.push({
      value: [`grayscale(${grayscale?.value?.from}${grayscale?.value?.unit})` || 0, `grayscale(${grayscale?.value?.to}${grayscale?.value?.unit})` || 0],
      duration: grayscale.duration || 1000,
      delay: grayscale.delay || 0
    });
  }
  if (hue.enable) {
    filters.push({
      value: [`hue-rotate(${hue?.value?.from}${hue?.value?.unit})` || 0, `hue-rotate(${hue?.value?.to}${hue?.value?.unit})` || 0],
      duration: hue.duration || 1000,
      delay: hue.delay || 0
    });
  }
  if (brightness.enable) {
    filters.push({
      value: [`brightness(${brightness?.value?.from}${brightness?.value?.unit})` || 0, `brightness(${brightness?.value?.to}${brightness?.value?.unit})` || 0],
      duration: brightness.duration || 1000,
      delay: brightness.delay || 0
    });
  }
  if (saturation.enable) {
    filters.push({
      value: [`saturate(${saturation?.value?.from}${saturation?.value?.unit})` || 0, `saturate(${saturation?.value?.to}${saturation?.value?.unit})` || 0],
      duration: saturation.duration || 1000,
      delay: saturation.delay || 0
    });
  }
  if (filters.length > 0) {
    animeObj.filter = filters;
  }
  return animeObj;
};
const checkSafariBrowser = () => {
  const iOS = /iP(hone|ad|od)/i.test(navigator.userAgent) && !window.MSStream;
  if (iOS) {
    const allowedBrowser = /(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);
    if (!allowedBrowser) {
      const isFireFox = '' === navigator.vendor;
      allowedBrowser = allowedBrowser || isFireFox;
    }
    const isSafari = /WebKit/i.test(navigator.userAgent) && !allowedBrowser;
  } else {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  return isSafari ? true : false;
};
const checkSelector = selector => {
  try {
    const checker = document.querySelector(selector);
    return true;
  } catch (e) {
    return false;
  }
};

/***/ }),

/***/ "@pbg/components":
/*!*********************************!*\
  !*** external "pbg.components" ***!
  \*********************************/
/***/ ((module) => {

module.exports = pbg.components;

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/global-features/floating-effect.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pbg/components */ "@pbg/components");
/* harmony import */ var _pbg_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pbg_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_defaults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/defaults */ "./src/global-features/helpers/defaults.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/helpers */ "./src/global-features/helpers/helpers.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");












const FloatingEffect = _ref => {
  let {
    value,
    onChange
  } = _ref;
  const {
    enable,
    type,
    translate,
    rotate,
    scale,
    skew,
    opacity,
    background,
    blur,
    contrast,
    grayscale,
    hue,
    brightness,
    saturation,
    direction,
    loop,
    customNumber,
    easing,
    disableOnSafari,
    steps,
    customSelector
  } = value;
  const changeHandler = newVal => {
    const newValue = {
      ...value,
      ...newVal
    };
    onChange(newValue);
  };
  const onChangeEffect = (effect, newVal) => {
    const newEffectValue = value[effect];
    changeHandler({
      [effect]: {
        ...newEffectValue,
        ...newVal
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Floating Effects", 'premium-blocks-for-gutenberg'),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Floating Effects", "premium-blocks-for-gutenberg"),
    checked: enable,
    onChange: value => changeHandler({
      enable: value
    })
  }), enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Custom CSS Selector', "premium-blocks-for-gutenberg"),
    value: customSelector,
    onChange: value => changeHandler({
      customSelector: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Set this option if you want to apply floating effects on specfic selector inside your Block. For example, .premium-dheading-block__first', "premium-blocks-for-gutenberg")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.RadioComponent, {
    choices: [{
      value: "motion",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Motion", "premium-blocks-for-gutenberg")
    }, {
      value: "style",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Style", "premium-blocks-for-gutenberg")
    }, {
      value: "filters",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Filters", "premium-blocks-for-gutenberg")
    }],
    value: type,
    onChange: newValue => changeHandler({
      type: newValue
    }),
    showIcons: false
  }), type === 'motion' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Translate", "premium-blocks-for-gutenberg"),
    checked: translate.enable,
    onChange: value => onChangeEffect('translate', {
      enable: value
    })
  }), translate.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Translate X", "premium-blocks-for-gutenberg"),
    value: translate.x,
    min: -150,
    max: 150,
    onChange: value => onChangeEffect('translate', {
      x: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Translate Y", "premium-blocks-for-gutenberg"),
    value: translate.y,
    min: -150,
    max: 150,
    onChange: val => onChangeEffect('translate', {
      y: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: translate.duration,
    onChange: newValue => onChangeEffect('translate', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: translate.delay,
    onChange: newValue => onChangeEffect('translate', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Rotate", "premium-blocks-for-gutenberg"),
    checked: rotate.enable,
    onChange: value => onChangeEffect('rotate', {
      enable: value
    })
  }), rotate.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Rotate X", "premium-blocks-for-gutenberg"),
    value: rotate.x,
    min: -180,
    max: 180,
    onChange: value => onChangeEffect('rotate', {
      x: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Rotate Y", "premium-blocks-for-gutenberg"),
    value: rotate.y,
    min: -180,
    max: 180,
    onChange: value => onChangeEffect('rotate', {
      y: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Rotate Z", "premium-blocks-for-gutenberg"),
    value: rotate.z,
    min: -180,
    max: 180,
    onChange: value => onChangeEffect('rotate', {
      z: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: rotate.duration,
    onChange: newValue => onChangeEffect('rotate', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: rotate.delay,
    onChange: newValue => onChangeEffect('rotate', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Scale", "premium-blocks-for-gutenberg"),
    checked: scale.enable,
    onChange: value => onChangeEffect('scale', {
      enable: value
    })
  }), scale.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Scale X", "premium-blocks-for-gutenberg"),
    value: scale.x,
    min: 0,
    max: 2,
    step: 0.1,
    onChange: value => onChangeEffect('scale', {
      x: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Scale Y", "premium-blocks-for-gutenberg"),
    value: scale.y,
    min: 0,
    max: 2,
    step: 0.1,
    onChange: value => onChangeEffect('scale', {
      y: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: scale.duration,
    onChange: newValue => onChangeEffect('scale', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: scale.delay,
    onChange: newValue => onChangeEffect('scale', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Skew", "premium-blocks-for-gutenberg"),
    checked: skew.enable,
    onChange: value => onChangeEffect('skew', {
      enable: value
    })
  }), skew.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Skew X", "premium-blocks-for-gutenberg"),
    value: skew.x,
    min: -180,
    max: 180,
    onChange: value => onChangeEffect('skew', {
      x: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Skew Y", "premium-blocks-for-gutenberg"),
    value: skew.y,
    min: -180,
    max: 180,
    onChange: value => onChangeEffect('skew', {
      y: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: skew.duration,
    onChange: newValue => onChangeEffect('skew', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: skew.delay,
    onChange: newValue => onChangeEffect('skew', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  }))), type === 'style' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Opacity", "premium-blocks-for-gutenberg"),
    checked: opacity.enable,
    onChange: value => onChangeEffect('opacity', {
      enable: value
    })
  }), opacity.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Opacity", "premium-blocks-for-gutenberg"),
    value: opacity.value,
    min: 0,
    max: 100,
    onChange: value => onChangeEffect('opacity', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: opacity.duration,
    onChange: newValue => onChangeEffect('opacity', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: opacity.delay,
    onChange: newValue => onChangeEffect('opacity', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Background", "premium-blocks-for-gutenberg"),
    checked: background.enable,
    onChange: value => onChangeEffect('background', {
      enable: value
    })
  }), background.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("From", "premium-blocks-for-gutenberg"),
    colorValue: background.value.from,
    colorDefault: "",
    onColorChange: value => onChangeEffect('background', {
      value: {
        ...background.value,
        from: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("To", "premium-blocks-for-gutenberg"),
    colorValue: background.value.to,
    colorDefault: "",
    onColorChange: value => onChangeEffect('background', {
      value: {
        ...background.value,
        to: value
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: background.duration,
    onChange: newValue => onChangeEffect('background', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: background.delay,
    onChange: newValue => onChangeEffect('background', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  }))), type === 'filters' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Blur", "premium-blocks-for-gutenberg"),
    checked: blur.enable,
    onChange: value => onChangeEffect('blur', {
      enable: value
    })
  }), blur.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Value", "premium-blocks-for-gutenberg"),
    value: blur.value,
    min: 0,
    max: 3,
    step: 0.1,
    onChange: value => onChangeEffect('blur', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: blur.duration,
    onChange: newValue => onChangeEffect('blur', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: blur.delay,
    onChange: newValue => onChangeEffect('blur', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Contrast", "premium-blocks-for-gutenberg"),
    checked: contrast.enable,
    onChange: value => onChangeEffect('contrast', {
      enable: value
    })
  }), contrast.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Value", "premium-blocks-for-gutenberg"),
    value: contrast.value,
    min: 0,
    max: 200,
    onChange: value => onChangeEffect('contrast', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: contrast.duration,
    onChange: newValue => onChangeEffect('contrast', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: contrast.delay,
    onChange: newValue => onChangeEffect('contrast', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Grayscale", "premium-blocks-for-gutenberg"),
    checked: grayscale.enable,
    onChange: value => onChangeEffect('grayscale', {
      enable: value
    })
  }), grayscale.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Value", "premium-blocks-for-gutenberg"),
    value: grayscale.value,
    min: 0,
    max: 100,
    onChange: value => onChangeEffect('grayscale', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: grayscale.duration,
    onChange: newValue => onChangeEffect('grayscale', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: grayscale.delay,
    onChange: newValue => onChangeEffect('grayscale', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Hue", "premium-blocks-for-gutenberg"),
    checked: hue.enable,
    onChange: value => onChangeEffect('hue', {
      enable: value
    })
  }), hue.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Value", "premium-blocks-for-gutenberg"),
    value: hue.value,
    min: 0,
    max: 360,
    onChange: value => onChangeEffect('hue', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: hue.duration,
    onChange: newValue => onChangeEffect('hue', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: hue.delay,
    onChange: newValue => onChangeEffect('hue', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Brightness", "premium-blocks-for-gutenberg"),
    checked: brightness.enable,
    onChange: value => onChangeEffect('brightness', {
      enable: value
    })
  }), brightness.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Value", "premium-blocks-for-gutenberg"),
    value: brightness.value,
    min: 0,
    max: 200,
    onChange: value => onChangeEffect('brightness', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: brightness.duration,
    onChange: newValue => onChangeEffect('brightness', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: brightness.delay,
    onChange: newValue => onChangeEffect('brightness', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Saturation", "premium-blocks-for-gutenberg"),
    checked: saturation.enable,
    onChange: value => onChangeEffect('saturation', {
      enable: value
    })
  }), saturation.enable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.AdvancedRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Value", "premium-blocks-for-gutenberg"),
    value: saturation.value,
    min: 0,
    max: 200,
    onChange: value => onChangeEffect('saturation', {
      value: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Duration", 'premium-blocks-for-gutenberg'),
    value: saturation.duration,
    onChange: newValue => onChangeEffect('saturation', {
      duration: newValue
    }),
    showUnit: false,
    defaultValue: 1000,
    max: 10000,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_pbg_components__WEBPACK_IMPORTED_MODULE_5__.ResponsiveSingleRangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Delay", 'premium-blocks-for-gutenberg'),
    value: saturation.delay,
    onChange: newValue => onChangeEffect('saturation', {
      delay: newValue
    }),
    showUnit: false,
    defaultValue: 0,
    max: 10000,
    step: 1
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    class: "premium-control-title",
    style: {
      fontWeight: 700,
      marginBottom: 10,
      display: 'inline-block'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('General Settings', 'premium-blocks-for-gutenberg')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Direction", "premium-blocks-for-gutenberg"),
    value: direction,
    onChange: newValue => changeHandler({
      direction: newValue
    }),
    options: [{
      value: "normal",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Normal", "premium-blocks-for-gutenberg")
    }, {
      value: "reverse",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Reverse", "premium-blocks-for-gutenberg")
    }, {
      value: "alternate",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Alternate", "premium-blocks-for-gutenberg")
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Loop", "premium-blocks-for-gutenberg"),
    value: loop,
    onChange: newValue => changeHandler({
      loop: newValue
    }),
    options: [{
      value: "infinite",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Infinite", "premium-blocks-for-gutenberg")
    }, {
      value: "custom",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Custom", "premium-blocks-for-gutenberg")
    }]
  }), loop === 'custom' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "premium-control-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Custom Number', 'premium-blocks-pro')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    value: customNumber,
    onChange: value => changeHandler({
      customNumber: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Easing", "premium-blocks-for-gutenberg"),
    value: easing,
    onChange: newValue => changeHandler({
      easing: newValue
    }),
    options: [{
      value: "linear",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Linear", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInOutSine",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("easeInOutSine", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInOutExpo",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("easeInOutExpo", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInOutQuart",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("easeInOutQuart", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInOutCirc",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("easeInOutCirc", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInOutBack",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("easeInOutBack", "premium-blocks-for-gutenberg")
    }, {
      value: "steps",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Steps", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInElastic(1, .6)",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Elastic In", "premium-blocks-for-gutenberg")
    }, {
      value: "easeOutElastic(1, .6)",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Elastic Out", "premium-blocks-for-gutenberg")
    }, {
      value: "easeInOutElastic(1, .6)",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Elastic In Out", "premium-blocks-for-gutenberg")
    }]
  }), easing === 'steps' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "premium-blocks__base-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "premium-control-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Steps', 'premium-blocks-pro')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
    value: steps,
    onChange: value => changeHandler({
      steps: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Disable Floating Effects On Safari", "premium-blocks-for-gutenberg"),
    checked: disableOnSafari,
    onChange: value => changeHandler({
      disableOnSafari: value
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingEffect);
const FloatingEffectControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      floatingEffect = {}
    } = attributes;
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      if (!floatingEffect?.enable) {
        return;
      }
      if (floatingEffect?.disableOnSafari && (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.checkSafariBrowser)()) {
        return;
      }
      let blockElement = document.querySelectorAll(`[data-effect="${floatingEffect.clientId}"]`);
      let targets;
      if (floatingEffect.customSelector && (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.checkSelector)(floatingEffect.customSelector)) {
        blockElement = document.querySelector(`[data-effect="${floatingEffect.clientId}"]`);
        targets = blockElement.querySelectorAll(floatingEffect.customSelector);
      }
      const animeSettings = {
        targets: targets?.length > 0 ? targets : blockElement,
        loop: floatingEffect.loop === 'infinite' ? true : floatingEffect.customNumber,
        direction: floatingEffect.direction,
        easing: floatingEffect.easing !== 'steps' ? floatingEffect.easing : `steps(${floatingEffect?.steps || 5})`
      };
      const animeObj = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__.getAnimationObj)(floatingEffect);
      let animationInstance = null;
      if (Object.keys(animeObj).length) {
        animationInstance = (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
          ...animeSettings,
          ...animeObj
        });
      }
      return () => {
        if (animationInstance) {
          animationInstance.pause();
          animationInstance.reset();
        }
      };
    }, [isSelected, floatingEffect]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FloatingEffect, {
      value: floatingEffect,
      onChange: value => setAttributes({
        floatingEffect: value
      })
    })));
  };
}, 'FloatingEffectControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)('editor.BlockEdit', 'pbg/floating-effect-attribute', FloatingEffectControl);
const addFloatingAttribute = (settings, name) => {
  if (typeof settings.attributes !== 'undefined') {
    settings.attributes = Object.assign(settings.attributes, {
      floatingEffect: {
        type: 'object',
        default: _helpers_defaults__WEBPACK_IMPORTED_MODULE_8__.floatingEffectDefaults
      }
    });
  }
  return settings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)('blocks.registerBlockType', 'pbg/floating-effect-attribute', addFloatingAttribute);
const withClientId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    const blockRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const {
      attributes,
      isSelected
    } = props;
    const wrapperProps = {
      ...props.wrapperProps,
      'data-effect': props.clientId
    };
    if (attributes?.floatingEffect?.enable) {
      attributes.floatingEffect.clientId = props.clientId;
      wrapperProps['data-effect'] = props.clientId;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      wrapperProps: wrapperProps
    }));
  };
}, 'withClientId');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__.addFilter)('editor.BlockListBlock', 'pbg/client-id', withClientId);
})();

/******/ })()
;
//# sourceMappingURL=floating-effect.js.map