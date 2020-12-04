import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
  {
  name: "La Porter",
  type: "Porter",
  price: 20,
  stock: 5,
  image: "assets/img/porter.png",
  clearance: false,
  quantity: 0,
  },
  {
    name: "La Roja",
    type: "Roja",
    price: 15,
    stock: 10,
    image: "assets/img/roja.jpg",
    clearance: false,
    quantity: 0,
  },
  {
  name: "La Rubia",
  type: "Rubia",
  price: 10,
  stock: 3,
  image: "assets/img/rubia.jpg",
  clearance: true,
  quantity: 0,
  },
  {
    name: "La IPA",
    type: "IPA",
    price: 25,
    stock: 6,
    image: "assets/img/ipa.jpg",
    clearance: true,
    quantity: 0,
    },
    {
      name: "La Old Ale",
      type: "Old Ale",
      price: 40,
      stock: 0,
      image: "assets/img/ale.jpg",
      clearance: false,
      quantity: 0,
      },
  {
    name: "La Negra",
    type: "Negra",
    price: 30,
    stock: 0,
    image: "assets/img/negra.jpg",
    clearance: false,
    quantity: 0,
    }
  ];



  constructor(private cart: BeerCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(beer): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }

}
