import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ngx-Bootstrap
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Component
import { ProductCrudComponent } from './Product-Crud/product-crud/product-crud.component';
import { ProductHomeComponent } from './Product-Home/product-home/product-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCrudComponent,
    ProductHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
