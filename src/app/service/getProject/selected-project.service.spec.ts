import { TestBed } from '@angular/core/testing';

import { SelectedProjectService } from './selected-project.service';

describe('SelectedProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedProjectService = TestBed.get(SelectedProjectService);
    expect(service).toBeTruthy();
  });
});
