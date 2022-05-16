import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  mobile;

  constructor(private storageService: StorageService) {
    this.storageService.storage$.subscribe(async () => {
      await this.storageService.get('mobile').then(v => this.mobile = v);
    });
  }

  async ionViewWillEnter() {
    await this.storageService.get('mobile').then(v => this.mobile = v);
  }
}