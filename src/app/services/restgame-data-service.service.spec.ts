import { TestBed } from '@angular/core/testing';

import { RESTGameDataServiceService } from './restgame-data-service.service';

describe('RESTGameDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RESTGameDataServiceService = TestBed.get(RESTGameDataServiceService);
    expect(service).toBeTruthy();
  });
});
