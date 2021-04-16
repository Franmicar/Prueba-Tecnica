import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DeleteComponent } from "./delete.component";
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment.prod';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { TareaService } from '../../services/tarea.service';
import { DialogService } from '../../services/dialog.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { of } from 'rxjs';
import { Tarea } from '../../models/Tarea';
import { ReactiveFormsModule } from '@angular/forms';

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

const dialogRefStub = {
  afterClosed() {
    return of(true);
  }
};
const dialogStub = { open: (component, data) => dialogRefStub };

describe("DeleteComponent", () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteComponent],
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule
      ],
      providers:[
        { provide: TareaService, useValue: {tareaServiceMock} },
        DialogService,
        SnackBarService,
        { provide: AngularFirestore, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog,  useValue: dialogStub },
        { provide: MatDialogRef, useValue: dialogRefStub}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
