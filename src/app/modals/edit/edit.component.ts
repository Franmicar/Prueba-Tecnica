import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/Tarea';
import { DialogService } from 'src/app/services/dialog.service';
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
    @Inject(MAT_DIALOG_DATA) public data:{item}) {

    }


  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      titulo: [this.data.item.titulo, [Validators.required, Validators.minLength(1)]],
      descripcion: [this.data.item.descripcion, Validators.maxLength(50)]
    });
    console.log(this.data.item.titulo);
  }

  saveTarea(){
    const saveTarea = {
      titulo: this.tareaForm.get('titulo').value,
      descripcion: this.tareaForm.get('descripcion').value
    };
    return saveTarea;
  }

  onSubmit(){
    this.tarea = this.saveTarea();
    this.tareaService.addTarea(this.tarea);
  }

}
