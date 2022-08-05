import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/utils/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent, data: { title: 'Home' }, children:
    [
      {
        path: '', loadChildren: () => import('../features/feature.module').then(m => m.FeatureModule)
      }
    ]
  },
  {
    path: 'login', component: LoginComponent, data: { title: 'Login' }
  },
  {
    path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
