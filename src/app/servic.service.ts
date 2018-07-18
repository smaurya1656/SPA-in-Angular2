import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {employee} from "./route/route.component";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServicService {
private url = './assets/data.json';
  constructor(private http:HttpClient) { }


  getConfig(): any {
    return this.http.get(this.url);
  }

  showConfig() {
    // this.servicService.getConfig()
    //   .subscribe(data => this.config = {
    //
    //   });
  }

}
