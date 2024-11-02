import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from '../generic/carousel/carousel.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselComponent
  ]
})
export class PagesModule { }
