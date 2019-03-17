import { Component } from '@angular/core';
import { MainService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix';
  currentPage: string;
  constructor(private mainService: MainService) {
    // to test connection with server
    mainService.getTestData().subscribe(val => {
      console.log(val);
    });
    this.currentPage = 'home';
  }
  changePage(page) {
    this.currentPage = page;
  }
}
