import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  showSpinner = false;

  constructor() { }

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false
    }, 2000);
  }

}
