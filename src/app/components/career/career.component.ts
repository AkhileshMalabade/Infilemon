import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
openForm() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLScRw_qv_NxCwohbiguK-B8Dz3-zZAGTaVi_vI0zQRfRvl0-cg/viewform', '_blank');
}
  jobs = [
    {
      title: 'SEO Internship – (6 Month)',
      type: 'Full Time',
      location: 'Remote',
      duration: '3 or 6 months',
      description: `We are seeking a motivated and detail-oriented SEO Intern to join our digital marketing team. This internship will provide hands-on experience in search engine optimization (SEO) strategies and techniques, offering you the opportunity to work on real projects that improve our website’s visibility and performance on search engines.`,
      responsibilities: [
        'Keyword Research: Assist in conducting keyword research to identify relevant search terms.',
        'On-Page SEO: Support in optimizing website pages.',
        'Content Optimization: Collaborate with the content team.',
      ],
      qualifications: 'Graduate Or Post Graduate',
      benefits: [
        'Gain hands-on experience with real SEO projects.',
        'Mentorship and guidance from experienced SEO professionals.',
        'Flexible working hours.',
      ],
    },
    {
      title: 'Social Media Marketing Internship – (6 Month)',
      type: 'Full Time',
      location: 'Remote',
      duration: '6 months',
      description: 'Exciting internship opportunity to learn social media strategy, content creation, and analytics!',
      responsibilities: [
        'Create engaging social media content.',
        'Analyze and improve campaign performance.',
        'Collaborate with cross-functional teams.',
      ],
      qualifications: 'Passionate about social media marketing.',
      benefits: [
        'Practical experience with leading tools.',
        'Guidance from industry professionals.',
        'Letter of recommendation.',
      ],
    },
    {
      title: 'UI/UX Design Internship – (6 Month)',
      type: 'Full Time',
      location: 'Remote',
      duration: '6 months',
      description: `We are seeking a motivated and detail-oriented UI/UX intern to join our digital marketing team. This internship will provide hands-on experience in UI/UX design strategies and techniques, offering you the opportunity to work on real projects that improve our website’s visibility and performance on search engines.`,
      responsibilities: [
        'Develop and implement UI/UX design solutions for businesses.',
        'Collaborate with cross-functional teams.',
      ],
      qualifications: 'Graduate Or Post Graduate',
      benefits: [
        'Gain hands-on experience with real UI/UX design projects.',
        'Mentorship and guidance from experienced UI/UX professionals.',
        'Flexible working hours.',
      ],
    },
    {
      title: 'Web Development Internship – (6 Month)',
      type: 'Full Time',
      location: 'Remote',
      duration: '6 months',
      description: `We are seeking a motivated and detail-oriented web development intern to join our digital marketing team. This internship will provide hands-on experience in web development strategies and techniques, offering you the opportunity to work on real projects that improve our website’s visibility and performance on search engines.`,
      responsibilities: [
        'Develop and implement web development solutions for businesses.',
        'Collaborate with cross-functional teams.',
      ],
      qualifications: 'Graduate Or Post Graduate',
      benefits: [
        'Gain hands-on experience with real web development projects.',
        'Mentorship and guidance from experienced web development professionals.',
        'Flexible working hours.',
      ],
    },
  ];

  selectedJob: any = null;

  openPopup(job: any) {
    this.selectedJob = job;
  }

  closePopup() {
    this.selectedJob = null;
  }
}

