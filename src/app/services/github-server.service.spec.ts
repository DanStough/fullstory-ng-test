import { TestBed } from '@angular/core/testing';

import { GithubServerService } from './github-server.service';

describe('GithubServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubServerService = TestBed.get(GithubServerService);
    expect(service).toBeTruthy();
  });
});
