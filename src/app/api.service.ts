import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Value } from './value';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url=" https://fakestoreapi.com/products";

  constructor(private fake:HttpClient,private home:HttpClient) { }

  getProduct(){
    return this.fake.get<any[]>(this.api_url)
    .pipe(map((response:any)=>{
      return response;
    }))
  }
  getHome():Observable<Value[]>{
    return this.home.get<Value[]>(this.api_url);
  }
  getHomeData(id):Observable<Value[]>{
    return this.home.get<Value[]>(`${this.api_url}/${id}`);
  }
  
}
