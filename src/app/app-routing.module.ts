import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPaisesComponent } from './paises/lista-paises/lista-paises.component';
import { LandingComponent } from './shared/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: ListaPaisesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
