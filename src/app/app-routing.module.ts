import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { productGuard } from './product.guard';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:"full"},
  {path:"home", component:HomeComponent,
  children:[
  {path:"products", component:ProductsComponent, canActivate:[productGuard]}

  ]
},
  {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
