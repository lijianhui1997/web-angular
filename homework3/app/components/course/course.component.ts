import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseId:number;
  courses;
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  
  ngOnInit() {
    this.http.get('/api/courses1').subscribe((data)=>{
      this.courses = data;
    })
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });
  }



}
