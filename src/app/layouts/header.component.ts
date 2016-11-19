import { Component, OnInit }            from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class headerComponent implements OnInit {
    constructor() { }
heroes = [
  new Hero('Home', '/home'),
  new Hero('Support', '/support'),
  new Hero('About Us', '/aboutus'),
  new Hero('Blog', '/blog'),
  new Hero('Contact Us', '/contact')
];
    ngOnInit(): void {}
}

export class Hero {
  constructor(
    public name: string,
    public url: string) { }
}