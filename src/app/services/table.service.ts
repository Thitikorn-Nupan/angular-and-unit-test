import { Injectable } from '@angular/core';
import { Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public dataMonths : Subject<string[]>;
  public daysService : string [] = [];

  private months : string[] = ["January", "February", "March", "April"]

  constructor() {
    // Observables working on unit test but hard way
    this.dataMonths = new Subject<string[]>();
    this.dataMonths.next(this.months)
  }

  public addDay(day: string) {
    this.daysService.push(day);
  }

}
