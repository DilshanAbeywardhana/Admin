import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
// import { AngularFirestore} from '@angular/fire/firestore';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/train_1.jpg',
                label: 'First slide label',
                text:
                    'Sri lankan railway'
            },
            {
                imagePath: 'assets/images/train_2.jpg',
                label: 'Second slide label',
                text: 'Sri lankan railway'
            },
            {
                imagePath: 'assets/images/train_3.jpg',
                label: 'Third slide label',
                text:
                    'Sri lankan railway'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    // add(){
    //     console.log("working button")
    //     this.afs.collection('new').add({
    //         'name' : "dilshan",
            
    //     }).then(_=>{
    //         alert("inserted");
    //     });
    // }
}
