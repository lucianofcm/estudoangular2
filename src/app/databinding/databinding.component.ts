import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {


  stringInterpolation = 'Esta é uma string interpolation';
  numberInterpolation = 2;

  isRedBorder() {
    return false;
  }

  isOculto(oculta) {
    if (oculta == 's') {
      return true;
    } else {
      return false
    }
  }
  onClick(value:String){
    alert(value);
  }
}
