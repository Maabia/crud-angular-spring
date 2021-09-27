import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // variável 'courses' inicializada aqui
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'front-end'
    }
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
   // this.courses = []; Podemos inicializar a variável aqui tbm
  }

  ngOnInit(): void {
    // Antes era inicializado dentro do ngOnInit
  }

}
