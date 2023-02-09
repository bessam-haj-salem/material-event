import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedirectionComponent  {
 

  constructor(private router: Router) {}
  logOnChangedetection() {
    console.log("change in Redirection");
    return true
  }

  redirect() {
    
    this.router.navigate(['target'])
  }
}
