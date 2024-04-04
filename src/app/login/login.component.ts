import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startLogin } from '../store/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup

  constructor(public fb:FormBuilder, public store:Store<any>){
    this.loginForm = this.fb.group({
      username:["",Validators.required],
      password:["", Validators.required]
    })
    this.store.select("login").subscribe((res)=>{
      console.log(res.userDet[0]);
      
    })
  }

  login(){
    var users = {
      username:this.loginForm.value.username as string,
      password:this.loginForm.value.password as string
    }
    this.store.dispatch(startLogin({userData:users}))
  }
}
