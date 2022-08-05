import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';
import { appInitializerProviders } from './core/initializers';
import { CoreModule } from './core/core.module';
import { PublicModule } from './public/public.module';
import { ShareModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    PublicModule,
    ShareModule,
    BrowserAnimationsModule
  ],
  providers: [
    httpInterceptorProviders,
    appInitializerProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
