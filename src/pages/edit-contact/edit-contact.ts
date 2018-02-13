import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Contact } from '../../models/contact';

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
  constructor(public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditContactPage');
  }

}
