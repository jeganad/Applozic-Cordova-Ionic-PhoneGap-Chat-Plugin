import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {Platform} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App, platform: Platform) {
    platform.ready().then(() => {
       applozic.isLoggedIn(function(response) {
          //alert(response);
          if (response == "true") {
            applozic.launchChat(function() {}, function() {});
          }
        }, function() {});
    });

  }

  logout(){
    //Api Token Logout
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}

declare var applozic: any;
