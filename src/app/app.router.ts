import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PretestComponent } from './pretest/pretest.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';


export const router: Routes = [
    {path: '', redirectTo: 'app', pathMatch:'full'},
    {path:'about', component: AboutComponent},
    {path: 'pretest', component: PretestComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'home', component: HomeComponent},
    {path: 'registration', component: RegistrationComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);