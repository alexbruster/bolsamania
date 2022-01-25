import { Component, OnInit } from '@angular/core';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLoggedIn = false;
  quotes: any;
  isLoading = false;

  constructor(
    private marketService: MarketService,
  ) { }

  ngOnInit(): void { }

  async loggedIn (isLogged: boolean) {
    this.isLoading = true;
    if(isLogged) {
      const data = await this.marketService.getQuotes()
      .toPromise()
      .then(res => this.quotes = res)
      this.quotes = data;
    }
    this.isLoggedIn = isLogged;
    this.isLoading = false;
  }

}
