import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsComponent } from './components/terms/terms.component';
import { RefundComponent } from './components/refund/refund.component';
import { CareerComponent } from './components/career/career.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    PortfolioComponent,
    PrivacypolicyComponent,
    TermsComponent,
    RefundComponent,
    CareerComponent,
    LandingpageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
