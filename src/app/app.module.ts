import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetModule } from '@rx-angular/template/let';
import { PushModule } from '@rx-angular/template/push';
import { MaterialComponent } from './material/material.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TargetComponent } from './target/target.component'
@NgModule({
  declarations: [AppComponent, MaterialComponent, RedirectionComponent, TargetComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LetModule,
    PushModule,
    MatFormFieldModule,
    MatInputModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
