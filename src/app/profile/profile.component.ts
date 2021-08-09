import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  getdataValue;

  constructor(private getitem:FormService,private router:Router) { }

  ngOnInit(): void {
    this.getdataValue=this.getitem.getData();
    console.log(this.getdataValue);
  }
  logout()
  {
    this.getitem.getDestroy();
    this.router.navigate(['/login']);
  }

}
