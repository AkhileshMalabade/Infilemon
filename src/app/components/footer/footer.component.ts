import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  openWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=919579801138", "_blank");
  }
}
