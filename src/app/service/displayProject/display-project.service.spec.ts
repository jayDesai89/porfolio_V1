import { TestBed } from '@angular/core/testing';

import { DisplayProjectService } from './display-project.service';

describe('DisplayProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayProjectService = TestBed.get(DisplayProjectService);
    expect(service).toBeTruthy();
  });
});
