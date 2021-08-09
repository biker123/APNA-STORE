import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FilterPipe } from './filter.pipe';
import { ViewComponent } from './view/view.component';
import { FooterComponent } from './footer/footer.component';
import { CheakoutComponent } from './cheakout/cheakout.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AddtocartComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    FilterPipe,
    ViewComponent,
    FooterComponent,
    CheakoutComponent,
    ProfileComponent,
    OrderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
