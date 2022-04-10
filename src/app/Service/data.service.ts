import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private product!: Product;
  private create: boolean = true;
  constructor() { }

  setProduct(pro: Product, cre: boolean) {
    this.product = pro;
    this.create = cre;
  }

  getProduct() {
    return { product: this.product, create: this.create }
  }
}
