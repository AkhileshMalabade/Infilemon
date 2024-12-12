import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

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
      const id = params['id'];
      this.showDivWithService = !!id; // Set to true if id exists, otherwise false
      if (this.showDivWithService) {
        this.service = this.services.find(service => service.id === +id);
      }
    });
  }


  services = [
    {id:1,
      title:''
    }
  ];
}