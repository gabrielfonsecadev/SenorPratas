import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string = `${environment.apiUrl}produtos/Produtos`;

  constructor(private _httpClient: HttpClient) { }

  list() {
    return this._httpClient.get(`${this.baseUrl}`).pipe(
      catchError(error => {
        console.error(error);
        return throwError(() => new Error(error));
      })
    );
  }

  listNovidades() {
    return this._httpClient.get(`${this.baseUrl}/novidades`).pipe(
      catchError(error => {
        console.error(error);
        return throwError(() => new Error(error));
      })
    );
  }

  listCollections(collectionName: string, categoryName?: string) {
    const rota = categoryName ? `${collectionName}/${categoryName}` : collectionName;
    return this._httpClient.get(`${this.baseUrl}/collections/${rota}`).pipe(
      catchError(error => {
        console.error(error);
        return throwError(() => new Error(error));
      })
    );
  }
}
