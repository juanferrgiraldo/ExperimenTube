import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../services/search.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  trendVideoList = [];
  @Input() searchVideoList;
  @Input() shouldMount;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    if (!this.shouldMount) {
      this.searchService.trendingVideos().subscribe(
        results => {
          this.trendVideoList = results;
        }
      );
    }
  }

}
