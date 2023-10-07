import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIconsModule } from '@ng-icons/core';
import { matSend } from '@ng-icons/material-icons/baseline';
import { simpleNasa } from '@ng-icons/simple-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({matSend, simpleNasa }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
