import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';

@NgModule({
  declarations: [
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CustomValidatorDirective
  ]
})
export class SharedModule { }