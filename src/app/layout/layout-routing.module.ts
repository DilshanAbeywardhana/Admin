import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'add-train', loadChildren: () => import('./add-train/add-train.module').then(m => m.AddTrainModule) },
            { path: 'add-new-admin', loadChildren: () => import('./add-new-admin/add-new-admin.module').then(m => m.AddNewAdminModule) },
            { path: 'remove-train', loadChildren: () => import('./remove-train/remove-train.module').then(m => m.RemoveTrainModule) },
            { path: 'admin-list', loadChildren: () => import('./admin-list/admin-list.module').then(m => m.AdminListModule) },
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
