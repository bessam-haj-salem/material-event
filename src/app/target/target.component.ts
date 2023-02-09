import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetComponent {
  logOnChangedetection() {
    console.log("change in target");
    return true
  }

}
