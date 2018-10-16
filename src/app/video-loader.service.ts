import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './app.types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) {
  }

  loadVideos():Observable<Video[]> {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos')
  }
}