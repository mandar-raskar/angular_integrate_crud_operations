import { TestBed } from '@angular/core/testing';

import { CreateformService } from './createform.service';

describe('CreateformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateformService = TestBed.get(CreateformService);
    expect(service).toBeTruthy();
  });
});
