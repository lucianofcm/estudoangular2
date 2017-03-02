import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <div class="container">
  		<div class="row-fluid">
          <h2>Gestor de tarefas</h2>
      </div>
   </div>
   </div>
   
   <app-databinding></app-databinding>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
