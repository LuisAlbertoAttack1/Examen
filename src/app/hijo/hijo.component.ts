import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  //Definimos propiedad que nos ayuda a emitir informacion
  @Output()
  public emitirInformacion: EventEmitter<string> = new EventEmitter();
  //Definimos la propiedad que contiene la infromacion a emitir
  public nombre: string = "Roldan desde el hijo";
  //Definimos el metodo que emite la informacion
  //- > Creamos metodo 
  public enviarInformacion(): void {
    this.emitirInformacion.emit(this.nombre);
  }
}
