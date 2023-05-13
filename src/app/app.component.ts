import { Component } from '@angular/core';
import { Heroe } from './interfaces/heroe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Creamos un metodo donde mandamos a traer la variable del hijo.component.ts
  public recibeNombre(nombre:string) {
    console.log(nombre);
    alert(nombre);
    
  }
  public contenidoHeroes(heroes:Heroe[]){
    alert(heroes);
    console.log(heroes);
    
  }
}
