import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departament-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
        <li (click)="onSelect(department)" *ngFor="let department of departments">
            <span class="badge">{{department.id}}</span>{{department.name}}
        </li>
    </ul>
  `,
  styles: []
})
export class DepartamentListComponent implements OnInit {

    departments = [
        {"id":1, "name": "Angular"},
        {"id":2, "name": "None"},
        {"id":3, "name": "MongoDB"},
        {"id":4, "name": "Ruby"},
        {"id":5, "name": "Bootstrap"}
    ]

    constructor(private router: Router) { }

    onSelect(department){
        this.router.navigate(['/departments', department.id]);
    }


    ngOnInit() {
    }

}
