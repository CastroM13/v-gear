import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  resources;

  constructor() {}

  ionViewWillEnter() {
    this.resources = [
      {
        name: 'Classes',
        data: []      
      },
      {
        name: 'Raças',
        data: []      
      },
      {
        name: 'Facções',
        data: []      
      },
      {
        name: 'NPCs',
        data: []      
      },
      {
        name: 'Criaturas',
        data: []      
      },
      {
        name: 'Itens',
        data: []      
      },
    ];
  }

  search(event) {
    console.log(event.detail.value)
  }

}
