import { Component,ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MaterialComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  email1: string | null=""
  logOnChangedetection() {
    console.log("change in material");
    return true
  }

  getErrorMessage() {
    this.email1 = this.email?.value 
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
