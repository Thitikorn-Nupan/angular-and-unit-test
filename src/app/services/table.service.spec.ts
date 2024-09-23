import {TestBed} from '@angular/core/testing';

import {TableService} from './table.service';

describe('TableService', () => {
  let service: TableService;
  beforeEach(async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableService);
  });

  it('should be created TableService', () => {
    expect(service).toBeTruthy();
  });

  it(`should daysService.length as 1`, () => {
    service.addDay("Monday")
    expect(service.daysService.length).toEqual(1);
  })

});
