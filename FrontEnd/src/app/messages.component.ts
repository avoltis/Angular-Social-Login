import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'messages',
    template: `
    <div *ngFor="let message of apiService.messages">
        <mat-card>{{message.message}}</mat-card>
    </div>
`
})
export class MessagesComponent {

    constructor(private apiService: ApiService) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.apiService.getMessages();
    }
}
