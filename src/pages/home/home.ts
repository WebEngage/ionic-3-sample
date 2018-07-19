import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Webengage, WebengageUser } from '@ionic-native/webengage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  userid: string;

  constructor(public navCtrl: NavController, 
    private storage: Storage,
    private webengage: Webengage, 
    private webengageUser: WebengageUser) {

  }

  ionViewWillEnter() {
    this.storage.get('userid')
      .then((val) => {
        this.userid = val;
      });
  }

  login(userid: string) {
    this.storage.set('userid', userid);
    this.userid = userid;
    this.webengageUser.login(userid);
  }

  logout() {
    this.storage.set('userid', null);
    this.userid = null;
    this.webengageUser.logout();
  }

  setUserEmail(email: string) {
    if (email != null && email != "") {
      this.webengageUser.setAttribute('we_email', email);
    }
  }

  setUserAttribute(customKey: string, customValue: string) {
    if (customKey != null && customKey != "") {
      this.webengageUser.setAttribute(customKey, customValue);
    }
  }

  track(event: string, key1: string, value1: string, key2: string, value2: string) {
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
  }

}
