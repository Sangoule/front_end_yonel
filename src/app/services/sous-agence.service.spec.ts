import { TestBed } from '@angular/core/testing';

import { SousAgenceService } from './sous-agence.service';

describe('SousAgenceService', () => {
  let service: SousAgenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousAgenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
