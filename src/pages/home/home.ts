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

  ionViewWillEnter() {
    this.contactProvider.getAllContact().then(result => {
      if (result) {
        this.contacts = result.sort ((a,b) => {
          if (a.name > b.name) return 1;
          else if (a.name === b.name) return 0;
          else return -1;
        });
      }
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
    if (this.isOn && val != null && val.length !=0 ) {
      this.contacts = this.contacts.filter(c => c.name.toLowerCase().startsWith(val.toLowerCase())).sort((a,b) => {
        if (a.name > b.name) return 1;
        else if (a.name === b.name) return 0;
        else return -1;
      });
    } else {
      this.contactProvider.getAllContact().then(result => {
        this.contacts = result.sort((a,b) => {
          if (a.name > b.name) return 1;
          else if (a.name === b.name) return 0;
          else return -1;
        });
      });
    }
  }
}
