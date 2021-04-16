import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from 'src/app/models/Tarea';
import { DialogService } from 'src/app/services/dialog.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  tarea: Tarea;
  tareaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    public dialog: DialogService,
    public snackBar: SnackBarService
  ) {}

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
      descripcion: ['', Validators.maxLength(100)],
    });
  }

  saveTarea(): Tarea {
    const saveTarea = {
      titulo: this.tareaForm.get('titulo').value,
      descripcion: this.tareaForm.get('descripcion').value,
    };
    return saveTarea;
  }

  onSubmit(): void {
    this.tarea = this.saveTarea();
    this.tareaService
      .addTarea(this.tarea)
      .then((resultado) => {
        console.log('Tarea creada con exito');
        this.snackBar.open('Tarea añadida correctamente', 'CLOSE');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
