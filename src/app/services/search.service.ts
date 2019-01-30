import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor (private httpClient: HttpClient) { }

  url = 'https://www.googleapis.com/youtube/v3/search';
  apiKey = 'AIzaSyC7XqLu8D3YNelLD7YXsHYZXsdugeHcf6M';

  searchVideo(video) {
    const params = new HttpParams().set('part', 'snippet').set('maxResults', '6').set('q', video).set('key', this.apiKey);
    return this.httpClient.get<any>(this.url, {params}).pipe(
      map( results => {
        return results.items;
      })
    );
  }

  trendingVideos() {
    const params = new HttpParams().set('part', 'snippet').set('chart', 'mostPopular').set('regionCode', 'co').set('key', this.apiKey);
    return this.httpClient.get<any>(this.url, {params}).pipe(
      map( results => {
        return results.items;
      })
    );
  }
}
