import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from './shared/shared/shared.module';
import { ROOT_REDUCER } from './store/reducers/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCER),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
