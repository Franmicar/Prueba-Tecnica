import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/Tarea';
import { DialogService } from 'src/app/services/dialog.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-edit',
  template: 'passed in {{ data.item }}',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  tarea: Tarea;
  tareaForm: FormGroup;
  id: any;

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    public dialog: DialogService,
    public snackBar: SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: { item: Tarea }
  ) {
    this.tarea = this.data.item;
  }

  ngOnInit(): void {
    this.createEditTareaForm();
  }

  createEditTareaForm(): void {
    this.tareaForm = this.fb.group({
      titulo: [
        this.tarea.titulo,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
      descripcion: [this.tarea.descripcion, Validators.maxLength(100)],
    });
  }

  saveTarea(): Tarea {
    const saveTarea = {
      titulo: this.tareaForm.controls['titulo'].value,
      descripcion: this.tareaForm.controls['descripcion'].value,
    };
    return saveTarea;
  }

  onSubmit(): void {
    const myTarea = this.saveTarea();
    this.tareaService
      .updateTarea(this.data.item.id, myTarea)
      .then(() => {
        this.snackBar.open('Tarea editada correctamente', 'CLOSE');
        console.log('Tarea editada');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
