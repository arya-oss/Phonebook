import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

export interface Contact {
  name: String;
  phone: String;
}

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items: Contact[];
  contacts: Contact[];
  private isOn: boolean = false;

  constructor(public navCtrl: NavController) {
    this.items = [
      { name: "John", phone: "949447971" },
      { name: "Richard", phone: "949443971" },
      { name: "Jane", phone: "949447271" },
      { name: "Dave", phone: "949447171" },
      { name: "David", phone: "949447951" },
      { name: "Mick", phone: "949447977" },
      { name: "Mike", phone: "949447976" },
      { name: "Mandy", phone: "949447974" },
      { name: "Bob", phone: "949447901" },
      { name: "Alice", phone: "949447981" },
      { name: "Eve", phone: "949447972" }
    ];
    this.contacts = this.items;
    this.contacts.sort();
  }

  toggleSearchBar() {
    this.isOn = !this.isOn;
  }

  getItems(event) {
    this.contacts = this.items
      .filter( c => c.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
  }
}
