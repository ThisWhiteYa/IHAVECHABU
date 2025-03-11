import { TestBed } from '@angular/core/testing';

import { ManageStateService } from './manage-state.service';

describe('ManageStateService', () => {
  let service: ManageStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
