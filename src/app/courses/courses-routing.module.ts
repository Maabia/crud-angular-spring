import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourcesComponent } from './cources/cources.component';

const routes: Routes = [
  { path: '', component: CourcesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
