import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewAdminRoutingModule } from './add-new-admin-routing.module';
import { AddNewAdminComponent } from './add-new-admin.component';

@NgModule({
  declarations: [AddNewAdminComponent],
  imports: [
    CommonModule,
    AddNewAdminRoutingModule
  ]
})
export class AddNewAdminModule { }
