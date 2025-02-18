import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { CarouselComponent } from '../generic/carousel/carousel.component';
import { ProductCardComponent } from '../generic/product-card/product-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageComponent } from './search-page/search-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CollectionsComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    CarouselComponent,
    ProductCardComponent,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
