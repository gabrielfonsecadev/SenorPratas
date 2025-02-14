import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {
  products: any;

  constructor(private http: HttpClient) {

  }

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
}
