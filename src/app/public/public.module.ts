import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import {FeatureModule} from '../features/feature.module';
import { PublicRoutingModule } from './public-routing';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    CoreModule,
    FeatureModule,
    PublicRoutingModule
  ],
})
export class PublicModule { }
