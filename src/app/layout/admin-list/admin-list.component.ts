import { Component, OnInit } from '@angular/core';
import { AddNewAdminService } from '../shared/add-new-admin.service'
import { AddNewAdminComponent } from '../add-new-admin/add-new-admin.component';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  constructor(private addNewAdmin: AddNewAdminService) { }

  ngOnInit() {
    // this.addNewAdmin.getAdmins();
  }

}
