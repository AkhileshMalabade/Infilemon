import { Component } from '@angular/core';
import { SubdomainService } from './subdomain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Infilemon';
  constructor(private router: Router, private subdomainService: SubdomainService) {}
  subdomain: any= '';
  ngOnInit() {
    const subdomain = this.subdomainService.getSubdomain();
    this.subdomain = subdomain;
    
  }
}
