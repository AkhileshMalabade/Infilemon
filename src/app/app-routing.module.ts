import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsComponent } from './components/terms/terms.component';
import { RefundComponent } from './components/refund/refund.component';
import { CareerComponent } from './components/career/career.component';
// import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/:service', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'privacy-policy', component: PrivacypolicyComponent },
  { path: 'terms-conditions', component: TermsComponent },
  { path: 'refund-cancelation', component: RefundComponent },
  {path: 'careers', component: CareerComponent},
  // { path: 'sitemap.xml', component: SitemapComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }