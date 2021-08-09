import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginDetails;
  loginResponse;
  errorText;
  errorMsg;

  constructor(private login:FormService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    })
  }
  dataSubmit()
  {
    console.log(this.loginForm.value);
    this.loginDetails=this.loginForm.value;
    this.login.logData(this.loginDetails).subscribe(parameter=>{
      this.loginResponse=parameter;
      console.log("Resoponse",this.loginResponse);
      alert(this.loginResponse.message);
      // storage works:-
      this.login.setData(this.loginResponse.data.firstname,
        this.loginResponse.data.lastname,
        this.loginResponse.data.token,
        this.loginResponse.data.adminId);
        this.router.navigate(['/profile']);
    },
    (error)=>
    {
      this.errorText=error;
      console.log(this.errorText);
      this.errorMsg=this.errorText.error.message;
      console.log("message",this.errorMsg);
    })
  }
}
