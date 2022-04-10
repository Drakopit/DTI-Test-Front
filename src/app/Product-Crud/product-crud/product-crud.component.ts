import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { DataService } from 'src/app/Service/data.service';
import { ProductService } from 'src/app/Service/product.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.sass']
})

export class ProductCrudComponent implements OnInit {
  public product!: Product;
  public create!: boolean;

  constructor(private productService: ProductService, private dataService: DataService) {}

  ngOnInit(): void {
    let object = this.dataService.getProduct()
    this.product = object.product;
    this.create = object.create;
  }

  public insertProduct(product: any): void {
    this.productService.post(this.product);
  }

  public editProduct(product: any): void {
    this.productService.put(this.product);
  }
}
