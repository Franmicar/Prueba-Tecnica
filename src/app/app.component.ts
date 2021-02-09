import { Component, OnInit } from '@angular/core';
import { AddComponent } from './modals/add/add.component';
import { DeleteComponent } from './modals/delete/delete.component';
import { EditComponent } from './modals/edit/edit.component';

import { Tarea } from './models/Tarea';
import { DialogService } from './services/dialog.service';
import { SpinnerService } from './services/spinner.service';
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
    public ts:TareaService,
    public spinner:SpinnerService) {}

  ngOnInit(){
    this.loadTareas();
  }

  loadTareas():void{
    try{
      this.spinner.loadData();
      this.ts.getTareas2().subscribe((lista)=>{
        this.tareas = lista;
      },
      error =>{

      });
    }catch (err){

    }
    console.log("Tareas cargadas");
  }

  NTareas():number{
   return this.tareas.length;
  }

  openAdd():void{
    this.dialog.open(AddComponent,this);
  }

  openEdit(item:any):void{
    this.dialog.open(EditComponent,this, item);
  }

  openDel(item:any):void{
    this.dialog.open(DeleteComponent,this, item, 280, 700);
  }


}
