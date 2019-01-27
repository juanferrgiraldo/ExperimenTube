import { Component, OnInit } from '@angular/core';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchField = '';
  videoList = [];
  haveSearched = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchVideo() {
    this.haveSearched = true;
    this.searchService.searchVideo(this.searchField).subscribe(
      results => {
        this.videoList = results;
        console.log(this.videoList);
      }
    );
  }

}
