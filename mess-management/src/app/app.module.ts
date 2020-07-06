import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    TopnavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
