webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _pages_news__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/news */ "./pages/news.js");
/* harmony import */ var _pages_news_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/news_details */ "./pages/news_details.js");















var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getTitle", function () {
      if (_this.state.action == 'home') {
        return '';
      } else if (_this.state.action == 'news_details') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "header_but",
          onClick: _this.headerClick
        }, "< Back");
      } else {
        return '';
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getContent", function () {
      if (_this.state.action == 'home') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_news__WEBPACK_IMPORTED_MODULE_11__["default"], null);
      } else if (_this.state.action == 'news_details') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_news_details__WEBPACK_IMPORTED_MODULE_12__["default"], null);
      } else {
        return '';
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "headerClick", function (e) {
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('view_news_id', 0);
      js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('user_action', 'home');

      _this.setState({
        action: 'home'
      });
    });

    _this.state = {};
    var action = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('user_action');

    if (typeof action != 'undefined') {
      _this.state.action = action;
    } else {
      _this.state.action = 'home';
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1306356711" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1306356711" + " " + "header"
      }, this.getTitle(), "News", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1306356711" + " " + "clear"
      })), this.getContent(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1306356711"
      }, "html{height:100%;font-family:Gotham,\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:15px;line-height:17px;color:#333;}body{margin:0px;padding:0px;width:100%;height:100%;}.container{height:100%;}#__next{height:100%;}.header{height:28px;padding:8px;background-color:#006;color:#FFF;line-height:28px;font-weight:bold;}.header_but{float:left;padding:0px 12px 0px 12px;color:#FFF;cursor:pointer;font-weight:normal;margin-right:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWkvRGVza3RvcC9iaXRhenphL2JpdGF6emFfdGVzdC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RDJCLEFBRzZCLEFBT0YsQUFNQyxBQUdBLEFBR0EsQUFRRCxXQW5CQyxBQW9CYyxDQTNCeUMsQUFhdEUsQUFHQSxBQUdlLFdBWEQsQ0FZVyxVQVhWLEdBbUJELFNBbEJkLEFBV2MsRUFRSSxTQVBFLE1BUUUsV0FQRixDQXRCRixPQThCRyxRQTdCRCxDQXNCcEIsU0FRQSxPQTdCYyxXQUNkIiwiZmlsZSI6Ii9Vc2Vycy9rYWkvRGVza3RvcC9iaXRhenphL2JpdGF6emFfdGVzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGpzQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgVXNlck5ld3NMaXN0IGZyb20gJy4uL3BhZ2VzL25ld3MnO1xuaW1wb3J0IFVzZXJOZXdzRGV0YWlscyBmcm9tICcuLi9wYWdlcy9uZXdzX2RldGFpbHMnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBhY3Rpb24gPSBqc0Nvb2tpZS5nZXQoJ3VzZXJfYWN0aW9uJyk7XG4gICAgICAgIGlmKHR5cGVvZihhY3Rpb24pICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aW9uID0gJ2hvbWUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAgICAgXG4gICAgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYWN0aW9uID09ICdob21lJyl7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuYWN0aW9uID09ICduZXdzX2RldGFpbHMnKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyX2J1dFwiIG9uQ2xpY2s9e3RoaXMuaGVhZGVyQ2xpY2t9PiZsdDsgQmFjazwvYT5cbiAgICAgICAgICAgICk7ICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gJyc7IFxuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBnZXRDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnN0YXRlLmFjdGlvbiA9PSAnaG9tZScpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VXNlck5ld3NMaXN0Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfWVsc2UgaWYodGhpcy5zdGF0ZS5hY3Rpb24gPT0gJ25ld3NfZGV0YWlscycpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VXNlck5ld3NEZXRhaWxzLz5cbiAgICAgICAgICAgICkgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuICcnOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoZWFkZXJDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGpzQ29va2llLnNldCgndmlld19uZXdzX2lkJywgMCk7XG4gICAgICAgIGpzQ29va2llLnNldCgndXNlcl9hY3Rpb24nLCAnaG9tZScpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uIDogJ2hvbWUnIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLmdldFRpdGxlKCl9TmV3c1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLmdldENvbnRlbnQoKX1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpHb3RoYW0sIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTsgXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI19fbmV4dHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjI4cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzo4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA2OyBcbiAgICAgICAgICAgICAgICBjb2xvcjojRkZGO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjI4cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJfYnV0e1xuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzowcHggMTJweCAwcHggMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojRkZGO1xuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXX0= */\n/*@ sourceURL=/Users/kai/Desktop/bitazza/bitazza_test/pages/index.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0c368f6698428fc65dd6.hot-update.js.map