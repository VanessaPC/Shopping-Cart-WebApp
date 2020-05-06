module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ "./styles/global.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], null), __jsx(Component, pageProps));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/colors.tsx":
/*!***************************!*\
  !*** ./styles/colors.tsx ***!
  \***************************/
/*! exports provided: GREEN_400, GREEN_600, GREEN_700, YELLOW_200, YELLOW_300, YELLOW_400, YELLOW_600, ORANGE_400, ORANGE_600, GREY_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEN_400", function() { return GREEN_400; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEN_600", function() { return GREEN_600; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEN_700", function() { return GREEN_700; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YELLOW_200", function() { return YELLOW_200; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YELLOW_300", function() { return YELLOW_300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YELLOW_400", function() { return YELLOW_400; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YELLOW_600", function() { return YELLOW_600; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_400", function() { return ORANGE_400; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORANGE_600", function() { return ORANGE_600; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREY_TEXT", function() { return GREY_TEXT; });
var GREEN_400 = '#89E6C2';
var GREEN_600 = '#56B38F';
var GREEN_700 = '#41866B';
var YELLOW_200 = '#FFEDBD';
var YELLOW_300 = '#FFE39C';
var YELLOW_400 = '#FFDA7B';
var YELLOW_600 = '#CCA748';
var ORANGE_400 = '#EB653D';
var ORANGE_600 = '#B8320A';
var GREY_TEXT = '#222222';

/***/ }),

/***/ "./styles/global.tsx":
/*!***************************!*\
  !*** ./styles/global.tsx ***!
  \***************************/
/*! exports provided: GlobalStyle, FlexCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexCol", function() { return FlexCol; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography */ "./styles/typography.tsx");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors */ "./styles/colors.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n\n  * {\n    font-style: normal;\n    font-family: 'Roboto', sans-serif;\n  }\n  body {\n    margin: 0;\n    font-size: 1rem;\n    line-height: 1.25rem;\n    font-weight: 200;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: 4rem minmax(20rem,auto);\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n  }\n  strong, button {\n    font-family: 'Roboto', sans-serif;\n  }\n  a {\n    color: ", ";\n    text-decoration: none;\n    transition: all .3s ease-out;\n  }\n  a:hover {\n    color: ", ";\n  }\n  button {\n    border: 0;\n    border-radius: 6.25rem;\n    cursor: pointer;\n  }\n  .header{\n    grid-area: header;\n    display: flex;\n    align-items: center;\n    margin: 20px 40px;\n  }\n  .header figure{\n    flex: 1;\n  }\n\n  main{\n    grid-area: main;\n    display: grid;\n  }\n  main section {\n    display: flex;\n    justify-content: center;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), _typography__WEBPACK_IMPORTED_MODULE_1__["typography"], _colors__WEBPACK_IMPORTED_MODULE_2__["ORANGE_400"], _colors__WEBPACK_IMPORTED_MODULE_2__["ORANGE_600"]);
var FlexCol = "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n";

/***/ }),

/***/ "./styles/typography.tsx":
/*!*******************************!*\
  !*** ./styles/typography.tsx ***!
  \*******************************/
/*! exports provided: ROBOTO, typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROBOTO", function() { return ROBOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./styles/colors.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    text-align: left;\n  }\n\n  body {\n    font-family: '", "';\n    font-size: 1rem;\n    line-height: 1.7rem;\n    letter-spacing: 0;\n    font-weight: normal;\n    text-align: left;\n    color: ", ";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1, h2, h3, h4, h5, h6, p {\n    color: ", ";\n    @-moz-document url-prefix() {\n      font-weight: lighter;\n    }\n  }\n\n  h1 {\n    font-family: '", "';\n    font-size: 1.75rem;\n    line-height: 2.25rem;\n  }\n\n  h2 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n    letter-spacing: -0.01em;\n  }\n\n\n  h3 {\n    font-size: 1.25rem;\n    line-height: 1.5rem;\n    letter-spacing: 0.01em;\n  }\n\n  p {\n    letter-spacing: 0.02rem;\n  }\n\n  h4, span, button {\n    font-size: 0.8125rem;\n    line-height: 0.7rem;\n    letter-spacing: 0.02rem;\n  }\n\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ROBOTO = 'Roboto';
var typography = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), ROBOTO, _colors__WEBPACK_IMPORTED_MODULE_1__["GREY_TEXT"], _colors__WEBPACK_IMPORTED_MODULE_1__["GREY_TEXT"], ROBOTO);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map