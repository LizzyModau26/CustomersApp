import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyAH1J0IqqQxPKXyna_ZxDuqGIhyIU2ov8Q",
  authDomain: "resturantapp-ff840.firebaseapp.com",
  databaseURL: "https://resturantapp-ff840.firebaseio.com",
  projectId: "resturantapp-ff840",
  storageBucket: "resturantapp-ff840.appspot.com",
  messagingSenderId: "394329198405",
  appId: "1:394329198405:web:5e0d91c204739edbe4f82c",
  measurementId: "G-BQ93Y2M1E2"
};
// Initialize Firebase


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
