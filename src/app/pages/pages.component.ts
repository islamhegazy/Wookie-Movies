import { Component } from '@angular/core';


@Component({
  selector: 'ngx-pages',
  template: `
   <app-header>
   <router-outlet></router-outlet>
   </app-header>
  
  `,
})
export class PagesComponent {

}