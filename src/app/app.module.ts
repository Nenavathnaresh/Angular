import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleMethodsComponent } from './life-cycle-methods/life-cycle-methods.component';
import { LifeComponent } from './life/life.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleMethodsComponent,
    LifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
