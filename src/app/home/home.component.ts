import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public router:Router, public ls:LoginService){}
  logout(){
    window.localStorage.removeItem("id")
    this.router.navigate(["/login"])
  }

  login(){
  this.router.navigate(["/login"])
  }
}
