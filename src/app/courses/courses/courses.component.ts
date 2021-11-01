import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // variável 'courses' inicializada aqui
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog
    ) {
   // this.courses = []; Podemos inicializar a variável aqui tbm
   this.courses$ = this.CoursesService.list()
   .pipe(
     catchError(error => {
       this.onError('Erro ao carregar cursos!');
       return of([])
     })
   );

  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
    // Antes era inicializado dentro do ngOnInit
  }

}
