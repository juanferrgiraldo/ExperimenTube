import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../services/search.service';
import { log } from 'util';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() searchVideoList: any;
  @Input() shouldMount: any;
  currentVideo: {};
  clickedVideo = false;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    if (!this.shouldMount) {
      this.searchService.trendingVideos().subscribe(
        results => {
          this.searchVideoList = results;
          console.log(this.searchVideoList);
        }
      );
    }
  }

  setCurrentVideo(video) {
    this.clickedVideo = true;
    this.currentVideo = video;
    console.log(this.currentVideo);
  }

}
