import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productList;

  homeData;
  
  
  constructor(private api:ApiService,private cart:CartService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        });
       })
       

       this.activeRoute.paramMap.subscribe(idInfo=>{
        console.log(idInfo,"idInfo");
        this.api.getHomeData(idInfo.get("id")).subscribe(parameter=>{
          this.homeData=parameter;
          console.log("homeData",this.homeData);
        });
       })
   }

  addtocart(item: any){
    this.cart.addtoCart(item);
   }
  
}