import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { CardPaisComponent } from './card-pais/card-pais.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListaPaisesComponent,
    CardPaisComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListaPaisesComponent
  ]
})
export class PaisesModule { }
