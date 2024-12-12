import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
navigateToContact() {
  this.router.navigate(['/contact']);
}

  @Input() text: string = 'Empowering Innovation, Driving Solutions, Building the Future.'; 
  @Input() typingSpeed: number = 90;
  displayedText: string = '';
  private currentIndex: number = 0; 
  constructor(private router: Router) {}
  private type(): void {
    if (this.currentIndex < this.text.length) {
      this.displayedText += this.text[this.currentIndex];
      this.currentIndex++;
      setTimeout(() => this.type(), this.typingSpeed);
    }
  }

  @Input() targetCount: number = 100; 
  @Input() duration: number = 1000; 
  currentCount1: number = 0;
  currentCount2: number = 0;
  currentCount3: number = 0;

  ngOnInit(): void {

    this.type();
  }

  startCounting(): void {
    const stepTime = Math.abs(Math.floor(this.duration / this.targetCount));
    let current1 = 0;
    let current2 = 0;
    let current3 = 0;
    const timer = setInterval(() => {
      current1++;
      this.currentCount1 = current1;
      if (current1 === 2) {
        clearInterval(timer);
      }
    }, stepTime);

    const timer2 = setInterval(() => {
      current2++;
      this.currentCount2 = current2;
      if (current2 === 99) {
        clearInterval(timer2);
      }
    }, stepTime);

    const timer3 = setInterval(() => {
      current3++;
      this.currentCount3 = current3;
      if (current3 === 45) {
        clearInterval(timer3);
      }
    }, stepTime);
  }

  ngAfterViewInit(): void {
    const target = document.getElementById('compnums');

    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.startCounting();
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
      );

      observer.observe(target);
    }
  }

}
