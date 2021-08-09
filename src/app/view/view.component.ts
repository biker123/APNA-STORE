import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  homeDetails;
  constructor(private Homeget:ApiService) { }

  ngOnInit(): void {
    this.Homeget.getHome().subscribe(parameter=>{
      this.homeDetails=parameter;
      console.log(this.homeDetails);
    })
  }

}
