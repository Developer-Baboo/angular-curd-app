import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './Pages/Partials/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    StudentCreateComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
