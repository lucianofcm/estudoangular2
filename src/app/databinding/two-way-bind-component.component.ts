import { Component, OnInit, OnChanges } from '@angular/core';
import { Person } from "./person";
import { TodoItem } from "./person";
var listaItens = [];
@Component({
  selector: 'app-two-way-bind-component',
  template: `
  <div class="row col-xs-12 col-md-6 col-md-offset-3">
  <div class="panel panel-primary ">
    <div class="panel-heading">
      <h3 class="panel-title">Formulário de cadastro</h3>
    </div>
    <div class="panel-body">

      <form id="formulario" data-toggle="validator" role="form">
        <div class="form-group">
          <label for="inputName" class="control-label">Usuario da Tarefa</label>
          <input type="text" class="form-control" id="inputName" placeholder="Usuário" required #todoText>
        </div>
        <div class="form-group">
          <label for="inputName" class="control-label">Nome da tarefa</label>
          <input type="text" class="form-control" id="inputName" placeholder="Nome da tarefa" required #userText>
        </div>
         <div class="form-group">
          <div class="checkbox">
            <label>
        <input type="checkbox" id="terms" data-error="Before you wreck yourself" required #realizadaCheck>
        Realizada ?
         </label>
            <div class="help-block with-errors"></div>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" (click)="cadastrarItem(todoText.value,userText.value)" class="btn btn-primary">Enviar</button>
        </div>
      </form>

    </div>
  </div>


<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Lista de tarefas</div>
  
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Usuário</th>
        <th>Descrição</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let listaItens of retornarItens(); let i = index">
        <td>{{i + 1}}</td>
        <td>{{listaItens.user}}</td>
        <td>{{listaItens.items.action}}</td>
        <td [ngSwitch]="listaItens.items.done" class="col-md-2">
          <input type="checkbox" [(ngModel)]="listaItens.items.done" >
          <span *ngSwitchCase="true">Feito</span>
          <span *ngSwitchDefault>A Fazer</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>


  `,
  styles: []
})

export class TwoWayBindComponentComponent {

  person = new Person('', '');
  cadastrarItem(user, item,realizda) {

    if (user !== '' && item !== '') {
      const todoItem = new TodoItem(item, realizda);
      const person = new Person(user, todoItem);
      this.person = person;
      listaItens.push(person);
    } else {

    }
  }

  retornarItens() {
    return listaItens;
  }
}
