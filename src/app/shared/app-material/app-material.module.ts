import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// ESSE MÓDULO NÃO É PARA CRIAR COMPONENTES E ORGANIZAR A APLICAÇÃO ESIM PARA ECONOMIZAR EM ALGUMASLINHAS DE CÓDIGO. POR ESSE MOTIVO, ELE NÃO TEM O imports: [] E NEM DAS declarations: [].
@NgModule({
  exports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ]

})
export class AppMaterialModule { }
