import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  baseUrl: string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }

  get() {
    return this._httpClient.get(`${this.baseUrl}produtos/Collections`).pipe(
      catchError(error => {
        console.error(error);
        return throwError(() => new Error(error));
      })
    );
  }
}
