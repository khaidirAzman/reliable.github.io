import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
