import { TestBed } from '@angular/core/testing';

import { FullstoryClientService } from './fullstory-client.service';

describe('FullstoryClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullstoryClientService = TestBed.get(FullstoryClientService);
    expect(service).toBeTruthy();
  });
});
