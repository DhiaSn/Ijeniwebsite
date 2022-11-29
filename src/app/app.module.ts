import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';
import { LottieAnimationViewModule } from 'ng-lottie';

export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    LottieAnimationViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
