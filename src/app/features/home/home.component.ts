import { Component } from '@angular/core';

@Component({
  selector: 'ngt-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  title = 'Home';
  productDate:Date=new Date();
  constructor() {
      
  }
}
