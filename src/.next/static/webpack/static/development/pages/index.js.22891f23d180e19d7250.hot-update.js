webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-hooks */ "../node_modules/axios-hooks/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config/index.tsx");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ShopPage = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../pages/shop */ "./pages/shop/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../pages/shop */ "./pages/shop/index.tsx")];
    },
    modules: ['../pages/shop']
  }
});
var USER_STATUS = {
  LOGGED_IN: 'logged_in',
  NULL: 'null'
};

var LandingPage = function LandingPage() {
  var _useAxios = Object(axios_hooks__WEBPACK_IMPORTED_MODULE_2__["default"])(_config__WEBPACK_IMPORTED_MODULE_3__["default"].getUser),
      _useAxios2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAxios, 2),
      _useAxios2$ = _useAxios2[0],
      data = _useAxios2$.data,
      loading = _useAxios2$.loading,
      error = _useAxios2$.error,
      refetch = _useAxios2[1];

  console.log('USER: ', data);

  if (loading) {
    __jsx("p", null, "loading");
  }

  if (error) {
    __jsx("p", null, "error");
  }

  switch (data.status) {
    case USER_STATUS.LOGGED_IN:
      return ShopPage;

    default:
      return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ })

})
//# sourceMappingURL=index.js.22891f23d180e19d7250.hot-update.js.map