import { Component } from '@angular/core';
import { ShoutingService } from '../shouting.service';

@Component({
  selector: 'app-brother2',
  templateUrl: './brother2.component.html',
  styleUrl: './brother2.component.css'
})
export class Brother2Component {
firstname:any;

constructor(public ss:ShoutingService){}
callSub(){
  this.ss.shSub.next(this.firstname)
}
}
