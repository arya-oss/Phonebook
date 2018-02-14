import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Contact } from '../../models/contact';

import {ContactProvider} from '../../providers/contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {
  item: Contact;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private contactProvider:ContactProvider,
              private toastCtrl: ToastController) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditContactPage');
  }

  updateContact () {
    this.contactProvider.updateOne(this.item).then(res => {
      this.presentToast('User was updated successfully');
    });
  }

  removeContact() {
    this.contactProvider.removeOne(this.item.id).then(res => {
      this.presentToast('User was deleted successfully');
      this.navCtrl.push(HomePage);
    });
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
