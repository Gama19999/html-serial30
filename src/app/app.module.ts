import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcolme/welcome.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { S30logoComponent } from './s30logo/s30logo.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ItemComponent } from './projects/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShortcutsComponent,
    S30logoComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
