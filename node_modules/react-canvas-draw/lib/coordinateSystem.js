"use strict";

exports.__esModule = true;
exports["default"] = exports.IDENTITY = void 0;

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
exports.IDENTITY = IDENTITY;

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

exports["default"] = CoordinateSystem;