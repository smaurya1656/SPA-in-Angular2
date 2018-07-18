import { TestBed, inject } from '@angular/core/testing';

import { ServicService } from './servic.service';

describe('ServicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicService]
    });
  });

  it('should be created', inject([ServicService], (service: ServicService) => {
    expect(service).toBeTruthy();
  }));
});
