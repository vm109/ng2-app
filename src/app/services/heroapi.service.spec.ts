import { TestBed } from '@angular/core/testing';

import { HeroapiService } from './heroapi.service';

describe('HeroapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroapiService = TestBed.get(HeroapiService);
    expect(service).toBeTruthy();
  });
});
