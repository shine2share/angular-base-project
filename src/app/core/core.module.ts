import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./utils/auth-guard";

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
      AuthGuard
    ]
  })
  export class CoreModule { }