import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcolme/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './about/privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, title: 'Serial30 | Inicio' },
  { path: 'projects', component: ProjectListComponent, title: 'Serial30 | Proyectos' },
  { path: 'about', component: AboutComponent, title: 'Serial30 | Información' },
  { path: 'contact', component: ContactComponent, title: 'Serial30 | Contacto' },
  { path: 'account', component: AccountComponent, title: 'Serial30 | Cuenta' },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Serial30 | Política de privacidad' },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
