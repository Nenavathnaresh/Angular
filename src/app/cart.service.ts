import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any = []
  cartSubject = new Subject()

  constructor() { }

  addToCart(product:any){
    this.cartItems.push(product)
    this.cartSubject.next(this.cartItems)
    // console.log(this.cartItems);
    
  }
}
