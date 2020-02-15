import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoveTrainComponent } from './remove-train.component';

const routes: Routes = [
  {
    path: '', component: RemoveTrainComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveTrainRoutingModule { }
