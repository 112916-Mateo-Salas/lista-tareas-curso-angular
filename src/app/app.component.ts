import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listaTareas :string [] = [];
  nuevaTarea : string ='';

  //hacemos la inyección del servicio de la nueva forma
  private _tareasServices = inject(TareasService);

  ngOnInit(): void {
    this.listaTareas = this._tareasServices.getTareas();
  }


  agregarTarea(){
    this._tareasServices.agregarTarea(this.nuevaTarea); //mando la nueva tarea al service para que me la agregue al localStorage
    this.nuevaTarea = ''; // borro el contenido de nueva tarea para poder volver a utilizarla
    this.listaTareas = this._tareasServices.getTareas(); // carga la lista de tareas actualizada
  }

  eliminarTarea(index : number){
    this._tareasServices.eliminarTarea(index); //mando el indice de la tarea a eliminar en el service
    this.listaTareas = this._tareasServices.getTareas() // carga la lista de tareas actualizada

    
  }
}
