import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: any;
  hover: boolean = false;
  hoveredImageId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.http.get('assets/data/products.json').subscribe((response) => {
      console.log(response)
      this.products = response;
    },
      (error) => {
        console.error('Erro ao carregar o arquivo JSON:', error);
      }
    );
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    infinite: false,
    arrows: true,
    nextArrow: '<div style=\'position: absolute; top: 35%; right: 1%; cursor: pointer;\' class=\'next-slide\'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></div>',
    prevArrow: '<div style=\'position: absolute; top: 35%; left: 1%; z-index: 1; cursor: pointer;\' class=\'next-slide\'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg></div>',
    centerMode: false,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]
  };

  getNovidades() {
    const sortedProducts = [...this.products];
    sortedProducts.sort((a, b) => {
      const dateA = new Date(a.uploadDate).getTime();
      const dateB = new Date(b.uploadDate).getTime();
      return dateB - dateA;
    });

    return sortedProducts;
  }
}
