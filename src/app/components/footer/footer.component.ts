import { Component, OnInit } from '@angular/core';

type SocialLink = {
  icon: string;
  link: string;
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  readonly year: number;

  readonly socials: SocialLink[] = [
    {
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/thesteamorg',
    },
    {
      icon: 'fab fa-facebook',
      link: 'https://www.facebook.com/The-STEAM-Org-272003671322024',
    },
    {
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/company/the-steam-org/',
    },
  ];

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {}
}
