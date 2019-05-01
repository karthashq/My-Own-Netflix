import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPage: string = 'home';
  @Output() PageChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  checkActive(option) {
    if (this.currentPage === option) {
      return true;
    } else {
      return false;
    }
  }
  changePage(page) {
    this.PageChange.emit(page);
    this.currentPage = page;
  }
}
