import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Home Page'},
    { path: 'contact-page', component: ContactPageComponent, title: 'Contact Page'},
    { path: 'about-page', component: AboutPageComponent, title: 'About Page'},
    { path: 'navbar', component: NavbarComponent, title: 'Nav Bar'}
];
