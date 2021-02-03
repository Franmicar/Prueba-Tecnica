import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Tarea } from 'src/app/models/Tarea';
import { DialogService } from 'src/app/services/dialog.service';
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
    public dialog: DialogService
  ) {}

  ngOnInit(): void {
    this.tareaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(1)]],
      descripcion: ['', Validators.maxLength(50)],
    });
  }

  saveTarea() {
    const saveTarea = {
      titulo: this.tareaForm.get('titulo').value,
      descripcion: this.tareaForm.get('descripcion').value,
    };
    return saveTarea;
  }

  onSubmit() {
    this.tarea = this.saveTarea();
    this.tareaService.addTarea(this.tarea).then( resultado =>{
      console.log("Tarea creada con exito")
    }).catch(err =>{
      console.log(err);
    });
  }
}
