import { TestBed } from '@angular/core/testing';
import { TareaService } from './tarea.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tarea } from '../models/Tarea';
import { of } from 'rxjs';

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

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireModule
      ],
      declarations:[],
      providers:[
        { provide: TareaService, useValue: {tareaServiceMock} },
        { provide: AngularFirestore, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    service = TestBed.inject(TareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
