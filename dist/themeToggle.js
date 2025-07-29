function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var ThemeToggle = /*#__PURE__*/function () {
  function ThemeToggle() {
    _classCallCheck(this, ThemeToggle);
  }
  return _createClass(ThemeToggle, [{
    key: "render",
    value: function render() {
      return "\n      <div class=\"flex justify-center items-center py-8\">\n      <label for=\"theme-toggle\" class=\"flex items-center cursor-pointer\">\n      <div class=\"relative\">\n      <input id=\"theme-toggle\" type=\"checkbox\" class=\"sr-only peer\" aria-label=\"themeToggle\" >\n      <div class=\"w-14 h-8 bg-gray-300 peer-checked:bg-blue-700 dark:bg-gray-600 rounded-full transition-colors\"></div>\n      <div class=\"absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-6\"></div>\n      </div>\n      </label>\n    </div>\n    ";
    }
  }, {
    key: "init",
    value: function init() {
      var toggleTheme = document.getElementById("theme-toggle");
      var htmlEl = document.documentElement;
      if (!toggleTheme) return;
      var savedTheme = localStorage.getItem("theme");
      var preferDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
      if (savedTheme === 'dark' || !savedTheme && preferDark) {
        htmlEl.classList.add('dark');
        localStorage.setItem("theme", "dark");
      } else {
        htmlEl.classList.remove('dark');
        localStorage.setItem("theme", "light");
      }
      var currentTheme = localStorage.getItem('theme');
      if (currentTheme === "dark" || !currentTheme && preferDark) toggleTheme.checked = true;
      toggleTheme.addEventListener("change", function () {
        if (toggleTheme.checked) {
          htmlEl.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          htmlEl.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      });
    }
  }]);
}();