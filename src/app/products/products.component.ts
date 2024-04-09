import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:any[] = []
  constructor(public ls:LoginService){}
  ngOnInit()  {
    this.ls.getAllProducts().subscribe((res:any)=>{
      this.products= res
      console.log(res);
      
    })
  }
}
