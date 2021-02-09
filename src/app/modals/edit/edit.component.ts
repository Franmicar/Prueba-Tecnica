import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/Tarea';
import { DialogService } from 'src/app/services/dialog.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TareaService } from '../../services/tarea.service'

@Component({
  selector: 'app-edit',
  template: 'passed in {{ data.item }}',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  tarea:Tarea;
  tareaForm: FormGroup;
  id:any;

  constructor(private fb: FormBuilder,
    private tareaService: TareaService,
    public dialog: DialogService,
    public snackBar:SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data:{item}) {

    }


  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      titulo: [this.data.item.titulo, [Validators.required, Validators.minLength(1)]],
      descripcion: [this.data.item.descripcion, Validators.maxLength(100)]
    });
    console.log(this.data.item.titulo);
  }

  saveTarea():Tarea{
    const saveTarea = {
      titulo: this.tareaForm.get('titulo').value,
      descripcion: this.tareaForm.get('descripcion').value
    };
    return saveTarea;
  }

  onSubmit():void{
    this.tarea = this.saveTarea();
    this.tareaService.updateTarea(this.data.item.id, this.tarea).then( () =>{
      this.snackBar.open("Tarea editada correctamente","CLOSE");
      console.log("Tarea editada")
    }).catch(err =>{
      console.log(err);
    });
  }

}
