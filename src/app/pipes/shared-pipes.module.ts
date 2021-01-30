import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from './custom-date.pipe';
import { CustomCompletePipe } from './custom-complete.pipe';



@NgModule({
  declarations: [CustomDatePipe, CustomCompletePipe],
  imports: [
    CommonModule
  ],
  exports: [CustomDatePipe, CustomCompletePipe]
})
export class SharedPipesModule { }
