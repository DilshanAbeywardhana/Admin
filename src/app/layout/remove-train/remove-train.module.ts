import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveTrainRoutingModule } from './remove-train-routing.module';
import { RemoveTrainComponent } from './remove-train.component';

@NgModule({
  declarations: [RemoveTrainComponent],
  imports: [
    CommonModule,
    RemoveTrainRoutingModule
  ]
})
export class RemoveTrainModule { }
