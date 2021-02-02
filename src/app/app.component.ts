import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddComponent } from './modals/add/add.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { EditComponent } from './modals/edit/edit.component';

import { Tarea } from './models/Tarea';
import { DialogService } from './services/dialog.service';
import { TareaService } from './services/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Organigrama';
  seccion = "Tareas"
  idiomas:String[]=['Español','Inglés','Francés']
  tareas:Tarea[]=[];
  opened = false;
  columnsToDisplay = ['tarea', 'menu'];

  constructor(public dialog:DialogService,
    public ts:TareaService) {}

  ngOnInit(){
    this.loadTareas();
  }

  loadTareas(){
    try{
      this.ts.getTareas2().subscribe((lista)=>{
        this.tareas = lista;
      },
      error =>{

      });
    }catch (err){

    }
    console.log("Tareas cargadas");
  }

  openAdd(){
    this.dialog.open(AddComponent);
  }

  openEdit(item:any){
    this.dialog.open(EditComponent, item);
  }

  openDel(item:any){
    this.dialog.open(DeleteComponent, item)
  }


}
