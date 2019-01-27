import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit, OnChanges {
  @Input() video: any;
  baseUrl = 'https://www.youtube.com/embed/';
  url: any;
  constructor() { }

  ngOnInit() {
    this.url = this.baseUrl + this.video.id.videoId + '?autoplay=1';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }


}
