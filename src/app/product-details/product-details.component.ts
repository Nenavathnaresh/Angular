import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productdet:any;
  productObj:any;
  constructor(public aR:ActivatedRoute){}
  ngOnInit(){
    this.aR.params.subscribe((res)=>{
      // console.log(res);
      this.productdet = res['pTitle']
    })

    this.aR.queryParams.subscribe((data)=>{
      console.log(data);
      this.productObj = data
    })
  }
}
