import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  // @Input() imagesPaths: any;
  currentIndex: number = 0;

  imagePaths = [
    'https://www.pontotel.com.br/local/wp-content/uploads/2022/05/imagem-corporativa.webp',
    'https://www.pontotel.com.br/local/wp-content/uploads/2022/05/imagem-corporativa-o-que-e-imagem-corporativa.webp',
    'https://www.pontotel.com.br/local/wp-content/uploads/2022/05/imagem-corporativa-quais-sao-as-vantagens-de-ter-uma-boa-imagem-corporativa.webp',
  ];

  slideConfig = [{
    "slidesToShow": this.imagePaths.length,
    "slidesToScroll": this.imagePaths.length,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnHover": true,
    "infinite": true,
    "arrows": true
  }];

  constructor() {

  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }
}
