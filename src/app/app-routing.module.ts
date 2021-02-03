import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home'
  },
  {
    path: 'home', loadChildren: () => import('./app.module').then(m => m.AppModule),
  },
  {
    path: '**', redirectTo: ''
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
