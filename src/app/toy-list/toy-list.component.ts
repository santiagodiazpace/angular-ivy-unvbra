import { Component, OnInit } from '@angular/core';
import { ToyCartService } from '../toy-cart.service';
import { Toy } from './Toy';

@Component({
  selector: 'app-toy-list',
  templateUrl: './toy-list.component.html',
  styleUrls: ['./toy-list.component.scss']
})
export class ToyListComponent implements OnInit {

  toys: Toy[] = [
  {
  name: "Muñeca",
  type: "Plástico",
  price: 20,
  stock: 5,
  image: "assets/img/munieca.jpg",
  clearance: false,
  quantity: 0,
  },
  {
    name: "Dinosaurio",
    type: "Plástico",
    price: 15,
    stock: 10,
    image: "assets/img/dino.jpg",
    clearance: false,
    quantity: 0,
  },
  {
  name: "Auto",
  type: "Plástico",
  price: 10,
  stock: 3,
  image: "assets/img/auto.jpg",
  clearance: true,
  quantity: 0,
  },
  {
    name: "Dino",
    type: "Inflable",
    price: 25,
    stock: 6,
    image: "assets/img/inflable.jpg",
    clearance: true,
    quantity: 0,
    },
    {
      name: "Casita",
      type: "Plástico",
      price: 40,
      stock: 0,
      image: "assets/img/casa.jpg",
      clearance: false,
      quantity: 0,
      },
  {
    name: "Tren",
    type: "Plástico",
    price: 30,
    stock: 0,
    image: "assets/img/tren.jpg",
    clearance: false,
    quantity: 0,
    }
  ];



  constructor(private cart: ToyCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(toy): void {
    this.cart.addToCart(toy);
    toy.stock -= toy.quantity;
    toy.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }

}
