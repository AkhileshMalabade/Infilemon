import { Component } from '@angular/core';
import { EnquiryService } from '../../enquiry.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  openWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=919579801138", "_blank");
  }
  constructor(private enquiryService: EnquiryService) {}

    onSubmit(form: any) {
        this.enquiryService.sendEnquiry(form.value).subscribe({
            next: () => alert('Your enquiry has been sent!'),
            error: (err) => alert('An error occurred: ' + err.message),
        });
    }
}
