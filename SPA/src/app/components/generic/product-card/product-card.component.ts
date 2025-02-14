import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product: any;
  @Input() type: any;
  hover: boolean = false;
  hoveredImageId: number | null = null;

  constructor() {

  }


  getImagePath(imagens: any, isHover: boolean, id: number): string {
    if (isHover) {
      const hoverImage = imagens.find((img: any) => img.order === 2);
      return hoverImage ? hoverImage.imagePath : '';
    }
    else {
      const coverImage = imagens.find((img: any) => img.order === 1);
      return coverImage ? coverImage.imagePath : '';
    }
  }
}
