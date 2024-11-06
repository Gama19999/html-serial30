import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcolme/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, title: 'Serial30 | Inicio' },
  { path: 'projects', component: ProjectsComponent, title: 'Serial30 | Proyectos' },
  { path: 'about', component: AboutComponent, title: 'Serial30 | AfterBeta' },
  { path: 'contact', component: ContactComponent, title: 'Serial30 | Contacto' },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
