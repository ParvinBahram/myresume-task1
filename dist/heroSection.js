function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// کلاس معرفی من:
export var HeroSection = /*#__PURE__*/function () {
  function HeroSection(data) {
    _classCallCheck(this, HeroSection);
    this.header = data.header;
    this.name = data.name;
    this.job = data.job;
    this.education = data.education;
    this.experience = data.experience;
    this.skills = data.skills;
    this.aboutLink = data.aboutLink;
    this.imageSrc = data.imageSrc;
  }
  return _createClass(HeroSection, [{
    key: "render",
    value: function render() {
      return "\n      <div class=\"bg-gradient-to-r from-purple-400 to-purple-100 dark:bg-none mt-8 rounded-2xl md:[border-radius:5%_5%_60%_60%] shadow-2xl flex flex-col md:flex-row items-center md:gap-x-16 justify-between pt-10 pb-25 px-16\">\n      <div class=\"\">\n       <h1 class=\"text-3xl pb-4 font-bold mt-8\">".concat(this.header, "</h1>\n          <h2 class=\"text-2xl\">").concat(this.name, " \u0647\u0633\u062A\u0645 ").concat(this.job, "\u060C ").concat(this.education, "</h2>\n          <h3 class=\"text-xl  py-6\">").concat(this.experience, "\u0628\u0631\u0646\u0627\u0645\u0647\u0627\u06CC\u06CC \u0631\u0627 \u0628\u0627 ").concat(this.skills.join(" "), " \u062A\u0648\u0633\u0639\u0647 \u062F\u0627\u062F\u0645</h3>\n          <a href=\"").concat(this.aboutLink, "\" target=\"_blank\" class=\"btn border-0 outline-0 md:mr-32 w-full md:w-auto\"> \u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646</a>\n        </div>\n        <div class=\"flex justify-center\">\n          <img src=\"").concat(this.imageSrc, "\" alt=\"my-picture\"\n          class=\"rounded-full object-cover w-[50%] h-[50%] md:w-[90%] md:h-[90%] lg:w-[70%] md:h-[70%] items-center object-center mt-10 md:mt-0 shadow-2xl\" />\n      </div>\n      </div>\n    ");
    }
  }]);
}();