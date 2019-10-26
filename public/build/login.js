(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./assets/js/Login/LoginForm.js":
/*!**************************************!*\
  !*** ./assets/js/Login/LoginForm.js ***!
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
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);














function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#fff',
    marginTop: '1rem',
    height: '50px'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '6rem',
    padding: '40px'
  },
  avatar: {
    marginBottom: '0.75rem',
    background: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["pink"][500]
  },
  copyright: {
    color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][600],
    textAlign: 'center',
    '& a': {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][600]
    },
    '& a:hover': {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["pink"][500]
    }
  },
  action: {
    marginTop: '1rem'
  },
  contentWrapper: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://www.tokkoro.com/picsup/2808194-landscape-clouds-rock-mountain-forest-storm-road___landscape-nature-wallpapers.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
};

var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));
    _this.state = {
      _username: '',
      _password: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LoginForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var _this$state = this.state,
          _username = _this$state._username,
          _password = _this$state._password;
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.post(Routing.generate("fos_user_security_login"), {
        _username: _username,
        _password: _password,
        _csrf_token: token
      }, {
        withCredentials: true
      }).then(function (response) {
        console.log(response);
        return response.json();
      }).then(function (data) {
        console.log(data);
      })["catch"](function (error) {
        console.log("Login error", error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        container: true,
        component: "main",
        className: classes.contentWrapper
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: false,
        sm: 4,
        md: 7,
        className: classes.image
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: 12,
        sm: 8,
        md: 5
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: classes.wrapper,
        component: _material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Paper"]
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Avatar"], {
        margin: "normal",
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_17___default.a, null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
        component: "h1",
        variant: "h5",
        margin: "normal"
      }, "SIGN IN"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["TextField"], {
        variant: "outlined",
        label: "Username",
        name: "_username",
        fullWidth: true,
        margin: "normal",
        value: this.state._username,
        onChange: this.handleChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["TextField"], {
        variant: "outlined",
        label: "Password",
        name: "_password",
        type: "password",
        fullWidth: true,
        margin: "normal",
        value: this.state._password,
        onChange: this.handleChange,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        variant: "contained",
        type: "submit",
        fullWidth: true,
        margin: "normal",
        className: classes.button
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: true,
        className: classes.action
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Link"], {
        href: "#",
        variant: "body2"
      }, "Forgot password?")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        className: classes.action
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Link"], {
        href: "#",
        variant: "body2"
      }, "Don't have an account? Sign Up"))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Box"], {
        mt: 5,
        className: classes.copyright
      }, "Copyright ", react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Link"], {
        href: ""
      }, "SilicoVN"))))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

LoginForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_14___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_18__["withStyles"])(styles)(LoginForm));

/***/ }),

/***/ "./assets/js/Login/login.js":
/*!**********************************!*\
  !*** ./assets/js/Login/login.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginForm */ "./assets/js/Login/LoginForm.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('login'));

/***/ })

},[["./assets/js/Login/login.js","runtime","vendors~app~login","vendors~login"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTG9naW4vTG9naW5Gb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Mb2dpbi9sb2dpbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJoZWlnaHQiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImF2YXRhciIsIm1hcmdpbkJvdHRvbSIsInBpbmsiLCJjb3B5cmlnaHQiLCJncmV5IiwidGV4dEFsaWduIiwiYWN0aW9uIiwiY29udGVudFdyYXBwZXIiLCJpbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIkxvZ2luRm9ybSIsInByb3BzIiwic3RhdGUiLCJfdXNlcm5hbWUiLCJfcGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwiUm91dGluZyIsImdlbmVyYXRlIiwiX2NzcmZfdG9rZW4iLCJ0b2tlbiIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsImVycm9yIiwiY2xhc3NlcyIsIlBhcGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFN0eWxlcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QVYsQ0FBbUJ3QixTQUFuQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQXFDLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMkRBQUMsa0RBQUQsT0FBaEIsRUFBK0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUEvQixFIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHtUZXh0RmllbGQsIEF2YXRhciwgQnV0dG9uLCBDc3NCYXNlbGluZSwgVHlwb2dyYXBoeSwgR3JpZCwgTGluaywgQm94LCBQYXBlcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQge3BpbmssIGdyZXl9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xuaW1wb3J0IHt3aXRoU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBidXR0b246IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKScsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICAgICBoZWlnaHQ6ICc1MHB4J1xuICAgIH0sXG4gICAgd3JhcHBlcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnNnJlbScsXG4gICAgICAgIHBhZGRpbmc6ICc0MHB4J1xuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzAuNzVyZW0nLFxuICAgICAgICBiYWNrZ3JvdW5kOiBwaW5rWzUwMF1cbiAgICB9LFxuICAgIGNvcHlyaWdodDoge1xuICAgICAgICBjb2xvcjogZ3JleVs2MDBdLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAnJiBhJzoge1xuICAgICAgICAgICAgY29sb3I6IGdyZXlbNjAwXVxuICAgICAgICB9LFxuICAgICAgICAnJiBhOmhvdmVyJzoge1xuICAgICAgICAgICAgY29sb3I6IHBpbmtbNTAwXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnMXJlbSdcbiAgICB9LFxuICAgIGNvbnRlbnRXcmFwcGVyOiB7XG4gICAgICAgIGhlaWdodDogJzEwMHZoJ1xuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vd3d3LnRva2tvcm8uY29tL3BpY3N1cC8yODA4MTk0LWxhbmRzY2FwZS1jbG91ZHMtcm9jay1tb3VudGFpbi1mb3Jlc3Qtc3Rvcm0tcm9hZF9fX2xhbmRzY2FwZS1uYXR1cmUtd2FsbHBhcGVycy5qcGcpJyxcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIH1cbn07XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgX3VzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIF9wYXNzd29yZDogJycsXG5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHtfdXNlcm5hbWUsIF9wYXNzd29yZH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBheGlvcy5wb3N0KFxuICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZShcImZvc191c2VyX3NlY3VyaXR5X2xvZ2luXCIpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF91c2VybmFtZTogX3VzZXJuYW1lLFxuICAgICAgICAgICAgICAgIF9wYXNzd29yZDogX3Bhc3N3b3JkLFxuICAgICAgICAgICAgICAgIF9jc3JmX3Rva2VuOiB0b2tlbixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9XG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2NsYXNzZXN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtmYWxzZX0gc209ezR9IG1kPXs3fSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fSBtZD17NX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9IGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBtYXJnaW49XCJub3JtYWxcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNJR04gSU5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIl91c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5fdXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJfcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuX3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cyBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBVcFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5cmlnaHR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IDxMaW5rIGhyZWY9XCJcIj5TaWxpY29WTjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTG9naW5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTG9naW5Gb3JtKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XG5cblJlYWN0RE9NLnJlbmRlcig8TG9naW5Gb3JtIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==