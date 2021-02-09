import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  /**
   * Metodo que crea un modal genérico con los siguientes parametros:
   * @component: Componente para abrir en el modal
   * @father: Componente donde se abre el modal
   * @item: Tarea para eliminar o editar (opcional)
   * @h: Altura del modal, por defecto 450px
   * @w: Ancho del modal, por defecto 700px
   */
  open(component:any,father:any,item?:any,h:number=450,w:number=700):void{
    const dialogRef = this.dialog.open(component, {
      height: h+'px',
      width: w+'px',
      data: {item}
    });
    dialogRef.afterClosed().subscribe(() => {
      father.loadTareas();
      console.log("Modal cerrado");
    });
  }

}
