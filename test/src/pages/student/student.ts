import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
  
})
export class StudentPage {
  marks: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if(this.marks>'80'){
      console.log("Cgp 3.7");

    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}
