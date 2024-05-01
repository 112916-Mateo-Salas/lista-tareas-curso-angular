import { Injectable } from '@angular/core';
import test from 'node:test';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private localStorageKey = "listaTareas";

  getTareas(): string[]{ // busca en el localStorage y lo devuelve en json
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTarea( tarea: string){
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas)); // seteamos en el localStorage la nueva lista de tareas con el elemento agregado
  }

  eliminarTarea( index: number) {
    const tareas = this.getTareas();
    tareas.splice(index,1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }


  constructor() { }
}
