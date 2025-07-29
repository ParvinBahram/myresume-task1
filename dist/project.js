function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var Project = /*#__PURE__*/function () {
  function Project(item) {
    _classCallCheck(this, Project);
    this.title = item.title;
    this.description = item.description;
    this.category = item.category;
    this.completed = item.completed;
    this.createdAt = item.createdAt;
    this.link = item.link;
  }
  return _createClass(Project, [{
    key: "render",
    value: function render() {
      return "<div class=\"project-item outline-0 shadow-lg rounded-xl px-6 py-4 bg-gray-200  mx-auto\">\n        <h2 class=\"text-xl text-purple-900\">".concat(this.title, "</h2>\n       <div class=\" mt-2 flex items-center justify-between \">\n       <p class=\"status\">").concat(this.completed ? "تکمیل شده" : "در حال اجرا", "<p/>\n       <p class=\"badge\"> ").concat(this.category, "</p></div>\n        <p class=\"dark:text-black pt-4 pb-2 border-b border-b-gray-300\">").concat(this.description, "</p>\n        <span class=\"pt-2  block text-left text-gray-600 text-sm\">").concat(this.createdAt, "</span>\n        <a class=\"text-left block text-gray-600 pt-2 text-sm hover:text-gray-400\" href=").concat(this.link, " target=\"_blank\" rel=\"noopener noreferrer\">").concat(this.link, "</a>\n      </div>");
    }
  }]);
}();