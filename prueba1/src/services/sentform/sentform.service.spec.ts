import { TestBed } from '@angular/core/testing';

import { SentformService } from './sentform.service';

describe('SentformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentformService = TestBed.get(SentformService);
    expect(service).toBeTruthy();
  });
});
