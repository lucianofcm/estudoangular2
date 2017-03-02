import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponentComponent } from './databinding/event-binding-component.component';
import { TwoWayBindComponentComponent } from './databinding/two-way-bind-component.component';
import { FormularioCadastroComponent } from './formulario/formulario-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponentComponent,
    TwoWayBindComponentComponent,
    FormularioCadastroComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
