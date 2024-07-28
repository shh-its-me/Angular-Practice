import { Component, OnInit, Input } from '@angular/core';
import { ProductSchema } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  search: string = "";
  @Input() allProducts !: ProductSchema[];
  constructor() { }

  ngOnInit(): void {
  }

  // // Function for Two way data binding
  //   onSearch(event: any){
  //     // console.log(event.target.value);
  //     this.search = event.target.value;
  //   }

  // product: ProductSchema = {
  //   productImage: "../../assets/images/iphone.jpg",
  //   productName: "Apple Iphone",
  //   productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime saepe laborum autem ut eum dicta aliquid quis distinctio alias.",
  //   productPrice: 70000,
  //   productCategory: "Electronics"
  // }

  // checkAvailable() {
  //   return this.productList.length === 0;
  // }

}

