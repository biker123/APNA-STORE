import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myForm:FormGroup;
 

  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      fullname:new FormControl(null),
      email:new FormControl(null),
      phone:new FormControl(null),
      message:new FormControl(null)
    })
  }
dataSubmit()
{
  console.log(this.myForm.value);
  alert('thanks for contacting us');
  
}
}
