import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Webengage, WebengagePush, WebengageNotification } from '@ionic-native/webengage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private webengage: Webengage, 
    private webengagePush: WebengagePush, 
    private webengageNotification: WebengageNotification) {
      
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.webengagePush.onClick(function(deeplink, customData) {
        console.log("Push clicked");
      });

      this.webengageNotification.onShown(function(inAppData) {
        console.log("In-app shown");
      });

      this.webengageNotification.onClick(function(inAppData, actionId) {
        console.log("In-app click");
      });

      this.webengageNotification.onDismiss(function(inAppData) {
        console.log("In-app dismissed");
      });

      this.webengage.engage()
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  }
}

