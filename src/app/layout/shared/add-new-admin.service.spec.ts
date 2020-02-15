import { TestBed } from '@angular/core/testing';

import { AddNewAdminService } from './add-new-admin.service';

describe('AddNewAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewAdminService = TestBed.get(AddNewAdminService);
    expect(service).toBeTruthy();
  });
});
