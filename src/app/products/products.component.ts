import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any = [];

  constructor(public http:HttpClient, public cs:CartService){}

  ngOnInit(){
    this.http.get("https://fakestoreapi.com/products").subscribe((products)=>{
      this.products = products
    })
  }
}
