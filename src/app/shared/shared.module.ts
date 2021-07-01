import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    LandingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
