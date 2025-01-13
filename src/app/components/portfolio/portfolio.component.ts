import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  private scrollInterval: any; // For controlling the scroll
  private scrollSpeed: number = 1; // Speed of scrolling
  private scrollPos: number = 0; // Current scroll position

  startScrolling(id: number): void {
    const container = document.querySelector('.id-' + id) as HTMLElement;
    const img = container.querySelector('img') as HTMLElement;

    const containerHeight = container.clientHeight;
    const imgHeight = img.clientHeight;
    const maxScroll = imgHeight - containerHeight; // Maximum scrollable distance

    // Clear any ongoing scroll
    clearInterval(this.scrollInterval);

    // Smoothly reset the position
    img.style.transition = 'transform 0.5s ease-out';
    img.style.transform = `translateY(${this.scrollPos}px)`;
    
    // Start the scroll
    this.scrollInterval = setInterval(() => {
      this.scrollPos += this.scrollSpeed; // Increase scroll position
      img.style.transform = `translateY(-${this.scrollPos}px)`; // Update the position
      if (this.scrollPos >= maxScroll) { // Check if reached the end
        this.scrollPos = maxScroll; // Reset position
        clearInterval(this.scrollInterval); // Stop the scroll
      }
    }, 10);

  }


  stopScrolling(id:number): void {
    const img = document.querySelector('.id-' + id + ' img') as HTMLElement;

    // Clear any ongoing scroll
    clearInterval(this.scrollInterval);

    // Smoothly reset the position
    img.style.transition = 'transform 0.5s ease-out';
    img.style.transform = `translateY(0)`;

    // Reset variables after animation
    setTimeout(() => {
      img.style.transition = ''; // Remove transition for next scroll
      this.scrollPos = 0; // Reset position
    }, 500); // Match the transition duration
  }

  sites = [
    {
      id:2,
      name: 'Website 2',
      url: 'M Box Industries',
      image: 'https://i.postimg.cc/cHpvdP10/Screenshot-13-1-2025-231334-nuagecx-com-4.jpg',
    },
    {
      id:3,
      name: 'Website 3',
      url: 'Kanade Advertising',
      image: 'https://i.postimg.cc/zvntXZNr/Screenshot-13-1-2025-234835-blog-raynatours-com-1.jpg',
    },
    {
      id:4,
      name: 'Website 4',
      url: 'Ojas Tax',
      image: 'https://i.postimg.cc/8CrfJLK1/Screenshot-13-1-2025-235617-www-kemhospitalpune-org.jpg',
    },
    {
      id:5,
      name: 'Website 5',
      url: 'Chandrakala Tea',
      image: 'https://i.postimg.cc/CKdRqX7T/Screenshot-13-1-2025-23584-alcorfund-com-1-1.jpg',
    },
    {
      id:6,
      name: 'Website 6',
      url: 'Wingkart Apparel',
      image: 'https://i.postimg.cc/rpymLb3R/Screenshot-14-1-2025-0153-hiddencreekevents-com-2.jpg',
    },
    {

      id:1,
      name: 'Website 1',
      url: 'iCHALKARANJI NEWS24',
      image: 'https://i.postimg.cc/0yDJshnG/Screenshot-12-12-2024-162530-ichalkaranjinews24-com.jpg',
    }
];



}
