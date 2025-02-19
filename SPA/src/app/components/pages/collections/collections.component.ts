import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {
  products: any;
  sortBy: string = 'relevance';
  collectionName: string;
  categoryName: string;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private _produtosService: ProductsService
  ) {
    const params = this.route.snapshot.params;
    this.collectionName = params['collection'];
    this.categoryName = params['category'];

    const capitalizedCollection = this.collectionName.charAt(0).toUpperCase() + this.collectionName.slice(1);
    if (this.categoryName) {
      const capitalizedCategory = this.categoryName.charAt(0).toUpperCase() + this.categoryName.slice(1);
      this.title = `${capitalizedCollection} / ${capitalizedCategory}`;
    } else {
      this.title = capitalizedCollection;
    }
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this._produtosService.listCollections(this.collectionName,
      this.categoryName || undefined).subscribe(res => {
        this.products = res;
      })
  }

  sortProducts() {
    const products = [...this.products];

    switch (this.sortBy) {
      case 'priceAsc':
        return this.products = products.sort((a, b) => a.preco - b.preco);
      case 'priceDesc':
        return this.products = products.sort((a, b) => b.preco - a.preco);
      case 'newest':
        return this.products = products.sort((a, b) =>
          new Date(b.dtUpload).getTime() - new Date(a.dtUpload).getTime());
      case 'relevance':
        return this.products = this.sortByRelevance(products);
      default:
        return this.products = products;
    }
  }

  private sortByRelevance(products: any[]): any[] {
    if (this.categoryName === "") return products;

    return products
      .map(product => {
        const productName = product.nome.toLowerCase();
        let score = 0;

        // A palavra-chave aparece no nome do produto?
        // if (productName.includes(this.categoryName)) {
        //   score += 10; // Aumenta a pontuação se a palavra estiver presente
        // }

        // // A palavra-chave está no início do nome? (Maior Relevância)
        // if (productName.startsWith(this.categoryName)) {
        //   score += 20;
        // }

        return { ...product, score };
      })
      .sort((a, b) => b.score - a.score);
  }
}
