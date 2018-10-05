import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
email:string;
password:string;
  constructor(public navCtrl: NavController) {

  }
  login(){

    this.navCtrl.push(DashboardPage,{ email:this.email});
    alert("kya kr rha ha bhai");
    
  }
  
}
