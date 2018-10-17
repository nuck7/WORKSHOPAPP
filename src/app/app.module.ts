import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoEmbedderComponent } from './video-embedder/video-embedder.component';
import { ViewBreakdownComponent } from './view-breakdown/view-breakdown.component';
import { ViewFilterComponent } from './view-filter/view-filter.component';
import { VideoPreviewComponent } from './video-preview/video-preview.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppState, filterReducer, videoListReducer, selectedVideoIdReducer } from './state';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoEmbedderComponent,
    ViewBreakdownComponent,
    ViewFilterComponent,
    VideoPreviewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({
      videoList: videoListReducer,
      selectedVideoId: selectedVideoIdReducer,
      filter: filterReducer,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
