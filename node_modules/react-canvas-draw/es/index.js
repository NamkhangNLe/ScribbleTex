function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { LazyBrush } from "lazy-brush";
import { Catenary } from "catenary-curve";
import ResizeObserver from "resize-observer-polyfill";
import CoordinateSystem, { IDENTITY } from "./coordinateSystem";
import drawImage from "./drawImage";
import { DefaultState } from "./interactionStateMachine";
import makePassiveEventOption from "./makePassiveEventOption";

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
var dimensionsPropTypes = process.env.NODE_ENV !== "production" ? PropTypes.oneOfType([PropTypes.number, PropTypes.string]) : {};
var boundsProp = process.env.NODE_ENV !== "production" ? PropTypes.shape({
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}) : {};

var CanvasDraw = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(CanvasDraw, _PureComponent);

  ///// public API /////////////////////////////////////////////////////////////
  function CanvasDraw(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "undo", function () {
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

    _defineProperty(_assertThisInitialized(_this), "eraseAll", function () {
      _this.erasedLines.push([].concat(_this.lines));

      _this.clearExceptErasedLines();

      _this.triggerOnChange();
    });

    _defineProperty(_assertThisInitialized(_this), "clear", function () {
      _this.erasedLines = [];

      _this.clearExceptErasedLines();

      _this.resetView();
    });

    _defineProperty(_assertThisInitialized(_this), "resetView", function () {
      return _this.coordSystem.resetView();
    });

    _defineProperty(_assertThisInitialized(_this), "setView", function (view) {
      return _this.coordSystem.setView(view);
    });

    _defineProperty(_assertThisInitialized(_this), "getSaveData", function () {
      // Construct and return the stringified saveData object
      return JSON.stringify({
        lines: _this.lines,
        width: _this.props.canvasWidth,
        height: _this.props.canvasHeight
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDataURL", function (fileType, useBgImage, backgroundColour) {
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

    _defineProperty(_assertThisInitialized(_this), "loadSaveData", function (saveData, immediate) {
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
            return _extends({}, line, {
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

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.canvasObserver.unobserve(_this.canvasContainer);

      _this.canvas["interface"] && _this.canvas["interface"].removeEventListener("wheel", _this.handleWheel);
    });

    _defineProperty(_assertThisInitialized(_this), "handleWheel", function (e) {
      _this.interactionSM = _this.interactionSM.handleMouseWheel(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrawStart", function (e) {
      _this.interactionSM = _this.interactionSM.handleDrawStart(e, _assertThisInitialized(_this));
      _this.mouseHasMoved = true;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrawMove", function (e) {
      _this.interactionSM = _this.interactionSM.handleDrawMove(e, _assertThisInitialized(_this));
      _this.mouseHasMoved = true;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrawEnd", function (e) {
      _this.interactionSM = _this.interactionSM.handleDrawEnd(e, _assertThisInitialized(_this));
      _this.mouseHasMoved = true;
    });

    _defineProperty(_assertThisInitialized(_this), "applyView", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleCanvasResize", function (entries) {
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

    _defineProperty(_assertThisInitialized(_this), "clampPointToDocument", function (point) {
      if (_this.props.clampLinesToDocument) {
        return {
          x: Math.max(Math.min(point.x, _this.props.canvasWidth), 0),
          y: Math.max(Math.min(point.y, _this.props.canvasHeight), 0)
        };
      } else {
        return point;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "redrawImage", function () {
      _this.image && _this.image.complete && drawImage({
        ctx: _this.ctx.grid,
        img: _this.image
      });
    });

    _defineProperty(_assertThisInitialized(_this), "simulateDrawingLines", function (_ref) {
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

    _defineProperty(_assertThisInitialized(_this), "setCanvasSize", function (canvas, width, height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width;
      canvas.style.height = height;
    });

    _defineProperty(_assertThisInitialized(_this), "drawPoints", function (_ref2) {
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

    _defineProperty(_assertThisInitialized(_this), "saveLine", function (_temp) {
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

    _defineProperty(_assertThisInitialized(_this), "triggerOnChange", function () {
      _this.props.onChange && _this.props.onChange(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "clearWindow", function (ctx) {
      _this.inClientSpace([ctx], function () {
        return ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearExceptErasedLines", function () {
      _this.lines = [];
      _this.valuesChanged = true;

      _this.clearWindow(_this.ctx.drawing);

      _this.clearWindow(_this.ctx.temp);
    });

    _defineProperty(_assertThisInitialized(_this), "loop", function (_temp2) {
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

    _defineProperty(_assertThisInitialized(_this), "inClientSpace", function (ctxs, action) {
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

    _defineProperty(_assertThisInitialized(_this), "drawImage", function () {
      if (!_this.props.imgSrc) return; // Load the image

      _this.image = new Image(); // Prevent SecurityError "Tainted canvases may not be exported." #70

      _this.image.crossOrigin = "anonymous"; // Draw the image once loaded

      _this.image.onload = _this.redrawImage;
      _this.image.src = _this.props.imgSrc;
    });

    _defineProperty(_assertThisInitialized(_this), "drawGrid", function (ctx) {
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

    _defineProperty(_assertThisInitialized(_this), "drawInterface", function (ctx, pointer, brush) {
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
    _this.catenary = new Catenary();
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

    this.lazy = new LazyBrush({
      radius: this.props.lazyRadius * window.devicePixelRatio,
      enabled: true,
      initialPoint: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    });
    this.chainLength = this.props.lazyRadius * window.devicePixelRatio;
    this.canvasObserver = new ResizeObserver(function (entries, observer) {
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

    return /*#__PURE__*/React.createElement("div", {
      className: this.props.className,
      style: _extends({
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
      return /*#__PURE__*/React.createElement("canvas", {
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
        style: _extends({}, canvasStyle),
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
}(PureComponent);

_defineProperty(CanvasDraw, "defaultProps", {
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

export { CanvasDraw as default };
CanvasDraw.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func,
  loadTimeOffset: PropTypes.number,
  lazyRadius: PropTypes.number,
  brushRadius: PropTypes.number,
  brushColor: PropTypes.string,
  catenaryColor: PropTypes.string,
  gridColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hideGrid: PropTypes.bool,
  canvasWidth: dimensionsPropTypes,
  canvasHeight: dimensionsPropTypes,
  disabled: PropTypes.bool,
  imgSrc: PropTypes.string,
  saveData: PropTypes.string,
  immediateLoading: PropTypes.bool,
  hideInterface: PropTypes.bool,
  gridSizeX: PropTypes.number,
  gridSizeY: PropTypes.number,
  gridLineWidth: PropTypes.number,
  hideGridX: PropTypes.bool,
  hideGridY: PropTypes.bool,
  enablePanAndZoom: PropTypes.bool,
  mouseZoomFactor: PropTypes.number,
  zoomExtents: boundsProp,
  clampLinesToDocument: PropTypes.bool
} : {};