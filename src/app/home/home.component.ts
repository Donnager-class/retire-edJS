import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- insert here -->
    <section class="bkg">
      <div class="bkg-body">
        <div class="container has-text-centered">
          
        <h1 class="title">Home</h1>
        
      </div>
      </div>
    </section>
    <!-- end of insert here -->
  `,
  styles: [`
  .bkg {
    background-image: url('/assets/images/img2.jpg') !important;
    background-position: center;
    background-repeat: no-repeat;
     background-size: cover;
   }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
