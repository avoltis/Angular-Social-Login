import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'messages',
    template: `
    <div *ngFor="let message of apiService.messages">
        <mat-card>{{message.msg}}</mat-card>
    </div>
`
})
export class MessagesComponent {

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        // tslint:disable-next-line:prefer-const
        let userId = this.route.snapshot.params.id;
        this.apiService.getMessages(userId);
    }
}
