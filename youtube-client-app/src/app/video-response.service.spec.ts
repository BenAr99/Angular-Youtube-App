import { TestBed } from '@angular/core/testing';

import { VideoResponseService } from './video-response.service';

describe('VideoResponseService', () => {
  let service: VideoResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
