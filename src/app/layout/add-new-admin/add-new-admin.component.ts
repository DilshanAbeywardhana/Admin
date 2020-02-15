import { Component, OnInit } from '@angular/core';
import { AddNewAdminService } from '../shared/add-new-admin.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.scss']
})
export class AddNewAdminComponent implements OnInit {

  constructor(private AddNewAdminService: AddNewAdminService) { }
  submitted: boolean;
  showSuccessMassage: boolean; 
  formControls = this.AddNewAdminService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    if(this.AddNewAdminService.form.valid){
      if(this.AddNewAdminService.form.get('$key').value == null)
        // this.AddNewAdminService.insertAdmin(this.AddNewAdminService.form.value)
        this.showSuccessMassage = true;
        setTimeout(() => this.showSuccessMassage = false, 3000);
      this.submitted = false;
    }
  }

}
