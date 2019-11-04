import { AppShareModule } from './../app-share/app-share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { MizuxeBookComponent } from './mizuxe-book/mizuxe-book.component';

@NgModule({
  declarations: [
    MizuxeBookComponent
  ],
  imports: [
    CommonModule,
    AppShareModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
