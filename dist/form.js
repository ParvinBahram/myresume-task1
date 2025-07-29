function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
export var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);
  }
  return _createClass(Form, [{
    key: "render",
    value: function render() {
      var container = document.createElement("div");
      container.className = "px-8 py-10 w-full lg:w-3/5 mx-auto rounded-lg shadow-lg shadow-gray-300/50 dark:shadow-black/50";
      container.innerHTML = "\n       <h3 class=\"text-xl font-medium \">\u0633\u0648\u0627\u0644 \u06CC\u0627 \u0627\u0646\u062A\u0642\u0627\u062F \u0648 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC \u062F\u0627\u0631\u06CC\u062F\u061F</h3>\n            <form id=\"getInTouch\" class=\"mt-6\">\n              <div class=\"flex-1\">\n                <label for=\"name\" class=\"block mb-2 \">\u0646\u0627\u0645</label>\n                <input type=\"text\" id=\"name\" placeholder=\"\" class=\"block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white input-style \" />\n                <small id=\"nameCheck\">\u0628\u06CC\u0646 5 \u062A\u062720 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631  \u062D\u0631\u0648\u0641 \u0641\u0627\u0635\u0644\u0647 \u0648 _ \u0645\u062C\u0627\u0632 \u0627\u0633\u062A </small>\n              </div>\n              <div class=\"flex-1 mt-6\">\n                 <label for=\"userName\" class=\"block mb-2 \">\u0627\u06CC\u0645\u06CC\u0644 \u06CC\u0627 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646</label>\n                 <input type=\"text\"  id=\"userName\"  placeholder=\"@example.com\" class=\"block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white input-style\" />\n                 <small id=\"userNameCheck\">\u0628\u06CC\u0646 11 \u062A\u0627 30 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u062D\u0631\u0648\u0641 \u0639\u062F\u062F . @ \u0645\u062C\u0627\u0632 \u0627\u0633\u062A</small>\n              </div>\n              <div class=\"w-full mt-6\">\n                <textarea  id=\"message\" class=\"block w-full h-32 px-5 py-3 mt-2  md:h-48 input-style\" placeholder=\"\u062F\u06CC\u062F\u06AF\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F\" ></textarea> \n                <small id=\"messageCheck\">\u0628\u06CC\u0646 30 \u062A\u0627 500 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631  \u062D\u0631\u0648\u0641 \u0639\u062F\u062F \u0641\u0627\u0635\u0644\u0647 \u0648 \u0639\u0644\u0627\u0645\u062A +*-_@. \u0645\u062C\u0627\u0632 \u0627\u0633\u062A</small>\n              </div>\n              <button type=\"submit\" id=\"subBtn\" class=\"w-full  px-6 py-3 mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform btn\">\u062B\u0628\u062A</button>\n            </form>\n              <div id=\"modal\" class=\"p-6 rounded-xl max-w-5xl hidden text-center hidden fixed  top-30 left-1/2 -translate-x-1/2 transition-opacity duration-300 opacity-0 shadow-xl\">\n                <p class=\"modal-message text-center mx-6\"></p>\n                <button id=\"closeModal\" class=\" mx-auto mt-4 p-2 rounded-2xl text-black\">\u0628\u0633\u062A\u0646 \u2716</button>\n              </div>\n          </div>";
      return container;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      this.form = document.getElementById("getInTouch");
      this.subBtn = document.getElementById("subBtn");
      this.modal = document.getElementById("modal");
      this.closeMdl = document.getElementById("closeModal");
      this.modalMessage = this.modal.querySelector(".modal-message");
      this.inputItems = [{
        input: document.getElementById("name"),
        feedback: document.getElementById("nameCheck"),
        regEx: /^[a-zA-Z0-9آ-ی\s_]{5,20}$/,
        label: "نام"
      }, {
        input: document.getElementById("userName"),
        feedback: document.getElementById("userNameCheck"),
        regEx: /^[a-zA-Z0-9@.]{11,30}$/,
        label: "ایمیل یا شماره تلفن"
      }, {
        input: document.getElementById("message"),
        feedback: document.getElementById("messageCheck"),
        regEx: /^[a-zA-Z0-9آ-ی.@\s\-_*+]{30,500}$/,
        label: "پیام"
      }];
      var _iterator = _createForOfIteratorHelper(this.inputItems),
        _step;
      try {
        var _loop = function _loop() {
          var item = _step.value;
          item.input.addEventListener("input", function () {
            item.input.classList.add("dirty");
            _this.validate();
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.subBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var _iterator2 = _createForOfIteratorHelper(_this.inputItems),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            item.input.classList.add("dirty");
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        _this.checkShowModal();
      });
      this.closeMdl.addEventListener("click", function () {
        return _this.closeModal();
      });
    }
  }, {
    key: "validate",
    value: function validate() {
      var isValid = true;
      var errorMessage = [];
      var _iterator3 = _createForOfIteratorHelper(this.inputItems),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var item = _step3.value;
          var value = item.input.value.trim();
          if (item.input.classList.contains("dirty")) {
            if (value === "" || !item.regEx.test(value)) {
              var msg = value === "" ? "ورودی نمی‌تواند خالی باشد" : "مقدار نامعتبر است";
              errorMessage.push("".concat(item.label, " : ").concat(msg));
              item.feedback.style.color = "red";
              item.feedback.textContent = msg;
              item.input.classList.remove("input-style");
              item.input.classList.add("error-input-style");
              isValid = false;
            } else {
              item.feedback.textContent = "قابل قبول";
              item.feedback.style.color = "green";
              item.input.classList.remove("error-input-style");
              item.input.classList.add("input-style");
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return {
        isValid: isValid,
        errorMessage: errorMessage
      };
    }
  }, {
    key: "checkShowModal",
    value: function checkShowModal() {
      var result = this.validate();
      if (result.isValid) {
        this.modalMessage.textContent = "✅ پیام با موفقیت ثبت شد";
        this.modal.classList.remove("bg-red-200");
        this.modalMessage.classList.remove("text-red-800");
        this.modal.classList.add("bg-green-200");
        this.modalMessage.classList.add("text-green-800");
      } else {
        this.modalMessage.innerHTML = "<br>".concat(result.errorMessage.join("<br>"));
        this.modal.classList.remove("bg-green-200");
        this.modal.classList.add("bg-red-200");
        this.modalMessage.classList.remove("text-green-800");
        this.modalMessage.classList.add("text-red-800");
      }
      this.showModal();
    }
  }, {
    key: "showModal",
    value: function showModal() {
      var _this2 = this;
      this.modal.classList.remove("hidden");
      setTimeout(function () {
        _this2.modal.classList.remove("opacity-0");
        _this2.modal.classList.add("opacity-100");
      }, 150);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this3 = this;
      this.modal.classList.remove("opacity-100");
      this.modal.classList.add("opacity-0");
      setTimeout(function () {
        _this3.modal.classList.add("hidden");
      }, 1000);
    }
  }]);
}();