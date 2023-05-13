import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent {
@Output()
public emitirHeroes: EventEmitter<Heroe[]> = new EventEmitter();

  public heroes : Heroe[] = [
//Aqui definimos un arreglo que se llama heroes
    {nombre : 'spiderman', poder : 5000},
    {nombre : 'hulk', poder : 30000}

  ];
  
  public enviarHeroes(): void{
    this.emitirHeroes.emit(this.heroes);
  }

}
