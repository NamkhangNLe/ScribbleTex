/*!
 * react-canvas-draw v1.2.1 - https://embiem.github.io/react-canvas-draw/
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCanvasDraw"] = factory(require("react"));
	else
		root["ReactCanvasDraw"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(9)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Point2 = __webpack_require__(3);

var _Point3 = _interopRequireDefault(_Point2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyPoint = function (_Point) {
  _inherits(LazyPoint, _Point);

  function LazyPoint() {
    _classCallCheck(this, LazyPoint);

    return _possibleConstructorReturn(this, (LazyPoint.__proto__ || Object.getPrototypeOf(LazyPoint)).apply(this, arguments));
  }

  _createClass(LazyPoint, [{
    key: 'update',

    /**
     * Update the x and y values
     *
     * @param {Point} point
     */
    value: function update(point) {
      this.x = point.x;
      this.y = point.y;
    }

    /**
     * Move the point to another position using an angle and distance
     *
     * @param {number} angle The angle in radians
     * @param {number} distance How much the point should be moved
     */

  }, {
    key: 'moveByAngle',
    value: function moveByAngle(angle, distance) {
      // Rotate the angle based on the browser coordinate system ([0,0] in the top left)
      var angleRotated = angle + Math.PI / 2;

      this.x = this.x + Math.sin(angleRotated) * distance, this.y = this.y - Math.cos(angleRotated) * distance;
    }

    /**
     * Check if this point is the same as another point
     *
     * @param {Point} point
     * @returns {boolean}
     */

  }, {
    key: 'equalsTo',
    value: function equalsTo(point) {
      return this.x === point.x && this.y === point.y;
    }

    /**
     * Get the difference for x and y axis to another point
     *
     * @param {Point} point
     * @returns {Point}
     */

  }, {
    key: 'getDifferenceTo',
    value: function getDifferenceTo(point) {
      return new _Point3.default(this.x - point.x, this.y - point.y);
    }

    /**
     * Calculate distance to another point
     *
     * @param {Point} point
     * @returns {Point}
     */

  }, {
    key: 'getDistanceTo',
    value: function getDistanceTo(point) {
      var diff = this.getDifferenceTo(point);

      return Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
    }

    /**
     * Calculate the angle to another point
     *
     * @param {Point} point
     * @returns {Point}
     */

  }, {
    key: 'getAngleTo',
    value: function getAngleTo(point) {
      var diff = this.getDifferenceTo(point);

      return Math.atan2(diff.y, diff.x);
    }

    /**
     * Return a simple object with x and y properties
     *
     * @returns {object}
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }]);

  return LazyPoint;
}(_Point3.default);

exports.default = LazyPoint;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point =
/**
 *
 * @param {number} x
 * @param {number} y
 */
function Point(x, y) {
  _classCallCheck(this, Point);

  this.x = x;
  this.y = y;
};

exports.default = Point;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  /**
   *
   * @param {number} x
   * @param {number} y
   */
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  /**
   * Update the x and y values
   *
   * @param {Point} point
   */


  _createClass(Point, [{
    key: "update",
    value: function update(point) {
      this.x = point.x;
      this.y = point.y;
    }

    /**
     * Get the difference for x and y axis to another point
     *
     * @param {Point} point
     * @returns {Point}
     */

  }, {
    key: "getDifferenceTo",
    value: function getDifferenceTo(point) {
      return new Point(this.x - point.x, this.y - point.y);
    }

    /**
     * Calculate distance to another point
     *
     * @param {Point} point
     * @returns {Point}
     */

  }, {
    key: "getDistanceTo",
    value: function getDistanceTo(point) {
      var diff = this.getDifferenceTo(point);

      return Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyPoint = exports.Point = exports.LazyBrush = undefined;

var _LazyBrush = __webpack_require__(11);

var _LazyBrush2 = _interopRequireDefault(_LazyBrush);

var _Point = __webpack_require__(3);

var _Point2 = _interopRequireDefault(_Point);

var _LazyPoint = __webpack_require__(2);

var _LazyPoint2 = _interopRequireDefault(_LazyPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LazyBrush = _LazyBrush2.default;
exports.Point = _Point2.default;
exports.LazyPoint = _LazyPoint2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Point = exports.Catenary = undefined;

var _Catenary = __webpack_require__(12);

var _Catenary2 = _interopRequireDefault(_Catenary);

var _Point = __webpack_require__(4);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Catenary = _Catenary2.default;
exports.Point = _Point2.default;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
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
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
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

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(10);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LazyPoint = __webpack_require__(2);

var _LazyPoint2 = _interopRequireDefault(_LazyPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RADIUS_DEFAULT = 30;

var LazyBrush = function () {
  /**
   * constructor
   *
   * @param {object} settings
   * @param {number} settings.radius The radius for the lazy area
   * @param {boolean} settings.enabled
   */
  function LazyBrush() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$radius = _ref.radius,
        radius = _ref$radius === undefined ? RADIUS_DEFAULT : _ref$radius,
        _ref$enabled = _ref.enabled,
        enabled = _ref$enabled === undefined ? true : _ref$enabled,
        _ref$initialPoint = _ref.initialPoint,
        initialPoint = _ref$initialPoint === undefined ? { x: 0, y: 0 } : _ref$initialPoint;

    _classCallCheck(this, LazyBrush);

    this.radius = radius;
    this._isEnabled = enabled;

    this.pointer = new _LazyPoint2.default(initialPoint.x, initialPoint.y);
    this.brush = new _LazyPoint2.default(initialPoint.x, initialPoint.y);

    this.angle = 0;
    this.distance = 0;
    this._hasMoved = false;
  }

  /**
   * Enable lazy brush calculations.
   *
   */


  _createClass(LazyBrush, [{
    key: 'enable',
    value: function enable() {
      this._isEnabled = true;
    }

    /**
     * Disable lazy brush calculations.
     *
     */

  }, {
    key: 'disable',
    value: function disable() {
      this._isEnabled = false;
    }

    /**
     * @returns {boolean}
     */

  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return this._isEnabled;
    }

    /**
     * Update the radius
     *
     * @param {number} radius
     */

  }, {
    key: 'setRadius',
    value: function setRadius(radius) {
      this.radius = radius;
    }

    /**
     * Return the current radius
     *
     * @returns {number}
     */

  }, {
    key: 'getRadius',
    value: function getRadius() {
      return this.radius;
    }

    /**
     * Return the brush coordinates as a simple object
     *
     * @returns {object}
     */

  }, {
    key: 'getBrushCoordinates',
    value: function getBrushCoordinates() {
      return this.brush.toObject();
    }

    /**
     * Return the pointer coordinates as a simple object
     *
     * @returns {object}
     */

  }, {
    key: 'getPointerCoordinates',
    value: function getPointerCoordinates() {
      return this.pointer.toObject();
    }

    /**
     * Return the brush as a LazyPoint
     *
     * @returns {LazyPoint}
     */

  }, {
    key: 'getBrush',
    value: function getBrush() {
      return this.brush;
    }

    /**
     * Return the pointer as a LazyPoint
     *
     * @returns {LazyPoint}
     */

  }, {
    key: 'getPointer',
    value: function getPointer() {
      return this.pointer;
    }

    /**
     * Return the angle between pointer and brush
     *
     * @returns {number} Angle in radians
     */

  }, {
    key: 'getAngle',
    value: function getAngle() {
      return this.angle;
    }

    /**
     * Return the distance between pointer and brush
     *
     * @returns {number} Distance in pixels
     */

  }, {
    key: 'getDistance',
    value: function getDistance() {
      return this.distance;
    }

    /**
     * Return if the previous update has moved the brush.
     *
     * @returns {boolean} Whether the brush moved previously.
     */

  }, {
    key: 'brushHasMoved',
    value: function brushHasMoved() {
      return this._hasMoved;
    }

    /**
     * Updates the pointer point and calculates the new brush point.
     *
     * @param {Point} newPointerPoint
     * @param {Object} options
     * @param {Boolean} options.both Force update pointer and brush
     * @returns {Boolean} Whether any of the two points changed
     */

  }, {
    key: 'update',
    value: function update(newPointerPoint) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$both = _ref2.both,
          both = _ref2$both === undefined ? false : _ref2$both;

      this._hasMoved = false;
      if (this.pointer.equalsTo(newPointerPoint) && !both) {
        return false;
      }

      this.pointer.update(newPointerPoint);

      if (both) {
        this._hasMoved = true;
        this.brush.update(newPointerPoint);
        return true;
      }

      if (this._isEnabled) {
        this.distance = this.pointer.getDistanceTo(this.brush);
        this.angle = this.pointer.getAngleTo(this.brush);

        if (this.distance > this.radius) {
          this.brush.moveByAngle(this.angle, this.distance - this.radius);
          this._hasMoved = true;
        }
      } else {
        this.distance = 0;
        this.angle = 0;
        this.brush.update(newPointerPoint);
        this._hasMoved = true;
      }

      return true;
    }
  }]);

  return LazyBrush;
}();

exports.default = LazyBrush;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Given two points and a length, calculate and draw the catenary.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * JavaScript implementation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2018 Jan Hug <me@dulnan.net>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Released under the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ----------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Original ActionScript implementation:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright poiasd ( http://wonderfl.net/user/poiasd )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MIT License ( http://www.opensource.org/licenses/mit-license.php )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Downloaded from: http://wonderfl.net/c/8Bnl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * ----------------------------------------------------------------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Archived by and downloaded from:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://wa.zozuar.org/code.php?c=8Bnl
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Point = __webpack_require__(4);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EPSILON = 1e-6;

var Catenary = function () {
  /**
   * constructor
   *
   * @param {Object} settings
   * @param {Number} settings.segments Number of segments of the chain.
   * @param {Number} settings.iterationLimit Maximum amount iterations for getting catenary parameters.
   */
  function Catenary() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$segments = _ref.segments,
        segments = _ref$segments === undefined ? 50 : _ref$segments,
        _ref$iterationLimit = _ref.iterationLimit,
        iterationLimit = _ref$iterationLimit === undefined ? 100 : _ref$iterationLimit;

    _classCallCheck(this, Catenary);

    this.p1 = new _Point2.default();
    this.p2 = new _Point2.default();

    this.segments = segments;
    this.iterationLimit = iterationLimit;
  }

  /**
   * Draws a catenary given two coordinates, a length and a context.
   * 
   * @param {CanvasRenderingContext2D} context The canvas context to draw the catenary on to.
   * @param {Point} p1 First point
   * @param {Point} p2 Second point
   * @param {Number} chainLength The length of the catenary
   */


  _createClass(Catenary, [{
    key: 'drawToCanvas',
    value: function drawToCanvas(context, point1, point2, chainLength) {
      this.p1.update(point1);
      this.p2.update(point2);

      var isFlipped = this.p1.x > this.p2.x;

      var p1 = isFlipped ? this.p2 : this.p1;
      var p2 = isFlipped ? this.p1 : this.p2;

      var distance = p1.getDistanceTo(p2);

      var curveData = [];
      var isStraight = true;

      // Prevent "expensive" catenary calculations if it would only result
      // in a straight line.
      if (distance < chainLength) {
        var diff = p2.x - p1.x;

        // If the distance on the x axis of both points is too small, don't
        // calculate a catenary.
        if (diff > 0.01) {
          var h = p2.x - p1.x;
          var v = p2.y - p1.y;
          var a = -this.getCatenaryParameter(h, v, chainLength, this.iterationLimit);
          var x = (a * Math.log((chainLength + v) / (chainLength - v)) - h) * 0.5;
          var y = a * Math.cosh(x / a);
          var offsetX = p1.x - x;
          var offsetY = p1.y - y;
          curveData = this.getCurve(a, p1, p2, offsetX, offsetY, this.segments);
          isStraight = false;
        } else {
          var mx = (p1.x + p2.x) * 0.5;
          var my = (p1.y + p2.y + chainLength) * 0.5;

          curveData = [[p1.x, p1.y], [mx, my], [p2.x, p2.y]];
        }
      } else {
        curveData = [[p1.x, p1.y], [p2.x, p2.y]];
      }

      if (isStraight) {
        this.drawLine(curveData, context);
      } else {
        this.drawCurve(curveData, context);
      }

      return curveData;
    }

    /**
     * Determines catenary parameter.
     * 
     * @param {Number} h Horizontal distance of both points.
     * @param {Number} v Vertical distance of both points.
     * @param {Number} length The catenary length.
     * @param {Number} limit Maximum amount of iterations to find parameter.
     */

  }, {
    key: 'getCatenaryParameter',
    value: function getCatenaryParameter(h, v, length, limit) {
      var m = Math.sqrt(length * length - v * v) / h;
      var x = Math.acosh(m) + 1;
      var prevx = -1;
      var count = 0;

      while (Math.abs(x - prevx) > EPSILON && count < limit) {
        prevx = x;
        x = x - (Math.sinh(x) - m * x) / (Math.cosh(x) - m);
        count++;
      }

      return h / (2 * x);
    }

    /**
     * Calculate the catenary curve.
     * Increasing the segments value will produce a catenary closer
     * to reality, but will require more calcluations.
     * 
     * @param {Number} a The catenary parameter.
     * @param {Point} p1 First point
     * @param {Point} p2 Second point
     * @param {Number} offsetX The calculated offset on the x axis.
     * @param {Number} offsetY The calculated offset on the y axis.
     * @param {Number} segments How many "parts" the chain should be made of.
     */

  }, {
    key: 'getCurve',
    value: function getCurve(a, p1, p2, offsetX, offsetY, segments) {
      var data = [p1.x, a * Math.cosh((p1.x - offsetX) / a) + offsetY];

      var d = p2.x - p1.x;
      var length = segments - 1;

      for (var i = 0; i < length; i++) {
        var x = p1.x + d * (i + 0.5) / length;
        var y = a * Math.cosh((x - offsetX) / a) + offsetY;
        data.push(x, y);
      }

      data.push(p2.x, a * Math.cosh((p2.x - offsetX) / a) + offsetY);

      return data;
    }

    /**
     * Draws a straight line between two points.
     *
     * @param {Array} data Even indices are x, odd are y.
     * @param {CanvasRenderingContext2D} context The context to draw to.
     */

  }, {
    key: 'drawLine',
    value: function drawLine(data, context) {
      context.moveTo(data[0][0], data[0][1]);

      context.lineTo(data[1][0], data[1][1]);
    }

    /**
     * Draws a quadratic curve between every calculated catenary segment,
     * so that the segments don't look like straight lines.
     *
     * @param {Array} data Even indices are x, odd are y.
     * @param {CanvasRenderingContext2D} context The context to draw to.
     * 
     * @returns {Array} The original segment coordinates.
     */

  }, {
    key: 'drawCurve',
    value: function drawCurve(data, context) {
      var length = data.length * 0.5 - 1;
      var ox = data[2];
      var oy = data[3];

      var temp = [];

      context.moveTo(data[0], data[1]);

      for (var i = 2; i < length; i++) {
        var x = data[i * 2];
        var y = data[i * 2 + 1];
        var mx = (x + ox) * 0.5;
        var my = (y + oy) * 0.5;
        temp.push([ox, oy, mx, my]);
        context.quadraticCurveTo(ox, oy, mx, my);
        ox = x;
        oy = y;
      }

      length = data.length;
      context.quadraticCurveTo(data[length - 4], data[length - 3], data[length - 2], data[length - 1]);

      return temp;
    }
  }]);

  return Catenary;
}();

exports.default = Catenary;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_CanvasDraw; });

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/lazy-brush/lib/index.js
var lib = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/catenary-curve/lib/index.js
var catenary_curve_lib = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(7);

// CONCATENATED MODULE: ./src/coordinateSystem.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @type {ViewPoint}
 */
var NULL_VIEW_POINT = Object.freeze({
  x: 0,
  y: 0,
  untransformedX: 0,
  untransformedY: 0
});
/**
 * @type {CanvasBounds}
 */

var NULL_BOUNDS = Object.freeze({
  canvasWidth: 0,
  canvasHeight: 0,
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  viewMin: NULL_VIEW_POINT,
  viewMax: NULL_VIEW_POINT
});
/**
 * The identity matrix (a transform that results in view coordinates that are
 * identical to relative client coordinates).
 * @type {Matrix}
 */

var IDENTITY = Object.freeze({
  a: 1,
  b: 0,
  c: 0,
  d: 1,
  e: 0,
  f: 0
});

function valueOrDefault(value, defaultValue) {
  if (value === null || typeof value === "undefined") {
    return defaultValue;
  } else {
    return value;
  }
}
/**
 * Facilitates calculation and manipulation of a zoom-and-pannable view within a
 * canvas.
 */


var CoordinateSystem = /*#__PURE__*/function () {
  /**
   * @typedef Extents
   * @property {number} min the minimal value in the range
   * @property {number} max the maximal value in the range
   */

  /**
   * @typedef Size
   * @property {number} width the span of the element's horizontal axis
   * @property {number} height the span of the element's vertical axis
   */

  /**
   * @param {Object} parameters the initialization parameters for this instance.
   * @param {Extents} parameters.scaleExtents the minimum and maximum allowable scale factor.
   * @param {Sizee} parameters.documentSize the width and height of the document, in client space.
   */
  function CoordinateSystem(_ref) {
    var _this = this;

    var scaleExtents = _ref.scaleExtents,
        documentSize = _ref.documentSize;

    _defineProperty(this, "_scaleExtents", void 0);

    _defineProperty(this, "_documentSize", void 0);

    _defineProperty(this, "_canvas", null);

    _defineProperty(this, "_view", {
      scale: 1.0,
      x: 0,
      y: 0
    });

    _defineProperty(this, "_viewChangeListeners", new Set());

    _defineProperty(this, "setScale", function (scale) {
      _this.setView({
        scale: scale
      });
    });

    _defineProperty(this, "clampView", function (_ref2) {
      var scale = _ref2.scale,
          x = _ref2.x,
          y = _ref2.y;
      var _this$scaleExtents = _this.scaleExtents,
          min = _this$scaleExtents.min,
          max = _this$scaleExtents.max;
      var _this$documentSize = _this.documentSize,
          width = _this$documentSize.width,
          height = _this$documentSize.height;

      var _ref3 = _this.canvasRect || NULL_BOUNDS,
          left = _ref3.left,
          top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom;

      var canvasWidth = right - left;
      var canvasHeight = bottom - top;
      var maxx = canvasWidth / 2;
      var minx = -(width * _this._view.scale - canvasWidth / 2);
      var maxy = canvasHeight / 2;
      var miny = -(height * _this._view.scale - canvasHeight / 2); // Clamp values to acceptible range.

      return {
        scale: Math.min(Math.max(scale, min), max),
        x: Math.min(Math.max(x, minx), maxx),
        y: Math.min(Math.max(y, miny), maxy)
      };
    });

    _defineProperty(this, "resetView", function () {
      _this.setView({
        scale: 1.0,
        x: 0,
        y: 0
      });
    });

    _defineProperty(this, "setView", function (view) {
      var newView = _this.clampView(_extends({}, _this._view, view || {}));

      var _this$_view = _this._view,
          scale = _this$_view.scale,
          x = _this$_view.x,
          y = _this$_view.y; // Only trigger if the view actually changed.

      if (newView.scale !== scale || newView.x !== x || newView.y !== y) {
        _this._view = newView;

        _this._viewChangeListeners.forEach(function (listener) {
          return listener && listener(newView);
        });
      }

      return _extends({}, _this._view);
    });

    _defineProperty(this, "scaleAtClientPoint", function (deltaScale, clientPoint) {
      var viewPt = _this.clientPointToViewPoint(clientPoint);

      var newView = _this.clampView(_extends({}, _this._view, {
        scale: _this._view.scale + deltaScale
      }));

      var clientPtPostScale = _this.viewPointToClientPoint(viewPt, newView);

      newView.x = _this._view.x - (clientPtPostScale.clientX - clientPoint.clientX);
      newView.y = _this._view.y - (clientPtPostScale.clientY - clientPoint.clientY);
      return _this.setView(newView);
    });

    _defineProperty(this, "clientPointToViewPoint", function (_ref4, view) {
      var clientX = _ref4.clientX,
          clientY = _ref4.clientY;

      if (view === void 0) {
        view = _this._view;
      }

      var _ref5 = _this.canvasRect || NULL_BOUNDS,
          left = _ref5.left,
          top = _ref5.top;

      var relativeClientX = clientX - left;
      var relativeClientY = clientY - top;
      return {
        x: (relativeClientX - view.x) / view.scale,
        y: (relativeClientY - view.y) / view.scale,
        relativeClientX: relativeClientX,
        relativeClientY: relativeClientY
      };
    });

    _defineProperty(this, "viewPointToClientPoint", function (_ref6, view) {
      var x = _ref6.x,
          y = _ref6.y;

      if (view === void 0) {
        view = _this._view;
      }

      var _ref7 = _this.canvasRect || NULL_BOUNDS,
          left = _ref7.left,
          top = _ref7.top;

      var relativeX = x * view.scale + view.x;
      var relativeY = y * view.scale + view.y;
      var clientX = relativeX + left;
      var clientY = relativeY + top;
      return {
        clientX: clientX,
        clientY: clientY,
        relativeX: relativeX,
        relativeY: relativeY,
        x: clientX,
        y: clientY
      };
    });

    _defineProperty(this, "attachViewChangeListener", function (listener) {
      _this._viewChangeListeners.add(listener);
    });

    this._scaleExtents = scaleExtents;
    this._documentSize = documentSize;
  }
  /**
   * @type {Extents}
   */


  _createClass(CoordinateSystem, [{
    key: "canvas",

    /**
     * @returns {Canvas} the canvas currently associated with this instance.
     */
    get: function get() {
      return this._canvas;
    }
    /**
     * Updates the canvas for this coordinate system and recalculates the view.
     * @param {Canvas} canvas the new canvas to associate with this instance.
     */
    ,
    set: function set(canvas) {
      this._canvas = canvas;
      this.setView();
    }
    /**
     * @returns {number} the current zoom factor
     */

  }, {
    key: "scale",
    get: function get() {
      return this._view.scale;
    }
    /**
     * Sets the zoom factor (clamped by the scale extents) and updates the view.
     * @param {number} the new zoom factor
     */

  }, {
    key: "x",

    /**
     * @returns {number} the horizontal component of the current pan offset
     */
    get: function get() {
      return this._view.x;
    }
    /**
     * Sets the horizontal pan offset (clamped by the document extents) and
     * updates the view.
     * @param {number} x the new offset
     */
    ,
    set: function set(x) {
      this.setView({
        x: x
      });
    }
    /**
     * @retruns {number} the vertical component of the current pan offset
     */

  }, {
    key: "y",
    get: function get() {
      return this._view.y;
    }
    /**
     * Sets the vertical pan offset (clamped by the document extents) and
     * updates the view.
     * @param {number} y the new offset
     */
    ,
    set: function set(y) {
      this.setView({
        y: y
      });
    }
    /**
     * @returns {View} a copy of this instance's current view state.
     */

  }, {
    key: "view",
    get: function get() {
      return _extends({}, this._view);
    }
    /**
     * @returns {Extents} a copy of the scale extents currently applied to this
     * instance.
     */

  }, {
    key: "scaleExtents",
    get: function get() {
      return _extends({}, this._scaleExtents);
    }
    /**
     * Updates the minimum and maximum scale and resets the view transform if it
     * is outside the new extents.
     * @param {Extents} extents the new scale extents.
     */
    ,
    set: function set(_ref8) {
      var min = _ref8.min,
          max = _ref8.max;
      this._scaleExtents = {
        min: min,
        max: max
      };
      this.setView();
    }
    /**
     * @returns {Size} the current document size (used to constrain the pan
     * offset).
     */

  }, {
    key: "documentSize",
    get: function get() {
      return _extends({}, this._documentSize);
    }
    /**
     * Sets the document size and recalculates the view if it is outside the new
     * bounds.
     * @param {Size} size the new document size.
     */
    ,
    set: function set(_ref9) {
      var width = _ref9.width,
          height = _ref9.height;
      this._documentSize = {
        width: width,
        height: height
      };
      this.setView();
    }
    /**
     * A view matrix expressing a series of transformations.
     * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
     * @typedef Matrix
     * @property {number} a horizontal scaling factor (1 == unscaled)
     * @property {number} b vertical skewing factor (0 == unskewed)
     * @property {number} c horizontal skewing factor (0 == unskewed)
     * @property {number} d vertical scaling factor (1 == unscaled)
     * @property {number} e horizontal translation (0 == untranslated)
     * @property {number} f vertical translation (0 == untranslated)
     */

    /**
     * @returns {Matrix} this coordinate system's current transformation matrix
     */

  }, {
    key: "transformMatrix",
    get: function get() {
      //
      return {
        a: this._view.scale,
        // horizontal scaling
        b: 0,
        // vertical skewing
        c: 0,
        // horizontal skewing
        d: this._view.scale,
        // vertical scaling
        e: this._view.x,
        f: this._view.y
      };
    }
    /**
     * An object expressing the bounds of a canvas object in terms of the
     * coordinate system.
     * @typedef CanvasBounds
     * @property {number} left the left edge of the canvas in client space
     * @property {number} right the right edge of the canvas in client space
     * @property {number} top the top edge of the canvas in client space
     * @property {number} bottom the bottom edge of the canvas in client space
     * @property {number} canvasWidth the width of the canvas in client space
     * @property {number} canvasHeight the height of the canvas in client space
     * @property {ViewPoint} viewMin the top-left corner of the canvas in view space
     * @property {ViewPoint} viewMax the bottom-right corner of the canvas in view space
     */

    /**
     * @returns {CanvasBounds | undefined} the boundaries of the canvas linked to
     * this coordinate system, or undefined if no canvas is set.
     */

  }, {
    key: "canvasBounds",
    get: function get() {
      if (this._canvas) {
        var _this$_canvas$getBoun = this._canvas.getBoundingClientRect(),
            left = _this$_canvas$getBoun.left,
            top = _this$_canvas$getBoun.top,
            right = _this$_canvas$getBoun.right,
            bottom = _this$_canvas$getBoun.bottom;

        return {
          viewMin: this.clientPointToViewPoint({
            clientX: left,
            clientY: top
          }),
          viewMax: this.clientPointToViewPoint({
            clientX: right,
            clientY: bottom
          }),
          left: left,
          top: top,
          right: right,
          bottom: bottom,
          canvasWidth: this._canvas.width,
          canvasHeight: this._canvas.height
        };
      } else {
        return undefined;
      }
    }
    /**
     * @private
     * @return {{left: number, top: number} | undefined}
     */

  }, {
    key: "canvasRect",
    get: function get() {
      if (this.canvas) {
        return this.canvas.getBoundingClientRect();
      } else {
        return undefined;
      }
    }
    /**
     * Calculates a variant of the given view clamped according to the scale and
     * document bounds. Does not modify this instance.
     * @param {View} view the view constraints to clamp.
     * @returns {View} a new view object representing the constrained input.
     */

  }]);

  return CoordinateSystem;
}();


// CONCATENATED MODULE: ./src/drawImage.js
/** 
 * Original from: https://stackoverflow.com/questions/21961839/simulation-background-size-cover-in-canvas
 * Original By Ken Fyrstenberg Nilsen
 * 
 * Note: img must be fully loaded or have correct width & height set.
 */
function drawImageProp(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      ctx = _ref.ctx,
      img = _ref.img,
      x = _ref.x,
      y = _ref.y,
      w = _ref.w,
      h = _ref.h,
      offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;

  // Defaults
  if (typeof x !== "number") x = 0;
  if (typeof y !== "number") y = 0;
  if (typeof w !== "number") w = ctx.canvas.width;
  if (typeof h !== "number") h = ctx.canvas.height;
  if (typeof offsetX !== "number") offsetX = 0.5;
  if (typeof offsetY !== "number") offsetY = 0.5; // keep bounds [0.0, 1.0]

  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;
  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,
      // new prop. width
  nh = ih * r,
      // new prop. height
  cx,
      cy,
      cw,
      ch,
      ar = 1; // decide which gap to fill

  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated

  nw *= ar;
  nh *= ar; // calc source rectangle

  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY; // make sure source rectangle is valid

  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih; // fill image in dest. rectangle

  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}
// CONCATENATED MODULE: ./src/interactionStateMachine.js
var interactionStateMachine_this = undefined;

function interactionStateMachine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOUCH_SLOP = 10;
var PINCH_TIMEOUT_MS = 250;

var SUPPRESS_SCROLL = function SUPPRESS_SCROLL(e) {
  // No zooming while drawing, but we'll cancel the scroll event.
  e.preventDefault();
  return interactionStateMachine_this;
};
/**
 * The default state for the interaction state machine. Supports zoom and
 * initiating pan and drawing actions.
 */


var DefaultState = function DefaultState() {
  var _this2 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", function (e, canvasDraw) {
    var _canvasDraw$props = canvasDraw.props,
        disabled = _canvasDraw$props.disabled,
        enablePanAndZoom = _canvasDraw$props.enablePanAndZoom,
        mouseZoomFactor = _canvasDraw$props.mouseZoomFactor;

    if (disabled) {
      return new DisabledState();
    } else if (enablePanAndZoom && e.ctrlKey) {
      e.preventDefault();
      canvasDraw.coordSystem.scaleAtClientPoint(mouseZoomFactor * e.deltaY, clientPointFromEvent(e));
    }

    return _this2;
  });

  interactionStateMachine_defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return new DisabledState();
    } else if (e.ctrlKey && canvasDraw.props.enablePanAndZoom) {
      return new PanState().handleDrawStart(e, canvasDraw);
    } else {
      return new WaitForPinchState().handleDrawStart(e, canvasDraw);
    }
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return new DisabledState();
    } else {
      var _viewPointFromEvent = viewPointFromEvent(canvasDraw.coordSystem, e),
          x = _viewPointFromEvent.x,
          y = _viewPointFromEvent.y;

      canvasDraw.lazy.update({
        x: x,
        y: y
      });
      return _this2;
    }
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    return canvasDraw.props.disabled ? new DisabledState() : _this2;
  });
};
;
/**
 * This state is used as long as the disabled prop is active. It ignores all
 * events and doesn't prevent default actions. The disabled state can only be
 * triggered from the default state (i.e., while no action is actively being
 * performed).
 */

var DisabledState = function DisabledState() {
  var _this3 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleMouseWheel(e, canvasDraw);
    }
  });

  interactionStateMachine_defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleDrawStart(e, canvasDraw);
    }
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleDrawMove(e, canvasDraw);
    }
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleDrawEnd(e, canvasDraw);
    }
  });
};
/**
 * This state is active as long as the user is panning the image. This state is
 * retained until the pan ceases.
 */

var PanState = function PanState() {
  var _this4 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  interactionStateMachine_defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    e.preventDefault();
    _this4.dragStart = clientPointFromEvent(e);
    _this4.panStart = {
      x: canvasDraw.coordSystem.x,
      y: canvasDraw.coordSystem.y
    };
    return _this4;
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    e.preventDefault();

    var _clientPointFromEvent = clientPointFromEvent(e),
        clientX = _clientPointFromEvent.clientX,
        clientY = _clientPointFromEvent.clientY;

    var dx = clientX - _this4.dragStart.clientX;
    var dy = clientY - _this4.dragStart.clientY;
    canvasDraw.coordSystem.setView({
      x: _this4.panStart.x + dx,
      y: _this4.panStart.y + dy
    });
    return _this4;
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });
};
/**
 * This state is active when the user has initiated the drawing action but has
 * not yet created any lines. We use this state to try and detect a second touch
 * event to initiate a pinch-zoom action. We'll give up on that if enough time
 * or movement happens without a second touch.
 */

var WaitForPinchState = function WaitForPinchState() {
  var _this5 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  interactionStateMachine_defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    var enablePanAndZoom = canvasDraw.props.enablePanAndZoom;
    e.preventDefault(); // We're going to transition immediately into lazy-drawing mode if
    // pan-and-zoom isn't enabled or if this event wasn't triggered by a touch.

    if (!e.touches || !e.touches.length || !enablePanAndZoom) {
      return new DrawingState().handleDrawStart(e, canvasDraw);
    } // If we already have two touch events, we can move straight into pinch/pan


    if (enablePanAndZoom && e.touches && e.touches.length >= 2) {
      return new ScaleOrPanState().handleDrawStart(e, canvasDraw);
    }

    return _this5.handleDrawMove(e, canvasDraw);
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    e.preventDefault(); // If we have two touches, move to pinch/pan (we don't have to recheck
    // whether zoom is enabled because that happend in draw start).

    if (e.touches && e.touches.length >= 2) {
      // Use the start draw to handler to transition.
      return new ScaleOrPanState().handleDrawStart(e, canvasDraw);
    }

    var clientPt = clientPointFromEvent(e);

    _this5.deferredPoints.push(clientPt); // If we've already moved far enough, or if enough time has passed, give up
    // and switch over to drawing.


    if (new Date().valueOf() - _this5.startTimestamp < PINCH_TIMEOUT_MS) {
      if (_this5.startClientPoint === null) {
        _this5.startClientPoint = clientPt;
      } // Note that we're using "manhattan distance" rather than computing a
      // hypotenuse here as a cheap approximation


      var d = Math.abs(clientPt.clientX - _this5.startClientPoint.clientX) + Math.abs(clientPt.clientY - _this5.startClientPoint.clientY);

      if (d < TOUCH_SLOP) {
        // We're not ready to give up yet.
        return _this5;
      }
    } // Okay, give up and start drawing.


    return _this5.issueDeferredPoints(canvasDraw);
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    // The user stopped drawing before we decided what to do. Just treat this as
    // if they were drawing all along.
    return _this5.issueDeferredPoints(canvasDraw).handleDrawEnd(e, canvasDraw);
  });

  interactionStateMachine_defineProperty(this, "issueDeferredPoints", function (canvasDraw) {
    // Time to give up. Play our deferred points out to the drawing state.
    // The first point will have been a start draw.
    var nextState = new DrawingState();

    for (var i = 0; i < _this5.deferredPoints.length; i++) {
      var deferredPt = _this5.deferredPoints[i];
      var syntheticEvt = new SyntheticEvent(deferredPt);
      var func = i === 0 ? nextState.handleDrawStart : nextState.handleDrawMove;
      nextState = func(syntheticEvt, canvasDraw);
    }

    return nextState;
  });

  this.startClientPoint = null;
  this.startTimestamp = new Date().valueOf();
  this.deferredPoints = [];
};
/**
 * This state is active when the user has added at least two touch points but we
 * don't yet know if they intend to pan or zoom.
 */

var ScaleOrPanState = function ScaleOrPanState() {
  var _this6 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  interactionStateMachine_defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    e.preventDefault();

    if (!e.touches || e.touches.length < 2) {
      return new DefaultState();
    }

    _this6.start = _this6.getTouchMetrics(e);
    _this6.panStart = {
      x: canvasDraw.coordSystem.x,
      y: canvasDraw.coordSystem.y
    };
    _this6.scaleStart = canvasDraw.coordSystem.scale;
    return _this6;
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    e.preventDefault();

    if (!e.touches || e.touches.length < 2) {
      return new DefaultState();
    }

    var _this6$recentMetrics = _this6.recentMetrics = _this6.getTouchMetrics(e),
        centroid = _this6$recentMetrics.centroid,
        distance = _this6$recentMetrics.distance; // Switch to scaling?


    var dd = Math.abs(distance - _this6.start.distance);

    if (dd >= TOUCH_SLOP) {
      return new TouchScaleState(_this6).handleDrawMove(e, canvasDraw);
    } // Switch to panning?


    var dx = centroid.clientX - _this6.start.centroid.clientX;
    var dy = centroid.clientY - _this6.start.centroid.clientY;
    var dc = Math.abs(dx) + Math.abs(dy);

    if (dc >= TOUCH_SLOP) {
      return new TouchPanState(_this6).handleDrawMove(e, canvasDraw);
    } // Not enough movement yet


    return _this6;
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });

  interactionStateMachine_defineProperty(this, "getTouchMetrics", function (e) {
    var _clientPointFromEvent2 = clientPointFromEvent(e.touches[0]),
        t1x = _clientPointFromEvent2.clientX,
        t1y = _clientPointFromEvent2.clientY;

    var _clientPointFromEvent3 = clientPointFromEvent(e.touches[1]),
        t2x = _clientPointFromEvent3.clientX,
        t2y = _clientPointFromEvent3.clientY;

    var dx = t2x - t1x;
    var dy = t2y - t1y;
    return {
      t1: {
        clientX: t1x,
        clientY: t1y
      },
      t2: {
        clientX: t2x,
        clientY: t2y
      },
      distance: Math.sqrt(dx * dx + dy * dy),
      centroid: {
        clientX: (t1x + t2x) / 2.0,
        clientY: (t1y + t2y) / 2.0
      }
    };
  });
};
/**
 * The user is actively using touch gestures to pan the image.
 */

var TouchPanState = function TouchPanState(scaleOrPanState) {
  var _this7 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  interactionStateMachine_defineProperty(this, "handleDrawStart", function () {
    return _this7;
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    e.preventDefault();

    if (!e.touches || e.touches.length < 2) {
      return new DefaultState();
    }

    var ref = _this7.scaleOrPanState;

    var _ref$recentMetrics = ref.recentMetrics = ref.getTouchMetrics(e),
        centroid = _ref$recentMetrics.centroid,
        distance = _ref$recentMetrics.distance;

    var dx = centroid.clientX - ref.start.centroid.clientX;
    var dy = centroid.clientY - ref.start.centroid.clientY;
    canvasDraw.setView({
      x: ref.panStart.x + dx,
      y: ref.panStart.y + dy
    });
    return _this7;
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });

  this.scaleOrPanState = scaleOrPanState;
};
/**
 * The user is actively using touch gestures to scale the drawing.
 */

var TouchScaleState = function TouchScaleState(scaleOrPanState) {
  var _this8 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  interactionStateMachine_defineProperty(this, "handleDrawStart", function () {
    return _this8;
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    e.preventDefault();

    if (!e.touches || e.touches.length < 2) {
      return new DefaultState();
    }

    var ref = _this8.scaleOrPanState;

    var _ref$recentMetrics2 = ref.recentMetrics = ref.getTouchMetrics(e),
        centroid = _ref$recentMetrics2.centroid,
        distance = _ref$recentMetrics2.distance;

    var targetScale = ref.scaleStart * (distance / ref.start.distance);
    var dScale = targetScale - canvasDraw.coordSystem.scale;
    canvasDraw.coordSystem.scaleAtClientPoint(dScale, centroid);
    return _this8;
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });

  this.scaleOrPanState = scaleOrPanState;
};
/**
 * This state is active when the user is drawing.
 */

var DrawingState = function DrawingState() {
  var _this9 = this;

  interactionStateMachine_defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  interactionStateMachine_defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    e.preventDefault();

    if (e.touches && e.touches.length) {
      // on touch, set catenary position to touch pos
      var _viewPointFromEvent2 = viewPointFromEvent(canvasDraw.coordSystem, e),
          x = _viewPointFromEvent2.x,
          y = _viewPointFromEvent2.y;

      canvasDraw.lazy.update({
        x: x,
        y: y
      }, {
        both: true
      });
    }

    return _this9.handleDrawMove(e, canvasDraw);
  });

  interactionStateMachine_defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    e.preventDefault();

    var _viewPointFromEvent3 = viewPointFromEvent(canvasDraw.coordSystem, e),
        x = _viewPointFromEvent3.x,
        y = _viewPointFromEvent3.y;

    canvasDraw.lazy.update({
      x: x,
      y: y
    });
    var isDisabled = !canvasDraw.lazy.isEnabled();

    if (!_this9.isDrawing || isDisabled) {
      // Start drawing and add point
      canvasDraw.points.push(canvasDraw.clampPointToDocument(canvasDraw.lazy.brush.toObject()));
      _this9.isDrawing = true;
    } // Add new point


    canvasDraw.points.push(canvasDraw.clampPointToDocument(canvasDraw.lazy.brush.toObject())); // Draw current points

    canvasDraw.drawPoints({
      points: canvasDraw.points,
      brushColor: canvasDraw.props.brushColor,
      brushRadius: canvasDraw.props.brushRadius
    });
    return _this9;
  });

  interactionStateMachine_defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    e.preventDefault(); // Draw to this end pos

    _this9.handleDrawMove(e, canvasDraw);

    canvasDraw.saveLine();
    return new DefaultState();
  });

  this.isDrawing = false;
};
var SyntheticEvent = function SyntheticEvent(_ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;

  interactionStateMachine_defineProperty(this, "preventDefault", function () {});

  this.clientX = clientX;
  this.clientY = clientY;
  this.touches = [{
    clientX: clientX,
    clientY: clientY
  }];
};
function clientPointFromEvent(e) {
  // use cursor pos as default
  var clientX = e.clientX;
  var clientY = e.clientY; // use first touch if available

  if (e.changedTouches && e.changedTouches.length > 0) {
    clientX = e.changedTouches[0].clientX;
    clientY = e.changedTouches[0].clientY;
  }

  return {
    clientX: clientX,
    clientY: clientY
  };
}
function viewPointFromEvent(coordSystem, e) {
  return coordSystem.clientPointToViewPoint(clientPointFromEvent(e));
}
// CONCATENATED MODULE: ./src/makePassiveEventOption.js
// Determines if the browser supprots passive events
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
var passiveSupported = false;

try {
  var options = {
    get passive() {
      passiveSupported = true;
      return false;
    }

  };
  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
} catch (e) {
  passiveSupported = false;
}

function makePassiveEventOption(passive) {
  return passiveSupported ? {
    passive: passive
  } : passive;
}
// CONCATENATED MODULE: ./src/index.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function src_extends() { src_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return src_extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function midPointBtw(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2
  };
}

var canvasStyle = {
  display: "block",
  position: "absolute"
}; // The order of these is important: grid > drawing > temp > interface

var canvasTypes = ["grid", "drawing", "temp", "interface"];
var dimensionsPropTypes = prop_types_default.a.oneOfType([prop_types_default.a.number, prop_types_default.a.string]);
var boundsProp = prop_types_default.a.shape({
  min: prop_types_default.a.number.isRequired,
  max: prop_types_default.a.number.isRequired
});

var src_CanvasDraw = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(CanvasDraw, _PureComponent);

  ///// public API /////////////////////////////////////////////////////////////
  function CanvasDraw(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    src_defineProperty(_assertThisInitialized(_this), "undo", function () {
      var lines = [];

      if (_this.lines.length) {
        lines = _this.lines.slice(0, -1);
      } else if (_this.erasedLines.length) {
        lines = _this.erasedLines.pop();
      }

      _this.clearExceptErasedLines();

      _this.simulateDrawingLines({
        lines: lines,
        immediate: true
      });

      _this.triggerOnChange();
    });

    src_defineProperty(_assertThisInitialized(_this), "eraseAll", function () {
      _this.erasedLines.push([].concat(_this.lines));

      _this.clearExceptErasedLines();

      _this.triggerOnChange();
    });

    src_defineProperty(_assertThisInitialized(_this), "clear", function () {
      _this.erasedLines = [];

      _this.clearExceptErasedLines();

      _this.resetView();
    });

    src_defineProperty(_assertThisInitialized(_this), "resetView", function () {
      return _this.coordSystem.resetView();
    });

    src_defineProperty(_assertThisInitialized(_this), "setView", function (view) {
      return _this.coordSystem.setView(view);
    });

    src_defineProperty(_assertThisInitialized(_this), "getSaveData", function () {
      // Construct and return the stringified saveData object
      return JSON.stringify({
        lines: _this.lines,
        width: _this.props.canvasWidth,
        height: _this.props.canvasHeight
      });
    });

    src_defineProperty(_assertThisInitialized(_this), "getDataURL", function (fileType, useBgImage, backgroundColour) {
      // Get a reference to the "drawing" layer of the canvas
      var canvasToExport = _this.canvas.drawing;
      var context = canvasToExport.getContext("2d"); //cache height and width

      var width = canvasToExport.width;
      var height = canvasToExport.height; //get the current ImageData for the canvas

      var storedImageData = context.getImageData(0, 0, width, height); //store the current globalCompositeOperation

      var compositeOperation = context.globalCompositeOperation; //set to draw behind current content

      context.globalCompositeOperation = "destination-over"; // If "useBgImage" has been set to true, this takes precedence over the background colour parameter

      if (useBgImage) {
        if (!_this.props.imgSrc) return "Background image source not set"; // Write the background image

        _this.drawImage();
      } else if (backgroundColour != null) {
        //set background color
        context.fillStyle = backgroundColour; //fill entire canvas with background colour

        context.fillRect(0, 0, width, height);
      } // If the file type has not been specified, default to PNG


      if (!fileType) fileType = "png"; // Export the canvas to data URL

      var imageData = canvasToExport.toDataURL("image/" + fileType); //clear the canvas

      context.clearRect(0, 0, width, height); //restore it with original / cached ImageData

      context.putImageData(storedImageData, 0, 0); //reset the globalCompositeOperation to what it was

      context.globalCompositeOperation = compositeOperation;
      return imageData;
    });

    src_defineProperty(_assertThisInitialized(_this), "loadSaveData", function (saveData, immediate) {
      if (immediate === void 0) {
        immediate = _this.props.immediateLoading;
      }

      if (typeof saveData !== "string") {
        throw new Error("saveData needs to be of type string!");
      }

      var _JSON$parse = JSON.parse(saveData),
          lines = _JSON$parse.lines,
          width = _JSON$parse.width,
          height = _JSON$parse.height;

      if (!lines || typeof lines.push !== "function") {
        throw new Error("saveData.lines needs to be an array!");
      }

      _this.clear();

      if (width === _this.props.canvasWidth && height === _this.props.canvasHeight) {
        _this.simulateDrawingLines({
          lines: lines,
          immediate: immediate
        });
      } else {
        // we need to rescale the lines based on saved & current dimensions
        var scaleX = _this.props.canvasWidth / width;
        var scaleY = _this.props.canvasHeight / height;
        var scaleAvg = (scaleX + scaleY) / 2;

        _this.simulateDrawingLines({
          lines: lines.map(function (line) {
            return src_extends({}, line, {
              points: line.points.map(function (p) {
                return {
                  x: p.x * scaleX,
                  y: p.y * scaleY
                };
              }),
              brushRadius: line.brushRadius * scaleAvg
            });
          }),
          immediate: immediate
        });
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.canvasObserver.unobserve(_this.canvasContainer);

      _this.canvas["interface"] && _this.canvas["interface"].removeEventListener("wheel", _this.handleWheel);
    });

    src_defineProperty(_assertThisInitialized(_this), "handleWheel", function (e) {
      _this.interactionSM = _this.interactionSM.handleMouseWheel(e, _assertThisInitialized(_this));
    });

    src_defineProperty(_assertThisInitialized(_this), "handleDrawStart", function (e) {
      _this.interactionSM = _this.interactionSM.handleDrawStart(e, _assertThisInitialized(_this));
      _this.mouseHasMoved = true;
    });

    src_defineProperty(_assertThisInitialized(_this), "handleDrawMove", function (e) {
      _this.interactionSM = _this.interactionSM.handleDrawMove(e, _assertThisInitialized(_this));
      _this.mouseHasMoved = true;
    });

    src_defineProperty(_assertThisInitialized(_this), "handleDrawEnd", function (e) {
      _this.interactionSM = _this.interactionSM.handleDrawEnd(e, _assertThisInitialized(_this));
      _this.mouseHasMoved = true;
    });

    src_defineProperty(_assertThisInitialized(_this), "applyView", function () {
      if (!_this.ctx.drawing) {
        return;
      }

      canvasTypes.map(function (name) {
        return _this.ctx[name];
      }).forEach(function (ctx) {
        _this.clearWindow(ctx);

        var m = _this.coordSystem.transformMatrix;
        ctx.setTransform(m.a, m.b, m.c, m.d, m.e, m.f);
      });

      if (!_this.deferRedrawOnViewChange) {
        _this.drawGrid(_this.ctx.grid);

        _this.redrawImage();

        _this.loop({
          once: true
        });

        var lines = _this.lines;
        _this.lines = [];

        _this.simulateDrawingLines({
          lines: lines,
          immediate: true
        });
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "handleCanvasResize", function (entries) {
      var saveData = _this.getSaveData();

      _this.deferRedrawOnViewChange = true;

      try {
        for (var _iterator = _createForOfIteratorHelperLoose(entries), _step; !(_step = _iterator()).done;) {
          var entry = _step.value;
          var _entry$contentRect = entry.contentRect,
              width = _entry$contentRect.width,
              height = _entry$contentRect.height;

          _this.setCanvasSize(_this.canvas["interface"], width, height);

          _this.setCanvasSize(_this.canvas.drawing, width, height);

          _this.setCanvasSize(_this.canvas.temp, width, height);

          _this.setCanvasSize(_this.canvas.grid, width, height);

          _this.coordSystem.documentSize = {
            width: width,
            height: height
          };

          _this.drawGrid(_this.ctx.grid);

          _this.drawImage();

          _this.loop({
            once: true
          });
        }

        _this.loadSaveData(saveData, true);
      } finally {
        _this.deferRedrawOnViewChange = false;
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "clampPointToDocument", function (point) {
      if (_this.props.clampLinesToDocument) {
        return {
          x: Math.max(Math.min(point.x, _this.props.canvasWidth), 0),
          y: Math.max(Math.min(point.y, _this.props.canvasHeight), 0)
        };
      } else {
        return point;
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "redrawImage", function () {
      _this.image && _this.image.complete && drawImageProp({
        ctx: _this.ctx.grid,
        img: _this.image
      });
    });

    src_defineProperty(_assertThisInitialized(_this), "simulateDrawingLines", function (_ref) {
      var lines = _ref.lines,
          immediate = _ref.immediate;
      // Simulate live-drawing of the loaded lines
      // TODO use a generator
      var curTime = 0;
      var timeoutGap = immediate ? 0 : _this.props.loadTimeOffset;
      lines.forEach(function (line) {
        var points = line.points,
            brushColor = line.brushColor,
            brushRadius = line.brushRadius; // Draw all at once if immediate flag is set, instead of using setTimeout

        if (immediate) {
          // Draw the points
          _this.drawPoints({
            points: points,
            brushColor: brushColor,
            brushRadius: brushRadius
          }); // Save line with the drawn points


          _this.points = points;

          _this.saveLine({
            brushColor: brushColor,
            brushRadius: brushRadius
          });

          return;
        } // Use timeout to draw


        var _loop = function _loop(i) {
          curTime += timeoutGap;
          window.setTimeout(function () {
            _this.drawPoints({
              points: points.slice(0, i + 1),
              brushColor: brushColor,
              brushRadius: brushRadius
            });
          }, curTime);
        };

        for (var i = 1; i < points.length; i++) {
          _loop(i);
        }

        curTime += timeoutGap;
        window.setTimeout(function () {
          // Save this line with its props instead of this.props
          _this.points = points;

          _this.saveLine({
            brushColor: brushColor,
            brushRadius: brushRadius
          });
        }, curTime);
      });
    });

    src_defineProperty(_assertThisInitialized(_this), "setCanvasSize", function (canvas, width, height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width;
      canvas.style.height = height;
    });

    src_defineProperty(_assertThisInitialized(_this), "drawPoints", function (_ref2) {
      var points = _ref2.points,
          brushColor = _ref2.brushColor,
          brushRadius = _ref2.brushRadius;
      _this.ctx.temp.lineJoin = "round";
      _this.ctx.temp.lineCap = "round";
      _this.ctx.temp.strokeStyle = brushColor;

      _this.clearWindow(_this.ctx.temp);

      _this.ctx.temp.lineWidth = brushRadius * 2;
      var p1 = points[0];
      var p2 = points[1];

      _this.ctx.temp.moveTo(p2.x, p2.y);

      _this.ctx.temp.beginPath();

      for (var i = 1, len = points.length; i < len; i++) {
        // we pick the point between pi+1 & pi+2 as the
        // end point and p1 as our control point
        var midPoint = midPointBtw(p1, p2);

        _this.ctx.temp.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);

        p1 = points[i];
        p2 = points[i + 1];
      } // Draw last line as a straight line while
      // we wait for the next point to be able to calculate
      // the bezier control point


      _this.ctx.temp.lineTo(p1.x, p1.y);

      _this.ctx.temp.stroke();
    });

    src_defineProperty(_assertThisInitialized(_this), "saveLine", function (_temp) {
      var _ref3 = _temp === void 0 ? {} : _temp,
          brushColor = _ref3.brushColor,
          brushRadius = _ref3.brushRadius;

      if (_this.points.length < 2) return; // Save as new line

      _this.lines.push({
        points: [].concat(_this.points),
        brushColor: brushColor || _this.props.brushColor,
        brushRadius: brushRadius || _this.props.brushRadius
      }); // Reset points array


      _this.points.length = 0; // Copy the line to the drawing canvas

      _this.inClientSpace([_this.ctx.drawing, _this.ctx.temp], function () {
        _this.ctx.drawing.drawImage(_this.canvas.temp, 0, 0, _this.canvas.drawing.width, _this.canvas.drawing.height);
      }); // Clear the temporary line-drawing canvas


      _this.clearWindow(_this.ctx.temp);

      _this.triggerOnChange();
    });

    src_defineProperty(_assertThisInitialized(_this), "triggerOnChange", function () {
      _this.props.onChange && _this.props.onChange(_assertThisInitialized(_this));
    });

    src_defineProperty(_assertThisInitialized(_this), "clearWindow", function (ctx) {
      _this.inClientSpace([ctx], function () {
        return ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      });
    });

    src_defineProperty(_assertThisInitialized(_this), "clearExceptErasedLines", function () {
      _this.lines = [];
      _this.valuesChanged = true;

      _this.clearWindow(_this.ctx.drawing);

      _this.clearWindow(_this.ctx.temp);
    });

    src_defineProperty(_assertThisInitialized(_this), "loop", function (_temp2) {
      var _ref4 = _temp2 === void 0 ? {} : _temp2,
          _ref4$once = _ref4.once,
          once = _ref4$once === void 0 ? false : _ref4$once;

      if (_this.mouseHasMoved || _this.valuesChanged) {
        var pointer = _this.lazy.getPointerCoordinates();

        var brush = _this.lazy.getBrushCoordinates();

        _this.drawInterface(_this.ctx["interface"], pointer, brush);

        _this.mouseHasMoved = false;
        _this.valuesChanged = false;
      }

      if (!once) {
        window.requestAnimationFrame(function () {
          _this.loop();
        });
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "inClientSpace", function (ctxs, action) {
      ctxs.forEach(function (ctx) {
        ctx.save();
        ctx.setTransform(IDENTITY.a, IDENTITY.b, IDENTITY.c, IDENTITY.d, IDENTITY.e, IDENTITY.f);
      });

      try {
        action();
      } finally {
        ctxs.forEach(function (ctx) {
          return ctx.restore();
        });
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "drawImage", function () {
      if (!_this.props.imgSrc) return; // Load the image

      _this.image = new Image(); // Prevent SecurityError "Tainted canvases may not be exported." #70

      _this.image.crossOrigin = "anonymous"; // Draw the image once loaded

      _this.image.onload = _this.redrawImage;
      _this.image.src = _this.props.imgSrc;
    });

    src_defineProperty(_assertThisInitialized(_this), "drawGrid", function (ctx) {
      if (_this.props.hideGrid) return;

      _this.clearWindow(ctx);

      var gridSize = 25;
      var _this$coordSystem$can = _this.coordSystem.canvasBounds,
          viewMin = _this$coordSystem$can.viewMin,
          viewMax = _this$coordSystem$can.viewMax;
      var minx = Math.floor(viewMin.x / gridSize - 1) * gridSize;
      var miny = Math.floor(viewMin.y / gridSize - 1) * gridSize;
      var maxx = viewMax.x + gridSize;
      var maxy = viewMax.y + gridSize;
      ctx.beginPath();
      ctx.setLineDash([5, 1]);
      ctx.setLineDash([]);
      ctx.strokeStyle = _this.props.gridColor;
      ctx.lineWidth = _this.props.gridLineWidth;

      if (!_this.props.hideGridX) {
        var countX = minx;
        var gridSizeX = _this.props.gridSizeX;

        while (countX < maxx) {
          countX += gridSizeX;
          ctx.moveTo(countX, miny);
          ctx.lineTo(countX, maxy);
        }

        ctx.stroke();
      }

      if (!_this.props.hideGridY) {
        var countY = miny;
        var gridSizeY = _this.props.gridSizeY;

        while (countY < maxy) {
          countY += gridSizeY;
          ctx.moveTo(minx, countY);
          ctx.lineTo(maxx, countY);
        }

        ctx.stroke();
      }
    });

    src_defineProperty(_assertThisInitialized(_this), "drawInterface", function (ctx, pointer, brush) {
      if (_this.props.hideInterface) return;

      _this.clearWindow(ctx); // Draw brush preview


      ctx.beginPath();
      ctx.fillStyle = _this.props.brushColor;
      ctx.arc(brush.x, brush.y, _this.props.brushRadius, 0, Math.PI * 2, true);
      ctx.fill(); // Draw mouse point (the one directly at the cursor)

      ctx.beginPath();
      ctx.fillStyle = _this.props.catenaryColor;
      ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2, true);
      ctx.fill(); // Draw catenary

      if (_this.lazy.isEnabled()) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.setLineDash([2, 4]);
        ctx.strokeStyle = _this.props.catenaryColor;

        _this.catenary.drawToCanvas(_this.ctx["interface"], brush, pointer, _this.chainLength);

        ctx.stroke();
      } // Draw brush point (the one in the middle of the brush preview)


      ctx.beginPath();
      ctx.fillStyle = _this.props.catenaryColor;
      ctx.arc(brush.x, brush.y, 2, 0, Math.PI * 2, true);
      ctx.fill();
    });

    _this.canvas = {};
    _this.ctx = {};
    _this.catenary = new catenary_curve_lib["Catenary"]();
    _this.points = [];
    _this.lines = [];
    _this.erasedLines = [];
    _this.mouseHasMoved = true;
    _this.valuesChanged = true;
    _this.isDrawing = false;
    _this.isPressing = false;
    _this.deferRedrawOnViewChange = false;
    _this.interactionSM = new DefaultState();
    _this.coordSystem = new CoordinateSystem({
      scaleExtents: props.zoomExtents,
      documentSize: {
        width: props.canvasWidth,
        height: props.canvasHeight
      }
    });

    _this.coordSystem.attachViewChangeListener(_this.applyView.bind(_assertThisInitialized(_this)));

    return _this;
  }

  var _proto = CanvasDraw.prototype;

  ///// private API ////////////////////////////////////////////////////////////
  ///// React Lifecycle
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.lazy = new lib["LazyBrush"]({
      radius: this.props.lazyRadius * window.devicePixelRatio,
      enabled: true,
      initialPoint: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    });
    this.chainLength = this.props.lazyRadius * window.devicePixelRatio;
    this.canvasObserver = new ResizeObserver_es["a" /* default */](function (entries, observer) {
      return _this2.handleCanvasResize(entries, observer);
    });
    this.canvasObserver.observe(this.canvasContainer);
    this.drawImage();
    this.loop();
    window.setTimeout(function () {
      var initX = window.innerWidth / 2;
      var initY = window.innerHeight / 2;

      _this2.lazy.update({
        x: initX - _this2.chainLength / 4,
        y: initY
      }, {
        both: true
      });

      _this2.lazy.update({
        x: initX + _this2.chainLength / 4,
        y: initY
      }, {
        both: false
      });

      _this2.mouseHasMoved = true;
      _this2.valuesChanged = true;

      _this2.clearExceptErasedLines(); // Load saveData from prop if it exists


      if (_this2.props.saveData) {
        _this2.loadSaveData(_this2.props.saveData);
      }
    }, 100); // Attach our wheel event listener here instead of in the render so that we can specify a non-passive listener.
    // This is necessary to prevent the default event action on chrome.
    // https://github.com/facebook/react/issues/14856

    this.canvas["interface"] && this.canvas["interface"].addEventListener("wheel", this.handleWheel, makePassiveEventOption());
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.lazyRadius !== this.props.lazyRadius) {
      // Set new lazyRadius values
      this.chainLength = this.props.lazyRadius * window.devicePixelRatio;
      this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio);
    }

    if (prevProps.saveData !== this.props.saveData) {
      this.loadSaveData(this.props.saveData);
    }

    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      // Signal this.loop function that values changed
      this.valuesChanged = true;
    }

    this.coordSystem.scaleExtents = this.props.zoomExtents;

    if (!this.props.enablePanAndZoom) {
      this.coordSystem.resetView();
    }

    if (prevProps.imgSrc !== this.props.imgSrc) {
      this.drawImage();
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", {
      className: this.props.className,
      style: src_extends({
        display: "block",
        background: this.props.backgroundColor,
        touchAction: "none",
        width: this.props.canvasWidth,
        height: this.props.canvasHeight
      }, this.props.style),
      ref: function ref(container) {
        if (container) {
          _this3.canvasContainer = container;
        }
      }
    }, canvasTypes.map(function (name) {
      var isInterface = name === "interface";
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("canvas", {
        key: name,
        ref: function ref(canvas) {
          if (canvas) {
            _this3.canvas[name] = canvas;
            _this3.ctx[name] = canvas.getContext("2d");

            if (isInterface) {
              _this3.coordSystem.canvas = canvas;
            }
          }
        },
        style: src_extends({}, canvasStyle),
        onMouseDown: isInterface ? _this3.handleDrawStart : undefined,
        onMouseMove: isInterface ? _this3.handleDrawMove : undefined,
        onMouseUp: isInterface ? _this3.handleDrawEnd : undefined,
        onMouseOut: isInterface ? _this3.handleDrawEnd : undefined,
        onTouchStart: isInterface ? _this3.handleDrawStart : undefined,
        onTouchMove: isInterface ? _this3.handleDrawMove : undefined,
        onTouchEnd: isInterface ? _this3.handleDrawEnd : undefined,
        onTouchCancel: isInterface ? _this3.handleDrawEnd : undefined
      });
    }));
  } ///// Event Handlers
  ;

  return CanvasDraw;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]);

src_defineProperty(src_CanvasDraw, "propTypes", {
  onChange: prop_types_default.a.func,
  loadTimeOffset: prop_types_default.a.number,
  lazyRadius: prop_types_default.a.number,
  brushRadius: prop_types_default.a.number,
  brushColor: prop_types_default.a.string,
  catenaryColor: prop_types_default.a.string,
  gridColor: prop_types_default.a.string,
  backgroundColor: prop_types_default.a.string,
  hideGrid: prop_types_default.a.bool,
  canvasWidth: dimensionsPropTypes,
  canvasHeight: dimensionsPropTypes,
  disabled: prop_types_default.a.bool,
  imgSrc: prop_types_default.a.string,
  saveData: prop_types_default.a.string,
  immediateLoading: prop_types_default.a.bool,
  hideInterface: prop_types_default.a.bool,
  gridSizeX: prop_types_default.a.number,
  gridSizeY: prop_types_default.a.number,
  gridLineWidth: prop_types_default.a.number,
  hideGridX: prop_types_default.a.bool,
  hideGridY: prop_types_default.a.bool,
  enablePanAndZoom: prop_types_default.a.bool,
  mouseZoomFactor: prop_types_default.a.number,
  zoomExtents: boundsProp,
  clampLinesToDocument: prop_types_default.a.bool
});

src_defineProperty(src_CanvasDraw, "defaultProps", {
  onChange: null,
  loadTimeOffset: 5,
  lazyRadius: 12,
  brushRadius: 10,
  brushColor: "#444",
  catenaryColor: "#0a0302",
  gridColor: "rgba(150,150,150,0.17)",
  backgroundColor: "#FFF",
  hideGrid: false,
  canvasWidth: 400,
  canvasHeight: 400,
  disabled: false,
  imgSrc: "",
  saveData: "",
  immediateLoading: false,
  hideInterface: false,
  gridSizeX: 25,
  gridSizeY: 25,
  gridLineWidth: 0.5,
  hideGridX: false,
  hideGridY: false,
  enablePanAndZoom: false,
  mouseZoomFactor: 0.01,
  zoomExtents: {
    min: 0.33,
    max: 3
  },
  clampLinesToDocument: false
});



/***/ })
/******/ ])["default"];
});