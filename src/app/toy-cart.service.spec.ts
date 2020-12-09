import { TestBed } from '@angular/core/testing';

import { ToyCartService } from './toy-cart.service';

describe('ToyCartService', () => {
  let service: ToyCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToyCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
