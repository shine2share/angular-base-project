import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: []
})
export class ShareModule { }
