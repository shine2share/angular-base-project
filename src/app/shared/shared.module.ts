import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AComponent } from "./components/a/a.component";
import { BComponent } from "./components/b/b.component";
import { ADirective } from "./directives/a.directive";
import { BDirective } from "./directives/b.directive";
import { APipe } from "./pipes/a.pipe";
import { BPipe } from "./pipes/b.pipe";

const THIRD_MODULES = [RouterModule, ReactiveFormsModule];
const COMPONENTS = [ AComponent, BComponent];
const PIPES = [ APipe, BPipe];
const DIRECTIVES = [ ADirective, BDirective];

@NgModule({
  declarations: [ ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [
    CommonModule, ...THIRD_MODULES
  ],
  exports: [CommonModule, ...THIRD_MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  providers: []
})
export class ShareModule { }
