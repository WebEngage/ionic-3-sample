
# WebEngage Ionic Sample Application


The Ionic Sample App is tested for Ionic CLI versions 3.19.0, 3.20.0, 4.0.3 and Cordova version 8.0.0.


## Installation

```
$ ionic cordova plugin add cordova-plugin-webengage --fetch

$ npm install --save @ionic-native/webengage
```


## Initialization

Import the following providers in your `src/app/app.module.ts` file as shown below.

```typescript
...
import { Webengage, WebengageUser, WebengagePush, WebengageNotification } from '@ionic-native/webengage';

@NgModule({
    ...
    providers: [
        ...,
        Webengage, WebengageUser, WebengagePush, WebengageNotification
    ]
});
...
```

Now, initialize the WebEngage SDK in `src/app/app.component.ts` file as shown below.

```typescript
...
import { Webengage } from '@ionic-native/webengage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    ...

    constructor(..., private webengage: Webengage) {
    
        platform.ready().then(() => {
            ...

            // Initialize WebEngage
            this.webengage.engage()
                .then(res => console.log(res))
                .catch(err => console.log(err));

            ...
        });
    }
}
```


## Configurations

Refer [Configurations for WebEngage Cordova Plugin](https://github.com/WebEngage/cordova-plugin#configurations).


## Tracking Users

You can track users as shown in the following example.

```typescript
...
import { WebengageUser } from '@ionic-native/webengage';

export class YourPage {
    ...
    constructor(..., private webengageUser: WebengageUser) { }

    // Login
    this.webengageUser.login("user-id");

    // Logout
    this.webengageUser.logout();

    // Set system user attributes
    this.webengageUser.setAttribute("we_first_name", "John");
    this.webengageUser.setAttribute("we_last_name", "Doe");
    this.webengageUser.setAttribute("we_email", "john.doe@gmail.com");
    this.webengageUser.setAttribute("we_birth_date", "1986-08-19");
    this.webengageUser.setAttribute("we_phone", "+551155256325");
    this.webengageUser.setAttribute("we_gender", "male");  // Supported values: 'male', 'female', 'other'
    this.webengageUser.setAttribute("we_company", "Alphabet Inc.");
    this.webengageUser.setAttribute("we_hashed_email", "144e0424883546e07dcd727057fd3b62");
    this.webengageUser.setAttribute("we_hashed_phone", "e0ec043b3f9e198ec09041687e4d4e8d");

    // Set custom user attributes
    this.webengageUser.setAttribute("Category", "GOLD");
    this.webengageUser.setAttribute("Value Index", 5.06);
    this.webengageUser.setAttribute("Inactive", false);
    this.webengageUser.setAttribute("Registered On", new Date("2015-11-09T10:01:11.000Z"));
}
```


## Tracking Events

You can track events as shown in the following example.

```typescript
...
import { Webengage } from '@ionic-native/webengage';

export class YourPage {
    ...
    constructor(..., private webengage: Webengage) { }

    // Track event
    this.webengage.track("Added to cart");

    // Track event with attributes
    var attributes = {};
    attributes["product-id"] = "12345";
    attributes["product-name"] = "wrist-watch";
    attributes["product-price"] = 25.65;
    this.webengage.track("Purchased", attributes);
}
```


## Push Notifications

Refer [Push Integration for WebEngage Cordova Plugin](https://github.com/WebEngage/cordova-plugin#push-notifications).


## In-app Notifications

Refer [In-app Integration for WebEngage Cordova Plugin](https://github.com/WebEngage/cordova-plugin#in-app-notifications).


## Troubleshooting

Refer [Troubleshooting for WebEngage Cordova Plugin](https://github.com/WebEngage/cordova-plugin#troubleshooting).
