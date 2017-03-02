import { Component, OnInit, OnChanges } from '@angular/core';
import { Person } from "./person";
import { TodoItem } from "./person";
var listaItens = [];
@Component({
  selector: 'app-two-way-bind-component',
  template: `
    Usuario:<input type="text" #todoText><br>
    Ação : <input type="text" #userText>
    <br> <button (click)="cadastrarItem(todoText.value,userText.value)">Enviar</button>

    <table class="table table-striped table-bordered">
    <thead>
        <tr><th></th><th>Usuário</th><th>Descrição</th><th>Feito</th></tr>
    </thead>
    <tbody>
        <tr *ngFor="let listaItens of retornarItens(); let i = index">
            <td>{{i + 1}}</td>
             <td>{{listaItens.user}}</td>
              <td>{{listaItens.items.action}}</td>
            <td><input type="checkbox" [(ngModel)]="listaItens.items.done" [ngFormControl]="ctrl" /></td>
            <td [ngSwitch]="listaItens.items.done">
                <span *ngSwitchCase="true">Feito</span>
                <span *ngSwitchDefault>A Fazer</span>
            </td>
            
        </tr>
    </tbody>
</table>

  `,
  styles: []
})

export class TwoWayBindComponentComponent {

  person = new Person("", "");
  cadastrarItem(user, item) {
    let todoItem = new TodoItem(item, false);
    let person = new Person(user, todoItem);
    this.person = person;
    listaItens.push(person);
  }

  retornarItens() {
    return listaItens;
  }
}
