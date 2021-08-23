import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 0,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 1,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 2,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 3,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 4,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() { }
  getAll() {
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  }

  findById(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
  }
  updateById(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }
  deleteById(id: number) {
    let productList = [];
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id != id){
        productList.push(this.products[i])
      }
    }
    this.products = productList;
    return this.products;
  }
}
