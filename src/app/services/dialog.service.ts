import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  open(component:any,item?:any):void{
    let dialogRef = this.dialog.open(component, {
      height: '400px',
      width: '600px',
      data: {item}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal cerrado");
    });
  }

}
