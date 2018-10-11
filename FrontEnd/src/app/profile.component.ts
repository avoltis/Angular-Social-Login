import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login',
    template: `
        <mat-card>
        <mat-card-header>
            <mat-card-title>
                <h4>Profile</h4>
            </mat-card-title>
        </mat-card-header>
            <mat-list>
                <mat-list-item>Name: Voltis</mat-list-item>
                <mat-list-item>Email: {{profile?.email}}</mat-list-item>
            </mat-list>
        <mat-card-content>
        </mat-card-content>
        </mat-card>
  `
})

export class ProfileComponent {

    constructor(private apiservice: ApiService, private route: ActivatedRoute) { }

    profile;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        // tslint:disable-next-line:prefer-const
        let id = this.route.snapshot.params.id;
        this.apiservice.getProfile(id).subscribe(data => this.profile = data.json());
    }
}
