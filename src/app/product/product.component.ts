import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:any
  isInCart:boolean = false;

  constructor(public cs:CartService){}

  ngOnInit(){
    this.cs.cartSubject.subscribe((cartItems:any)=>{
      var x = cartItems.filter((item:any)=>{
        return item.id === this.product.id ? true : false 
      })
      if(x.length !== 0){this.isInCart = true}
      else{
        this.isInCart = false 
      }
    })
  }

  addProductToCart(product:any){
    this.cs.addToCart(product)
  }
}
