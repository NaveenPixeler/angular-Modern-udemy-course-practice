import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DividerComponent],
  exports: [DividerComponent]
})
export class SharedModule { }