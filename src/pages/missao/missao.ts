import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmacaoPage } from '../confirmacao/confirmacao';

/**
 * Generated class for the MissaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-missao',
  templateUrl: 'missao.html',
})
export class MissaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissaoPage');
  }
  irConfirmacao(){
    this.navCtrl.push(ConfirmacaoPage);
  }
}
