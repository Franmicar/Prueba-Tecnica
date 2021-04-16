import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Modales
import { AddComponent } from './modals/add/add.component';
import { EditComponent } from './modals/edit/edit.component';
import { DeleteComponent } from './modals/delete/delete.component';

//Servicios
import { TareaService } from './services/tarea.service';
import { DialogService } from './services/dialog.service';
import { ProgressBarService } from './services/progress-bar.service';
import { SnackBarService } from './services/snack-bar.service';
import { SpinnerService } from './services/spinner.service';
import { TranslationService } from './services/translation.service';

//Firebase (base de datos)
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
  ],
  entryComponents: [
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    TareaService,
    DialogService,
    ProgressBarService,
    SnackBarService,
    SpinnerService,
    TranslationService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass:
    // },
    HttpClient

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
