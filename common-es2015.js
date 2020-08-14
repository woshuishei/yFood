(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.13.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.2.14@@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@8.2.14@@angular/common/fesm2015/http.js");



let ServiceService = class ServiceService {
    constructor(http) {
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
    getData(cs) {
        return this.http.get(this.geturl, {
            params: cs //第一个params是固定的，第二个cs是形参
        });
    }
    // -------------------------------登录接口的POST方法-------------------------------
    postData(data) {
        const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
        return this.http.post(this.posturl, params, this.requestHeader);
    }
    // -------------------------------新增数据的POST方法-------------------------------
    upload(data) {
        const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
        return this.http.post(this.Url, params, this.requestHeader);
    }
    // -------------------------------修改上下线的PUT方法-------------------------------
    putStatusData(data) {
        const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
        return this.http.put(this.putStatusUrl, params, this.requestHeader);
    }
    // -------------------------------编辑获取单个数据的GET方法-------------------------------
    editData(cs) {
        return this.http.get(`${this.editUrl}/${cs}`);
    }
    // -------------------------------编辑后上传数据的PUT方法-------------------------------
    putData(data) {
        const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
        return this.http.put(`${this.Url}/${data.id}`, params, this.requestHeader);
    }
    // -------------------------------删除数据的Delete方法-------------------------------
    deleteData(params) {
        return this.http.delete(`${this.Url}/${params}`);
    }
    // -------------------------------退出系统的Post方法-------------------------------
    cancel() {
        return this.http.post(this.loginOutUrl, this.requestHeader);
    }
    // 以下方法的作用是把格式进行你序列化，post方法需要用到,和上面的paramFormat(data)相呼应。
    // 作用是把对象格式转换字符串格式"key=value&key=value&key=value"
    paramFormat(data) {
        let paramStr = '', name, value, subName, innerObj;
        let that = this;
        for (name in data) {
            value = data[name];
            if (value instanceof Array) {
                for (let i of value) {
                    subName = name;
                    innerObj = {};
                    innerObj[subName] = i;
                    paramStr += this.paramFormat(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                Object.keys(value).forEach(function (key) {
                    subName = name + '[' + key + ']';
                    innerObj = {};
                    innerObj[subName] = value[key];
                    paramStr += that.paramFormat(innerObj) + '&';
                });
            }
            else if (value !== undefined && value !== null) {
                paramStr += encodeURIComponent(name) + '=' +
                    encodeURIComponent(value) + '&';
            }
        }
        return paramStr.length ? paramStr.substr(0, paramStr.length - 1) : paramStr;
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map