/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/classnames/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/classnames/index.js ***!
  \**********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
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

/***/ "./content-switcher/block.js":
/*!***********************************!*\
  !*** ./content-switcher/block.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./content-switcher/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./content-switcher/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./content-switcher/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./content-switcher/save.js");



/**
 * Internal dependencies
 */




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./content-switcher/edit.js":
/*!**********************************!*\
  !*** ./content-switcher/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RangeControl/responsive-range-control */ "../components/RangeControl/responsive-range-control.js");
/* harmony import */ var _components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");
/* harmony import */ var _components_premium_typo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/premium-typo */ "../components/premium-typo.js");
/* harmony import */ var _components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PremiumShadow */ "../components/PremiumShadow.js");
/* harmony import */ var _components_Premium_Responsive_Padding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Premium-Responsive-Padding */ "../components/Premium-Responsive-Padding.js");
/* harmony import */ var _components_Premium_Responsive_Margin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Premium-Responsive-Margin */ "../components/Premium-Responsive-Margin.js");
/* harmony import */ var _components_premium_border__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/premium-border */ "../components/premium-border.js");

// import classnames from "classnames"
// import ResponsiveRangeControl from "../../components/RangeControl/responsive-range-control";
// import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
// import PremiumBackgroundControl from "../../components/Premium-Background-Control"
// import AdvancedPopColorControl from '../../components/Color Control/ColorComponent'
// import PremiumTypo from "../../components/premium-typo";
// import PremiumShadow from "../../components/PremiumShadow";
// import PremiumResponsivePadding from "../../components/Premium-Responsive-Padding";
// import PremiumResponsiveMargin from "../../components/Premium-Responsive-Margin";
// import PremiumBorder from "../../components/premium-border";
// const { __ } = wp.i18n
// const { withSelect } = wp.data
// let isBoxUpdated = null;
// const {
//     Component,
//     Fragment,
// } = wp.element
// const {
//     BlockControls,
//     AlignmentToolbar,
//     InspectorControls,
//     ColorPalette,
//     RichText
// } = wp.editor
// const {
//     PanelBody,
//     SelectControl,
//     RangeControl,
//     Toolbar,
//     TextControl,
//     ToggleControl,
//     TextareaControl,
//     TabPanel
// } = wp.components
// class edit extends Component {
//     constructor() {
//         super(...arguments);
//         this.initToggleBox = this.initToggleBox.bind(this);
//     }
//     componentDidMount() {
//         // Assigning id in the attribute.
//         this.props.setAttributes({ block_id: this.props.clientId })
//         this.props.setAttributes({ classMigrate: true })
//         // Pushing Style tag for this block css.
//         const $style = document.createElement("style")
//         $style.setAttribute("id", "premium-style-content-switcher-" + this.props.clientId)
//         document.head.appendChild($style)
//         this.props.setAttributes({ switchCheck: false })
//         setTimeout(this.initToggleBox, 10);
//         this.getPreviewSize = this.getPreviewSize.bind(this);
//     }
//     componentDidUpdate() {
//         clearTimeout(isBoxUpdated);
//         isBoxUpdated = setTimeout(this.initToggleBox, 10);
//     }
//     initToggleBox() {
//         const { block_id, switchCheck } = this.props.attributes;
//         if (!block_id) return null;
//         let toggleBox = document.getElementsByClassName(`premium-content-switcher-toggle-switch-input ${block_id}`);
//         setTimeout(
//             toggleBox[0].addEventListener("click", () => {
//                 this.props.setAttributes({ switchCheck: !switchCheck })
//                 console.log(switchCheck);
//                 if (!switchCheck) {
//                     let switchToggle = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
//                     switchToggle[0].classList.remove("premium-content-switcher-is-visible");
//                     switchToggle[0].classList.add("premium-content-switcher-is-hidden");
//                     let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
//                     switchTogglesecond[0].classList.remove("premium-content-switcher-is-hidden");
//                     switchTogglesecond[0].classList.add("premium-content-switcher-is-visible");
//                 }
//                 else {
//                     let switchToggle = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
//                     switchToggle[0].classList.remove("premium-content-switcher-is-visible");
//                     switchToggle[0].classList.add("premium-content-switcher-is-hidden");
//                     let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
//                     switchTogglesecond[0].classList.remove("premium-content-switcher-is-hidden");
//                     switchTogglesecond[0].classList.add("premium-content-switcher-is-visible");
//                 }
//             })
//             , 10);
//     }
//     getPreviewSize(device, desktopSize, tabletSize, mobileSize) {
//         if (device === 'Mobile') {
//             if (undefined !== mobileSize && '' !== mobileSize) {
//                 return mobileSize;
//             } else if (undefined !== tabletSize && '' !== tabletSize) {
//                 return tabletSize;
//             }
//         } else if (device === 'Tablet') {
//             if (undefined !== tabletSize && '' !== tabletSize) {
//                 return tabletSize;
//             }
//         }
//         return desktopSize;
//     }
//     render() {
//         const { attributes, setAttributes, isSelected } = this.props
//         const {
//             block_id,
//             align,
//             className,
//             showLabel,
//             firstLabel,
//             secondLabel,
//             display,
//             labelTag,
//             firstContent,
//             secondContent,
//             switchCheck,
//             firstcontentlign,
//             secondcontentlign,
//             switcherStyles,
//             // backgroundType,
//             labelStyles,
//             firstLabelBorderTop,
//             firstLabelBorderRight,
//             firstLabelBorderBottom,
//             firstLabelBorderLeft,
//             firstLabelBorderUpdated,
//             firstLabelBorderWidth,
//             firstLabelPaddingT,
//             firstLabelPaddingR,
//             firstLabelPaddingB,
//             firstLabelPaddingL,
//             firstLabelPaddingTTablet,
//             firstLabelPaddingRTablet,
//             firstLabelPaddingBTablet,
//             firstLabelPaddingLTablet,
//             firstLabelPaddingTMobile,
//             firstLabelPaddingRMobile,
//             firstLabelPaddingBMobile,
//             firstLabelPaddingLMobile,
//             secondLabelBorderTop,
//             secondLabelBorderRight,
//             secondLabelBorderBottom,
//             secondLabelBorderLeft,
//             secondLabelBorderUpdated,
//             secondLabelBorderWidth,
//             secondLabelPaddingT,
//             secondLabelPaddingR,
//             secondLabelPaddingB,
//             secondLabelPaddingL,
//             secondLabelPaddingTTablet,
//             secondLabelPaddingRTablet,
//             secondLabelPaddingBTablet,
//             secondLabelPaddingLTablet,
//             secondLabelPaddingTMobile,
//             secondLabelPaddingRMobile,
//             secondLabelPaddingBMobile,
//             secondLabelPaddingLMobile,
//             contentStyles,
//             firstContentStyles,
//             firstContentBorderTop,
//             firstContentBorderRight,
//             firstContentBorderBottom,
//             firstContentBorderLeft,
//             firstContentBorderUpdated,
//             firstContentBorderWidth,
//             firstContentMarginT,
//             firstContentMarginR,
//             firstContentMarginB,
//             firstContentMarginL,
//             firstContentMarginTTablet,
//             firstContentMarginRTablet,
//             firstContentMarginBTablet,
//             firstContentMarginLTablet,
//             firstContentMarginTMobile,
//             firstContentMarginRMobile,
//             firstContentMarginBMobile,
//             firstContentMarginLMobile,
//             contentPaddingT,
//             contentPaddingR,
//             contentPaddingB,
//             contentPaddingL,
//             contentPaddingTTablet,
//             contentPaddingRTablet,
//             contentPaddingBTablet,
//             contentPaddingLTablet,
//             contentPaddingTMobile,
//             contentPaddingRMobile,
//             contentPaddingBMobile,
//             contentPaddingLMobile,
//             secondContentStyles,
//             secondContentBorderTop,
//             secondContentBorderRight,
//             secondContentBorderBottom,
//             secondContentBorderLeft,
//             secondContentBorderUpdated,
//             secondContentBorderWidth,
//             containerStyles,
//             backgroundType,
//             containerBorderTop,
//             containerBorderRight,
//             containerBorderBottom,
//             containerBorderLeft,
//             containerBorderUpdated,
//             containerBorderWidth,
//             containerPaddingT,
//             containerPaddingR,
//             containerPaddingB,
//             containerPaddingL,
//             containerPaddingTTablet,
//             containerPaddingRTablet,
//             containerPaddingBTablet,
//             containerPaddingLTablet,
//             containerPaddingTMobile,
//             containerPaddingRMobile,
//             containerPaddingBMobile,
//             containerPaddingLMobile,
//             containerMarginT,
//             containerMarginR,
//             containerMarginB,
//             containerMarginL,
//             containerMarginTTablet,
//             containerMarginRTablet,
//             containerMarginBTablet,
//             containerMarginLTablet,
//             containerMarginTMobile,
//             containerMarginRMobile,
//             containerMarginBMobile,
//             containerMarginLMobile,
//             backgroundTypeState2,
//             switchSize,
//             switchSizeTablet,
//             switchSizeType,
//             switchSizeMobile,
//             bottomSpacing,
//             bottomSpacingTablet,
//             bottomSpacingMobile,
//             bottomSpacingType,
//             secondStateColor,
//             firstStateColor,
//             switcherBGColor,
//             switchRadius,
//             labelSpacing,
//             labelSpacingTablet,
//             labelSpacingMobile,
//             labelSpacingType,
//             firstLabelColor,
//             firstLabelWeight,
//             firstLabelLetter,
//             firstLabelUpper,
//             firstLabelStyle,
//             firstLabelfontSize,
//             firstLabelfontSizeMobile,
//             firstLabelfontSizeTablet,
//             firstLabelfontSizeType,
//             secondLabelColor,
//             secondLabelWeight,
//             secondLabelLetter,
//             secondLabelUpper,
//             secondLabelStyle,
//             secondLabelfontSize,
//             secondLabelfontSizeMobile,
//             secondLabelfontSizeTablet,
//             secondLabelfontSizeType,
//             shadowColor,
//             shadowBlur,
//             shadowHorizontal,
//             shadowVertical,
//             contentHeight,
//             contentHeightTablet,
//             contentHeightType,
//             contentHeightMobile,
//             firstContentColor,
//             firstContentBGColor,
//             secondContentHeight,
//             secondContentHeightTablet,
//             secondContentHeightType,
//             secondContentHeightMobile,
//             secondContentColor,
//             secondContentBGColor,
//             firstpaddingTop,
//             firstpaddingTopMobile,
//             firstpaddingTopTablet,
//             firstpaddingTopType,
//             firstpaddingLeft,
//             firstpaddingLeftMobile,
//             firstpaddingLeftTablet,
//             firstpaddingLeftType,
//             firstpaddingRight,
//             firstpaddingRightMobile,
//             firstpaddingRightTablet,
//             firstpaddingRightType,
//             firstpaddingBottom,
//             firstpaddingBottomMobile,
//             firstpaddingBottomTablet,
//             firstpaddingBottomType,
//             secondpaddingTop,
//             secondpaddingTopMobile,
//             secondpaddingTopTablet,
//             secondpaddingTopType,
//             secondpaddingLeft,
//             secondpaddingLeftMobile,
//             secondpaddingLeftTablet,
//             secondpaddingLeftType,
//             secondpaddingRight,
//             secondpaddingRightMobile,
//             secondpaddingRightTablet,
//             secondpaddingRightType,
//             secondpaddingBottom,
//             secondpaddingBottomMobile,
//             secondpaddingBottomTablet,
//             secondpaddingBottomType,
//             effect,
//             slide,
//             firstContentfontSize,
//             firstContentfontSizeMobile,
//             firstContentfontSizeTablet,
//             firstContentfontSizeType,
//             firstContentWeight,
//             firstContentLetter,
//             firstContentUpper,
//             firstContentStyle,
//             firstContentborderType,
//             firstContentborderWidth,
//             firstContentborderColor,
//             firstContentborderRadius,
//             secondContentfontSize,
//             secondContentfontSizeType,
//             secondContentfontSizeMobile,
//             secondContentfontSizeTablet,
//             secondContentLetter,
//             secondContentStyle,
//             secondContentWeight,
//             secondContentUpper,
//             secondContentborderType,
//             secondContentborderWidth,
//             secondContentborderColor,
//             secondContentborderRadius
//         } = attributes
//         const DISPLAY = [
//             {
//                 label: __("Block"),
//                 value: "block"
//             },
//             {
//                 label: __("Inline"),
//                 value: "inline"
//             }
//         ];
//         const ALIGNS = ["left", "center", "right"];
//         const EFFECTS = [
//             {
//                 label: __("Fade"),
//                 value: "fade"
//             },
//             {
//                 label: __("Slide"),
//                 value: "slide"
//             }
//         ]
//         const SLIDE = [
//             {
//                 label: __("Top"),
//                 value: "top"
//             },
//             {
//                 label: __("Left"),
//                 value: "left"
//             },
//             {
//                 label: __("Bottom"),
//                 value: "bottom"
//             },
//             {
//                 label: __("Right"),
//                 value: "right"
//             }
//         ]
//         const TAGS = [
//             {
//                 value: "h1",
//                 label: "H1"
//             }, {
//                 value: "h2",
//                 label: "H2"
//             },
//             {
//                 value: "h3",
//                 label: "H3"
//             },
//             {
//                 value: "h4",
//                 label: "H4"
//             },
//             {
//                 value: "h5",
//                 label: "H5"
//             },
//             {
//                 value: "h6",
//                 label: "H6"
//             }
//         ];
//         var element = document.getElementById("premium-style-content-switcher-" + this.props.clientId)
//         if (null != element && "undefined" != typeof element) {
//             // element.innerHTML = styling(this.props)
//         }
//         const SwitcherSize = this.getPreviewSize(this.props.deviceType, switcherStyles[0].switchSize, switcherStyles[0].switchSizeTablet, switcherStyles[0].switchSizeMobile);
//         const SwitcherBorderRadius = this.getPreviewSize(this.props.deviceType, switcherStyles[0].switchRadius, switcherStyles[0].switchRadiusTablet, switcherStyles[0].switchRadiusMobile);
//         const ContainerBorderRadius = this.getPreviewSize(this.props.deviceType, switcherStyles[0].containerRadius, switcherStyles[0].containerRadiusTablet, switcherStyles[0].containerRadiusMobile);
//         const LabelSpacing = this.getPreviewSize(this.props.deviceType, labelStyles[0].labelSpacing, labelStyles[0].labelSpacingTablet, labelStyles[0].labelSpacingMobile);
//         const FirstLabelSize = this.getPreviewSize(this.props.deviceType, labelStyles[0].firstLabelfontSize, labelStyles[0].firstLabelfontSizeTablet, labelStyles[0].firstLabelfontSizeMobile);
//         const FirstLabelPaddingTop = this.getPreviewSize(this.props.deviceType, firstLabelPaddingT, firstLabelPaddingTTablet, firstLabelPaddingTMobile);
//         const FirstLabelPaddingRight = this.getPreviewSize(this.props.deviceType, firstLabelPaddingR, firstLabelPaddingRTablet, firstLabelPaddingRMobile);
//         const FirstLabelPaddingBottom = this.getPreviewSize(this.props.deviceType, firstLabelPaddingB, firstLabelPaddingBTablet, firstLabelPaddingBMobile);
//         const FirstLabelPaddingLeft = this.getPreviewSize(this.props.deviceType, firstLabelPaddingL, firstLabelPaddingLTablet, firstLabelPaddingLMobile);
//         const SecondLabelSize = this.getPreviewSize(this.props.deviceType, labelStyles[0].secondLabelfontSize, labelStyles[0].secondLabelfontSizeTablet, labelStyles[0].secondLabelfontSizeMobile);
//         const SecondLabelPaddingTop = this.getPreviewSize(this.props.deviceType, secondLabelPaddingT, secondLabelPaddingTTablet, secondLabelPaddingTMobile);
//         const SecondLabelPaddingRight = this.getPreviewSize(this.props.deviceType, secondLabelPaddingR, secondLabelPaddingRTablet, secondLabelPaddingRMobile);
//         const SecondLabelPaddingBottom = this.getPreviewSize(this.props.deviceType, secondLabelPaddingB, secondLabelPaddingBTablet, secondLabelPaddingBMobile);
//         const SecondLabelPaddingLeft = this.getPreviewSize(this.props.deviceType, secondLabelPaddingL, secondLabelPaddingLTablet, secondLabelPaddingLMobile);
//         const ContentHeight = this.getPreviewSize(this.props.deviceType, contentStyles[0].contentHeight, contentStyles[0].contentHeightTablet, contentStyles[0].contentHeightMobile);
//         const FirstContentSize = this.getPreviewSize(this.props.deviceType, firstContentStyles[0].firstContentfontSize, firstContentStyles[0].firstContentfontSizeTablet, firstContentStyles[0].firstContentfontSizeMobile);
//         const FirstContentMarginTop = this.getPreviewSize(this.props.deviceType, firstContentMarginT, firstContentMarginTTablet, firstContentMarginTMobile);
//         const FirstContentMarginRight = this.getPreviewSize(this.props.deviceType, firstContentMarginR, firstContentMarginRTablet, firstContentMarginRMobile);
//         const FirstContentMarginBottom = this.getPreviewSize(this.props.deviceType, firstContentMarginB, firstContentMarginBTablet, firstContentMarginBMobile);
//         const FirstContentMarginLeft = this.getPreviewSize(this.props.deviceType, firstContentMarginL, firstContentMarginLTablet, firstContentMarginLMobile);
//         const ContentPaddingTop = this.getPreviewSize(this.props.deviceType, contentPaddingT, contentPaddingTTablet, contentPaddingTMobile);
//         const ContentPaddingRight = this.getPreviewSize(this.props.deviceType, contentPaddingR, contentPaddingRTablet, contentPaddingRMobile);
//         const ContentPaddingBottom = this.getPreviewSize(this.props.deviceType, contentPaddingB, contentPaddingBTablet, contentPaddingBMobile);
//         const ContentPaddingLeft = this.getPreviewSize(this.props.deviceType, contentPaddingL, contentPaddingLTablet, contentPaddingLMobile);
//         const SecondContentSize = this.getPreviewSize(this.props.deviceType, secondContentStyles[0].secondContentfontSize, secondContentStyles[0].secondContentfontSizeTablet, secondContentStyles[0].secondContentfontSizeMobile);
//         const ContainerMarginTop = this.getPreviewSize(this.props.deviceType, containerMarginT, containerMarginTTablet, containerMarginTMobile);
//         const ContainerMarginRight = this.getPreviewSize(this.props.deviceType, containerMarginR, containerMarginRTablet, containerMarginRMobile);
//         const ContainerMarginBottom = this.getPreviewSize(this.props.deviceType, containerMarginB, containerMarginBTablet, containerMarginBMobile);
//         const ContainerMarginLeft = this.getPreviewSize(this.props.deviceType, containerMarginL, containerMarginLTablet, containerMarginLMobile);
//         const ContainerPaddingTop = this.getPreviewSize(this.props.deviceType, containerPaddingT, containerPaddingTTablet, containerPaddingTMobile);
//         const ContainerPaddingRight = this.getPreviewSize(this.props.deviceType, containerPaddingR, containerPaddingRTablet, containerPaddingRMobile);
//         const ContainerPaddingBottom = this.getPreviewSize(this.props.deviceType, containerPaddingB, containerPaddingBTablet, containerPaddingBMobile);
//         const ContainerPaddingLeft = this.getPreviewSize(this.props.deviceType, containerPaddingL, containerPaddingLTablet, containerPaddingLMobile);
//         let btnGradState1, btnGrad2State1, btnbgState1;
//         if (undefined !== backgroundType && 'gradient' === backgroundType) {
//             btnGradState1 = ('transparent' === switcherStyles[0].containerBackState1 || undefined === switcherStyles[0].containerBackState1 ? 'rgba(255,255,255,0)' : switcherStyles[0].containerBackState1);
//             btnGrad2State1 = (undefined !== switcherStyles[0].gradientColorTwoState1 && undefined !== switcherStyles[0].gradientColorTwoState1 && '' !== switcherStyles[0].gradientColorTwoState1 ? switcherStyles[0].gradientColorTwoState1 : '#777');
//             if ('radial' === switcherStyles[0].gradientTypeState1) {
//                 btnbgState1 = `radial-gradient(at ${switcherStyles[0].gradientPositionState1}, ${btnGradState1} ${switcherStyles[0].gradientLocationOneState1}%, ${btnGrad2State1} ${switcherStyles[0].gradientLocationTwoState1}%)`;
//             } else if ('radial' !== switcherStyles[0].gradientTypeState1) {
//                 btnbgState1 = `linear-gradient(${switcherStyles[0].gradientAngleState1}deg, ${btnGradState1} ${switcherStyles[0].gradientLocationOneState1}%, ${btnGrad2State1} ${switcherStyles[0].gradientLocationTwoState1}%)`;
//             }
//         } else {
//             btnbgState1 = switcherStyles[0].backgroundImageURLState1 ? `url('${switcherStyles[0].backgroundImageURLState1}')` : ''
//         }
//         let btnGrad, btnGrad2, btnbg;
//         if (undefined !== backgroundType && 'gradient' === backgroundType) {
//             btnGrad = ('transparent' === containerStyles[0].containerBack || undefined === containerStyles[0].containerBack ? 'rgba(255,255,255,0)' : containerStyles[0].containerBack);
//             btnGrad2 = (undefined !== containerStyles[0].gradientColorTwo && undefined !== containerStyles[0].gradientColorTwo && '' !== containerStyles[0].gradientColorTwo ? containerStyles[0].gradientColorTwo : '#777');
//             if ('radial' === containerStyles[0].gradientType) {
//                 btnbg = `radial-gradient(at ${containerStyles[0].gradientPosition}, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
//             } else if ('radial' !== containerStyles[0].gradientType) {
//                 btnbg = `linear-gradient(${containerStyles[0].gradientAngle}deg, ${btnGrad} ${containerStyles[0].gradientLocationOne}%, ${btnGrad2} ${containerStyles[0].gradientLocationTwo}%)`;
//             }
//         } else {
//             btnbg = containerStyles[0].backgroundImageURL ? `url('${containerStyles[0].backgroundImageURL}')` : ''
//         }
//         const renderCss = (
//             <style>
//                 {`
//                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
//                         border-radius: ${ContainerBorderRadius}${switcherStyles[0].containerRadiusType} !important;
//                         // background-color: ${backgroundType === "solid" ? switcherStyles[0].containerBackState1 : "#6ec1e4"} !important;
//                         // background-image: ${btnbgState1} !important;
//                         // background-repeat: ${switcherStyles[0].backgroundRepeatState1} !important;
//                         // background-position: ${switcherStyles[0].backgroundPositionState1} !important;
//                         // background-size: ${switcherStyles[0].backgroundSizeState1} !important;
//                         // background-attachment: ${switcherStyles[0].fixedState1 ? "fixed" : "unset"} !important;
//                         box-shadow: ${switcherStyles[0].containerShadowHorizontal}px ${switcherStyles[0].containerShadowVertical}px ${switcherStyles[0].containerShadowBlur}px ${switcherStyles[0].containerShadowColor} ${switcherStyles[0].containerShadowPosition};
//                     }
//                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
//                         border-radius: ${SwitcherBorderRadius}${switcherStyles[0].switchRadiusType} !important;
//                         box-shadow: ${switcherStyles[0].switchShadowHorizontal}px ${switcherStyles[0].switchShadowVertical}px ${switcherStyles[0].switchShadowBlur}px ${switcherStyles[0].switchShadowColor} ${switcherStyles[0].switchShadowPosition};
//                     }
//                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label {
//                         margin-right: ${LabelSpacing}px !important;
//                     }
//                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label {
//                         margin-left: ${LabelSpacing}px !important;
//                     }
//                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-first-label {
//                         margin-bottom: ${LabelSpacing}px !important;
//                     }
//                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-second-label {
//                         margin-top: ${LabelSpacing}px !important;
//                     }
//                 `}
//             </style>
//         );
//         const saveSwitcherStyles = (value) => {
//             const newUpdate = switcherStyles.map((item, index) => {
//                 if (0 === index) {
//                     item = { ...item, ...value };
//                 }
//                 return item;
//             });
//             setAttributes({
//                 switcherStyles: newUpdate,
//             });
//         }
//         const saveLabelStyles = (value) => {
//             const newUpdate = labelStyles.map((item, index) => {
//                 if (0 === index) {
//                     item = { ...item, ...value };
//                 }
//                 return item;
//             });
//             setAttributes({
//                 labelStyles: newUpdate,
//             });
//         }
//         const saveContentStyles = (value) => {
//             const newUpdate = contentStyles.map((item, index) => {
//                 if (0 === index) {
//                     item = { ...item, ...value };
//                 }
//                 return item;
//             });
//             setAttributes({
//                 contentStyles: newUpdate,
//             });
//         }
//         const saveFirstContentStyles = (value) => {
//             const newUpdate = firstContentStyles.map((item, index) => {
//                 if (0 === index) {
//                     item = { ...item, ...value };
//                 }
//                 return item;
//             });
//             setAttributes({
//                 firstContentStyles: newUpdate,
//             });
//         }
//         const saveSecondContentStyles = (value) => {
//             const newUpdate = secondContentStyles.map((item, index) => {
//                 if (0 === index) {
//                     item = { ...item, ...value };
//                 }
//                 return item;
//             });
//             setAttributes({
//                 secondContentStyles: newUpdate,
//             });
//         }
//         const saveContainerStyles = (value) => {
//             const newUpdate = containerStyles.map((item, index) => {
//                 if (0 === index) {
//                     item = { ...item, ...value };
//                 }
//                 return item;
//             });
//             setAttributes({
//                 containerStyles: newUpdate,
//             });
//         }
//         const mainClasses = classnames(className, "premium-content-switcher");
//         return [
//             isSelected && (
//                 <BlockControls>
//                     <AlignmentToolbar
//                         value={align}
//                         onChange={(value) => {
//                             setAttributes({ align: value })
//                         }}
//                     />
//                 </BlockControls>
//             ),
//             isSelected && (
//                 <InspectorControls>
//                     <PanelBody
//                         title={__("Switcher")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <ToggleControl
//                             label={__("Show Labels")}
//                             checked={showLabel}
//                             onChange={newCheck => setAttributes({ showLabel: newCheck })}
//                         />
//                         {showLabel && (
//                             <Fragment>
//                                 <TextControl
//                                     label={__("First Label")}
//                                     value={firstLabel}
//                                     onChange={value => setAttributes({ firstLabel: value })}
//                                 />
//                                 <TextControl
//                                     label={__("Second Label")}
//                                     value={secondLabel}
//                                     onChange={value => setAttributes({ secondLabel: value })}
//                                 />
//                                 <SelectControl
//                                     label={__("HTML Tag")}
//                                     options={TAGS}
//                                     value={labelTag}
//                                     onChange={(newValue) => setAttributes({ labelTag: newValue })}
//                                 />
//                                 <SelectControl
//                                     label={__("Display")}
//                                     options={DISPLAY}
//                                     value={display}
//                                     onChange={newValue => setAttributes({ display: newValue })}
//                                 />
//                             </Fragment>
//                         )}
//                         <p>{__("Alignment")}</p>
//                         <Toolbar
//                             controls={ALIGNS.map(contentAlign => ({
//                                 icon: "editor-align" + contentAlign,
//                                 isActive: contentAlign === align,
//                                 onClick: () => setAttributes({ align: contentAlign })
//                             }))}
//                         />
//                         <SelectControl
//                             label={__("Effect")}
//                             options={EFFECTS}
//                             value={effect}
//                             onChange={newEffect => setAttributes({ effect: newEffect })}
//                         />
//                         {effect == 'slide' &&
//                             <SelectControl
//                                 label={__("Slide Direction")}
//                                 options={SLIDE}
//                                 value={slide}
//                                 onChange={newEffect => setAttributes({ slide: newEffect })}
//                             />
//                         }
//                     </PanelBody>
//                     <PanelBody
//                         title={__("Content 1")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <TextareaControl
//                             label={__("Content", 'premium-block-for-gutenberg')}
//                             value={firstContent}
//                             onChange={newEffect => setAttributes({ firstContent: newEffect })}
//                         />
//                         <p>{__("Alignment")}</p>
//                         <Toolbar
//                             controls={ALIGNS.map(contentAlign => ({
//                                 icon: "editor-align" + contentAlign,
//                                 isActive: contentAlign === firstcontentlign,
//                                 onClick: () => setAttributes({ firstcontentlign: contentAlign })
//                             }))}
//                         />
//                     </PanelBody>
//                     <PanelBody
//                         title={__("Content 2")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <TextareaControl
//                             label={__("Content", 'premium-block-for-gutenberg')}
//                             value={secondContent}
//                             onChange={newEffect => setAttributes({ secondContent: newEffect })}
//                         />
//                         <p>{__("Alignment")}</p>
//                         <Toolbar
//                             controls={ALIGNS.map(contentAlign => ({
//                                 icon: "editor-align" + contentAlign,
//                                 isActive: contentAlign === secondcontentlign,
//                                 onClick: () => setAttributes({ secondcontentlign: contentAlign })
//                             }))}
//                         />
//                     </PanelBody>
//                     <PanelBody
//                         title={__("Switcher Style")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <ResponsiveRangeControl
//                             label={__("Size", 'premium-block-for-gutenberg')}
//                             value={switcherStyles[0].switchSize}
//                             tabletValue={switcherStyles[0].switchSizeTablet}
//                             mobileValue={switcherStyles[0].switchSizeMobile}
//                             onChange={(value) => saveSwitcherStyles({ switchSize: value })}
//                             onChangeTablet={(value) => saveSwitcherStyles({ switchSizeTablet: value })}
//                             onChangeMobile={(value) => saveSwitcherStyles({ switchSizeMobile: value })}
//                             showUnit={false}
//                             defaultValue={15}
//                             min={1}
//                             max={40}
//                         />
//                         <ResponsiveRangeControl
//                             label={__("Controller Border Radius", 'premium-block-for-gutenberg')}
//                             value={switcherStyles[0].containerRadius}
//                             tabletValue={switcherStyles[0].containerRadiusTablet}
//                             mobileValue={switcherStyles[0].containerRadiusMobile}
//                             onChange={(value) => saveSwitcherStyles({ containerRadius: value })}
//                             onChangeTablet={(value) => saveSwitcherStyles({ containerRadiusTablet: value })}
//                             onChangeMobile={(value) => saveSwitcherStyles({ containerRadiusMobile: value })}
//                             onChangeUnit={(key) =>
//                                 saveSwitcherStyles({ containerRadiusType: key })
//                             }
//                             unit={switcherStyles[0].containerRadiusType}
//                             showUnit={true}
//                             defaultValue={50}
//                             min={1}
//                             max={100}
//                         />
//                         <ResponsiveRangeControl
//                             label={__("Switcher Border Radius", 'premium-block-for-gutenberg')}
//                             value={switcherStyles[0].switchRadius}
//                             tabletValue={switcherStyles[0].switchRadiusTablet}
//                             mobileValue={switcherStyles[0].switchRadiusMobile}
//                             onChange={(value) => saveSwitcherStyles({ switchRadius: value })}
//                             onChangeTablet={(value) => saveSwitcherStyles({ switchRadiusTablet: value })}
//                             onChangeMobile={(value) => saveSwitcherStyles({ switchRadiusMobile: value })}
//                             onChangeUnit={(key) =>
//                                 saveSwitcherStyles({ switchRadiusType: key })
//                             }
//                             unit={switcherStyles[0].switchRadiusType}
//                             showUnit={true}
//                             defaultValue={1.5}
//                             min={1}
//                             max={100}
//                         />
//                         {/* <h3>{__("Controller State 1 Color")}</h3> */}
//                         <PremiumBackgroundControl
//                             setAttributes={setAttributes}
//                             saveContainerStyle={saveSwitcherStyles}
//                             backgroundType={backgroundType}
//                             backgroundColor={switcherStyles[0].containerBackState1}
//                             backgroundImageID={switcherStyles[0].backgroundImageIDState1}
//                             backgroundImageURL={switcherStyles[0].backgroundImageURLState1}
//                             backgroundPosition={switcherStyles[0].backgroundPositionState1}
//                             backgroundRepeat={switcherStyles[0].backgroundRepeatState1}
//                             backgroundSize={switcherStyles[0].backgroundSizeState1}
//                             fixed={switcherStyles[0].fixedState1}
//                             gradientLocationOne={switcherStyles[0].gradientLocationOneState1}
//                             gradientColorTwo={switcherStyles[0].gradientColorTwoState1}
//                             gradientLocationTwo={switcherStyles[0].gradientLocationTwoState1}
//                             gradientAngle={switcherStyles[0].gradientAngleState1}
//                             gradientPosition={switcherStyles[0].gradientPositionState1}
//                             gradientType={switcherStyles[0].gradientTypeState1}
//                         />
//                         {/* <h3>{__("Controller State 2 Color")}</h3> */}
//                         {/* <PremiumBackgroundControl
//                             setAttributes={setAttributes}
//                             saveContainerStyle={saveSwitcherStyles}
//                             backgroundType={backgroundTypeState2}
//                             backgroundColor={switcherStyles[0].containerBackState2}
//                             backgroundImageID={switcherStyles[0].backgroundImageIDState2}
//                             backgroundImageURL={switcherStyles[0].backgroundImageURLState2}
//                             backgroundPosition={switcherStyles[0].backgroundPositionState2}
//                             backgroundRepeat={switcherStyles[0].backgroundRepeatState2}
//                             backgroundSize={switcherStyles[0].backgroundSizeState2}
//                             fixed={switcherStyles[0].fixedState2}
//                             gradientLocationOne={switcherStyles[0].gradientLocationOneState2}
//                             gradientColorTwo={switcherStyles[0].gradientColorTwoState2}
//                             gradientLocationTwo={switcherStyles[0].gradientLocationTwoState2}
//                             gradientAngle={switcherStyles[0].gradientAngleState2}
//                             gradientPosition={switcherStyles[0].gradientPositionState2}
//                             gradientType={switcherStyles[0].gradientTypeState2}
//                         /> */}
//                         <PremiumShadow
//                             label={__("Controller Shadow", 'premium-blocks-for-gutenberg')}
//                             boxShadow={true}
//                             color={switcherStyles[0].containerShadowColor}
//                             blur={switcherStyles[0].containerShadowBlur}
//                             horizontal={switcherStyles[0].containerShadowHorizontal}
//                             vertical={switcherStyles[0].containerShadowVertical}
//                             position={switcherStyles[0].containerShadowPosition}
//                             onChangeColor={newColor =>
//                                 saveSwitcherStyles({ containerShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveSwitcherStyles({ containerShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveSwitcherStyles({ containerShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveSwitcherStyles({ containerShadowVertical: newValue })
//                             }
//                             onChangePosition={newValue =>
//                                 saveSwitcherStyles({ containerShadowPosition: newValue })
//                             }
//                         />
//                         <PremiumShadow
//                             label={__("Switcher Shadow", 'premium-blocks-for-gutenberg')}
//                             boxShadow={true}
//                             color={switcherStyles[0].switchShadowColor}
//                             blur={switcherStyles[0].switchShadowBlur}
//                             horizontal={switcherStyles[0].switchShadowHorizontal}
//                             vertical={switcherStyles[0].switchShadowVertical}
//                             position={switcherStyles[0].switchShadowPosition}
//                             onChangeColor={newColor =>
//                                 saveSwitcherStyles({ switchShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveSwitcherStyles({ switchShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveSwitcherStyles({ switchShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveSwitcherStyles({ switchShadowVertical: newValue })
//                             }
//                             onChangePosition={newValue =>
//                                 saveSwitcherStyles({ switchShadowPosition: newValue })
//                             }
//                         />
//                     </PanelBody>
//                     {showLabel && (<PanelBody
//                         title={__("Labels Style")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <ResponsiveRangeControl
//                             label={__("Spacing", 'premium-block-for-gutenberg')}
//                             value={labelStyles[0].labelSpacing}
//                             tabletValue={labelStyles[0].labelSpacingTablet}
//                             mobileValue={labelStyles[0].labelSpacingMobile}
//                             onChange={(value) => saveLabelStyles({ labelSpacing: value })}
//                             onChangeTablet={(value) => saveLabelStyles({ labelSpacingTablet: value })}
//                             onChangeMobile={(value) => saveLabelStyles({ labelSpacingMobile: value })}
//                             showUnit={false}
//                             defaultValue={15}
//                             min={1}
//                             max={100}
//                         />
//                         <h2 className="premium-content-switcher-labels-style">{__("First Label")}</h2>
//                         <AdvancedPopColorControl
//                             label={__("Text Color", 'premium-block-for-gutenberg')}
//                             colorValue={labelStyles[0].firstLabelColor}
//                             colorDefault={''}
//                             onColorChange={newValue =>
//                                 saveLabelStyles({
//                                     firstLabelColor: newValue
//                                 })
//                             }
//                         />
//                         <PremiumTypo
//                             components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
//                             setAttributes={saveLabelStyles}
//                             fontSizeType={{ value: labelStyles[0].firstLabelfontSizeType, label: __("firstLabelfontSizeType") }}
//                             fontSize={labelStyles[0].firstLabelfontSize}
//                             fontSizeMobile={labelStyles[0].firstLabelfontSizeMobile}
//                             fontSizeTablet={labelStyles[0].firstLabelfontSizeTablet}
//                             onChangeSize={newSize => saveLabelStyles({ firstLabelfontSize: newSize })}
//                             onChangeTabletSize={newSize => saveLabelStyles({ firstLabelfontSizeTablet: newSize })}
//                             onChangeMobileSize={newSize => saveLabelStyles({ firstLabelfontSizeMobile: newSize })}
//                             weight={labelStyles[0].firstLabelWeight}
//                             style={labelStyles[0].firstLabelStyle}
//                             spacing={labelStyles[0].firstLabelLetter}
//                             upper={labelStyles[0].firstLabelUpper}
//                             line={labelStyles[0].firstLabelLine}
//                             fontFamily={labelStyles[0].firstLabelFontFamily}
//                             onChangeWeight={newWeight =>
//                                 saveLabelStyles({ firstLabelWeight: newWeight || 500 })
//                             }
//                             onChangeStyle={newStyle =>
//                                 saveLabelStyles({ firstLabelStyle: newStyle })
//                             }
//                             onChangeSpacing={newValue =>
//                                 saveLabelStyles({ firstLabelLetter: newValue })
//                             }
//                             onChangeUpper={check => saveLabelStyles({ firstLabelUpper: check })}
//                             onChangeLine={newValue => saveLabelStyles({ firstLabelLine: newValue })}
//                             onChangeFamily={(fontFamily) => saveLabelStyles({ firstLabelFontFamily: fontFamily })}
//                         />
//                         <PremiumShadow
//                             label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
//                             color={labelStyles[0].firstLabelShadowColor}
//                             blur={labelStyles[0].firstLabelShadowBlur}
//                             horizontal={labelStyles[0].firstLabelShadowHorizontal}
//                             vertical={labelStyles[0].firstLabelShadowVertical}
//                             onChangeColor={newColor =>
//                                 saveLabelStyles({ firstLabelShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveLabelStyles({ firstLabelShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveLabelStyles({ firstLabelShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveLabelStyles({ firstLabelShadowVertical: newValue })
//                             }
//                         />
//                         <PremiumBorder
//                             borderType={labelStyles[0].firstLabelborderType}
//                             borderWidth={firstLabelBorderWidth}
//                             top={firstLabelBorderTop}
//                             right={firstLabelBorderRight}
//                             bottom={firstLabelBorderBottom}
//                             left={firstLabelBorderLeft}
//                             borderColor={labelStyles[0].firstLabelborderColor}
//                             borderRadius={labelStyles[0].firstLabelborderRadius}
//                             onChangeType={newType => saveLabelStyles({ firstLabelborderType: newType })}
//                             onChangeWidth={({ top, right, bottom, left }) =>
//                                 setAttributes({
//                                     firstLabelBorderUpdated: true,
//                                     firstLabelBorderTop: top,
//                                     firstLabelBorderRight: right,
//                                     firstLabelBorderBottom: bottom,
//                                     firstLabelBorderLeft: left,
//                                 })
//                             }
//                             onChangeColor={colorValue =>
//                                 saveLabelStyles({ firstLabelborderColor: colorValue })
//                             }
//                             onChangeRadius={newrRadius =>
//                                 saveLabelStyles({ firstLabelborderRadius: newrRadius })
//                             }
//                         />
//                         <PremiumShadow
//                             label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
//                             boxShadow={true}
//                             color={labelStyles[0].firstLabelBoxShadowColor}
//                             blur={labelStyles[0].firstLabelBoxShadowBlur}
//                             horizontal={labelStyles[0].firstLabelBoxShadowHorizontal}
//                             vertical={labelStyles[0].firstLabelBoxShadowVertical}
//                             position={labelStyles[0].firstLabelBoxShadowPosition}
//                             onChangeColor={newColor =>
//                                 saveLabelStyles({ firstLabelBoxShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveLabelStyles({ firstLabelBoxShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveLabelStyles({ firstLabelBoxShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveLabelStyles({ firstLabelBoxShadowVertical: newValue })
//                             }
//                             onChangePosition={newValue =>
//                                 saveLabelStyles({ firstLabelBoxShadowPosition: newValue })
//                             }
//                         />
//                         <PremiumResponsivePadding
//                             paddingTop={firstLabelPaddingT}
//                             paddingRight={firstLabelPaddingR}
//                             paddingBottom={firstLabelPaddingB}
//                             paddingLeft={firstLabelPaddingL}
//                             paddingTopTablet={firstLabelPaddingTTablet}
//                             paddingRightTablet={firstLabelPaddingRTablet}
//                             paddingBottomTablet={firstLabelPaddingBTablet}
//                             paddingLeftTablet={firstLabelPaddingLTablet}
//                             paddingTopMobile={firstLabelPaddingTMobile}
//                             paddingRightMobile={firstLabelPaddingRMobile}
//                             paddingBottomMobile={firstLabelPaddingBMobile}
//                             paddingLeftMobile={firstLabelPaddingLMobile}
//                             showUnits={true}
//                             selectedUnit={labelStyles[0].firstLabelPaddingType}
//                             onChangePadSizeUnit={newvalue => saveLabelStyles({ firstLabelPaddingType: newvalue })}
//                             onChangePaddingTop={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstLabelPaddingT: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstLabelPaddingTTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstLabelPaddingTMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingRight={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstLabelPaddingR: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstLabelPaddingRTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstLabelPaddingRMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingBottom={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstLabelPaddingB: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstLabelPaddingBTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstLabelPaddingBMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingLeft={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstLabelPaddingL: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstLabelPaddingLTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstLabelPaddingLMobile: newValue })
//                                     }
//                                 }
//                             }
//                         />
//                         <hr />
//                         <h2 className="premium-content-switcher-labels-style">{__("Second Label")}</h2>
//                         <AdvancedPopColorControl
//                             label={__("Text Color", 'premium-block-for-gutenberg')}
//                             colorValue={labelStyles[0].secondLabelColor}
//                             colorDefault={''}
//                             onColorChange={newValue =>
//                                 saveLabelStyles({
//                                     secondLabelColor: newValue
//                                 })
//                             }
//                         />
//                         <PremiumTypo
//                             components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
//                             setAttributes={saveLabelStyles}
//                             fontSizeType={{ value: labelStyles[0].secondLabelfontSizeType, label: __("secondLabelfontSizeType") }}
//                             fontSize={labelStyles[0].secondLabelfontSize}
//                             fontSizeMobile={labelStyles[0].secondLabelfontSizeMobile}
//                             fontSizeTablet={labelStyles[0].secondLabelfontSizeTablet}
//                             onChangeSize={newSize => saveLabelStyles({ secondLabelfontSize: newSize })}
//                             onChangeTabletSize={newSize => saveLabelStyles({ secondLabelfontSizeTablet: newSize })}
//                             onChangeMobileSize={newSize => saveLabelStyles({ secondLabelfontSizeMobile: newSize })}
//                             weight={labelStyles[0].secondLabelWeight}
//                             style={labelStyles[0].secondLabelStyle}
//                             spacing={labelStyles[0].secondLabelLetter}
//                             upper={labelStyles[0].secondLabelUpper}
//                             line={labelStyles[0].secondLabelLine}
//                             fontFamily={labelStyles[0].secondLabelFontFamily}
//                             onChangeWeight={newWeight =>
//                                 saveLabelStyles({ secondLabelWeight: newWeight || 500 })
//                             }
//                             onChangeStyle={newStyle =>
//                                 saveLabelStyles({ secondLabelStyle: newStyle })
//                             }
//                             onChangeSpacing={newValue =>
//                                 saveLabelStyles({ secondLabelLetter: newValue })
//                             }
//                             onChangeUpper={check => saveLabelStyles({ secondLabelUpper: check })}
//                             onChangeLine={newValue => saveLabelStyles({ secondLabelLine: newValue })}
//                             onChangeFamily={(fontFamily) => saveLabelStyles({ secondLabelFontFamily: fontFamily })}
//                         />
//                         <PremiumShadow
//                             label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
//                             color={labelStyles[0].secondLabelShadowColor}
//                             blur={labelStyles[0].secondLabelShadowBlur}
//                             horizontal={labelStyles[0].secondLabelShadowHorizontal}
//                             vertical={labelStyles[0].secondLabelShadowVertical}
//                             onChangeColor={newColor =>
//                                 saveLabelStyles({ secondLabelShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveLabelStyles({ secondLabelShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveLabelStyles({ secondLabelShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveLabelStyles({ secondLabelShadowVertical: newValue })
//                             }
//                         />
//                         <PremiumBorder
//                             borderType={labelStyles[0].secondLabelborderType}
//                             borderWidth={secondLabelBorderWidth}
//                             top={secondLabelBorderTop}
//                             right={secondLabelBorderRight}
//                             bottom={secondLabelBorderBottom}
//                             left={secondLabelBorderLeft}
//                             borderColor={labelStyles[0].secondLabelborderColor}
//                             borderRadius={labelStyles[0].secondLabelborderRadius}
//                             onChangeType={newType => saveLabelStyles({ secondLabelborderType: newType })}
//                             onChangeWidth={({ top, right, bottom, left }) =>
//                                 setAttributes({
//                                     secondLabelBorderUpdated: true,
//                                     secondLabelBorderTop: top,
//                                     secondLabelBorderRight: right,
//                                     secondLabelBorderBottom: bottom,
//                                     secondLabelBorderLeft: left,
//                                 })
//                             }
//                             onChangeColor={colorValue =>
//                                 saveLabelStyles({ secondLabelborderColor: colorValue })
//                             }
//                             onChangeRadius={newrRadius =>
//                                 saveLabelStyles({ secondLabelborderRadius: newrRadius })
//                             }
//                         />
//                         <PremiumShadow
//                             label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
//                             boxShadow={true}
//                             color={labelStyles[0].secondLabelBoxShadowColor}
//                             blur={labelStyles[0].secondLabelBoxShadowBlur}
//                             horizontal={labelStyles[0].secondLabelBoxShadowHorizontal}
//                             vertical={labelStyles[0].secondLabelBoxShadowVertical}
//                             position={labelStyles[0].secondLabelBoxShadowPosition}
//                             onChangeColor={newColor =>
//                                 saveLabelStyles({ secondLabelBoxShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveLabelStyles({ secondLabelBoxShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveLabelStyles({ secondLabelBoxShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveLabelStyles({ secondLabelBoxShadowVertical: newValue })
//                             }
//                             onChangePosition={newValue =>
//                                 saveLabelStyles({ secondLabelBoxShadowPosition: newValue })
//                             }
//                         />
//                         <PremiumResponsivePadding
//                             paddingTop={secondLabelPaddingT}
//                             paddingRight={secondLabelPaddingR}
//                             paddingBottom={secondLabelPaddingB}
//                             paddingLeft={secondLabelPaddingL}
//                             paddingTopTablet={secondLabelPaddingTTablet}
//                             paddingRightTablet={secondLabelPaddingRTablet}
//                             paddingBottomTablet={secondLabelPaddingBTablet}
//                             paddingLeftTablet={secondLabelPaddingLTablet}
//                             paddingTopMobile={secondLabelPaddingTMobile}
//                             paddingRightMobile={secondLabelPaddingRMobile}
//                             paddingBottomMobile={secondLabelPaddingBMobile}
//                             paddingLeftMobile={secondLabelPaddingLMobile}
//                             showUnits={true}
//                             selectedUnit={labelStyles[0].secondLabelPaddingType}
//                             onChangePadSizeUnit={newvalue => saveLabelStyles({ secondLabelPaddingType: newvalue })}
//                             onChangePaddingTop={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ secondLabelPaddingT: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ secondLabelPaddingTTablet: newValue })
//                                     } else {
//                                         setAttributes({ secondLabelPaddingTMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingRight={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ secondLabelPaddingR: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ secondLabelPaddingRTablet: newValue })
//                                     } else {
//                                         setAttributes({ secondLabelPaddingRMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingBottom={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ secondLabelPaddingB: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ secondLabelPaddingBTablet: newValue })
//                                     } else {
//                                         setAttributes({ secondLabelPaddingBMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingLeft={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ secondLabelPaddingL: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ secondLabelPaddingLTablet: newValue })
//                                     } else {
//                                         setAttributes({ secondLabelPaddingLMobile: newValue })
//                                     }
//                                 }
//                             }
//                         />
//                     </PanelBody>
//                     )}
//                     <PanelBody
//                         title={__("Content Style")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <ResponsiveRangeControl
//                             label={__("Height", 'premium-block-for-gutenberg')}
//                             value={contentStyles[0].contentHeight}
//                             tabletValue={contentStyles[0].contentHeightTablet}
//                             mobileValue={contentStyles[0].contentHeightMobile}
//                             onChange={(value) => saveContentStyles({ contentHeight: value })}
//                             onChangeTablet={(value) => saveContentStyles({ contentHeightTablet: value })}
//                             onChangeMobile={(value) => saveContentStyles({ contentHeightMobile: value })}
//                             onChangeUnit={(key) =>
//                                 saveContentStyles({ contentHeightType: key })
//                             }
//                             unit={contentStyles[0].contentHeightType}
//                             showUnit={true}
//                             defaultValue={100}
//                             min={1}
//                             max={1000}
//                         />
//                         <TabPanel
//                             className="premium-color-tabpanel"
//                             activeClass="active-tab"
//                             tabs={[
//                                 {
//                                     name: "first",
//                                     title: "First Content",
//                                     className: "premium-tab",
//                                 },
//                                 {
//                                     name: "second",
//                                     title: "Second Content",
//                                     className: "premium-tab",
//                                 },
//                             ]}
//                         >
//                             {(tab) => {
//                                 let tabout;
//                                 if ("first" === tab.name) {
//                                     tabout = (
//                                         <Fragment>
//                                             <AdvancedPopColorControl
//                                                 label={__("Text Color", 'premium-block-for-gutenberg')}
//                                                 colorValue={firstContentStyles[0].firstContentColor}
//                                                 colorDefault={''}
//                                                 onColorChange={newValue =>
//                                                     saveFirstContentStyles({
//                                                         firstContentColor: newValue
//                                                     })
//                                                 }
//                                             />
//                                             <AdvancedPopColorControl
//                                                 label={__("Background Color", 'premium-block-for-gutenberg')}
//                                                 colorValue={firstContentStyles[0].firstContentBGColor}
//                                                 colorDefault={''}
//                                                 onColorChange={newValue =>
//                                                     saveFirstContentStyles({
//                                                         firstContentBGColor: newValue
//                                                     })
//                                                 }
//                                             />
//                                             <PremiumTypo
//                                                 components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
//                                                 setAttributes={saveFirstContentStyles}
//                                                 fontSizeType={{ value: firstContentStyles[0].firstContentfontSizeType, label: __("firstContentfontSizeType") }}
//                                                 fontSize={firstContentStyles[0].firstContentfontSize}
//                                                 fontSizeMobile={firstContentStyles[0].firstContentfontSizeMobile}
//                                                 fontSizeTablet={firstContentStyles[0].firstContentfontSizeTablet}
//                                                 onChangeSize={newSize => saveFirstContentStyles({ firstContentfontSize: newSize })}
//                                                 onChangeTabletSize={newSize => saveFirstContentStyles({ firstContentfontSizeTablet: newSize })}
//                                                 onChangeMobileSize={newSize => saveFirstContentStyles({ firstContentfontSizeMobile: newSize })}
//                                                 weight={firstContentStyles[0].firstContentWeight}
//                                                 style={firstContentStyles[0].firstContentStyle}
//                                                 spacing={firstContentStyles[0].firstContentLetter}
//                                                 upper={firstContentStyles[0].firstContentUpper}
//                                                 line={firstContentStyles[0].firstContentLine}
//                                                 fontFamily={firstContentStyles[0].firstContentFontFamily}
//                                                 onChangeWeight={newWeight =>
//                                                     saveFirstContentStyles({ firstContentWeight: newWeight || 500 })
//                                                 }
//                                                 onChangeStyle={newStyle =>
//                                                     saveFirstContentStyles({ firstContentStyle: newStyle })
//                                                 }
//                                                 onChangeSpacing={newValue =>
//                                                     saveFirstContentStyles({ firstContentLetter: newValue })
//                                                 }
//                                                 onChangeUpper={check => saveFirstContentStyles({ firstContentUpper: check })}
//                                                 onChangeLine={newValue => saveFirstContentStyles({ firstContentLine: newValue })}
//                                                 onChangeFamily={(fontFamily) => saveFirstContentStyles({ firstContentFontFamily: fontFamily })}
//                                             />
//                                             <PremiumShadow
//                                                 label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
//                                                 color={firstContentStyles[0].firstContentShadowColor}
//                                                 blur={firstContentStyles[0].firstContentShadowBlur}
//                                                 horizontal={firstContentStyles[0].firstContentShadowHorizontal}
//                                                 vertical={firstContentStyles[0].firstContentShadowVertical}
//                                                 onChangeColor={newColor =>
//                                                     saveFirstContentStyles({ firstContentShadowColor: newColor })
//                                                 }
//                                                 onChangeBlur={newBlur => saveFirstContentStyles({ firstContentShadowBlur: newBlur })}
//                                                 onChangehHorizontal={newValue =>
//                                                     saveFirstContentStyles({ firstContentShadowHorizontal: newValue })
//                                                 }
//                                                 onChangeVertical={newValue =>
//                                                     saveFirstContentStyles({ firstContentShadowVertical: newValue })
//                                                 }
//                                             />
//                                             <PremiumBorder
//                                                 borderType={firstContentStyles[0].firstContentborderType}
//                                                 borderWidth={firstContentBorderWidth}
//                                                 top={firstContentBorderTop}
//                                                 right={firstContentBorderRight}
//                                                 bottom={firstContentBorderBottom}
//                                                 left={firstContentBorderLeft}
//                                                 borderColor={firstContentStyles[0].firstContentborderColor}
//                                                 borderRadius={firstContentStyles[0].firstContentborderRadius}
//                                                 onChangeType={newType => saveFirstContentStyles({ firstContentborderType: newType })}
//                                                 onChangeWidth={({ top, right, bottom, left }) =>
//                                                     setAttributes({
//                                                         firstContentBorderUpdated: true,
//                                                         firstContentBorderTop: top,
//                                                         firstContentBorderRight: right,
//                                                         firstContentBorderBottom: bottom,
//                                                         firstContentBorderLeft: left,
//                                                     })
//                                                 }
//                                                 onChangeColor={colorValue =>
//                                                     saveFirstContentStyles({ firstContentborderColor: colorValue })
//                                                 }
//                                                 onChangeRadius={newrRadius =>
//                                                     saveFirstContentStyles({ firstContentborderRadius: newrRadius })
//                                                 }
//                                             />
//                                             <PremiumShadow
//                                                 label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
//                                                 boxShadow={true}
//                                                 color={firstContentStyles[0].firstContentBoxShadowColor}
//                                                 blur={firstContentStyles[0].firstContentBoxShadowBlur}
//                                                 horizontal={firstContentStyles[0].firstContentBoxShadowHorizontal}
//                                                 vertical={firstContentStyles[0].firstContentBoxShadowVertical}
//                                                 position={firstContentStyles[0].firstContentBoxShadowPosition}
//                                                 onChangeColor={newColor =>
//                                                     saveFirstContentStyles({ firstContentBoxShadowColor: newColor })
//                                                 }
//                                                 onChangeBlur={newBlur => saveFirstContentStyles({ firstContentBoxShadowBlur: newBlur })}
//                                                 onChangehHorizontal={newValue =>
//                                                     saveFirstContentStyles({ firstContentBoxShadowHorizontal: newValue })
//                                                 }
//                                                 onChangeVertical={newValue =>
//                                                     saveFirstContentStyles({ firstContentBoxShadowVertical: newValue })
//                                                 }
//                                                 onChangePosition={newValue =>
//                                                     saveFirstContentStyles({ firstContentBoxShadowPosition: newValue })
//                                                 }
//                                             />
//                                         </Fragment>
//                                     );
//                                 }
//                                 if ("second" === tab.name) {
//                                     tabout = (
//                                         <Fragment>
//                                             <AdvancedPopColorControl
//                                                 label={__("Text Color", 'premium-block-for-gutenberg')}
//                                                 colorValue={secondContentStyles[0].secondContentColor}
//                                                 colorDefault={''}
//                                                 onColorChange={newValue =>
//                                                     saveSecondContentStyles({
//                                                         secondContentColor: newValue
//                                                     })
//                                                 }
//                                             />
//                                             <AdvancedPopColorControl
//                                                 label={__("Background Color", 'premium-block-for-gutenberg')}
//                                                 colorValue={secondContentStyles[0].secondContentBGColor}
//                                                 colorDefault={''}
//                                                 onColorChange={newValue =>
//                                                     saveSecondContentStyles({
//                                                         secondContentBGColor: newValue
//                                                     })
//                                                 }
//                                             />
//                                             <PremiumTypo
//                                                 components={["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"]}
//                                                 setAttributes={saveSecondContentStyles}
//                                                 fontSizeType={{ value: secondContentStyles[0].secondContentfontSizeType, label: __("secondContentfontSizeType") }}
//                                                 fontSize={secondContentStyles[0].secondContentfontSize}
//                                                 fontSizeMobile={secondContentStyles[0].secondContentfontSizeMobile}
//                                                 fontSizeTablet={secondContentStyles[0].secondContentfontSizeTablet}
//                                                 onChangeSize={newSize => saveSecondContentStyles({ secondContentfontSize: newSize })}
//                                                 onChangeTabletSize={newSize => saveSecondContentStyles({ secondContentfontSizeTablet: newSize })}
//                                                 onChangeMobileSize={newSize => saveSecondContentStyles({ secondContentfontSizeMobile: newSize })}
//                                                 weight={secondContentStyles[0].secondContentWeight}
//                                                 style={secondContentStyles[0].secondContentStyle}
//                                                 spacing={secondContentStyles[0].secondContentLetter}
//                                                 upper={secondContentStyles[0].secondContentUpper}
//                                                 line={secondContentStyles[0].secondContentLine}
//                                                 fontFamily={secondContentStyles[0].secondContentFontFamily}
//                                                 onChangeWeight={newWeight =>
//                                                     saveSecondContentStyles({ secondContentWeight: newWeight || 500 })
//                                                 }
//                                                 onChangeStyle={newStyle =>
//                                                     saveSecondContentStyles({ secondContentStyle: newStyle })
//                                                 }
//                                                 onChangeSpacing={newValue =>
//                                                     saveSecondContentStyles({ secondContentLetter: newValue })
//                                                 }
//                                                 onChangeUpper={check => saveSecondContentStyles({ secondContentUpper: check })}
//                                                 onChangeLine={newValue => saveSecondContentStyles({ secondContentLine: newValue })}
//                                                 onChangeFamily={(fontFamily) => saveSecondContentStyles({ secondContentFontFamily: fontFamily })}
//                                             />
//                                             <PremiumShadow
//                                                 label={__("Text Shadow", 'premium-blocks-for-gutenberg')}
//                                                 color={secondContentStyles[0].secondContentShadowColor}
//                                                 blur={secondContentStyles[0].secondContentShadowBlur}
//                                                 horizontal={secondContentStyles[0].secondContentShadowHorizontal}
//                                                 vertical={secondContentStyles[0].secondContentShadowVertical}
//                                                 onChangeColor={newColor =>
//                                                     saveSecondContentStyles({ secondContentShadowColor: newColor })
//                                                 }
//                                                 onChangeBlur={newBlur => saveSecondContentStyles({ secondContentShadowBlur: newBlur })}
//                                                 onChangehHorizontal={newValue =>
//                                                     saveSecondContentStyles({ secondContentShadowHorizontal: newValue })
//                                                 }
//                                                 onChangeVertical={newValue =>
//                                                     saveSecondContentStyles({ secondContentShadowVertical: newValue })
//                                                 }
//                                             />
//                                             <PremiumBorder
//                                                 borderType={secondContentStyles[0].secondContentborderType}
//                                                 borderWidth={secondContentBorderWidth}
//                                                 top={secondContentBorderTop}
//                                                 right={secondContentBorderRight}
//                                                 bottom={secondContentBorderBottom}
//                                                 left={secondContentBorderLeft}
//                                                 borderColor={secondContentStyles[0].secondContentborderColor}
//                                                 borderRadius={secondContentStyles[0].secondContentborderRadius}
//                                                 onChangeType={newType => saveSecondContentStyles({ secondContentborderType: newType })}
//                                                 onChangeWidth={({ top, right, bottom, left }) =>
//                                                     setAttributes({
//                                                         secondContentBorderUpdated: true,
//                                                         secondContentBorderTop: top,
//                                                         secondContentBorderRight: right,
//                                                         secondContentBorderBottom: bottom,
//                                                         secondContentBorderLeft: left,
//                                                     })
//                                                 }
//                                                 onChangeColor={colorValue =>
//                                                     saveSecondContentStyles({ secondContentborderColor: colorValue })
//                                                 }
//                                                 onChangeRadius={newrRadius =>
//                                                     saveSecondContentStyles({ secondContentborderRadius: newrRadius })
//                                                 }
//                                             />
//                                             <PremiumShadow
//                                                 label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
//                                                 boxShadow={true}
//                                                 color={secondContentStyles[0].secondContentBoxShadowColor}
//                                                 blur={secondContentStyles[0].secondContentBoxShadowBlur}
//                                                 horizontal={secondContentStyles[0].secondContentBoxShadowHorizontal}
//                                                 vertical={secondContentStyles[0].secondContentBoxShadowVertical}
//                                                 position={secondContentStyles[0].secondContentBoxShadowPosition}
//                                                 onChangeColor={newColor =>
//                                                     saveSecondContentStyles({ secondContentBoxShadowColor: newColor })
//                                                 }
//                                                 onChangeBlur={newBlur => saveSecondContentStyles({ secondContentBoxShadowBlur: newBlur })}
//                                                 onChangehHorizontal={newValue =>
//                                                     saveSecondContentStyles({ secondContentBoxShadowHorizontal: newValue })
//                                                 }
//                                                 onChangeVertical={newValue =>
//                                                     saveSecondContentStyles({ secondContentBoxShadowVertical: newValue })
//                                                 }
//                                                 onChangePosition={newValue =>
//                                                     saveSecondContentStyles({ secondContentBoxShadowPosition: newValue })
//                                                 }
//                                             />
//                                         </Fragment>
//                                     );
//                                 }
//                                 return (
//                                     <div>
//                                         {tabout}
//                                     </div>
//                                 );
//                             }}
//                         </TabPanel>
//                         <hr />
//                         <PremiumResponsiveMargin
//                             directions={["all"]}
//                             marginTop={firstContentMarginT}
//                             marginRight={firstContentMarginR}
//                             marginBottom={firstContentMarginB}
//                             marginLeft={firstContentMarginL}
//                             marginTopTablet={firstContentMarginTTablet}
//                             marginRightTablet={firstContentMarginRTablet}
//                             marginBottomTablet={firstContentMarginBTablet}
//                             marginLeftTablet={firstContentMarginLTablet}
//                             marginTopMobile={firstContentMarginTMobile}
//                             marginRightMobile={firstContentMarginRMobile}
//                             marginBottomMobile={firstContentMarginBMobile}
//                             marginLeftMobile={firstContentMarginLMobile}
//                             showUnits={true}
//                             onChangeMarSizeUnit={newvalue => saveFirstContentStyles({ firstContentMarginType: newvalue })}
//                             selectedUnit={firstContentStyles[0].firstContentMarginType}
//                             onChangeMarginTop={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstContentMarginT: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstContentMarginTTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstContentMarginTMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangeMarginRight={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstContentMarginR: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstContentMarginRTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstContentMarginRMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangeMarginBottom={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstContentMarginB: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstContentMarginBTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstContentMarginBMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangeMarginLeft={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ firstContentMarginL: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ firstContentMarginLTablet: newValue })
//                                     } else {
//                                         setAttributes({ firstContentMarginLMobile: newValue })
//                                     }
//                                 }
//                             }
//                         />
//                         <PremiumResponsivePadding
//                             paddingTop={contentPaddingT}
//                             paddingRight={contentPaddingR}
//                             paddingBottom={contentPaddingB}
//                             paddingLeft={contentPaddingL}
//                             paddingTopTablet={contentPaddingTTablet}
//                             paddingRightTablet={contentPaddingRTablet}
//                             paddingBottomTablet={contentPaddingBTablet}
//                             paddingLeftTablet={contentPaddingLTablet}
//                             paddingTopMobile={contentPaddingTMobile}
//                             paddingRightMobile={contentPaddingRMobile}
//                             paddingBottomMobile={contentPaddingBMobile}
//                             paddingLeftMobile={contentPaddingLMobile}
//                             showUnits={true}
//                             selectedUnit={firstContentStyles[0].firstContentPaddingType}
//                             onChangePadSizeUnit={newvalue => saveFirstContentStyles({ firstContentPaddingType: newvalue })}
//                             onChangePaddingTop={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ contentPaddingT: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ contentPaddingTTablet: newValue })
//                                     } else {
//                                         setAttributes({ contentPaddingTMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingRight={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ contentPaddingR: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ contentPaddingRTablet: newValue })
//                                     } else {
//                                         setAttributes({ contentPaddingRMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingBottom={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ contentPaddingB: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ contentPaddingBTablet: newValue })
//                                     } else {
//                                         setAttributes({ contentPaddingBMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingLeft={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ contentPaddingL: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ contentPaddingLTablet: newValue })
//                                     } else {
//                                         setAttributes({ contentPaddingLMobile: newValue })
//                                     }
//                                 }
//                             }
//                         />
//                     </PanelBody>
//                     <PanelBody
//                         title={__("Container Style")}
//                         className="premium-panel-body"
//                         initialOpen={false}
//                     >
//                         <PremiumBackgroundControl
//                             setAttributes={setAttributes}
//                             saveContainerStyle={saveContainerStyles}
//                             backgroundType={backgroundType}
//                             backgroundColor={containerStyles[0].containerBack}
//                             backgroundImageID={containerStyles[0].backgroundImageID}
//                             backgroundImageURL={containerStyles[0].backgroundImageURL}
//                             backgroundPosition={containerStyles[0].backgroundPosition}
//                             backgroundRepeat={containerStyles[0].backgroundRepeat}
//                             backgroundSize={containerStyles[0].backgroundSize}
//                             fixed={containerStyles[0].fixed}
//                             gradientLocationOne={containerStyles[0].gradientLocationOne}
//                             gradientColorTwo={containerStyles[0].gradientColorTwo}
//                             gradientLocationTwo={containerStyles[0].gradientLocationTwo}
//                             gradientAngle={containerStyles[0].gradientAngle}
//                             gradientPosition={containerStyles[0].gradientPosition}
//                             gradientType={containerStyles[0].gradientType}
//                         />
//                         <PremiumBorder
//                             borderType={containerStyles[0].containerborderType}
//                             borderWidth={containerBorderWidth}
//                             top={containerBorderTop}
//                             right={containerBorderRight}
//                             bottom={containerBorderBottom}
//                             left={containerBorderLeft}
//                             borderColor={containerStyles[0].containerborderColor}
//                             borderRadius={containerStyles[0].containerborderRadius}
//                             onChangeType={newType => saveContainerStyles({ containerborderType: newType })}
//                             onChangeWidth={({ top, right, bottom, left }) =>
//                                 setAttributes({
//                                     containerBorderUpdated: true,
//                                     containerBorderTop: top,
//                                     containerBorderRight: right,
//                                     containerBorderBottom: bottom,
//                                     containerBorderLeft: left,
//                                 })
//                             }
//                             onChangeColor={colorValue =>
//                                 saveContainerStyles({ containerborderColor: colorValue })
//                             }
//                             onChangeRadius={newrRadius =>
//                                 saveContainerStyles({ containerborderRadius: newrRadius })
//                             }
//                         />
//                         <PremiumShadow
//                             label={__("Box Shadow", 'premium-blocks-for-gutenberg')}
//                             boxShadow={true}
//                             color={containerStyles[0].containerBoxShadowColor}
//                             blur={containerStyles[0].containerBoxShadowBlur}
//                             horizontal={containerStyles[0].containerBoxShadowHorizontal}
//                             vertical={containerStyles[0].containerBoxShadowVertical}
//                             position={containerStyles[0].containerBoxShadowPosition}
//                             onChangeColor={newColor =>
//                                 saveContainerStyles({ containerBoxShadowColor: newColor })
//                             }
//                             onChangeBlur={newBlur => saveContainerStyles({ containerBoxShadowBlur: newBlur })}
//                             onChangehHorizontal={newValue =>
//                                 saveContainerStyles({ containerBoxShadowHorizontal: newValue })
//                             }
//                             onChangeVertical={newValue =>
//                                 saveContainerStyles({ containerBoxShadowVertical: newValue })
//                             }
//                             onChangePosition={newValue =>
//                                 saveContainerStyles({ containerBoxShadowPosition: newValue })
//                             }
//                         />
//                         <PremiumResponsiveMargin
//                             directions={["all"]}
//                             marginTop={containerMarginT}
//                             marginRight={containerMarginR}
//                             marginBottom={containerMarginB}
//                             marginLeft={containerMarginL}
//                             marginTopTablet={containerMarginTTablet}
//                             marginRightTablet={containerMarginRTablet}
//                             marginBottomTablet={containerMarginBTablet}
//                             marginLeftTablet={containerMarginLTablet}
//                             marginTopMobile={containerMarginTMobile}
//                             marginRightMobile={containerMarginRMobile}
//                             marginBottomMobile={containerMarginBMobile}
//                             marginLeftMobile={containerMarginLMobile}
//                             showUnits={true}
//                             onChangeMarSizeUnit={newvalue => saveContainerStyles({ iconMarginType: newvalue })}
//                             selectedUnit={containerStyles[0].iconMarginType}
//                             onChangeMarginTop={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerMarginT: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerMarginTTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerMarginTMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangeMarginRight={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerMarginR: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerMarginRTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerMarginRMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangeMarginBottom={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerMarginB: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerMarginBTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerMarginBMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangeMarginLeft={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerMarginL: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerMarginLTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerMarginLMobile: newValue })
//                                     }
//                                 }
//                             }
//                         />
//                         <PremiumResponsivePadding
//                             paddingTop={containerPaddingT}
//                             paddingRight={containerPaddingR}
//                             paddingBottom={containerPaddingB}
//                             paddingLeft={containerPaddingL}
//                             paddingTopTablet={containerPaddingTTablet}
//                             paddingRightTablet={containerPaddingRTablet}
//                             paddingBottomTablet={containerPaddingBTablet}
//                             paddingLeftTablet={containerPaddingLTablet}
//                             paddingTopMobile={containerPaddingTMobile}
//                             paddingRightMobile={containerPaddingRMobile}
//                             paddingBottomMobile={containerPaddingBMobile}
//                             paddingLeftMobile={containerPaddingLMobile}
//                             showUnits={true}
//                             selectedUnit={containerStyles[0].iconPaddingType}
//                             onChangePadSizeUnit={newvalue => saveContainerStyles({ iconPaddingType: newvalue })}
//                             onChangePaddingTop={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerPaddingT: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerPaddingTTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerPaddingTMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingRight={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerPaddingR: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerPaddingRTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerPaddingRMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingBottom={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerPaddingB: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerPaddingBTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerPaddingBMobile: newValue })
//                                     }
//                                 }
//                             }
//                             onChangePaddingLeft={
//                                 (device, newValue) => {
//                                     if (device === "desktop") {
//                                         setAttributes({ containerPaddingL: newValue })
//                                     } else if (device === "tablet") {
//                                         setAttributes({ containerPaddingLTablet: newValue })
//                                     } else {
//                                         setAttributes({ containerPaddingLMobile: newValue })
//                                     }
//                                 }
//                             }
//                         />
//                     </PanelBody>
//                 </InspectorControls>
//             ),
//             renderCss,
//             <div
//                 id={`premium-content-switcher-${block_id}`}
//                 className={classnames(
//                     className,
//                     `premium-block-${this.props.clientId}`
//                 )}
//                 style={{
//                     textAlign: align,
//                 }}
//             >
//                 <div className={`premium-content-switcher`}
//                     style={{
//                         textAlign: align,
//                         backgroundColor: backgroundType === "solid" ? containerStyles[0].containerBack : "transparent",
//                         boxShadow: `${containerStyles[0].containerBoxShadowHorizontal}px ${containerStyles[0].containerBoxShadowVertical}px ${containerStyles[0].containerBoxShadowBlur}px ${containerStyles[0].containerBoxShadowColor} ${containerStyles[0].containerBoxShadowPosition}`,
//                         backgroundImage: btnbg,
//                         backgroundRepeat: containerStyles[0].backgroundRepeat,
//                         backgroundPosition: containerStyles[0].backgroundPosition,
//                         backgroundSize: containerStyles[0].backgroundSize,
//                         backgroundAttachment: containerStyles[0].fixed ? "fixed" : "unset",
//                         borderStyle: containerStyles[0].containerborderType,
//                         borderWidth: containerBorderUpdated
//                             ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px`
//                             : containerBorderWidth + "px",
//                         borderRadius: containerStyles[0].containerborderRadius + "px",
//                         borderColor: containerStyles[0].containerborderColor,
//                         paddingTop: ContainerPaddingTop + containerStyles[0].containerPaddingType,
//                         paddingRight: ContainerPaddingRight + containerStyles[0].containerPaddingType,
//                         paddingBottom: ContainerPaddingBottom + containerStyles[0].containerPaddingType,
//                         paddingLeft: ContainerPaddingLeft + containerStyles[0].containerPaddingType,
//                         marginTop: ContainerMarginTop + containerStyles[0].containerMarginType,
//                         marginBottom: ContainerMarginBottom + containerStyles[0].containerMarginType,
//                         marginLeft: ContainerMarginLeft + containerStyles[0].containerMarginType,
//                         marginRight: ContainerMarginRight + containerStyles[0].containerMarginType,
//                     }}>
//                     <div className={`premium-content-switcher-toggle-${display}`}
//                         style={{
//                             textAlign: align,
//                             justifyContent: align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
//                             alignItems: display == "inline" ? "center" : align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
//                         }}>
//                         {showLabel && (<div className="premium-content-switcher-first-label">
//                             <RichText
//                                 tagName={labelTag.toLowerCase()}
//                                 className={`premium-content-switcher-${display}-editing`}
//                                 onChange={(newValue) => setAttributes({ firstLabel: newValue })}
//                                 value={firstLabel}
//                                 style={{
//                                     color: labelStyles[0].firstLabelColor,
//                                     fontSize: FirstLabelSize + labelStyles[0].firstLabelfontSizeType,
//                                     letterSpacing: labelStyles[0].firstLabelLetter + "px",
//                                     textTransform: labelStyles[0].firstLabelUpper ? "uppercase" : "none",
//                                     fontStyle: labelStyles[0].firstLabelStyle,
//                                     fontWeight: labelStyles[0].firstLabelWeight,
//                                     lineHeight: (labelStyles[0].firstLabelLine ? labelStyles[0].firstLabelLine : "") + "px",
//                                     fontFamily: labelStyles[0].firstLabelFontFamily,
//                                     borderStyle: labelStyles[0].firstLabelborderType,
//                                     borderWidth: firstLabelBorderUpdated
//                                         ? `${firstLabelBorderTop}px ${firstLabelBorderRight}px ${firstLabelBorderBottom}px ${firstLabelBorderLeft}px`
//                                         : firstLabelBorderWidth + "px",
//                                     borderRadius: labelStyles[0].firstLabelborderRadius + "px",
//                                     borderColor: labelStyles[0].firstLabelborderColor,
//                                     paddingTop: FirstLabelPaddingTop + labelStyles[0].firstLabelPaddingType,
//                                     paddingBottom: FirstLabelPaddingBottom + labelStyles[0].firstLabelPaddingType,
//                                     paddingLeft: FirstLabelPaddingLeft + labelStyles[0].firstLabelPaddingType,
//                                     paddingRight: FirstLabelPaddingRight + labelStyles[0].firstLabelPaddingType,
//                                     textShadow: `${labelStyles[0].firstLabelShadowHorizontal}px ${labelStyles[0].firstLabelShadowVertical}px ${labelStyles[0].firstLabelShadowBlur}px ${labelStyles[0].firstLabelShadowColor}`,
//                                     boxShadow: `${labelStyles[0].firstLabelBoxShadowHorizontal}px ${labelStyles[0].firstLabelBoxShadowVertical}px ${labelStyles[0].firstLabelBoxShadowBlur}px ${labelStyles[0].firstLabelBoxShadowColor} ${labelStyles[0].firstLabelBoxShadowPosition}`,
//                                 }}
//                             />
//                         </div>
//                         )}
//                         <div
//                             className="premium-content-switcher-toggle-switch"
//                             style={{
//                                 fontSize: SwitcherSize + 'px',
//                             }}
//                         >
//                             <label className={`premium-content-switcher-toggle-switch-label`}>
//                                 <input type="checkbox" className={`premium-content-switcher-toggle-switch-input ${this.props.clientId}`} />
//                                 <span className="premium-content-switcher-toggle-switch-slider round"
//                                     style={{
//                                         borderRadius: switchRadius + "px"
//                                     }}></span>
//                             </label>
//                         </div>
//                         {showLabel && (<div className="premium-content-switcher-second-label">
//                             <RichText
//                                 tagName={labelTag.toLowerCase()}
//                                 className={`premium-content-switcher-${display}-editing`}
//                                 onChange={(newValue) => setAttributes({ secondLabel: newValue })}
//                                 value={secondLabel}
//                                 style={{
//                                     color: labelStyles[0].secondLabelColor,
//                                     fontSize: SecondLabelSize + labelStyles[0].secondLabelfontSizeType,
//                                     letterSpacing: labelStyles[0].secondLabelLetter + "px",
//                                     textTransform: labelStyles[0].secondLabelUpper ? "uppercase" : "none",
//                                     fontStyle: labelStyles[0].secondLabelStyle,
//                                     fontWeight: labelStyles[0].secondLabelWeight,
//                                     lineHeight: (labelStyles[0].secondLabelLine ? labelStyles[0].secondLabelLine : "") + "px",
//                                     fontFamily: labelStyles[0].secondLabelFontFamily,
//                                     borderStyle: labelStyles[0].secondLabelborderType,
//                                     borderWidth: secondLabelBorderUpdated
//                                         ? `${secondLabelBorderTop}px ${secondLabelBorderRight}px ${secondLabelBorderBottom}px ${secondLabelBorderLeft}px`
//                                         : secondLabelBorderWidth + "px",
//                                     borderRadius: labelStyles[0].secondLabelborderRadius + "px",
//                                     borderColor: labelStyles[0].secondLabelborderColor,
//                                     paddingTop: SecondLabelPaddingTop + labelStyles[0].secondLabelPaddingType,
//                                     paddingBottom: SecondLabelPaddingBottom + labelStyles[0].secondLabelPaddingType,
//                                     paddingLeft: SecondLabelPaddingLeft + labelStyles[0].secondLabelPaddingType,
//                                     paddingRight: SecondLabelPaddingRight + labelStyles[0].secondLabelPaddingType,
//                                     textShadow: `${labelStyles[0].secondLabelShadowHorizontal}px ${labelStyles[0].secondLabelShadowVertical}px ${labelStyles[0].secondLabelShadowBlur}px ${labelStyles[0].secondLabelShadowColor}`,
//                                     boxShadow: `${labelStyles[0].secondLabelBoxShadowHorizontal}px ${labelStyles[0].secondLabelBoxShadowVertical}px ${labelStyles[0].secondLabelBoxShadowBlur}px ${labelStyles[0].secondLabelBoxShadowColor} ${labelStyles[0].secondLabelBoxShadowPosition}`,
//                                 }}
//                             />
//                         </div>
//                         )}
//                     </div>
//                     <div
//                         className={`premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`}
//                         style={{
//                             marginTop: FirstContentMarginTop + firstContentStyles[0].firstContentMarginType,
//                             marginBottom: FirstContentMarginBottom + firstContentStyles[0].firstContentMarginType,
//                             marginLeft: FirstContentMarginLeft + firstContentStyles[0].firstContentMarginType,
//                             marginRight: FirstContentMarginRight + firstContentStyles[0].firstContentMarginType,
//                         }}
//                     >
//                         <ul className="premium-content-switcher-two-content">
//                             <li className={`premium-content-switcher-is-visible premium-content-switcher-first-list ${this.props.clientId}`}
//                                 style={{
//                                     background: firstContentStyles[0].firstContentBGColor,
//                                     borderStyle: firstContentStyles[0].firstContentborderType,
//                                     borderWidth: firstContentBorderUpdated
//                                         ? `${firstContentBorderTop}px ${firstContentBorderRight}px ${firstContentBorderBottom}px ${firstContentBorderLeft}px`
//                                         : firstContentBorderWidth + "px",
//                                     borderRadius: firstContentStyles[0].firstContentborderRadius + "px",
//                                     borderColor: firstContentStyles[0].firstContentborderColor,
//                                     minHeight: ContentHeight + contentStyles[0].contentHeightType,
//                                     paddingTop: ContentPaddingTop + firstContentStyles[0].firstContentPaddingType,
//                                     paddingBottom: ContentPaddingBottom + firstContentStyles[0].firstContentPaddingType,
//                                     paddingLeft: ContentPaddingLeft + firstContentStyles[0].firstContentPaddingType,
//                                     paddingRight: ContentPaddingRight + firstContentStyles[0].firstContentPaddingType,
//                                     boxShadow: `${firstContentStyles[0].firstContentBoxShadowHorizontal}px ${firstContentStyles[0].firstContentBoxShadowVertical}px ${firstContentStyles[0].firstContentBoxShadowBlur}px ${firstContentStyles[0].firstContentBoxShadowColor} ${firstContentStyles[0].firstContentBoxShadowPosition}`,
//                                 }}>
//                                 <RichText
//                                     tagName="div"
//                                     className={`premium-content-switcher-first-content`}
//                                     value={firstContent}
//                                     onChange={value => {
//                                         setAttributes({ firstContent: value })
//                                     }}
//                                     style={{
//                                         textAlign: firstcontentlign,
//                                         justifyContent: firstcontentlign,
//                                         color: firstContentStyles[0].firstContentColor,
//                                         fontSize: FirstContentSize + firstContentStyles[0].firstContentfontSizeType,
//                                         letterSpacing: firstContentStyles[0].firstContentLetter + "px",
//                                         textTransform: firstContentStyles[0].firstContentUpper ? "uppercase" : "none",
//                                         fontStyle: firstContentStyles[0].firstContentStyle,
//                                         fontWeight: firstContentStyles[0].firstContentWeight,
//                                         lineHeight: (firstContentStyles[0].firstContentLine ? firstContentStyles[0].firstContentLine : "") + "px",
//                                         fontFamily: firstContentStyles[0].firstContentFontFamily,
//                                         textShadow: `${firstContentStyles[0].firstContentShadowHorizontal}px ${firstContentStyles[0].firstContentShadowVertical}px ${firstContentStyles[0].firstContentShadowBlur}px ${firstContentStyles[0].firstContentShadowColor}`,
//                                     }}
//                                 />
//                             </li>
//                             <li className={`premium-content-switcher-is-hidden premium-content-switcher-second-list ${this.props.clientId}`}
//                                 style={{
//                                     background: secondContentStyles[0].secondContentBGColor,
//                                     borderStyle: secondContentStyles[0].secondContentborderType,
//                                     borderWidth: secondContentBorderUpdated
//                                         ? `${secondContentBorderTop}px ${secondContentBorderRight}px ${secondContentBorderBottom}px ${secondContentBorderLeft}px`
//                                         : secondContentBorderWidth + "px",
//                                     borderRadius: secondContentStyles[0].secondContentborderRadius + "px",
//                                     borderColor: secondContentStyles[0].secondContentborderColor,
//                                     minHeight: ContentHeight + contentStyles[0].contentHeightType,
//                                     paddingTop: ContentPaddingTop + secondContentStyles[0].secondContentPaddingType,
//                                     paddingBottom: ContentPaddingBottom + secondContentStyles[0].secondContentPaddingType,
//                                     paddingLeft: ContentPaddingLeft + secondContentStyles[0].secondContentPaddingType,
//                                     paddingRight: ContentPaddingRight + secondContentStyles[0].secondContentPaddingType,
//                                     boxShadow: `${secondContentStyles[0].secondContentBoxShadowHorizontal}px ${secondContentStyles[0].secondContentBoxShadowVertical}px ${secondContentStyles[0].secondContentBoxShadowBlur}px ${secondContentStyles[0].secondContentBoxShadowColor} ${secondContentStyles[0].secondContentBoxShadowPosition}`,
//                                 }}>
//                                 <RichText
//                                     tagName="div"
//                                     className={`premium-content-switcher-second-content`}
//                                     value={secondContent}
//                                     onChange={value => {
//                                         setAttributes({ secondContent: value })
//                                     }}
//                                     style={{
//                                         textAlign: secondcontentlign,
//                                         justifyContent: secondcontentlign,
//                                         color: secondContentStyles[0].secondContentColor,
//                                         fontSize: SecondContentSize + secondContentStyles[0].secondContentfontSizeType,
//                                         letterSpacing: secondContentStyles[0].secondContentLetter + "px",
//                                         textTransform: secondContentStyles[0].secondContentUpper ? "uppercase" : "none",
//                                         fontStyle: secondContentStyles[0].secondContentStyle,
//                                         fontWeight: secondContentStyles[0].secondContentWeight,
//                                         lineHeight: (secondContentStyles[0].secondContentLine ? secondContentStyles[0].secondContentLine : "") + "px",
//                                         fontFamily: secondContentStyles[0].secondContentFontFamily,
//                                         textShadow: `${secondContentStyles[0].secondContentShadowHorizontal}px ${secondContentStyles[0].secondContentShadowVertical}px ${secondContentStyles[0].secondContentShadowBlur}px ${secondContentStyles[0].secondContentShadowColor}`,
//                                     }}
//                                 />
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         ]
//     }
// }
// export default withSelect((select, props) => {
//     const { __experimentalGetPreviewDeviceType = null } = select('core/edit-post');
//     let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
//     return {
//         deviceType: deviceType
//     }
// })(edit)





 // import ResponsiveSingleRangeControl from "../../components/RangeControl/single-range-control";
// import PremiumBackgroundControl from "../../components/Premium-Background-Control"







/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(props) {
  const {
    isSelected,
    attributes,
    setAttributes,
    clientId,
    className
  } = props;
  const inputSwitch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputFirstContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputSecondContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      block_id: props.clientId
    }); // Assigning id in the attribute.
    // setAttributes({ block_id: this.props.clientId })

    setAttributes({
      classMigrate: true
    }); //         // Pushing Style tag for this block css.

    const $style = document.createElement("style");
    $style.setAttribute("id", "premium-style-content-switcher-" + props.clientId);
    document.head.appendChild($style);
    setAttributes({
      switchCheck: false
    });
    setTimeout(initToggleBox, 10); // getPreviewSize = getPreviewSize.bind(this);
  }, []);

  const initToggleBox = () => {
    const {
      block_id,
      switchCheck
    } = props.attributes;
    if (!block_id) return null; // const inputRef = useRef();
    // let toggleBox = document.getElementsByClassName(`premium-content-switcher-toggle-switch-input ${block_id}`);

    console.log(block_id, inputSwitch, inputFirstContent.current, inputSecondContent.current);
    setTimeout(inputSwitch.current.addEventListener("click", () => {
      console.log(switchCheck);

      if (attributes.switchCheck) {
        console.log("false");
        setAttributes({
          switchCheck: false
        });
      } else {
        console.log("true");
        setAttributes({
          switchCheck: true
        });
      }

      console.log(attributes.switchCheck);

      if (!switchCheck) {
        // let switchToggle = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);
        inputFirstContent.current.classList.remove("premium-content-switcher-is-visible");
        inputFirstContent.current.classList.add("premium-content-switcher-is-hidden"); // let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);

        inputSecondContent.current.classList.remove("premium-content-switcher-is-hidden");
        inputSecondContent.current.classList.add("premium-content-switcher-is-visible");
      } else {
        // let switchToggle = document.getElementsByClassName(`premium-content-switcher-second-list ${block_id}`);
        inputSecondContent.current.classList.remove("premium-content-switcher-is-visible");
        inputSecondContent.current.classList.add("premium-content-switcher-is-hidden"); // let switchTogglesecond = document.getElementsByClassName(`premium-content-switcher-first-list ${block_id}`);

        inputFirstContent.current.classList.remove("premium-content-switcher-is-hidden");
        inputFirstContent.current.classList.add("premium-content-switcher-is-visible");
      }
    }), 10);
  };

  const getPreviewSize = (device, desktopSize, tabletSize, mobileSize) => {
    if (device === 'Mobile') {
      if (undefined !== mobileSize && '' !== mobileSize) {
        return mobileSize;
      } else if (undefined !== tabletSize && '' !== tabletSize) {
        return tabletSize;
      }
    } else if (device === 'Tablet') {
      if (undefined !== tabletSize && '' !== tabletSize) {
        return tabletSize;
      }
    }

    return desktopSize;
  };

  const {
    block_id,
    align,
    showLabel,
    firstLabel,
    secondLabel,
    display,
    labelTag,
    firstContent,
    secondContent,
    switchCheck,
    firstcontentlign,
    secondcontentlign,
    switcherStyles,
    // backgroundType,
    labelStyles,
    firstLabelBorderTop,
    firstLabelBorderRight,
    firstLabelBorderBottom,
    firstLabelBorderLeft,
    firstLabelBorderUpdated,
    firstLabelBorderWidth,
    firstLabelPaddingT,
    firstLabelPaddingR,
    firstLabelPaddingB,
    firstLabelPaddingL,
    firstLabelPaddingTTablet,
    firstLabelPaddingRTablet,
    firstLabelPaddingBTablet,
    firstLabelPaddingLTablet,
    firstLabelPaddingTMobile,
    firstLabelPaddingRMobile,
    firstLabelPaddingBMobile,
    firstLabelPaddingLMobile,
    secondLabelBorderTop,
    secondLabelBorderRight,
    secondLabelBorderBottom,
    secondLabelBorderLeft,
    secondLabelBorderUpdated,
    secondLabelBorderWidth,
    secondLabelPaddingT,
    secondLabelPaddingR,
    secondLabelPaddingB,
    secondLabelPaddingL,
    secondLabelPaddingTTablet,
    secondLabelPaddingRTablet,
    secondLabelPaddingBTablet,
    secondLabelPaddingLTablet,
    secondLabelPaddingTMobile,
    secondLabelPaddingRMobile,
    secondLabelPaddingBMobile,
    secondLabelPaddingLMobile,
    contentStyles,
    firstContentStyles,
    firstContentBorderTop,
    firstContentBorderRight,
    firstContentBorderBottom,
    firstContentBorderLeft,
    firstContentBorderUpdated,
    firstContentBorderWidth,
    firstContentMarginT,
    firstContentMarginR,
    firstContentMarginB,
    firstContentMarginL,
    firstContentMarginTTablet,
    firstContentMarginRTablet,
    firstContentMarginBTablet,
    firstContentMarginLTablet,
    firstContentMarginTMobile,
    firstContentMarginRMobile,
    firstContentMarginBMobile,
    firstContentMarginLMobile,
    contentPaddingT,
    contentPaddingR,
    contentPaddingB,
    contentPaddingL,
    contentPaddingTTablet,
    contentPaddingRTablet,
    contentPaddingBTablet,
    contentPaddingLTablet,
    contentPaddingTMobile,
    contentPaddingRMobile,
    contentPaddingBMobile,
    contentPaddingLMobile,
    secondContentStyles,
    secondContentBorderTop,
    secondContentBorderRight,
    secondContentBorderBottom,
    secondContentBorderLeft,
    secondContentBorderUpdated,
    secondContentBorderWidth,
    containerStyles,
    backgroundType,
    containerBorderTop,
    containerBorderRight,
    containerBorderBottom,
    containerBorderLeft,
    containerBorderUpdated,
    containerBorderWidth,
    containerPaddingT,
    containerPaddingR,
    containerPaddingB,
    containerPaddingL,
    containerPaddingTTablet,
    containerPaddingRTablet,
    containerPaddingBTablet,
    containerPaddingLTablet,
    containerPaddingTMobile,
    containerPaddingRMobile,
    containerPaddingBMobile,
    containerPaddingLMobile,
    containerMarginT,
    containerMarginR,
    containerMarginB,
    containerMarginL,
    containerMarginTTablet,
    containerMarginRTablet,
    containerMarginBTablet,
    containerMarginLTablet,
    containerMarginTMobile,
    containerMarginRMobile,
    containerMarginBMobile,
    containerMarginLMobile,
    effect,
    slide
  } = attributes;
  const DISPLAY = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Block"),
    value: "block"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inline"),
    value: "inline"
  }];
  const ALIGNS = ["left", "center", "right"];
  const EFFECTS = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Fade"),
    value: "fade"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slide"),
    value: "slide"
  }];
  const SLIDE = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top"),
    value: "top"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left"),
    value: "left"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom"),
    value: "bottom"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right"),
    value: "right"
  }];
  const TAGS = [{
    value: "h1",
    label: "H1"
  }, {
    value: "h2",
    label: "H2"
  }, {
    value: "h3",
    label: "H3"
  }, {
    value: "h4",
    label: "H4"
  }, {
    value: "h5",
    label: "H5"
  }, {
    value: "h6",
    label: "H6"
  }];
  const defaultSize = {
    desktop: "",
    tablet: "",
    mobile: "",
    unit: "px"
  };
  const defaultSpacingValue = {
    desktop: {
      top: '',
      right: '',
      bottom: '',
      left: ''
    },
    tablet: {
      top: '',
      right: '',
      bottom: '',
      left: ''
    },
    mobile: {
      top: '',
      right: '',
      bottom: '',
      left: ''
    }
  };
  let btnGrad, btnGrad2, btnbg;

  if (undefined !== backgroundType && 'gradient' === backgroundType) {
    btnGrad = 'transparent' === containerStyles.containerBack || undefined === containerStyles.containerBack ? 'rgba(255,255,255,0)' : containerStyles.containerBack;
    btnGrad2 = undefined !== containerStyles.gradientColorTwo && undefined !== containerStyles.gradientColorTwo && '' !== containerStyles.gradientColorTwo ? containerStyles.gradientColorTwo : '#777';

    if ('radial' === containerStyles.gradientType) {
      btnbg = `radial-gradient(at ${containerStyles.gradientPosition}, ${btnGrad} ${containerStyles.gradientLocationOne}%, ${btnGrad2} ${containerStyles.gradientLocationTwo}%)`;
    } else if ('radial' !== containerStyles.gradientType) {
      btnbg = `linear-gradient(${containerStyles.gradientAngle}deg, ${btnGrad} ${containerStyles.gradientLocationOne}%, ${btnGrad2} ${containerStyles.gradientLocationTwo}%)`;
    }
  } else {
    btnbg = containerStyles.backgroundImageURL ? `url('${containerStyles.backgroundImageURL}')` : '';
  }

  const SwitcherSize = getPreviewSize(props.deviceType, switcherStyles.switchSize, switcherStyles.switchSizeTablet, switcherStyles.switchSizeMobile);
  const SwitcherBorderRadius = getPreviewSize(props.deviceType, switcherStyles.switchRadius, switcherStyles.switchRadiusTablet, switcherStyles.switchRadiusMobile);
  const ContainerBorderRadius = getPreviewSize(props.deviceType, switcherStyles.containerRadius, switcherStyles.containerRadiusTablet, switcherStyles.containerRadiusMobile);
  const LabelSpacing = getPreviewSize(props.deviceType, labelStyles.labelSpacing, labelStyles.labelSpacingTablet, labelStyles.labelSpacingMobile);
  const FirstLabelSize = getPreviewSize(props.deviceType, labelStyles.firstLabelfontSize, labelStyles.firstLabelfontSizeTablet, labelStyles.firstLabelfontSizeMobile);
  const FirstLabelPaddingTop = getPreviewSize(props.deviceType, firstLabelPaddingT, firstLabelPaddingTTablet, firstLabelPaddingTMobile);
  const FirstLabelPaddingRight = getPreviewSize(props.deviceType, firstLabelPaddingR, firstLabelPaddingRTablet, firstLabelPaddingRMobile);
  const FirstLabelPaddingBottom = getPreviewSize(props.deviceType, firstLabelPaddingB, firstLabelPaddingBTablet, firstLabelPaddingBMobile);
  const FirstLabelPaddingLeft = getPreviewSize(props.deviceType, firstLabelPaddingL, firstLabelPaddingLTablet, firstLabelPaddingLMobile);
  const SecondLabelSize = getPreviewSize(props.deviceType, labelStyles.secondLabelfontSize, labelStyles.secondLabelfontSizeTablet, labelStyles.secondLabelfontSizeMobile);
  const SecondLabelPaddingTop = getPreviewSize(props.deviceType, secondLabelPaddingT, secondLabelPaddingTTablet, secondLabelPaddingTMobile);
  const SecondLabelPaddingRight = getPreviewSize(props.deviceType, secondLabelPaddingR, secondLabelPaddingRTablet, secondLabelPaddingRMobile);
  const SecondLabelPaddingBottom = getPreviewSize(props.deviceType, secondLabelPaddingB, secondLabelPaddingBTablet, secondLabelPaddingBMobile);
  const SecondLabelPaddingLeft = getPreviewSize(props.deviceType, secondLabelPaddingL, secondLabelPaddingLTablet, secondLabelPaddingLMobile);
  const ContentHeight = getPreviewSize(props.deviceType, contentStyles.contentHeight, contentStyles.contentHeightTablet, contentStyles.contentHeightMobile);
  const FirstContentSize = getPreviewSize(props.deviceType, firstContentStyles.firstContentfontSize, firstContentStyles.firstContentfontSizeTablet, firstContentStyles.firstContentfontSizeMobile);
  const FirstContentMarginTop = getPreviewSize(props.deviceType, firstContentMarginT, firstContentMarginTTablet, firstContentMarginTMobile);
  const FirstContentMarginRight = getPreviewSize(props.deviceType, firstContentMarginR, firstContentMarginRTablet, firstContentMarginRMobile);
  const FirstContentMarginBottom = getPreviewSize(props.deviceType, firstContentMarginB, firstContentMarginBTablet, firstContentMarginBMobile);
  const FirstContentMarginLeft = getPreviewSize(props.deviceType, firstContentMarginL, firstContentMarginLTablet, firstContentMarginLMobile);
  const ContentPaddingTop = getPreviewSize(props.deviceType, contentPaddingT, contentPaddingTTablet, contentPaddingTMobile);
  const ContentPaddingRight = getPreviewSize(props.deviceType, contentPaddingR, contentPaddingRTablet, contentPaddingRMobile);
  const ContentPaddingBottom = getPreviewSize(props.deviceType, contentPaddingB, contentPaddingBTablet, contentPaddingBMobile);
  const ContentPaddingLeft = getPreviewSize(props.deviceType, contentPaddingL, contentPaddingLTablet, contentPaddingLMobile);
  const SecondContentSize = getPreviewSize(props.deviceType, secondContentStyles.secondContentfontSize, secondContentStyles.secondContentfontSizeTablet, secondContentStyles.secondContentfontSizeMobile);
  const ContainerMarginTop = getPreviewSize(props.deviceType, containerMarginT, containerMarginTTablet, containerMarginTMobile);
  const ContainerMarginRight = getPreviewSize(props.deviceType, containerMarginR, containerMarginRTablet, containerMarginRMobile);
  const ContainerMarginBottom = getPreviewSize(props.deviceType, containerMarginB, containerMarginBTablet, containerMarginBMobile);
  const ContainerMarginLeft = getPreviewSize(props.deviceType, containerMarginL, containerMarginLTablet, containerMarginLMobile);
  const ContainerPaddingTop = getPreviewSize(props.deviceType, containerPaddingT, containerPaddingTTablet, containerPaddingTMobile);
  const ContainerPaddingRight = getPreviewSize(props.deviceType, containerPaddingR, containerPaddingRTablet, containerPaddingRMobile);
  const ContainerPaddingBottom = getPreviewSize(props.deviceType, containerPaddingB, containerPaddingBTablet, containerPaddingBMobile);
  const ContainerPaddingLeft = getPreviewSize(props.deviceType, containerPaddingL, containerPaddingLTablet, containerPaddingLMobile);

  const saveSwitcherStyles = (color, value) => {
    const newColors = { ...switcherStyles
    };
    newColors[color] = value;
    setAttributes({
      switcherStyles: newColors
    });
  };

  const saveLabelStyles = (color, value) => {
    const newColors = { ...labelStyles
    };
    newColors[color] = value;
    setAttributes({
      labelStyles: newColors
    });
  };

  const saveContentStyles = (color, value) => {
    const newColors = { ...contentStyles
    };
    newColors[color] = value;
    setAttributes({
      contentStyles: newColors
    });
  };

  const saveFirstContentStyles = (color, value) => {
    const newColors = { ...firstContentStyles
    };
    newColors[color] = value;
    setAttributes({
      firstContentStyles: newColors
    });
  };

  const saveSecondContentStyles = (color, value) => {
    const newColors = { ...secondContentStyles
    };
    newColors[color] = value;
    setAttributes({
      secondContentStyles: newColors
    });
  };

  const saveContainerStyles = (color, value) => {
    const newColors = { ...containerStyles
    };
    newColors[color] = value;
    setAttributes({
      containerStyles: newColors
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Switcher"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Labels"),
    checked: showLabel,
    onChange: newCheck => setAttributes({
      showLabel: newCheck
    })
  }), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("First Label"),
    value: firstLabel,
    onChange: value => setAttributes({
      firstLabel: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Second Label"),
    value: secondLabel,
    onChange: value => setAttributes({
      secondLabel: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("HTML Tag"),
    options: TAGS,
    value: labelTag,
    onChange: newValue => setAttributes({
      labelTag: newValue
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display"),
    options: DISPLAY,
    value: display,
    onChange: newValue => setAttributes({
      display: newValue
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
    controls: ALIGNS.map(contentAlign => ({
      icon: "editor-align" + contentAlign,
      isActive: contentAlign === align,
      onClick: () => setAttributes({
        align: contentAlign
      })
    }))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Effect"),
    options: EFFECTS,
    value: effect,
    onChange: newEffect => setAttributes({
      effect: newEffect
    })
  }), effect == 'slide' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slide Direction"),
    options: SLIDE,
    value: slide,
    onChange: newEffect => setAttributes({
      slide: newEffect
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content 1"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content", 'premium-block-for-gutenberg'),
    value: firstContent,
    onChange: newEffect => setAttributes({
      firstContent: newEffect
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
    controls: ALIGNS.map(contentAlign => ({
      icon: "editor-align" + contentAlign,
      isActive: contentAlign === firstcontentlign,
      onClick: () => setAttributes({
        firstcontentlign: contentAlign
      })
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content 2"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content", 'premium-block-for-gutenberg'),
    value: secondContent,
    onChange: newEffect => setAttributes({
      secondContent: newEffect
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
    controls: ALIGNS.map(contentAlign => ({
      icon: "editor-align" + contentAlign,
      isActive: contentAlign === secondcontentlign,
      onClick: () => setAttributes({
        secondcontentlign: contentAlign
      })
    }))
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Switcher Style"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Size", 'premium-block-for-gutenberg'),
    value: switcherStyles.switchSize,
    tabletValue: switcherStyles.switchSizeTablet,
    mobileValue: switcherStyles.switchSizeMobile,
    onChange: value => saveSwitcherStyles('switchSize', value),
    onChangeTablet: value => saveSwitcherStyles('switchSizeTablet', value),
    onChangeMobile: value => saveSwitcherStyles('switchSizeMobile', value),
    showUnit: false,
    defaultValue: 15,
    min: 1,
    max: 40
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Controller Border Radius", 'premium-block-for-gutenberg'),
    value: switcherStyles.containerRadius,
    tabletValue: switcherStyles.containerRadiusTablet,
    mobileValue: switcherStyles.containerRadiusMobile,
    onChange: value => saveSwitcherStyles('containerRadius', value),
    onChangeTablet: value => saveSwitcherStyles('containerRadiusTablet', value),
    onChangeMobile: value => saveSwitcherStyles('containerRadiusMobile', value),
    onChangeUnit: key => saveSwitcherStyles('containerRadiusType', key),
    unit: switcherStyles.containerRadiusType,
    showUnit: true,
    defaultValue: 50,
    min: 1,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Switcher Border Radius", 'premium-block-for-gutenberg'),
    value: switcherStyles.switchRadius,
    tabletValue: switcherStyles.switchRadiusTablet,
    mobileValue: switcherStyles.switchRadiusMobile,
    onChange: value => saveSwitcherStyles('switchRadius', value),
    onChangeTablet: value => saveSwitcherStyles('switchRadiusTablet', value),
    onChangeMobile: value => saveSwitcherStyles('switchRadiusMobile', value),
    onChangeUnit: key => saveSwitcherStyles('switchRadiusType', key),
    unit: switcherStyles.switchRadiusType,
    showUnit: true,
    defaultValue: 1.5,
    min: 1,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Controller Shadow", 'premium-blocks-for-gutenberg'),
    boxShadow: true,
    color: switcherStyles.containerShadowColor,
    blur: switcherStyles.containerShadowBlur,
    horizontal: switcherStyles.containerShadowHorizontal,
    vertical: switcherStyles.containerShadowVertical,
    position: switcherStyles.containerShadowPosition,
    onChangeColor: newColor => saveSwitcherStyles('containerShadowColor', newColor),
    onChangeBlur: newBlur => saveSwitcherStyles('containerShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveSwitcherStyles('containerShadowHorizontal', newValue),
    onChangeVertical: newValue => saveSwitcherStyles('containerShadowVertical', newValue),
    onChangePosition: newValue => saveSwitcherStyles('containerShadowPosition', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Switcher Shadow", 'premium-blocks-for-gutenberg'),
    boxShadow: true,
    color: switcherStyles.switchShadowColor,
    blur: switcherStyles.switchShadowBlur,
    horizontal: switcherStyles.switchShadowHorizontal,
    vertical: switcherStyles.switchShadowVertical,
    position: switcherStyles.switchShadowPosition,
    onChangeColor: newColor => saveSwitcherStyles('switchShadowColor', newColor),
    onChangeBlur: newBlur => saveSwitcherStyles('switchShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveSwitcherStyles('switchShadowHorizontal', newValue),
    onChangeVertical: newValue => saveSwitcherStyles('switchShadowVertical', newValue),
    onChangePosition: newValue => saveSwitcherStyles('switchShadowPosition', newValue)
  })), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Labels Style"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spacing", 'premium-block-for-gutenberg'),
    value: labelStyles.labelSpacing,
    tabletValue: labelStyles.labelSpacingTablet,
    mobileValue: labelStyles.labelSpacingMobile,
    onChange: value => saveLabelStyles('labelSpacing', value),
    onChangeTablet: value => saveLabelStyles('labelSpacingTablet', value),
    onChangeMobile: value => saveLabelStyles('labelSpacingMobile', value),
    showUnit: false,
    defaultValue: 15,
    min: 1,
    max: 100
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "premium-content-switcher-labels-style"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("First Label")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Color", 'premium-block-for-gutenberg'),
    colorValue: labelStyles.firstLabelColor,
    colorDefault: '',
    onColorChange: newValue => saveLabelStyles('firstLabelColor', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    components: ["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"],
    setAttributes: saveLabelStyles,
    fontSizeType: {
      value: labelStyles.firstLabelfontSizeType,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("firstLabelfontSizeType")
    },
    fontSize: labelStyles.firstLabelfontSize,
    fontSizeMobile: labelStyles.firstLabelfontSizeMobile,
    fontSizeTablet: labelStyles.firstLabelfontSizeTablet,
    onChangeSize: newSize => saveLabelStyles('firstLabelfontSize', newSize),
    onChangeTabletSize: newSize => saveLabelStyles('firstLabelfontSizeTablet', newSize),
    onChangeMobileSize: newSize => saveLabelStyles('firstLabelfontSizeMobile', newSize),
    weight: labelStyles.firstLabelWeight,
    style: labelStyles.firstLabelStyle,
    spacing: labelStyles.firstLabelLetter,
    upper: labelStyles.firstLabelUpper,
    line: labelStyles.firstLabelLine,
    fontFamily: labelStyles.firstLabelFontFamily,
    onChangeWeight: newWeight => saveLabelStyles('firstLabelWeight', newWeight || 500),
    onChangeStyle: newStyle => saveLabelStyles('firstLabelStyle', newStyle),
    onChangeSpacing: newValue => saveLabelStyles('firstLabelLetter', newValue),
    onChangeUpper: check => saveLabelStyles('firstLabelUpper', check),
    onChangeLine: newValue => saveLabelStyles('firstLabelLine', newValue),
    onChangeFamily: fontFamily => saveLabelStyles('firstLabelFontFamily', fontFamily)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Shadow", 'premium-blocks-for-gutenberg'),
    color: labelStyles.firstLabelShadowColor,
    blur: labelStyles.firstLabelShadowBlur,
    horizontal: labelStyles.firstLabelShadowHorizontal,
    vertical: labelStyles.firstLabelShadowVertical,
    onChangeColor: newColor => saveLabelStyles('firstLabelShadowColor', newColor),
    onChangeBlur: newBlur => saveLabelStyles('firstLabelShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveLabelStyles('firstLabelShadowHorizontal', newValue),
    onChangeVertical: newValue => saveLabelStyles('firstLabelShadowVertical', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_11__["default"], {
    borderType: labelStyles.firstLabelborderType,
    borderWidth: firstLabelBorderWidth,
    top: firstLabelBorderTop,
    right: firstLabelBorderRight,
    bottom: firstLabelBorderBottom,
    left: firstLabelBorderLeft,
    borderColor: labelStyles.firstLabelborderColor,
    borderRadius: labelStyles.firstLabelborderRadius,
    onChangeType: newType => saveLabelStyles('firstLabelborderType', newType),
    onChangeWidth: _ref => {
      let {
        top,
        right,
        bottom,
        left
      } = _ref;
      return setAttributes({
        firstLabelBorderUpdated: true,
        firstLabelBorderTop: top,
        firstLabelBorderRight: right,
        firstLabelBorderBottom: bottom,
        firstLabelBorderLeft: left
      });
    },
    onChangeColor: colorValue => saveLabelStyles('firstLabelborderColor', colorValue),
    onChangeRadius: newrRadius => saveLabelStyles('firstLabelborderRadius', newrRadius)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", 'premium-blocks-for-gutenberg'),
    boxShadow: true,
    color: labelStyles.firstLabelBoxShadowColor,
    blur: labelStyles.firstLabelBoxShadowBlur,
    horizontal: labelStyles.firstLabelBoxShadowHorizontal,
    vertical: labelStyles.firstLabelBoxShadowVertical,
    position: labelStyles.firstLabelBoxShadowPosition,
    onChangeColor: newColor => saveLabelStyles('firstLabelBoxShadowColor', newColor),
    onChangeBlur: newBlur => saveLabelStyles('firstLabelBoxShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveLabelStyles('firstLabelBoxShadowHorizontal', newValue),
    onChangeVertical: newValue => saveLabelStyles('firstLabelBoxShadowVertical', newValue),
    onChangePosition: newValue => saveLabelStyles('firstLabelBoxShadowPosition', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Responsive_Padding__WEBPACK_IMPORTED_MODULE_9__["default"], {
    paddingTop: firstLabelPaddingT,
    paddingRight: firstLabelPaddingR,
    paddingBottom: firstLabelPaddingB,
    paddingLeft: firstLabelPaddingL,
    paddingTopTablet: firstLabelPaddingTTablet,
    paddingRightTablet: firstLabelPaddingRTablet,
    paddingBottomTablet: firstLabelPaddingBTablet,
    paddingLeftTablet: firstLabelPaddingLTablet,
    paddingTopMobile: firstLabelPaddingTMobile,
    paddingRightMobile: firstLabelPaddingRMobile,
    paddingBottomMobile: firstLabelPaddingBMobile,
    paddingLeftMobile: firstLabelPaddingLMobile,
    showUnits: true,
    selectedUnit: labelStyles.firstLabelPaddingType,
    onChangePadSizeUnit: newvalue => saveLabelStyles('firstLabelPaddingType', newvalue),
    onChangePaddingTop: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstLabelPaddingT: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstLabelPaddingTTablet: newValue
        });
      } else {
        setAttributes({
          firstLabelPaddingTMobile: newValue
        });
      }
    },
    onChangePaddingRight: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstLabelPaddingR: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstLabelPaddingRTablet: newValue
        });
      } else {
        setAttributes({
          firstLabelPaddingRMobile: newValue
        });
      }
    },
    onChangePaddingBottom: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstLabelPaddingB: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstLabelPaddingBTablet: newValue
        });
      } else {
        setAttributes({
          firstLabelPaddingBMobile: newValue
        });
      }
    },
    onChangePaddingLeft: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstLabelPaddingL: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstLabelPaddingLTablet: newValue
        });
      } else {
        setAttributes({
          firstLabelPaddingLMobile: newValue
        });
      }
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "premium-content-switcher-labels-style"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Second Label")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Color", 'premium-block-for-gutenberg'),
    colorValue: labelStyles.secondLabelColor,
    colorDefault: '',
    onColorChange: newValue => saveLabelStyles('secondLabelColor', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    components: ["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"],
    setAttributes: saveLabelStyles,
    fontSizeType: {
      value: labelStyles.secondLabelfontSizeType,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("secondLabelfontSizeType")
    },
    fontSize: labelStyles.secondLabelfontSize,
    fontSizeMobile: labelStyles.secondLabelfontSizeMobile,
    fontSizeTablet: labelStyles.secondLabelfontSizeTablet,
    onChangeSize: newSize => saveLabelStyles('secondLabelfontSize', newSize),
    onChangeTabletSize: newSize => saveLabelStyles('secondLabelfontSizeTablet', newSize),
    onChangeMobileSize: newSize => saveLabelStyles('secondLabelfontSizeMobile', newSize),
    weight: labelStyles.secondLabelWeight,
    style: labelStyles.secondLabelStyle,
    spacing: labelStyles.secondLabelLetter,
    upper: labelStyles.secondLabelUpper,
    line: labelStyles.secondLabelLine,
    fontFamily: labelStyles.secondLabelFontFamily,
    onChangeWeight: newWeight => saveLabelStyles('secondLabelWeight', newWeight || 500),
    onChangeStyle: newStyle => saveLabelStyles('secondLabelStyle', newStyle),
    onChangeSpacing: newValue => saveLabelStyles('secondLabelLetter', newValue),
    onChangeUpper: check => saveLabelStyles('secondLabelUpper', check),
    onChangeLine: newValue => saveLabelStyles('secondLabelLine', newValue),
    onChangeFamily: fontFamily => saveLabelStyles('secondLabelFontFamily', fontFamily)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Shadow", 'premium-blocks-for-gutenberg'),
    color: labelStyles.secondLabelShadowColor,
    blur: labelStyles.secondLabelShadowBlur,
    horizontal: labelStyles.secondLabelShadowHorizontal,
    vertical: labelStyles.secondLabelShadowVertical,
    onChangeColor: newColor => saveLabelStyles('secondLabelShadowColor', newColor),
    onChangeBlur: newBlur => saveLabelStyles('secondLabelShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveLabelStyles('secondLabelShadowHorizontal', newValue),
    onChangeVertical: newValue => saveLabelStyles('secondLabelShadowVertical', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_11__["default"], {
    borderType: labelStyles.secondLabelborderType,
    borderWidth: secondLabelBorderWidth,
    top: secondLabelBorderTop,
    right: secondLabelBorderRight,
    bottom: secondLabelBorderBottom,
    left: secondLabelBorderLeft,
    borderColor: labelStyles.secondLabelborderColor,
    borderRadius: labelStyles.secondLabelborderRadius,
    onChangeType: newType => saveLabelStyles('secondLabelborderType', newType),
    onChangeWidth: _ref2 => {
      let {
        top,
        right,
        bottom,
        left
      } = _ref2;
      return setAttributes({
        secondLabelBorderUpdated: true,
        secondLabelBorderTop: top,
        secondLabelBorderRight: right,
        secondLabelBorderBottom: bottom,
        secondLabelBorderLeft: left
      });
    },
    onChangeColor: colorValue => saveLabelStyles('secondLabelborderColor', colorValue),
    onChangeRadius: newrRadius => saveLabelStyles('secondLabelborderRadius', newrRadius)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", 'premium-blocks-for-gutenberg'),
    boxShadow: true,
    color: labelStyles.secondLabelBoxShadowColor,
    blur: labelStyles.secondLabelBoxShadowBlur,
    horizontal: labelStyles.secondLabelBoxShadowHorizontal,
    vertical: labelStyles.secondLabelBoxShadowVertical,
    position: labelStyles.secondLabelBoxShadowPosition,
    onChangeColor: newColor => saveLabelStyles('secondLabelBoxShadowColor', newColor),
    onChangeBlur: newBlur => saveLabelStyles('secondLabelBoxShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveLabelStyles('secondLabelBoxShadowHorizontal', newValue),
    onChangeVertical: newValue => saveLabelStyles('secondLabelBoxShadowVertical', newValue),
    onChangePosition: newValue => saveLabelStyles('secondLabelBoxShadowPosition', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Responsive_Padding__WEBPACK_IMPORTED_MODULE_9__["default"], {
    paddingTop: secondLabelPaddingT,
    paddingRight: secondLabelPaddingR,
    paddingBottom: secondLabelPaddingB,
    paddingLeft: secondLabelPaddingL,
    paddingTopTablet: secondLabelPaddingTTablet,
    paddingRightTablet: secondLabelPaddingRTablet,
    paddingBottomTablet: secondLabelPaddingBTablet,
    paddingLeftTablet: secondLabelPaddingLTablet,
    paddingTopMobile: secondLabelPaddingTMobile,
    paddingRightMobile: secondLabelPaddingRMobile,
    paddingBottomMobile: secondLabelPaddingBMobile,
    paddingLeftMobile: secondLabelPaddingLMobile,
    showUnits: true,
    selectedUnit: labelStyles.secondLabelPaddingType,
    onChangePadSizeUnit: newvalue => saveLabelStyles('secondLabelPaddingType', newvalue),
    onChangePaddingTop: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          secondLabelPaddingT: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          secondLabelPaddingTTablet: newValue
        });
      } else {
        setAttributes({
          secondLabelPaddingTMobile: newValue
        });
      }
    },
    onChangePaddingRight: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          secondLabelPaddingR: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          secondLabelPaddingRTablet: newValue
        });
      } else {
        setAttributes({
          secondLabelPaddingRMobile: newValue
        });
      }
    },
    onChangePaddingBottom: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          secondLabelPaddingB: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          secondLabelPaddingBTablet: newValue
        });
      } else {
        setAttributes({
          secondLabelPaddingBMobile: newValue
        });
      }
    },
    onChangePaddingLeft: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          secondLabelPaddingL: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          secondLabelPaddingLTablet: newValue
        });
      } else {
        setAttributes({
          secondLabelPaddingLMobile: newValue
        });
      }
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Style"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", 'premium-block-for-gutenberg'),
    value: contentStyles.contentHeight,
    tabletValue: contentStyles.contentHeightTablet,
    mobileValue: contentStyles.contentHeightMobile,
    onChange: value => saveContentStyles('contentHeight', value),
    onChangeTablet: value => saveContentStyles('contentHeightTablet', value),
    onChangeMobile: value => saveContentStyles('contentHeightMobile', value),
    onChangeUnit: key => saveContentStyles('contentHeightType', key),
    unit: contentStyles.contentHeightType,
    showUnit: true,
    defaultValue: 100,
    min: 1,
    max: 1000
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
    className: "premium-color-tabpanel",
    activeClass: "active-tab",
    tabs: [{
      name: "first",
      title: "First Content",
      className: "premium-tab"
    }, {
      name: "second",
      title: "Second Content",
      className: "premium-tab"
    }]
  }, tab => {
    let tabout;

    if ("first" === tab.name) {
      tabout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Color", 'premium-block-for-gutenberg'),
        colorValue: firstContentStyles.firstContentColor,
        colorDefault: '',
        onColorChange: newValue => saveFirstContentStyles('firstContentColor', newValue)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", 'premium-block-for-gutenberg'),
        colorValue: firstContentStyles.firstContentBGColor,
        colorDefault: '',
        onColorChange: newValue => saveFirstContentStyles('firstContentBGColor', newValue)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        components: ["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"],
        setAttributes: saveFirstContentStyles,
        fontSizeType: {
          value: firstContentStyles.firstContentfontSizeType,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("firstContentfontSizeType")
        },
        fontSize: firstContentStyles.firstContentfontSize,
        fontSizeMobile: firstContentStyles.firstContentfontSizeMobile,
        fontSizeTablet: firstContentStyles.firstContentfontSizeTablet,
        onChangeSize: newSize => saveFirstContentStyles('firstContentfontSize', newSize),
        onChangeTabletSize: newSize => saveFirstContentStyles('firstContentfontSizeTablet', newSize),
        onChangeMobileSize: newSize => saveFirstContentStyles('firstContentfontSizeMobile', newSize),
        weight: firstContentStyles.firstContentWeight,
        style: firstContentStyles.firstContentStyle,
        spacing: firstContentStyles.firstContentLetter,
        upper: firstContentStyles.firstContentUpper,
        line: firstContentStyles.firstContentLine,
        fontFamily: firstContentStyles.firstContentFontFamily,
        onChangeWeight: newWeight => saveFirstContentStyles('firstContentWeight', newWeight || 500),
        onChangeStyle: newStyle => saveFirstContentStyles('firstContentStyle', newStyle),
        onChangeSpacing: newValue => saveFirstContentStyles('firstContentLetter', newValue),
        onChangeUpper: check => saveFirstContentStyles('firstContentUpper', check),
        onChangeLine: newValue => saveFirstContentStyles('firstContentLine', newValue),
        onChangeFamily: fontFamily => saveFirstContentStyles('firstContentFontFamily', fontFamily)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Shadow", 'premium-blocks-for-gutenberg'),
        color: firstContentStyles.firstContentShadowColor,
        blur: firstContentStyles.firstContentShadowBlur,
        horizontal: firstContentStyles.firstContentShadowHorizontal,
        vertical: firstContentStyles.firstContentShadowVertical,
        onChangeColor: newColor => saveFirstContentStyles('firstContentShadowColor', newColor),
        onChangeBlur: newBlur => saveFirstContentStyles('firstContentShadowBlur', newBlur),
        onChangehHorizontal: newValue => saveFirstContentStyles('firstContentShadowHorizontal', newValue),
        onChangeVertical: newValue => saveFirstContentStyles('firstContentShadowVertical', newValue)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_11__["default"], {
        borderType: firstContentStyles.firstContentborderType,
        borderWidth: firstContentBorderWidth,
        top: firstContentBorderTop,
        right: firstContentBorderRight,
        bottom: firstContentBorderBottom,
        left: firstContentBorderLeft,
        borderColor: firstContentStyles.firstContentborderColor,
        borderRadius: firstContentStyles.firstContentborderRadius,
        onChangeType: newType => saveFirstContentStyles('firstContentborderType', newType),
        onChangeWidth: _ref3 => {
          let {
            top,
            right,
            bottom,
            left
          } = _ref3;
          return setAttributes({
            firstContentBorderUpdated: true,
            firstContentBorderTop: top,
            firstContentBorderRight: right,
            firstContentBorderBottom: bottom,
            firstContentBorderLeft: left
          });
        },
        onChangeColor: colorValue => saveFirstContentStyles('firstContentborderColor', colorValue),
        onChangeRadius: newrRadius => saveFirstContentStyles('firstContentborderRadius', newrRadius)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", 'premium-blocks-for-gutenberg'),
        boxShadow: true,
        color: firstContentStyles.firstContentBoxShadowColor,
        blur: firstContentStyles.firstContentBoxShadowBlur,
        horizontal: firstContentStyles.firstContentBoxShadowHorizontal,
        vertical: firstContentStyles.firstContentBoxShadowVertical,
        position: firstContentStyles.firstContentBoxShadowPosition,
        onChangeColor: newColor => saveFirstContentStyles('firstContentBoxShadowColor', newColor),
        onChangeBlur: newBlur => saveFirstContentStyles('firstContentBoxShadowBlur', newBlur),
        onChangehHorizontal: newValue => saveFirstContentStyles('firstContentBoxShadowHorizontal', newValue),
        onChangeVertical: newValue => saveFirstContentStyles('firstContentBoxShadowVertical', newValue),
        onChangePosition: newValue => saveFirstContentStyles('firstContentBoxShadowPosition', newValue)
      }));
    }

    if ("second" === tab.name) {
      tabout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Color", 'premium-block-for-gutenberg'),
        colorValue: secondContentStyles.secondContentColor,
        colorDefault: '',
        onColorChange: newValue => saveSecondContentStyles('secondContentColor', newValue)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", 'premium-block-for-gutenberg'),
        colorValue: secondContentStyles.secondContentBGColor,
        colorDefault: '',
        onColorChange: newValue => saveSecondContentStyles('secondContentBGColor', newValue)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_typo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        components: ["responsiveSize", "weight", "line", "style", "upper", "spacing", "family"],
        setAttributes: saveSecondContentStyles,
        fontSizeType: {
          value: secondContentStyles.secondContentfontSizeType,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("secondContentfontSizeType")
        },
        fontSize: secondContentStyles.secondContentfontSize,
        fontSizeMobile: secondContentStyles.secondContentfontSizeMobile,
        fontSizeTablet: secondContentStyles.secondContentfontSizeTablet,
        onChangeSize: newSize => saveSecondContentStyles('secondContentfontSize', newSize),
        onChangeTabletSize: newSize => saveSecondContentStyles('secondContentfontSizeTablet', newSize),
        onChangeMobileSize: newSize => saveSecondContentStyles('secondContentfontSizeMobile', newSize),
        weight: secondContentStyles.secondContentWeight,
        style: secondContentStyles.secondContentStyle,
        spacing: secondContentStyles.secondContentLetter,
        upper: secondContentStyles.secondContentUpper,
        line: secondContentStyles.secondContentLine,
        fontFamily: secondContentStyles.secondContentFontFamily,
        onChangeWeight: newWeight => saveSecondContentStyles('secondContentWeight', newWeight || 500),
        onChangeStyle: newStyle => saveSecondContentStyles('secondContentStyle', newStyle),
        onChangeSpacing: newValue => saveSecondContentStyles('secondContentLetter', newValue),
        onChangeUpper: check => saveSecondContentStyles('secondContentUpper', check),
        onChangeLine: newValue => saveSecondContentStyles('secondContentLine', newValue),
        onChangeFamily: fontFamily => saveSecondContentStyles('secondContentFontFamily', fontFamily)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Shadow", 'premium-blocks-for-gutenberg'),
        color: secondContentStyles.secondContentShadowColor,
        blur: secondContentStyles.secondContentShadowBlur,
        horizontal: secondContentStyles.secondContentShadowHorizontal,
        vertical: secondContentStyles.secondContentShadowVertical,
        onChangeColor: newColor => saveSecondContentStyles('secondContentShadowColor', newColor),
        onChangeBlur: newBlur => saveSecondContentStyles('secondContentShadowBlur', newBlur),
        onChangehHorizontal: newValue => saveSecondContentStyles('secondContentShadowHorizontal', newValue),
        onChangeVertical: newValue => saveSecondContentStyles('secondContentShadowVertical', newValue)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_11__["default"], {
        borderType: secondContentStyles.secondContentborderType,
        borderWidth: secondContentBorderWidth,
        top: secondContentBorderTop,
        right: secondContentBorderRight,
        bottom: secondContentBorderBottom,
        left: secondContentBorderLeft,
        borderColor: secondContentStyles.secondContentborderColor,
        borderRadius: secondContentStyles.secondContentborderRadius,
        onChangeType: newType => saveSecondContentStyles('secondContentborderType', newType),
        onChangeWidth: _ref4 => {
          let {
            top,
            right,
            bottom,
            left
          } = _ref4;
          return setAttributes({
            secondContentBorderUpdated: true,
            secondContentBorderTop: top,
            secondContentBorderRight: right,
            secondContentBorderBottom: bottom,
            secondContentBorderLeft: left
          });
        },
        onChangeColor: colorValue => saveSecondContentStyles('secondContentborderColor', colorValue),
        onChangeRadius: newrRadius => saveSecondContentStyles('secondContentborderRadius', newrRadius)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", 'premium-blocks-for-gutenberg'),
        boxShadow: true,
        color: secondContentStyles.secondContentBoxShadowColor,
        blur: secondContentStyles.secondContentBoxShadowBlur,
        horizontal: secondContentStyles.secondContentBoxShadowHorizontal,
        vertical: secondContentStyles.secondContentBoxShadowVertical,
        position: secondContentStyles.secondContentBoxShadowPosition,
        onChangeColor: newColor => saveSecondContentStyles('secondContentBoxShadowColor', newColor),
        onChangeBlur: newBlur => saveSecondContentStyles('secondContentBoxShadowBlur', newBlur),
        onChangehHorizontal: newValue => saveSecondContentStyles('secondContentBoxShadowHorizontal', newValue),
        onChangeVertical: newValue => saveSecondContentStyles('secondContentBoxShadowVertical', newValue),
        onChangePosition: newValue => saveSecondContentStyles('secondContentBoxShadowPosition', newValue)
      }));
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tabout);
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Responsive_Margin__WEBPACK_IMPORTED_MODULE_10__["default"], {
    directions: ["all"],
    marginTop: firstContentMarginT,
    marginRight: firstContentMarginR,
    marginBottom: firstContentMarginB,
    marginLeft: firstContentMarginL,
    marginTopTablet: firstContentMarginTTablet,
    marginRightTablet: firstContentMarginRTablet,
    marginBottomTablet: firstContentMarginBTablet,
    marginLeftTablet: firstContentMarginLTablet,
    marginTopMobile: firstContentMarginTMobile,
    marginRightMobile: firstContentMarginRMobile,
    marginBottomMobile: firstContentMarginBMobile,
    marginLeftMobile: firstContentMarginLMobile,
    showUnits: true,
    onChangeMarSizeUnit: newvalue => saveFirstContentStyles('firstContentMarginType', newvalue),
    selectedUnit: firstContentStyles.firstContentMarginType,
    onChangeMarginTop: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstContentMarginT: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstContentMarginTTablet: newValue
        });
      } else {
        setAttributes({
          firstContentMarginTMobile: newValue
        });
      }
    },
    onChangeMarginRight: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstContentMarginR: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstContentMarginRTablet: newValue
        });
      } else {
        setAttributes({
          firstContentMarginRMobile: newValue
        });
      }
    },
    onChangeMarginBottom: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstContentMarginB: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstContentMarginBTablet: newValue
        });
      } else {
        setAttributes({
          firstContentMarginBMobile: newValue
        });
      }
    },
    onChangeMarginLeft: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          firstContentMarginL: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          firstContentMarginLTablet: newValue
        });
      } else {
        setAttributes({
          firstContentMarginLMobile: newValue
        });
      }
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Responsive_Padding__WEBPACK_IMPORTED_MODULE_9__["default"], {
    paddingTop: contentPaddingT,
    paddingRight: contentPaddingR,
    paddingBottom: contentPaddingB,
    paddingLeft: contentPaddingL,
    paddingTopTablet: contentPaddingTTablet,
    paddingRightTablet: contentPaddingRTablet,
    paddingBottomTablet: contentPaddingBTablet,
    paddingLeftTablet: contentPaddingLTablet,
    paddingTopMobile: contentPaddingTMobile,
    paddingRightMobile: contentPaddingRMobile,
    paddingBottomMobile: contentPaddingBMobile,
    paddingLeftMobile: contentPaddingLMobile,
    showUnits: true,
    selectedUnit: firstContentStyles.firstContentPaddingType,
    onChangePadSizeUnit: newvalue => saveFirstContentStyles('firstContentPaddingType', newvalue),
    onChangePaddingTop: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          contentPaddingT: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          contentPaddingTTablet: newValue
        });
      } else {
        setAttributes({
          contentPaddingTMobile: newValue
        });
      }
    },
    onChangePaddingRight: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          contentPaddingR: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          contentPaddingRTablet: newValue
        });
      } else {
        setAttributes({
          contentPaddingRMobile: newValue
        });
      }
    },
    onChangePaddingBottom: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          contentPaddingB: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          contentPaddingBTablet: newValue
        });
      } else {
        setAttributes({
          contentPaddingBMobile: newValue
        });
      }
    },
    onChangePaddingLeft: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          contentPaddingL: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          contentPaddingLTablet: newValue
        });
      } else {
        setAttributes({
          contentPaddingLMobile: newValue
        });
      }
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container Style"),
    className: "premium-panel-body",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_premium_border__WEBPACK_IMPORTED_MODULE_11__["default"], {
    borderType: containerStyles.containerborderType,
    borderWidth: containerBorderWidth,
    top: containerBorderTop,
    right: containerBorderRight,
    bottom: containerBorderBottom,
    left: containerBorderLeft,
    borderColor: containerStyles.containerborderColor,
    borderRadius: containerStyles.containerborderRadius,
    onChangeType: newType => saveContainerStyles('containerborderType', newType),
    onChangeWidth: _ref5 => {
      let {
        top,
        right,
        bottom,
        left
      } = _ref5;
      return setAttributes({
        containerBorderUpdated: true,
        containerBorderTop: top,
        containerBorderRight: right,
        containerBorderBottom: bottom,
        containerBorderLeft: left
      });
    },
    onChangeColor: colorValue => saveContainerStyles('containerborderColor', colorValue),
    onChangeRadius: newrRadius => saveContainerStyles('containerborderRadius', newrRadius)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_PremiumShadow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", 'premium-blocks-for-gutenberg'),
    boxShadow: true,
    color: containerStyles.containerBoxShadowColor,
    blur: containerStyles.containerBoxShadowBlur,
    horizontal: containerStyles.containerBoxShadowHorizontal,
    vertical: containerStyles.containerBoxShadowVertical,
    position: containerStyles.containerBoxShadowPosition,
    onChangeColor: newColor => saveContainerStyles('containerBoxShadowColor', newColor),
    onChangeBlur: newBlur => saveContainerStyles('containerBoxShadowBlur', newBlur),
    onChangehHorizontal: newValue => saveContainerStyles('containerBoxShadowHorizontal', newValue),
    onChangeVertical: newValue => saveContainerStyles('containerBoxShadowVertical', newValue),
    onChangePosition: newValue => saveContainerStyles('containerBoxShadowPosition', newValue)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Responsive_Margin__WEBPACK_IMPORTED_MODULE_10__["default"], {
    directions: ["all"],
    marginTop: containerMarginT,
    marginRight: containerMarginR,
    marginBottom: containerMarginB,
    marginLeft: containerMarginL,
    marginTopTablet: containerMarginTTablet,
    marginRightTablet: containerMarginRTablet,
    marginBottomTablet: containerMarginBTablet,
    marginLeftTablet: containerMarginLTablet,
    marginTopMobile: containerMarginTMobile,
    marginRightMobile: containerMarginRMobile,
    marginBottomMobile: containerMarginBMobile,
    marginLeftMobile: containerMarginLMobile,
    showUnits: true,
    onChangeMarSizeUnit: newvalue => saveContainerStyles('iconMarginType', newvalue),
    selectedUnit: containerStyles.iconMarginType,
    onChangeMarginTop: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerMarginT: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerMarginTTablet: newValue
        });
      } else {
        setAttributes({
          containerMarginTMobile: newValue
        });
      }
    },
    onChangeMarginRight: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerMarginR: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerMarginRTablet: newValue
        });
      } else {
        setAttributes({
          containerMarginRMobile: newValue
        });
      }
    },
    onChangeMarginBottom: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerMarginB: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerMarginBTablet: newValue
        });
      } else {
        setAttributes({
          containerMarginBMobile: newValue
        });
      }
    },
    onChangeMarginLeft: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerMarginL: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerMarginLTablet: newValue
        });
      } else {
        setAttributes({
          containerMarginLMobile: newValue
        });
      }
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Premium_Responsive_Padding__WEBPACK_IMPORTED_MODULE_9__["default"], {
    paddingTop: containerPaddingT,
    paddingRight: containerPaddingR,
    paddingBottom: containerPaddingB,
    paddingLeft: containerPaddingL,
    paddingTopTablet: containerPaddingTTablet,
    paddingRightTablet: containerPaddingRTablet,
    paddingBottomTablet: containerPaddingBTablet,
    paddingLeftTablet: containerPaddingLTablet,
    paddingTopMobile: containerPaddingTMobile,
    paddingRightMobile: containerPaddingRMobile,
    paddingBottomMobile: containerPaddingBMobile,
    paddingLeftMobile: containerPaddingLMobile,
    showUnits: true,
    selectedUnit: containerStyles.iconPaddingType,
    onChangePadSizeUnit: newvalue => saveContainerStyles('iconPaddingType', newvalue),
    onChangePaddingTop: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerPaddingT: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerPaddingTTablet: newValue
        });
      } else {
        setAttributes({
          containerPaddingTMobile: newValue
        });
      }
    },
    onChangePaddingRight: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerPaddingR: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerPaddingRTablet: newValue
        });
      } else {
        setAttributes({
          containerPaddingRMobile: newValue
        });
      }
    },
    onChangePaddingBottom: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerPaddingB: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerPaddingBTablet: newValue
        });
      } else {
        setAttributes({
          containerPaddingBMobile: newValue
        });
      }
    },
    onChangePaddingLeft: (device, newValue) => {
      if (device === "desktop") {
        setAttributes({
          containerPaddingL: newValue
        });
      } else if (device === "tablet") {
        setAttributes({
          containerPaddingLTablet: newValue
        });
      } else {
        setAttributes({
          containerPaddingLMobile: newValue
        });
      }
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
    group: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: align,
    onChange: newAlignment => {
      setAttributes({
        align: newAlignment
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider:before {
                         border-radius: ${ContainerBorderRadius}${switcherStyles.containerRadiusType} !important;
                         box-shadow: ${switcherStyles.containerShadowHorizontal}px ${switcherStyles.containerShadowVertical}px ${switcherStyles.containerShadowBlur}px ${switcherStyles.containerShadowColor} ${switcherStyles.containerShadowPosition};
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-switch-slider {
                        border-radius: ${SwitcherBorderRadius}${switcherStyles.switchRadiusType} !important;
                         box-shadow: ${switcherStyles.switchShadowHorizontal}px ${switcherStyles.switchShadowVertical}px ${switcherStyles.switchShadowBlur}px ${switcherStyles.switchShadowColor} ${switcherStyles.switchShadowPosition};
                     }
                     #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-first-label {
                         margin-right: ${LabelSpacing}px !important;
                    }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-inline .premium-content-switcher-second-label {
                        margin-left: ${LabelSpacing}px !important;
                    }
                   #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-first-label {
                         margin-bottom: ${LabelSpacing}px !important;
                     }
                    #premium-content-switcher-${block_id} .premium-content-switcher-toggle-block .premium-content-switcher-second-label {
                        margin-top: ${LabelSpacing}px !important;
                    }
                 `), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    //  { ...useBlockProps({
    //     className: classnames(
    //         `${isEditing ? "active" : ""}`
    //     ),
    // }) }
    id: `premium-content-switcher-${block_id}`,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, `premium-block-${props.clientId}`),
    style: {
      textAlign: align
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-content-switcher`,
    style: {
      textAlign: align,
      backgroundColor: backgroundType === "solid" ? containerStyles.containerBack : "transparent",
      boxShadow: `${containerStyles.containerBoxShadowHorizontal}px ${containerStyles.containerBoxShadowVertical}px ${containerStyles.containerBoxShadowBlur}px ${containerStyles.containerBoxShadowColor} ${containerStyles.containerBoxShadowPosition}`,
      backgroundImage: btnbg,
      backgroundRepeat: containerStyles.backgroundRepeat,
      backgroundPosition: containerStyles.backgroundPosition,
      backgroundSize: containerStyles.backgroundSize,
      backgroundAttachment: containerStyles.fixed ? "fixed" : "unset",
      borderStyle: containerStyles.containerborderType,
      borderWidth: containerBorderUpdated ? `${containerBorderTop}px ${containerBorderRight}px ${containerBorderBottom}px ${containerBorderLeft}px` : containerBorderWidth + "px",
      borderRadius: containerStyles.containerborderRadius + "px",
      borderColor: containerStyles.containerborderColor,
      paddingTop: ContainerPaddingTop + containerStyles.containerPaddingType,
      paddingRight: ContainerPaddingRight + containerStyles.containerPaddingType,
      paddingBottom: ContainerPaddingBottom + containerStyles.containerPaddingType,
      paddingLeft: ContainerPaddingLeft + containerStyles.containerPaddingType,
      marginTop: ContainerMarginTop + containerStyles.containerMarginType,
      marginBottom: ContainerMarginBottom + containerStyles.containerMarginType,
      marginLeft: ContainerMarginLeft + containerStyles.containerMarginType,
      marginRight: ContainerMarginRight + containerStyles.containerMarginType
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-content-switcher-toggle-${display}`,
    style: {
      textAlign: align,
      justifyContent: align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align,
      alignItems: display == "inline" ? "center" : align == "right" ? "flex-end" : align == "left" ? 'flex-start' : align
    }
  }, showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-content-switcher-first-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: labelTag.toLowerCase(),
    className: `premium-content-switcher-${display}-editing`,
    onChange: newValue => setAttributes({
      firstLabel: newValue
    }),
    value: firstLabel,
    style: {
      color: labelStyles.firstLabelColor,
      fontSize: FirstLabelSize + labelStyles.firstLabelfontSizeType,
      letterSpacing: labelStyles.firstLabelLetter + "px",
      textTransform: labelStyles.firstLabelUpper ? "uppercase" : "none",
      fontStyle: labelStyles.firstLabelStyle,
      fontWeight: labelStyles.firstLabelWeight,
      lineHeight: (labelStyles.firstLabelLine ? labelStyles.firstLabelLine : "") + "px",
      fontFamily: labelStyles.firstLabelFontFamily,
      borderStyle: labelStyles.firstLabelborderType,
      borderWidth: firstLabelBorderUpdated ? `${firstLabelBorderTop}px ${firstLabelBorderRight}px ${firstLabelBorderBottom}px ${firstLabelBorderLeft}px` : firstLabelBorderWidth + "px",
      borderRadius: labelStyles.firstLabelborderRadius + "px",
      borderColor: labelStyles.firstLabelborderColor,
      paddingTop: FirstLabelPaddingTop + labelStyles.firstLabelPaddingType,
      paddingBottom: FirstLabelPaddingBottom + labelStyles.firstLabelPaddingType,
      paddingLeft: FirstLabelPaddingLeft + labelStyles.firstLabelPaddingType,
      paddingRight: FirstLabelPaddingRight + labelStyles.firstLabelPaddingType,
      textShadow: `${labelStyles.firstLabelShadowHorizontal}px ${labelStyles.firstLabelShadowVertical}px ${labelStyles.firstLabelShadowBlur}px ${labelStyles.firstLabelShadowColor}`,
      boxShadow: `${labelStyles.firstLabelBoxShadowHorizontal}px ${labelStyles.firstLabelBoxShadowVertical}px ${labelStyles.firstLabelBoxShadowBlur}px ${labelStyles.firstLabelBoxShadowColor} ${labelStyles.firstLabelBoxShadowPosition}`
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-content-switcher-toggle-switch",
    style: {
      fontSize: SwitcherSize + 'px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `premium-content-switcher-toggle-switch-label`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: inputSwitch,
    type: "checkbox",
    className: `premium-content-switcher-toggle-switch-input ${props.clientId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "premium-content-switcher-toggle-switch-slider round",
    style: {// borderRadius: switchRadius + "px"
    }
  }))), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-content-switcher-second-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: labelTag.toLowerCase(),
    className: `premium-content-switcher-${display}-editing`,
    onChange: newValue => setAttributes({
      secondLabel: newValue
    }),
    value: secondLabel,
    style: {
      color: labelStyles.secondLabelColor,
      fontSize: SecondLabelSize + labelStyles.secondLabelfontSizeType,
      letterSpacing: labelStyles.secondLabelLetter + "px",
      textTransform: labelStyles.secondLabelUpper ? "uppercase" : "none",
      fontStyle: labelStyles.secondLabelStyle,
      fontWeight: labelStyles.secondLabelWeight,
      lineHeight: (labelStyles.secondLabelLine ? labelStyles.secondLabelLine : "") + "px",
      fontFamily: labelStyles.secondLabelFontFamily,
      borderStyle: labelStyles.secondLabelborderType,
      borderWidth: secondLabelBorderUpdated ? `${secondLabelBorderTop}px ${secondLabelBorderRight}px ${secondLabelBorderBottom}px ${secondLabelBorderLeft}px` : secondLabelBorderWidth + "px",
      borderRadius: labelStyles.secondLabelborderRadius + "px",
      borderColor: labelStyles.secondLabelborderColor,
      paddingTop: SecondLabelPaddingTop + labelStyles.secondLabelPaddingType,
      paddingBottom: SecondLabelPaddingBottom + labelStyles.secondLabelPaddingType,
      paddingLeft: SecondLabelPaddingLeft + labelStyles.secondLabelPaddingType,
      paddingRight: SecondLabelPaddingRight + labelStyles.secondLabelPaddingType,
      textShadow: `${labelStyles.secondLabelShadowHorizontal}px ${labelStyles.secondLabelShadowVertical}px ${labelStyles.secondLabelShadowBlur}px ${labelStyles.secondLabelShadowColor}`,
      boxShadow: `${labelStyles.secondLabelBoxShadowHorizontal}px ${labelStyles.secondLabelBoxShadowVertical}px ${labelStyles.secondLabelBoxShadowBlur}px ${labelStyles.secondLabelBoxShadowColor} ${labelStyles.secondLabelBoxShadowPosition}`
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`,
    style: {
      marginTop: FirstContentMarginTop + firstContentStyles.firstContentMarginType,
      marginBottom: FirstContentMarginBottom + firstContentStyles.firstContentMarginType,
      marginLeft: FirstContentMarginLeft + firstContentStyles.firstContentMarginType,
      marginRight: FirstContentMarginRight + firstContentStyles.firstContentMarginType
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-content-switcher-two-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ref: inputFirstContent,
    className: `premium-content-switcher-is-visible premium-content-switcher-first-list ${props.clientId}`,
    style: {
      background: firstContentStyles.firstContentBGColor,
      borderStyle: firstContentStyles.firstContentborderType,
      borderWidth: firstContentBorderUpdated ? `${firstContentBorderTop}px ${firstContentBorderRight}px ${firstContentBorderBottom}px ${firstContentBorderLeft}px` : firstContentBorderWidth + "px",
      borderRadius: firstContentStyles.firstContentborderRadius + "px",
      borderColor: firstContentStyles.firstContentborderColor,
      minHeight: ContentHeight + contentStyles.contentHeightType,
      paddingTop: ContentPaddingTop + firstContentStyles.firstContentPaddingType,
      paddingBottom: ContentPaddingBottom + firstContentStyles.firstContentPaddingType,
      paddingLeft: ContentPaddingLeft + firstContentStyles.firstContentPaddingType,
      paddingRight: ContentPaddingRight + firstContentStyles.firstContentPaddingType,
      boxShadow: `${firstContentStyles.firstContentBoxShadowHorizontal}px ${firstContentStyles.firstContentBoxShadowVertical}px ${firstContentStyles.firstContentBoxShadowBlur}px ${firstContentStyles.firstContentBoxShadowColor} ${firstContentStyles.firstContentBoxShadowPosition}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "div",
    className: `premium-content-switcher-first-content`,
    value: firstContent,
    onChange: value => {
      setAttributes({
        firstContent: value
      });
    },
    style: {
      textAlign: firstcontentlign,
      justifyContent: firstcontentlign,
      color: firstContentStyles.firstContentColor,
      fontSize: FirstContentSize + firstContentStyles.firstContentfontSizeType,
      letterSpacing: firstContentStyles.firstContentLetter + "px",
      textTransform: firstContentStyles.firstContentUpper ? "uppercase" : "none",
      fontStyle: firstContentStyles.firstContentStyle,
      fontWeight: firstContentStyles.firstContentWeight,
      lineHeight: (firstContentStyles.firstContentLine ? firstContentStyles.firstContentLine : "") + "px",
      fontFamily: firstContentStyles.firstContentFontFamily,
      textShadow: `${firstContentStyles.firstContentShadowHorizontal}px ${firstContentStyles.firstContentShadowVertical}px ${firstContentStyles.firstContentShadowBlur}px ${firstContentStyles.firstContentShadowColor}`
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ref: inputSecondContent,
    className: `premium-content-switcher-is-hidden premium-content-switcher-second-list ${props.clientId}`,
    style: {
      background: secondContentStyles.secondContentBGColor,
      borderStyle: secondContentStyles.secondContentborderType,
      borderWidth: secondContentBorderUpdated ? `${secondContentBorderTop}px ${secondContentBorderRight}px ${secondContentBorderBottom}px ${secondContentBorderLeft}px` : secondContentBorderWidth + "px",
      borderRadius: secondContentStyles.secondContentborderRadius + "px",
      borderColor: secondContentStyles.secondContentborderColor,
      minHeight: ContentHeight + contentStyles.contentHeightType,
      paddingTop: ContentPaddingTop + secondContentStyles.secondContentPaddingType,
      paddingBottom: ContentPaddingBottom + secondContentStyles.secondContentPaddingType,
      paddingLeft: ContentPaddingLeft + secondContentStyles.secondContentPaddingType,
      paddingRight: ContentPaddingRight + secondContentStyles.secondContentPaddingType,
      boxShadow: `${secondContentStyles.secondContentBoxShadowHorizontal}px ${secondContentStyles.secondContentBoxShadowVertical}px ${secondContentStyles.secondContentBoxShadowBlur}px ${secondContentStyles.secondContentBoxShadowColor} ${secondContentStyles.secondContentBoxShadowPosition}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "div",
    className: `premium-content-switcher-second-content`,
    value: secondContent,
    onChange: value => {
      setAttributes({
        secondContent: value
      });
    },
    style: {
      textAlign: secondcontentlign,
      justifyContent: secondcontentlign,
      color: secondContentStyles.secondContentColor,
      fontSize: SecondContentSize + secondContentStyles.secondContentfontSizeType,
      letterSpacing: secondContentStyles.secondContentLetter + "px",
      textTransform: secondContentStyles.secondContentUpper ? "uppercase" : "none",
      fontStyle: secondContentStyles.secondContentStyle,
      fontWeight: secondContentStyles.secondContentWeight,
      lineHeight: (secondContentStyles.secondContentLine ? secondContentStyles.secondContentLine : "") + "px",
      fontFamily: secondContentStyles.secondContentFontFamily,
      textShadow: `${secondContentStyles.secondContentShadowHorizontal}px ${secondContentStyles.secondContentShadowVertical}px ${secondContentStyles.secondContentShadowBlur}px ${secondContentStyles.secondContentShadowColor}`
    }
  })))))));
}

/***/ }),

/***/ "./content-switcher/save.js":
/*!**********************************!*\
  !*** ./content-switcher/save.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

 // const {
//     RichText
// } = wp.editor


function save(props) {
  const {
    attributes,
    className
  } = props;
  const {
    block_id,
    align,
    showLabel,
    firstLabel,
    secondLabel,
    display,
    firstContent,
    secondContent,
    switchCheck,
    firstcontentlign,
    secondcontentlign,
    switchRadius,
    firstLabelColor,
    firstLabelWeight,
    firstLabelLetter,
    firstLabelUpper,
    firstLabelStyle,
    secondLabelColor,
    secondLabelWeight,
    secondLabelLetter,
    secondLabelUpper,
    secondLabelStyle,
    shadowColor,
    shadowBlur,
    shadowHorizontal,
    shadowVertical,
    firstContentColor,
    firstContentBGColor,
    secondContentColor,
    secondContentBGColor,
    effect,
    slide,
    firstContentborderType,
    firstContentborderWidth,
    firstContentborderColor,
    firstContentborderRadius,
    secondContentborderColor,
    secondContentborderRadius,
    secondContentborderWidth,
    secondContentborderType
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, `premium-block-${block_id}`),
    style: {
      textAlign: align
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-content-switcher`,
    style: {
      textAlign: align
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-content-switcher-toggle-${display}`,
    style: {
      textAlign: align,
      justifyContent: align == "right" ? "flex-end" : align,
      alignItems: align
    }
  }, showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-content-switcher-first-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: {
      color: firstLabelColor,
      letterSpacing: firstLabelLetter + "px",
      textTransform: firstLabelUpper ? "uppercase" : "none",
      fontStyle: firstLabelStyle,
      fontWeight: firstLabelWeight,
      textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
    }
  }, firstLabel)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-content-switcher-toggle-switch"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `premium-content-switcher-toggle-switch-label`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: `premium-content-switcher-toggle-switch-input ${block_id}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "premium-content-switcher-toggle-switch-slider round",
    style: {
      borderRadius: switchRadius + "px"
    }
  }))), showLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-content-switcher-second-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    style: {
      color: secondLabelColor,
      letterSpacing: secondLabelLetter + "px",
      textTransform: secondLabelUpper ? "uppercase" : "none",
      fontStyle: secondLabelStyle,
      fontWeight: secondLabelWeight,
      textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`
    }
  }, secondLabel))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-content-switcher-list ${effect == 'slide' ? `slide-${slide}` : ""}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-content-switcher-two-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `premium-content-switcher-is-visible premium-content-switcher-first-list ${block_id}`,
    style: {
      background: firstContentBGColor,
      borderStyle: firstContentborderType,
      borderWidth: firstContentborderWidth + "px",
      borderRadius: firstContentborderRadius || 0 + "px",
      borderColor: firstContentborderColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: `premium-content-switcher-first-content`,
    value: firstContent,
    style: {
      textAlign: firstcontentlign,
      justifyContent: firstcontentlign,
      color: firstContentColor // letterSpacing: firstContentLetter + "px",
      // textTransform: firstContentUpper ? "uppercase" : "none",
      // fontStyle: firstContentStyle,
      // fontWeight: firstContentWeight,

    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `premium-content-switcher-is-hidden premium-content-switcher-second-list ${block_id}`,
    style: {
      background: secondContentBGColor,
      borderStyle: secondContentborderType,
      borderWidth: secondContentborderWidth + "px",
      borderRadius: secondContentborderRadius || 0 + "px",
      borderColor: secondContentborderColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: `premium-content-switcher-second-content`,
    value: secondContent,
    style: {
      textAlign: secondcontentlign,
      justifyContent: secondcontentlign,
      color: secondContentColor // letterSpacing: secondContentLetter + "px",
      // textTransform: secondContentUpper ? "uppercase" : "none",
      // fontStyle: secondContentStyle,
      // fontWeight: secondContentWeight,

    }
  }))))));
}

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
      classSat: 'one',
      currentColor: '',
      defaultColor: ''
    };
  }

  componentDidMount() {
    if ('transparent' === this.props.colorDefault) {
      this.setState({
        currentColor: undefined === this.props.colorValue || '' === this.props.colorValue || 'transparent' === this.props.colorValue ? '' : this.props.colorValue
      });
      this.setState({
        defaultColor: ''
      });
    } else {
      this.setState({
        currentColor: undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
      });
      this.setState({
        defaultColor: this.props.colorDefault
      });
    }
  }

  render() {
    const toggleVisible = () => {
      if ('transparent' === this.props.colorDefault) {
        this.setState({
          currentColor: undefined === this.props.colorValue || '' === this.props.colorValue || 'transparent' === this.props.colorValue ? '' : this.props.colorValue
        });
      } else {
        this.setState({
          currentColor: undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
        });
      }

      this.setState({
        classSat: 'one'
      });
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
    }, this.props.colors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-color-picker-top`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-color-picker-skins"
    }, lodash_map__WEBPACK_IMPORTED_MODULE_2___default()(this.props.colors, _ref => {
      let {
        color,
        slug,
        name
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: color,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('premium-color-picker-single', {
          'active': this.props.colorValue === color
        }),
        style: {
          backgroundColor: color
        },
        onClick: () => {
          this.props.onColorChange(color);

          if (this.props.onColorClassChange) {
            this.props.onColorClassChange(slug);
          }

          if ('three' === this.state.classSat) {
            this.setState({
              classSat: 'two'
            });
          } else {
            this.setState({
              classSat: 'three'
            });
          }
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `premium-tooltip-top`
      }, name || sprintf(__('Color code: %s'), color)));
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: isNew ? 'premium-gutenberg-color-picker-new' : 'premium-gutenberg-color-picker'
    }, this.state.classSat === 'one' && !this.props.disableCustomColors && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: undefined === this.props.colorValue || '' === this.props.colorValue || 'transparent' === this.props.colorValue ? this.state.defaultColor : this.props.colorValue,
      onChangeComplete: color => {
        this.setState({
          currentColor: color.hex
        });

        if (color.rgb) {
          this.props.onColorChange(color.rgb.a != 1 ? 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')' : color.hex);
        }

        if (this.props.onColorClassChange) {
          this.props.onColorClassChange('');
        }
      }
    }), !this.props.disableCustomColors && this.state.classSat !== 'one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: undefined === this.state.currentColor || '' === this.state.currentColor ? this.state.defaultColor : this.state.currentColor,
      onChangeComplete: color => {
        this.setState({
          currentColor: color.hex
        });

        if (color.rgb) {
          this.props.onColorChange(color.rgb.a != 1 ? 'rgba(' + color.rgb.r + ',' + color.rgb.g + ',' + color.rgb.b + ',' + color.rgb.a + ')' : color.hex);
        }

        if (this.props.onColorClassChange) {
          this.props.onColorClassChange('');
        }
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-color-picker-value"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      onChange: _ref2 => {
        let {
          target: {
            value: color
          }
        } = _ref2;
        this.props.onColorChange(normalizeColor(color));
        this.setState({
          currentColor: color
        });
      },
      value: normalizeColor(this.state.currentColor),
      type: "text"
    })))), this.state.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: __('Select Color')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: `premium-color-picker-single ${'' === this.props.colorDefault ? 'Premium-has-alpha' : 'Premium-no-alpha'}`,
      onClick: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorIndicator, {
      className: "premium-advanced-color-indicate",
      colorValue: 'transparent' === this.props.colorValue || undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
    }))), !this.state.isVisible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tooltip, {
      text: __('Select Color')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      className: `premium-color-picker-single ${'' === this.props.colorDefault ? 'Premium-has-alpha' : 'Premium-no-alpha'}`,
      onClick: toggleVisible
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorIndicator, {
      className: "premium-advanced-color-indicate",
      colorValue: 'transparent' === this.props.colorValue || undefined === this.props.colorValue || '' === this.props.colorValue ? this.props.colorDefault : this.props.colorValue
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

        if (this.props.onColorClassChange) {
          this.props.onColorClassChange('');
        }
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (withSelect((select, ownProps) => {
  const settings = select('core/block-editor').getSettings();
  const colors = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(settings, ['colors'], []);
  const disableCustomColors = ownProps.disableCustomColors === undefined ? settings.disableCustomColors : ownProps.disableCustomColors;
  return {
    colors,
    disableCustomColors
  };
})(AdvancedColorControl));

/***/ }),

/***/ "../components/Premium-Responsive-Margin.js":
/*!**************************************************!*\
  !*** ../components/Premium-Responsive-Margin.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_margin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-margin */ "../components/premium-margin.js");
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-size-units */ "../components/premium-size-units.js");



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

function PremiumResponsiveMargin(props) {
  const {
    directions,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginTopTablet,
    marginRightTablet,
    marginBottomTablet,
    marginLeftTablet,
    marginTopMobile,
    marginRightMobile,
    marginBottomMobile,
    marginLeftMobile,
    selectedUnit,
    showUnits,
    onChangeMarSizeUnit
  } = props;
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
  const output = {};
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_margin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    directions: directions,
    marginTop: marginTopMobile,
    marginRight: marginRightMobile,
    marginBottom: marginBottomMobile,
    marginLeft: marginLeftMobile,
    onChangeMarTop: marginTopMobile => props.onChangeMarginTop("mobile", marginTopMobile),
    onChangeMarRight: marginRightMobile => props.onChangeMarginRight("mobile", marginRightMobile),
    onChangeMarBottom: marginBottomMobile => props.onChangeMarginBottom("mobile", marginBottomMobile),
    onChangeMarLeft: marginLeftMobile => props.onChangeMarginLeft("mobile", marginLeftMobile),
    showUnits: showUnits,
    selectedUnit: selectedUnit,
    onChangeMarSizeUnit: onChangeMarSizeUnit
  });
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_margin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    directions: directions,
    marginTop: marginTopTablet,
    marginRight: marginRightTablet,
    marginBottom: marginBottomTablet,
    marginLeft: marginLeftTablet,
    onChangeMarTop: marginTopTablet => props.onChangeMarginTop("tablet", marginTopTablet),
    onChangeMarRight: marginRightTablet => props.onChangeMarginRight("tablet", marginRightTablet),
    onChangeMarBottom: marginBottomTablet => props.onChangeMarginBottom("tablet", marginBottomTablet),
    onChangeMarLeft: marginLeftTablet => props.onChangeMarginLeft("tablet", marginLeftTablet),
    showUnits: showUnits,
    selectedUnit: selectedUnit,
    onChangeMarSizeUnit: onChangeMarSizeUnit
  });
  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_margin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    directions: directions,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    onChangeMarTop: marginTop => props.onChangeMarginTop("desktop", marginTop),
    onChangeMarRight: marginRight => props.onChangeMarginRight("desktop", marginRight),
    onChangeMarBottom: marginBottom => props.onChangeMarginBottom("desktop", marginBottom),
    onChangeMarLeft: marginLeft => props.onChangeMarginLeft("desktop", marginLeft),
    showUnits: showUnits,
    selectedUnit: selectedUnit,
    onChangeMarSizeUnit: onChangeMarSizeUnit
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-blocks-range-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, "  ", __("Margin")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-responsive-control-btns premium-responsive-slider-btns"
  }, devices.map((device, key) => {
    const activeClass = device === deviceType ? ' active' : '';
    const icon = device.toLowerCase() === 'mobile' ? 'smartphone' : device.toLowerCase();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: key,
      className: `${device}${activeClass}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: `preview-${device}${activeClass}`,
      "data-device": device
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: `dashicons dashicons-${icon}`,
      onClick: () => {
        const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
        customSetPreviewDeviceType(nextDevice);
      }
    })));
  }))), showUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeUnit: selectedUnit,
    onChangeSizeUnit: newValue => onChangeMarSizeUnit(newValue)
  })), output[deviceType] ? output[deviceType] : output.Desktop);
}

/* harmony default export */ __webpack_exports__["default"] = (PremiumResponsiveMargin);

/***/ }),

/***/ "../components/Premium-Responsive-Padding.js":
/*!***************************************************!*\
  !*** ../components/Premium-Responsive-Padding.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_padding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-padding */ "../components/premium-padding.js");
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-size-units */ "../components/premium-size-units.js");



const {
  __
} = wp.i18n;
const {
  useSelect,
  useDispatch
} = wp.data;
const {
  useState
} = wp.element;

function PremiumResponsivePadding(props) {
  const {
    showUnits,
    selectedUnit,
    onChangePadSizeUnit,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingTopTablet,
    paddingRightTablet,
    paddingBottomTablet,
    paddingLeftTablet,
    paddingTopMobile,
    paddingRightMobile,
    paddingBottomMobile,
    paddingLeftMobile
  } = props;
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
  const output = {};
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_padding__WEBPACK_IMPORTED_MODULE_1__["default"], {
    paddingTop: paddingTopMobile,
    paddingRight: paddingRightMobile,
    paddingBottom: paddingBottomMobile,
    paddingLeft: paddingLeftMobile,
    onChangePadTop: paddingTopMobile => props.onChangePaddingTop("mobile", paddingTopMobile),
    onChangePadRight: paddingRightMobile => props.onChangePaddingRight("mobile", paddingRightMobile),
    onChangePadBottom: paddingBottomMobile => props.onChangePaddingBottom("mobile", paddingBottomMobile),
    onChangePadLeft: paddingLeftMobile => props.onChangePaddingLeft("mobile", paddingLeftMobile),
    showUnits: false,
    selectedUnit: selectedUnit,
    onChangePadSizeUnit: onChangePadSizeUnit
  });
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_padding__WEBPACK_IMPORTED_MODULE_1__["default"], {
    paddingTop: paddingTopTablet,
    paddingRight: paddingRightTablet,
    paddingBottom: paddingBottomTablet,
    paddingLeft: paddingLeftTablet,
    onChangePadTop: paddingTopTablet => props.onChangePaddingTop("tablet", paddingTopTablet),
    onChangePadRight: paddingRightTablet => props.onChangePaddingRight("tablet", paddingRightTablet),
    onChangePadBottom: paddingBottomTablet => props.onChangePaddingBottom("tablet", paddingBottomTablet),
    onChangePadLeft: paddingLeftTablet => props.onChangePaddingLeft("tablet", paddingLeftTablet),
    showUnits: false,
    selectedUnit: selectedUnit,
    onChangePadSizeUnit: onChangePadSizeUnit
  });
  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_padding__WEBPACK_IMPORTED_MODULE_1__["default"], {
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    onChangePadTop: paddingTop => props.onChangePaddingTop("desktop", paddingTop),
    onChangePadRight: paddingRight => props.onChangePaddingRight("desktop", paddingRight),
    onChangePadBottom: paddingBottom => props.onChangePaddingBottom("desktop", paddingBottom),
    onChangePadLeft: paddingLeft => props.onChangePaddingLeft("desktop", paddingLeft),
    showUnits: false,
    selectedUnit: selectedUnit,
    onChangePadSizeUnit: onChangePadSizeUnit
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'premium-blocks-range-control'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, "  ", __("Padding")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-responsive-control-btns premium-responsive-slider-btns"
  }, devices.map((device, key) => {
    const activeClass = device === deviceType ? ' active' : '';
    const icon = device.toLowerCase() === 'mobile' ? 'smartphone' : device.toLowerCase();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: key,
      className: `${device}${activeClass}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: `preview-${device}${activeClass}`,
      "data-device": device
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: `dashicons dashicons-${icon}`,
      onClick: () => {
        const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
        customSetPreviewDeviceType(nextDevice);
      }
    })));
  }))), showUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeUnit: selectedUnit,
    onChangeSizeUnit: newValue => onChangePadSizeUnit(newValue)
  })), output[deviceType] ? output[deviceType] : output.Desktop);
}

/* harmony default export */ __webpack_exports__["default"] = (PremiumResponsivePadding);

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
  Fragment
} = wp.element;


function PremiumShadow(props) {
  const {
    label,
    color,
    blur,
    horizontal,
    vertical,
    position = "outline",
    onChangeColor = () => {},
    onChangeBlur = () => {},
    onChangehHorizontal = () => {},
    onChangeVertical = () => {},
    onChangePosition = () => {},
    boxShadow = false
  } = props;
  const POSITION = [{
    value: "inset",
    label: __("Inset", 'premium-blocks-for-gutenberg')
  }, {
    value: "",
    label: __("Outline", 'premium-blocks-for-gutenberg')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "premium-control-toggle premium-shadow-control__container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, __(label || "Box Shadow")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-shadow-control__wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    colorValue: color,
    colorDefault: '',
    onColorChange: onChangeColor,
    disableReset: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dropdown, {
    className: "premium-control-toggle-btn",
    contentClassName: "premium-control-toggle-content",
    position: "bottom right",
    renderToggle: _ref => {
      let {
        isOpen,
        onToggle
      } = _ref;
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
      onChange: onChangehHorizontal,
      showUnit: false,
      defaultValue: 0,
      min: -100,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Vertical"),
      value: vertical,
      onChange: onChangeVertical,
      showUnit: false,
      defaultValue: 0,
      min: -100,
      max: 100
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: __("Blur"),
      value: blur,
      onChange: onChangeBlur,
      showUnit: false,
      defaultValue: 0
    }), boxShadow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Position"),
      options: POSITION,
      value: position,
      onChange: onChangePosition
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
    className: "kemet_range_value"
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
    onChangeTablet,
    onChangeMobile,
    mobileValue,
    tabletValue,
    value,
    step = 1,
    max = 100,
    min = 0,
    unit = '',
    onChangeUnit,
    showUnit = false,
    units = ['px', 'em', 'rem'],
    defaultValue
  } = _ref;
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
  const output = {};
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: 'mobile',
    value: undefined !== mobileValue ? mobileValue : '',
    onChange: size => onChangeMobile(size),
    min: min,
    max: max,
    step: unit === "em" ? .1 : 1,
    unit: unit,
    onChangeUnit: onChangeUnit,
    showUnit: false,
    units: units,
    defaultValue: defaultValue
  });
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: 'tablet',
    value: undefined !== tabletValue ? tabletValue : '',
    onChange: size => onChangeTablet(size),
    min: min,
    max: max,
    step: unit === "em" ? .1 : 1,
    unit: unit,
    onChangeUnit: onChangeUnit,
    showUnit: false,
    units: units,
    defaultValue: defaultValue
  });
  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    device: 'desktop',
    value: undefined !== value ? value : '',
    onChange: size => onChange(size),
    min: min,
    max: max,
    step: unit === "em" ? .1 : 1,
    unit: unit,
    onChangeUnit: onChangeUnit,
    showUnit: false,
    units: units,
    defaultValue: defaultValue
  });
  return [onChange && onChangeTablet && onChangeMobile && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-blocks-range-control`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `premium-slider-title-wrap`
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "customize-control-title premium-control-title"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "premium-responsive-control-btns premium-responsive-slider-btns"
  }, devices.map((device, key) => {
    const activeClass = device === deviceType ? ' active' : '';
    const icon = device.toLowerCase() === 'mobile' ? 'smartphone' : device.toLowerCase();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: key,
      className: `${device}${activeClass}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: `preview-${device}${activeClass}`,
      "data-device": device
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: `dashicons dashicons-${icon}`,
      onClick: () => {
        const nextDevice = key + 1 > devices.length - 1 ? devices[0] : devices[key + 1];
        customSetPreviewDeviceType(nextDevice);
      }
    })));
  }))), showUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_1__["default"], {
    units: units,
    activeUnit: unit,
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
    className: `premium-blocks-range-control`
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

/***/ "../components/premium-border.js":
/*!***************************************!*\
  !*** ../components/premium-border.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PremiumBorder; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeControl/single-range-control */ "../components/RangeControl/single-range-control.js");
/* harmony import */ var _Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color Control/ColorComponent */ "../components/Color Control/ColorComponent.js");



const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  SelectControl,
  ColorPicker
} = wp.components;

class PremiumBorder extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLinked: false,
      top: this.props.top || 0,
      right: this.props.right || 0,
      bottom: this.props.bottom || 0,
      left: this.props.left || 0
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onChangeInput(event) {
    let {
      top,
      right,
      bottom,
      left,
      isLinked
    } = this.state;
    let {
      name,
      value
    } = event.target;

    if (isLinked) {
      top = right = bottom = left = parseInt(value) || 0;
      this.setState({
        top,
        right,
        bottom,
        left
      }, () => {
        const {
          top,
          right,
          bottom,
          left
        } = this.state;
        this.props.onChangeWidth({
          top,
          right,
          bottom,
          left
        });
      });
    } else {
      this.setState({
        [name]: parseInt(value) || 0
      }, () => {
        this.props.onChangeWidth({
          top,
          right,
          bottom,
          left
        });
      });
    }
  }

  onButtonClick() {
    this.setState({
      isLinked: !this.state.isLinked
    });
  }

  render() {
    const {
      borderType,
      borderColor,
      borderRadius,
      onChangeType = () => {},
      onChangeColor = () => {},
      onChangeRadius = () => {}
    } = this.props;
    const {
      top,
      right,
      bottom,
      left,
      isLinked
    } = this.state;
    const BORDER = [{
      value: "none",
      label: __("None", 'premium-blocks-for-gutenberg')
    }, {
      value: "solid",
      label: __("Solid", 'premium-blocks-for-gutenberg')
    }, {
      value: "double",
      label: __("Double", 'premium-blocks-for-gutenberg')
    }, {
      value: "dotted",
      label: __("Dotted", 'premium-blocks-for-gutenberg')
    }, {
      value: "dashed",
      label: __("Dashed", 'premium-blocks-for-gutenberg')
    }, {
      value: "groove",
      label: __("Groove", 'premium-blocks-for-gutenberg')
    }];
    const defauultValues = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-control-toggle"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Border Type"),
      options: BORDER,
      value: borderType,
      onChange: onChangeType
    }), "none" != borderType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-spacing-responsive`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "premium-control-label-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-control-label`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, __("Border Width ")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-spacing-responsive-outer-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `input-wrapper premium-spacing-responsive-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: `premium-spacing-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: `premium-spacing-input`,
      type: "number",
      name: "top",
      value: top,
      onChange: this.onChangeInput
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __(`Top`, 'premium-blocks-for-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: `premium-spacing-input`,
      type: "number",
      name: "right",
      value: right,
      onChange: this.onChangeInput
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __(`Right`, 'premium-blocks-for-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: `premium-spacing-input`,
      type: "number",
      name: "bottom",
      value: bottom,
      onChange: this.onChangeInput
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __(`Bottom`, 'premium-blocks-for-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      className: `premium-spacing-input`,
      type: "number",
      name: "left",
      value: left,
      onChange: this.onChangeInput
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __(`Right`, 'premium-blocks-for-gutenberg'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `linked-btn components-button is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"}`,
      onClick: this.onButtonClick
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-spacing-btn-reset-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "premium-reset-btn ",
      disabled: JSON.stringify(this.state) === JSON.stringify(this.defaultValue),
      onClick: e => {
        e.preventDefault();
        this.setState({ ...defauultValues
        });
        const {
          top = 0,
          right,
          bottom,
          left
        } = this.state;
        this.props.onChangeWidth({ ...defauultValues
        });
      }
    })))), "none" != borderType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Color_Control_ColorComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: __("Border Color", 'premium-blocks-for-gutenberg'),
      colorValue: borderColor,
      colorDefault: '',
      onColorChange: onChangeColor
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Border Radius", 'premium-blocks-for-gutenberg'),
      value: borderRadius,
      defaultValue: 0,
      onChange: onChangeRadius,
      showUnit: false
    })));
  }

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

/***/ "../components/premium-margin.js":
/*!***************************************!*\
  !*** ../components/premium-margin.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./premium-size-units */ "../components/premium-size-units.js");



const {
  __
} = wp.i18n;

class PremiumMargin extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLinked: false,
      top: this.props.marginTop || '',
      right: this.props.marginRight || '',
      bottom: this.props.marginBottom || '',
      left: this.props.marginLeft || '',
      directions: this.props.directions,
      showUnits: this.props.showUnits || false
    };
    this.defaultValue = {
      isLinked: false,
      top: '',
      right: '',
      bottom: '',
      left: '',
      directions: this.props.directions,
      showUnits: this.props.showUnits || false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.changeFunction = this.changeFunction.bind(this);
  }

  onButtonClick() {
    this.setState({
      isLinked: !this.state.isLinked
    });
  }

  changeFunction(value) {
    let {
      top,
      right,
      bottom,
      left,
      directions
    } = value;

    if (directions.includes("all") || directions.includes("top")) {
      this.props.onChangeMarTop(top);
    }

    if (directions.includes("all") || directions.includes("right")) {
      this.props.onChangeMarRight(right);
    }

    if (directions.includes("all") || directions.includes("bottom")) {
      this.props.onChangeMarBottom(bottom);
    }

    if (directions.includes("all") || directions.includes("left")) {
      this.props.onChangeMarLeft(left);
    }
  }

  onInputChange(event) {
    let {
      isLinked,
      top,
      right,
      bottom,
      left
    } = this.state;
    let {
      name,
      value
    } = event.target;

    if (isLinked) {
      top = right = bottom = left = parseInt(value) || 0;
      this.setState({
        top,
        right,
        bottom,
        left
      }, () => {
        this.changeFunction(this.state);
      });
    } else {
      this.setState({
        [name]: parseInt(value) || 0
      }, () => {
        this.changeFunction(this.state);
      });
    }
  }

  render() {
    const {
      top,
      right,
      bottom,
      left,
      directions,
      showUnits,
      isLinked,
      unit,
      label
    } = this.state;
    const {
      onChangeMarSizeUnit = () => {},
      selectedUnit
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-spacing-responsive`
    }, this.props.label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "premium-control-label-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-slider-title-wrap`
    }, __("Margin", 'premium-blocks-for-gutenberg')), showUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeUnit: selectedUnit,
      onChangeSizeUnit: newValue => onChangeMarSizeUnit(newValue)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-spacing-responsive-outer-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `input-wrapper premium-spacing-responsive-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: `premium-spacing-wrapper`
    }, (directions.includes("all") || directions.includes("top")) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "top",
      value: top,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, "Top")), (directions.includes("all") || directions.includes("right")) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "right",
      value: right,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, "Right")), (directions.includes("all") || directions.includes("bottom")) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "bottom",
      value: bottom,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, "Bottom")), (directions.includes("all") || directions.includes("left")) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "left",
      value: left,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, "Left")), (directions.length > 1 || directions.includes("all")) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `linked-btn  is-button dashicons dashicons-${isLinked ? "admin-links" : "editor-unlink"}`,
      onClick: this.onButtonClick
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-spacing-btn-reset-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "premium-reset-btn ",
      disabled: JSON.stringify(this.state) == JSON.stringify(this.defaultValue),
      onClick: e => {
        e.preventDefault();
        this.setState({ ...this.defaultValue
        });
        this.changeFunction(this.defaultValue);
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PremiumMargin);

/***/ }),

/***/ "../components/premium-padding.js":
/*!****************************************!*\
  !*** ../components/premium-padding.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _premium_size_units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premium-size-units */ "../components/premium-size-units.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


const {
  __
} = wp.i18n;


class PremiumPadding extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLinked: false,
      top: this.props.paddingTop || '',
      right: this.props.paddingRight || '',
      bottom: this.props.paddingBottom || '',
      left: this.props.paddingLeft || ''
    };
    this.defaultValue = {
      isLinked: false,
      top: '',
      right: '',
      bottom: '',
      left: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.changeFunction = this.changeFunction.bind(this);
  }

  onButtonClick() {
    this.setState({
      isLinked: !this.state.isLinked
    });
  }

  changeFunction(value) {
    let {
      top,
      right,
      bottom,
      left
    } = value;
    this.props.onChangePadTop(top);
    this.props.onChangePadRight(right);
    this.props.onChangePadBottom(bottom);
    this.props.onChangePadLeft(left);
  }

  onInputChange(event) {
    let {
      isLinked,
      top,
      right,
      bottom,
      left
    } = this.state;
    let {
      name,
      value
    } = event.target;

    if (isLinked) {
      top = right = bottom = left = parseInt(value) || 0;
      this.setState({
        top,
        right,
        bottom,
        left
      }, () => {
        this.changeFunction(this.state);
      });
    } else {
      this.setState({
        [name]: parseInt(value) || 0
      }, () => {
        this.changeFunction(this.state);
      });
    }
  }

  render() {
    const {
      top,
      right,
      bottom,
      left,
      isLinked
    } = this.state;
    const {
      onChangePadSizeUnit = () => {},
      selectedUnit
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-spacing-responsive`
    }, this.props.label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "premium-control-label-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-slider-title-wrap`
    }, __("Padding", 'premium-blocks-for-gutenberg')), this.props.showUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_premium_size_units__WEBPACK_IMPORTED_MODULE_1__["default"], {
      activeUnit: selectedUnit,
      onChangeSizeUnit: newValue => onChangePadSizeUnit(newValue)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `premium-spacing-responsive-outer-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `input-wrapper premium-spacing-responsive-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: `premium-spacing-wrapper`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "top",
      value: top,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __(`Top`))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "right",
      value: right,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __('Right'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "bottom",
      value: bottom,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __('Bottom'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: `premium-spacing-input-item`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      name: "left",
      value: left,
      onChange: this.onInputChange,
      className: `premium-spacing-input`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `premium-spacing-title`
    }, __('Left'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `linked-btn is-button dashicons dashicons-${isLinked ? "admin-links connected" : "editor-unlink disconnected"}`,
      onClick: this.onButtonClick
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-spacing-btn-reset-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "premium-reset-btn ",
      disabled: JSON.stringify(this.state) === JSON.stringify(this.defaultValue),
      onClick: e => {
        e.preventDefault();
        this.setState({ ...this.state,
          ...this.defaultValue
        });
        this.changeFunction(this.defaultValue);
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PremiumPadding);

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
  constructor(props) {
    super(props);
    let responsiveSize;

    if (this.props.components.includes("responsiveSize")) {
      responsiveSize = {
        Desktop: this.props.fontSize || '',
        Tablet: this.props.fontSizeTablet || '',
        Mobile: this.props.fontSizeMobile || ''
      };
    }

    this.state = {
      fontFamily: this.props.fontFamily || 'Default',
      line: this.props.line,
      weight: this.props.weight || '400',
      size: this.props.components.includes("responsiveSize") ? responsiveSize : this.props.size,
      textTransform: this.props.textTransform,
      textDecoration: this.props.textDecoration,
      sizeUnit: this.props.sizeUnit || 'px',
      isVisible: false,
      currentView: '',
      search: "",
      showUnit: this.props.showUnit || false,
      spacing: this.props.spacing,
      style: this.props.style,
      device: 'Desktop'
    };
  }

  componentDidUpdate(prevProps) {
    let previewDevice = wp.data && wp.data.select && wp.data.select('core/edit-post') && wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType ? wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType() : 'Desktop';

    if (this.state.device !== previewDevice) {
      this.setState({
        device: previewDevice
      });
    }
  }

  render() {
    const {
      components,
      setAttributes,
      onChangeTextTransform = () => {},
      onChangeTextDecoration = () => {},
      onChangeFamily = () => {},
      onChangeSize = () => {},
      onChangeTabletSize = () => {},
      onChangeMobileSize = () => {},
      onChangeWeight = () => {},
      onChangeStyle = () => {},
      onChangeSpacing = () => {},
      onChangeLine = () => {},
      onResetClick = () => {}
    } = this.props;
    const {
      fontFamily,
      line,
      weight,
      size,
      textTransform,
      textDecoration,
      sizeUnit,
      isVisible,
      currentView,
      search,
      showUnit,
      spacing,
      style,
      device
    } = this.state;
    const STYLE = [{
      value: "normal",
      label: __("Normal", 'premium-blocks-for-gutenberg')
    }, {
      value: "italic",
      label: __("Italic", 'premium-blocks-for-gutenberg')
    }, {
      value: "oblique",
      label: __("Oblique", 'premium-blocks-for-gutenberg')
    }];
    const fonts = [{
      value: "Default",
      label: __("Default", 'premium-blocks-for-gutenberg'),
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

      if (k === fontFamily) {
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
          currentView: ''
        });
      }
    };

    const renderVariations = fonts.map((item, index) => {
      if (item.value == fontFamily) {
        return (item.weight || []).map((weights, i) => {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
            key: i,
            className: `${weights == weight ? 'active' : ''}`,
            onClick: () => {
              this.setState({
                weight: weights
              }), onChangeWeight(weights);
            }
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            className: "premium-variation-name"
          }, weights));
        });
      }
    });
    const linearFonts = fonts.filter(family => fuzzysearch(search.toLowerCase(), family['value'].toLowerCase()));
    const fontSize = components.includes("responsiveSize") ? size[device] : size;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-control-toggle premium-typography"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "customize-control-title premium-control-title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, __('Typography', 'premium-blocks-for-gutenberg')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typohraphy-value"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-title-container"
    }, components.includes('family') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium-font",
      onClick: () => {
        toggleVisible("fonts");
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, fontFamily), isVisible && currentView == 'fonts' && components.includes('family') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
      className: "premium-typography-option premium-font-family__modal",
      onClose: toggleClose
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-option-modal "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "premium-typography-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        top: '0px',
        right: '0px',
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
            onChangeFamily(linearFonts[0]);
            this.setState({
              search: ''
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
    }, currentView === 'search' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8.9,7.5l4.6-4.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7.5,6.1L2.9,1.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.6,4.6l-4.6,4.6c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l4.6-4.6l4.6,4.6c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L8.9,7.5z"
    }), currentView !== 'search' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M14.6,14.6c-0.6,0.6-1.4,0.6-2,0l-2.5-2.5c-1,0.7-2.2,1-3.5,1C2.9,13.1,0,10.2,0,6.6S2.9,0,6.6,0c3.6,0,6.6,2.9,6.6,6.6c0,1.3-0.4,2.5-1,3.5l2.5,2.5C15.1,13.1,15.1,14,14.6,14.6z M6.6,1.9C4,1.9,1.9,4,1.9,6.6s2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7C11.3,4,9.2,1.9,6.6,1.9z"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_typography_fontList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      linearFontsList: linearFonts,
      value: fontFamily,
      onPickFamily: value => {
        this.setState({
          fontFamily: value
        }), onChangeFamily(value);
      }
    })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium-size",
      onClick: () => {
        toggleVisible("options");
      }
    }, fontSize, sizeUnit, isVisible && currentView == 'options' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
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
    }, components.includes("size") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: __("Font Size (PX)", 'premium-blocks-for-gutenberg'),
      value: size,
      min: "10",
      max: "80",
      defaultValue: 20,
      onChange: value => {
        this.setState({
          size: value
        }), onChangeSize(value);
      },
      showUnit: false
    })), components.includes("responsiveSize") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_responsive_range_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: __("Font Size", 'premium-blocks-for-gutenberg'),
      value: this.props.fontSize,
      onChange: value => {
        this.setState({ ...this.state.size,
          Desktop: value
        }), onChangeSize(value);
      },
      tabletValue: this.props.fontSizeTablet,
      onChangeTablet: value => {
        onChangeTabletSize(value);
      },
      mobileValue: this.props.fontSizeMobile,
      onChangeMobile: value => {
        onChangeMobileSize(value);
      },
      onChangeUnit: key => setAttributes({
        [this.props.fontSizeType.label]: key
      }),
      unit: this.props.fontSizeType.value,
      showUnit: true,
      defaultValue: 20,
      units: ["px", "em"]
    })), components.includes("line") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: __("Line Height (PX)", 'premium-blocks-for-gutenberg'),
      value: line,
      onChange: value => {
        this.setState({
          line: value
        }), onChangeLine(value);
      },
      defaultValue: 1,
      showUnit: false,
      min: 0,
      max: 200
    })), components.includes("spacing") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RangeControl_single_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: __("Letter Spacing (PX)", 'premium-blocks-for-gutenberg'),
      value: spacing,
      onChange: value => {
        this.setState({
          spacing: value
        }), onChangeSpacing(value);
      },
      defaultValue: '',
      showUnit: false,
      step: 0.1,
      min: -5,
      max: 15
    })), components.includes("style") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "customize-control-premium-slider"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: __("Style", 'premium-blocks-for-gutenberg'),
      options: STYLE,
      value: style,
      onChange: value => {
        this.setState({
          style: value
        }), onChangeStyle(value);
      },
      onResetClick: onResetClick
    })), components.includes("Upper") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "premium-typography-variant"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-text-transform"
    }, ['capitalize', 'uppercase'].map(variant => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: variant,
      onClick: () => {
        this.setState({
          textTransform: variant
        }), onChangeTextTransform(variant);
      },
      className: `${textTransform == variant ? 'active' : ''}`,
      "data-variant": variant
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "premium-tooltip-top"
    }, variant))))), components.includes("Decoration") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "premium-typography-variant"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "premium-text-decoration"
    }, ['line-through', 'underline'].map(variant => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: variant,
      onClick: () => {
        this.setState({
          textDecoration: variant
        }), onChangeTextDecoration(variant);
      },
      className: `${textDecoration == variant ? 'active' : ''}`,
      "data-variant": variant
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "premium-tooltip-top"
    }, variant)))))))))), components.includes("weight") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "premium-weight",
      onClick: () => {
        toggleVisible("variations");
      }
    }, weight, isVisible && currentView == 'variations' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
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
  }, __('Google  Fonts', "kemet")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, googleFonts.map(family => SingleFont({
    family,
    onPickFamily,
    value
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontsList);

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

/***/ "./content-switcher/style.scss":
/*!*************************************!*\
  !*** ./content-switcher/style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

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

/***/ "./content-switcher/block.json":
/*!*************************************!*\
  !*** ./content-switcher/block.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"version":"0.1.0","name":"premium/content-switcher","title":"Content Switcher","icon":"content-switcher","category":"premium-blocks","description":"Example static block scaffolded with Create Block tool.","keywords":["content","switcher"],"supports":{"html":false},"editorScript":"file:./build/block.js","script":"gpb-content-switcher-block-script","editorStyle":"file:./build/index.css","style":"file:./build/style-block.css","attributes":{"block_id":{"type":"string"},"classMigrate":{"type":"boolean","default":false},"align":{"type":"string","default":"center"},"showLabel":{"type":"boolean","default":true},"firstLabel":{"type":"string","default":"Content #1"},"secondLabel":{"type":"string","default":"Content #2"},"display":{"type":"string","default":"inline"},"labelTag":{"type":"string","default":"h3"},"firstContent":{"type":"string","default":"Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus."},"secondContent":{"type":"string","default":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},"switchCheck":{"type":"boolean","default":false},"firstcontentlign":{"type":"string","default":"center"},"secondcontentlign":{"type":"string","default":"center"},"switcherStyles":{"type":"object","default":{"switchSize":15,"switchSizeMobile":15,"switchSizeTablet":15,"switchRadiusType":"em","switchRadius":1.5,"switchRadiusMobile":1.5,"switchRadiusTablet":1.5,"containerRadiusType":"%","containerRadius":50,"containerRadiusMobile":50,"containerRadiusTablet":50,"containerBackState1":"","backgroundImageIDState1":"","backgroundImageURLState1":"","backgroundRepeatState1":"no-reapet","backgroundPositionState1":"top center","backgroundSizeState1":"auto","fixedState1":false,"gradientLocationOneState1":"0","gradientColorTwoState1":"","gradientLocationTwoState1":"100","gradientTypeState1":"linear","gradientAngleState1":"180","gradientPositionState1":"center center","containerShadowColor":"","containerShadowBlur":"","containerShadowHorizontal":"","containerShadowVertical":"","containerShadowPosition":"inset","switchShadowColor":"","switchShadowBlur":"","switchShadowHorizontal":"","switchShadowVertical":"","switchShadowPosition":"inset"}},"backgroundTypeState2":{"type":"string","default":""},"labelStyles":{"type":"object","default":{"labelSpacing":15,"labelSpacingMobile":15,"labelSpacingTablet":15,"firstLabelColor":"rgb(84, 89, 95)","firstLabelLetter":0,"firstLabelLine":0,"firstLabelStyle":"normal","firstLabelUpper":false,"firstLabelWeight":"","firstLabelfontSize":23,"firstLabelfontSizeType":"px","firstLabelfontSizeMobile":23,"firstLabelfontSizeTablet":23,"firstLabelFontFamily":"Default","firstLabelShadowColor":"","firstLabelShadowBlur":"0","firstLabelShadowHorizontal":"0","firstLabelShadowVertical":"0","firstLabelborderType":"none","firstLabelborderRadius":0,"firstLabelborderColor":"","firstLabelBoxShadowColor":"","firstLabelBoxShadowBlur":"","firstLabelBoxShadowHorizontal":"","firstLabelBoxShadowVertical":"","firstLabelBoxShadowPosition":"inset","firstLabelPaddingType":"px","secondLabelColor":"rgb(84, 89, 95)","secondLabelLetter":0,"secondLabelLine":0,"secondLabelStyle":"normal","secondLabelUpper":false,"secondLabelWeight":"","secondLabelfontSize":23,"secondLabelfontSizeType":"px","secondLabelfontSizeMobile":23,"secondLabelfontSizeTablet":23,"secondLabelFontFamily":"Default","secondLabelShadowColor":"","secondLabelShadowBlur":"0","secondLabelShadowHorizontal":"0","secondLabelShadowVertical":"0","secondLabelborderType":"none","secondLabelborderRadius":0,"secondLabelborderColor":"","secondLabelBoxShadowColor":"","secondLabelBoxShadowBlur":"","secondLabelBoxShadowHorizontal":"","secondLabelBoxShadowVertical":"","secondLabelBoxShadowPosition":"inset","secondLabelPaddingType":"px"}},"firstLabelBorderTop":{"type":"number","default":"1"},"firstLabelBorderRight":{"type":"number","default":"1"},"firstLabelBorderBottom":{"type":"number","default":"1"},"firstLabelBorderLeft":{"type":"number","default":"1"},"firstLabelBorderUpdated":{"type":"boolean","default":false},"firstLabelBorderWidth":{"type":"number","default":"1"},"firstLabelPaddingT":{"type":"number","default":"0"},"firstLabelPaddingR":{"type":"number","default":"0"},"firstLabelPaddingB":{"type":"number","default":"0"},"firstLabelPaddingL":{"type":"number","default":"0"},"firstLabelPaddingTTablet":{"type":"number","default":"0"},"firstLabelPaddingRTablet":{"type":"number","default":"0"},"firstLabelPaddingBTablet":{"type":"number","default":"0"},"firstLabelPaddingLTablet":{"type":"number","default":"0"},"firstLabelPaddingTMobile":{"type":"number","default":"0"},"firstLabelPaddingRMobile":{"type":"number","default":"0"},"firstLabelPaddingBMobile":{"type":"number","default":"0"},"firstLabelPaddingLMobile":{"type":"number","default":"0"},"secondLabelBorderTop":{"type":"number","default":"1"},"secondLabelBorderRight":{"type":"number","default":"1"},"secondLabelBorderBottom":{"type":"number","default":"1"},"secondLabelBorderLeft":{"type":"number","default":"1"},"secondLabelBorderUpdated":{"type":"boolean","default":false},"secondLabelBorderWidth":{"type":"number","default":"1"},"secondLabelPaddingT":{"type":"number","default":"0"},"secondLabelPaddingR":{"type":"number","default":"0"},"secondLabelPaddingB":{"type":"number","default":"0"},"secondLabelPaddingL":{"type":"number","default":"0"},"secondLabelPaddingTTablet":{"type":"number","default":"0"},"secondLabelPaddingRTablet":{"type":"number","default":"0"},"secondLabelPaddingBTablet":{"type":"number","default":"0"},"secondLabelPaddingLTablet":{"type":"number","default":"0"},"secondLabelPaddingTMobile":{"type":"number","default":"0"},"secondLabelPaddingRMobile":{"type":"number","default":"0"},"secondLabelPaddingBMobile":{"type":"number","default":"0"},"secondLabelPaddingLMobile":{"type":"number","default":"0"},"contentStyles":{"type":"object","default":{"contentHeight":100,"contentHeightType":"px","contentHeightMobile":100,"contentHeightTablet":100}},"firstContentStyles":{"type":"object","default":{"firstContentColor":"#54595f","firstContentLetter":0,"firstContentLine":0,"firstContentStyle":"normal","firstContentUpper":false,"firstContentWeight":"","firstContentfontSize":"","firstContentfontSizeType":"px","firstContentfontSizeMobile":"","firstContentfontSizeTablet":"","firstContentFontFamily":"Default","firstContentShadowColor":"","firstContentShadowBlur":"0","firstContentShadowHorizontal":"0","firstContentShadowVertical":"0","firstContentBGColor":"","firstContentborderType":"none","firstContentborderRadius":0,"firstContentborderColor":"","firstContentBoxShadowColor":"","firstContentBoxShadowBlur":"","firstContentBoxShadowHorizontal":"","firstContentBoxShadowVertical":"","firstContentBoxShadowPosition":"inset","firstContentPaddingType":"px","firstContentMarginType":"px"}},"firstContentBorderTop":{"type":"number","default":"1"},"firstContentBorderRight":{"type":"number","default":"1"},"firstContentBorderBottom":{"type":"number","default":"1"},"firstContentBorderLeft":{"type":"number","default":"1"},"firstContentBorderUpdated":{"type":"boolean","default":false},"firstContentBorderWidth":{"type":"number","default":"1"},"firstContentMarginT":{"type":"number"},"firstContentMarginR":{"type":"number"},"firstContentMarginB":{"type":"number"},"firstContentMarginL":{"type":"number"},"firstContentMarginTTablet":{"type":"number"},"firstContentMarginRTablet":{"type":"number"},"firstContentMarginBTablet":{"type":"number"},"firstContentMarginLTablet":{"type":"number"},"firstContentMarginTMobile":{"type":"number"},"firstContentMarginRMobile":{"type":"number"},"firstContentMarginBMobile":{"type":"number"},"firstContentMarginLMobile":{"type":"number"},"contentPaddingT":{"type":"number","default":"0"},"contentPaddingR":{"type":"number","default":"0"},"contentPaddingB":{"type":"number","default":"0"},"contentPaddingL":{"type":"number","default":"0"},"contentPaddingTTablet":{"type":"number","default":"0"},"contentPaddingRTablet":{"type":"number","default":"0"},"contentPaddingBTablet":{"type":"number","default":"0"},"contentPaddingLTablet":{"type":"number","default":"0"},"contentPaddingTMobile":{"type":"number","default":"0"},"contentPaddingRMobile":{"type":"number","default":"0"},"contentPaddingBMobile":{"type":"number","default":"0"},"contentPaddingLMobile":{"type":"number","default":"0"},"secondContentStyles":{"type":"object","default":{"secondContentColor":"#54595f","secondContentLetter":0,"secondContentLine":0,"secondContentStyle":"normal","secondContentUpper":false,"secondContentWeight":"","secondContentfontSize":"","secondContentfontSizeType":"px","secondContentfontSizeMobile":"","secondContentfontSizeTablet":"","secondContentFontFamily":"Default","secondContentShadowColor":"","secondContentShadowBlur":"0","secondContentShadowHorizontal":"0","secondContentShadowVertical":"0","secondContentBGColor":"","secondContentborderType":"none","secondContentborderRadius":0,"secondContentborderColor":"","secondContentBoxShadowColor":"","secondContentBoxShadowBlur":"","secondContentBoxShadowHorizontal":"","secondContentBoxShadowVertical":"","secondContentBoxShadowPosition":"inset","secondContentPaddingType":"px"}},"secondContentBorderTop":{"type":"number","default":"1"},"secondContentBorderRight":{"type":"number","default":"1"},"secondContentBorderBottom":{"type":"number","default":"1"},"secondContentBorderLeft":{"type":"number","default":"1"},"secondContentBorderUpdated":{"type":"boolean","default":false},"secondContentBorderWidth":{"type":"number","default":"1"},"containerStyles":{"type":"object","default":{"containerBack":"","backgroundImageID":"","backgroundImageURL":"","backgroundRepeat":"no-reapet","backgroundPosition":"top center","backgroundSize":"auto","fixed":false,"gradientLocationOne":"0","gradientColorTwo":"","gradientLocationTwo":"100","gradientType":"linear","gradientAngle":"180","gradientPosition":"center center","containerborderType":"none","containerborderRadius":0,"containerborderColor":"","containerBoxShadowColor":"","containerBoxShadowBlur":"","containerBoxShadowHorizontal":"","containerBoxShadowVertical":"","containerBoxShadowPosition":"inset","containerPaddingType":"px","containerMarginType":"px"}},"backgroundType":{"type":"string","default":""},"containerBorderTop":{"type":"number","default":"1"},"containerBorderRight":{"type":"number","default":"1"},"containerBorderBottom":{"type":"number","default":"1"},"containerBorderLeft":{"type":"number","default":"1"},"containerBorderUpdated":{"type":"boolean","default":false},"containerBorderWidth":{"type":"number","default":"1"},"containerPaddingT":{"type":"number","default":""},"containerPaddingR":{"type":"number","default":""},"containerPaddingB":{"type":"number","default":""},"containerPaddingL":{"type":"number","default":""},"containerPaddingTTablet":{"type":"number","default":""},"containerPaddingRTablet":{"type":"number","default":""},"containerPaddingBTablet":{"type":"number","default":""},"containerPaddingLTablet":{"type":"number","default":""},"containerPaddingTMobile":{"type":"number","default":""},"containerPaddingRMobile":{"type":"number","default":""},"containerPaddingBMobile":{"type":"number","default":""},"containerPaddingLMobile":{"type":"number","default":""},"containerMarginT":{"type":"number","default":""},"containerMarginR":{"type":"number","default":""},"containerMarginB":{"type":"number","default":""},"containerMarginL":{"type":"number","default":""},"containerMarginTTablet":{"type":"number","default":""},"containerMarginRTablet":{"type":"number","default":""},"containerMarginBTablet":{"type":"number","default":""},"containerMarginLTablet":{"type":"number","default":""},"containerMarginTMobile":{"type":"number","default":""},"containerMarginRMobile":{"type":"number","default":""},"containerMarginBMobile":{"type":"number","default":""},"containerMarginLMobile":{"type":"number","default":""},"firstStateColor":{"type":"string","default":"#6ec1e4"},"secondStateColor":{"type":"string","default":"#6ec1e4"},"switcherBGColor":{"type":"string","default":"#f2f2f2"},"effect":{"type":"string","default":"fade"},"slide":{"type":"string","default":"top"}}}');

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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 			"block": 0,
/******/ 			"./style-block": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkextra_blocks"] = self["webpackChunkextra_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-block"], function() { return __webpack_require__("./content-switcher/block.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=block.js.map