import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductCrudComponent } from './Product-Crud/product-crud/product-crud.component';
import { ProductHomeComponent } from './Product-Home/product-home/product-home.component';

const routes: Routes = [
  { path: '*', redirectTo: '/app-product-home', pathMatch: 'full' },
  { path: 'app-product-home', component: ProductHomeComponent },
  { path: 'app-product-crud', component: ProductCrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
