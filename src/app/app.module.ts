import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcolme/welcome.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShortcutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
