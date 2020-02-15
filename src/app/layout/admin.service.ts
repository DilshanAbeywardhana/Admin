import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
// import {AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(){ }
  // constructor(private firebase: AngularFireDatabase) { }
  // adminList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email)
  });

  // getAdmin(){
  //   this.adminList = this.firebase.list('Admin');
  //   return this.adminList.snapshotChanges();
  // }

  // insertAdmin(admin){
  //   this.adminList.push({
  //      username: admin.username,
  //      password: admin.password,
  //      email: admin.email
  //   });
  // }
}
