import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
email:string;

teacher: Array<any> = [
  { Name:"asad",course:"OS"},{ Name:"abrar", course:"itcs"},{ Name:"zarfashan", course:"nsc"},
  { Name:"anabia", course:"math"},{ Name:"alisha", course:"eng"},
  
  
    ]
    
  Mystudents: Array<any> = [
  { Name:"ahsan", Marks:"22"},{ Name:"abdullah", Marks:"17"},{ Name:"arsal", Marks:"fail"},
  { Name:"ali", Marks:"topper"},{ Name:"moeed", Marks:"21"},
  
  
    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
 
    this.email = this.navParams.get("email");
    console.log('ionViewDidLoad DashboardPage');
  }

}
