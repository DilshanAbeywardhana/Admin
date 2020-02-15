import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'
import { AddNewAdminService } from './shared/add-new-admin.service'

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { from } from 'rxjs';
// import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ReactiveFormsModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,],
    providers: [AddNewAdminService]
})
export class LayoutModule {}
