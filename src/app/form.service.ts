import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { Signup,Login } from './value';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  sign_url="https://nodeprojectapi.herokuapp.com/register";
  log_url="https://nodeprojectapi.herokuapp.com/login";


  constructor(private http:HttpClient) { }

  signData(formValue):Observable<Signup[]>
  {
    return this.http.post<Signup[]>(this.sign_url,formValue).pipe(catchError(this.errorHandler));
  }
  logData(formValue):Observable<Login[]>
  {
    return this.http.post<Login[]>(this.log_url,formValue).pipe(catchError(this.errorHandler));
  }


  setData(firstname:string,lastname:string,adminId:string,token:string)
  {
      window.localStorage.setItem('firstname',firstname);
      window.localStorage.setItem('lastname',lastname);
      window.localStorage.setItem('token',token);
      window.localStorage.setItem('adminId',adminId);
  }
  // retrive method:-
  getData()
  {
    const allData=[];
    let value={
      firstname:window.localStorage.getItem('firstname'),
      lastname:window.localStorage.getItem('lastname'),
      adminId:window.localStorage.getItem('adminId'),
    }
    allData.push(value);
    return allData;
  }
  getToken()
  {
    return window.localStorage.getItem('token');
  }
  getDestroy(){
    return window.localStorage.clear();
  }

  // error handling:-and .pipe method:-
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
