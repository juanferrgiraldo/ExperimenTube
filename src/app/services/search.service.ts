import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor (private httpClient: HttpClient) { }

  url = 'https://www.googleapis.com/youtube/v3/search';
  token = 'AIzaSyCHh9YbOFcP6-ZlSoh7D-FN35I0Aqx2LCE';

  searchVideo(video) {
    const params = new HttpParams().set('part', 'snippet').set('maxResults', '6').set('q', video).set('key', this.token);
    return this.httpClient.get<any>(this.url, {params}).pipe(
      map( results => {
        console.log(results.items);
        return results.items;
      })
    );
  }

  trendingVideos() {
    const params = new HttpParams().set('part', 'snippet').set('chart', 'mostPopular').set('regionCode', 'co').set('key', this.token);
    return this.httpClient.get<any>(this.url, {params}).pipe(
      map( results => {
        console.log(results);
        return results.items;
      })
    );
  }
}
