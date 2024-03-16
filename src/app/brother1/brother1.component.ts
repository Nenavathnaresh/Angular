import { Component } from '@angular/core';
import { ShoutingService } from '../shouting.service';

@Component({
  selector: 'app-brother1',
  templateUrl: './brother1.component.html',
  styleUrl: './brother1.component.css'
})
export class Brother1Component {

  constructor(public ss:ShoutingService){}

  b2firstname:any;

  ngOnInit(){
    this.ss.shSub.subscribe((res)=>{
      this.b2firstname = res;
    })
  }
}
