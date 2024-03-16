import { Component } from '@angular/core';
import { ShoutingService } from '../shouting.service';

@Component({
  selector: 'app-brother3',
  templateUrl: './brother3.component.html',
  styleUrl: './brother3.component.css'
})
export class Brother3Component {

  constructor(public ss:ShoutingService){}

  b2firstname:any;

  ngOnInit(){
    this.ss.shSub.subscribe((res)=>{
      this.b2firstname = res;
    })
  }
}
