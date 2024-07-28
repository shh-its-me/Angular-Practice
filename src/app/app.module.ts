import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchProductPipe } from './search-product.pipe';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    NavbarComponent,
    ProductsComponent,
    CustomPipePipe,
    SearchProductPipe,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
