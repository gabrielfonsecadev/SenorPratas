import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from '../generic/carousel/carousel.component';
import { ProductCardComponent } from '../generic/product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselComponent,
    ProductCardComponent,
    SlickCarouselModule,
    HttpClientModule
  ]
})
export class PagesModule { }
