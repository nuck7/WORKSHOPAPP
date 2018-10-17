import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Video, Filter } from './app.types';
import { VideoLoaderService } from './video-loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}