"use strict";
(self["webpackChunkfree_animate"] = self["webpackChunkfree_animate"] || []).push([["app"],{

/***/ 375:
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 893);


var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "app",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
      children: "hello world"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 521:
/*!********************************************!*\
  !*** ./src/client/error/ErrorBoundary.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 136);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 963);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 893);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ErrorBoundary = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        hasError: true,
        error: error
      });
      return {
        hasError: true,
        error: error
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          error = _this$state.error;
      var children = this.props.children;

      if (hasError && "development" === 'production') {}

      if (hasError && "development" === ('development' || 0)) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
            children: "!!Error!! Something went wrong. This is fallback UI"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: error.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: error.message
          })]
        });
      }

      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ 100:
/*!*******************************************!*\
  !*** ./src/client/error/ErrorContext.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorContext": function() { return /* binding */ ErrorContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);

var ErrorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  hasError: false,
  error: null,
  setHasErrorTrue: function setHasErrorTrue() {
    return {};
  },
  setHasErrorFalse: function setHasErrorFalse() {
    return {};
  }
});

/***/ }),

/***/ 700:
/*!********************************************!*\
  !*** ./src/client/error/ErrorProvider.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ 697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorContext */ 100);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 893);






var ErrorProvider = function ErrorProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var setHasErrorTrue = function setHasErrorTrue(_error) {
    setError(_error);
    setHasError(true);
  };

  var setHasErrorFalse = function setHasErrorFalse() {
    setError(null);
    setHasError(false);
  };

  var errorValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      hasError: hasError,
      error: error,
      setHasErrorTrue: setHasErrorTrue,
      setHasErrorFalse: setHasErrorFalse
    };
  }, [hasError, error]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ErrorContext__WEBPACK_IMPORTED_MODULE_2__.ErrorContext.Provider, {
    value: errorValue,
    children: children
  });
};

ErrorProvider.defaultProps = {
  children: {}
};
ErrorProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorProvider);

/***/ }),

/***/ 209:
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 935);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ 711);
/* harmony import */ var _error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/ErrorBoundary */ 521);
/* harmony import */ var _error_ErrorProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/ErrorProvider */ 700);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ 375);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/index.scss */ 312);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 893);








react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_error_ErrorProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    })
  })
}), document.getElementById('root'));

/***/ }),

/***/ 312:
/*!************************************!*\
  !*** ./src/client/scss/index.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vender"], function() { return __webpack_exec__(209); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBRCxDQUFSO0FBQ0FELElBQUFBLFdBQVcsQ0FBQyxLQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1HLFVBQVUsR0FBR04sOENBQU8sQ0FDeEI7QUFBQSxXQUFPO0FBQ0xsQixNQUFBQSxRQUFRLEVBQVJBLFFBREs7QUFFTEMsTUFBQUEsS0FBSyxFQUFMQSxLQUZLO0FBR0xjLE1BQUFBLGVBQWUsRUFBZkEsZUFISztBQUlMQyxNQUFBQSxnQkFBZ0IsRUFBaEJBO0FBSkssS0FBUDtBQUFBLEdBRHdCLEVBT3hCLENBQUNoQixRQUFELEVBQVdDLEtBQVgsQ0FQd0IsQ0FBMUI7QUFVQSxzQkFDRSx1REFBQyxnRUFBRDtBQUF1QixTQUFLLEVBQUV1QixVQUE5QjtBQUFBLGNBQTJDckI7QUFBM0MsSUFERjtBQUdELENBM0JEOztBQTZCQWlCLGFBQWEsQ0FBQ0ssWUFBZCxHQUE2QjtBQUMzQnRCLEVBQUFBLFFBQVEsRUFBRTtBQURpQixDQUE3QjtBQUlBaUIsYUFBYSxDQUFDTSxTQUFkLEdBQTBCO0FBQ3hCdkIsRUFBQUEsUUFBUSxFQUFFZ0Isd0RBQWNRO0FBREEsQ0FBMUI7QUFJQSwrREFBZVAsYUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVEsNkNBQUEsZUFDRSx1REFBQyw0REFBRDtBQUFBLHlCQUNFLHVEQUFDLDJEQUFEO0FBQUEsMkJBQ0UsdURBQUMsNERBQUQ7QUFBQSw2QkFDRSx1REFBQyw0Q0FBRDtBQURGO0FBREY7QUFERixFQURGLEVBUUVHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQVJGOzs7Ozs7Ozs7OztBQ1JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJlZS1hbmltYXRlLy4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL2ZyZWUtYW5pbWF0ZS8uL3NyYy9jbGllbnQvZXJyb3IvRXJyb3JCb3VuZGFyeS50c3giLCJ3ZWJwYWNrOi8vZnJlZS1hbmltYXRlLy4vc3JjL2NsaWVudC9lcnJvci9FcnJvckNvbnRleHQudHN4Iiwid2VicGFjazovL2ZyZWUtYW5pbWF0ZS8uL3NyYy9jbGllbnQvZXJyb3IvRXJyb3JQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vZnJlZS1hbmltYXRlLy4vc3JjL2NsaWVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnJlZS1hbmltYXRlLy4vc3JjL2NsaWVudC9zY3NzL2luZGV4LnNjc3M/ZTdiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHA6IFJlYWN0LlZGQyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgPGgxPmhlbGxvIHdvcmxkPC9oMT5cclxuICA8L2Rpdj5cclxuKVxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVcclxufVxyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBoYXNFcnJvcjogYm9vbGVhblxyXG4gIGVycm9yOiBFcnJvciB8IG51bGxcclxufVxyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaGFzRXJyb3I6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogRXJyb3IpOiBTdGF0ZSB7XHJcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUkuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoYXNFcnJvcjogdHJ1ZSxcclxuICAgICAgZXJyb3JcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvcik6IFN0YXRlIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBoYXNFcnJvcjogdHJ1ZSxcclxuICAgICAgZXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGFzRXJyb3I6IHRydWUsXHJcbiAgICAgIGVycm9yXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGhhc0Vycm9yLCBlcnJvciB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIGlmIChoYXNFcnJvciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNFcnJvciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gKCdkZXZlbG9wbWVudCcgfHwgdW5kZWZpbmVkKSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+ISFFcnJvciEhIFNvbWV0aGluZyB3ZW50IHdyb25nLiBUaGlzIGlzIGZhbGxiYWNrIFVJPC9oMT5cclxuICAgICAgICAgIDxoMz57ZXJyb3IubmFtZX08L2gzPlxyXG4gICAgICAgICAgPGgzPntlcnJvci5tZXNzYWdlfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hpbGRyZW5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnlcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IHR5cGUgZXJyb3JDb250ZXh0ID0ge1xyXG4gIGhhc0Vycm9yOiBib29sZWFuXHJcbiAgZXJyb3I6IEVycm9yIHwgbnVsbFxyXG4gIHNldEhhc0Vycm9yVHJ1ZTogKGVycm9yPzogRXJyb3IpID0+IHZvaWRcclxuICBzZXRIYXNFcnJvckZhbHNlOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PGVycm9yQ29udGV4dD4oe1xyXG4gIGhhc0Vycm9yOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBzZXRIYXNFcnJvclRydWU6ICgpID0+ICh7fSksXHJcbiAgc2V0SGFzRXJyb3JGYWxzZTogKCkgPT4gKHt9KVxyXG59KVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IEVycm9yQ29udGV4dCwgZXJyb3JDb250ZXh0IH0gZnJvbSAnLi9FcnJvckNvbnRleHQnXHJcblxyXG5jb25zdCBFcnJvclByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBzZXRIYXNFcnJvclRydWUgPSAoX2Vycm9yPzogRXJyb3IpID0+IHtcclxuICAgIHNldEVycm9yKF9lcnJvcilcclxuICAgIHNldEhhc0Vycm9yKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRIYXNFcnJvckZhbHNlID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3IobnVsbClcclxuICAgIHNldEhhc0Vycm9yKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXJyb3JWYWx1ZSA9IHVzZU1lbW88ZXJyb3JDb250ZXh0PihcclxuICAgICgpID0+ICh7XHJcbiAgICAgIGhhc0Vycm9yLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgc2V0SGFzRXJyb3JUcnVlLFxyXG4gICAgICBzZXRIYXNFcnJvckZhbHNlXHJcbiAgICB9KSxcclxuICAgIFtoYXNFcnJvciwgZXJyb3JdXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEVycm9yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZXJyb3JWYWx1ZX0+e2NoaWxkcmVufTwvRXJyb3JDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuRXJyb3JQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IHt9XHJcbn1cclxuXHJcbkVycm9yUHJvdmlkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclByb3ZpZGVyXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9lcnJvci9FcnJvckJvdW5kYXJ5J1xyXG5pbXBvcnQgRXJyb3JQcm92aWRlciBmcm9tICcuL2Vycm9yL0Vycm9yUHJvdmlkZXInXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnXHJcblxyXG5SZWFjdERvbS5yZW5kZXIoXHJcbiAgPEVycm9yUHJvdmlkZXI+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPEVycm9yQm91bmRhcnk+XHJcbiAgICAgICAgPEFwcCAvPlxyXG4gICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgPC9FcnJvclByb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbilcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImVycm9yIiwic2V0U3RhdGUiLCJjaGlsZHJlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidW5kZWZpbmVkIiwibmFtZSIsIm1lc3NhZ2UiLCJjcmVhdGVDb250ZXh0IiwiRXJyb3JDb250ZXh0Iiwic2V0SGFzRXJyb3JUcnVlIiwic2V0SGFzRXJyb3JGYWxzZSIsInVzZVN0YXRlIiwidXNlTWVtbyIsIlByb3BUeXBlcyIsIkVycm9yUHJvdmlkZXIiLCJzZXRIYXNFcnJvciIsInNldEVycm9yIiwiX2Vycm9yIiwiZXJyb3JWYWx1ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm5vZGUiLCJSZWFjdERvbSIsIkJyb3dzZXJSb3V0ZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==