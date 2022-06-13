import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>
  
    <app-home></app-home>
    <!-- router gets injected -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'retire-edJS';
}
