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
    'https://www.pratafina.com.br/upload/banner/2ef998a21d06a7b6c5cbbce0a4289607.webp',
    'https://www.pratafina.com.br/upload/banner/4580e8c8fde95df56d4064fb6a5c7513.webp',
    'https://www.pratafina.com.br/upload/banner/ac037818a86543dcfc7e8f60e7b572e2.webp',
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
  };


  constructor() {

  }

  ngOnInit() {
    console.log(this.imagePaths.length)
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }
}
