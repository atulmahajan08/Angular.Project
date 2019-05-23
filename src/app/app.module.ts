import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { routes} from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PretestComponent } from './pretest/pretest.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    RegistrationComponent,
    ContactsComponent,
    PretestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
