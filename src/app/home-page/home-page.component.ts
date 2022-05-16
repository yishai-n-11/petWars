import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  links = ['gameBoard', 'leaderBoard'];
  activeLink = this.links[0];

  ngOnInit(): void {}

  handleNav(link: string) {
    this.activeLink = link;
  }
}
