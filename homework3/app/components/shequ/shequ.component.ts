import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    console.log(this.router.snapshot.queryParams['id']);
    this.http.get('/api/shequ').subscribe((data)=>{
      this.courses = data;
    })
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });    
  }

}
