import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmacaoPage } from '../confirmacao/confirmacao';
import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissaoPage');
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Você cumpriu essa missão?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');

              let confirm = this.alerCtrl.create({
                title: 'Por que?',

                buttons: [
                  {
                    text: 'Não quis',
                    handler: () => {
                      console.log('Disagree clicked');
                    }
                  },
                  {
                    text: 'Não pude',
                    handler: () => {
                      console.log('Agree clicked');
                    }
                  }
                ]
              });
              confirm.present()
          
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            let confirm = this.alerCtrl.create({
              title: 'Feedback?',

              buttons: [
                {
                  text: 'Não gostei...',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Gostei dessa forma de estudar!',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
              ]
            });
            confirm.present()

          }
        }
      ]
    });
    confirm.present()
  }

}
