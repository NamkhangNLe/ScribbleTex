"use strict";

exports.__esModule = true;
exports.clientPointFromEvent = clientPointFromEvent;
exports.viewPointFromEvent = viewPointFromEvent;
exports.SyntheticEvent = exports.DrawingState = exports.TouchScaleState = exports.TouchPanState = exports.ScaleOrPanState = exports.WaitForPinchState = exports.PanState = exports.DisabledState = exports.DefaultState = void 0;

var _this = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOUCH_SLOP = 10;
var PINCH_TIMEOUT_MS = 250;

var SUPPRESS_SCROLL = function SUPPRESS_SCROLL(e) {
  // No zooming while drawing, but we'll cancel the scroll event.
  e.preventDefault();
  return _this;
};
/**
 * The default state for the interaction state machine. Supports zoom and
 * initiating pan and drawing actions.
 */


var DefaultState = function DefaultState() {
  var _this2 = this;

  _defineProperty(this, "handleMouseWheel", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return new DisabledState();
    } else if (e.ctrlKey && canvasDraw.props.enablePanAndZoom) {
      return new PanState().handleDrawStart(e, canvasDraw);
    } else {
      return new WaitForPinchState().handleDrawStart(e, canvasDraw);
    }
  });

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    return canvasDraw.props.disabled ? new DisabledState() : _this2;
  });
};

exports.DefaultState = DefaultState;
;
/**
 * This state is used as long as the disabled prop is active. It ignores all
 * events and doesn't prevent default actions. The disabled state can only be
 * triggered from the default state (i.e., while no action is actively being
 * performed).
 */

var DisabledState = function DisabledState() {
  var _this3 = this;

  _defineProperty(this, "handleMouseWheel", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleMouseWheel(e, canvasDraw);
    }
  });

  _defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleDrawStart(e, canvasDraw);
    }
  });

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
    if (canvasDraw.props.disabled) {
      return _this3;
    } else {
      return new DefaultState().handleDrawMove(e, canvasDraw);
    }
  });

  _defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
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


exports.DisabledState = DisabledState;

var PanState = function PanState() {
  var _this4 = this;

  _defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  _defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
    e.preventDefault();
    _this4.dragStart = clientPointFromEvent(e);
    _this4.panStart = {
      x: canvasDraw.coordSystem.x,
      y: canvasDraw.coordSystem.y
    };
    return _this4;
  });

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });
};
/**
 * This state is active when the user has initiated the drawing action but has
 * not yet created any lines. We use this state to try and detect a second touch
 * event to initiate a pinch-zoom action. We'll give up on that if enough time
 * or movement happens without a second touch.
 */


exports.PanState = PanState;

var WaitForPinchState = function WaitForPinchState() {
  var _this5 = this;

  _defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  _defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    // The user stopped drawing before we decided what to do. Just treat this as
    // if they were drawing all along.
    return _this5.issueDeferredPoints(canvasDraw).handleDrawEnd(e, canvasDraw);
  });

  _defineProperty(this, "issueDeferredPoints", function (canvasDraw) {
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


exports.WaitForPinchState = WaitForPinchState;

var ScaleOrPanState = function ScaleOrPanState() {
  var _this6 = this;

  _defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  _defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });

  _defineProperty(this, "getTouchMetrics", function (e) {
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


exports.ScaleOrPanState = ScaleOrPanState;

var TouchPanState = function TouchPanState(scaleOrPanState) {
  var _this7 = this;

  _defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  _defineProperty(this, "handleDrawStart", function () {
    return _this7;
  });

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });

  this.scaleOrPanState = scaleOrPanState;
};
/**
 * The user is actively using touch gestures to scale the drawing.
 */


exports.TouchPanState = TouchPanState;

var TouchScaleState = function TouchScaleState(scaleOrPanState) {
  var _this8 = this;

  _defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  _defineProperty(this, "handleDrawStart", function () {
    return _this8;
  });

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function () {
    return new DefaultState();
  });

  this.scaleOrPanState = scaleOrPanState;
};
/**
 * This state is active when the user is drawing.
 */


exports.TouchScaleState = TouchScaleState;

var DrawingState = function DrawingState() {
  var _this9 = this;

  _defineProperty(this, "handleMouseWheel", SUPPRESS_SCROLL.bind(this));

  _defineProperty(this, "handleDrawStart", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawMove", function (e, canvasDraw) {
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

  _defineProperty(this, "handleDrawEnd", function (e, canvasDraw) {
    e.preventDefault(); // Draw to this end pos

    _this9.handleDrawMove(e, canvasDraw);

    canvasDraw.saveLine();
    return new DefaultState();
  });

  this.isDrawing = false;
};

exports.DrawingState = DrawingState;

var SyntheticEvent = function SyntheticEvent(_ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;

  _defineProperty(this, "preventDefault", function () {});

  this.clientX = clientX;
  this.clientY = clientY;
  this.touches = [{
    clientX: clientX,
    clientY: clientY
  }];
};

exports.SyntheticEvent = SyntheticEvent;

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