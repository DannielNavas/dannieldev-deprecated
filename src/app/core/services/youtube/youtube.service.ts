import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Youtube } from '@core/models/youtube/youtube';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private http: HttpClient) {}

  getLastesYoutubeVideos(): Observable<Youtube> {
    return this.http.get<Youtube>(
      `${environment.youtube_endpoint}?part=${environment.youtube_part}&channelId=${environment.youtube_channel}&maxResults=5&order=date&key=${environment.youtube_key}`
    );
  }
}
