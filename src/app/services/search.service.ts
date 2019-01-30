import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Constants } from '../constants';

@Injectable()
export class SearchService {
  constructor (private httpClient: HttpClient) { }

  searchVideo(video) {
    const params = new HttpParams().set('part', 'snippet').set('maxResults', '6').set('q', video).set('key', Constants.APIK);
    return this.httpClient.get<any>(Constants.URL, {params}).pipe(
      map( results => {
        return results.items;
      })
    );
  }

  trendingVideos() {
    const params = new HttpParams().set('part', 'snippet').set('chart', 'mostPopular').set('regionCode', 'co').set('key', Constants.APIK);
    return this.httpClient.get<any>(Constants.URL, {params}).pipe(
      map( results => {
        return results.items;
      })
    );
  }
}
