import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Contact } from '../../models/contact';
import { ContactProvider } from '../../providers/contact/contact';

/**
 * Generated class for the AddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {
  item: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider, private toastCtrl: ToastController) {
    this.resetItem();
  }

  resetItem() {
    this.item = {
      id: 0,
      name: '',
      phone: '',
      email: '',
      address: '',
      company: '',
      relation: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactPage');
  }

  saveContact() {
    console.log('Save ' + this.item.name);
    this.contactProvider.addOne(this.item).then(result => {
      this.presentToast('User was added successfully');
    });
    this.resetItem();
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
