import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from 'body-parser';
import { identity } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  showDivWithService: boolean=false;
  navigateToContact() {
    this.router.navigate(['/contact']);
  }


  constructor(private router: Router,private activaterout: ActivatedRoute) {}
  isServiceSelected: boolean = false;
  service:any;
  ngOnInit(): void {

    this.activaterout.params.subscribe(params => {
      const title = params['service'];
      this.showDivWithService = !!title; // Set to true if id exists, otherwise false
      if (this.showDivWithService) {
        this.service = this.services.find(service => service.title.toLowerCase() === title.toLowerCase());
      }
      if(!this.service){
        this.router.navigate(['/services']);
      }
    });
  }


  services = [
    {
      id:1,
      title:'webdevelopment',
      head:'Web development',
      imeage:'https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E',
      description:'Boost Your Online Presence with Infilemon\'s Responsive Website Design Services in India',
      firstpara:'In today\'s digital world, having a website that is accessible on any device is essential. With the growing use of mobile devices to access the internet, it\'s more important than ever to have a website that looks great and functions flawlessly on any screen size.',
      secondpara:'At Infilon, Our team of expert web designers and developers use the latest tools and frameworks to ensure that your website looks great and functions perfectly on any device, whether it\'s a desktop, laptop, tablet, or smartphone.'
    },
    {
      id:2,
      title:'mobileappdevelopment',
      head:'Leading Android app developers in India',
      imeage:'https://shyamfuture.com/wp-content/uploads/2023/07/1720-scaled.jpg',
      description:'Looking for an Experienced Android App Developers in India?',
      firstpara:'Look no further than our skilled team, We only hire the best talent in the Industry. We offer flexible hiring models to meet your specific needs, whether you need a dedicated Android developer on a full-time, part-time, or hourly basis.',   
      secondpara:'We are a leading Android app development company in India, We have a team of highly skilled and experienced Android developers who are passionate about creating innovative and high-quality apps. We offer a wide range of services, including app development, app design, and app testing, to help you build your app and reach your goals.'
    },
    {
      id: 3,
      title: 'itservices',
      head: 'Comprehensive IT Services in India',
      imeage: 'https://www.telxcomputers.com/wp-content/uploads/2018/06/Why-Online-Comparison-of-Different-IT-companies-in-Miami-is-Crucial.jpg',
      description: 'Transform Your Business with Cutting-Edge IT Solutions from Our Expert Team',
      firstpara: 'Our IT services are designed to meet the diverse needs of modern businesses. From infrastructure management to cloud computing, we provide solutions tailored to enhance your operational efficiency.',
      secondpara: 'Whether you need round-the-clock IT support, system integration, or advanced cybersecurity measures, our experienced team is here to help you achieve your business goals with confidence.'
    },
    {
      id: 4,
      title: 'seo',
      head: 'Top-Notch SEO Services for Your Business',
      imeage: 'https://www.dynamicsalessolutions.co.uk/wp-content/uploads/2023/08/Local-SEO.jpg',
      description: 'Boost Your Online Visibility with Our Expert SEO Services',
      firstpara: 'Our SEO specialists use data-driven strategies to help your business rank higher in search engine results. We focus on optimizing your website to attract and convert the right audience.',
      secondpara: 'From keyword research to content optimization and link-building, our services ensure that your business stays ahead in the competitive digital landscape and reaches its full potential.'
    }    
  ];
}