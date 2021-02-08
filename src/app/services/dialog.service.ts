import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  open(component:any,item?:any,h:number=450,w:number=700):void{
    let dialogRef = this.dialog.open(component, {
      height: h+'px',
      width: w+'px',
      data: {item}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Modal cerrado");
    });
  }

}
