import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Home Page'},
    { path: 'contact-page', component: ContactPageComponent, title: 'Contact Page'},
    { path: 'about-page', component: AboutPageComponent, title: 'About Page'},
    { path: 'navbar', component: NavbarComponent, title: 'Nav Bar'},
    { path: 'students', component: StudentPageComponent, title: 'Student Lists'},
    { path: 'students/create', component: StudentCreateComponent, title: 'Student Create'},
    { path: 'students/:id/edit', component: StudentEditComponent, title: 'Student Edit'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
