import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 350000,
      description: 'Mac pro m2-max',
      isAvailable: false,
      imgUrl: 'assets/Laptop.png',
    },
    {
      id: 2,
      name: 'Mobile',
      price: 50000,
      description: 'Mobile Pro',
      isAvailable: true,
      imgUrl: 'assets/Mobile.png',
    },
  ];

  currentTab = 1

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex;
  }

  handleTabChange(event: Event, tabIndex: number) {
    this.currentTab = tabIndex;
  }

}
