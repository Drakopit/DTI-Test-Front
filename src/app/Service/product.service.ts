import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Product } from '../Model/Product';

const BaseUri = "https://localhost:44334/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  public getAll(): any {
    return this.http.get(`${BaseUri}/Product`);;
  }

  public getById(id: Number): any {
    return this.http.get(`${BaseUri}/Product/${id}`);
  }

  public post(product: Product): any {
    console.log(product);
    this.http.post(`${BaseUri}/Product`, product);
  }

  public put(product: Product): any {
    this.http.put(`${BaseUri}/Product`, product);
  }

  public delete(product: Product): any {
    this.http.delete(`${BaseUri}/Product/${product.id}`);
  }
}