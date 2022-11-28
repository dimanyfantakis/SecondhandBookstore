import { TestBed } from '@angular/core/testing';

import { ItbookstoreService } from './itbookstore.service';

describe('ItbookstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItbookstoreService = TestBed.get(ItbookstoreService);
    expect(service).toBeTruthy();
  });
});
