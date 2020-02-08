import { TestBed } from '@angular/core/testing';

import { RESTGameDataService } from './restgame-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('RESTGameDataService', () => {
  beforeEach(async() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [RESTGameDataService]
  }));

  it('should be created', () => {
    const service: RESTGameDataService = TestBed.get(RESTGameDataService);
    expect(service).toBeTruthy();
  });
});
