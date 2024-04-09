import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endApi:string = "http://localhost:3000/loginUsers"
  constructor(public  http:HttpClient) { }

  userLogin(userData:any){
    // console.log(userData);
    
    return this.http.get(`${this.endApi}?username=${userData.username}&password=${userData.password}`)
  }

  isLoggedIn(){
    return window.localStorage.getItem('id') ? true:false ;
  }

  getAllProducts():any{
    return this.http.get("https://fakestoreapi.com/products")
  }
}
