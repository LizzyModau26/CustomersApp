import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from '../app/services/firebase.service';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     AngularFireModule.initializeApp( {
        apiKey: "AIzaSyAH1J0IqqQxPKXyna_ZxDuqGIhyIU2ov8Q",
        authDomain: "resturantapp-ff840.firebaseapp.com",
        databaseURL: "https://resturantapp-ff840.firebaseio.com",
        projectId: "resturantapp-ff840",
        storageBucket: "resturantapp-ff840.appspot.com",
        messagingSenderId: "394329198405",
        appId: "1:394329198405:web:941eba46dc99b5e5e4f82c",
        measurementId: "G-18EQSHMGMY"
      })
  ],
  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
