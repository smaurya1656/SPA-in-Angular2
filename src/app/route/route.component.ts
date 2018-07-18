import { Component, OnInit } from '@angular/core';
import {ServicService} from "../servic.service";


@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
   public employ=[];
  constructor(private myService: ServicService) {

  }

  ngOnInit() {
     this.myService.getConfig()
     .subscribe(data => {
       this.employ = data;
     });
  }



}
export interface employee{
//used this to declare type bt as we did any no need of this
  id: number,
  gender: string,
  firstname: string,
  lastname: string,
  email: string,
  age: number
}
