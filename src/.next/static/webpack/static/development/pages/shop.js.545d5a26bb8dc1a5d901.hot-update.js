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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios-hooks */ "../node_modules/axios-hooks/es/index.js");
/* harmony import */ var _components_product_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/product-row */ "./components/product-row/index.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ShopList = function ShopList() {
  var _useAxios = Object(axios_hooks__WEBPACK_IMPORTED_MODULE_4__["default"])(_config__WEBPACK_IMPORTED_MODULE_2__["default"].getProductList),
      _useAxios2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAxios, 2),
      _useAxios2$ = _useAxios2[0],
      data = _useAxios2$.data,
      loading = _useAxios2$.loading,
      error = _useAxios2$.error,
      refetch = _useAxios2[1];

  var _useAxios3 = Object(axios_hooks__WEBPACK_IMPORTED_MODULE_4__["default"])(_config__WEBPACK_IMPORTED_MODULE_2__["default"].getShoppingCart),
      _useAxios4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAxios3, 2),
      _useAxios4$ = _useAxios4[0],
      cartData = _useAxios4$.data,
      loadingCart = _useAxios4$.loading,
      cartError = _useAxios4$.error,
      refetchCart = _useAxios4[1];

  if (loading || loadingCart) {
    return __jsx("p", null, "loading");
  }

  if (error || cartError) {
    return __jsx("p", null, "Our list broke!");
  }

  var getItemInCart = function getItemInCart(productId) {
    return cartData.cartItems.find(function (item) {
      return item._id === productId;
    });
  };

  return __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/shop/checkout/[cart]",
    as: "/shop/checkout"
  }, __jsx("a", null, "Go to checkout")), __jsx("h2", null, "Product List"), data.map(function (product) {
    return __jsx("div", {
      key: product._id
    }, __jsx(_components_product_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: product,
      savedQuantity: getItemInCart(product._id) ? getItemInCart(product._id).quantity : 0,
      onCartUpdate: refetchCart
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shop/product/[id]",
      as: "/shop/product/".concat(product._id)
    }, __jsx("a", null, "Go to checkout")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=shop.js.545d5a26bb8dc1a5d901.hot-update.js.map