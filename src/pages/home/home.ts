import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import {Contact} from '../../models/contact';
import { EditContactPage } from '../edit-contact/edit-contact';
import { AddContactPage } from "../add-contact/add-contact";
import { ContactProvider } from "../../providers/contact/contact";



@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  isOn: boolean = false;
  contacts: Contact[];

  constructor(public navCtrl: NavController, private contactProvider:ContactProvider) {
  }

  ionViewDidLoad() {
    this.contactProvider.getAllContact().then(result => {
      this.contacts = result;
    });
  }

  toggleSearchBar() {
    this.isOn = !this.isOn;
  }

  editContact(event, item) {
    this.navCtrl.push(EditContactPage, {
      item: item
    });
  }

  addContact() {
    this.navCtrl.push(AddContactPage);
  }

  getItems(event) {
    let val = event.target.value;
    if (val != null && val.length !=0 ) {

    }
  }
}
