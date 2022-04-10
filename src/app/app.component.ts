import { Component } from '@angular/core';
import { Product } from './Model/Product';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  constructor() {
  }  
}
