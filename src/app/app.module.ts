import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import Aura from '@primeng/themes/aura';
import { ToastModule } from 'primeng/toast';
import { providePrimeNG } from 'primeng/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcolme/welcome.component';
import { LinksComponent } from './shared/links/links.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './about/privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { PTitleComponent } from './shared/p-title/p-title.component';
import { ToTopComponent } from './shared/to-top/to-top.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TextPipe } from './shared/pipes/text.pipe';
import { FlipImgComponent } from './shared/flip-img/flip-img.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LinksComponent,
    ProjectListComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    AccountComponent,
    PTitleComponent,
    ToTopComponent,
    FooterComponent,
    TextPipe,
    FlipImgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: { darkModeSelector: 'none' }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
