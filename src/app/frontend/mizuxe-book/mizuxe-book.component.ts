import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-mizuxe-book',
  templateUrl: './mizuxe-book.component.html',
  styleUrls: ['./mizuxe-book.component.scss']
})
export class MizuxeBookComponent implements OnInit, AfterViewInit {
  wow = new WOW({ live: false });
  isNavbarCollapsed = true;
  showEffectCard = false;
  arrayUsers: any[] = [
    {
      name: 'Susan Martin',
      image: '../../../assets/users/user2.jpg',
      ocupation: 'Lead Writer',
      description: 'Thus, our report can be better geared towards the monitoring and evaluation of its commitments.',
    },
    {
      name: 'Jessic Loaren',
      image: '../../../assets/users/user3.jpg',
      ocupation: 'Photographer',
      description: 'Thus, our report can be better geared towards the monitoring and evaluation of its commitments.',
    },
    {
      name: 'Martin Yelish',
      image: '../../../assets/users/user4.jpg',
      ocupation: 'Builder',
      description: 'Thus, our report can be better geared towards the monitoring and evaluation of its commitments.',
    },
    {
      name: 'Tom Kat',
      image: '../../../assets/users/user5.jpg',
      ocupation: 'Baseball Player',
      description: 'Thus, our report can be better geared towards the monitoring and evaluation of its commitments.',
    }

  ];
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wow.init();
  }

  getSafeImage(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }

}
