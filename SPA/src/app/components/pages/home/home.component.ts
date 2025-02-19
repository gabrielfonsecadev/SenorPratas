import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  novidades: any;
  hover: boolean = false;
  hoveredImageId: number | null = null;

  constructor(private http: HttpClient,
    private _productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getNovidades();
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
    this._productsService.listNovidades().subscribe((response: any) => {
      this.novidades = response;
    });
  }

  getProducts() {
    this._productsService.list().subscribe((response: any) => {
      this.products = response;
    });
  }
}
