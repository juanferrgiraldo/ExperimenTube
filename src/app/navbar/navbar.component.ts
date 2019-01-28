import { Component, OnInit } from '@angular/core';
import { SearchService } from './../services/search.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchField = '';
  faSearch = faSearch;
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
