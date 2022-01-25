import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarketService } from '../../services/market.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(
    private marketService: MarketService
  ) { }

  ngOnInit(): void { }

  login() {
    this.marketService.getAccessToken()
      .subscribe(token => {
        localStorage.setItem('token', token);
        this.isLoggedIn = true;
        this.loggedIn.emit(this.isLoggedIn);
      },
      err => {
        console.log(err);
      });
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.loggedIn.emit(this.isLoggedIn);
  }

}
