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
    'https://www.pratafina.com.br/upload/banner/9e167a3f8964facdd4d1225f184cdccd.webp',
    'https://www.pratafina.com.br/upload/banner/392d1247a4652c3b93307402a64f8a14.webp',
    'https://www.pratafina.com.br/upload/banner/667868e657c130882ffacb3551bb50b8.webp',
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
