import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductSchema } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() sendDataEvent = new EventEmitter<any>();

  newProduct: ProductSchema = {
    productName: '',
    productDescription: '',
    productCategory: '',
    productPrice: 0
  };
  constructor() { }

  ngOnInit(): void {
  }
  addNewProduct() {
    this.sendDataEvent.emit(this.newProduct);
  }
}
