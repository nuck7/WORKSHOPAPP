import { TestBed, inject } from '@angular/core/testing';

import { VideoLoaderService } from './video-loader.service';

describe('VideoLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoLoaderService]
    });
  });

  it('should be created', inject([VideoLoaderService], (service: VideoLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
