import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <!-- insert here -->
  <!-- start of navbar -->
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <img src="/assets/images/img1.jpeg"
     width="50" 
     height="50" />
  <!-- <a class="navbar-brand" href="#">Retire-ed</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/levels">Levels</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sandbox">Sandbox</a>
      </li>
    </ul>
  </div>
</nav>
<!-- end of navbar -->
<!-- end of insert here -->
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
