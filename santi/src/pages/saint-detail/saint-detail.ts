import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Santo} from '../../models/santo';


/*
  Generated class for the SaintDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-saint-detail',
  templateUrl: 'saint-detail.html'
})
export class SaintDetailPage {
  santo:Santo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.santo = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaintDetailPage');
  }

}
