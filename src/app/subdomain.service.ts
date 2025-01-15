import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SubdomainService {
  getSubdomain(): string | null {
    // Get the hostname without the port number
    const host = window.location.hostname; // e.g., 'john.localhost'
    const parts = host.split('.'); // Split into parts by '.'
    console.log(parts);
     // Extract the subdomain for production (e.g., john.xyz.com)
     if (parts.length > 2) {
      return parts[0]; // Subdomain is the first part
    }

    // Extract the subdomain for local development (e.g., john.localhost)
    if (parts.length === 2 && parts[1] === 'localhost') {
      return parts[0]; // Subdomain is the first part
    }
    
    return null; // No subdomain
  }
}
