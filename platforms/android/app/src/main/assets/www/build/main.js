webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_webengage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, webengage, webengageUser) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.webengage = webengage;
        this.webengageUser = webengageUser;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('userid')
            .then(function (val) {
            _this.userid = val;
        });
    };
    HomePage.prototype.login = function (userid) {
        this.storage.set('userid', userid);
        this.userid = userid;
        this.webengageUser.login(userid);
    };
    HomePage.prototype.logout = function () {
        this.storage.set('userid', null);
        this.userid = null;
        this.webengageUser.logout();
    };
    HomePage.prototype.setUserEmail = function (email) {
        if (email != null && email != "") {
            this.webengageUser.setAttribute('we_email', email);
        }
    };
    HomePage.prototype.setUserAttribute = function (customKey, customValue) {
        if (customKey != null && customKey != "") {
            this.webengageUser.setAttribute(customKey, customValue);
        }
    };
    HomePage.prototype.track = function (event, key1, value1, key2, value2) {
        if (event != null && event != "") {
            var attributes = {};
            if (key1 != null && key1 != "") {
                attributes[key1] = value1;
            }
            if (key2 != null && key2 != "") {
                attributes[key2] = value2;
            }
            this.webengage.track(event, attributes);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ashwin/ionic_3/WebEngageTest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      WebEngage\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Welcome to WebEngage\n  <p>\n    If you get lost, the <a href="https://docs.webengage.com/docs/cordova-getting-started">docs</a> will be your guide.\n  </p>\n\n  <!-- User login -->\n  <ion-row center>  \n      <ion-col text-center>\n        <input type="text" placeholder="user id" [(ngModel)]="uid" value="{{userid}}"/>\n      </ion-col>\n  </ion-row>\n  <ion-row center *ngIf="!userid">  \n      <ion-col text-center>\n        <button #loginButton ion-button (click)="login(uid)"> LOGIN </button>\n      </ion-col>\n  </ion-row>\n  <ion-row center *ngIf="userid">  \n      <ion-col text-center>\n        <button #logoutButton ion-button button-block center (click)="logout()"> LOGOUT </button>\n      </ion-col>\n  </ion-row>\n\n  <!-- User system attribute -->\n  <div class = "list">\n    <ion-row center>  \n      <ion-col text-center>\n        <input type="text" [(ngModel)]="email" placeholder="email" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>\n      <ion-col text-center>\n        <button ion-button (click)="setUserEmail(email)"> SET </button>\n      </ion-col>\n    </ion-row>\n\n    <!-- User custom attribute -->\n    <ion-row center>\n      <ion-col text-center>\n        <input type="text" [(ngModel)]="custom_key" placeholder="custom key" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>\n      <ion-col text-center>\n        <input type="text" [(ngModel)]="custom_value" placeholder="custom value" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>\n      <ion-col text-center>\n        <button ion-button (click)="setUserAttribute(custom_key, custom_value)"> SET </button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- Event -->\n  <div class = "list">\n    <ion-row center>  \n      <ion-col text-center>\n        <input type="text" [(ngModel)]="event" placeholder="event" />\n      </ion-col>\n    </ion-row>\n \n    <ion-row center>  \n      <ion-col text-center>\n        <input type="text" [(ngModel)]="key1" placeholder="key 1" />\n      </ion-col>\n    </ion-row>\n    <ion-row center>  \n      <ion-col text-center>\n        <input type="text" [(ngModel)]="value1" placeholder="value 1" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>  \n      <ion-col text-center>\n        <input type="text" [(ngModel)]="key2" placeholder="key 2" />\n      </ion-col>\n    </ion-row>\n    <ion-row center>  \n      <ion-col text-center>\n        <input type="text" [(ngModel)]="value2" placeholder="value 2" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>  \n        <ion-col text-center>\n          <button ion-button (click)="track(event, key1, value1, key2, value2)"> TRACK </button>\n        </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ashwin/ionic_3/WebEngageTest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_webengage__["a" /* Webengage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_webengage__["d" /* WebengageUser */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_webengage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_webengage__["a" /* Webengage */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_webengage__["d" /* WebengageUser */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_webengage__["c" /* WebengagePush */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_webengage__["b" /* WebengageNotification */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_webengage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, webengage, webengagePush, webengageNotification) {
        var _this = this;
        this.webengage = webengage;
        this.webengagePush = webengagePush;
        this.webengageNotification = webengageNotification;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.webengagePush.onClick(function (deeplink, customData) {
                console.log("Push clicked");
            });
            _this.webengageNotification.onShown(function (inAppData) {
                console.log("In-app shown");
            });
            _this.webengageNotification.onClick(function (inAppData, actionId) {
                console.log("In-app click");
            });
            _this.webengageNotification.onDismiss(function (inAppData) {
                console.log("In-app dismissed");
            });
            _this.webengage.engage()
                .then(function (res) { return console.log(res); })
                .catch(function (err) { return console.log(err); });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ashwin/ionic_3/WebEngageTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ashwin/ionic_3/WebEngageTest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_webengage__["a" /* Webengage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_webengage__["c" /* WebengagePush */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_webengage__["b" /* WebengageNotification */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map