import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SubdomainService {
  getSubdomain(): string | null {
    // Get the hostname without the port number
    const host = window.location.hostname; // e.g., 'www.sampl.infilemon.com'
    
    // Split the hostname into parts by '.'
    const parts = host.split('.'); // ['www', 'sampl', 'infilemon', 'com']
    console.log(parts);
  
    // For production (e.g., 'www.sampl.infilemon.com')
    if (parts.length > 2) {
      // Ignore 'www' and extract the primary subdomain
      const subdomain = parts[0] === 'www' ? parts[1] : parts[0];
      return subdomain; // e.g., 'sampl'
    }
  
    // For local development (e.g., 'sampl.localhost')
    if (parts.length === 2 && parts[1] === 'localhost') {
      return parts[0]; // e.g., 'sampl'
    }
  
    return null; // No subdomain
  }
  
}
