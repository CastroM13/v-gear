import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  mobile;
  routes = [
    {
      tab: 'home',
      title: 'Página Inicial',
      icon: 'home-sharp'
    },
    {
      tab: 'tab2',
      title: 'Jogadores',
      icon: 'body-sharp'
    },
    {
      tab: 'tab3',
      title: 'Recursos',
      icon: 'construct-sharp'
    },
  ]
  darkTheme = true;

  constructor(private storage: StorageService) {
    const resizeObserver = new ResizeObserver(entries => {
      this.checkWidth(entries[0].target as HTMLElement);
    });
    resizeObserver.observe(document.body);
  }

  checkWidth(body: HTMLElement) {
    if (body.offsetWidth < 500) {
      this.storage.set('mobile', true);
      this.mobile = true;
    } else {
      this.storage.set('mobile', false);
      this.mobile = false;
    }
  }

  async ionViewWillEnter() {
    await this.checkWidth(document.body);
  }

  toggleDarkTheme() {
    document.body.classList.toggle('dark', !this.darkTheme);
    document.body.classList.toggle('light', this.darkTheme);
  }

}
