import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  public mockObs$ = interval(2000);
  constructor() { }
}
