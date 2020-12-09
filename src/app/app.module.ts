import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyListComponent } from './toy-list/toy-list.component';

import { FormsModule } from '@angular/forms';
import { StoreToysComponent } from './store-toys/store-toys.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { StoreAboutComponent } from './store-about/store-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    StoreAboutComponent,
    StoreToysComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
