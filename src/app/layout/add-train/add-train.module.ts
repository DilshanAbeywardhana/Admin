import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTrainRoutingModule } from './add-train-routing.module';
import { AddTrainComponent } from './add-train.component';

@NgModule({
  declarations: [AddTrainComponent],
  imports: [
    CommonModule,
    AddTrainRoutingModule
  ]
})
export class AddTrainModule { }
