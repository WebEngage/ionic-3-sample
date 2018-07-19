var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Webengage
 * @description
 * Ionic-Native wrapper that wraps Webengage Cordova plugin for Android and iOS
 *
 * @usage
 * ```typescript
 * import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@ionic-native/webengage';
 *
 *
 * constructor(private webengage: Webengage, private webengageUser: WebengageUser, private webengagePush: WebengagePush, private webengageNotification: WebengageNotification ) { }
 *
 * ...
 *
 * this.webengage.engage();
 * ```
 */
var Webengage = (function (_super) {
    __extends(Webengage, _super);
    function Webengage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes WebEngage SDK
     * @return {Promise<any>}
     */
    Webengage.prototype.engage = function () {
        return;
    };
    /**
     * Sets WebEngage SDK configuration
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    Webengage.prototype.options = function (key, value) {
        return;
    };
    /**
     * Tracks event
     * @param eventName {string}
     * @param attributes {any}
     * @return {Promise<any>}
     */
    Webengage.prototype.track = function (eventName, attributes) {
        return;
    };
    /**
     * Tracks screen
     * @param eventName {string}
     * @param screenData {any}
     * @return {Promise<any>}
     */
    Webengage.prototype.screen = function (screenName, screenData) {
        return;
    };
    Webengage.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Webengage.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Webengage.prototype, "engage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Webengage.prototype, "options", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Webengage.prototype, "track", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], Webengage.prototype, "screen", null);
    Webengage = __decorate([
        Plugin({
            pluginName: 'Webengage',
            plugin: 'cordova-plugin-webengage',
            pluginRef: 'webengage',
            repo: 'https://github.com/WebEngage/cordova-plugin',
            install: '',
            installVariables: [],
            platforms: ['Android', 'iOS']
        })
    ], Webengage);
    return Webengage;
}(IonicNativePlugin));
export { Webengage };
var WebengageUser = (function (_super) {
    __extends(WebengageUser, _super);
    function WebengageUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs user in
     * @param userId {string}
     * @return {Promise<any>}
     */
    WebengageUser.prototype.login = function (userId) {
        return;
    };
    /**
     * Logs user out
     * @return {Promise<any>}
     */
    WebengageUser.prototype.logout = function () {
        return;
    };
    /**
     * Sets user attribute
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    WebengageUser.prototype.setAttribute = function (key, value) {
        return;
    };
    WebengageUser.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WebengageUser.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], WebengageUser.prototype, "login", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WebengageUser.prototype, "logout", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], WebengageUser.prototype, "setAttribute", null);
    WebengageUser = __decorate([
        Plugin({
            pluginName: 'Webengage',
            plugin: 'cordova-plugin-webengage',
            pluginRef: 'webengage.user',
            repo: 'https://github.com/WebEngage/cordova-plugin',
            install: '',
            installVariables: [],
            platforms: ['Android', 'iOS']
        })
    ], WebengageUser);
    return WebengageUser;
}(IonicNativePlugin));
export { WebengageUser };
var WebengagePush = (function (_super) {
    __extends(WebengagePush, _super);
    function WebengagePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Callback function is invoked when a push notification is clicked
     * @param callback {amy}
     * @return {Promise<any>}
     */
    WebengagePush.prototype.onClick = function (callback) {
        return;
    };
    /**
     * Sets push notification configuration
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    WebengagePush.prototype.options = function (key, value) {
        return;
    };
    WebengagePush.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WebengagePush.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WebengagePush.prototype, "onClick", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], WebengagePush.prototype, "options", null);
    WebengagePush = __decorate([
        Plugin({
            pluginName: 'Webengage',
            plugin: 'cordova-plugin-webengage',
            pluginRef: 'webengage.push',
            repo: 'https://github.com/WebEngage/cordova-plugin',
            install: '',
            installVariables: [],
            platforms: ['Android', 'iOS']
        })
    ], WebengagePush);
    return WebengagePush;
}(IonicNativePlugin));
export { WebengagePush };
var WebengageNotification = (function (_super) {
    __extends(WebengageNotification, _super);
    function WebengageNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Callback function is invoked when a in-app notification is shown
     * @param callback {amy}
     * @return {Promise<any>}
     */
    WebengageNotification.prototype.onShown = function (callback) {
        return;
    };
    /**
     * Callback function is invoked when a in-app notification is clicked
     * @param callback {amy}
     * @return {Promise<any>}
     */
    WebengageNotification.prototype.onClick = function (callback) {
        return;
    };
    /**
     * Callback function is invoked when a in-app notification is dismissed
     * @param callback {amy}
     * @return {Promise<any>}
     */
    WebengageNotification.prototype.onDismiss = function (callback) {
        return;
    };
    /**
     * Sets in-app notification configuration
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    WebengageNotification.prototype.options = function (key, value) {
        return;
    };
    WebengageNotification.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WebengageNotification.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WebengageNotification.prototype, "onShown", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WebengageNotification.prototype, "onClick", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], WebengageNotification.prototype, "onDismiss", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], WebengageNotification.prototype, "options", null);
    WebengageNotification = __decorate([
        Plugin({
            pluginName: 'Webengage',
            plugin: 'cordova-plugin-webengage',
            pluginRef: 'webengage.notification',
            repo: 'https://github.com/WebEngage/cordova-plugin',
            install: '',
            installVariables: [],
            platforms: ['Android', 'iOS']
        })
    ], WebengageNotification);
    return WebengageNotification;
}(IonicNativePlugin));
export { WebengageNotification };
//# sourceMappingURL=index.js.map