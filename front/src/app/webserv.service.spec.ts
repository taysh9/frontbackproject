import { TestBed } from '@angular/core/testing';

import { WebservService } from './webserv.service';

describe('WebservService', () => {
  let service: WebservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
