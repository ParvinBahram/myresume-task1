function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var NavLinks = /*#__PURE__*/function () {
  function NavLinks() {
    _classCallCheck(this, NavLinks);
  }
  return _createClass(NavLinks, [{
    key: "render",
    value: function render() {
      return "<ul class=\"nav_links \">\n        <li class=\"item dropdown relative cursor-pointer\"><a href=\"#\" class=\"link dropdown-link flex items-center\" target=\"_blank\">\u062E\u062F\u0645\u0627\u062A\n        <span><i data-lucide=\"chevron-left\" class=\"hover:text-purple-600\n         rotate-0 md:-rotate-90 transition-transform duration-200 delay-200 md:pr-2\"></i></span></a>\n         <div class=\"dropdown-menu absolute opacity-0 transition-all duration-300 transform translate-y-2 invisible rounded-lg p-4  shadow-lg  top-0 right-25 bg-purple-100 outline-none md:top-10 md:-right-18 md:w-50\">\n          <a class=\"dropdown-item\" href=\"#\">\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0627 \u06A9\u062F\u0646\u0648\u06CC\u0633\u06CC</a>\n          <a class=\"dropdown-item\" href=\"#\">\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0627 \u0648\u0631\u062F\u067E\u0631\u0633</a>\n          <a class=\"dropdown-item\" href=\"#\">\u0633\u0626\u0648 \u0648 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC</a>\n         </div>\n      </li>\n        <li class=\"item\"><a class=\"link\" href=\"#project\">\u067E\u0631\u0648\u0698\u0647 \u0647\u0627</a></li>\n        <li class=\"item md:hidden\"><a class=\"btn w-full\" href=\"#contact\">\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0646</a></li>\n      </ul>\n      <a class=\"btn hidden md:block items-center\" href=\"#contact\">\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627 \u0645\u0646</a>\n\n    ";
    }
  }, {
    key: "init",
    value: function init() {
      var dropDown = document.querySelector(".dropdown");
      var dropDownMenu = document.querySelector(".dropdown-menu");
      if (!dropDown || !dropDownMenu) return;
      function showMenu() {
        dropDownMenu.classList.remove("opacity-0", "invisible", "translate-y-2");
        dropDownMenu.classList.add("opacity-100", "visible", "translate-y-0");
      }
      function hideMenu() {
        dropDownMenu.classList.remove("opacity-100", "visible", "translate-y-0");
        dropDownMenu.classList.add("opacity-0", "invisible", "translate-y-2");
      }
      dropDown.addEventListener("mouseenter", showMenu);
      dropDown.addEventListener("mouseleave", hideMenu);
    }
  }]);
}();