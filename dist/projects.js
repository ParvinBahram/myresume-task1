function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { projectItems } from "../components/data.js";
import { Project } from "./project.js";
export var Projects = /*#__PURE__*/function () {
  function Projects(selector) {
    _classCallCheck(this, Projects);
    this.container = document.querySelector(selector);
  }
  return _createClass(Projects, [{
    key: "render",
    value: function render() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : projectItems;
      if (!this.container) return;
      var projectsList = items.map(function (project) {
        var projectCard = new Project(project);
        return projectCard.render();
      }).join("");
      var projectsGrid = "<div class= \"flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-4  px-6\">".concat(projectsList, "\n          </div>");
      this.container.innerHTML = projectsGrid;
    }
  }]);
}();