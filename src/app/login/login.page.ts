import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username:string;
  password:string;

    
  constructor(public navCtrl: NavController) {

   }

  login1() {
    console.log("Username: "+ this.username);

    console.log("Password: "+ this.password);
  }
goRegister(){
  this.navCtrl.navigateForward('/RegisterPage');
 }

}
