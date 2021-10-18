import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // TEMPORÁRIO ATÉ A API SER CRIADA NO SPRING
  private readonly API = '/assets/courses.json';

  constructor( private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      tap(courses => console.log(courses))
    );
  }
}
