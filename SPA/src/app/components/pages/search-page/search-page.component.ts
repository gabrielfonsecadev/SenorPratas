import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { CategoriasService } from '../../../services/categorias.service';
import { CollectionsService } from '../../../services/collections.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  allProducts: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';

  // Filtros
  selectedCategory = '';
  selectedGender = '';
  selectedPrice = 1000;
  sortBy = 'relevance';

  // Opções de filtros
  categories: string[] = [];
  genders: any;
  maxPrice = 2000;

  constructor(
    private productsService: ProductsService,
    private categoriasService: CategoriasService,
    private collectionsService: CollectionsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadGender();
    this.loadCategory();

    this.route.queryParamMap.subscribe(params => {
      this.searchQuery = params.get('q') || '';
      this.loadProducts();
    });
  }

  private loadProducts() {
    this.productsService.list().subscribe(res => {
      this.allProducts = res as [];

      this.applyFilters();
      this.sortProducts();
      this.calculateMaxPrice(this.allProducts);
    });
  }

  private loadGender() {
    this.categoriasService.get().subscribe(res => {
      const generos = res as any[];

      let generosArr: string[] = [];
      generos.forEach(g => {
        generosArr.push(g.nome);
      });

      this.categories = generosArr;
    });
  }

  private loadCategory() {
    this.collectionsService.get().subscribe(res => {
      const categoria = res as any[];

      let categoriasArr: string[] = [];
      categoria.forEach(c => {
        categoriasArr.push(c.nome);
      });

      this.genders = categoriasArr;
    });
  }

  private calculateMaxPrice(products: any[]) {
    if (products.length === 0) {
      this.maxPrice = 0;
      this.selectedPrice = 0;
      return;
    }
    this.maxPrice = Math.max(...products.map(p => p.preco)) + 1;
    this.selectedPrice = this.maxPrice;
  }

  filterPrice() {
    this.filteredProducts = this.allProducts.filter(product => product.preco <= this.selectedPrice);
  }

  private applyFilters(): void {
    if (!this.searchQuery) {
      this.filteredProducts = this.allProducts;
    } else {
      const lowerSearch = this.searchQuery.toLowerCase();
      this.filteredProducts = this.allProducts.filter(product => {
        const productName = product.nome.toLowerCase();
        const searchWords = lowerSearch.split(" ");
        return searchWords.some(word => productName.includes(word));
      });

      this.allProducts = this.filteredProducts;
    }
  }


  sortProducts() {
    const products = [...this.filteredProducts];

    switch (this.sortBy) {
      case 'priceAsc':
        return this.filteredProducts = products.sort((a, b) => a.preco - b.preco);
      case 'priceDesc':
        return this.filteredProducts = products.sort((a, b) => b.preco - a.preco);
      case 'newest':
        return this.filteredProducts = products.sort((a, b) =>
          new Date(b.dtUpload).getTime() - new Date(a.dtUpload).getTime());
      case 'relevance':
        return this.filteredProducts = this.sortByRelevance(products);
      default:
        return this.filteredProducts = products;
    }
  }

  private sortByRelevance(products: any[]): any[] {
    if (!this.searchQuery) return products;

    const lowerSearch = this.searchQuery.toLowerCase();

    return products
      .map(product => {
        const productName = product.nome.toLowerCase();
        let score = 0;

        // A palavra-chave aparece no nome do produto?
        if (productName.includes(lowerSearch)) {
          score += 10; // Aumenta a pontuação se a palavra estiver presente
        }

        // A palavra-chave está no início do nome? (Maior Relevância)
        if (productName.startsWith(lowerSearch)) {
          score += 20;
        }

        return { ...product, score };
      })
      .sort((a, b) => b.score - a.score);
  }

  onEnterBlur(event: any): void {
    (event.target as HTMLInputElement).blur();
  }
}
