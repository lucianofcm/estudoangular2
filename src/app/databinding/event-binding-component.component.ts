import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding-component',
  template: `
   <button (click)="onClicked()">Enviar</button>

  `,
  styles: []
})
export class EventBindingComponentComponent {

  @Output('clicavel') clica = new EventEmitter<String>();

  @Input() oculto: boolean = true;

  onClicked() {
    this.clica.emit('Funfouuuuu');
  }

}
