function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/service.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/service.service.ts ***!
    \*********************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServicesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/_tslib@1.13.0@tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/_@angular_core@8.2.14@@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/_@angular_common@8.2.14@@angular/common/fesm2015/http.js");

    var ServiceService = /*#__PURE__*/function () {
      function ServiceService(http) {
        _classCallCheck(this, ServiceService);

        this.http = http;
        this.posturl = "/a/login"; //登录

        this.geturl = "/a/article/search"; //获取数据

        this.putStatusUrl = "/a/u/article/status"; //修改上下线

        this.editUrl = "/a/article"; //编辑时获得单个数据

        this.Url = "/a/u/article"; //上传，编辑,删除

        this.loginOutUrl = "/a/logout"; //退出系统

        this.requestHeader = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/x-www-form-urlencoded"
          })
        };
      } //小括号内是初始化HttpClient模块,之后http就是代表HttpClient
      // -------------------------------获取数据的GET方法-------------------------------


      _createClass(ServiceService, [{
        key: "getData",
        value: function getData(cs) {
          return this.http.get(this.geturl, {
            params: cs //第一个params是固定的，第二个cs是形参

          });
        } // -------------------------------登录接口的POST方法-------------------------------

      }, {
        key: "postData",
        value: function postData(data) {
          var params = typeof data === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
          return this.http.post(this.posturl, params, this.requestHeader);
        } // -------------------------------新增数据的POST方法-------------------------------

      }, {
        key: "upload",
        value: function upload(data) {
          var params = typeof data === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
          return this.http.post(this.Url, params, this.requestHeader);
        } // -------------------------------修改上下线的PUT方法-------------------------------

      }, {
        key: "putStatusData",
        value: function putStatusData(data) {
          var params = typeof data === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
          return this.http.put(this.putStatusUrl, params, this.requestHeader);
        } // -------------------------------编辑获取单个数据的GET方法-------------------------------

      }, {
        key: "editData",
        value: function editData(cs) {
          return this.http.get("".concat(this.editUrl, "/").concat(cs));
        } // -------------------------------编辑后上传数据的PUT方法-------------------------------

      }, {
        key: "putData",
        value: function putData(data) {
          var params = typeof data === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
          return this.http.put("".concat(this.Url, "/").concat(data.id), params, this.requestHeader);
        } // -------------------------------删除数据的Delete方法-------------------------------

      }, {
        key: "deleteData",
        value: function deleteData(params) {
          return this.http["delete"]("".concat(this.Url, "/").concat(params));
        } // -------------------------------退出系统的Post方法-------------------------------

      }, {
        key: "cancel",
        value: function cancel() {
          return this.http.post(this.loginOutUrl, this.requestHeader);
        } // 以下方法的作用是把格式进行你序列化，post方法需要用到,和上面的paramFormat(data)相呼应。
        // 作用是把对象格式转换字符串格式"key=value&key=value&key=value"

      }, {
        key: "paramFormat",
        value: function paramFormat(data) {
          var paramStr = '',
              name,
              value,
              subName,
              innerObj;
          var that = this;

          for (name in data) {
            value = data[name];

            if (value instanceof Array) {
              var _iterator = _createForOfIteratorHelper(value),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var i = _step.value;
                  subName = name;
                  innerObj = {};
                  innerObj[subName] = i;
                  paramStr += this.paramFormat(innerObj) + '&';
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else if (value instanceof Object) {
              Object.keys(value).forEach(function (key) {
                subName = name + '[' + key + ']';
                innerObj = {};
                innerObj[subName] = value[key];
                paramStr += that.paramFormat(innerObj) + '&';
              });
            } else if (value !== undefined && value !== null) {
              paramStr += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
          }

          return paramStr.length ? paramStr.substr(0, paramStr.length - 1) : paramStr;
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map