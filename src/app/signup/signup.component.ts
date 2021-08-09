import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormService } from '../form.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  signupDetails;
  signupResponse;
  errorMsg;
  errorText;

  constructor(private sign:FormService) { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required,]),
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    })
  }
  dataSubmit()
  {
    console.log(this.signupForm.value);
    this.signupDetails=this.signupForm.value;
    this.sign.signData(this.signupDetails).subscribe(parameter=>{
      this.signupResponse=parameter;
      console.log("Response",this.signupResponse);
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
