import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BasicOperatorsComponent } from './components/basic-operators/basic-operators.component';
import { MapToComponent } from './components/map-to/map-to.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicOperatorsComponent,
    MapToComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
