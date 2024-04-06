import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperatorsComponent } from './components/basic-operators/basic-operators.component';
import { MapToComponent } from './components/map-to/map-to.component';

const routes: Routes = [
  {path:"basicOperators",component:BasicOperatorsComponent},
  {path:"mapto", component:MapToComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
