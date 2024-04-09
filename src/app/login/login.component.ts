import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startLogin } from '../store/login.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup

  constructor(public fb:FormBuilder, public store:Store<any>, private router:Router){
    this.loginForm = this.fb.group({
      username:["",Validators.required],
      password:["", Validators.required]
    })
    this.store.select("login").subscribe((res)=>{
      console.log(res.userDet[0]);
      if(res.userDet[0] && this.loginForm.controls?.['password'].status == "VALID" && this.loginForm.controls?.['username'].status == "VALID"){
        window.localStorage.setItem("id",res.userDet[0].id)
        this.router.navigate(["/home"])
      }
      
    })
  }

  login(){
    console.log(this.loginForm.controls);
    
    var users = {
      username:this.loginForm.value.username as string,
      password:this.loginForm.value.password as string
    }
    this.store.dispatch(startLogin({userData:users}))
  }
}
