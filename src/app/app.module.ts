import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ServicesComponent } from './myservices/myservices.component';
import { IntroServicesComponent } from './intro-services/intro-services.component';
import { HeaderServicesComponent } from './header-services/header-services.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MyresultsComponent } from './myresults/myresults.component';
import { MytestimonialsComponent } from './mytestimonials/mytestimonials.component';
import { BookacallComponent } from './bookacall/bookacall.component';
import { FaqComponent } from './faq/faq.component';
import { FooterServicesComponent } from './footer-services/footer-services.component';
import { AboutServicesComponent } from './about-services/about-services.component';
import { WhymeComponent } from './whyme/whyme.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    IntroServicesComponent,
    HeaderServicesComponent,
    MyprojectsComponent,
    MyresultsComponent,
    MytestimonialsComponent,
    BookacallComponent,
    FaqComponent,
    FooterServicesComponent,
    AboutServicesComponent,
    WhymeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
