import { TestBed } from '@angular/core/testing';

import { FullstoryServerService } from './fullstory-server.service';

describe('FullstoryServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullstoryServerService = TestBed.get(FullstoryServerService);
    expect(service).toBeTruthy();
  });
});
