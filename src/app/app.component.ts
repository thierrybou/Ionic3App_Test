import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PlacesPage } from './../pages/places/places';
import { MeteoPage } from './../pages/meteo/meteo';
import { GalleryPage } from './../pages/gallery/gallery';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  menus = [
    {title: 'My Gallery', component: GalleryPage},
    {title: 'My Meteo', component: MeteoPage},
    {title: 'My Places', component: PlacesPage},
    {title: 'Home', component: HomePage}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(m) {
    this.rootPage = m.component;
  }
}

