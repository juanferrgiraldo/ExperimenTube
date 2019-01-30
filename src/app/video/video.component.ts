import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../services/search.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() searchVideoList: any;
  @Input() shouldMount: any; // Lets know if the user have searched a video
  title = 'Most Popular';
  currentVideo: {};
  mountedVideo = false;  // Checks if there are any video to show
  constructor(private searchService: SearchService) { }

  /**The 'ngOnInit' livecycle hook is used to call @function mostPopular */
  ngOnInit() {
    this.mostPopular();
  }

  /**This function gets the @param video
   * when the user clicks over it to play it*/
  setCurrentVideo(video) {
    this.mountedVideo = true;
    this.currentVideo = video;
    console.log(this.currentVideo);
  }

  /**This function calls the 'trendingVideos' service and get the @returns results.
   * Then a radom video is selected to put it on the @Component play-video*/
  mostPopular() {
    if (!this.shouldMount) {
      this.searchService.trendingVideos().subscribe(
        results => {
          this.searchVideoList = results;
          this.currentVideo = this.searchVideoList[Math.floor(Math.random() * Math.floor(5))];
          this.mountedVideo = true;
          console.log(this.currentVideo);
          console.log(this.searchVideoList);
        }
      );
    } else {
      this.title = 'Found videos';
    }
  }

}
