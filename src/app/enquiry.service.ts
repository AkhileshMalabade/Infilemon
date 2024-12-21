import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http: HttpClient) {}

  sendEnquiry(data: { name: string; email: string; message: string }) {
      return this.http.post('/.netlify/functions/sendEmail', data);
  }
}
