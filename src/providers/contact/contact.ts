import { Injectable } from '@angular/core';

import {Storage} from '@ionic/storage';

import  { Contact } from '../../models/contact';

const STORAGE_KEY = 'myContacts';

@Injectable()
export class ContactProvider {

  private cnt: number = 0;

  constructor(private storage: Storage) {
  }

  getAllContact() {
    return this.getAll().then(result => {
      return result;
    });
  }

  getAll() {
    return this.storage.get(STORAGE_KEY);
  }

  removeOne(id: number) {

  }

  addOne(item: Contact) {
    return this.getAll().then(result => {
      item.id = this.cnt;
      if (result) {
        result.push(item);
        this.storage.set(STORAGE_KEY, result);
      } else {
        this.storage.set(STORAGE_KEY, [item]);
      }
      this.cnt++;
    });
  }

  updateOne(id: number, item: Contact) {

  }
}
