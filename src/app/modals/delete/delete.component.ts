import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/services/dialog.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
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
    public snackBar:SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data:{item}) { }

  ngOnInit(): void {
  }

  delete():void{
    this.ts.deleteTarea(this.data.item.id).then(() =>{
      console.log("Tarea eliminada")
      this.snackBar.open("Tarea eliminada correctamente","CLOSE",4000);
    }).catch(err =>{
      console.log(err);
    });
  }

}
