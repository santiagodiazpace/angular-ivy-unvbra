import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toy } from './toy-list/Toy';

@Injectable({
  providedIn: 'root'
})
export class ToyCartService {

  private _cartList: Toy[] = [];

  cartList: BehaviorSubject<Toy[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(toy: Toy) {
    let item: Toy = this._cartList.find((v1) => v1.name == toy.name);
    if (!item) {
      this._cartList.push({... toy});
    }
    else {
      item.quantity += toy.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }


}
