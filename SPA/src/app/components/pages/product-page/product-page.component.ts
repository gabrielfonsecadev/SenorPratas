import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  product: any;
  productId: number = 0;
  quantidade: number = 1;
  selectedImage: string = '';
  size: string = '';
  cep: string = '';
  menuToggle: string = 'Descrição';

  constructor(
    private route: ActivatedRoute,
    private _service: ProductsService
  ) { }

  ngOnInit(): void {
    // Obtém o ID do produto a partir dos parâmetros da rota
    this.route.params.subscribe(params => {
      this.productId = params['id']; // Ex.: rota: /product/2
      this.loadProduct();
    });
  }

  loadProduct(): void {
    // Supondo que o service possua um método getById para buscar o produto
    this._service.get(this.productId).subscribe(res => {
      this.product = res;
      // Se houver imagens, define a primeira como imagem selecionada
      if (this.product && this.product.imagens && this.product.imagens.length > 0) {
        this.selectedImage = this.product.imagens[0].url;
      }
    });
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }

  selectSize(size: string): void {
    this.size = size;
    console.log(this.size === size);
  }

  decrement(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  increment(): void {
    this.quantidade++;
  }
}
