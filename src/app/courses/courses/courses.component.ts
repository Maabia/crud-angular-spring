import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // variável 'courses' inicializada aqui
  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor( private CoursesService: CoursesService) {
   // this.courses = []; Podemos inicializar a variável aqui tbm
   this.courses = this.CoursesService.findAll();

  }

  ngOnInit(): void {
    // Antes era inicializado dentro do ngOnInit
  }

}
