import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems:any[] = [];

  constructor(public cs:CartService){}

  ngOnInit(){
    this.cs.cartSubject.subscribe((cartItems:any)=>{
      this.cartItems = cartItems
      console.log(cartItems);
      
    })
  }
}
