import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ToyCartService } from '../toy-cart.service';
import { Toy } from '../toy-list/Toy';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Toy[]>;

  constructor(private cart: ToyCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
