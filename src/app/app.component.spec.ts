import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { Tarea } from './models/Tarea';
import { of } from 'rxjs';
import { TareaService } from './services/tarea.service';
import { TranslationService } from './services/translation.service';

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

const translationServiceMock = {
  translate: {},
  langs: ['en', 'es', 'fr']
}

@Pipe({name: 'translate'})
class TranslatePipeMock implements PipeTransform{
  transform(): string{
    return '';
  }
}


describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TranslatePipeMock
      ],
      imports: [MatDialogModule],
      providers: [
        { provide: TranslationService, useValue: translationServiceMock},
        { provide: TareaService, useValue: tareaServiceMock },
        { provide: AngularFirestore, useValue: {} },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
