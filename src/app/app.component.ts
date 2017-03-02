import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1> Minha primeira aplication</h1>
   <app-databinding></app-databinding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
