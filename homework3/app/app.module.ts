import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { HomeComponent } from './components/home/home.component';

import { CommonService} from './services/common.service'
import {RouterModule,Router} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    TongbuComponent,
    ShequComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'tongbu/:courseId',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:ShequComponent},
    ]),
    HttpClientModule, 
  ],
   providers: [{provide:CommonService,useClass:CommonService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
