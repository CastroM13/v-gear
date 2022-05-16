import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private storageObserver: any;
  public storage$: any;

  constructor(private storage: Storage) {
    this.init();
    this.storageObserver= null;

    this.storage$ = Observable.create(observer => {
        this.storageObserver = observer;
    });
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
    this._storage && this.storageObserver?.next(this._storage);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }
}