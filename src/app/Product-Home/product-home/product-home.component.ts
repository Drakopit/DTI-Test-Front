import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { DataService } from 'src/app/Service/data.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.sass']
})
export class ProductHomeComponent implements OnInit {

  constructor(private productService: ProductService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  public displayedColumns: string[] = ['Id', 'Name', 'Count', 'Value'];
  public productList = new Array<Product>();
  public productSeach = new Array<Product>();
  public productTerm: string = "";

  public getAllProduct(): any {
       this.productService.getAll().subscribe(
         (response: any) => {
           this.productList = response;
        },
        (error: any) => {
          console.dir(error);
        });
  }

  public getProduct(value: any): void {
    console.log(value);
  }

  public insertProduct(): void {
    let pro: any;
    this.dataService.setProduct(pro, true);
    this.router.navigateByUrl("/app-product-crud");
  }

  public editProduct(value: Product): void {
    this.dataService.setProduct(value, true);
    this.router.navigateByUrl("/app-product-crud");
  }
  
  public deleteProduct(value: Product): void {
    this.productService.delete(value);
  }

  public getAllProductSearch(search: any): any {
    console.log(search);
    this.getAllProduct();
    this.productSeach = this.filterArray(search, this.productList);
  }

  private filterArray(value: string, arr: Product[]): any {
    let list = [];
    for (let item of arr) {
      if (value.toLowerCase() == item.name.toString().toLowerCase()) {
        list.push(item);
      };
    }
    return list;
  }
}
