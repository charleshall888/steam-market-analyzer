import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goPortfolio() {
    window.location.href='https://charliemhall.com/';
}
goDataSource() {
  window.location.href='https://www.kaggle.com/datasets/tamber/steam-video-games';
}

}
