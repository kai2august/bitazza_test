webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/news_details.js":
/*!*******************************!*\
  !*** ./pages/news_details.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_13__);
















var UserNewsDetails =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(UserNewsDetails, _Component);

  function UserNewsDetails(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UserNewsDetails);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(UserNewsDetails).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getNewsDetals", function () {
      var inst = Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this);

      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var goid, response, _ref2, output;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                goid = 0;

                if (!(typeof inst.state.id != 'undefined' && inst.state.id != 0)) {
                  _context.next = 18;
                  break;
                }

                goid = inst.state.id;
                _context.next = 6;
                return window.fetch('/news?id=' + goid, {
                  method: 'get',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                  }
                });

              case 6:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 15;
                  break;
                }

                _context.next = 10;
                return response.json();

              case 10:
                _ref2 = _context.sent;
                output = _ref2.output;

                if (output.status) {
                  inst.setState({
                    title: output.result.title,
                    cover_image: output.result.cover_image,
                    description: output.result.description,
                    publish_date: output.result.publish_date.toString().replace(/T/, ' ').replace(/\..+/, '')
                  });
                } else {
                  console.log('Get News failed.');
                }

                _context.next = 16;
                break;

              case 15:
                console.log('Get News failed.');

              case 16:
                _context.next = 19;
                break;

              case 18:
                console.log('No News ID.');

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](0);
                console.log('Implementation or Network error.');

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 21]]);
      }))(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getImage", function () {
      if (_this.state.cover_image != '') {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: _this.state.cover_image,
          className: "item_image"
        });
      } else {
        return '';
      }
    });

    _this.state = {
      id: 0,
      title: '',
      cover_image: '',
      description: '',
      publish_date: ''
    };
    var view_id = js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('view_news_id');

    if (typeof view_id != 'undefined') {
      _this.state.id = view_id;
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(UserNewsDetails, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getNewsDetals();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1229118864" + " " + "content_box"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1229118864" + " " + "content_page"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1229118864" + " " + "item_title"
      }, this.state.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1229118864" + " " + "item_date"
      }, this.state.publish_date), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1229118864" + " " + "center_div"
      }, this.getImage()), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1229118864" + " " + "item_desc"
      }, this.state.description)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1229118864"
      }, ".content_box.jsx-1229118864{height:calc(100% - 44px);overflow-x:hidden;overflow-y:auto;}.content_page.jsx-1229118864{padding:8px;}.item_image.jsx-1229118864{width:100%;height:auto;display:block;}.item_title.jsx-1229118864{font-size:17px;font-weight:bold;line-height:22px;margin-top:12px;}.item_desc.jsx-1229118864{font-size:15px;line-height:20px;margin-top:16px;}.item_date.jsx-1229118864{height:16px;font-size:12px;line-height:16px;color:#999999;margin-top:8px;}.center_div.jsx-1229118864{margin:8px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWkvRGVza3RvcC9iaXRhenphL2JpdGF6emFfdGVzdC9wYWdlcy9uZXdzX2RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUY0QixBQUdpRCxBQUtiLEFBR0QsQUFLSSxBQU1BLEFBS0gsQUFPRCxXQXRCQyxBQXVCTSxDQTFCckIsQUFtQmtCLEdBWEUsQUFNQSxRQVZILEVBVEksRUF5QkQsRUFPcEIsR0FsQm9CLEFBTUQsS0FWbkIsTUFUbUIsQ0F5QkYsSUFMakIsQ0FObUIsU0FZRCxDQXpCbEIsTUFjQSxRQVlBIiwiZmlsZSI6Ii9Vc2Vycy9rYWkvRGVza3RvcC9iaXRhenphL2JpdGF6emFfdGVzdC9wYWdlcy9uZXdzX2RldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGpzQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuXG5jbGFzcyBVc2VyTmV3c0RldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlkIDogMCxcbiAgICAgICAgICAgIHRpdGxlIDogJycsXG4gICAgICAgICAgICBjb3Zlcl9pbWFnZSA6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgICAgIHB1Ymxpc2hfZGF0ZSA6ICcnXG4gICAgICAgIH07XG4gICAgICAgIGxldCB2aWV3X2lkID0ganNDb29raWUuZ2V0KCd2aWV3X25ld3NfaWQnKTtcbiAgICAgICAgaWYodHlwZW9mKHZpZXdfaWQpICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaWQgPSB2aWV3X2lkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAgICAgXG4gICAgZ2V0TmV3c0RldGFscyA9ICgpID0+IHtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzO1xuICAgICAgICAoXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnb2lkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGluc3Quc3RhdGUuaWQpICE9ICd1bmRlZmluZWQnICYmIGluc3Quc3RhdGUuaWQgIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBnb2lkID0gaW5zdC5zdGF0ZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKCcvbmV3cz9pZD0nICsgZ29pZCAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04J31cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgb3V0cHV0IH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3V0cHV0LnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3Quc2V0U3RhdGUoeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogb3V0cHV0LnJlc3VsdC50aXRsZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcl9pbWFnZSA6IG91dHB1dC5yZXN1bHQuY292ZXJfaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA6IG91dHB1dC5yZXN1bHQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoX2RhdGUgOiBvdXRwdXQucmVzdWx0LnB1Ymxpc2hfZGF0ZS50b1N0cmluZygpLnJlcGxhY2UoL1QvLCAnICcpLnJlcGxhY2UoL1xcLi4rLywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0IE5ld3MgZmFpbGVkLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dldCBOZXdzIGZhaWxlZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBOZXdzIElELicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ltcGxlbWVudGF0aW9uIG9yIE5ldHdvcmsgZXJyb3IuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApKHRoaXMpO1xuICAgIH1cbiAgICAgICAgXG4gICAgZ2V0SW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY292ZXJfaW1hZ2UgIT0gJycpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5jb3Zlcl9pbWFnZX0gY2xhc3NOYW1lPVwiaXRlbV9pbWFnZVwiLz5cbiAgICAgICAgICAgICkgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiAnJzsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXROZXdzRGV0YWxzKCk7XG4gICAgfVxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X3BhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtX3RpdGxlXCI+e3RoaXMuc3RhdGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV9kYXRlXCI+e3RoaXMuc3RhdGUucHVibGlzaF9kYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlcl9kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0SW1hZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbV9kZXNjXCI+e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY29udGVudF9ib3h7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gNDRweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGVudF9wYWdle1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo4cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLml0ZW1faW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaXRlbV90aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pdGVtX2Rlc2N7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLml0ZW1fZGF0ZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6Izk5OTk5OTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2VudGVyX2RpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjo4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJOZXdzRGV0YWlscyJdfQ== */\n/*@ sourceURL=/Users/kai/Desktop/bitazza/bitazza_test/pages/news_details.js */"));
    }
  }]);

  return UserNewsDetails;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserNewsDetails);

/***/ })

})
//# sourceMappingURL=index.js.0d5ac7e5277010bfb502.hot-update.js.map