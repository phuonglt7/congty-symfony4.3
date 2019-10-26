(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/Components/Home.js":
/*!**************************************!*\
  !*** ./assets/js/Components/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavBar */ "./assets/js/Components/NavBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _PublicResources__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PublicResources */ "./assets/js/Components/PublicResources.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
        path: "/",
        component: _PublicResources__WEBPACK_IMPORTED_MODULE_14__["default"]
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Home));

/***/ }),

/***/ "./assets/js/Components/NavBar.js":
/*!****************************************!*\
  !*** ./assets/js/Components/NavBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import React from 'react';
// import {Link, withRouter} from 'react-router-dom';
//
//
// function NavBar(props) {
//
//
//
//     return(
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <a href="#" className="navbar-brand"> Symfony React </a>
//             <div className="collapse navbar-collapse" id="navbarText">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item">
//
//                     </li>
//                     <li className="nav-item">
//                         <Link className={"nav-link"} to={"/api/public"}> Public Route </Link>
//                     </li>
//
//
//                 </ul>
//             </div>
//         </nav>
//     )
// }
// export default withRouter(NavBar);




var styles = function styles(theme) {
  return {
    h2: {
      color: theme.color.primary
    }
  };
};

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: classes.h2
      }, "Welcome to you!");
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

NavBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(NavBar));

/***/ }),

/***/ "./assets/js/Components/PublicResources.js":
/*!*************************************************!*\
  !*** ./assets/js/Components/PublicResources.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var FetchResourcePublic =
/*#__PURE__*/
function (_Component) {
  _inherits(FetchResourcePublic, _Component);

  function FetchResourcePublic(props) {
    var _this;

    _classCallCheck(this, FetchResourcePublic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FetchResourcePublic).call(this, props));
    _this.state = {
      publicResources: null
    };
    _this.fetchPublicResources = _this.fetchPublicResources.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FetchResourcePublic, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchPublicResources();
    }
  }, {
    key: "fetchPublicResources",
    value: function fetchPublicResources() {
      var _this2 = this;

      if (!this.state.publicResources) {
        axios__WEBPACK_IMPORTED_MODULE_16___default.a.get('http://localhost:8000/api/public').then(function (res) {
          _this2.setState({
            publicResources: res.data
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        style: {
          marginTop: 50
        }
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h4", {
        className: 'text-center'
      }, " This is a public page. You don't need to be authenticated  "), this.state.publicResources && react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
        style: {
          marginTop: 40
        }
      }, this.state.publicResources.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
          xs: "4",
          id: data.id,
          key: data.id
        }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CardTitle"], null, data.title), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, " Album ID:  ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Badge"], {
          color: "info",
          pill: true
        }, data.albumId)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["CardText"], null, data.description))));
      })));
    }
  }]);

  return FetchResourcePublic;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["withRouter"])(FetchResourcePublic));

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Home */ "./assets/js/Components/Home.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_Home__WEBPACK_IMPORTED_MODULE_14__["default"], null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

react_dom__WEBPACK_IMPORTED_MODULE_12___default.a.render(react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(App, null), document.getElementById('root'));

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~login","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Db21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvQ29tcG9uZW50cy9QdWJsaWNSZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiUHVibGljUmVzb3VyY2VzIiwiQ29tcG9uZW50Iiwid2l0aFJvdXRlciIsInN0eWxlcyIsInRoZW1lIiwiaDIiLCJjb2xvciIsInByaW1hcnkiLCJOYXZCYXIiLCJjbGFzc2VzIiwicHJvcHMiLCJSZWFjdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoU3R5bGVzIiwiRmV0Y2hSZXNvdXJjZVB1YmxpYyIsInN0YXRlIiwicHVibGljUmVzb3VyY2VzIiwiZmV0Y2hQdWJsaWNSZXNvdXJjZXMiLCJiaW5kIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJkYXRhIiwibWFyZ2luVG9wIiwibWFwIiwiaWQiLCJ0aXRsZSIsImFsYnVtSWQiLCJkZXNjcmlwdGlvbiIsIkFwcCIsIlJlYWN0RG9tIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0kseUVBQ0ksNERBQUMsZ0RBQUQsT0FESixFQUVJLDREQUFDLHdEQUFELFFBQ0ksNERBQUMsdURBQUQ7QUFBTyxZQUFJLEVBQUUsR0FBYjtBQUFrQixpQkFBUyxFQUFFQyx5REFBZUE7QUFBNUMsUUFESixDQUZKLENBREo7QUFRSDs7OztFQVZj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QSxPQUFuQyxDQURMLENBSEosQ0FESjtBQXFCSDs7OztFQS9DNkJoQyxnRDs7QUFpRG5CQyxtSUFBVSxDQUFDZSxtQkFBRCxDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTWlCLEc7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxhQUNJLDREQUFDLCtEQUFELFFBQ0kseUVBQ0ksNERBQUMseURBQUQsT0FESixDQURKLENBREo7QUFPSDs7OztFQVRhakMsZ0Q7O0FBWWxCa0MsaURBQVEsQ0FBQ0MsTUFBVCxDQUFnQiw0REFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBekIsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQdWJsaWNSZXNvdXJjZXMgZnJvbSBcIi4vUHVibGljUmVzb3VyY2VzXCI7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtcIi9cIn0gY29tcG9uZW50PXtQdWJsaWNSZXNvdXJjZXN9IC8+XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIb21lKTsiLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtMaW5rLCB3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vXG4vL1xuLy8gZnVuY3Rpb24gTmF2QmFyKHByb3BzKSB7XG4vL1xuLy9cbi8vXG4vLyAgICAgcmV0dXJuKFxuLy8gICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cbi8vICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+IFN5bWZvbnkgUmVhY3QgPC9hPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cbi8vICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1wibmF2LWxpbmtcIn0gdG89e1wiL2FwaS9wdWJsaWNcIn0+IFB1YmxpYyBSb3V0ZSA8L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4vL1xuLy9cbi8vICAgICAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvbmF2PlxuLy8gICAgIClcbi8vIH1cbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2QmFyKTtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gICAgaDI6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLnByaW1hcnlcbiAgICB9XG59KVxuXG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7Y2xhc3Nlc30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+V2VsY29tZSB0byB5b3UhPC9oMj5cbiAgICB9XG59XG5cbk5hdkJhci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKE5hdkJhcik7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZFRleHQsIENhcmRCb2R5LENhcmRUaXRsZSwgQ29udGFpbmVyLFJvdywgQ29sLCBCYWRnZSAgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEZldGNoUmVzb3VyY2VQdWJsaWMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHVibGljUmVzb3VyY2VzOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZldGNoUHVibGljUmVzb3VyY2VzID0gdGhpcy5mZXRjaFB1YmxpY1Jlc291cmNlcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaFB1YmxpY1Jlc291cmNlcygpO1xuICAgIH1cblxuICAgIGZldGNoUHVibGljUmVzb3VyY2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucHVibGljUmVzb3VyY2VzKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHVibGljJykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3B1YmxpY1Jlc291cmNlczogcmVzLmRhdGF9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7bWFyZ2luVG9wOjUwfX0+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17J3RleHQtY2VudGVyJ30+IFRoaXMgaXMgYSBwdWJsaWMgcGFnZS4gWW91IGRvbid0IG5lZWQgdG8gYmUgYXV0aGVudGljYXRlZCAgPC9oND5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wdWJsaWNSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOjQwfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnB1YmxpY1Jlc291cmNlcy5tYXAoZGF0YSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjRcIiBpZD17ZGF0YS5pZH0ga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57ZGF0YS50aXRsZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBBbGJ1bSBJRDogIDxCYWRnZSBjb2xvcj1cImluZm9cIiBwaWxsPntkYXRhLmFsYnVtSWR9PC9CYWRnZT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFRleHQ+e2RhdGEuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihGZXRjaFJlc291cmNlUHVibGljKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Db21wb25lbnRzL0hvbWVcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SG9tZS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cblJlYWN0RG9tLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXSwic291cmNlUm9vdCI6IiJ9