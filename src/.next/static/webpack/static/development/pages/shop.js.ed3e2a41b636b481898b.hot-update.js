webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./pages/shop/index.tsx":
/*!******************************!*\
  !*** ./pages/shop/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios-hooks */ "../node_modules/axios-hooks/es/index.js");
/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/item */ "./components/item/index.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config/index.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ShopList = function ShopList() {
  var _useAxios = Object(axios_hooks__WEBPACK_IMPORTED_MODULE_3__["default"])(_config__WEBPACK_IMPORTED_MODULE_5__["default"].getProductList),
      _useAxios2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAxios, 2),
      _useAxios2$ = _useAxios2[0],
      data = _useAxios2$.data,
      loading = _useAxios2$.loading,
      error = _useAxios2$.error,
      refetch = _useAxios2[1];

  if (loading) {
    return __jsx("p", null, "loading");
  }

  if (error) {
    return __jsx("p", null, "Our list broke!");
  }

  return __jsx("div", null, __jsx("h2", null, "Product List"), data.map(function (product) {
    return __jsx("div", {
      key: product._id
    }, __jsx(_components_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: product
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/shop/product/[id]",
      as: "/shop/product/".concat(product._id)
    }, "Add"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=shop.js.ed3e2a41b636b481898b.hot-update.js.map