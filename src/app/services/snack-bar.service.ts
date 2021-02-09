import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar:MatSnackBar) { }

  open(message:string,botton:string,duration:number=3000){
    let snackBarRef = this.snackBar.open(message, botton, {
      duration: duration
    });
  }

}
