import { Component } from '@angular/core';
import { ProductSchema } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: String;

  productList: ProductSchema[] = [
    {
      productImage: "../../assets/images/iphone15.jpg",
      productName: "Apple Iphone 15",
      productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime saepe laborum autem ut eum dicta aliquid quis distinctio alias.",
      productPrice: 70000,
      productCategory: "Electronics"
    },
    {
      productImage: "../../assets/images/iphone15pro.jpg",
      productName: "Apple Iphone 15 Pro",
      productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime saepe laborum autem ut eum dicta aliquid quis distinctio alias.",
      productPrice: 120000,
      productCategory: "Electronics"
    },
    {
      productImage: "../../assets/images/s24.jpg",
      productName: "Samsung Galaxy S24",
      productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime saepe laborum autem ut eum dicta aliquid quis distinctio alias.",
      productPrice: 80000,
      productCategory: "Electronics"
    },
    {
      productImage: "../../assets/images/s24-ultra.jpg",
      productName: "Samsung Galaxy S24",
      productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime saepe laborum autem ut eum dicta aliquid quis distinctio alias.",
      productPrice: 150000,
      productCategory: "Electronics"
    }
  ]

  productName: String = "Mobile";
  constructor() {
    this.title = "My Store";
  }

  onClickSubmit() {
    console.log(this.productName)
  }

  addNewProduct(product: ProductSchema) {
    this.productList.push(product);
  }
}
