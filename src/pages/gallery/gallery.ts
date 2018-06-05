import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import "rxjs/add/operator/map";
import { GalleryService } from '../../services/gallery.service';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motCle = '';
  images:any;
  size:number = 10;
  currentPage:number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private galleryService:GalleryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch() {
    this.galleryService.chercher(this.motCle, this.size, this.currentPage)
      .subscribe(data=>{
        this.images = data;
      }, err => {
        console.log(err);
      })

    /*this.http.get("https://pixabay.com/api/?key=1818662-eee28416f41eadd7c89acf6a6&q="+this.motCle+"&per_page=10&page=1")
      .map(resp=>resp.json())
      .subscribe(data=>{
        this.images = data;
      }, err => {
        console.log(err);
      })*/
  }

}
