import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { CheakoutComponent } from './cheakout/cheakout.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'addtocart',component:AddtocartComponent},
  {path:'products/:id',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'view',component:ViewComponent},
  {path:'cheakout',component:CheakoutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'order',component:OrderComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
