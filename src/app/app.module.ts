///<reference path="../../node_modules/@angular/common/http/src/module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './route/home/home.component';
import {RouterModule,Routes} from "@angular/router";
import { PagenotfoundComponent } from './route/home/pagenotfound/pagenotfound.component';
import {HttpClientModule} from "@angular/common/http";
import {ServicService} from "./servic.service";

const routes = [
  {
    path: 'route',
    component: RouteComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   {
     path: '**',
     component:PagenotfoundComponent
   }

];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    HomeComponent,
    PagenotfoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [ServicService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
