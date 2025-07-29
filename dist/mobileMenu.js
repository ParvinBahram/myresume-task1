function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);
    this.toggler = null;
    this.menuIcon = null;
    this.closeBtn = null;
    this.navLinks = null;
  }
  return _createClass(MobileMenu, [{
    key: "render",
    value: function render() {
      return "\n      <div id=\"toggler\" class=\"px-2 md:hidden\">\n        <div class=\"mobile-menu\">\n          <i data-lucide=\"menu\" class=\"text-purple-500 w-12 h-12\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"closeBtn hidden\">\n          <i data-lucide=\"x\" class=\"w-12 h-12 text-purple-500\"></i>\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.toggler = document.getElementById("toggler");
      if (!this.toggler) return;
      this.menuIcon = this.toggler.querySelector(".mobile-menu");
      this.closeBtn = this.toggler.querySelector(".closeBtn");
      this.navLinks = document.querySelector(".nav_links");
      this.menuIcon.addEventListener("click", function () {
        _this.navLinks.classList.add("open");
        _this.menuIcon.classList.add("hidden");
        _this.closeBtn.classList.remove("hidden");
      });
      this.closeBtn.addEventListener("click", function () {
        _this.navLinks.classList.remove("open");
        _this.menuIcon.classList.remove("hidden");
        _this.closeBtn.classList.add("hidden");
      });
    }
  }]);
}();