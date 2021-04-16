import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddComponent } from './add.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment.prod';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { TareaService } from '../../services/tarea.service';
import { of } from 'rxjs';
import { Tarea } from '../../models/Tarea';

const tareas: Tarea[] = [
  {
  id: '123',
  descripcion: 'asdasda',
  titulo:'asdasdasd'
  },
  {
  id: '11223',
  descripcion: 'dasdasd1',
  titulo:'ghfhghgfh'
  },
  {
  id: 'nhasca',
  descripcion: '6jy56756',
  titulo:'bf3455'
  },
]

const tareaServiceMock = {
  firebase: {
    collection: () => of(tareas)
  }
}

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports:[
        MatDialogModule,
        ReactiveFormsModule,
        //AngularFireModule.initializeApp(environment.firebaseConfig),
        MatSnackBarModule
      ],
      providers:[
        { provide: TareaService, useValue: {tareaServiceMock} },
        { provide: AngularFirestore, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
