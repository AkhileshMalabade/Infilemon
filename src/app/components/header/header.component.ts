import { Component, HostListener } from '@angular/core';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    if (window.pageYOffset > 0) {
      navbar?.classList.add('scrolled');
      logo?.classList.add('scrolledlogo');
    } else {
      navbar?.classList.remove('scrolled');
      logo?.classList.remove('scrolledlogo');
    }
  }
}
