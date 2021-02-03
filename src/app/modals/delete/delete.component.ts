import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-delete',
  template: 'passed in {{ data.item }}',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public ts:TareaService,
    public ds:DialogService,
    @Inject(MAT_DIALOG_DATA) public data:{item}) { }

  ngOnInit(): void {
  }

  delete(){
    this.ts.deleteTarea(this.data.item.id).then( resultado =>{
      console.log("Tarea eliminada")
    }).catch(err =>{
      console.log(err);
    });
  }

}
