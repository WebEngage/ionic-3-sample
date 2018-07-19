import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class Webengage extends IonicNativePlugin {
    /**
     * Initializes WebEngage SDK
     * @return {Promise<any>}
     */
    engage(): Promise<any>;
    /**
     * Sets WebEngage SDK configuration
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
    /**
     * Tracks event
     * @param eventName {string}
     * @param attributes {any}
     * @return {Promise<any>}
     */
    track(eventName: string, attributes: any): Promise<any>;
    /**
     * Tracks screen
     * @param eventName {string}
     * @param screenData {any}
     * @return {Promise<any>}
     */
    screen(screenName: string, screenData: any): Promise<any>;
}
export declare class WebengageUser extends IonicNativePlugin {
    /**
     * Logs user in
     * @param userId {string}
     * @return {Promise<any>}
     */
    login(userId: string): Promise<any>;
    /**
     * Logs user out
     * @return {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * Sets user attribute
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    setAttribute(key: string, value: any): Promise<any>;
}
export declare class WebengagePush extends IonicNativePlugin {
    /**
     * Callback function is invoked when a push notification is clicked
     * @param callback {amy}
     * @return {Promise<any>}
     */
    onClick(callback: any): Promise<any>;
    /**
     * Sets push notification configuration
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
}
export declare class WebengageNotification extends IonicNativePlugin {
    /**
     * Callback function is invoked when a in-app notification is shown
     * @param callback {amy}
     * @return {Promise<any>}
     */
    onShown(callback: any): Promise<any>;
    /**
     * Callback function is invoked when a in-app notification is clicked
     * @param callback {amy}
     * @return {Promise<any>}
     */
    onClick(callback: any): Promise<any>;
    /**
     * Callback function is invoked when a in-app notification is dismissed
     * @param callback {amy}
     * @return {Promise<any>}
     */
    onDismiss(callback: any): Promise<any>;
    /**
     * Sets in-app notification configuration
     * @param key {string}
     * @param value {any}
     * @return {Promise<any>}
     */
    options(key: string, value: any): Promise<any>;
}
