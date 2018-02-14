import { Injectable } from '@angular/core';

import {Storage} from '@ionic/storage';

import  { Contact } from '../../models/contact';

const STORAGE_KEY = 'myContacts';
const COUNT_KEY = 'totalContact';

@Injectable()
export class ContactProvider {

  private cnt: number;

  constructor(private storage: Storage) {
    storage.get(COUNT_KEY).then(res => {
      if (res) {
        this.cnt = res;
      } else {
        this.cnt = 1;
        this.storage.set(COUNT_KEY, this.cnt);
      }
    });
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
    return this.getAll().then(result => {
      if (result) {
        result = result.filter(c => c.id !== id);
        this.storage.set(STORAGE_KEY, result);
      }
    });
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
      this.storage.set(COUNT_KEY, this.cnt);
    });
  }

  updateOne(item: Contact) {
    return this.getAll().then(result => {
      if (result) {
        let index = result.findIndex(c => c.id === item.id);
        result[index] = item;
        this.storage.set(STORAGE_KEY, result);
      }
    });
  }
}
