import { TestBed } from '@angular/core/testing';

import { WebresquestService } from './webresquest.service';

describe('WebresquestService', () => {
  let service: WebresquestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebresquestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
